// src/routes/login/+page.server.js
import { fail } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export const actions = {
    delete_game: async ({ request, locals: { supabase }, params }) => {
        const game_id = params.game_id as number;

        if (!game_id) {
            return fail(400, {
                error: 'Please specify enter a game id'
            });
        }

        const { error } = await supabase
            .from('games')
            .delete()
            .eq('id', game_id);
        
        console.log(error);
        console.log(game_id);
            
        if (error) {
            return fail(500, { message: 'Server error. Try again later.', success: false })
        }
    
        throw redirect(302, "/");
    }
}
