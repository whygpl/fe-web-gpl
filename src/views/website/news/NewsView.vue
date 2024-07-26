<template>
    <div class="static" v-if="renderall">
        <Navbar active_menu="news" />
        <section class="h-full w-full bg-primary px-4 pb-10 pt-20 font-roboto md:px-0 md:pt-32">
            <div class="product-type-container one-col-min">
                <div class="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
                    <div class="relative flex">
                        <div class="relative-blockquote before:bg-gal-blue-light"></div>
                        <div class="gal-title-2 text-center md:text-left">
                        <div class="ql-editor" style="padding: 0;">
                            <div
                                v-html="getLocale == 'EN' ? getLocalNews.page.title_en : getLocalNews.page.title" />
                        </div>
                    </div>
                    </div>

                    <div class="flex w-full justify-end">
                        <div class="w-full flex-none lg:w-3/5">
                            <div class="relative">
                                <input type="text" id="Search" v-model="globalSearch" @keyup.enter="enterSearch" :placeholder="getLocale == 'EN' ? 'Search News or Article' : 'Cari berita atau artikel'" class="input input-bordered w-full pr-10 font-roboto text-sm font-[400] focus:border-gal-blue-light focus:outline-0 focus:ring-2 focus:ring-offset-0 md:text-base" />
                                <span class="absolute inset-y-0 end-0 grid w-16 place-content-center">
                                    <button type="button" @click="enterSearch" class="text-gray-600 hover:text-primary">
                                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <img :src="getLocalNews.news[0]?.image_url" :alt="'Hero-'+ getLocalNews.news[0]?.id" class="w-full object-cover object-center aspect-[4/2]">
                    </div>
                    <div class="font-roboto">
                        <div class="w-full md:w-3/4">
                            <div class="line-clamp-3 text-2xl font-[900] text-white md:text-3xl">
                                <div class="ql-editor" style="padding: 0;">
                                    <div
                                        v-html="getLocale == 'EN' ? getLocalNews.news[0]?.title_en : getLocalNews.news[0]?.title" />
                                </div>
                            </div>
                            <div class="mt-2 flex md:mt-4">
                                <div class="relative-blockquote before:bg-gal-blue-lighter"></div>
                                <div class="text-sm font-[400] text-white/50 md:text-base">{{ getLocalNews.news[0]?.date }}</div>
                            </div>
                            <div class="mt-4 line-clamp-4 text-sm font-[400] text-white md:mt-10 md:text-xl">
                                <div class="ql-editor" style="padding: 0;">
                                    <div
                                        v-html="getLocale == 'EN' ? getLocalNews.news[0]?.desc_en : getLocalNews.news[0]?.desc" />
                                </div>
                            </div>
                            <!-- <router-link v-for="item in NewsData" :to="{ path: '/news/detail/'+ item.id }"> -->
                            <router-link :to="{ path: '/news/detail/'+ getLocalNews.news[0]?.id }">
                                <button class="mt-10 font-roboto font-[900] text-[0.85rem] uppercase tracking-widest text-gal-blue-light transition-all duration-300 hover:scale-105 hover:text-white md:text-sm">
                                    {{ getLocale == 'EN' ? 'Read More' : 'Selengkapnya' }}
                                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" size="lg" class="ml-3"/>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full bg-slate-100 px-4 py-8 font-roboto md:px-0 md:py-10">
            <div class="product-type-container one-col-min py-2">
                <div class="font roboto text-xl font-[900] text-gal-grey-darker md:text-2xl">{{ getLocale == 'EN' ? 'Popular' : 'Populer' }}</div>
                <div class="mt-4 grid  grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4 lg:mt-6 lg:grid-cols-3 lg:gap-6">
                    <router-link v-for="item in getLocalNews.popular" :to="{ path: '/news/detail/'+ item.id }">
                        <NewsCard :title="getLocale == 'EN' ? item.title_en : item.title" :category="getLocale == 'EN' ? item.category_en : item.category" :date="item.date" :image_url="item.image_url" />
                    </router-link>
                </div>
            </div>
        </section>
        <section class="w-full bg-gal-grey-light px-4 py-8 font-roboto md:px-4 md:py-16">
            <div class="product-type-container one-col-min">
                <div class="flex gap-2">
                    <button @click="filterNews('All')" class="btn" :class="active_filter == 'All' ? 'btn-primary' : 'btn-outline-secondary'">All</button>
                    <button v-for="item in getLocalNews.categorys" @click="filterNews(item.id)" class="btn" :class="item.id == active_filter ? 'btn-primary' : 'btn-outline-secondary'">{{ getLocale == 'EN' ? item.name_en : item.name }}</button>
                </div>
                <div class="mt-4 grid grid-cols-2 gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
                    <router-link v-for="item in NewsData" :to="{ path: '/news/detail/'+ item.id }">
                        <NewsCard :title="getLocale == 'EN' ? item.title_en : item.title" :category="getLocale == 'EN' ? item.category_en : item.category" :date="item.date" :image_url="item.image_url" />
                    </router-link>
                </div>
                <!-- pagination -->
                <div class="mt-8 flex justify-center md:justify-start">
                    <div class="join">
                        <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">1</button>
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
        </section>
        <Footer/>
        <FlyingButton/>
    </div>
