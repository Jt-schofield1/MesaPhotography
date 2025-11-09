# 🔍 Environment Variable Check

## The upload is failing because of missing Cloudinary credentials!

---

## ✅ VERIFY YOUR `.env.local` FILE:

Your `.env.local` file should have:

```env
# Supabase
SUPABASE_URL=https://fmdjiikhfeybajhrvxbo.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZGppaWtoZmV5YmFqaHJ2eGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MDcxMDEsImV4cCI6MjA3ODI4MzEwMX0.2b8RXqcoI4O5egnLle8Z9Fvnz_oGpv2dfgmV41XX7H4
SUPABASE_SERVICE_ROLE=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZGppaWtoZmV5YmFqaHJ2eGJvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjcwNzEwMSwiZXhwIjoyMDc4MjgzMTAxfQ.zF2EDaeWySCIinzunZ1SDSg3Mr3DYtgsDKhngHtIr-8

# Cloudinary - YOU MUST HAVE ALL THREE!
CLOUDINARY_CLOUD_NAME=dl13qqgnz
CLOUDINARY_API_KEY=196122229848329
CLOUDINARY_API_SECRET=FuhOA7PvfWbYi8d_mqs9iV-lg8s

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Admin
ADMIN_PASSWORD=mesa-portal-2025
```

---

## 🚨 MOST COMMON ISSUE:

**Missing `CLOUDINARY_API_SECRET`!**

You gave me the secret earlier: **`FuhOA7PvfWbYi8d_mqs9iV-lg8s`**

Make sure it's in your `.env.local` file!

---

## 📝 HOW TO CHECK:

1. **Open** `.env.local` in your project root
2. **Look for** the line starting with `CLOUDINARY_API_SECRET=`
3. **It should say**: `CLOUDINARY_API_SECRET=FuhOA7PvfWbYi8d_mqs9iV-lg8s`
4. **If missing**: Add it!
5. **Restart** the dev server

---

## 🔄 RESTART DEV SERVER:

After adding/updating `.env.local`:

1. **Stop** the current server (Ctrl+C in terminal)
2. **Restart**: `npm run dev`
3. **Try uploading again**

---

## 🔍 CHECK TERMINAL LOGS:

When you try to upload now, look at your terminal where `npm run dev` is running.

You should see:
- 🔐 Signature request for folder: ...
- 📝 Signing params: ...
- ✅ Signature generated successfully

**OR** you'll see:
- ❌ CLOUDINARY_API_SECRET is not set!

This will tell us exactly what's wrong!

---

## 🆘 IF STILL FAILING:

Copy the error message from the terminal and paste it here!

