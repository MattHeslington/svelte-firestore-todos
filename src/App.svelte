<script>
    import Profile from './Profile.svelte';
    import Todos from './Todos.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<section style="width:700px;" class="mx-auto">

    <div class="mx-auto">
        {#if user}
            <Profile {...user} />
            <!--button on:click={ () => auth.signOut() }>Logout</button-->
            <Todos uid={user.uid} />
        {:else}
            <div class="h-screen flex justify-center items-center">
                <div class="bg-gray-200 p-8 border border-gray-300 shadow rounded-lg">
                    <h2 class="font-bold tracking-tight text-2xl">Please login to continue</h2>
                    <button on:click={login} class="mt-8 w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="button">Login with Google</button>
                    <!--button on:click={login} class="">
                        Signin with Google
                    </button-->
                </div>
            </div>
        {/if}
    </div>

</section>