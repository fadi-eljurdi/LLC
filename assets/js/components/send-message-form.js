export default {
    template:
    /*html*/
    `
    
<aside class="bg-glass w-100 h-100 position-fixed top-0 start-0 z-2 d-flex justify-content-center align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-11 col-lg-8 bg-light p-3 rounded d-flex flex-column gap-2">
                <h6>Send us a message</h6>
                <input v-model="form.name" type="text" class="form-control" placeholder="Enter name">
                <input v-model="form.subject" type="text" class="form-control" placeholder="Enter Subject">
                <textarea v-model="form.message" cols="30" rows="10" class="form-control" placeholder="Write a message.."></textarea>
                <div class="d-flex gap-2">
                <a :href="link" class="btn btn-sm btn-primary px-3">Send</a>
                
                <slot><slot>
                </div>
            </div>
        </div>
    </div>
</aside>
    `,
    props:['email'],
    data(){
        return{
            form:{
                name:'',
                subject:'',
                message:'',
            }
        }
    },
    computed:{
        
        link(){
            return `mailto:${this.email}?subject=${encodeURIComponent(this.form.subject)}&body=${encodeURIComponent('Name: '+this.form.name+'\n\n'+this.form.message)}`
        }
    }
}