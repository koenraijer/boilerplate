<script context="module">
    import BlogCard from '$lib/components/blog-card.svelte'
    import Hero from '$lib/components/hero.svelte'

    /* import gql, and {client} 
        - gql creates our query
        - the client takes our query and returns data inside of a const.
    */
    import {client} from '$lib/graphql-client'
    import { authorsQuery, postsQuery } from '$lib/graphql-queries'

    export const load = async () => {        

        // 2. Give that query to the GraphQL client.
        const [authorsReq, postsReq] = await Promise.all([
            client.request(authorsQuery),
            client.request(postsQuery),
        ])

        const {authors} = authorsReq
        const {posts} = postsReq

        // 3. Return that data to the <script> tag
        return {
            props: {
                authors,
                posts,
            },
        }
    }  
</script>

<script>
    import {marked} from 'marked'
    import {page} from '$app/stores'
    // 4. Export the data for use in the page
    export let authors
    export let posts

    let language = true; // True is equal to English 

    $: console.log(language);
</script>

<Hero {language}/>

<h1 class="font-bold text-lef mb-10 text-4xl">Latest posts</h1>

<div class="grid lg:first:grid-cols-2 gap-10 py-10 md:grid-cols-1 md:px-10 lg:grid-cols-2">
    {#each posts as { title, slug, content, coverImage, tags, date }}
        <BlogCard url={coverImage.url} {title} {content} {date} {tags} {slug}/>
    {/each}
</div>
