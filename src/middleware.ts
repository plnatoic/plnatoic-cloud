import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('JWT_SECRET_KEY is not defined in environment variables');
}

const secretKeyUint8 = new TextEncoder().encode(SECRET_KEY);

export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('session_token')?.value;
  const { pathname } = request.nextUrl;

  // Allow requests to the login page to pass through
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  if (!sessionToken) {
    // If no token, redirect to the login page
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    // Verify the token
    await jwtVerify(sessionToken, secretKeyUint8);
    // If token is valid, proceed to the requested page
    return NextResponse.next();
  } catch (error) {
    // If token is invalid (or expired), redirect to the login page
    console.error('JWT Verification Error:', error);
    const response = NextResponse.redirect(new URL('/admin/login', request.url));
    // Clear the invalid cookie
    response.cookies.set('session_token', '', { maxAge: -1 });
    return response;
  }
}

// Define the paths that the middleware should apply to
export const config = {
  matcher: '/admin/:path*',
};
