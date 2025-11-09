# 🚀 Vercel Environment Variables Setup

## 📋 **IMPORTANT: Add These to Vercel**

Your code is now pushed to GitHub! Vercel will automatically deploy, but you need to add these environment variables first.

---

## 🔑 **Environment Variables to Add**

Go to your Vercel project → **Settings** → **Environment Variables** and add ALL of these:

### **1. Supabase Variables**
```
SUPABASE_URL=https://jrvvtnhnslbykgnlezjm.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydnZ0bmhuc2xieWtnbmxlempthimlhdCI6MTczNjQyNTQwNCwiZXhwIjoyMDUyMDAxNDA0fQ.lQpkS6J_dLzR2FD0zJ_MtLkGqX_QOa1-DYj74P6iR_U
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydnZ0bmhuc2xieWtnbmxlempthimlhdCI6MTczNjQyNTQwNCwiZXhwIjoyMDUyMDAxNDA0fQ.AZuZoZMQnhBTfmMh0TCTNUZAKhSvb2nHSDJ7-PL14Ao
```

### **2. Cloudinary Variables**
```
CLOUDINARY_CLOUD_NAME=dlafuvhvq
CLOUDINARY_API_KEY=726537372674351
CLOUDINARY_API_SECRET=YOUR_ACTUAL_SECRET_HERE
```

**⚠️ IMPORTANT:** Replace `YOUR_ACTUAL_SECRET_HERE` with your actual Cloudinary API Secret from:
- Cloudinary Dashboard → Settings → API Keys → API Secret

### **3. Admin Password**
```
ADMIN_PASSWORD=mesa2025secure
```

**⚠️ SECURITY:** You should change this to something more secure before going live!

---

## 📝 **How to Add Them in Vercel**

### **Method 1: One by One (Easiest)**
1. Go to [vercel.com](https://vercel.com) → Your Project
2. Click **Settings** (top menu)
3. Click **Environment Variables** (left sidebar)
4. For each variable:
   - **Name**: Enter the variable name (e.g., `SUPABASE_URL`)
   - **Value**: Paste the value
   - **Environment**: Select **Production**, **Preview**, and **Development** (all 3!)
   - Click **Save**

### **Method 2: Bulk Import (Faster)**
1. Go to Vercel → Settings → Environment Variables
2. Click **"Add New"** → **"Paste .env"**
3. Copy and paste this entire block:

```env
SUPABASE_URL=https://jrvvtnhnslbykgnlezjm.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydnZ0bmhuc2xieWtnbmxlempthimlhdCI6MTczNjQyNTQwNCwiZXhwIjoyMDUyMDAxNDA0fQ.lQpkS6J_dLzR2FD0zJ_MtLkGqX_QOa1-DYj74P6iR_U
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydnZ0bmhuc2xieWtnbmxlempthimlhdCI6MTczNjQyNTQwNCwiZXhwIjoyMDUyMDAxNDA0fQ.AZuZoZMQnhBTfmMh0TCTNUZAKhSvb2nHSDJ7-PL14Ao
CLOUDINARY_CLOUD_NAME=dlafuvhvq
CLOUDINARY_API_KEY=726537372674351
CLOUDINARY_API_SECRET=YOUR_ACTUAL_SECRET_HERE
ADMIN_PASSWORD=mesa2025secure
```

4. Make sure to replace `YOUR_ACTUAL_SECRET_HERE` with your real Cloudinary API Secret!
5. Select **Production**, **Preview**, and **Development**
6. Click **Save**

---

## 🔄 **After Adding Variables**

1. ✅ Vercel will automatically redeploy with the new environment variables
2. ✅ Wait 1-2 minutes for deployment to complete
3. ✅ Visit your live site (e.g., `mesamariephotography.vercel.app`)
4. ✅ Test the client galleries: `yourdomain.com/galleries`
5. ✅ Test the admin portal: `yourdomain.com/portal`

---

## 🧪 **Quick Test After Deploy**

### **Test Client Galleries:**
1. Go to `/galleries`
2. Should show access code input (no errors)
3. Try entering a test access code

### **Test Admin Portal:**
1. Go to `/portal`
2. Enter password: `mesa2025secure`
3. Should see gallery management dashboard

### **If You See Errors:**
- Check that ALL environment variables are added
- Make sure you added them to **Production** environment
- Double-check that `CLOUDINARY_API_SECRET` is correct
- Force redeploy: Vercel → Deployments → Click "..." → Redeploy

---

## 📸 **Cloudinary API Secret**

If you don't have your Cloudinary API Secret:

1. Go to [cloudinary.com/console](https://cloudinary.com/console)
2. Click **Settings** (gear icon)
3. Click **API Keys** tab
4. Find **API Secret** (hidden by default)
5. Click the eye icon to reveal it
6. Copy and paste into Vercel

---

## 🎉 **You're Done!**

Once the environment variables are added and Vercel redeploys:

✅ Your redesigned website is LIVE!
✅ Client galleries system is functional
✅ Admin portal is accessible
✅ Mobile-optimized for iPhone/Android
✅ All new photos and styling applied

**Go check it out! 🚀✨**

---

## 🔐 **Security Notes**

- ✅ Never commit `.env.local` to GitHub (already in `.gitignore`)
- ✅ Keep your Supabase Service Role Key secret
- ✅ Keep your Cloudinary API Secret secure
- ✅ Change `ADMIN_PASSWORD` to something strong before going live
- ✅ Consider adding rate limiting for production use

---

Need help? Check the deployment in Vercel's dashboard for any error logs!

