import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // Honeypot
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  // map formData -> Google Form entry fields
  const formData = new URLSearchParams();
  formData.append("entry.382402243", body.name); // Name
  formData.append("entry.1489392737", body.email); // Email
  formData.append("entry.1296811649", body.location); // Location
  formData.append("entry.1395841341", body.contact); // Contact
  formData.append("entry.1665094489", body.message); // Message

  try {
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

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false }, { status: 500 });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
