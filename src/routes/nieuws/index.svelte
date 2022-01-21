<script context="module">
    import { client } from '$lib/graphql-client'
    import { postsQuery } from '$lib/graphql-queries'
    import { marked } from 'marked'
  
    export const load = async () => {
      const { posts } = await client.request(postsQuery)
  
      return {
        props: {
          posts,
        },
      }
    }
  </script>
  
  <script>
    import BlogCard from '$lib/components/blog-card.svelte'
    import {seo} from '@lib/stores.js'

    export let posts

  </script>
  
  <svelte:head>
    <title>Nieuws | {$seo.title}</title>
  </svelte:head>

  <h1 class="font-bold mb-20 text-left text-5xl">
    Posts
  </h1>
  
<div class="grid gap-10 md:grid-cols-1 md:px-10 lg:grid-cols-2">
  {#each posts as { title, slug, content, coverImage, tags, date }}
  <BlogCard url={coverImage.url} {title} {content} {tags} {slug} {date}/>
  {/each}
</div>
