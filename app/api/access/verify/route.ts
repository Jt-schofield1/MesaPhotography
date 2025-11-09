import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { slug, password } = body;

    if (!slug || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('galleries')
      .select('password_hash, expires_at')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 });
    }

    // Check if gallery has expired
    if (data.expires_at && new Date(data.expires_at) < new Date()) {
      return NextResponse.json({ error: 'Gallery has expired' }, { status: 403 });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, data.password_hash);
    if (!isValid) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 403 });
    }

    // Set cookie for 24 hours
    const response = NextResponse.json({ ok: true });
    response.cookies.set(`mmg_${slug}`, 'true', {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
      secure: process.env.NODE_ENV === 'production',
    });

    return response;
  } catch (error) {
    console.error('Error verifying password:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

