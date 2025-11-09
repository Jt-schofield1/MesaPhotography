# 🔑 How to Get Your Cloudinary API Secret

## Quick Steps (1 minute)

### 1. Open Cloudinary Dashboard
Go to: **https://cloudinary.com/console**

### 2. Sign In
Use the account for: **dl13qqgnz**

### 3. Find API Secret
On your dashboard, you'll see:

```
Cloud name: dl13qqgnz ✅
API Key: 196122229848329 ✅
API Secret: ****************** ⬅️ THIS ONE!
```

### 4. Reveal the Secret
Click the **"👁️ Show"** or **"Reveal"** button next to API Secret

### 5. Copy It
Copy the revealed secret (looks like a long random string)

### 6. Paste It
Open **YOUR-ENV-FILE.txt** and replace:
```
CLOUDINARY_API_SECRET=YOUR_API_SECRET_HERE
```
With:
```
CLOUDINARY_API_SECRET=your_actual_secret_here
```

---

## Then Create .env.local

1. Create new file in root: `.env.local`
2. Copy entire contents from **YOUR-ENV-FILE.txt**
3. Save
4. Done! ✅

---

## Already Have It?

If you have your Cloudinary API Secret, you're ready to:

1. ✅ Copy contents from **YOUR-ENV-FILE.txt** to new `.env.local` file
2. ✅ Replace `YOUR_API_SECRET_HERE` with your actual secret
3. ✅ Save the file
4. ✅ Run `npm run dev`

---

## Need to Create Supabase Table?

If you haven't created the database table yet:

1. Go to: https://fmdjiikhfeybajhrvxbo.supabase.co
2. Click **SQL Editor** in sidebar
3. Click **New Query**
4. Paste the SQL from **STEP-BY-STEP-SETUP.md** (Step 3)
5. Click **Run**

---

**Once .env.local is ready → Follow STEP-BY-STEP-SETUP.md starting at Step 5!**

