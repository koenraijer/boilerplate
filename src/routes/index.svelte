<script context="module">
    import BlogCard from '$lib/components/blog-card.svelte'
    import Hero from '$lib/components/hero.svelte'

    /* import gql, and {client} 
        - gql creates our query
        - the client takes our query and returns data inside of a const.
    */
    import {client} from '$lib/graphql-client'
    import { postsQuery, alertsQuery } from '$lib/graphql-queries'

    export const load = async() => {        

        // 2. Give that query to the GraphQL client.
        const [postsReq, alertsReq] = await Promise.all([
            client.request(postsQuery),
            client.request(alertsQuery)
        ])

        const {authors} = authorsReq
        const {posts} = postsReq
        const {alerts} = alertsReq

        // 3. Return that data to the <script> tag
        return {
            props: {
                posts,
                alerts,
            },
        }
    }  
</script>

<script>
    import {marked} from 'marked'
	import {seo} from '@lib/stores.js'

    export let posts
    export let alerts

</script>

<svelte:head>
    <title>Home | {$seo.title} </title>
</svelte:head>

<div class="alert alert-info mb-10 md:max-w-lg md:ml-0 lg:mr-auto">
<div class="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
    </svg> 
    <p class="">{@html marked(alerts[0].content)}</p> 
</div>
</div>

<Hero/>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
    <div class="card shadow-lg lg:card-side bg-primary-focus text-white">
        <div class="card-body">
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p> 
          <div class="justify-end card-actions">
            <button class="btn btn-primary text-white">
                  Meer informatie
                  
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 ml-2 stroke-current">  
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>                        
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="card shadow-lg lg:card-side bg-secondary-focus text-white">
        <div class="card-body">
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p> 
          <div class="justify-end card-actions">
            <button class="btn btn-secondary text-white">
                  Meer informatie
                  
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 ml-2 stroke-current">  
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>                        
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="card shadow-lg lg:card-side bg-accent-focus text-accent-content">
        <div class="card-body">
          <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p> 
          <div class="justify-end card-actions">
            <button class="btn btn-accent">
                  Meer informatie
                  
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 ml-2 stroke-current">  
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>                        
              </svg>
            </button>
          </div>
        </div>
      </div>
</div>

<h1 class="font-bold text-lef mb-10 text-4xl">Laatste nieuws</h1>

<div class="grid lg:first:grid-cols-2 gap-10 py-10 md:grid-cols-1 md:px-10 lg:grid-cols-2">
    {#each posts as { title, slug, content, coverImage, tags, date }}
        <BlogCard url={coverImage.url} {title} {content} {date} {tags} {slug}/>
    {/each}
</div>
