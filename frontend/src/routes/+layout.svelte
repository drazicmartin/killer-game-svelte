<script lang="ts">
    import "../tailwind.css"
    import { initializeStores } from '@skeletonlabs/skeleton';
    import { Modal } from '@skeletonlabs/skeleton';

    initializeStores();
</script>


<Modal />
<slot/>