<template>
    <div class="static">
        <Navbar active_menu="none" />
        <section class="relative z-10 bg-gal-grey-light px-2 pb-10 pt-20 font-roboto before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-72 before:w-full before:bg-primary before:content-[''] md:px-0 md:pt-32 md:before:h-80 lg:before:h-96">
            <div class="container mx-auto">
                <div class="gal-title-2 uppercase">{{ getLocale == 'EN' ? faq.page_en : faq.pages }}</div>
                <div class="mt-2 flex flex-col flex-wrap gap-y-2 md:mt-6 md:flex-row md:gap-y-0">
                    <section class="flex basis-1/2 flex-col gap-y-2 px-0 md:gap-y-4 md:px-4">
                        <div v-for="item in list_first_column">
                            <div class="collapse collapse-arrow rounded bg-base-200">
                                <input type="checkbox" /> 
                                <div class="collapse-title bg-gal-grey text-base font-medium">{{ item.question }}</div>
                                <div class="collapse-content bg-white"> 
                                    <p class="mx-0 mb-0 mt-4 text-base font-[400] md:mx-4 md:mb-2 md:mt-6">{{ item.answer }}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="flex basis-1/2 flex-col gap-y-2 px-0 md:gap-y-4 md:px-4">
                        <div v-for="item in list_second_column">
                            <div class="collapse collapse-arrow rounded bg-base-200">
                                <input type="checkbox" /> 
                                <div class="collapse-title bg-gal-grey text-base font-medium">{{ item.question }}</div>
                                <div class="collapse-content bg-white"> 
                                    <p class="mx-0 mb-0 mt-4 text-base font-[400] md:mx-4 md:mb-2 md:mt-6">{{ item.answer }}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="divider"></div>
                <p class="textxs font-roboto font-[400] italic text-gal-grey-darker md:text-sm">{{ faq.title }}</p>
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
            list_first_column: [],
            list_second_column: [],
            faq: {}
        }
    },
    mounted() {
        this.SplitHalfData()
    },
    methods: {
        SplitHalfData() {
            console.log(this.faq)
            let half = Math.ceil(this.faq.contact.length / 2)
            this.list_first_column = this.faq.contact.slice(0, half)
            this.list_second_column = this.faq.contact.slice(half, this.faq.contact.length)
        },
        getData () {
            if (localStorage.getItem('faqlive')) {
                this.faq = JSON.parse(localStorage.getItem('faqlive'))
                this.$store.dispatch('general/getExtra',{id:11,status:'live'}).then(data => {
                    localStorage.setItem('faqlive', JSON.stringify(data))
                    this.faq = JSON.parse(localStorage.getItem('faqlive'))
                })
            } else {
                this.$store.dispatch('general/getExtra',{id:11,status:'live'}).then(data => {
                    localStorage.setItem('faqlive', JSON.stringify(data))
                    this.faq = JSON.parse(localStorage.getItem('faqlive'))
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