<script>
  import { page } from '$app/stores';
  let showMobileMenu = false;
  
  const navItems = [
    {label: "Home", href:"/"},
    {label: "About", href:"/about"},
    {label: "Projects", href:"/projects"},
  ]

  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
</script>
<header class="bg-transparent fixed flex justify-between w-full px-6 py-4 h-20 z-50">
  <a sapper:prefetch href="/"><img src="/logo_site.png" alt="Cyber Themed Badge" class="h-full hover:scale-95 ease-in-out duration-300 z-50"></a>
  <button id="toggle-nav" class="h-full ease-in-out duration-300 hover:scale-95 hover:text-gray-900 z-50" on:click={handleMobileIconClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-full">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  </svg></button>
  <nav class="fixed w-[75%] h-screen bg-gradient-to-b from-amber-700 to-amber-900 md:w-[25%] right-0 top-0 text-slate-200 py-20 px-10 z-10 ease-in-out duration-300 {showMobileMenu ? '' : 'translate-x-full'}">
    <ul>
      {#each navItems as item}
        <li>
          <a class="font-robotomono font-normal text-3xl cursor-pointer hover:text-slate-400 ease-in-out duration-300{$page.url.pathname === item.href ? ' text-slate-400':''}" href="{item.href}">{item.label}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>