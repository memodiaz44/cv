import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


type EmailData = {
  email: string;
  subject: string;
  comment: string;
};

// Create a function to send an email
async function sendEmail(emailData: EmailData) {
  // Create a Nodemailer transporter using your email service's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., "Gmail"
    auth: {
      user: process.env.NEXT_PUBLIC_APP_EMAIL,
      pass: process.env.NEXT_PUBLIC_APP_PASSWORD
  },});

  // Email content
  const mailOptions = {
    from: "your-email@gmail.com",
    to: emailData.email,
    subject: emailData.subject,
    text: `Hy I am ${process.env.NEXT_PUBLIC_APP_NAME} a fullstack developer and I am reaching out because I recieve your email form in my porfolio. If you would like to work with me please reply to this message`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export { sendEmail };
