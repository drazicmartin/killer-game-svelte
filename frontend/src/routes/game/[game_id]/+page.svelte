<script lang="ts">
    import { page } from '$app/stores';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import Mission from "$lib/Mission.svelte";
    import MdSettings from 'svelte-icons/md/MdSettings.svelte'
    import { tick } from 'svelte';
	
    const modalStore = getModalStore();

    export let data;
    export let form;

    let kill_form;

    let game_name;
    $: game_name = data.game.game_name;
    $: game_id = data.game.id;
    $: score = data.self_player.score;
    $: kill_history = data.kill_history;
    
    let mission_1;
    $: mission_1 = data.game.state?.loop[data.user.id];

    let password_value;

    const modal: ModalSettings = {
        type: 'prompt',
        // Data
        title: 'Kill confirmation',
        body: 'Ask the person you just kill to enter his game\'s password (default is "password")',
        // Populates the input value and attributes
        value: '',
        valueAttr: { type: 'password', required: true },
        // Returns the updated response value
        response: async (r: string) => {
            password_value = r;
            await tick();
            if (!!r){
                kill_form.submit();
            }
        },
    };

    function handleFormKill(){
        modalStore.trigger(modal);
    }

</script>

<section>
    <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 ">
      <div class="flex items-center">
        <h2 class="font-semibold text-3xl text-slate-900">
            Game : {data.game.name}
        </h2>
        <a class="h-10 mx-10 flex" href="/game/{game_id}/options">
            <MdSettings />
        </a>
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
    {#if form}
        <div class="bg-{form?.success ? "green" : "red"}-100 border border-{form?.success ? "green" : "red"}-400 text-{form?.success ? "green" : "red"}-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">{form?.success ? "Success" : "Error"}</strong>
            <span class="block sm:inline">{form.message}</span>
        </div>
    {/if}
    <h2 class="grow hover:border-green-700 hover:border-solid hover:bg-white hover:text-green-700 group w-full flex items-center justify-center rounded-md border-2 border-double border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 bg-white">
        Your score : {score}
    </h2>
    <ul class="bg-white p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 text-sm leading-6">
        <Mission
            title="Your Target"
            mission={mission_1?.mission}
            target_name={mission_1?.target_name}
        >
        <form bind:this={kill_form} action="?/kill_player" method="POST" slot="kill_form" on:submit|preventDefault={handleFormKill}>
            <input type="hidden" name="killed_player_password" bind:value={password_value}>
            <input type="hidden" name="killed_player_id" value={mission_1.target_id}>
            <button type="submit" class="btn variant-filled mt-3 bg-red-600 max-w-xl w-full">I killed !</button>
        </form>
        </Mission>
    </ul>
    <ul class="bg-white p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6     gap-4 text-sm leading-6">
        {#each kill_history || [] as name}
            <li class="text-center grow hover:border-black hover:border-solid hover:bg-red-100 hover:text-red-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-double border-slate-300 text-sm leading-6 text-red-600 font-medium py-3 px-8">
                {name}
            </li>
        {/each}
    </ul>
</section>