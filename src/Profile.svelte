<script>
    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    export let displayName;
    export let photoURL;
    export let uid;
</script>

<nav class="flex items-center justify-between my-1 py-2 border-b border-gray-300">
    <div>
        <h1 class="text-red-500 uppercase font-bold text-2xl tracking-tight">svelte todo app</h1>
    </div>
    <div class="flex items-center space-x-2">
        <button class="border border-gray-600 hover:border-red-500 px-3 py-1 text-gray-600 hover:text-red-500 rounded-lg" on:click={ () => auth.signOut() }>Logout</button>
        <span class="text-sm text-gray-800 tracking-tight">{ displayName }</span>
        <img src={ photoURL } class="h-10 w-10 rounded-full" alt="user avatar">
    </div>
</nav>


<!--p>Your userID is { uid }</p-->