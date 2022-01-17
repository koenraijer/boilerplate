<script>
    export let url = ''
    export let name = ''
    export let slug = ''
    export let description = ''
</script>

<a href={`/projects/${slug}`} class="group block pb-20">
  <div class="relative group card shadow-2xl col-span-1 group-hover:scale-101 transition ease-in-out transform-gpu">
    <img src={url} alt={name} class="object-contain" />
      <div
        class="p-10 pt-0"
      >
        <h2 class="font-bold text-2xl group-hover:text-primary lg:text-3xl">{name}</h2>
        <p class="text-md lg:text-xl">
          {description.slice(0, 90)}...
        </p>
      </div>
  </div>
</a>
