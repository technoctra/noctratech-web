import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    console.log("POST /api/send-mail hit");
    try {
        const body = await req.json();
        const { name, email, businessName, projectDescription } = body;

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            // FALLBACK MODE: Log to console if no credentials
            console.log("------------------------------------------------");
            console.log(" [Fallback Mode] New Project Request Received:");
            console.log(` From: ${name} <${email}>`);
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
            from: `NoctraTech <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Project Request: ${name}`,
            text: `
            Name: ${name}
            Email: ${email}
            Business: ${businessName}
            
            Project Description:
            ${projectDescription}
          `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Email error:', error);
        let errorMessage = 'Failed to send email';
        
        if (error.code === 'EAUTH') {
            errorMessage = 'Authentication failed. Please check your EMAIL_PASS (App Password may be required).';
        } else if (error.code === 'ESOCKET') {
            errorMessage = 'Network connection error. Please try again.';
        }
        
        return NextResponse.json({ message: errorMessage, details: error.message }, { status: 500 });
    }
}
