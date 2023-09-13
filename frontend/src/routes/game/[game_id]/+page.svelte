<script lang="ts">
    import { page } from '$app/stores';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
			
    const modalStore = getModalStore();
                        

    export let data;
    let delete_game_form = undefined;

    let game_name;
    $: game_name = data.game.game_name;
    $: game_id = data.game.id;
    
    const modal: ModalSettings = {
        type: 'confirm',
        // Data
        title: `Confirm delete ${game_name} Game`,
        body: 'Are you sure you wish to proceed?',
        // TRUE if confirm pressed, FALSE if cancel pressed
        response: (r: boolean) => r ? delete_game_form.submit() : null,
    };

    function handleSubmit(){
        modalStore.trigger(modal);
    }

</script>

<section>
    <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 ">
      <div class="flex items-center justify-between">
        <h2 class="font-semibold text-3xl text-slate-900">
            Game : {data.game.name}
        </h2>
        {#if data?.is_admin}
        <form bind:this={delete_game_form} method="POST" action="?/delete_game" on:submit|preventDefault={handleSubmit}>
            <input type="hidden" value="{game_id}">
            <button
                type="submit"
                class="btn variant-filled-primary"
            >
                Delete Game
            </button>
        </form>
        {/if}
        <form method="POST" action="/auth/logout">
          <a
            href="/"
            class="btn variant-filled"
          >
            Return
        </a>
        </form>
      </div>
    </header>
    <div class="container mx-auto p-8 space-y-8">
        <section>
            <h2>
                Game ID : {game_id}
            </h2>
        </section>
    </div>
</section>