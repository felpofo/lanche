import { redirect } from "@sveltejs/kit";

export async function GET({ url, locals: { supabase } }) {
  const code = url.searchParams.get("code");

  if (code) await supabase.auth.exchangeCodeForSession(code);

  throw redirect(303, "/");
}
