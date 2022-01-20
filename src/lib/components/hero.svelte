<script>
    import GraphcmsIcon from '$lib/components/svg/graphcms-icon.svelte';
    import TailwindIcon from '$lib/components/svg/tailwind-icon.svelte';
    import SvelteIcon from '$lib/components/svg/svelte-icon.svelte';
    import VercelIcon from '$lib/components/svg/vercel-icon.svelte';
    import Checkmark from '$lib/components/svg/checkmark.svelte';

    export let language = true;

</script>
<div class="grid mb-10 sm:mb-16 lg:mb-20 mx-auto py-5">
    <div class="grid grid-cols-1 lg:grid-cols-3 hero-content text-center lg:text-left max-w-5xl">
        <div class="relative col-span-1 lg:col-span-2">
            <h1 class="hero-h1 pb-3 text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary">
                {language ? "Fast, responsive, customized." : "Snel, effectief, op maat gemaakt."}
            </h1>
            <div class="flex justify-center mx-auto max-w-screen lg:justify-start mb-4 text-neutral ">
                <span class="text-sm md:text-lg pr-5"><SvelteIcon/> SvelteKit</span>
                <span class="text-sm md:text-lg pr-5"><TailwindIcon/> TailwindCSS</span>
                <span class="text-sm md:text-lg pr-5"><GraphcmsIcon/> GraphCMS</span>
                <span class="text-sm md:text-lg pr-5"><VercelIcon/> Vercel</span>
            </div>
            <p class="mb-5 lg:text-left text-center prose-xl max-w-xl mx-auto lg:mx-0">
                {language ? "I build practical and affordable websites for small businesses using modern technologies." : "Ik bouw praktische en betaalbare websites voor kleine ondernemers met de nieuwste technologie."}
            </p> 
            <a href="/projects" class="btn btn-outline text-base mb-4 md:mb-0">Portfolio</a>
            <a href="/contact" class="btn ml-5 btn-primary  text-base text-base-100">
                {language ? "Get started" : "Begin nu"}
            </a>
        </div>

        <div class="col-span-1 mx-auto">
            <table class="block sm:hidden lg:block text-xl">
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>{language ? "All proceeds go to the KiKa Foundation" : "Alle opbrengst gaat naar Stichting KiKa"} 
                        <span class="tooltip tooltip-secondary tooltip-top" data-tip="{language ? "Stichting Kinderen Kankervrij helps fund research for treating cancer in children" : "Stichting KiKa financiert onderzoek naar behandelingen voor kinderkanker."}">
                            <svg class="w-5 h-5 inline transform -translate-x-1 -translate-y-2 stroke-secondary"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>Mobile-first design</td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>{language ? "Intuitive content editor" : "Makkelijk zelf website aanpassen"}
                        </td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>{language ? "Blazing fast" : "Bliksemsnel"}
                        
                    </td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>
                        {language ? "Free hosting" : "Gratis hosting"}
                    </td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>Volledig toegankelijk (accessibility)</td>
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