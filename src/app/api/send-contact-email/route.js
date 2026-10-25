



// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, email, phone, message } = body;

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, message: 'Please provide name, email, and message.' },
//         { status: 400 }
//       );
//     }

//     // Configure Nodemailer transporter using your SMTP provider
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST || 'smtp.gmail.com',
//       port: Number(process.env.SMTP_PORT) || 465,
//       secure: Number(process.env.SMTP_PORT) === 465,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });



// const htmlContent = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="utf-8">
//           <style>
//             body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
//             .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid rgba(226, 232, 240, 0.9); box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
//             .header { background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; text-align: center; color: #ffffff; }
//             .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
//             .header p { margin: 5px 0 0; font-size: 13px; color: #cbd5e1; opacity: 0.95; }
//             .content { padding: 20px; }
//             .info-box { background: #f8fafc; border-left: 4px solid #1e293b; padding: 12px 15px; border-radius: 4px; margin-bottom: 20px; font-size: 13px; line-height: 1.6; }
//             .message-box { background: #f8fafc; padding: 15px; border-radius: 6px; font-size: 14px; color: #0f172a; line-height: 1.6; margin-top: 15px; border: 1px solid rgba(226, 232, 240, 0.9); }
//             .footer { background: #f8fafc; padding: 15px; text-align: center; font-size: 11px; color: #475569; border-top: 1px solid rgba(226, 232, 240, 0.9); }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h1>SHEALUXE</h1>
//               <p>New Contact Form Submission</p>
//             </div>
//             <div class="content">
//               <div class="info-box">
//                 <strong>Name:</strong> ${name} <br/>
//                 <strong>Email:</strong> ${email} <br/>
//                 <strong>Phone:</strong> ${phone || 'N/A'}
//               </div>
//               <h3 style="font-size: 14px; color: #1e293b; margin-bottom: 5px;">Message:</h3>
//               <div class="message-box">
//                 ${message.replace(/\n/g, '<br/>')}
//               </div>
//             </div>
//             <div class="footer">
//               &copy; ${new Date().getFullYear()} Majinfotek. All rights reserved.
//             </div>
//           </div>
//         </body>
//       </html>
//     `;


//     const mailOptions = {
//       // Must use process.env.SMTP_USER as the actual email to avoid spam flags, 
//       // but you can prepend the customer's name in the display string safely:
//       from: `"${name} via Pinkles" <${process.env.SMTP_USER}>`,
//       to: 'victorndu393@gmail.com',
//       replyTo: email,           // Clicking "Reply" will reply straight to the customer
//       subject: `New Contact Inquiry: ${name}`,
//       html: htmlContent,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true, message: 'Contact email sent successfully.' }, { status: 200 });
//   } catch (error) {
//     console.error('Error sending contact email:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }



import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to turn key names into human-readable labels (e.g., "fullName" -> "Full Name")
function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, ' $1') // insert a space before all caps
    .replace(/_/g, ' ')         // replace underscores with spaces
    .replace(/^./, (str) => str.toUpperCase()) // capitalize the first letter
    .trim();
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Ensure the payload is an object and not empty
    if (!body || typeof body !== 'object' || Object.keys(body).length === 0) {
      return NextResponse.json(
        { success: false, message: 'Form submission body cannot be empty.' },
        { status: 400 }
      );
    }

    // Extract useful metadata (or fallback) for Email Header / Reply-To fields
    const senderName = body.name || body.fullName || body.full_name || 'Website Visitor';
    const senderEmail = body.email || body.emailAddress || body.email_address || process.env.SMTP_USER;
    const formTitle = body.formTitle || body.subject || body.formName || 'New Form Submission';

    // Build dynamic HTML rows for ALL submitted fields
    const dynamicFieldsHtml = Object.entries(body)
      .filter(([key]) => !['formTitle', 'formName'].includes(key)) // Optional: exclude internal meta keys if passed
      .map(([key, value]) => {
        const label = formatLabel(key);
        // Format object values or arrays cleanly if passed
        const formattedValue =
          typeof value === 'object' && value !== null
            ? JSON.stringify(value, null, 2)
            : String(value || 'N/A').replace(/\n/g, '<br/>');

        return `
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px; font-weight: 700; color: #1e293b; width: 35%; vertical-align: top; background: #f8fafc;">
              ${label}
            </td>
            <td style="padding: 10px; color: #334155; vertical-align: top;">
              ${formattedValue}
            </td>
          </tr>
        `;
      })
      .join('');

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid rgba(226, 232, 240, 0.9); box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
            .header { background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 25px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { margin: 5px 0 0; font-size: 13px; color: #cbd5e1; opacity: 0.95; }
            .content { padding: 20px; }
            .table-container { width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; font-size: 13px; border-radius: 6px; overflow: hidden; }
            .footer { background: #f8fafc; padding: 15px; text-align: center; font-size: 11px; color: #475569; border-top: 1px solid rgba(226, 232, 240, 0.9); }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>PINKLES</h1>
              <p>${formTitle}</p>
            </div>
            <div class="content">
              <table class="table-container">
                <tbody>
                  ${dynamicFieldsHtml}
                </tbody>
              </table>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Pinkles Nig Ltd. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: `"${senderName} via Pinkles" <${process.env.SMTP_USER}>`,
      to: 'esomesther@gmail.com',
      replyTo: senderEmail,
      subject: `New Inquiry: ${formTitle} from ${senderName}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending form email:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}