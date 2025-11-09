import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { accessCode } = body;

    if (!accessCode) {
      return NextResponse.json({ error: 'Missing access code' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('galleries')
      .select('slug, expires_at')
      .eq('access_code', accessCode.trim().toUpperCase())
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Invalid access code' }, { status: 404 });
    }

    // Check if gallery has expired
    if (data.expires_at && new Date(data.expires_at) < new Date()) {
      return NextResponse.json({ error: 'Gallery has expired' }, { status: 403 });
    }

    return NextResponse.json({ slug: data.slug });
  } catch (error) {
    console.error('Error resolving access code:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

