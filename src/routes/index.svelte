<script context="module">
    import BlogCard from '$lib/components/blog-card.svelte'
    import Hero from '$lib/components/hero.svelte'

    /* import gql, and {client} 
        - gql creates our query
        - the client takes our query and returns data inside of a const.
    */
    import {client} from '$lib/graphql-client'
    import { authorsQuery, postsQuery, alertsQuery } from '$lib/graphql-queries'

    export const load = async() => {        

        // 2. Give that query to the GraphQL client.
        const [authorsReq, postsReq, alertsReq] = await Promise.all([
            client.request(authorsQuery),
            client.request(postsQuery),
            client.request(alertsQuery)
        ])

        const {authors} = authorsReq
        const {posts} = postsReq
        const {alerts} = alertsReq

        // 3. Return that data to the <script> tag
        return {
            props: {
                authors,
                posts,
                alerts,
            },
        }
    }  
</script>

<script>
    import {marked} from 'marked'
    import {page} from '$app/stores'
	import {seo} from '@lib/stores.js'

    export let authors
    export let posts
    export let alerts

</script>

<svelte:head>
    <title>Home | {$seo.title} </title>
</svelte:head>

<div class="card"></div>

<div class="card mb-5 shadow-md md:max-w-md lg:mx-auto lg:card-side bg-warning text-lg text-neutral-content">
    <div class="py-5 card-body">
      <p class="">{@html marked(alerts[0].content)}</p> 
    </div>
  </div> 
  

<Hero/>

<h1 class="font-bold text-lef mb-10 text-4xl">Latest posts</h1>

<div class="grid lg:first:grid-cols-2 gap-10 py-10 md:grid-cols-1 md:px-10 lg:grid-cols-2">
    {#each posts as { title, slug, content, coverImage, tags, date }}
        <BlogCard url={coverImage.url} {title} {content} {date} {tags} {slug}/>
    {/each}
</div>
