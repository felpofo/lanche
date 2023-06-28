import type { SupabaseClient, Session } from "@supabase/supabase-js";
import type { Database } from "$lib/database";

// For information about these interfaces
// see https://kit.svelte.dev/docs/types#app
declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>;
      async getSession(): Promise<Session | null>;
    }
    interface PageData {
      session: Session | null;
    }
    // interface Error {}
    // interface Platform {}
  }
}

export {};
