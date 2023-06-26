import { redirect } from "@sveltejs/kit";

export const load = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get("code");

  if (code) await supabase.auth.exchangeCodeForSession(code);

  throw redirect(303, "/");
}