</template>
<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';
import NewsCard from '@/components/card/NewsCard.vue';
import FlyingButton from '@/components/flying_button/FlyingButton.vue';
import router from '@/router/index.js'

export default {
    components: {
        Navbar, Footer, NewsCard, FlyingButton
    },
    data() {
        return {
            renderall: false,
            NewsData: [],
            active_filter: 'All',
            getLocalNews:[],
            // CategoryList: [
            //     { id: 1, name: 'Kegiatan' },
            //     { id: 2, name: 'Artikel' },
            //     { id: 3, name: 'CSR' },
            // ],
            // HeroNews: {
            //     // id: 1,
            //     // title: 'Caladine Top Brand 2014',
            //     // description: 'Caladine kembali dipercaya menjadi Top Brand 2014 untuk kategori bedak kesehatan.Prestasi ini berhasil Caladine capai sebanyak 8 kali berturut-turut dari tahun 2007 hingga tahun 2014.Tentu bukan hal yang mudah untuk mempertahankannya, namun yang terutama bukanlah penghargaannya tetapi kepuasan dan kepercayaan masyarakat adalah hal terpenting bagi Caladine.',
            //     // date: '06-10-2014',
            //     // category: 'Kegiatan',
            //     // image_url: require('@/assets/images/news/topbrand.jpeg'),
            //     id: 2,
            //     title: 'Yuk Intip Keseruan Bali with JF Bestie!',
            //     description: 'Siapa sih yang menolak liburan gratis ke Bali? Bali, pulau eksotis di Indonesia, selalu menjadi destinasi yang menarik perhatian para wisatawan dari seluruh penjuru dunia. Sudah tentu Bali menawarkan keindahan alam, budaya, destinasi wisata menarik, dan berbagai permainan air seperti banana boat, parasailing, dan lainnya.',
            //     date: '18-10-2023',
            //     category: 'Artikel',
            //     image_url: require('@/assets/images/news/bali.png'),
            // },
            // PopularNews: [
            //     {
            //         id: 1,
            //         title: 'Caladine Top Brand 2014',
            //         description: '-',
            //         date: '06-10-2014',
            //         category: 'Artikel',
            //         image_url: require('@/assets/images/news/topbrand.jpeg'),
            //     },
            //     {
            //         id: 2,
            //         title: 'Yuk Intip Keseruan Bali with JF Bestie!',
            //         description: '-',
            //         date: '18-10-2023',
            //         category: 'Artikel',
            //         image_url: require('@/assets/images/news/bali.png'),
            //     }
            // ],
            // NewsList: [
            //     {
            //         id: 1,
            //         title: 'Caladine Top Brand 2014',
            //         description: '-',
            //         date: '06-10-2014',
            //         category: 'CSR',
            //         image_url: require('@/assets/images/news/topbrand.jpeg'),
            //     },
            //     {
            //         id: 2,
            //         title: 'Yuk Intip Keseruan Bali with JF Bestie!',
            //         description: '-',
            //         date: '18-10-2023',
            //         category: 'Artikel',
            //         image_url: require('@/assets/images/news/bali.png'),
            //     }
            // ],
        }
    },
    methods: {
        enterSearch () {
            router.push({ path: 'search', query: { key: this.globalSearch }})
        },
        filterNews(category) {
            console.log(category)
            this.active_filter = category
            let temp_data = ''
            if (category != 'All') {
                temp_data = this.NewsList.filter(item => item.category_id == category)
            } else {
                temp_data = this.NewsList
            }
            this.NewsData = temp_data
        },
        getData () {
            if (localStorage.getItem('newslive')) {
                this.$store.dispatch('news/get','live').then(data => {
                    localStorage.setItem('newslive', JSON.stringify(data))
                })
                this.getLocalNews = JSON.parse(localStorage.getItem('newslive'))
                this.NewsData = this.getLocalNews.news
                this.NewsList = this.getLocalNews.news
                this.renderall = true
            } else {
                this.$store.dispatch('news/get','live').then(data => {
                    localStorage.setItem('newslive', JSON.stringify(data))
                    router.go(0)
                })
            }
        }
    },
    mounted() {
        this.NewsData = this.NewsList
    },
    created() {
        this.getData()
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    }
}
</script>