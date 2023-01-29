<script>
	export let data;
</script>
<svelte:head>
  <title>{data.title} | TD3V</title>
</svelte:head>
<div class="h-full min-h-screen bg-gradient-to-b from-sky-900 to-gray-900 pt-20 pb-16 px-4 flex flex-col items-center">
  <div class="w-full md:w-[50%]">
    <button
		  class="block cursor-pointer text-slate-200 hover:text-slate-400 ease-in-out duration-300"
		  on:click={() => {
			  history.back();
		  }}
	  >
	  	<svg
	  		xmlns="http://www.w3.org/2000/svg"
	  		class="inline h-6 w-6"
	  		fill="none"
	  		viewBox="0 0 24 24"
	  		stroke="currentColor"
	  		stroke-width="2"
	  	>
	  		<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
	  	</svg>
	  	Back
	  </button>
	  <h1 class="text-slate-200 font-roboto font-bold text-6xl mb-2">{data.title}</h1>
	  <p class="font-roboto font-thin text-slate-200 mb-6">by {data.author}, {data.published}</p>
	  <div class="prose prose-lg font-robotomono font-extralight text-slate-200">
	  	<svelte:component this={data.content} />
	  </div>
  </div>
</div>