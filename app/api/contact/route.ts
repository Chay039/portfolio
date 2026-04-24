import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Check if environment variables are configured
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing EMAIL_USER or EMAIL_PASS environment variables.');
            return NextResponse.json(
                { message: 'Server configuration error. Email credentials missing.' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'jchaitu98@gmail.com',
            subject: `Portfolio Contact From ${name}: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                    <div style="background-color: #06b6d4; padding: 20px; text-align: center;">
                        <h2 style="color: white; margin: 0;">New Portfolio Contact</h2>
                    </div>
                    <div style="padding: 20px; background-color: #ffffff;">
                        <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
                        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;"/>
                        <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eeeeee;">${message}</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}
