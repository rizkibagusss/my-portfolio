import Link from "next/link";

export default function ProjectDetail({ params }) {
  const { slug } = params;

  // Format slug safely
  const formattedTitle = slug ? slug.replaceAll("-", " ") : "";

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Back Button */}
        <Link
          href="/projects"
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          ← Back to projects
        </Link>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-medium capitalize">
          {formattedTitle}
        </h1>

        {/* Short Description */}
        <p className="mt-4 text-neutral-600">
          This is the project detail page.
        </p>

        {/* Image Placeholder */}
        <div className="mt-10 aspect-video bg-neutral-200 rounded-xl"></div>

        {/* Content */}
        <div className="mt-10 text-neutral-700 leading-relaxed space-y-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>This content will later come from Supabase.</p>
        </div>
      </div>
    </main>
  );
}
