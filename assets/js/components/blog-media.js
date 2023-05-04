export default {
    template:
    /*html*/
    `
    <figure>
        <!-- Swiper -->
        <div class="swiper w-100 h-100">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="m in media">
                    <section class="ratio ratio-16x9" v-if="m.type == 'youtube'">
                        <iframe class="img-fluid object-fit-cover rounded" :src="'https://www.youtube.com/embed/'+m.src" :title="m.alt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </section>
                    <section v-if="m.type == 'image'">
                        <img :src="m.src" :alt="m.alt" class="img-fluid rounded skeleton">
                    </section>

                </div>
            </div>
            
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination position-static my-3"></div>
    </figure>
    `,
    props:['media']
}