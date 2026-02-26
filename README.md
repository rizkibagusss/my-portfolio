Live Website:
👉 https://rizkibagus.my.id

📌 Overview

This is my personal portfolio website built using:

Next.js (App Router)
Supabase (Database + Authentication + RLS)
Tailwind CSS v4
Vercel (Deployment)

The project includes:
Dynamic blog system
CRUD functionality
Role-based security using Supabase RLS
Dynamic SEO metadata
Production deployment with custom domain

✨ Features
Public Side
View blog posts
View projects
Dynamic SEO metadata
Responsive minimalist UI
Admin Side
Login authentication
Create post
Edit post
Delete post
Secure database via RLS

🔒 Security

This project uses Supabase Row Level Security (RLS):
Only the admin UUID can insert/update/delete
Public users can only read published posts
Admin routes protected via session checks

📂 Project Structure (Simplified)
src/
├── app/
│ ├── blog/
│ ├── projects/
│ ├── admin/
│
├── components/
├── lib/
│ └── supabase.js
⚙️ Environment Variables

📬 Contact

If you’d like to collaborate:
Email: rizkibagusariyanto@gmail.com
Website: https://rizkibagus.my.id
