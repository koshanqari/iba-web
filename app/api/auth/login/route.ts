import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Validate credentials server-side
    const validUsername = process.env.INTELLSYS_USERNAME || 'iba.consulting';
    const validPassword = process.env.INTELLSYS_PASSWORD || 'intellsys';

    // Debug logging (remove in production)
    console.log('Login attempt:', { 
      username, 
      validUsername, 
      passwordMatch: password === validPassword,
      envUsername: process.env.INTELLSYS_USERNAME,
      envPassword: process.env.INTELLSYS_PASSWORD ? '***' : 'undefined'
    });

    if (username === validUsername && password === validPassword) {
      // Create a simple session token (in production, use JWT)
      const sessionToken = `intellsys_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Set httpOnly cookie
      const cookieStore = await cookies();
      cookieStore.set('intellsys_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/'
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Login successful' 
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Login failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Check if user is authenticated
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('intellsys_session');

    if (sessionToken) {
      return NextResponse.json({ 
        authenticated: true,
        message: 'User is authenticated' 
      });
    } else {
      return NextResponse.json({ 
        authenticated: false,
        message: 'User is not authenticated' 
      });
    }
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { authenticated: false, message: 'Auth check failed' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    // Logout - clear the session cookie
    const cookieStore = await cookies();
    cookieStore.delete('intellsys_session');

    return NextResponse.json({ 
      success: true, 
      message: 'Logged out successfully' 
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: 'Logout failed' },
      { status: 500 }
    );
  }
}
