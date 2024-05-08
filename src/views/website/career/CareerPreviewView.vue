<template>
    <div class="static" v-if="renderall">
        <Navbar active_menu="career" />
        <section class="bg-primary px-4 pb-10 pt-20 font-roboto md:px-0 md:pb-20 md:pt-32">
            <div class="container mx-auto">
                <div class="gal-title-2 uppercase">{{ getLocale == 'EN' ? getLocalCareer.career[0].title_en : getLocalCareer.career[0].title }}</div>
                <div class="mt-4 flex flex-col gap-4 md:mt-8 md:gap-12">
                    <div v-for="(item, index) in getLocalCareer.career" class="flex flex-col gap-4 md:flex-nowrap md:gap-16"
                    :class="{
                        'md:flex-row': index % 2 === 0,
                        'md:flex-row-reverse': index % 2 !== 0,
                        'mt-6': index !== 0
                    }">
                        <div class="w-full text-white md:w-1/2">
                            <div class="gal-title-2 text-white">{{ getLocale == 'EN' ? item.title_en : item.title }}</div>
                            <div class="gal-items mt-2 text-justify text-white md:mt-4">{{ getLocale == 'EN' ? item.description_en : item.description }}</div>
                        </div>
                        <div class="w-full md:w-1/2"> <!--md:aspect-[4/3]-->
                            <img :src="item.image_url" alt="" class="aspect-video w-full object-cover object-center gal-shadow">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gal-grey-lighter px-4 py-10 font-roboto md:px-0 md:py-16">
            <div class="container mx-auto">
                <div>
                    <div class="gal-title-2 text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalCareer.page.subtitle_2_en : getLocalCareer.page.subtitle_2 }}</div>
                    <div class="text-items mt-1 text-justify text-slate-950 md:mt-2">{{  getLocale == 'EN' ? getLocalCareer.page.description_en : getLocalCareer.page.description }}</div>
                </div>
                <div class="mt-4 md:mt-8">
                    <div class="flex gap-2">
                        <button @click="filterCareer('All')" class="btn" :class="active_filter == 'All' ? 'btn-primary' : 'btn-outline-secondary'">All</button>
                        <button v-for="item in getLocalCareer.categorys" @click="filterCareer(item.id)" class="btn" :class="item.id == active_filter ? 'btn-primary' : 'btn-outline-secondary'">{{ getLocale == 'EN' ? item.title_en : item.title }}</button>
                    </div>
                    <div class="mt-4 grid grid-cols-1 place-items-stretch gap-4 md:mt-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                        <div v-for="(item, index) in CareerData" class="grid place-items-stretch">
                            <CareerCard :obj_data="item" :index="index" />
                        </div>
                    </div>
                    <!-- pagination -->
                    <div class="mt-8 flex justify-center md:justify-start">
                        <div class="join">
                            <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <button class="btn btn-primary btn-outline join-item btn-active btn-sm bg-white md:btn-md">1</button>
                            <!-- <button class="btn btn-primary btn-outline join-item btn-active btn-sm bg-white md:btn-md">2</button>
                            <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">99</button>
                            <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">100</button> -->
                            <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
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
import CareerCard from '@/components/card/CareerCard.vue';
import router from '@/router/index.js'

export default {
    components: {
        Navbar, Footer, CareerCard
    },
    data() {
        return {
            renderall: false,
            getLocale: 'ID',
            position: {
                even: 'md:flex-row',
                odd: 'md:flex-row-reverse'
            },
            CareerData: [],
            active_filter: 'All',
            getLocalCareer: {}
        }
    },
    methods: {
        filterCareer(id) {
            this.active_filter = id
            let temp_data = ''
            if (id != 'All') {
                temp_data = this.getLocalCareer.join.filter(item => item.career_categorys_id == id)
            } else {
                temp_data = this.getLocalCareer.join
            }
            this.CareerData = temp_data
        },
        getData () {
            if (localStorage.getItem('careerpreview')) {
                this.$store.dispatch('career/get','preview').then(data => {
                    localStorage.setItem('careerpreview', JSON.stringify(data))
                })
                this.getLocalCareer = JSON.parse(localStorage.getItem('careerpreview'))
                this.renderall = true
            } else {
                this.$store.dispatch('career/get','preview').then(data => {
                    localStorage.setItem('careerpreview', JSON.stringify(data))
                    router.go(0)
                })
            }
        }
    },
    created() {
        this.getData()
        this.CareerData = this.getLocalCareer.join
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    },
    // mounted() {
    //     this.CareerData = this.getLocalCareer.join
    // }
}
</script>