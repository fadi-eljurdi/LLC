export default {
    template:
    /*html*/
    `
    <section class="container d-flex flex-column gap-3">
      <div class="row">
        <div class="col-12">
          <h1 class="text-info cin fs-2">{{contact.sHeading}}</h1>
          <!-- <p class="text-justify text-normal fs-small pop">{{contact.sTagline}}</p> -->
        </div>
      </div>
      <div class="row g-3 justify-content-start">
        <div class="col-12 col-lg-3"  v-for="s in services" :key="s" >
          <a :href="s.url" class="no-styles d-flex flex-column gap-2 bg-glass rounded p-3">
            <div class="ratio ratio-4x3">
              <img :src="s.thumbnail" :alt="s.title" class="img-fluid object-fit-cover rounded-top skeleton" >
            </div>
            <strong class="text-fade text-info pop fs-5 m-0 text-uppercase">{{s.title}}</strong>
            <!-- <p style="min-height: 50px;" class="text-fade-3 text-normal m-0 fs-small">{{s.description}}</p> -->
            <!-- <span class="text-heading fs-small m-0 d-flex align-items-center gap-1">more <i class="bi bi-arrow-right"></i></span> -->
            <button class="btn btn-sm btn-outline-info">Know more about this service</button>
          </a>
        </div>
      </div>
    </section>
    `,
    props:['services','utilities','contact']
}