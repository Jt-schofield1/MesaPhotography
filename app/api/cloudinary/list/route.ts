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
      .select('cloudinary_folder, expires_at')
      .eq('slug', slug)
      .single();

    if (error || !gallery) {
      return NextResponse.json({ error: 'Gallery not found' }, { status: 404 });
    }

    // Check if gallery has expired
    if (gallery.expires_at && new Date(gallery.expires_at) < new Date()) {
      return NextResponse.json({ error: 'Gallery has expired' }, { status: 403 });
    }

    // Fetch images from Cloudinary
    console.log('🔍 Searching Cloudinary with prefix:', gallery.cloudinary_folder);
    
    // If folder is empty, fetch all but limit to recent uploads as temporary fix
    const cloudinaryParams: any = {
      type: 'upload',
      max_results: 500,
      resource_type: 'image',
    };
    
    // Only add prefix if folder is not empty
    if (gallery.cloudinary_folder && gallery.cloudinary_folder.trim() !== '') {
      cloudinaryParams.prefix = gallery.cloudinary_folder;
    }
    
    const result = await cloudinary.api.resources(cloudinaryParams);

    console.log('📊 Cloudinary returned:', result.resources.length, 'resources');
    if (result.resources.length > 0) {
      console.log('📸 First resource public_id:', result.resources[0].public_id);
    }
    
    // If no folder specified, limit to images uploaded today (temporary fix)
    let filteredResources = result.resources;
    if (!gallery.cloudinary_folder || gallery.cloudinary_folder.trim() === '') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      filteredResources = result.resources.filter((resource: any) => {
        const uploadDate = new Date(resource.created_at);
        return uploadDate >= today;
      });
      
      console.log('⏱️ Filtered to today only:', filteredResources.length, 'images');
    }

    const images = filteredResources.map((resource: any) => ({
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
      format: resource.format,
      public_id: resource.public_id,
      created_at: resource.created_at,
    }));

    return NextResponse.json({ images, debug: { prefix: gallery.cloudinary_folder, count: images.length, filtered: filteredResources.length !== result.resources.length } });
  } catch (error) {
    console.error('Error listing images:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

