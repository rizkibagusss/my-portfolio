import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-24">
        {/* Back to Home */}
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          ← Back to home
        </Link>

        <h1 className="mt-6 text-2xl font-medium">All Blog Posts</h1>

        <div className="mt-12 space-y-12">
          <div>
            <Link href="/blog/exploring-design-ai">
              <h2 className="text-lg font-medium hover:underline">
                Exploring the Intersection of Design, AI, and Design Engineering
              </h2>
            </Link>

            <p className="mt-2 text-neutral-500">
              How AI is changing the way we design
            </p>
          </div>

          <div>
            <Link href="/blog/why-i-left-my-job">
              <h2 className="text-lg font-medium hover:underline">
                Why I left my job to start my own company
              </h2>
            </Link>

            <p className="mt-2 text-neutral-500">
              A deep dive into my decision to leave my job and start my own
              company
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
