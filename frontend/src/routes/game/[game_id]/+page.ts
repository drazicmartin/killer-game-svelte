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

  let is_creator = session.user.id == game.created_by;

  return {
    user: session.user,
    game,
    is_creator,
  }
}