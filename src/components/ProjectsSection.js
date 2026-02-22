import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="py-14">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Selected Projects</h2>

        <Link
          href="/projects"
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          View All →
        </Link>
      </div>

      {/* Project Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project Card */}
        <Link href="/projects/project-pertama-saya">
          <div className="cursor-pointer">
            <div className="aspect-4/3 bg-neutral-200 rounded-xl"></div>

            <h3 className="mt-6 text-lg font-medium">Project pertama saya</h3>

            <p className="mt-2 text-neutral-600">Lorem ipsum description.</p>
          </div>
        </Link>

        {/* Project Card */}
        <div>
          <div className="aspect-4/3 bg-neutral-200 rounded-xl"></div>

          <h3 className="mt-6 text-lg font-medium">Motion Primitives</h3>

          <p className="mt-2 text-neutral-600">
            UI kit to make beautiful, animated interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
