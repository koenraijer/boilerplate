<script context="module">
    import ProjectCard from '$lib/components/project-card.svelte'

    /* import gql, and {client} 
        - gql creates our query
        - the client takes our query and returns data inside of a const.
    */
    import {client} from '$lib/graphql-client'
    import {gql} from 'graphql-request'

    export const load = async () => {
        // 1. Make a GraphQL query to define the data needed.
        const query = gql`
            query GetProjects {
                projects {
                name
                slug
                description
                demo
                sourceCode
                image {
                    url
                }
                }
            }
        `
        // 2. Give that query to the GraphQL client.
        const {projects} = await client.request(query)

        // 3. Return that data to the <script> tag
        return {
            props: {
                projects,
            },
        }
    }  
</script>

<script>
    // 4. Export the data for use in the page
    export let projects
</script>

<h1>Recent projects</h1>

{#each projects as { name, slug, description, image }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
{/each}
