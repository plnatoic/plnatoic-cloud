import { SignJWT } from 'jose';
import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.JWT_SECRET_KEY;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!SECRET_KEY || !ADMIN_PASSWORD) {
  throw new Error('Missing JWT_SECRET_KEY or ADMIN_PASSWORD in environment variables');
}

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password === ADMIN_PASSWORD) {
    // Password is correct, create a session token
    const token = await new SignJWT({ admin: true })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h') // Token expires in 1 hour
      .sign(new TextEncoder().encode(SECRET_KEY));

    const response = NextResponse.json({ success: true });

    // Set the token in a secure, http-only cookie on the response
    response.cookies.set('session_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour in seconds
      path: '/',
    });

    return response;
  } else {
    // Password is incorrect
    return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
  }
}
