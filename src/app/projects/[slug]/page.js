import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
  }

  if (!project) {
    return <div className="p-10">Project not found.</div>;
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/projects"
          className="text-sm text-neutral-500 hover:text-black transition"
        >
          ← Back to projects
        </Link>

        <h1 className="mt-6 text-3xl font-medium">{project.title}</h1>

        {project.image_url && (
          <div className="mt-10 rounded-xl overflow-hidden relative h-125">
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <p className="mt-4 text-neutral-600">{project.description}</p>

        <div className="mt-10 text-neutral-700 leading-relaxed space-y-6">
          <p>{project.content}</p>
        </div>
      </div>
    </main>
  );
}
