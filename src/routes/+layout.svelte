<script>
  import "../styles/app.css"
  import Header from "../components/header.svelte"
</script>
<svelte:head>
  <title>TD3V</title>
</svelte:head>
<Header />
<main>
  <slot />
</main>
<footer class="bg-transparent fixed flex justify-center w-full  px-6 py-4 h-16 bottom-0 z-50">
  <p class="font-robotomono font-normal text-sky-500">Made by &copy;<a href="https://github.com/T-D3V" class="hover:text-sky-700 ease-in-out duration-300" target="_blank" rel="noreferrer">TD3V</a>, {new Date().getFullYear()}</p>
</footer>