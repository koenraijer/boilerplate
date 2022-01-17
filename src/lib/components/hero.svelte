<script>
    export let url = ''
    export let name = ''
    export let intro = ''
</script>
<div class="hero sm:mb-16 lg:mb-20">
    <div class="flex-col hero-content text-center lg:flex-row-reverse lg:text-left max-w-5xl">
        <img src={url} alt={name} class="hero-img relative max-w-screen sm:max-w-xs md:max-w-sm mask mask-squircle"> 
        <div>
            <h1 class="hero-h1 pb-2 text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary">
                Hey, I'm Koen
                </h1> 
            <p class="mb-5 prose prose-xl max-w-xl">{intro}</p> 
            <a href="/projects" class="btn mb-4 md:mb-0 btn-primary">Portfolio</a>
            <a href="/contact" class="btn btn-primary ml-5">Contact</a>
        </div>
    </div>
</div>