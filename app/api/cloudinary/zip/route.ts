import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { supabase } from '@/lib/supabase';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
    }

    // Get gallery metadata
    const { data: gallery, error } = await supabase
      .from('galleries')
      .select('cloudinary_folder, allow_zip, expires_at')
      .eq('slug', slug)
      .single();

    if (error || !gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 });
    }

    // Check if gallery has expired
    if (gallery.expires_at && new Date(gallery.expires_at) < new Date()) {
      return NextResponse.json({ error: 'Gallery has expired' }, { status: 403 });
    }

    // Check if ZIP download is allowed
    if (!gallery.allow_zip) {
      return NextResponse.json({ error: 'ZIP download is disabled for this gallery' }, { status: 403 });
    }

    // Fetch all images in the gallery to get their public_ids
    const cloudinaryParams: any = {
      type: 'upload',
      max_results: 500,
      resource_type: 'image',
    };

    if (gallery.cloudinary_folder && gallery.cloudinary_folder.trim() !== '') {
      cloudinaryParams.prefix = gallery.cloudinary_folder;
    }

    const result = await cloudinary.api.resources(cloudinaryParams);

    if (!result.resources || result.resources.length === 0) {
      return NextResponse.json({ error: 'No images found in gallery' }, { status: 404 });
    }

    // Get array of public IDs
    const publicIds = result.resources.map((r: any) => r.public_id);

    console.log('📦 Creating ZIP with', publicIds.length, 'images');

    // Generate ZIP download URL with specific public IDs
    const zipUrl = cloudinary.utils.download_archive_url({
      resource_type: 'image',
      type: 'upload',
      public_ids: publicIds,
      target_format: 'zip',
      flatten_folders: true,
      mode: 'download',
    });

    return NextResponse.json({ zipUrl });
  } catch (error) {
    console.error('Error generating ZIP:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

