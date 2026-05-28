import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ZohoLeadData {
  Last_Name: string;
  First_Name?: string;
  Company: string;
  Email?: string;
  Phone?: string;
  Description?: string;
  Lead_Source?: string;
}

// Function to refresh the access token for Zoho
async function getZohoAccessToken(): Promise<string> {
  const url = 'https://accounts.zoho.in/oauth/v2/token';
  
  const client_id = process.env.ZOHO_CLIENT_ID;
  const client_secret = process.env.ZOHO_CLIENT_SECRET;
  const refresh_token = process.env.ZOHO_REFRESH_TOKEN;

  if (!client_id || !client_secret || !refresh_token) {
    throw new Error('Missing Zoho credentials in environment variables');
  }

  const params = new URLSearchParams({
    refresh_token,
    client_id,
    client_secret,
    grant_type: 'refresh_token',
  });

  const response = await fetch(`${url}?${params.toString()}`, {
    method: 'POST',
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to refresh Zoho access token: ${response.statusText}`);
  }

  const data = await response.json();
  if (!data.access_token) {
    throw new Error(`Failed to get access token from Zoho response: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

// Function to send email notification via Nodemailer
async function sendEmailNotification(subject: string, htmlContent: string) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  // Default fallback email if not configured
  const emailTo = process.env.EMAIL_TO || 'ayazofficial786@gmail.com'; 

  if (!emailUser || !emailPass) {
    console.warn('Nodemailer skipped: EMAIL_USER or EMAIL_PASS not set in environment.');
    return false;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"Safari Web Inquiry" <${emailUser}>`,
    to: emailTo,
    subject: subject,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Nodemailer: Lead email successfully dispatched to ${emailTo}`);
    return true;
  } catch (error) {
    console.error('Nodemailer error:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, date, guests, serviceName, source } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    // Split name into First Name and Last Name for Zoho
    const nameParts = name.trim().split(/\s+/);
    let firstName = '';
    let lastName = nameParts[0];

    if (nameParts.length > 1) {
      lastName = nameParts[nameParts.length - 1];
      firstName = nameParts.slice(0, -1).join(' ');
    }

    const company = serviceName || 'General Enquiry';

    // Compile description text
    let description = '';
    if (source === 'booking') {
      description = `Safari Booking Request:
- Service/Zone: ${serviceName}
- Date: ${date || 'Not specified'}
- Guests: ${guests || 'Not specified'}`;
    } else {
      description = `Contact Form Submission:
- Message: ${message || 'No message provided'}`;
    }

    // --- STRATEGY 1: NODEMAILER (Email Delivery) ---
    // Prepare beautiful HTML Email content for the business owner
    const emailSubject = source === 'booking' 
      ? `🚨 New Booking Request: ${serviceName} from ${name}` 
      : `✉️ New Contact Message from ${name}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        <div style="background-color: #0a180a; padding: 24px; text-align: center; border-bottom: 3px solid #c38b2d;">
          <h2 style="color: #ffffff; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Roam & Roar Safari</h2>
          <p style="color: #c38b2d; margin: 5px 0 0 0; font-size: 12px; font-weight: bold; letter-spacing: 1px;">NEW LEAD CAPTURED</p>
        </div>
        <div style="padding: 24px; background-color: #fafafa;">
          <h3 style="color: #333333; border-bottom: 2px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">Lead Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0; color: #333333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0; color: #333333;"><a href="tel:${phone}" style="color: #c38b2d; text-decoration: none; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0; color: #333333;"><a href="mailto:${email}" style="color: #c38b2d; text-decoration: none;">${email}</a></td>
            </tr>
            ${source === 'booking' ? `
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Selected Zone:</td>
              <td style="padding: 8px 0; color: #333333; font-weight: bold; color: #0a180a;">${serviceName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Expedition Date:</td>
              <td style="padding: 8px 0; color: #333333;">${date || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold;">Guests count:</td>
              <td style="padding: 8px 0; color: #333333;">${guests || 'N/A'}</td>
            </tr>
            ` : `
            <tr>
              <td style="padding: 8px 0; color: #666666; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; color: #333333; white-space: pre-wrap;">${message}</td>
            </tr>
            `}
          </table>
        </div>
        <div style="background-color: #eaeaea; padding: 15px; text-align: center; font-size: 11px; color: #777777;">
          This lead was automatically captured and routed via Nodemailer securely.
        </div>
      </div>
    `;

    // Fire off Nodemailer asynchronously (does not block Zoho response)
    const emailSent = await sendEmailNotification(emailSubject, emailHtml);

    // --- STRATEGY 2: ZOHO CRM ---
    let zohoResult = null;
    let zohoError = null;

    try {
      const accessToken = await getZohoAccessToken();
      const apiDomain = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.in';
      const crmUrl = `${apiDomain}/crm/v6/Leads`;

      const leadRecord: ZohoLeadData = {
        Last_Name: lastName,
        Company: company,
        Lead_Source: 'Website',
      };

      if (firstName) leadRecord.First_Name = firstName;
      if (email) leadRecord.Email = email;
      if (phone) leadRecord.Phone = phone;
      if (description) leadRecord.Description = description;

      const zohoResponse = await fetch(crmUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [leadRecord],
        }),
      });

      zohoResult = await zohoResponse.json();

      if (!zohoResponse.ok || (zohoResult.data && zohoResult.data[0]?.status === 'error')) {
        zohoError = zohoResult;
        console.error('Zoho CRM Lead failed:', JSON.stringify(zohoResult));
      }
    } catch (err: any) {
      zohoError = err.message || err;
      console.error('Zoho CRM execution caught error:', err);
    }

    // Return success if either Nodemailer sent successfully OR Zoho created lead successfully
    if (emailSent || (zohoResult && zohoResult.data && zohoResult.data[0]?.status === 'success')) {
      return NextResponse.json({ 
        success: true, 
        emailSent, 
        zohoSuccess: zohoResult?.data?.[0]?.status === 'success',
        zohoId: zohoResult?.data?.[0]?.details?.id || null 
      });
    }

    // Both strategies failed
    return NextResponse.json(
      { 
        error: 'Failed to process lead fully.', 
        details: { zohoError, emailError: !emailSent ? 'Nodemailer environment config missing or rejected' : null } 
      },
      { status: 500 }
    );
  } catch (error: any) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
