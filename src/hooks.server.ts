import { redirect } from "@sveltejs/kit";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public";

const EMAIL_ENDING = "@educar.rs.gov.br";

export const handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  });

  event.locals.getSession = async () =>
    (await event.locals.supabase.auth.getSession()).data.session;

  if (process.env.NODE_ENV == "production") {
    const session = await event.locals.getSession();

    if (session) {
      const email = session?.user.email!;

      if (!email.endsWith(EMAIL_ENDING)) {
        await event.locals.supabase.rpc("deleteUser");
        await event.locals.supabase.auth.signOut();

        throw redirect(303, "/");
      }
    }
  }

  return resolve(event, {
    filterSerializedResponseHeaders: (name) => name === "content-range",
  });
};
