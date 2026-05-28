import { NextResponse } from 'next/server';

interface ZohoLeadData {
  Last_Name: string;
  First_Name?: string;
  Company: string;
  Email?: string;
  Phone?: string;
  Description?: string;
  Lead_Source?: string;
}

// Function to refresh the access token
async function getZohoAccessToken(): Promise<string> {
  const url = 'https://accounts.zoho.in/oauth/v2/token';
  
  const client_id = process.env.ZOHO_CLIENT_ID;
  const client_secret = process.env.ZOHO_CLIENT_SECRET;
  const refresh_token = process.env.ZOHO_REFRESH_TOKEN;

  if (!client_id || !client_secret || !refresh_token) {
    const missing = [];
    if (!client_id) missing.push('ZOHO_CLIENT_ID');
    if (!client_secret) missing.push('ZOHO_CLIENT_SECRET');
    if (!refresh_token) missing.push('ZOHO_REFRESH_TOKEN');
    throw new Error(`Missing Zoho credentials in environment variables: ${missing.join(', ')}`);
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, date, guests, serviceName, source } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    // Split name into First Name and Last Name
    const nameParts = name.trim().split(/\s+/);
    let firstName = '';
    let lastName = nameParts[0];

    if (nameParts.length > 1) {
      lastName = nameParts[nameParts.length - 1];
      firstName = nameParts.slice(0, -1).join(' ');
    }

    // Zoho CRM requires Company. If booking a service, use service name, otherwise general label.
    const company = serviceName || 'General Enquiry';

    // Compile description
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

    // Prepare Zoho CRM Lead payload
    const leadRecord: ZohoLeadData = {
      Last_Name: lastName,
      Company: company,
      Lead_Source: 'Website',
    };

    if (firstName) leadRecord.First_Name = firstName;
    if (email) leadRecord.Email = email;
    if (phone) leadRecord.Phone = phone;
    if (description) leadRecord.Description = description;

    // Get active access token
    const accessToken = await getZohoAccessToken();
    const apiDomain = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.in';
    const crmUrl = `${apiDomain}/crm/v6/Leads`;

    const response = await fetch(crmUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [leadRecord],
      }),
    });

    const result = await response.json();

    if (!response.ok || (result.data && result.data[0]?.status === 'error')) {
      console.error('Zoho Lead creation failed response:', JSON.stringify(result));
      return NextResponse.json(
        { error: 'Failed to create lead in Zoho CRM', details: result },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result.data[0] });
  } catch (error: any) {
    console.error('Error in Zoho API route:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
