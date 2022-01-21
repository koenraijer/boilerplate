<script context="module">
    import { client } from '$lib/graphql-client'
    import { authorsQuery } from '$lib/graphql-queries'
    import { marked } from 'marked'
  
    export const load = async () => {
      const { authors } = await client.request(authorsQuery)
  
      return {
        props: {
          authors,
        },
      }
    }
  </script>
  
  <script>
    import Author from '$lib/components/author.svelte'
    import {seo} from "../stores.js"
    export let authors

    const {
      name,
      intro,
      bio,
      picture: { url },
    } = authors[0]

    $seo = {
      title: "Over " + authors[0].name,
      description: "Meer informatie over ons."
    }

  </script>
  
  <div class="prose prose-lg max-w-[80ch] mx-auto ">
    <h1 class="font-bold mb-20 text-left text-5xl">
      Over John Doe
    </h1>
  </div>

  <div class="container max-w-[80ch] mx-auto">
    <Author {name} {intro} {url}/>
  </div>
  
  <article div class="prose prose-lg max-w-[80ch] mx-auto">
    {@html marked(bio)}
  </article>