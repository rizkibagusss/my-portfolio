import { supabase } from "@/lib/supabase";
import BlogSection from "@/components/BlogSection";
import ConnectSection from "@/components/ConnectSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";

export default async function Home() {
  // Fetch featured projects
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false });

  // Fetch latest 3 published posts
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6">
        <HeroSection />
        <ProjectsSection projects={projects || []} />
        <WorkExperienceSection />
        <BlogSection posts={posts || []} />
        <ConnectSection />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
