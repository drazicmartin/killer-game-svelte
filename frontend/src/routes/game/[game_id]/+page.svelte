<script lang="ts">
    import { page } from '$app/stores';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import IoIosWarning from 'svelte-icons/io/IoIosWarning.svelte'
			
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
    <div class="flex justify-center mx-2">
        <h2 class="grow max-w-2xl hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-double border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 px-8 bg-white">
            Game ID : {game_id}
        </h2>
    </div>
    <ul class="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 text-sm leading-6">
        <div class="text-center grow hover:border-blue-500 hover:border-solid hover:bg-blue-100 hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-double border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 px-8">
            <h2>Your Principal target</h2>
            <div class="flex flex-col">
                <div>01</div>
                <div>02</div>
                <div class="flex flex-row">
                    <div class="basis-1/3 flex justify-center">
                        <div class="icon">
                            <IoIosWarning />
                        </div>
                    </div>
                    <div class="basis-1/3 flex justify-center">Unknow</div>
                    <div class="basis-1/3 flex justify-center">
                        <div class="icon">
                            <IoIosWarning />
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        <div class="text-center grow hover:border-blue-500 hover:border-solid hover:bg-blue-100 hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-double border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 px-8">
            <div class="flex flex-col">
                <div>01</div>
                <div>02</div>
                <div>Unknow</div>
            </div>
        </div>
    </ul>
</section>

<style>
    .icon {
        color: red;
        width: 32px;
        height: 32px;
    }
</style>