import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

// Function to send email notification via Nodemailer
async function sendEmailNotification(subject: string, htmlContent: string) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  // Default recipient if not specified in environment
  const emailTo = process.env.EMAIL_TO || 'ayazofficial786@gmail.com'; 

  if (!emailUser || !emailPass) {
    throw new Error('Missing Nodemailer email credentials (EMAIL_USER or EMAIL_PASS) in environment variables.');
  }

  // Create transporter using Gmail SMTP
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

  await transporter.sendMail(mailOptions);
  console.log(`Nodemailer: Lead email successfully dispatched to ${emailTo}`);
  return true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, date, guests, serviceName, source } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    // --- FORM DATA PROCESSING ---
    const emailSubject = source === 'booking' 
      ? `🚨 New Booking Request: ${serviceName} from ${name}` 
      : `✉️ New Contact Message from ${name}`;

    // Prepare beautiful HTML Email content for the business owner
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
              <td style="padding: 10px 0; color: #666666; font-weight: bold; width: 140px; border-bottom: 1px solid #eaeaea;">Full Name:</td>
              <td style="padding: 10px 0; color: #333333; border-bottom: 1px solid #eaeaea; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666666; font-weight: bold; border-bottom: 1px solid #eaeaea;">Phone Number:</td>
              <td style="padding: 10px 0; color: #333333; border-bottom: 1px solid #eaeaea;"><a href="tel:${phone}" style="color: #c38b2d; text-decoration: none; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666666; font-weight: bold; border-bottom: 1px solid #eaeaea;">Email Address:</td>
              <td style="padding: 10px 0; color: #333333; border-bottom: 1px solid #eaeaea;"><a href="mailto:${email}" style="color: #c38b2d; text-decoration: none;">${email}</a></td>
            </tr>
            ${source === 'booking' ? `
            <tr>
              <td style="padding: 10px 0; color: #666666; font-weight: bold; border-bottom: 1px solid #eaeaea;">Selected Zone:</td>
              <td style="padding: 10px 0; font-weight: bold; color: #0a180a; border-bottom: 1px solid #eaeaea;">${serviceName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666666; font-weight: bold; border-bottom: 1px solid #eaeaea;">Expedition Date:</td>
              <td style="padding: 10px 0; color: #333333; border-bottom: 1px solid #eaeaea;">${date || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666666; font-weight: bold; border-bottom: 1px solid #eaeaea;">Guests Count:</td>
              <td style="padding: 10px 0; color: #333333; border-bottom: 1px solid #eaeaea;">${guests || 'N/A'} Guests</td>
            </tr>
            ` : `
            <tr>
              <td style="padding: 10px 0; color: #666666; font-weight: bold; vertical-align: top; border-bottom: 1px solid #eaeaea;">Message:</td>
              <td style="padding: 10px 0; color: #333333; white-space: pre-wrap; border-bottom: 1px solid #eaeaea; font-style: italic;">"${message}"</td>
            </tr>
            `}
          </table>
        </div>
        <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 11px; color: #777777; font-weight: bold;">
          This lead was captured and dispatched via Nodemailer.
        </div>
      </div>
    `;

    // Send email via SMTP
    await sendEmailNotification(emailSubject, emailHtml);

    return NextResponse.json({ success: true, message: 'Lead successfully emailed via Nodemailer!' });
  } catch (error: any) {
    console.error('Error in Nodemailer API route:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
