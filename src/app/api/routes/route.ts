import { NextResponse } from "next/server";
import { sendEmail } from "../../components/Mailer";


type ContactForm = {
  email?: string,
  comment?: string,
  subject?: string
}

// To handle a GET request to /api
export async function GET(request: Request) {
  // Do whatever you want
  const body = JSON.parse(request.body);
  console.log(body);
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: Request) {
  const data: ContactForm = await request.json();
  console.log('data: ', data);

  const { email, comment, subject } = data;

  await sendEmail(data);

  return NextResponse.json({ email, comment , subject });
}
