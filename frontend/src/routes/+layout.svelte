<script lang="ts">
    import "../tailwind.css"
    import { initializeStores } from '@skeletonlabs/skeleton';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

    initializeStores();
</script>


<Modal />
<slot/>