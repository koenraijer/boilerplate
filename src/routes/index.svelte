<script context="module">
    import BlogCard from '$lib/components/blog-card.svelte'
    import Hero from '$lib/components/hero.svelte'

    import GraphcmsIcon from '$lib/components/svg/graphcms-icon.svelte';
    import TailwindIcon from '$lib/components/svg/tailwind-icon.svelte';
    import SvelteIcon from '$lib/components/svg/svelte-icon.svelte';
    import VercelIcon from '$lib/components/svg/vercel-icon.svelte';

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
</script>

<svelte:head>
    <title>Koen Raijer | Personal website, blog and portfolio.</title>
</svelte:head>

{#each authors as {name, intro, picture: {url} }}
    <div class="grid mb-10 sm:mb-16 lg:mb-20 mx-auto py-5">
        <div class="grid grid-cols-1 lg:grid-cols-3 hero-content text-center lg:text-left max-w-5xl">
            <div class="relative col-span-1 lg:col-span-2">
                  <div class="btn-group">
                    <label class="cursor-pointer text-md px-2">
                        <input type="radio" name="languages" id="english" class="hidden">
                        EN
                    </label>|
                    <label class="cursor-pointer text-md px-2">
                        NL
                        <input type="radio" name="languages" id="dutch" data-title="NL" checked class="hidden"> 
                    </label>
                  </div>
                <h1 class="hero-h1 pb-3 text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary">
                    Fast, responsive, customized. 
                </h1>
                <div class="flex justify-center lg:justify-start mb-4 text-neutral ">
                    <span class="pr-5"><SvelteIcon/> SvelteKit</span>
                    <span class="pr-5"><TailwindIcon/> TailwindCSS</span>
                    <span class="pr-5"><GraphcmsIcon/> GraphCMS</span>
                    <span class="pr-5"><VercelIcon/> Vercel</span>
                </div>
                <p class="mb-5 lg:text-left text-center prose-xl max-w-xl mx-auto lg:mx-0">I build practical and affordable websites for small businesses using modern technologies.</p> 
                <a href="/projects" class="btn btn-outline text-base mb-4 md:mb-0">Portfolio</a>
                <a href="/contact" class="btn ml-5 btn-primary  text-base text-base-100">Get website</a>
            </div>

            <div class="col-span-1 mx-auto">
                <table class="block sm:hidden lg:block text-xl">
                    <tr>
                        <td class="text-accent-focus text-3xl"> &#10004;</td>
                        <td>All proceeds go to the KiKa Foundation
                            <span class="tooltip tooltip-secondary tooltip-top" data-tip="Stichting Kinderen Kankervrij helps fund research for treating cancer in children">
                                <svg class="w-5 h-5 inline transform -translate-x-1 -translate-y-2 stroke-secondary"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-accent-focus text-3xl"> &#10004;</td>
                        <td>Mobile-first design</td>
                    </tr>
                    <tr>
                        <td class="text-accent-focus text-3xl"> &#10004; </td>
                        <td>Intuitive content editor</td>
                    </tr>
                    <tr>
                        <td class="text-accent-focus text-3xl"> &#10004; </td>
                        <td>Blazing fast</td>
                    </tr>
                    <tr>
                        <td class="text-accent-focus text-3xl"> &#10004; </td>
                        <td>Free hosting</td>
                    </tr>
                    <tr>
                        <td class="text-accent-focus text-3xl"> &#10004; </td>
                        <td>Fully accessible</td>
                    </tr>
                </table>
                <div class="hidden sm:flex flex-row lg:hidden">
                    <div>
                        <table class="mr-5 text-xl">
                            <tr>
                                <td class="text-accent-focus text-3xl"> &#10004;</td>
                                <td>All proceeds to KiKa Foundation
                                    <span class="tooltip tooltip-hover tooltip-info tooltip-top" data-tip="Stichting Kinderen Kankervrij helps fund research for treating cancer in children">
                                        <svg class="w-5 h-5 inline transform -translate-x-1 -translate-y-2 stroke-info"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-accent-focus text-3xl"> &#10004;</td>
                                <td>Mobile-first design</td>
                            </tr>
                            <tr>
                                <td class="text-accent-focus text-3xl"> &#10004; </td>
                                <td>Intuitive content editor</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table class="text-xl">
                            <tr>
                                <td class="text-accent-focus text-3xl"> &#10004; </td>
                                <td>Blazing fast</td>
                            </tr>
                            <tr>
                                <td class="text-accent-focus text-3xl"> &#10004; </td>
                                <td>Free hosting</td>
                            </tr>
                            <tr>
                                <td class="text-accent-focus text-3xl"> &#10004; </td>
                                <td>Fully accessible</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
{/each}

<h1 class="font-bold text-lef mb-10 text-4xl">Latest posts</h1>

<div class="grid lg:first:grid-cols-2 gap-10 py-10 md:grid-cols-1 md:px-10 lg:grid-cols-2">
    {#each posts as { title, slug, content, coverImage, tags, date }}
        <BlogCard url={coverImage.url} {title} {content} {date} {tags} {slug}/>
    {/each}
</div>

<style>
    table {
		width: 100%;
		border-collapse:collapse; 
        text-align: left;
	}

    table td {
        padding-top: 0;
			border: 0px solid transparent;
			background-clip: padding-box;
	}

    table tr > td + td {
        /* Inner column spacing */
        border-left-width: 1rem;
	}

    table tr + tr > td {
        /* Inner row spacing */
        border-top-width: 1rem;
	}
</style>