<script lang="ts">
  import { page } from "$app/stores";

  import Login from "$lib/components/Login.svelte";
  import UserCard from "$lib/components/UserCard.svelte";

  const wantsBreakfast: boolean = !!$page.data.wantsBreakfast;
  const wantsLunch: boolean = !!$page.data.wantsLunch;
</script>

<main>
  <section>
    {#if $page.data.session}
      <h1>Eu vou querer</h1>
      <div>
        <form method="post">
          <fieldset>
            <label for="breakfast">
              <input type="checkbox" id="breakfast" name="breakfast" checked={wantsBreakfast} disabled={wantsBreakfast}/>
              Lanche
            </label>
            <label for="lunch">
              <input type="checkbox" id="lunch" name="lunch" checked={wantsLunch} disabled={wantsLunch}/>
              Almoço
            </label>
          </fieldset>
          <button type="submit" disabled={wantsBreakfast && wantsLunch}>Dale</button>
        </form>
      </div>
      <UserCard user={$page.data.session.user.user_metadata} />
    {:else}
      <Login />
    {/if}
  </section>
</main>

<style lang="scss">
  :global(html, body),
  main {
    height: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    padding: 1rem 0;
    margin: 0;
  }
</style>
