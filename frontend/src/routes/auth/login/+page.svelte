<!-- // src/routes/login/+page.svelte -->
<script>
	import { enhance } from '$app/forms'
    import GiHalfDead from 'svelte-icons/gi/GiHalfDead.svelte'
	export let form
</script>

{#if form}
<h4>
    {form.message}
</h4>
{/if}

<section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
    <div class="container h-full p-10">
      <div
        class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div class="w-full">
          <div
            class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div class="g-0 lg:flex lg:flex-wrap">
              <!-- Left column container-->
              <div class="px-4 md:px-0 lg:w-6/12">
                <div class="md:mx-6 md:p-12">
                  <!--Logo-->
                  <div class="text-center">
                    <div class="h-32 text-orange-600">
                        <GiHalfDead />
                    </div>
                    <h4 class="mb-12 mt-1 pb-1 text-xl text-orange-600 font-semibold">
                      Killer Game !
                    </h4>
                  </div>
  
                  <form method="POST" action="?/login">
                    <p class="mb-4">Please login to your account</p>
                    <!--Username input-->
                    <div class="relative mb-4 border-solid">
                      <input
                        type="text"
                        class="peer min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
                        value={form?.email ?? ''}
                        name="email"
                        required
                        placeholder="Email" />
                    </div>
  
                    <!--Password input-->
                    <div class="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="password"
                        name="password"
                        required
                        class="peer min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
                        id="exampleFormControlInput11"
                        placeholder="Password" />
                    </div>
  
                    <!--Submit button-->
                    <div class="mb-12 pb-1 pt-1 text-center">
                      <button
                        class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style="
                          background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                        ">
                        Log in
                      </button>
                      <button
                        class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style="
                          background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                        ">
                        Register
                      </button>
  
                      <!-- Forgot password link
                      <a href="#!">Forgot password?</a> -->
                    </div>
                  </form>
                </div>
              </div>
  
              <!-- Right column container with background and description-->
              <div
                class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)">
                <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 class="mb-6 text-xl font-semibold">
                    Organize and play killer Game !
                  </h4>
                  <p class="text-sm">
                    Killer is a game about killing your target (i.e. complet a given task) before the one that has you in target kill you.
                    When you kill someone you get his mission back.
                    <br>
                    <br>
                    Made & hoted by Drazic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>