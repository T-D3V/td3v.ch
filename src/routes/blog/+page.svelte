<script>
  import Card from "../../components/card.svelte";
  export let data;
</script>
<svelte:head>
  <title>BLOG | TD3V</title>
</svelte:head>
<div class="h-full min-h-screen bg-gradient-to-b from-sky-900 to-gray-900 pt-20 pb-16 px-4 flex flex-col justify-start items-center">
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full md:w-[75%]">
      {#each data.posts as post}
      <Card title="{post.title}" link="/blog/{post.path}" published="{post.published}" author="{post.author}" excerpt={post.excerpt}/>
      {/each}
  </div>
</div>