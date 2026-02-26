import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection({ projects }) {
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

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`}>
            <div className="cursor-pointer">
              <div className="aspect-4/2 rounded-xl overflow-hidden bg-neutral-200 relative shadow-md">
                {project.image_url ? (
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-200"></div>
                )}
              </div>

              <h3 className="mt-6 text-lg font-medium">{project.title}</h3>

              <p className="mt-2 text-neutral-600">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
