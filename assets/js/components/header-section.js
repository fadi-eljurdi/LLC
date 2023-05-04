export default {
    template:
    /*html*/
    `
    <header class="w-100 p-3 position-fixed z-3 top-0 start-0 d-flex justify-content-between align-items-center bg-glass shadow-sm">
        <section>
          <a :href="utilities.env('/')" class="no-styles"><img :src="logo" alt="jurdi logo" class="img-fluid" width="100"></a>
        </section>
        <nav class="align-items-center gap-3 pop d-none d-lg-flex">
          <a :href="utilities.env('/')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Home</a>
          <a :href="utilities.env('/#services')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad" data-bs-toggle="dropdown">Services</a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li v-for="s in services" :key="s"><a class="dropdown-item" :href="s.url">{{s.title}}</a></li>
          </ul>
          <a :href="utilities.env('/team.html')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Team</a>
          <a :href="utilities.env('/blogs')" class="text-info-hover link-underline link-underline-opacity-0 text-abyad">Blogs</a>
          <button class="btn btn-sm btn-outline-light" data-bs-toggle="dropdown">Contact</button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" :href="'mailto:'+contact.email"><i class="bi bi-envelope text-info"></i> info@jurdilaw.com</a></li>
            <li><a class="dropdown-item" :href="'tel:'+contact.number"><i class="bi bi-telephone-outbound text-info"></i> +961 70981725</a></li>
            <li><a class="dropdown-item" :href="contact.whatsapp"><i class="bi bi-whatsapp text-info"></i> Whatsapp</a></li>
            <li><a class="dropdown-item" :href="contact.linkedIn"><i class="bi bi-linkedin text-info"></i> LinkedIn</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/terms.html')"><i class="bi bi-file-text text-info"></i> Terms and Conditions</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/privacy-policy.html')"><i class="bi bi-shield-check text-info"></i> Privacy policy</a></li>
          </ul>
        </nav>
        <aside class="d-block d-lg-none">
          <i class="bi bi-three-dots-vertical text-abyad fs-3" data-bs-toggle="dropdown"></i>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" :href="utilities.env('/')"><i class="bi bi-house text-info"></i> Home page</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/#services')"><i class="bi bi-check2 text-info"></i> Services</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/team.html')"><i class="bi bi-people-fill text-info"></i> Team</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/blogs')"><i class="bi bi-newspaper text-info"></i> Blogs</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" :href="'mailto:'+contact.email"><i class="bi bi-envelope text-info"></i> info@jurdilaw.com</a></li>
            <li><a class="dropdown-item" :href="'tel:'+contact.number"><i class="bi bi-telephone-outbound text-info"></i> +961 70981725</a></li>
            <li><a class="dropdown-item" :href="contact.whatsapp"><i class="bi bi-whatsapp text-info"></i> Whatsapp</a></li>
            <li><a class="dropdown-item" :href="contact.linkedIn"><i class="bi bi-linkedin text-info"></i> LinkedIn</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/terms.html')"><i class="bi bi-file-text text-info"></i> Terms and Conditions</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/privacy-policy.html')"><i class="bi bi-shield-check text-info"></i> Privacy policy</a></li>
          </ul>
        </aside>
        
    </header>

    `,
    props:['contact','services','logo','utilities']
}