<script context="module">
    import BlogCard from '$lib/components/blog-card.svelte'
    import Hero from '$lib/components/hero.svelte'

    /* import gql, and {client} 
        - gql creates our query
        - the client takes our query and returns data inside of a const.
    */
    import {client} from '$lib/graphql-client'
    import { postsQuery, alertsQuery } from '$lib/graphql-queries'

    export const load = async() => {        

        // 2. Give that query to the GraphQL client.
        const [postsReq, alertsReq] = await Promise.all([
            client.request(postsQuery),
            client.request(alertsQuery)
        ])

        const {posts} = postsReq
        const {alerts} = alertsReq

        // 3. Return that data to the <script> tag
        return {
            props: {
                posts,
                alerts,
            },
        }
    }  
</script>

<script>
    import {marked} from 'marked'
	import {seo} from '@lib/stores.js'

    export let posts
    export let alerts

</script>

<svelte:head>
    <title>Home | {$seo.title} </title>
</svelte:head>


<section class="md:mb-10">

  <div class="relative overflow-hidden flex items-center bg-cover p-0" style="min-height: 75vh; background-position: 50%;">
    <div class="-skew-x-12 overflow-hidden w-4/6 -right-40 rounded-bl-xl absolute top-0 h-full md:block hidden">

      <div class="skew-x-12 absolute top-0 right-0 left-0 -ml-20 h-full backdrop-brightness-110 backdrop-contrast-125 backdrop-saturate-100 bg-cover bg-center" style="image-rendering: pixelated; z-index: 0; background-image: url('hero.jpg');"></div>
    

    </div>
    <div class="container">
      <div class="grid grid-cols-1 gap-4">

        <div class="alert alert-info -mt-20 mb-10 md:max-w-lg md:ml-0 lg:mr-auto">
          <div class="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
              </svg> 
              <p class="">{@html marked(alerts[0].content)}</p> 
          </div>
        </div>

        <div class="lg:max-w-lg md:max-w-sm flex justify-center flex-col">
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-base-content mb-1">
            At Boilerplate,
          </h2>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary mb-6" >
            we help you grow.
          </h2>
          <p class="lg:pr-12 lg:mr-12 text-xl font-normal text-neutral mt-1 mb-4">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div>
            <button type="button" class="text-base-100 text-xl btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

<div class="grid mb-10 mx-auto py-5 md:pt-5 pt-14">

  <div class="grid grid-cols-1 md:grid-cols-3 content-start md:mr-auto gap-x-10">
      <!--Left column with hero-->
      <div class="relative mb-5 col-span-1">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-base-content sm:text-4xl md:mx-auto">
          Praktische zaken
        </h2>
          <p class="mb-5 prose-xl max-w-xl mx-auto lg:mx-0">Altijd snel de openingstijden en contactgegevens bij de hand!
          </p> 
      </div>

      <!--Right column with opening hours and contact info-->
          <div class="card collapse rounded-none w-full collapse-arrow bg-base-100 col-span-1">
              <input type="checkbox"> 
              <div class="collapse-title text-left text-xl font-medium">
              Openingstijden
              <div class="divider"></div>
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
                  <div class="divider"></div>
              </div>
          </div> 
          
          <div class="card collapse w-full rounded-none collapse-arrow bg-base-100 p-1 sm:max-w-5xl col-span-1">
              <input type="checkbox"> 
              <div class="collapse-title text-base-content text-left text-xl font-medium">
              Contactgegevens
              <div class="divider"></div>
              </div> 
              <div class="collapse-content w-fit"> 
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
                  <div class="divider"></div>
              </div>
          </div> 
      </div>
</div>

<div class=" py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:text-center">

<h2 class="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-base-content sm:text-4xl md:mx-auto">
  Het laatste nieuws
</h2>
<p class="text-base text-neutralmd:text-lg">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
</p>
</div>
<div class="grid lg:first:grid-cols-2 gap-10 py-10 md:grid-cols-1 md:px-10 lg:grid-cols-2">
    {#each posts as { title, slug, content, coverImage, tags, date }}
        <BlogCard url={coverImage.url} {title} {content} {date} {tags} {slug}/>
    {/each}
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
      word-wrap: break-word;
}

  table tr > td + td {
      /* Inner column spacing */
      border-left-width: 0.5rem;
}

  table tr + tr > td {
      /* Inner row spacing */
      border-top-width: 0.5rem;
}


  .-skew-x-12 {
  transform: skewX(-12deg);
  }
  .skew-x-12 {
  transform: skewX(12deg);
  }

</style>