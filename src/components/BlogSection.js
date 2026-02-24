import Link from "next/link";

export default function BlogSection({ posts }) {
  return (
    <section className="py-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Blog</h2>

        <Link
          href="/blog"
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          View All →
        </Link>
      </div>

      <div className="mt-10">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className="block cursor-pointer mb-5">
              <h3 className="text-lg font-medium">{post.title}</h3>

              <p className="mt-1 text-neutral-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
