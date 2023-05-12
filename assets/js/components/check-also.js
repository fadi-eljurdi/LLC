export default {
    template:
    /*html */
    `
    <aside class="shadow-sm bg-glass p-3 rounded">
        <h5 class="m-0 fs-5 pop text-heading">Check also</h5>
        <small class="fs-xsmall text-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque.</small>
        <div class="row mt-3 g-3">
            <div v-for="b in blogs" :key="b" class="col-12 d-flex gap-1 align-items-center">
                <span class="material-symbols-outlined text-info">feed</span>
                <a class="text-fade text-heading" :href="b.url"> {{b.title}} </a>
            </div>
            <a class="col-12 icon-link icon-link-hover fs-small link-underline-opacity-0 text-info  justify-content-center" :href="utilities.env('/blogs')">
                <span class="text-fade text-center text-normal">show more</span>
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </aside>
    `,
    props:['blogs','utilities'],
    computed:{
        blogs(){
            return this.blogs.length <= 8 ? this.blogs : this.blogs.slice(-8);
            // return this.blogs
        }
    }
}