# 🎯 Client Galleries - Step by Step Setup

## ⏱️ Total Time: 30 Minutes

---

## ✅ STEP 1: Get Cloudinary API Secret (2 minutes)

### What to Do:
1. Open browser → [cloudinary.com/console](https://cloudinary.com/console)
2. Sign in with your account
3. Look for **"API Secret"** on dashboard
4. Click **"Reveal"** or copy button
5. **Save it somewhere** (you'll need it next)

### ✓ You Have:
```
Cloud Name: dl13qqgnz
API Key: 196122229848329
API Secret: ______________ (you just copied this)
```

---

## ✅ STEP 2: Create Supabase Project (5 minutes)

### What to Do:
1. Open [supabase.com](https://supabase.com)
2. Click **"Start your project"**
3. Sign up (use GitHub login)
4. Click **"New Project"**
5. Fill in:
   - Name: `mesa-marie-photography`
   - Database Password: (create strong password - SAVE IT!)
   - Region: `East US (North Virginia)` or closest
6. Click **"Create new project"**
7. ☕ Wait 2-3 minutes for setup

### Get Your Keys:
1. Go to ⚙️ **Settings** → **API**
2. Copy these 3 values:

```
Project URL: https://xxxxx.supabase.co
anon public: eyJhbGc...
service_role: eyJhbGc... (click Reveal)
```

**Save these 3 values!**

---

## ✅ STEP 3: Create Database Table (2 minutes)

### What to Do:
1. In Supabase, click **SQL Editor** (in left sidebar)
2. Click **"+ New query"**
3. Paste this entire block:

```sql
create extension if not exists "uuid-ossp";

create table if not exists galleries (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  client_name text not null,
  access_code text unique not null,
  password_hash text not null,
  cloudinary_folder text not null,
  allow_zip boolean default true,
  expires_at timestamptz,
  created_at timestamptz default now()
);

create index idx_galleries_access_code on galleries(access_code);
create index idx_galleries_slug on galleries(slug);
```

4. Click **"Run"** (or press Ctrl+Enter)
5. Should see: ✅ **"Success. No rows returned"**

---

## ✅ STEP 4: Create Environment File (3 minutes)

### What to Do:
1. Open your project in VS Code or text editor
2. In the **root folder** (where package.json is), create new file: `.env.local`
3. Paste this and **fill in your values**:

```env
# === SUPABASE === (from Step 2)
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE=eyJhbGc...

# === CLOUDINARY === (from Step 1)
CLOUDINARY_CLOUD_NAME=dl13qqgnz
CLOUDINARY_API_KEY=196122229848329
CLOUDINARY_API_SECRET=your_api_secret_here

# === SITE ===
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# === ADMIN PASSWORD ===
ADMIN_PASSWORD=mesa-portal-2025
```

4. Replace:
   - `https://xxxxx.supabase.co` → your Supabase URL
   - `eyJhbGc...` → your actual keys (long strings)
   - `your_api_secret_here` → your Cloudinary API secret
   - `mesa-portal-2025` → your own admin password

5. **Save the file**

---

## ✅ STEP 5: Test Locally (5 minutes)

### What to Do:
1. Open Terminal in VS Code
2. Make sure you're in project folder
3. Run:

```bash
npm run dev
```

4. Wait for "Ready on http://localhost:3000"
5. Open browser → **http://localhost:3000**

### Test Portal:
1. Click **"Client Login"** in navigation
2. You should see access code form ✅
3. Visit **http://localhost:3000/portal**
4. Enter your admin password (from `.env.local`)
5. Should see empty gallery list ✅

**If you see these pages → SUCCESS!** ✅

---

## ✅ STEP 6: Upload Test Photos to Cloudinary (3 minutes)

### What to Do:
1. Go to [cloudinary.com/console](https://cloudinary.com/console)
2. Click **"Media Library"**
3. Click folder icon → **"Create new folder"**
4. Name it: `Mesa-Marie`
5. Inside `Mesa-Marie`, create: `clients`
6. Inside `clients`, create: `test-gallery`
7. **Drag and drop 3-5 photos** into `test-gallery` folder
8. Wait for upload to complete
9. Note the path: `Mesa-Marie/clients/test-gallery`

---

## ✅ STEP 7: Create Test Gallery (3 minutes)

### What to Do:
1. Go to **http://localhost:3000/portal**
2. Click **"Create New Gallery"**
3. Fill in:
   - **Client Name**: Test Gallery
   - **Slug**: test-gallery (auto-filled)
   - **Access Code**: TEST2025 (auto-filled)
   - **Password**: test123
   - **Cloudinary Folder**: Mesa-Marie/clients/test-gallery
   - **Allow ZIP**: ✅ (checked)
4. Click **"Create Gallery"**
5. Should see: ✅ **"Gallery created successfully!"**

---

## ✅ STEP 8: Test Client Experience (5 minutes)

### What to Do:
1. Open **incognito/private window**
2. Go to **http://localhost:3000/galleries**
3. Enter Access Code: `TEST2025`
4. Click "View Gallery"
5. Should redirect to `/galleries/test-gallery`
6. Enter Password: `test123`
7. Click "View Gallery"
8. **You should see your 3-5 test photos!** ✅

### Test Download:
1. Scroll to bottom
2. Click **"Download All Photos (ZIP)"**
3. Should open Cloudinary ZIP URL in new tab
4. Download should start ✅

**If everything works → YOU'RE DONE LOCALLY!** 🎉

---

## ✅ STEP 9: Deploy to Vercel (5 minutes)

### What to Do:
1. Go to [vercel.com](https://vercel.com)
2. Find your Mesa Marie project
3. Go to **Settings** → **Environment Variables**
4. Add ALL variables from your `.env.local`:

```
SUPABASE_URL → (your value)
SUPABASE_ANON_KEY → (your value)
SUPABASE_SERVICE_ROLE → (your value)
CLOUDINARY_CLOUD_NAME → dl13qqgnz
CLOUDINARY_API_KEY → 196122229848329
CLOUDINARY_API_SECRET → (your value)
NEXT_PUBLIC_SITE_URL → https://your-site.vercel.app
ADMIN_PASSWORD → (your password)
```

5. For each, select: ✅ Production ✅ Preview ✅ Development
6. Click **"Save"**
7. Go to **Deployments** → Redeploy latest

### Test Live Site:
1. Wait for deployment (2-3 min)
2. Visit your live site
3. Test `/portal` and `/galleries`
4. Everything should work! ✅

---

## ✅ STEP 10: Create Real Client Gallery (3 minutes)

### What to Do:
1. Upload client photos to Cloudinary
   - Create folder: `Mesa-Marie/clients/smith-wedding`
   - Upload their photos
2. Go to your live site `/portal`
3. Create new gallery with real client info
4. Test it works
5. Share access code + password with client!

---

## 🎉 YOU'RE DONE!

### What You Can Do Now:
- ✅ Create unlimited client galleries
- ✅ No coding required
- ✅ Beautiful delivery experience
- ✅ Professional presentation
- ✅ Easy client access

### Delete Test Gallery:
When ready, you can manually delete the test gallery from Supabase:
1. Supabase → Table Editor → galleries
2. Find "test-gallery" row
3. Delete it

---

## 🆘 Troubleshooting

### "Missing environment variable" error
→ Check `.env.local` file exists and has all values

### "Invalid access code"
→ Access codes are uppercase: TEST2025 not test2025

### "Incorrect password"
→ Passwords are case-sensitive: test123 not Test123

### "No images found"
→ Check Cloudinary folder path matches exactly

### Portal won't load
→ Check ADMIN_PASSWORD in `.env.local`

---

## 📞 Next Steps

1. Read **GALLERIES-QUICK-REF.md** for daily use
2. Check **CLIENT-GALLERIES-SETUP.md** for full guide
3. Create your first real client gallery!

---

**Congratulations! Your client gallery system is live! 🎊📸**

