import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Clear the session cookie by setting it on the response
  response.cookies.set('session_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: -1, // Expire the cookie immediately
    path: '/',
  });

  return response;
}
