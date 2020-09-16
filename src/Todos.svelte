<script>
    import TodoItem from './TodoItem.svelte';

    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    // User ID passed from parent
    export let uid;

    // Form Text
    let text = '';

    // Query requires an index, see screenshot below
    const query = db.collection('todos').where('uid', '==', uid).orderBy('created');

    const todos = collectionData(query, 'id').pipe(startWith([]));

    function add() {
        db.collection('todos').add({ uid, text, complete: false, created: Date.now() });
        text = '';
    }

    function updateStatus(event) {
        const { id, newStatus } = event.detail;
        db.collection('todos').doc(id).update({ complete: newStatus });
    }

    function removeItem(event) {
        const { id } = event.detail;
        db.collection('todos').doc(id).delete();
    }
</script>

<style>
    input { display: block }
</style>

<div class="flex items-center justify-between my-2">
    <input class="py-1 px-2 border border-gray-400 rounded" placeholder="Add a task" bind:value={text}>
    <button class="bg-green-600 text-white font-bold px-3 py-1 rounded-lg" on:click={add}>Add Task</button>
</div>

<ul class="">
	{#each $todos as todo}
        <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
	{/each}
</ul>

