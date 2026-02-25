"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import AdminPosts from "@/components/AdminPosts";
import Link from "next/link";

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/admin/login");
      } else {
        setUser(session.user);
      }
    };

    getSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">Admin Dashboard</h1>

          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:underline"
          >
            Logout
          </button>
        </div>

        <p className="mt-6 text-neutral-600">Welcome, {user.email}</p>
        <div className="flex items-center justify-between mt-12 mb-5">
          <h2 className="text-lg font-medium mb-6">Your Blog Posts</h2>
          <Link
            href="/admin/posts/new"
            className="text-sm bg-black text-white px-4 py-2 rounded-md hover:opacity-80 transition"
          >
            + New Post
          </Link>
        </div>
        <AdminPosts />
      </div>
    </main>
  );
}
