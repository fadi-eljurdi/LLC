export default {
    template:
    /*html*/
    `
    <section class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-info cin fs-2">Dynamic Solutions, Powered by Our Team</h1>
                <p class="text-justify text-normal pop">Our team embodies these qualities and is committed to delivering innovative solutions that help our clients achieve their goals.</p>
            </div>
        </div>
        <div class="row g-3 justify-content-between">
        <div v-for="t in team" :key="t" class="col-12 col-md-6 col-lg-3">
            <div class="no-styles d-flex flex-column gap-2 bg-glass rounded p-3">
            <div class="ratio ratio-1x1">
                <img :src="t.thumbnail" :alt="t.name" class="img-fluid object-fit-cover rounded-top skeleton" >
            </div>
            <strong class="text-fade text-info pop fs-5 m-0">{{t.name}}</strong>
            <span class="text-heading pop">{{t.job}}</span>
            <p style="min-height: 150px;" class="text-normal m-0 fs-small">{{t.bio}}</p>
            </div>
        </div>
        </div>
    </section>
  `,
  data(){
    return{
        // team:[
        //     {name:'Fadi El Jurdi',job:'Lawyer',bio:'Fadi is a highly experienced legal professional with over 20 years of experience in the Media, IP, and IT sector. He has worked for leading regional and international media companies and law firms, including MBC GROUP and NETFLIX, and has extensive experience in negotiating media law-related matters. With his diverse knowledge of the media landscape in the MENAT region, Fadi is a valuable resource for clients seeking specialized legal advice in this area.',thumbnail:'https://drive.google.com/uc?export=view&id=1-3LSNM1yKI5o8Hcv3ZOfuWwT0c6Ex-mz'},
        //     {name:'Khalil El Jurdi',job:'Lawyer',bio:"Khalil, our firm's founder, is an experienced generalist solicitor and barrister with over 20 years of experience. He has a proven track record in handling governmental relations affairs and advising on media-related clearance and regulatory matters. With extensive experience in almost all fields of law, Khalil brings a wealth of knowledge and expertise to his clients.",thumbnail:'https://drive.google.com/uc?export=view&id=1_G3T15AwvEbL9g0wEvg1KLKUWa0jvPOO'},
        //     {name:'Fadia El Jurdi',job:'Lawyer',bio:'Fadia has extensive experience in the banking sector. Fadia has in her long career represented music agencies, production companies, and major international businesses in relation to their IP work in the region. She represented international brands in connection to their trademark and trade name infringement cases which required continuous cross-jurisdiction coordination.',thumbnail:'https://drive.google.com/uc?export=view&id=1n5YG_w9ZHUZLd5rLUpRjEz8vM9YMV0KV'},
        //     {name:'Maria Haydar',job:'Lawyer',bio:'Maria has a close working relationship with collection societies and she specializes in music entertainment law. Her LLM commended thesis focused on music rights and collection societies in the MENA region. Maria has a extensive experience in Arbitration. Her combined knowledge and her trilingual skills (French, English and Arabic) makes her very well equipped to advise our international clients on all media-related matters of the MENAT region.',thumbnail:'https://drive.google.com/uc?export=view&id=1yy5p_ccYYNZMRy4WHUbS_HtvbQVukMIt'},
        // ]
        team:[
            {name:'Fadi El Jurdi',job:'Lawyer',bio:'20+ yrs experience in Media, IP, and IT sector. Negotiated complex media law issues at MBC GROUP and NETFLIX. Offers specialized legal advice on MENAT media landscape.',thumbnail:'https://drive.google.com/uc?export=view&id=1-3LSNM1yKI5o8Hcv3ZOfuWwT0c6Ex-mz'},
            {name:'Khalil El Jurdi',job:'Lawyer',bio:"Founder with 20+ yrs experience as a generalist solicitor and barrister. Handles govt relations and advises on media-related regulatory matters. Brings expertise in almost all fields of law.",thumbnail:'https://drive.google.com/uc?export=view&id=1_G3T15AwvEbL9g0wEvg1KLKUWa0jvPOO'},
            {name:'Fadia El Jurdi',job:'Lawyer',bio:'Experienced in banking and IP work. Represented music agencies, production companies, and international businesses in the region. Expertise in trademark and trade name infringement cases.',thumbnail:'https://drive.google.com/uc?export=view&id=1n5YG_w9ZHUZLd5rLUpRjEz8vM9YMV0KV'},
            {name:'Maria Haydar',job:'Lawyer',bio:'Specializes in music entertainment law and has extensive experience in Arbitration. LLM commended thesis on music rights and collection societies in MENA region. Trilingual (French, English, Arabic) for advising international clients on MENAT media-related matters.',thumbnail:'https://drive.google.com/uc?export=view&id=1yy5p_ccYYNZMRy4WHUbS_HtvbQVukMIt'}
        ]
    }
  }
}