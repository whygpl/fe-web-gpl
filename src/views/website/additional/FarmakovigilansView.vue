<template>
    <div class="static">
        <Navbar active_menu="none" />
        <section class="relative z-10 bg-gal-grey-light px-2 pb-10 pt-20 font-roboto before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-72 before:w-full before:bg-primary before:content-[''] md:px-0 md:pb-20 md:pt-32 md:before:h-80 lg:before:h-96">
            <div class="container mx-auto">
                <div class="ql-editor" style="padding: 0;height:initial;overflow-y:initial">
                    <div  class="gal-title-2 uppercase" v-html="getLocale == 'EN' ? farmako.page_en : farmako.pages" />
                 </div>
                <div class="mt-2 rounded bg-white px-4 py-6 md:mt-6 md:rounded-lg md:p-20">
                    <p class="gal-items">{{ getLocale == 'EN' ? farmako.contact.paragraph_en_1 : farmako.contact.paragraph_1 }}</p>
                    <div class="ql-editor" style="padding: 0;height:initial;">
                        <div class="gal-items" v-html="getLocale == 'EN' ? farmako.contact.paragraph_en_1 : farmako.contact.paragraph_1" />
                    </div>
                    <div class="ql-editor" style="padding: 0;height:initial;">
                        <div class="gal-items  mt-3 md:mt-4" v-html="getLocale == 'EN' ? farmako.contact.paragraph_en_2 : farmako.contact.paragraph_2" />
                    </div>
                    <div class="ql-editor" style="padding: 0;height:initial;">
                        <div class="gal-items  font-[600] md:mt-4" v-html="getLocale == 'EN' ? farmako.contact.paragraph_en_3 : farmako.contact.paragraph_3" />
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    components: {
        Navbar, Footer
    },
    data() {
        return {
            getLocale: 'ID',
            farmako: {}
        }
    },
    methods: {
        getData () {
            if (localStorage.getItem('farmalive')) {
                this.farmako = JSON.parse(localStorage.getItem('farmalive'))
                this.$store.dispatch('general/getExtra',{id:10,status:'live'}).then(data => {
                    localStorage.setItem('farmalive', JSON.stringify(data))
                    this.farmako = JSON.parse(localStorage.getItem('farmalive'))
                })
            } else {
                this.$store.dispatch('general/getExtra',{id:10,status:'live'}).then(data => {
                    localStorage.setItem('farmalive', JSON.stringify(data))
                    this.farmako = JSON.parse(localStorage.getItem('farmalive'))
                })
            }
        }
    },
    created() {
        this.getData()
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    },
}
</script>