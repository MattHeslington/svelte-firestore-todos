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


<li in:fly="{{ x: 900, duration: 500 }}">
    {#if complete}
        <span class="is-complete">{ text }</span>
        <button on:click={toggleStatus}>❌</button>
    {:else}
        <span>{ text }</span>
        <button on:click={toggleStatus}>✔️</button>
    {/if}

    <button on:click={remove}> 🗑 </button>
</li>