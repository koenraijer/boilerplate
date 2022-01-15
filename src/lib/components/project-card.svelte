<script>
    export let url = ''
    export let name = ''
    export let slug = ''
    export let description = ''
</script>

<div class="relative group card shadow-2xl col-span-1">
  <img src={url} alt={name} class="object-contain" />
  <a href={`/projects/${slug}`}>
    <div
      class="p-5"
    >
      <h2 class="font-bold lg:text-xl">{name}</h2>
      <p class="text-sm lg:text-xl">
        {description.slice(0, 80)}...
      </p>
    </div>
  </a>
</div>