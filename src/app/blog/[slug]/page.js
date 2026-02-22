import Link from "next/link";

export default function BlogDetail({ params }) {
  const { slug } = params;

  const formattedTitle = slug ? slug.replaceAll("-", " ") : "";

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/blog"
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          ← Back to blog
        </Link>

        <h1 className="mt-6 text-3xl font-medium capitalize">
          {formattedTitle}
        </h1>

        <p className="mt-4 text-neutral-600">
          This is the full blog explanation page.
        </p>

        <div className="mt-10 text-neutral-700 leading-relaxed space-y-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Here you will later display full blog content from Supabase.</p>
        </div>
      </div>
    </main>
  );
}
