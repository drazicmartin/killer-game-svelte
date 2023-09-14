import { InitGameRotation } from "$lib/Games";

export const load = async ({ parent, params }) => {
  const { supabase, session } = await parent()
  if (!session) {
    return;
  }

  let game_id = 1;

  InitGameRotation(supabase, game_id);

  return;
}