<template>
    <div class="static">
        <Navbar active_menu="none" />
        <section class="relative z-10 bg-gal-grey-light px-2 pb-10 pt-20 font-roboto before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-72 before:w-full before:bg-primary before:content-[''] md:px-0 md:pb-20 md:pt-32 md:before:h-80 lg:before:h-96">
            <div class="container mx-auto">
                <div class="gal-title-2 uppercase">
                    <div class="ql-editor" style="padding: 0;">
                        <div v-html="getLocale == 'EN' ? PrivacyPolicy.page_en : PrivacyPolicy.pages" />
                    </div>
                </div>
                <div class="mt-2 rounded bg-white px-4 py-6 md:mt-6 md:rounded-lg md:p-20">
                    <div class="grid grid-cols-1 gap-y-6 md:gap-y-8">
                        <div v-for="item in PrivacyPolicy.contact">
                            <div class="ql-editor" style="padding: 0;height: 28px;">
                                <h3 class="gal-subtitle font-[900] uppercase text-primary" v-html="getLocale == 'EN' ? item.title_en : item.title" />
                            </div>
                            <template v-for="item_desc in item.description">
                                <div class="ql-editor" style="padding: 0;height:initial;">
                                    <div class="gal-items mt-1" v-html="getLocale == 'EN' ? item_desc.name_en : item_desc.name" />
                                </div>
                                <ul class="gal-items ml-8 list-disc">
                                    <li v-for="item_desc_list in item_desc.list">
                                        <div class="ql-editor" style="padding: 0;height:initial;overflow-y:initial">
                                            <div v-html="getLocale == 'EN' ? item_desc_list.name_en : item_desc_list.name" />
                                        </div>
                                    </li>
                                </ul>
                            </template>
                        </div>
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
            PrivacyPolicy: {}
        }
    },
    methods: {
        getData () {
            if (localStorage.getItem('privacylive')) {
                this.PrivacyPolicy = JSON.parse(localStorage.getItem('privacylive'))
                this.$store.dispatch('general/getExtra',{id:8,status:'live'}).then(data => {
                    localStorage.setItem('privacylive', JSON.stringify(data))
                    this.PrivacyPolicy = JSON.parse(localStorage.getItem('privacylive'))
                })
            } else {
                this.$store.dispatch('general/getExtra',{id:8,status:'live'}).then(data => {
                    localStorage.setItem('privacylive', JSON.stringify(data))
                    this.PrivacyPolicy = JSON.parse(localStorage.getItem('privacylive'))
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