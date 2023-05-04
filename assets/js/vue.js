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
            logo: 'https://drive.google.com/uc?id=16vVKvWJ5Lg9jTwWvH-iqnriHmVESqIW7',
            api: 'https://script.google.com/macros/s/AKfycbwHU2PC2XkH7HbBQ3fQh9Wm9LtO62vwVFxuvWlHyGpOgLXNlj_y1TirEAbEL5A-me_V/exec'
        }
    },
    methods: {
        getProfile() {
            this.blogSpinner = true
            var api = this.api
            api += `?getProfile=1`
            fetch(api).then(res => res.json()).then(res => {
                console.log(res);
                this.profile = res
                this.blogSpinner = false
            })
        },
        async translate(){
            
            this.blogSpinner = true
            const original = document.querySelector('#original');
            // console.log(original.innerHTML);
            var api = this.api
            api += `?translate=1`
            var res = await fetch(api,{
                method:"POST",
                headers:{
                    "Content-Type":"text/plain"
                },
                body:JSON.stringify({
                    text:original.innerHTML,
                    source:'en',
                    target:'ar'

                })
            })

            res = await res.json()
            console.log(res);
            var translated = document.querySelector('#translated')
            translated.setAttribute('dir','rtl')
            translated.classList.add('arb')
            translated.innerHTML = (utilities.fixClosingTags(res)).replaceAll(' & nbsp؛ ',' ')
            this.translated = true
            
            this.blogSpinner = false


        }
    },
    mounted(){
        this.getProfile()
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