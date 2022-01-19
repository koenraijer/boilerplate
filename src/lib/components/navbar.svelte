<script>
    import ThemeSelect from './theme-select.svelte'
    import GithubIcon from '$lib/components/svg/github-icon.svelte'
    import { page } from '$app/stores';

    let active = "text-secondary"
    let inactive = "text-base-content"

   
    
  </script>
  <div
    class="md:py-3 lg:py-5 mb-16 shadow-lg bg-base-100 sticky top-0 z-10"
  >
    <div class="container flex items-center justify-between max-w-7xl mx-auto">
      <div class="flex-1 pl-4 pr-2 lg:pr-4">
        <a class="text-xl tracking-wide" href="/">Koen Raijer</a>
      </div>
    
      <div class="flex items-center justify-between lg:hidden">
        <div class="px-2 lg:px-4">
          <ThemeSelect />
        </div>
        <div class="px-2 lg:px-4">
          <a target="_blank" rel="noopener" href="https://github.com/koenraijer/">
            <GithubIcon/>
          </a>
        </div>
        <div class="w-1 h-full border-r-2 border-black">‎</div>
      </div>
      <div class="dropdown dropdown-end lg:hidden">
        <div tabindex="0" class=" pl-2 pr-4 lg:pl-4 py-4 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
          </svg>
        </div>
        <ul tabindex="0" class="bg-base-200 grid justify-items-center rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content shadow-lg">
          <a sveltekit:prefetch class="decoration-2 underline-offset-4 hover:text-primary  px-5 capitalize text-lg transition-all hover:scale-[1.10] transition-scale scale-100 duration-150 ease-bounce {($page.url.pathname === '/projects')? active : inactive}" href="/projects">
            Portfolio
          </a>
          <a class:text-secondary={$page.url.pathname === '/posts'} sveltekit:prefetch class="decoration-2 underline-offset-4 hover:text-primary  px-5 capitalize text-lg transition-all hover:scale-[1.10] transition-scale scale-100 duration-150 ease-bounce {($page.url.pathname === '/posts')? active : inactive}" href="/posts">
            Blog
          </a>
          <a class:text-secondary={$page.url.pathname === '/about'} sveltekit:prefetch class="decoration-2 underline-offset-4 hover:text-primary  px-5 capitalize text-lg transition-all hover:scale-[1.10] transition-scale scale-100 duration-150 ease-bounce {($page.url.pathname === '/about')? active : inactive}" href="/about">
            About
          </a>
        </ul>
      </div>
    
      <div class="flex-none hidden px-2 mx-2 lg:flex">
        <div class="flex items-stretch">
          <a sveltekit:prefetch class="decoration-2 underline-offset-4 hover:text-primary  px-5 capitalize text-lg transition-all hover:scale-[1.10] transition-scale scale-100 duration-150 ease-bounce {($page.url.pathname === '/projects')? active : inactive}" href="/projects">
            Portfolio
          </a>
          <a class:text-secondary={$page.url.pathname === '/posts'} sveltekit:prefetch class="decoration-2 underline-offset-4 hover:text-primary  px-5 capitalize text-lg transition-all hover:scale-[1.10] transition-scale scale-100 duration-150 ease-bounce {($page.url.pathname === '/posts')? active : inactive}" href="/posts">
            Blog
          </a>
          <a class:text-secondary={$page.url.pathname === '/about'} sveltekit:prefetch class="decoration-2 underline-offset-4 hover:text-primary  px-5 capitalize text-lg transition-all hover:scale-[1.10] transition-scale scale-100 duration-150 ease-bounce {($page.url.pathname === '/about')? active : inactive}" href="/about">
            About
          </a>
          <div class="w-1 h-full border-r-2 border-neutral"></div>
          <div class="px-4">
            <ThemeSelect />
          </div>
          <div class="px-4">
            <a target="_blank" rel="noopener" href="https://github.com/koenraijer/">
              <GithubIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
