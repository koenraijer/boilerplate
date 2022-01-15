<script>
    import ThemeSelect from './theme-select.svelte'
  </script>
  
  <div
    class="navbar mb-16 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10"
  >
    <div class="flex-1 px-2 mx-2">
      <a class="text-lg font-bold" href="/">Koen Raijer</a>
    </div>
  
    <div class="dropdown dropdown-left lg:hidden">
      <div tabindex="0" class="m-1 btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
        </svg>
      </div>
      <ul
        tabindex="0"
        class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
      >
        <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
          Portfolio
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/posts">
          Blog
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
          About
        </a>
      </ul>
    </div>
  
    <div class="flex-none hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
          Portfolio
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/posts">
          Blog
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
          About
        </a>
        <div class="px-4">
          <ThemeSelect />
        </div>
      </div>
    </div>
  </div>