<script context="module">
  import {client} from '$lib/graphql-client'
  import {projectQuery} from '$lib/graphql-queries'
  import {marked} from 'marked'
  export const load = async ({ params }) => {
      const {slug} = params
      const variables = {slug}
      const {project} = await client.request(projectQuery, variables)
      return {
          props: {
              project,
          }
      }
  }
</script>

<script>
  import {seo} from '@lib/stores.js'
  export let project
</script>

<svelte:head>
<title>{project.name} | {$seo.title} </title>
</svelte:head>

<div class="max-w-[80ch] mx-auto">
<div class="h-auto mb-5">
  
  {#each project.image as image}
  <div class="h-auto mb-5">
    <img
      class="rounded-lg object-contain"
      src={image.url}
      alt={project.title}
    />
  </div>
  {/each}
</div>
<h1 class="text-4xl font-semibold mb-5">{project.name}</h1>

<div class="mb-5 flex justify-between">
  <div>
    {#if project.tags}
      {#each project.tags as tag}
        <span
          class="badge badge-primary mr-2"
          >{tag}</span
        >
      {/each}
    {/if}
  </div>
</div>

<div
  class="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus"
>
  <a class="mr-5" href={project.demo}>Demo</a>
  <a href={project.sourceCode}>Source Code</a>
</div>

<article class="prose prose-xl">
  {@html marked(project.description)}
</article>
</div>