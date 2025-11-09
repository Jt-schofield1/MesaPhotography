import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

// Generate signed upload signature for client-side uploads
export async function POST(req: Request) {
  try {
    const { folder } = await req.json();

    console.log('🔐 Signature request for folder:', folder);

    if (!folder) {
      return NextResponse.json({ error: 'Missing folder' }, { status: 400 });
    }

    // Check if required env vars exist
    if (!process.env.CLOUDINARY_API_SECRET) {
      console.error('❌ CLOUDINARY_API_SECRET is not set!');
      return NextResponse.json({ error: 'Cloudinary not configured' }, { status: 500 });
    }

    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY) {
      console.error('❌ Cloudinary credentials missing!');
      return NextResponse.json({ error: 'Cloudinary not configured' }, { status: 500 });
    }

    const timestamp = Math.round(new Date().getTime() / 1000);

    // Generate signature for upload (without upload_preset for signed uploads)
    const paramsToSign = {
      timestamp: timestamp,
      folder: folder,
    };

    console.log('📝 Signing params:', paramsToSign);

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET
    );

    console.log('✅ Signature generated successfully');

    return NextResponse.json({
      signature,
      timestamp,
      cloudname: process.env.CLOUDINARY_CLOUD_NAME,
      apikey: process.env.CLOUDINARY_API_KEY,
      folder,
    });
  } catch (error) {
    console.error('❌ Error generating signature:', error);
    return NextResponse.json({ 
      error: 'Failed to generate signature',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

