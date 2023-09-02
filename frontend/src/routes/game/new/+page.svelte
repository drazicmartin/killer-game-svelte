<script lang="ts">
    export let form
</script>

<section>
    {#if form?.error}
    <h4>
        {form.error}
    </h4>
    {/if}
    <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 ">
      <div class="flex items-center justify-between">
        <h2 class="font-semibold text-3xl text-slate-900">
            New Game
        </h2>
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
            <form action="?/create_game" method="POST" class="flex flex-col">
                <span>Game Name</span>
                <input class="input" type="text" name="game_name" placeholder="Game Name" />
                <div class="my-100">Game Start Time</div>
                <input class="input" title="Input (datetime-local)" name="date" type="datetime-local" />

                <button type="submit" class="btn variant-filled-surface my-2">Create</button>
            </form>
        </section>
    </div>
</section>
