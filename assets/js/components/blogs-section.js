export default {
    template:
    /*html*/
    `
    <section class="container d-flex flex-column gap-3">
      <div class="row">
        <div class="col-12">
          <h1 class="text-info cin fs-2">{{contact.bHeading}}</h1>
          <p class="text-justify text-normal fs-small pop">{{contact.bTagline}}</p>
        </div>
      </div>
      <div class="row g-3 justify-content-start">
        <div v-for="b in filteredBlogs" :key="b" class="col-12 col-lg-3">
          <a :href="b.url" class="no-styles d-flex flex-column gap-2 bg-glass rounded p-3">
            <div class="ratio ratio-16x9">
              <img :src="b.thumbnail" :alt="b.title" class="img-fluid object-fit-cover rounded-top skeleton" >
            </div>
            <strong class="text-fade text-info pop fs-5 m-0">{{b.title}}</strong>
            <p style="min-height: 50px;" class="text-fade-3 text-normal m-0 fs-small">{{b.description}}</p>
            <time class="text-heading fs-xsmall pop">{{utilities.timo(b.date)}}</time>
          </a>
        </div>
      </div>
      <div class="row" id="show-more">
        <div class="col-12 d-flex justify-content-center"><a class="icon-link icon-link-hover no-styles text-heading" :href="utilities.env('/blogs')">check all blogs <i class="bi bi-arrow-right"></i></a></div>
      </div>
    </section>
    `,
    computed:{
      filteredBlogs(){
        if(location.href.includes('/blogs')){
          return this.blogs
        }else {
          return this.lazyblogs
        }
      }
    },
    props:['blogs','utilities','contact','lazyblogs'],
    mounted(){
        if(location.href.includes('/blogs')){
            document.getElementById('show-more').classList.add('d-none')
        }
        // console.log(this.lazyBlogs());
    }
}