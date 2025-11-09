# 🎨 Client Galleries Setup Guide

## ✅ What You've Got

A complete client gallery delivery system with:
- **Admin Portal** at `/portal` - Create and manage galleries (no coding!)
- **Client Access** at `/galleries` - Clients enter access codes
- **Private Galleries** - Password-protected with beautiful image grid
- **Download All** - One-click ZIP download of all photos
- **Cloudinary Integration** - All images hosted professionally
- **Supabase Database** - Gallery metadata storage

---

## 🚀 Quick Setup (30 minutes)

### Step 1: Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase
SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE=YOUR_SUPABASE_SERVICE_ROLE_KEY

# Cloudinary
CLOUDINARY_CLOUD_NAME=dl13qqgnz
CLOUDINARY_API_KEY=196122229848329
CLOUDINARY_API_SECRET=YOUR_API_SECRET_HERE

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Admin
ADMIN_PASSWORD=your-secure-password
```

**Get your Cloudinary API Secret:**
1. Go to [cloudinary.com/console](https://cloudinary.com/console)
2. Sign in with your account
3. Find "API Secret" in your dashboard
4. Copy and paste into `.env.local`

**Get your Supabase keys:**
1. Go to [supabase.com](https://supabase.com)
2. Open your project → Settings → API
3. Copy Project URL, anon key, and service_role key

### Step 2: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and you should see "Client Login" in the navigation.

### Step 3: Add to Vercel

1. Go to your Vercel project → Settings → Environment Variables
2. Add all the variables from your `.env.local` file
3. Mark them for: Production, Preview, Development
4. Redeploy your site

---

## 📸 How to Use (Your Workflow)

### 1. Upload Photos to Cloudinary

**First time:**
- Go to [cloudinary.com/console](https://cloudinary.com/console)
- Create a folder structure: `Mesa-Marie/clients/`

**For each client:**
1. Create a new folder: `Mesa-Marie/clients/smith-wedding`
2. Upload client's photos to this folder
3. Photos can be any size - Cloudinary optimizes automatically

### 2. Create Gallery in Portal

1. Visit `yoursite.com/portal`
2. Enter admin password (from `.env.local`)
3. Click "Create New Gallery"
4. Fill in the form:
   - **Client Name**: Smith Wedding
   - **Slug**: smith-wedding (auto-generated)
   - **Access Code**: SMITH2025 (auto-generated)
   - **Password**: smith-2025 (create memorable password)
   - **Cloudinary Folder**: Mesa-Marie/clients/smith-wedding
   - **Allow ZIP**: ✅ (checked)
5. Click "Create Gallery"

### 3. Share with Client

Send your client:
```
Hi Sarah & John!

Your wedding photos are ready! 🎉

Access your private gallery:
1. Visit: yoursite.com/galleries
2. Enter Access Code: SMITH2025
3. Enter Password: smith-2025

You can:
- View all photos
- Download individual photos (right-click)
- Download ALL photos as ZIP (button at bottom)

Photos are available for 30 days.

