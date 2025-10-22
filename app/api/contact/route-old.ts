import resend from "resend"
const email = "your-email@example.com" // Replace with your actual email

await resend.emails.send({
  from: "onboarding@resend.dev", // Resend's test email
  to: email,
  subject: `Contact Form: ${name}`,
  text: `You have a new contact form submission from ${name} with email ${email}.`,
})
