 import {writable} from 'svelte/store';

 export const seo = writable({
            title: "Boilerplate", 
            description: "This is a boilerplate using SvelteKit, GraphCMS, TailwindCSS, DaisyUI and Vercel.",
            openGraphURL: '',
        });