<script>
  import "../styles/app.css"
</script>
<header class="bg-transparent fixed flex justify-between w-full px-6 py-4 h-20">
  <a sapper:prefetch href="/"><img src="/logo_site.png" alt="Cyber Themed Badge" class="h-full hover:scale-95 ease-in-out duration-300"></a>
  <button id="toggle-nav" class="h-full ease-in-out duration-300 hover:scale-95 hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-full">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  </svg></button>
</header>
<main>
  <slot />
</main>
<footer class="bg-transparent fixed flex justify-center w-full  px-6 py-4 h-16 bottom-0">
  <p class="font-robotomono font-extralight text-sky-500">made by &copy;<a href="https://github.com/T-D3V" class="hover:text-sky-600 ease-in-out duration-300" target="_blank" rel="noreferrer">TD3V</a>, {new Date().getFullYear()}</p>
</footer>