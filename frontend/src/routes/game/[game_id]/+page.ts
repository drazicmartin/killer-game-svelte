async function fetchGame(supabase, game_id){
    let { data, error } = await supabase
        .from("games")
        .select("*")
        .eq("id", game_id)
        .single();
    if (error) {
        return error;
    } else {
        return data;
    }
};

export const load = async ({ parent, params }) => {
  const { supabase, session } = await parent()
  if (!session) {
    return;
  }

  let game = await fetchGame(supabase, params.game_id)

  let is_admin = session.user.id == game.user_id;

  return {
    user: session.user,
    game,
    is_admin: is_admin,
  }
}