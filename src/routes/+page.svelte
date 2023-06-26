<script lang="ts">
  import Login from "$lib/components/Login.svelte";
  import Mainpage from "$lib/components/Mainpage.svelte";
  import UserCard from "$lib/components/UserCard.svelte";

  export let data;
</script>

<main>
  <section>
    {#if data.session}
      {@const user = data.session.user.user_metadata}
      <UserCard {user} />
      <Mainpage />
    {:else}
      <Login />
    {/if}
  </section>
  <a href="/auth/logout">Logout</a>
  <a href="/admin">Admin</a>
</main>

<style lang="scss">
  :global(html, body), main {
    height: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section {
    display: grid;
    place-items: center;
    justify-content: center;
  }
</style>
