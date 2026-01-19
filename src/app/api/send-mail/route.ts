import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, businessName, projectDescription } = await req.json();

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            // FALLBACK MODE: Log to console if no credentials
            console.log("------------------------------------------------");
            console.log(" [Fallback Mode] New Project Request Received:");
            console.log(` From: ${name}`);
            console.log(` Business: ${businessName}`);
            console.log(` Description: ${projectDescription}`);
            console.log("------------------------------------------------");

            // Return success to frontend so the UI works perfectly
            return NextResponse.json({ message: 'Message logged successfully (Fallback Mode)' }, { status: 200 });
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
            to: 'technoctra@gmail.com',
            subject: `New Project Request from ${name} (${businessName})`,
            text: `
        Name: ${name}
        Business: ${businessName}
        
        Project Description:
        ${projectDescription}
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
