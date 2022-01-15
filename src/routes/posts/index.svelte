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
    export let posts
  </script>
  
  <svelte:head>
    <title>Koen Raijer | Blog</title>
  </svelte:head>

  <h1 class="text-5xl mb-10 font-extrabold">All posts</h1>

{#each posts as { title, slug, content, coverImage, tags }}
  <BlogCard url={coverImage.url} {title} {content} {tags} {slug}/>
{/each}