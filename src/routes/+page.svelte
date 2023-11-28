<svelte:head>
  <title>TD3V</title>
</svelte:head>
<script>
  import TypeWriter from 'svelte-typewriter'
</script>
<div class="h-screen bg-gradient-to-b from-sky-900 to-gray-900 pt-20 pb-16 px-4 flex flex-col justify-center items-center">
  <TypeWriter mode="cascade" keepCursorOnFinish>
    <div class="flex justify-center flex-col items-center">
      <img class="h-40 w-40 rounded-full border-sky-500 border-4 shadow-xl" src="/logo_td3v.png" alt="Profile of TD3V" data-static />
      <h1 class="font-roboto font-bold text-white text-7xl mb-6" data-static>TD3V</h1>
      <h2 class="font-roboto font-normal text-white text-2xl mb-12">Developer & Cyber Security enthusiast.</h2>
      <a sapper:prefetch href="/about" class="rounded-md bg-transaprent border-sky-500 border-2 text-sky-500 font-robotomono font-normal px-2 py-1 hover:bg-sky-500 ease-in-out duration-300 hover:text-white" data-static>More Info!</a>
    </div>
  </TypeWriter>
</div>