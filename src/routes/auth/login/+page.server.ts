import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ url, locals: { supabase } }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${url.origin}/auth/callback`,
      },
    });

    if (error)
      throw fail(500, {
        message: "Server error. Try again later.",
        success: false,
      });

    throw redirect(301, data.url);
  }
