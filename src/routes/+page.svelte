<script lang="ts">
  export let data;

  let { session } = data;
</script>

<h1>Home</h1>
<a href="/auth/login">Login</a>
<a href="/auth/logout">Logout</a>
<a href="/admin">Admin</a>
{#if session}
  <pre>{JSON.stringify(session.user.user_metadata, null, 2)}</pre>
{/if}
