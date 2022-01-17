<script context="module">
    import ProjectCard from '$lib/components/project-card.svelte'
    import { client } from '$lib/graphql-client'
    import { projectsQuery } from '$lib/graphql-queries'
  
    export const load = async () => {
      const { projects } = await client.request(projectsQuery)
  
      return {
        props: {
          projects,
        },
      }
    }
  </script>
  
  <script>
    export let projects
  </script>
  
  <svelte:head>
    <title>Projects | Koen Raijer</title>
  </svelte:head>
  
  <h1 class="font-bold mb-20 text-left text-5xl">
    Projects
  </h1>
  
  <div
    class=" h-fit overscroll-none grid gap-10 md:grid-cols-1 md:px-10 lg:grid-cols-2 min-h-screen"
  >
    {#each projects as { name, slug, description, image, type }, index}
      <ProjectCard
        {name}
        {description}
        url={image[0].url}
        {index}
        {slug}
        {type}
      />
    {/each}
  </div>