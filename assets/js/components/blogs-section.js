export default {
    template:
    /*html*/
    `
    <section class="container d-flex flex-column gap-3">
      <div class="row">
        <div class="col-12">
          <h1 class="text-info cin fs-2">Expert Perspectives to Inform Your Strategy</h1>
          <p class="text-justify text-normal pop">We believe that staying informed and up-to-date is critical to making informed business decisions and staying ahead of the competition. That's why we are committed to providing high-quality, relevant, and engaging content that helps our clients stay informed, learn new skills, and develop fresh ideas.</p>
        </div>
      </div>
      <div class="row g-3 justify-content-between">
        <div v-for="b in blogs" :key="b" class="col-12 col-lg-3">
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
    props:['blogs','utilities'],
    mounted(){
        if(location.href.includes('/blogs')){
            document.getElementById('show-more').classList.add('d-none')
        }
    }
}