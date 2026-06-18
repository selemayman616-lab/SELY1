# دليل الرفع والتشغيل

## 1. إنشاء مشروع Supabase

1. اذهب لـ [supabase.com](https://supabase.com) وأنشئ حساب
2. اضغط **New Project** واختر اسماً ومنطقة قريبة (مثل: Singapore)
3. بعد الإنشاء اذهب لـ **SQL Editor** وألصق محتوى ملف `supabase/schema.sql` وشغله
4. اذهب لـ **Storage** وأنشئ 4 buckets:
   - `products` (Public)
   - `banners` (Public)
   - `logos` (Public)
   - `offers` (Public)
5. من **Settings → API** انسخ:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` → `SUPABASE_SERVICE_ROLE_KEY`

## 2. إنشاء أول Admin

في Supabase Dashboard:
1. اذهب لـ **Authentication → Users**
2. اضغط **Add User** وأنشئ حساب بالإيميل وكلمة سر
3. انسخ الـ `user ID`
4. في **SQL Editor** شغل:
```sql
INSERT INTO admin_profiles (id, full_name, role) 
VALUES ('USER_ID_HERE', 'سليم', 'super_admin');
```

## 3. إعداد المشروع محلياً

```bash
# استنسخ أو انسخ المجلد
cd restaurant-menu

# ثبت الحزم
npm install

# أنشئ ملف .env.local وأضف بيانات Supabase
cp .env.example .env.local
# عدل القيم في .env.local

# شغل محلياً
npm run dev
```

## 4. الرفع على Vercel

```bash
# ثبت Vercel CLI
npm i -g vercel

# سجل دخول
vercel login

# ارفع
vercel

# أضف Environment Variables في Vercel Dashboard:
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY
# SUPABASE_SERVICE_ROLE_KEY
# NEXT_PUBLIC_APP_URL (رابط موقعك على Vercel)
```

## 5. بعد الرفع

1. افتح `your-site.vercel.app/admin/login`
2. سجل دخول بالإيميل وكلمة السر
3. اذهب لـ **الإعدادات** وأضف:
   - اسم المطعم
   - رقم الواتساب
   - الشعار وصورة الهيرو
4. أضف **الفئات** ثم **الأصناف** مع الصور
5. أضف **بانرات** للهيرو
6. افتح `your-site.vercel.app` وتحقق من النتيجة 🎉

## 6. ربط دومين مخصص (اختياري)

في Vercel Dashboard:
1. اذهب لـ **Settings → Domains**
2. أضف دومينك (مثل: `menu.oversaucelounge.com`)
3. اتبع التعليمات لإعداد DNS

## هيكل الملفات

```
restaurant-menu/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing Page
│   │   ├── layout.tsx            # Root Layout
│   │   ├── (menu)/
│   │   │   ├── menu/             # Menu Page
│   │   │   ├── contact/          # Contact Page
│   │   │   └── about/            # About Page
│   │   └── admin/
│   │       ├── login/            # Admin Login
│   │       └── dashboard/
│   │           ├── page.tsx      # Overview
│   │           ├── products/     # Products CRUD
│   │           ├── categories/   # Categories CRUD
│   │           ├── banners/      # Banners Management
│   │           ├── analytics/    # Analytics
│   │           ├── qrcode/       # QR Code Generator
│   │           └── settings/     # Site Settings
│   ├── components/
│   │   ├── ui/                   # Button, Badge, Skeleton, SearchBar
│   │   ├── menu/                 # ProductCard, CategoryBar, CartSheet
│   │   ├── modals/               # ProductModal
│   │   ├── admin/                # AdminSidebar
│   │   └── layout/               # NavBar, Hero, Footer
│   ├── lib/
│   │   ├── supabase/             # client, server, queries
│   │   ├── hooks/                # useCart, useFavorites, useRecentlyViewed
│   │   ├── types/                # TypeScript types
│   │   └── utils/                # Helper functions
│   └── styles/
│       └── globals.css
├── supabase/
│   └── schema.sql                # Complete DB schema
├── public/
│   └── manifest.json             # PWA manifest
├── .env.example
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```
