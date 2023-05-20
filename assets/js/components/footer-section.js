export default {
    template:
    /*html*/
    `
    <footer class="w-100 mt-5 bg-aswad pb-5">
      <div class="container">
        <div class="row g-3">
          <div class="col-12 col-lg-6 mt-5">
            <div class="d-flex flex-column gap-1 pop">
              <h5 class="text-heading fs-4 fw-bold">JURDI & CO LLC</h5>
              <p class="text-normal fs-smaller">Our services cater to the unique needs of businesses within this niche, offering tailored solutions to help them achieve their goals and maximize their success.</p>
              <div class="d-flex flex-column gap-2">
                <a :href="'mailto:'+contact.email" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <i class="bi bi-envelope text-normal"></i><span>{{contact.email}}</span>
                </a>
                <a :href="'https://wa.me/'+ contact.whatsapp" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <i class="bi bi-whatsapp text-normal"></i><span>Whatsapp</span>
                </a>
                <a :href="contact.linkedIn" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <i class="bi bi-linkedin text-normal"></i><span>LinkedIn</span>
                </a>
                <a :href="utilities.env('/terms.html')" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <i class="bi bi-file-text text-normal"></i><span>Terms & Conditions</span>
                </a>
                <a :href="utilities.env('/disclaimer.html')" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <i class="bi bi-file-text text-normal"></i><span>Disclaimer</span>
                </a>
                <a :href="utilities.env('/acceptable-usage.html')" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <i class="bi bi-shield-check text-normal"></i><span>Acceptable Usage</span>
                </a>
                <a :href="utilities.env('/cookie-policy.html')" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <i class="bi bi-shield-check text-normal"></i><span>Cookie Policy</span>
                </a>
                <a :href="utilities.env('/privacy-policy.html')" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <i class="bi bi-shield-check text-normal"></i><span>Privacy Policy</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 mt-5">
            
            <div class="d-flex flex-column gap-1 pop">
              <h5 class="text-heading fs-4 fw-bold">Our Services</h5>
              <p class="text-normal fs-smaller text-fade-2">Exceptional services that meet and exceed your expectations.</p>
              <div class="d-flex flex-column gap-2">
                <a v-for="s in services" :key="s" :href="s.url" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <span class="material-symbols-outlined text-normal">link</span><span>{{s.title}}</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 mt-5">
            <div class="d-flex flex-column gap-1 pop">
              <h5 class="text-heading fs-4 fw-bold">Our Business Partners</h5>
              <p class="text-normal fs-smaller text-fade-2">Connecting you to the resources you need.</p>
              <div class="d-flex flex-column gap-2">
                <a v-for="link in links" :key="link" :href="link.url" class="text-info-hover d-flex gap-3 align-items-center no-styles text-heading">
                  <span class="material-symbols-outlined text-normal">link</span><span>{{link.text}}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr class="text-light my-5">
        <div class="row g-3 justify-content-center">
          <div class="col-12">
            <h6 class="text-center text-heading cin fs-6">All Rights Reserved</h6>
          </div>
        </div>
      </div>

    </footer>
    `,
    props:['contact','links','services','utilities'],
    
}