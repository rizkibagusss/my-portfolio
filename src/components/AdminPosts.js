"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (!error) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="border border-neutral-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{post.title}</h3>
              <p className="text-sm text-neutral-500">
                {post.published ? "Published" : "Draft"}
              </p>
            </div>

            <div className="flex gap-4 text-sm ">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-500 hover:underline"
              >
                View
              </Link>

              <Link
                href={`/admin/posts/${post.id}/edit`}
                className="text-neutral-500 hover:underline"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
