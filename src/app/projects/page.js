import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Back Link */}
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          ← Back to home
        </Link>

        <h1 className="mt-6 text-2xl font-medium">All Projects</h1>

        <p className="mt-4 text-neutral-600">Here are all of my projects.</p>
      </div>
    </main>
  );
}
