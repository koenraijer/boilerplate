<script context="module">
    import { client } from '$lib/graphql-client'
    import { postQuery } from '$lib/graphql-queries'
    import { marked } from 'marked'
  
    export const load = async ({ params }) => {
      const { slug } = params
      const variables = { slug }
      const { post } = await client.request(postQuery, variables)
  
      return {
        props: {
          post,
        },
      }
    }
  </script>
  
  <script>
    export let post
    import {seo} from '@lib/stores.js'
    const { title, date, tags, content, coverImage } = post
  </script>
  
  <svelte:head>
    <title>{title} | {$seo.title} </title>
  </svelte:head>

<section class="max-w-[80ch] max-w-5xl mx-auto">
  <div class="prose prose-md lg:prose-xl">
    <h1>{title}</h1>
  </div>
  
  <p class="text-secondary text-xs tracking-widest font-semibold pt-1">
      {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
  </p>
  
  <div class="mb-5 flex justify-between">
    <div>
      {#if tags}
        <div class="mt-5 space-x-2">
          {#each tags as tag}
          <span class="badge badge-outline rounded-lg py-3">{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  
  <article class="prose prose-md lg:prose-lg">
    {@html marked(content)}
  </article>
</section>
