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

  const { email, comment, subject } = data;

  await sendEmail(data);

  return NextResponse.json({ email, comment , subject });
}
