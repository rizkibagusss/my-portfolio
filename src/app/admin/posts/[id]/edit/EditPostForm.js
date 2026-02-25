"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";

export default function EditPostForm() {
  const router = useRouter();
  const params = useParams();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("posts")
        .select("*")
        .eq("id", params.id)
        .single();

      if (data) {
        setTitle(data.title);
        setSlug(data.slug);
        setExcerpt(data.excerpt);
        setContent(data.content || "");
        setPublished(data.published);
      }

      setLoading(false);
    };

    fetchPost();
  }, [params.id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await supabase
      .from("posts")
      .update({
        title,
        slug,
        excerpt,
        content,
        published,
      })
      .eq("id", params.id);

    router.push("/admin");
  };

  if (loading) return null;

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-2xl font-medium mb-8">Edit Post</h1>

        <form onSubmit={handleUpdate} className="space-y-6">
          <input
            className="w-full border p-3 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="w-full border p-3 rounded-md"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />

          <textarea
            className="w-full border p-3 rounded-md"
            rows="3"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />

          <textarea
            className="w-full border p-3 rounded-md"
            rows="8"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            Published
          </label>

          <button className="bg-black text-white px-6 py-3 rounded-md">
            Update Post
          </button>
        </form>
      </div>
    </main>
  );
}
