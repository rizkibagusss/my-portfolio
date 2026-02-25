import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import NewPostForm from "./NewPostForm";

export default async function NewPostPage() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/admin/login");
  }

  return <NewPostForm />;
}
