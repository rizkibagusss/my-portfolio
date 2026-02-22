export default function ProjectsSection() {
  return (
    <section className="py-14">
      {/* Section Title */}
      <h2 className="text-xl font-medium">Selected Projects</h2>

      {/* Project Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project Card */}
        <div>
          <div className="aspect-4/3 bg-neutral-200 rounded-xl"></div>

          <h3 className="mt-6 text-lg font-medium">Motion Primitives Pro</h3>

          <p className="mt-2 text-neutral-600">
            Advanced components and templates to craft beautiful websites.
          </p>
        </div>

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
