<script context="module">
    import BlogCard from '$lib/components/blog-card.svelte'

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
    // 4. Export the data for use in the page
    export let authors
    export let posts
</script>

<svelte:head>
    <title>Koen codes</title>
</svelte:head>

{#each authors as {name, intro, picture: {url} }}
    <div class="hero mb-20">
        <div class="flex-col hero-content lg:flex-row-reverse">
            <img src={url} alt={name} class="max-w-xs mask mask-squircle"> 
            <div>
                <h1 class="mb-5 text-5xl font-bold">
                    Hey, I'm Koen
                    </h1> 
                <p class="mb-5">{intro}</p> 
                <a href="/projects" class="btn btn-primary">Portfolio</a>
                <a href="/contact" class="btn btn-primary ml-5">Contact</a>
            </div>
        </div>
    </div>
{/each}

<h1 class="font-bold text-lef mb-10 text-4xl">Latest posts</h1>

{#each posts as { title, slug, content, coverImage, tags }}
    <BlogCard url={coverImage.url} {title} {content} {tags} {slug}/>
{/each}
