// src/routes/login/+page.server.js
import { fail } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export const actions = {
    create_game: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData();
    
        const game_name = formData.get('game_name') as string;
        const date = formData.get('date') as Date;

        if (!game_name) {
            return fail(400, {
                error: 'Please enter a game name'
            });
        }
        if (!date) {
            return fail(400, {
                error: 'Please enter a start day and time',
                values: {
                    game_name
                }
            });
        }

        const { error } = await supabase
            .from('games')
            .insert({ name : game_name});

            
        if (error) {
            return fail(500, { message: 'Server error. Try again later.', success: false })
        }
    
        throw redirect(302, "/");
    }
}
