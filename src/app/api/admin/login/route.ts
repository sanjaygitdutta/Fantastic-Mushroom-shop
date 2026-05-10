import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Check against environment variable
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable is not set.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    if (password === adminPassword) {
      // Create response
      const response = NextResponse.json(
        { success: true },
        { status: 200 }
      );

      // Set secure HTTP-only cookie
      // In production (Vercel), secure will automatically be true for HTTPS
      response.cookies.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
