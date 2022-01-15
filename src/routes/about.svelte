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
    export let authors
    const {
      name,
      intro,
      bio,
      picture: { url },
    } = authors[0]
  </script>
  
  <svelte:head>
    <title>My Portfolio project | About {name}</title>
  </svelte:head>
  
  <div class="hero mb-20">
      <div class="flex-col hero-content lg:flex-row-reverse">
          <img src={url} alt={name} class="max-w-xs mask mask-squircle"> 
          <div>
              <h1 class="mb-5 text-5xl font-bold">
                  Hey, I'm Koen
                  </h1> 
              <p class="mb-5">{intro}</p> 
              <button class="btn btn-primary">See what I've made</button>
          </div>
      </div>
  </div>
  
  <article div class="prose prose-lg">
    {@html marked(bio)}
  </article>