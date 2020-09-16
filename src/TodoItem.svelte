<script>
    import { fade, fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function remove() {
		dispatch('remove', { id });
	}

	function toggleStatus() {
        let newStatus = !complete;
		dispatch('toggle', {
            id,
            newStatus
        });
    }

    export let id; // document ID
    export let text;
    export let complete;
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
</style>
<li class="odd:bg-gray-200" in:fly="{{ y: 900, duration: 500 }}">
    {#if complete}
    <div class="flex justify-between items-center">
        <div>
            <span class="is-complete">{ text }</span>
        </div>
        <div>
            <button on:click={toggleStatus}>❌</button>
            <button class="pt-4" on:click={remove}> 🗑 </button>
        </div>
    </div>
    {:else}
    <div class="flex justify-between items-center">
        <div>
            <span>{ text }</span>
        </div>
        <div>
            <button on:click={toggleStatus}>✔️</button>
            <button class="pt-4" on:click={remove}> 🗑 </button>
        </div>
    </div>
    {/if}


</li>