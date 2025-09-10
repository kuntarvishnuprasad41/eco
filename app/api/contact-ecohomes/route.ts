// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const body = await req.json();

//   // Honeypot
//   if (body.website) {
//     return NextResponse.json({ ok: true });
//   }

//   // map formData -> Google Form entry fields
//   const formData = new URLSearchParams();
//   formData.append("entry.382402243", body.name); // Name
//   formData.append("entry.1489392737", body.email); // Email
//   formData.append("entry.1296811649", body.location); // Location
//   formData.append("entry.1395841341", body.contact); // Contact
//   formData.append("entry.1665094489", body.message); // Message

//   try {
//     const res = await fetch(
//       "https://docs.google.com/forms/d/e/1FAIpQLSeBynS9qBqqnhIz777b4Rq-GYiwUTyCCFya-pff9xXKiKVtxg/formResponse",
//       {
//         method: "POST",
//         body: formData,
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       }
//     );

//     if (res.ok) {
//       return NextResponse.json({ ok: true });
//     }
//     return NextResponse.json({ ok: false }, { status: 500 });
//   } catch (err) {
//     return NextResponse.json({ ok: false }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  // Honeypot check
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  // Map formData -> Google Form fields
  const formData = new URLSearchParams();
  formData.append("entry.382402243", body.name); // Name
  formData.append("entry.1489392737", body.email); // Email
  formData.append("entry.1296811649", body.location); // Location
  formData.append("entry.1395841341", body.contact); // Contact
  formData.append("entry.1665094489", body.message); // Message

  try {
    // ✅ 1. Send to Google Form
    const res = await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSeBynS9qBqqnhIz777b4Rq-GYiwUTyCCFya-pff9xXKiKVtxg/formResponse",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // ✅ 2. Setup SMTP transport (Gmail/Zoho/your provider)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // app password
      },
    });

    // ✅ 3. Build HTML email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background:#f9f9f9;">
        <h2 style="color: #333;">📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Location:</strong> ${body.location}</p>
        <p><strong>Contact:</strong> ${body.contact}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; margin: 10px 0; padding-left: 10px; color: #555;">
          ${body.message}
        </blockquote>
        <hr/>
        <small style="color: #999;">This email was sent automatically from your website form.</small>
      </div>
    `;

    // ✅ 4. Send email
    await transporter.sendMail({
      from: `"Website Form" <${process.env.SMTP_USER}>`,
      to: "kuntarvishnuprasad41@gmail.com",
      subject: "New Contact Form Submission",
      html: htmlContent,
    });

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false }, { status: 500 });
  } catch (err) {
    console.error("Error sending form/email:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
