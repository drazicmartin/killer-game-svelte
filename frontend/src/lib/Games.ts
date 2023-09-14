import type { SupabaseClient } from "@supabase/supabase-js";
import { fail } from "@sveltejs/kit";
import { each } from "svelte/internal";

export function GetGameStatusColor(game) {
    if (game?.is_finish) return "red"
    else if (game?.is_started) return "green"
    return "orange"
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export async function InitGameRotation(supabase: SupabaseClient, game_id: number){
    const { data: game, error: e_g } = await supabase
                        .from("games")
                        .select("*")
                        .eq("id", game_id)
                        .single();

    if (game.is_started || game.is_finish){
        fail(405, {error: "game already started or finished"});
    }

    const { data: players, error: e_p } = await supabase
                        .from("players")
                        .select("*")
                        .eq("game_id", game_id);
    
    const { data: missions, error: e_m } = await supabase
                        .from("missions")
                        .select("*")
                        .eq("game_id", game_id);

    let state = {};
    state['loop'] = {}
    state['#players'] = 0;

    let remaining_mission = shuffle(missions)
    let players_shuffled = shuffle(players)

    players_shuffled.forEach((player, index, players) => {
        if (remaining_mission.length <= 2){
            remaining_mission = shuffle(missions);
        }

        let target_1_index = (index + 1) % players.length;
        let target_2_index = (index + 2) % players.length;
        let target_1_name = players[target_1_index].name;
        let target_2_name = players[target_2_index].name;
    
        let player_missions = {
            m1: {
                target: target_1_name,
                // target_id: players[target_1_index].user_id,
                mission: remaining_mission.pop().description
            },
            m2: {
                target: target_2_name,
                // target_id: players[target_2_index].user_id,
                mission: remaining_mission.pop().description
            }
        }
    
        state['loop'][player.user_id] = player_missions
    
    
        state['#players'] += 1    
    });

    console.log(state);
    const { error } = await supabase
        .from('games')
        .update({ state: state })
        .eq("id", game_id);
}