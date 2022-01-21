<script>
    import Checkmark from '$lib/components/svg/checkmark.svelte';

</script>
<div class="grid mb-10 sm:mb-16 lg:mb-20 mx-auto py-5">
    <div class="grid grid-cols-1 lg:grid-cols-3 text-center lg:text-left max-w-screen sm:max-w-5xl">
        <div class="relative col-span-1 lg:col-span-2">
            <h1 class="hero-h1 pb-3 mx-auto text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary">
                Welkom bij Boilerplate
            </h1>
            <p class="mb-5 lg:text-left text-center prose-xl max-w-xl mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem.
            </p> 
            <a href="/contact" class="btn ml-5 btn-primary  text-base text-base-100">Contact
            </a>
        </div>

        <div class="col-span-1 mx-auto">
            <table class="block sm:hidden lg:block text-xl">
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>Zondag
                    </td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>Maandag</td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>Dinsdag
                        </td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>Woensdag
                        
                    </td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>Woensdag
                    </td>
                </tr>
                <tr>
                    <td class="text-accent text-3xl"><Checkmark/></td>
                    <td>Donderdag</td>
                </tr>
            </table>
            <div class="hidden sm:flex flex-row lg:hidden">
                <div>
                    <table class="mr-5 text-xl">
                        <tr>
                            <td class="text-accent-focus text-3xl"><Checkmark/></td>
                            <td>All proceeds to KiKa Foundation
                                <span class="tooltip tooltip-hover tooltip-info tooltip-top" data-tip="Stichting Kinderen Kankervrij helps fund research for treating cancer in children">
                                    <svg class="w-5 h-5 inline transform -translate-x-1 -translate-y-2 stroke-info"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-accent-focus text-3xl"><Checkmark/></td>
                            <td>Mobile-first design</td>
                        </tr>
                        <tr>
                            <td class="text-accent-focus text-3xl"><Checkmark/></td>
                            <td>Intuitive content editor</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <table class="text-xl">
                        <tr>
                            <td class="text-accent-focus text-3xl"><Checkmark/></td>
                            <td>Blazing fast</td>
                        </tr>
                        <tr>
                            <td class="text-accent-focus text-3xl"><Checkmark/></td>
                            <td>Free hosting</td>
                        </tr>
                        <tr>
                            <td class="text-accent-focus text-3xl"><Checkmark/></td>
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