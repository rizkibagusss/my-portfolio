import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import EditPostForm from "./EditPostForm";

export default async function EditPostPage() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/admin/login");
  }

  return <EditPostForm />;
}
