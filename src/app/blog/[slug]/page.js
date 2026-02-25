import { supabase } from "@/lib/supabase";
import Link from "next/link";

// 🔥 Dynamic SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data } = await supabase
    .from("posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .single();

  if (!data) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: data.title,
    description: data.excerpt,
  };
}

// 🔥 Page
export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
  }

  if (!post) {
    return <div className="p-10">Post not found.</div>;
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/blog"
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          ← Back to blog
        </Link>

        <h1 className="mt-6 text-3xl font-medium">{post.title}</h1>

        <p className="mt-4 text-neutral-600">{post.excerpt}</p>

        <div className="mt-10 leading-relaxed text-neutral-700 space-y-6">
          <p>{post.content}</p>
        </div>
      </div>
    </main>
  );
}
