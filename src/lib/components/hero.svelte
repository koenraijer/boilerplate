<script>
    import Checkmark from '$lib/components/svg/checkmark.svelte';

</script>
<div class="grid mb-20 mx-auto py-5">

    <div class="grid grid-cols-1 md:grid-cols-3 text-center content-start lg:text-left md:mr-auto gap-x-10 md:ml-10">
        <!--Left column with hero-->
        <div class="relative mb-5 col-span-1 md:col-span-2">
            <h1 class="hero-h1 pb-3 text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary">
                Welkom bij Boilerplate
            </h1>
            <p class="mb-5 lg:text-left text-center prose-xl max-w-xl mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem.
            </p> 
        </div>

        <!--Right column with opening hours and contact info-->
        <div class="">
            <div class="card collapse w-full collapse-arrow bg-base-200 shadow-lg col-span-1">
                <input type="checkbox"> 
                <div class="collapse-title text-left text-xl font-medium">
                Openingstijden
                </div> 
                <div class="collapse-content"> 
                    <table class="text-lg">
                        <tr>
                            <td class="">Maandag</td>
                            <td>9:00-17:00</td>
                        </tr>
                        <tr>
                            <td class="">Dinsdag</td>
                            <td>9:00-17:00</td>
                        </tr>
                        <tr>
                            <td class="">Woensdag</td>
                            <td>9:00-17:00</td>
                        </tr>
                        <tr>
                            <td class="">Donderdag</td>
                            <td>9:00-18:00</td>
                        </tr>
                        <tr>
                            <td class="">Vrijdag</td>
                            <td>9:00-18:00</td>
                        </tr>
                        <tr>
                            <td class="">Zaterdag</td>
                            <td>11:00-17:00</td>
                        </tr>
                        <tr>
                            <td class="">Zondag</td>
                            <td>Gesloten</td>
                        </tr>
                    </table>
                </div>
            </div> 
            <div class="card collapse collapse-arrow bg-base-200 shadow-lg p-1 mt-5 sm:max-w-5xl col-span-1">
                <input type="checkbox"> 
                <div class="collapse-title text-left text-xl font-medium">
                Contactgegevens
                </div> 
                <div class="collapse-content w-fit border-rounded"> 
                    <table class="text-lg">
                        <tr>
                            <td class="">Adres</td>
                            <td><a href="/">Calverstraat 12, 1234AB, Amsterdam</a></td>
                        </tr>
                        <tr>
                            <td class="">Telefoonnummer</td>
                            <td><a href="tel:0612345678">0612345678</a></td>
                        </tr>
                        <tr>
                            <td class="">E-mail</td>
                            <td><a href="mailto:johndoe@boilerplate.com">johndoe@boilerplate.com</a></td>
                        </tr>
                    </table>
                </div>
            </div> 
        </div>
    </div>
</div>

<style>
    table {
		border-collapse: collapse; 
        text-align: left;
	}

    table td {
        padding-top: 0;
        border: 0px solid transparent;
        background-clip: padding-box;
	}

    table tr > td + td {
        /* Inner column spacing */
        border-left-width: 1.5rem;
	}

    table tr + tr > td {
        /* Inner row spacing */
        border-top-width: 0.5rem;
	}

</style>