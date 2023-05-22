import utilities from './utilities.js'
import header from './components/header-section.js'
import hero from './components/hero-section.js'
import services from './components/services-section.js'
import blogsSection from './components/blogs-section.js'
import footerSection from './components/footer-section.js'
import blogMedia from './/components/blog-media.js'
import blogNavigation from './components/blog-navigation.js'
import checkAlso from './components/check-also.js'
import teamSection from './components/team-section.js'

const app = Vue.createApp({
    data() {
        return {
            utilities,
            showVideo:true,
            translated:false,
            title: 'Jurdi & CO LLC',
            blogSpinner: false,
            profile:'',
            contact:'',
            services:'',
            blogs:'',
            links:'',
            api: 'https://script.google.com/macros/s/AKfycbzayZLP651XR7YC-jlk8Dg-yxg5ncH0SeM86ZhKDpKPMIRzyE37wwid06aIaXLeGQ-F/exec'
        }
    },
    methods: {
        
        font(){
            if(document.querySelector('html').lang == 'ar'){
                //the page is already in arabic
                
                var translated = document.querySelector('#translated')
                translated.setAttribute('dir','ltr')
                translated.classList.add('pop')
            }else{
                // the page is in english
                
                var translated = document.querySelector('#translated')
                translated.setAttribute('dir','rtl')
                translated.classList.add('arb')
            }
        },
        dir(){
            if(document.querySelector('html').lang == 'ar') return 'rtl'
            else return 'ltr'
            
        },
        async getProfile() {
            this.blogSpinner = true
            var api = this.api
            api += `?getProfile=1`
            // fetch(api).then(res => res.json()).then(res => {
            //     console.log(res);
            //     this.profile = res
            //     this.blogSpinner = false
            // })
            var res = await fetch(api)
            res = await res.json()
            console.log(res);
            this.profile = res
            this.contact = res.contact
            this.blogs = res.blogs
            this.services = res.services
            this.links = res.links
            this.contact.video = this.utilities.getYouTubeId(this.contact.video)
            this.blogSpinner = false

        },
        async translate(){
            
            this.blogSpinner = true
            const original = document.querySelector('#original');
            // console.log(original.innerHTML);
            var source = ()=>{
                if(this.dir() == 'rtl') return 'ar'
                return 'en'
            }
            var target = ()=>{
                if(this.dir() == 'rtl') return 'en'
                return 'ar'
            }
            var api = this.api
            api += `?translate=1`
            var res = await fetch(api,{
                method:"POST",
                headers:{
                    "Content-Type":"text/plain"
                },
                body:JSON.stringify({
                    text:original.innerHTML,
                    source:source(),
                    target:target()

                })
            })

            res = await res.json()
            console.log(res);
            this.font()
            translated.innerHTML = (utilities.fixClosingTags(res)).replaceAll(' & nbsp؛ ',' ')
            this.translated = true
            
            this.blogSpinner = false


        },
    },
    mounted(){
        this.getProfile()
        
        if(document.querySelector('html').lang == 'ar'){
            if(document.getElementById('original')){
                document.getElementById('original').dir = 'rtl'
                document.getElementById('original').classList.add('arb')
            }
        }else{
            if(document.getElementById('original')){
                
                document.getElementById('original').dir = 'ltr'
                document.getElementById('original').classList.add('pop')
            }
        }
    }
})

app.component('header-section',header)
app.component('hero-section',hero)
app.component('services-section',services)
app.component('blogs-section',blogsSection)
app.component('footer-section',footerSection)
app.component('blog-media',blogMedia)
app.component('blog-navigation',blogNavigation)
app.component('check-also',checkAlso)
app.component('team-section',teamSection)
app.mount('#app')
