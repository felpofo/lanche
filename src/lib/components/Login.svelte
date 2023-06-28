<script lang="ts">
  import { goto } from "$app/navigation";

  import GoogleLogo from "phosphor-svelte/lib/GoogleLogo";
</script>

<div>
  <h1>Você não está logado</h1>
  <p>Entre com a sua conta <b>Escola RS</b></p>
  <button on:click={() => goto("/auth/login")}>
    <GoogleLogo size="1.5rem" weight="bold" />
    Entrar
  </button>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    line-height: 0;
    text-transform: uppercase;
    gap: 0.5rem;
  }
</style>
