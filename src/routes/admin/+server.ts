import { json, error } from "@sveltejs/kit";

export async function GET({ locals: { supabase, getSession } }) {
  const session = await getSession();

  if (!session) throw error(401, { message: "Unauthorized" });

  const { data } = await supabase.from("test").select("*");

  return json({ data });
}