- Mesa Marie
```

---

## 🎯 Client Experience

### Client Side (What they see):

1. **Visit** `yoursite.com/galleries`
2. **Enter** Access Code (e.g., SMITH2025)
3. **Redirected** to `/galleries/smith-wedding`
4. **Enter** Password
5. **View** all photos in beautiful grid
6. **Download** individual photos or all as ZIP

---

## 🛠️ Portal Features

### Admin Dashboard (`/portal`)
- View all galleries
- See access codes
- Check creation dates
- Quick links to galleries

### Create Gallery (`/portal/new`)
- Auto-generates slug from client name
- Auto-generates access code
- Validates all fields
- Shows helpful instructions

---

## 🔒 Security Features

✅ **Password Hashing** - Bcrypt with salt rounds
✅ **HTTP-Only Cookies** - 24-hour session
✅ **Admin Auth** - Basic password protection
✅ **No Public Listings** - Galleries only accessible with codes
✅ **Expiration Dates** - Optional gallery expiry
✅ **Service Role Protection** - Never exposed to client

---

## 📋 Folder Structure Best Practices

### Recommended:
```
Mesa-Marie/
├── clients/
│   ├── smith-wedding/
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── ...
│   ├── johnson-family/
│   └── graduation-emma/
└── portfolio/  (your existing portfolio)
```

### Why?
- Organized by client
- Easy to find
- Prevents conflicts
- Clean URLs

---

## 🎨 Customization Options

### Want to add more features?

**1. Expiration Dates**
Already supported! When creating gallery:
- Add `expires_at` field in database
- Galleries auto-expire after date

**2. Watermarks**
Add to Cloudinary transformations:
```typescript
// In api/cloudinary/list/route.ts
url: cloudinary.url(resource.public_id, {
  transformation: [
    { overlay: "watermark", gravity: "south_east" }
  ]
})
```

**3. Favorites/Proofing**
Create new table in Supabase:
```sql
create table favorites (
  gallery_id uuid,
  image_id text,
  created_at timestamptz default now()
);
```

---

## 🐛 Troubleshooting

### Images not showing
- ✅ Check Cloudinary folder path matches exactly
- ✅ Verify images are uploaded to Cloudinary
- ✅ Check folder name case-sensitive
- ✅ Test Cloudinary API key in dashboard

### Access code not working
- ✅ Codes are case-insensitive (auto-uppercase)
- ✅ Check for typos in database
- ✅ Verify gallery exists in Supabase

### Password incorrect
- ✅ Passwords are case-sensitive
- ✅ No spaces before/after
- ✅ Check you set the right password in portal

### ZIP download not working
- ✅ Verify `allow_zip` is true
- ✅ Check Cloudinary folder has images
- ✅ Free tier: max 50 images per ZIP

### Can't access portal
- ✅ Check `ADMIN_PASSWORD` in env vars
- ✅ Clear browser cache
- ✅ Try incognito mode

---

## 💰 Cloudinary Free Tier Limits

**Free Plan Includes:**
- 25 GB storage
- 25 GB monthly bandwidth
- 1000 transformations/month
- ZIP archives (max 50 files)

**When to Upgrade:**
- More than 10-15 full galleries
- High download volume
- Need more than 50 images per ZIP

**Upgrade** (~$89/month):
- 100 GB storage
- 75 GB bandwidth
- 7500 transformations
- Unlimited ZIP size

---

## 📊 Supabase Free Tier Limits

**Free Plan Includes:**
- 500 MB database
- 2 GB bandwidth
- 50,000 monthly auth users
- Unlimited API requests

**Plenty for:**
- 100+ galleries
- Years of client data
- All your needs

---

## 🎓 Pro Tips

### For Best Results:

1. **Name Folders Clearly**
   - `smith-wedding-2025` not `s-w`
   - Easy to find months later

2. **Use Strong Passwords**
   - Combine client name + year
   - Easy for clients to remember

3. **Test Before Sharing**
   - Always test the full flow
   - Verify ZIP downloads work
   - Check mobile view

4. **Communicate Clearly**
   - Include expiration date
   - Explain ZIP download
   - Provide support email

5. **Archive Old Galleries**
   - Delete from Cloudinary after 60 days
   - Keeps your storage clean
   - Stays within free tier

---

## 🚀 Going Live Checklist

Before sharing with clients:

- [ ] Environment variables set on Vercel
- [ ] Test gallery created successfully
- [ ] Photos appear in gallery view
- [ ] Password protection works
- [ ] ZIP download generates
- [ ] Mobile view tested
- [ ] Admin portal accessible
- [ ] Access codes working

---

## 📱 Mobile Experience

✅ **Fully Responsive** - Works on all phones
✅ **Touch Optimized** - Easy tap targets
✅ **Fast Loading** - Cloudinary CDN
✅ **Simple Flow** - Minimal steps

---

## 🎉 You're Ready!

### Create Your First Gallery:

1. **Upload** 3-5 test photos to Cloudinary
   - Folder: `Mesa-Marie/clients/test-gallery`

2. **Create gallery** at `/portal`
   - Client: Test Client
   - Access Code: TEST2025
   - Password: test123

3. **Test as client**
   - Go to `/galleries`
   - Enter TEST2025
   - Enter test123
   - View photos!

4. **Delete test** when ready

---

## 💡 Need Help?

- **Cloudinary Docs**: https://cloudinary.com/documentation
- **Supabase Docs**: https://supabase.com/docs
- **Questions**: Check ENV-SETUP-INSTRUCTIONS.md

---

**🎊 Congratulations! Your client gallery system is ready to use!**

No more emailing ZIP files. No more shared folders. Just beautiful, professional gallery delivery. 📸✨

