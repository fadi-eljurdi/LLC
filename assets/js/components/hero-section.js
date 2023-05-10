export default {
    template:
    /*html*/
    `
    <section class="container">
      <div class="row g-3 justify-content-between">
        <div class="col-12 col-lg-6">
          <h1 class="text-info cin fs-2">{{contact.heading}}</h1>
          <p class="text-justify text-normal pop">{{contact.bio}}</p>
          <div class="d-flex flex-wrap gap-2 align-items-center">
            <a v-for="link in links" :key="link" :href="link.url" class="d-flex gap-2 px-3 py-1 rounded no-styles bg-glass">
              <span class="material-symbols-outlined text-info">link</span>
              <span class="pop m-0 text-light">{{link.text}}</span>
            </a>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="ratio ratio-16x9">
            <video src="./assets/img/video1.mp4" controls class="img-fluid object-fit-cover rounded skeleton"></video>
          </div>
        </div>
      </div>
    </section>
    `,
    props:['links','utilities','contact']
}