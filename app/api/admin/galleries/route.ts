import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import bcrypt from 'bcryptjs';

// Simple password protection middleware
function checkAdminAuth(req: Request): boolean {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return false;

  const [type, credentials] = authHeader.split(' ');
  if (type !== 'Basic') return false;

  const decoded = Buffer.from(credentials, 'base64').toString('utf-8');
  const [, password] = decoded.split(':');

  return password === process.env.ADMIN_PASSWORD;
}

export async function GET(req: Request) {
  // Check admin authentication
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('galleries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching galleries:', error);
      return NextResponse.json({ error: 'Failed to fetch galleries' }, { status: 400 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error in GET /api/admin/galleries:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  // Check admin authentication
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { slug, client_name, access_code, password, folder, allow_zip } = body;

    // Validate required fields
    if (!slug || !client_name || !access_code || !password || !folder) {
      return NextResponse.json(
        { error: 'Missing required fields: slug, client_name, access_code, password, folder' },
        { status: 400 }
      );
    }

    // Hash the password
    const password_hash = await bcrypt.hash(password, 10);

    // Insert into database
    const { data, error } = await supabaseAdmin.from('galleries').insert({
      slug: slug.trim().toLowerCase(),
      client_name: client_name.trim(),
      access_code: access_code.trim().toUpperCase(),
      password_hash,
      cloudinary_folder: folder.trim(),
      allow_zip: allow_zip !== false,
    }).select().single();

    if (error) {
      console.error('Error creating gallery:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to create gallery' },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true, gallery: data });
  } catch (error) {
    console.error('Error in POST /api/admin/galleries:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

