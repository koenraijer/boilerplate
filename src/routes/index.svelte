<script context="module">
    import ProjectCard from '$lib/components/project-card.svelte'

    /* import gql, and {client} 
        - gql creates our query
        - the client takes our query and returns data inside of a const.
    */
    import {client} from '$lib/graphql-client'
    import { authorsQuery, projectsQuery } from '$lib/graphql-queries'

    export const load = async () => {        

        // 2. Give that query to the GraphQL client.
        const [authorsReq, projectsReq] = await Promise.all([
            client.request(authorsQuery),
            client.request(projectsQuery),
        ])

        const {authors} = authorsReq
        const {projects} = projectsReq 

        // 3. Return that data to the <script> tag
        return {
            props: {
                authors,
                projects,
            },
        }
    }  
</script>

<script>
    // 4. Export the data for use in the page
    export let authors
    export let projects
</script>

<svelte:head>
    <title>Koen codes</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">Koen codes</h1>

{#each authors as {name, intro, picture: {url} }}
    <div class="flex mb-40 items-end">
        <div class="mr-6">
        <h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
        <p class="text-xl mb-4">{intro}</p>
        </div>

        <img class="mask mask-squircle h-48" src={url} alt={name} />
    </div>
{/each}

{#each projects as { name, slug, description, image }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
{/each}
