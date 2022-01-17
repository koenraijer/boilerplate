<script>
    export let url = ''
    export let name = ''
    export let intro = ''
</script>
<div class="hero sm:mb-16 lg:mb-20">
    <div class="flex-col hero-content text-center lg:flex-row-reverse lg:text-left max-w-5xl">
        <img src={url} alt={name} class="max-w-xs sm:max-w-md md:max-w-sm mask mask-squircle"> 
        <div>
            <h1 class="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
                Hey, I'm Koen
                </h1> 
            <p class="mb-5 prose prose-xl max-w-xl">{intro}</p> 
            <a href="/projects" class="btn mb-4 md:mb-0 btn-primary">Portfolio</a>
            <a href="/contact" class="btn btn-primary ml-5">Contact</a>
        </div>
    </div>
</div>