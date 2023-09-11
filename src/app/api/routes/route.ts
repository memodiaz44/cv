import { NextResponse } from "next/server";
import { sendEmail } from "../../components/Mailer";


type ContactForm = {
  email?: string,
  comment?: string,
  subject?: string
}

// To handle a GET request to /api


// To handle a POST request to /api
export async function POST(request: Request) {
  const data: ContactForm = await request.json();
  console.log('data: ', data);

  if (data.email) {
    // Explicitly assert all properties as strings
    const email = data.email as string;
    const comment = data.comment as string;
    const subject = data.subject as string;

    await sendEmail({ email, comment, subject });
  }

  return NextResponse.json({ email: data.email, comment: data.comment, subject: data.subject });
}