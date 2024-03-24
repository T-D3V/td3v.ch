<script>
  import CardPircture from "../../components/card-pircture.svelte";"../../components/card-pircture.svelte";
</script>
<svelte:head>
  <title>PROJECTS | TD3V</title>
</svelte:head>
<div class="h-full min-h-screen bg-gradient-to-b from-sky-900 to-gray-900 pt-20 pb-16 px-4 flex flex-col justify-start items-center">
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full md:w-[75%]">
    <CardPircture refLink="https://github.com/T-D3V/td3v.ch" imgUrl="/projects/td3v.ch.png" title="TD3V Site" alt="Screenshot of td3v.ch website">
      <p class="text-slate-200 font-robotomono font-extralight mb-6">
        This is my personal site and links to the git repo
      </p>
    </CardPircture>
    <CardPircture refLink="https://voicesofwynn.com" imgUrl="/projects/voicesofwynn.com.png" title="VoicesOfWynn" alt="Screenshot of Voices of Wynn">
      <p class="text-slate-200 font-robotomono font-extralight mb-6">
        Here I did many things. Like the homepage, being a voicemanager and discord moderator.
      </p>
    </CardPircture>
  </div>
</div>
