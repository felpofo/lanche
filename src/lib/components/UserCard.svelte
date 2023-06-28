<script lang="ts">
  import SignOut from "phosphor-svelte/lib/SignOut";

  export let user: Record<string, any>;
</script>

<article>
  <div class="avatar">
    <img class="icon" src={user.avatar_url} alt={user.name[0]} />
    <a class="signout" href="/auth/logout">
      <SignOut size="2rem" mirrored={true} />
    </a>
  </div>
  <div class="text">
    <span class="name">{user.name}</span>
    <span class="email">{user.email}</span>
  </div>
</article>

<style lang="scss">
  article {
    display: flex;
    align-items: center;

    gap: 1rem;
    padding: 1.25rem 1.15rem;
    margin: 0;

    transition: filter 125ms ease-in-out;
  }

  .avatar {
    position: relative;

    cursor: pointer;
    text-decoration: none;

    .icon {
      border-radius: 0.375rem;

      transition: filter 125ms ease-in-out;
    }

    .signout {
      position: absolute;
      opacity: 0;

      top: 0;
      left: -1.5%; // visual fix; no impact on responsiviness

      width: 100%;
      height: 100%;

      display: grid;
      place-items: center;

      color: var(--contrast);
      mix-blend-mode: overlay;

      transition: opacity 125ms ease-in-out;
    }


    &:hover, &:active, &:focus {
      .signout {
        opacity: 1;
      }

      .icon {
        filter: blur(0.15rem) grayscale(0.5);
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-weight: bold;
    font-size: 1.15rem;
    text-transform: capitalize;
  }

  .email {
    font-size: 0.85rem;
  }
</style>
