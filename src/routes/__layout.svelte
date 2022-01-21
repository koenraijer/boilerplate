<script context="module">
	import { client } from '$lib/graphql-client'
    import { metadataQuery } from '$lib/graphql-queries'

	export const load = async ({ url }) => {
	  const currentRoute = url.pathname;
	  const { projectMetadatas } = await client.request(metadataQuery)

	  return {
		props: {
		  currentRoute,
		  projectMetadatas,
		}
	  }
	}
</script>

<script>
	import Footer from '@components/footer.svelte'
	import Navbar from '@components/navbar.svelte'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import '../app.css'
	import {fade} from 'svelte/transition'

	// SEO Store
	import {seo} from '@lib/stores.js'

	export let currentRoute; 
	export let projectMetadatas;

	// Set seo store to values provided by API query
	$seo = {
		title: projectMetadatas[0].name,
		description: projectMetadatas[0].description,
		openGraphURL: projectMetadatas[0].openGraphDefaultImage.url,
	}

	onMount(async () => {
	  themeChange(false)
	})

</script>

<svelte:head>
	<title>{$seo.title}</title>
	<meta name="description" content="{$seo.description}">

	<!--Facebook-->
	<meta property="og:image" content="{$seo.openGraphURL}">
	<meta property="og:description" content="{$seo.description}">
	<meta property="og:title" content="{$seo.title}">
	
	<!--Twitter-->
	<meta name="twitter:title" content="{$seo.title}">

	<!--Favicons-->
</svelte:head>

<Navbar url={projectMetadatas[0].logoImage.url}/>

{#key currentRoute}
  <main class="container max-w-7xl mx-auto px-4 mb-20 flex flex-col min-h-screen overflow-x-hidden" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
	<slot />
  </main>
{/key}

<Footer title={$seo.title}/>