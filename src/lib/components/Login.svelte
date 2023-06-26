<script lang="ts">
  import { goto } from "$app/navigation";
  import GoogleLogo from "phosphor-svelte/lib/GoogleLogo";
</script>

<h1>Você não está logado</h1>
<p>Entre com a sua conta <b>Escola RS</b></p>
<button on:click={() => goto("/auth/login")}>
  <GoogleLogo size="1.5rem" weight="bold" />
  Entrar
</button>

<style lang="scss">
  button {
    font-weight: bold;
    vertical-align: center;
    line-height: 0;
  }
</style>
