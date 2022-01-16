<script>
    export let url = ''
    export let name = ''
    export let intro = ''
</script>
<div class="hero mb-20">
    <div class="flex-col hero-content lg:flex-row-reverse max-w-5xl">
        <img src={url} alt={name} class="max-w-xs mask mask-squircle"> 
        <div>
            <h1 class="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
                Hey, I'm Koen
                </h1> 
            <p class="mb-5">{intro}</p> 
            <a href="/projects" class="btn btn-primary">Portfolio</a>
            <a href="/contact" class="btn btn-primary ml-5">Contact</a>
        </div>
    </div>
</div>