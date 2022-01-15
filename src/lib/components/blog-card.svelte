<script>
    import {marked} from 'marked'

    export let url = ''
    export let title = ''
    export let content = ''
    export let tags = ''
    export let slug = ''
</script>

<a href={`/posts/${slug}`} class="group block">
    <div class="card text-center shadow-2xl mb-20 group-hover:scale-101 transition duration-1000ms ease-in-out transform-gpu">
        <figure class="h-40 overflow-hidden">
            <img
            class="object-contain h-100"
            src={url}
            alt={`Cover image for ${title}`}
            />
        </figure>
    <div class="card-body prose">
    <h2 class="title">{title}</h2>
    {@html marked(content).slice(0, 150)}
    <div class="flex justify-center mt-5 space-x-2">
        {#each tags as tag}
        <span class="badge badge-outline rounded-lg py-3">{tag}</span>
        {/each}
    </div>
    <div class="justify-end card-actions">
        <a href={`/posts/${slug}`} class="btn btn-outline btn-primary no-underline group-hover:bg-primary-focus group-hover:border-primary-focus group-hover:text-primary-content"
        >Read more</a
        >
    </div>
    </div>
    </div>
</a>