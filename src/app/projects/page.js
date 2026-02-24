import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">All Projects</h1>

          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-black transition"
          >
            ← Back Home
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects?.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <div className="cursor-pointer">
                <div className="aspect-4/3 rounded-xl overflow-hidden bg-neutral-200 relative">
                  {project.image_url && (
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  )}
                </div>

                <h3 className="mt-6 text-lg font-medium">{project.title}</h3>

                <p className="mt-2 text-neutral-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
