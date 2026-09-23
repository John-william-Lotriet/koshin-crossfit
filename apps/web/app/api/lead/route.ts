import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, sessionTime, plan } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    // Here you can connect WhatsApp API, Supabase, SendGrid, or Sanity mutations
    console.log('[Koshin Lead Captured]:', { name, phone, sessionTime, plan, timestamp: new Date() });

    return NextResponse.json({
      success: true,
      message: '2 Free Intro Sessions booked successfully!',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
