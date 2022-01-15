<script context="module">
	export const load = ({ url }) => {
	  const currentRoute = url.pathname
  
	  return {
		props: {
		  currentRoute
		}
	  }
	}

</script>

<script>
	import Footer from '$lib/components/footer.svelte'
	import Navbar from '$lib/components/navbar.svelte'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import '../app.css'
	import {fade} from 'svelte/transition'

	export let currentRoute; 
	
	onMount(async () => {
	  themeChange(false)
	})
</script>
  
  <Navbar />
{#key currentRoute}
  <main class="container max-w-3xl mx-auto px-4 mb-20 flex flex-col min-h-screen" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
	<slot />
  </main>
{/key}
  <Footer />