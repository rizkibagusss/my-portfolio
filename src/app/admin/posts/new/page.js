"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const [loading, setLoading] = useState(false);

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("posts").insert([
      {
        title,
        slug,
        excerpt,
        content,
        published,
      },
    ]);

    if (!error) {
      router.push("/admin");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-2xl font-medium mb-8">Create New Post</h1>

        <form onSubmit={handleCreate} className="space-y-6">
          <input
            type="text"
            placeholder="Title"
            className="w-full border border-neutral-300 rounded-md p-3"
            value={title}
            onChange={(e) => {
              const value = e.target.value;
              setTitle(value);
              setSlug(generateSlug(value));
            }}
            required
          />

          <input
            type="text"
            placeholder="Slug (example: my-new-post)"
            className="w-full border border-neutral-300 rounded-md p-3"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />

          <textarea
            placeholder="Excerpt"
            className="w-full border border-neutral-300 rounded-md p-3"
            rows="3"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
          />

          <textarea
            placeholder="Full Content"
            className="w-full border border-neutral-300 rounded-md p-3"
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

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-md hover:opacity-80 transition"
          >
            {loading ? "Creating..." : "Create Post"}
          </button>
        </form>
      </div>
    </main>
  );
}
