import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="py-24">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Blog</h2>

        <Link
          href="/blog"
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          View All →
        </Link>
      </div>

      <div className="mt-10 space-y-10">
        <div>
          <Link href="/blog/exploring-design-ai">
            <h3 className="text-lg font-medium hover:underline">
              Exploring the Intersection of Design, AI, and Design Engineering
            </h3>
          </Link>

          <p className="mt-2 text-neutral-500">
            How AI is changing the way we design
          </p>
        </div>

        <div>
          <Link href="/blog/why-i-left-my-job">
            <h3 className="text-lg font-medium hover:underline">
              Why I left my job to start my own company
            </h3>
          </Link>

          <p className="mt-2 text-neutral-500">
            A deep dive into my decision to leave my job and start my own
            company
          </p>
        </div>

        <div>
          <Link href="/blog/first-year-freelancing">
            <h3 className="text-lg font-medium hover:underline">
              What I learned from my first year of freelancing
            </h3>
          </Link>

          <p className="mt-2 text-neutral-500">
            A look back at my first year of freelancing and what I learned
          </p>
        </div>

        <div>
          <Link href="/blog/export-metadata-mdx">
            <h3 className="text-lg font-medium hover:underline">
              How to Export Metadata from MDX for Next.js SEO
            </h3>
          </Link>

          <p className="mt-2 text-neutral-500">
            A guide on exporting metadata from MDX files to leverage Next.js SEO
            features.
          </p>
        </div>
      </div>
    </section>
  );
}
