export default {
    template:
    /*html*/
    `
    <header class="w-100 p-3 position-fixed z-3 top-0 start-0 d-flex justify-content-between align-items-center bg-glass shadow-sm">
        <section>
          <a :href="utilities.env('/')" class="no-styles">
            <div v-if="!contact.logo" class="skeleton rounded" style="width:100px;height:30px;"></div>
            <div v-else style="width:80px;">
              <div class="ratio ratio-16x9"><img :src="contact.logo" alt="jurdi logo" class="img-fluid object-fit-cover"></div>
            </div>
          </a>
        </section>
        <nav class="align-items-center gap-3 pop d-none d-lg-flex point">
          <a :href="utilities.env('/')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Home</a>
          <span class="text-info-hover link-underline link-underline-opacity-0 text-abyad" data-bs-toggle="dropdown">Services</span>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li v-for="s in services" :key="s"><a class="dropdown-item" :href="s.url">{{s.title}}</a></li>
          </ul>
          <a :href="utilities.env('/privacy-policy.html')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Privacy Policy</a>
          <a :href="utilities.env('/terms.html')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Terms & conditions</a>
          <a :href="utilities.env('/disclaimer.html')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Disclaimer</a>
          <a :href="utilities.env('/cookie-policy.html')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Cookies Policy</a>
          <a :href="utilities.env('/acceptable-usage.html')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Acceptable Usage</a>
          <a :href="utilities.env('/team.html')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Team</a>
          <a :href="utilities.env('/blogs')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Blogs</a>
          <button class="btn btn-sm btn-outline-light" data-bs-toggle="dropdown">Contact</button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" :href="'mailto:'+contact.email"><i class="bi bi-envelope text-info"></i> {{contact.email}}</a></li>
            <li><a class="dropdown-item" :href="contact.whatsapp"><i class="bi bi-whatsapp text-info"></i> Whatsapp</a></li>
            <li><a class="dropdown-item" :href="contact.linkedIn"><i class="bi bi-linkedin text-info"></i> LinkedIn</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/terms.html')"><i class="bi bi-file-text text-info"></i> Terms and Conditions</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/disclaimer.html')"><i class="bi bi-file-text text-info"></i> Disclaimer</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/cookie-policy.html')"><i class="bi bi-shield-check text-info"></i> Cookies Policy</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/acceptable-usage.html')"><i class="bi bi-shield-check text-info"></i> Acceptable Usage</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/privacy-policy.html')"><i class="bi bi-shield-check text-info"></i> Privacy policy</a></li>
          </ul>
        </nav>
        <aside class="d-block d-lg-none">
          <i class="bi bi-three-dots-vertical text-abyad fs-3" data-bs-toggle="dropdown"></i>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" :href="utilities.env('/')"><i class="bi bi-house text-info"></i> Home page</a></li>
            <li><span class="dropdown-item" ><i class="bi bi-check2 text-info"></i> Services</span></li>
            <li><a class="dropdown-item" :href="utilities.env('/team.html')"><i class="bi bi-people-fill text-info"></i> Team</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/blogs')"><i class="bi bi-newspaper text-info"></i> Blogs</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" :href="'mailto:'+contact.email"><i class="bi bi-envelope text-info"></i> {{contact.email}}</a></li>
            <li><a class="dropdown-item" :href="contact.whatsapp"><i class="bi bi-whatsapp text-info"></i> Whatsapp</a></li>
            <li><a class="dropdown-item" :href="contact.linkedIn"><i class="bi bi-linkedin text-info"></i> LinkedIn</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/terms.html')"><i class="bi bi-file-text text-info"></i> Terms and Conditions</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/disclaimer.html')"><i class="bi bi-file-text text-info"></i> Disclaimer</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/cookie-policy.html')"><i class="bi bi-shield-check text-info"></i> Cookies Policy</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/acceptable-usage.html')"><i class="bi bi-shield-check text-info"></i> Acceptable Usage</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/privacy-policy.html')"><i class="bi bi-shield-check text-info"></i> Privacy policy</a></li>
          </ul>
        </aside>
        
    </header>

    `,
    props:['contact','services','utilities']
}