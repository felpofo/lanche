<script lang="ts">
  import SignOut from "phosphor-svelte/lib/SignOut";

  export let user: Record<string, any>;
</script>

<article class="card">
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
  .card {
    display: flex;
    align-items: center;

    gap: 1rem;
    padding: 1.5rem 1.25rem;

    transition: filter 125ms ease-in-out;
  }

  .avatar {
      position: relative;

      cursor: pointer;
      text-decoration: none;

      .signout {
        position: absolute;
        opacity: 0;

        top: 0;
        left: -1.5%; // visual fix; no impact on responsiviness

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--contrast);
        mix-blend-mode: overlay;

        transition: opacity 125ms ease-in-out;
      }

      &:hover, &:active, &:focus {
        .signout {
          opacity: 1;
        }

        .icon {
          filter: blur(0.25rem) grayscale(1/2);
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
