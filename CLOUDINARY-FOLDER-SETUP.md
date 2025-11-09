# 📁 Cloudinary Folder Setup Guide

## The Problem

Currently, all 65 images from your Cloudinary root are showing in the gallery because the photos aren't organized in folders.

---

## ✅ PROPER FOLDER STRUCTURE

For client galleries to work correctly, images must be uploaded to specific folders:

```
Mesa-Marie/
  └── clients/
      ├── test/
      │   ├── photo1.jpg
      │   ├── photo2.jpg
      │   └── photo3.jpg
      ├── smith-wedding/
      │   └── (Smith family photos)
      └── jones-session/
          └── (Jones family photos)
```

---

## 🔧 HOW TO FIX YOUR TEST GALLERY

### Option 1: Upload to Correct Folder (RECOMMENDED)

1. **Go to Cloudinary Console**: https://console.cloudinary.com/console/dl13qqgnz/media_library

2. **Create the folder structure**:
   - Click "Create Folder" (if available)
   - Or simply upload with folder prefix

3. **Upload Photos**:
   - Click **"Upload"** button
   - Select your 5 wedding photos
   - **IMPORTANT**: In the upload dialog, set the **"Folder"** field to:
     ```
     Mesa-Marie/clients/test
     ```
   - Upload!

4. **Update Supabase**:
   - Go to Supabase Table Editor → `galleries` table
   - Edit the "test" gallery row
   - Change `cloudinary_folder` to: `Mesa-Marie/clients/test`
   - Save

5. **Test**: Refresh your gallery page - should show only your 5 photos!

---

### Option 2: Move Existing Photos

If you already uploaded the wedding photos:

1. In Cloudinary, click on each wedding photo
2. Look for **"Edit"** or **"Manage"** option
3. Change the **Public ID** to include the folder:
   - From: `couple_xwgqqd`
   - To: `Mesa-Marie/clients/test/couple_xwgqqd`
4. Save each photo

Then update Supabase `cloudinary_folder` to: `Mesa-Marie/clients/test`

---

### Option 3: Filter by Date/Tag (Quick Fix)

If you want to keep photos at root level but filter them:

Add a **tag** when uploading:
- Tag: `test-gallery`

Then we can modify the API to filter by tag instead of folder.

---

## 🚀 FOR FUTURE CLIENT GALLERIES

**Every time you create a new gallery:**

1. **Create Gallery in Portal** (`/portal/new`)
   - Client Name: Smith Wedding
   - Slug: `smith-wedding`
   - Folder: `Mesa-Marie/clients/smith-wedding` ✅

2. **Upload Photos to Cloudinary**
   - Upload to folder: `Mesa-Marie/clients/smith-wedding`
   - All photos go in that specific folder

3. **Test**
   - Give client access code: `SMITH2025`
   - They see ONLY their photos!

---

## 🎯 BENEFITS OF PROPER FOLDERS

✅ **Organized**: Easy to find client photos
✅ **Private**: Each client sees only their gallery
✅ **Professional**: Clean URLs and structure
✅ **Scalable**: Can have 100+ galleries without conflicts
✅ **ZIP Download**: Works perfectly with folder structure

---

## ❓ NEED HELP?

If Cloudinary's interface doesn't have obvious folder options:
- Upload via API (we can automate this later)
- Use Cloudinary's "Upload Widget" with folder presets
- Organize in Media Library after upload

**For now**: Just re-upload your 5 wedding photos with the folder prefix!

