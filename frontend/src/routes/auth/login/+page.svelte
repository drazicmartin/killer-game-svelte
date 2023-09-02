<!-- // src/routes/login/+page.svelte -->
<script>
	import { enhance } from '$app/forms'
	export let form
</script>

{#if form}
<h4>
    {form.message}
</h4>
{/if}

<form method="POST" action="?/login">
    <div
    class="w-full h-full sm:h-auto sm:w-2/5 max-w-sm p-5 bg-white shadow flex flex-col text-base"
    >
    <span
        class="font-sans text-4xl text-center pb-2 mb-1 border-b mx-4 align-center"
    >
        Login / Register
    </span>
    <label class="mt-3 mb-2 font-medium text-lg" for="email">
        <span class="font-mono mr-1 text-red-400">*</span>Email:
    </label>
    <input
        id="email"
        class="bg-gray-100 border py-1 px-3"
        type="email"
        name="email"
        value={form?.email ?? ''}
        required
    />
    <label class="mt-3 mb-2 font-medium text-lg" for="password">
        <span class="font-mono mr-1 text-red-400">*</span>Password:
    </label>
    <input
        id="password"
        class="bg-gray-100 border py-1 px-3"
        type="password"
        name="password"
        required
    />

    <div class="mt-2 flex">
        <span class="block mx-1.5 w-full rounded-md shadow-sm">
            
            <button
                formaction="?/register"
                type="submit"
                class="flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                >
                Register
            </button>
        </span>
        <span class="block w-full mx-1.5 rounded-md shadow-sm">
            <button
                type="submit"
                class="flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                >
                Login
            </button>
        </span>
    </div>
    </div>
</form>

<style>
    form {
        display: flex;
        justify-content: space-evenly;
    }
</style>