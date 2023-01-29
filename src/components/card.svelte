<script>
  export let link
  export let title
  export let published
  export let author
  export let excerpt
</script>

<div class="w-full flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-black max-w-sm">
    <p class="text-slate-200 text-xl font-robotomono font-normal mb-2">{title}</p>
    <p class="text-slate-200 text-md font-robotomono font-extralight mb-6">{author}</p>
    <p class="text-slate-200 text-sm font-robotomono font-extralight mb-6">{excerpt}</p>
    <time datetime="2020-03-16" class="text-slate-200 font-robotomono font-extralight">{published}</time><br><br>
    <a href="{link}" class="rounded-md bg-transaprent border-sky-500 border-2 text-sky-500 font-robotomono font-normal px-2 py-1 hover:bg-sky-500 ease-in-out duration-300 hover:text-slate-200" sapper:prefetch>See Post</a>
  </div>
</div>