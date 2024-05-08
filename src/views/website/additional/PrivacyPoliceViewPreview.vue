<template>
    <div class="static">
        <Navbar active_menu="none" />
        <section class="relative z-10 bg-gal-grey-light px-2 pb-10 pt-20 font-roboto before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-72 before:w-full before:bg-primary before:content-[''] md:px-0 md:pb-20 md:pt-32 md:before:h-80 lg:before:h-96">
            <div class="container mx-auto">
                <div class="gal-title-2 uppercase">{{ getLocale == 'EN' ? PrivacyPolicy.page_en : PrivacyPolicy.pages }}</div>
                <div class="mt-2 rounded bg-white px-4 py-6 md:mt-6 md:rounded-lg md:p-20">
                    <div class="grid grid-cols-1 gap-y-6 md:gap-y-8">
                        <div v-for="item in PrivacyPolicy.contact">
                            <h3 class="gal-subtitle font-[900] uppercase text-primary">{{ getLocale == 'EN' ? item.title_en : item.title }}</h3>
                            <template v-for="item_desc in item.description">
                                <p class="gal-items mt-1" >{{ getLocale == 'EN' ? item_desc.name_en : item_desc.name }}</p>
                                <ul class="gal-items ml-8 list-disc">
                                    <li v-for="item_desc_list in item_desc.list">{{ getLocale == 'EN' ? item_desc_list.name_en : item_desc_list.name }}</li>
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
import FooterPreview from '@/components/footer/FooterPreview.vue';

export default {
    components: {
        Navbar, FooterPreview
    },
    data() {
        return {
            getLocale: 'ID',
            PrivacyPolicy: {}
        }
    },
    methods: {
        getData () {
            if (localStorage.getItem('privacypreview')) {
                this.PrivacyPolicy = JSON.parse(localStorage.getItem('privacypreview'))
                this.$store.dispatch('general/getExtra',{id:8,status:'preview'}).then(data => {
                    localStorage.setItem('privacypreview', JSON.stringify(data))
                    this.PrivacyPolicy = JSON.parse(localStorage.getItem('privacypreview'))
                })
            } else {
                this.$store.dispatch('general/getExtra',{id:8,status:'preview'}).then(data => {
                    localStorage.setItem('privacypreview', JSON.stringify(data))
                    this.PrivacyPolicy = JSON.parse(localStorage.getItem('privacypreview'))
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