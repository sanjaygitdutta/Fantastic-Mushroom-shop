import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true }, { status: 200 });

  // Clear the cookie by setting it to expire immediately
  response.cookies.set('admin_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  });

  return response;
}
