// src/routes/profile/+page.ts
import { redirect } from '@sveltejs/kit'

async function fetchCreatedGames(supabase){
    let { data, error } = await supabase
        .from("games")
        .select("*");
    if (error) {
        return error;
    } else {
        return data;
    }
};

async function  fetchGames(supabase){
  const { data, error } = await supabase.from('games').select(`
      *,
      players (*)
    `);
    if (error) {
        return error;
    } else {
        return data;
    }
}

export const load = async ({ parent }) => {
  const { supabase, session } = await parent()
  if (!session) {
    return {
      data: []
    };
  }

  console.log(await fetchGames(supabase));

  return {
    user: session.user,
    created_games: await fetchCreatedGames(supabase),
    games: [],
  }
}
