<script lang="ts">
    import { page } from '$app/stores';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import Mission from "$lib/Mission.svelte";
    import IoIosWarning from 'svelte-icons/io/IoIosWarning.svelte'
			
    const modalStore = getModalStore(); 

    export let data;
    let delete_game_form = undefined;

    let game_name;
    $: game_name = data.game.game_name;
    $: game_id = data.game.id;
    
    let mission_1;
    let mission_2;
    $: mission_1 = data.game.state.loop[data.user.id].m1;
    $: mission_2 = data.game.state.loop[data.user.id].m2;
    
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
    <div class="flex justify-center mx-2">
        <h2 class="grow max-w-2xl hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-double border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 px-8 bg-white">
            Game ID : {game_id}
        </h2>
    </div>
    <ul class="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 text-sm leading-6">
        <Mission
            title="Your Principal Target" 
            mission={mission_2.mission} 
            target_name={mission_2.target}
          />
        <Mission
            title="Your Second Target" 
            mission={mission_2.mission} 
            target_name={mission_2.target}
          />
    </ul>
</section>

<style>
    .icon {
        color: red;
        width: 32px;
        height: 32px;
    }
</style>