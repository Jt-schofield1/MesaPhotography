# Environment Variables Setup for Client Galleries

## Create `.env.local` file in the root directory

Create a file named `.env.local` in the root of your project and add these variables:

```env
# Supabase (Get these from: supabase.com → Project Settings → API)
SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE=YOUR_SUPABASE_SERVICE_ROLE_KEY

# Cloudinary
CLOUDINARY_CLOUD_NAME=dl13qqgnz
CLOUDINARY_API_KEY=196122229848329
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Simple admin password protection (for /portal)
ADMIN_PASSWORD=mesa-portal-2025
```

## What to Replace

1. **SUPABASE_URL**: Your Supabase project URL (from Supabase dashboard)
2. **SUPABASE_ANON_KEY**: Your anon/public key (from Supabase → Settings → API)
3. **SUPABASE_SERVICE_ROLE**: Your service_role key (keep secret!)
4. **CLOUDINARY_API_SECRET**: Get from Cloudinary dashboard
5. **ADMIN_PASSWORD**: Set a strong password for /portal access

## On Vercel

Add the same variables in:
Vercel Dashboard → Your Project → Settings → Environment Variables

Mark them as available for:
- ✅ Production
- ✅ Preview
- ✅ Development

