import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import EmailTemplate from './EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailBody = {
    from: string;
    to: string;
    subject: string;
    replyTo: string;
    html: string;
};

const emailBody = (
    from: string,
    to: string,
    subject: string,
    replyTo: string,
    html: string
): EmailBody => {
    return {
        from,
        to,
        subject,
        replyTo,
        html,
    };
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (body.company && body.company.trim() !== '') {
            return NextResponse.json(
                {
                    success: false,
                    message: 'A bot sent this request.',
                },
                { status: 400 }
            );
        }

        const html = await render(
            <EmailTemplate.Contact
                name={body.name}
                email={body.email}
                subject={body.subject}
                message={body.message}
            />
        );

        const from = process.env.EMAIL_FROM;
        const to = process.env.EMAIL_TO;

        if (!from || !to) {
            throw new Error('EMAIL_FROM or EMAIL_TO is not configured.');
        }

        const result = await resend.emails.send(
            emailBody(
                from,
                to,
                body.subject,
                body.email,
                html
            )
        );

        return NextResponse.json(
            {
                success: true,
                message: 'Contact message received.',
                data: result,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('POST /api/contact error:', error);

        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong while sending the message.',
            },
            { status: 500 }
        );
    }
}
