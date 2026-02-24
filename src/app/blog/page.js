import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">All Blog Posts</h1>

          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-black transition"
          >
            ← Back Home
          </Link>
        </div>

        <div className="mt-10">
          {posts?.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block mb-12"
            >
              <h2 className="text-xl font-medium">{post.title}</h2>

              <p className="mt-3 text-neutral-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
