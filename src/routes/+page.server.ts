export const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession();
  if (!session) return;

  const userId = session?.user.id;

  const breakfasts = await supabase
    .from("breakfasts")
    .select("*")
    .eq("user_id", userId);

  const lunches = await supabase
    .from("lunches")
    .select("*")
    .eq("user_id", userId);

  const wantsBreakfast = !breakfasts.data || !!breakfasts.data.length;
  const wantsLunch = !lunches.data || !!lunches.data.length;

  return {
    wantsBreakfast,
    wantsLunch,
  }
};

export const actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const form = await request.formData();

    const session = await getSession();
    if (!session) return;

    const id = session?.user.id;

    const wantsBreakfast = !!form.get("breakfast");

    if (wantsBreakfast) {
      const breakfasts = await supabase
        .from("breakfasts")
        .select("*")
        .eq("user_id", id);

      const alreadyChoosed = !breakfasts.data || !!breakfasts.data.length;

      if (!alreadyChoosed)
        await supabase.from("breakfasts").insert([
          {
            user_id: id,
          },
        ]);
    }

    const wantsLunch = !!form.get("lunch");

    if (wantsLunch) {
      const lunches = await supabase
        .from("lunches")
        .select("*")
        .eq("user_id", id);

      const alreadyChoosed = !lunches.data || !!lunches.data.length;

      if (!alreadyChoosed)
        await supabase.from("lunches").insert([
          {
            user_id: id,
          },
        ]);
    }
  },
};
