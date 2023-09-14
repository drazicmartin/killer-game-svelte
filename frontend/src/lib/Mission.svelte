<script lang="ts">
    export let mission = "MISSION DESCRIPTION";
    export let target_name = "TARGET NAME";
    export let title = "MAIN TITLE";
</script>

<div class="text-center grow hover:border-blue-500 hover:border-solid hover:bg-blue-100 hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-double border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3 px-8">
    <div class="flex flex-col">
        <div class="text-center text-cyan-800 text-3xl">{title}</div>
        <div class="text-center text-lg">You have to <span class="text-red-500">kill</span> <span class="font-bold">{target_name}</span></div>
        <div class="text-center grow hover:border-red-900 hover:border-solid hover:bg-red-100 hover:text-red-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-double border-red-300 text-sm leading-6 text-slate-900 font-medium py-3 px-8">
            Mission : 
            <div>
                {mission}
            </div>
        </div>
        <button type="button" class="btn variant-filled mt-3 bg-red-600">I killed !</button>
    </div>
</div>