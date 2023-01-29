<script>
  /**
  * @type {string}
  */
  export let imgUrl
  /**
  * @type {string}
  */
  export let refLink
  /**
  * @type {string}
  */
  export let title
  /**
  * @type {string}
  */
  export let alt
</script>

<div class="rounded-lg shadow-lg bg-black max-w-sm">
  <a href="{refLink}" target="_blank" rel="noreferrer">
    <img class="rounded-t-lg" src="{imgUrl}" alt="{alt}"/>
  </a>
  <div class="p-6">
    <p class="text-white text-xl font-robotomono font-normal mb-3">{title}</p>
    <slot/>
    <a href="{refLink}" target="_blank" rel="noreferrer" class="rounded-md bg-transaprent border-sky-500 border-2 text-sky-500 font-robotomono font-normal px-2 py-1 hover:bg-sky-500 ease-in-out duration-300 hover:text-white">Goto Project</a>
  </div>
</div>