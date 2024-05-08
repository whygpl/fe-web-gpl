<template>
    <div class="static">
        <Navbar active_menu="news" />
        <section class="h-full w-full bg-primary px-4 pb-10 pt-20 font-roboto md:px-0 md:pt-32">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
                    <div class="gal-title-2 text-center uppercase md:text-left">{{ getLocale == 'EN' ? getLocalNews.page.title_en : getLocalNews.page.title }}</div>
                    <div class="flex w-full justify-end">
                        <div class="w-full flex-none md:w-3/5">
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
                <div class="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-16">
                    <div>
                        <img :src="HeroNews.image_url" :alt="'Hero-'+ HeroNews.id" class="aspect-video w-full object-cover object-center md:aspect-[4/2]">
                    </div>
                    <div class="font-roboto">
                        <div class="w-full md:w-3/4">
                            <div class="line-clamp-3 text-2xl font-[900] text-white md:text-3xl">{{ HeroNews.title }}</div>
                            <div class="mt-2 flex md:mt-4">
                                <div class="relative-blockquote before:bg-gal-blue-lighter"></div>
                                <div class="text-sm font-[400] text-white/50 md:text-base">{{ HeroNews.date }}</div>
                            </div>
                            <div class="mt-4 line-clamp-4 text-sm font-[400] text-white md:mt-10 md:text-xl">{{ HeroNews.description }}</div>
                            <!-- <router-link v-for="item in NewsData" :to="{ name: 'NewsDetailView' }"> -->
                            <router-link :to="{ name: 'NewsDetailView' }">
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
        <section class="w-full bg-white px-4 py-8 font-roboto md:px-0 md:py-10">
            <div class="container mx-auto">
                <div class="font roboto text-xl font-[900] text-gal-grey-darker md:text-2xl">Popular</div>
                <div class="mt-4 grid grid-cols-2 gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
                    <router-link v-for="item in PopularNews" :to="{ name: 'NewsDetailView' }">
                        <NewsCard :title="item.title" :category="item.category" :date="item.date" :image_url="item.image_url" />
                    </router-link>
                </div>
            </div>
        </section>
        <section class="w-full bg-gal-grey-light px-4 py-8 font-roboto md:px-4 md:py-16">
            <div class="container mx-auto">
                <div class="flex gap-2">
                    <button @click="filterNews('All')" class="btn" :class="active_filter == 'All' ? 'btn-primary' : 'btn-outline-secondary'">All</button>
                    <button v-for="item in getLocalNews.categorys" @click="filterNews(item.name)" class="btn" :class="item.name == active_filter ? 'btn-primary' : 'btn-outline-secondary'">{{ item.name }}</button>
                </div>
                <div class="mt-4 grid grid-cols-2 gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
                    <router-link v-for="item in NewsData" :to="{ name: 'NewsDetailView' }">
                        <NewsCard :title="item.title" :category="item.category" :date="item.date" :image_url="item.image_url" />
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
import router from '@/router/index.js'
import FlyingButton from '@/components/flying_button/FlyingButton.vue';

export default {
    components: {
        Navbar, Footer, NewsCard, FlyingButton
    },
    data() {
        return {
            NewsData: [],
            active_filter: 'All',
            getLocalNews:[],
            CategoryList: [
                { id: 1, name: 'Kegiatan' },
                { id: 2, name: 'Artikel' },
                { id: 3, name: 'CSR' },
            ],
            HeroNews: {
                // id: 1,
                // title: 'Caladine Top Brand 2014',
                // description: 'Caladine kembali dipercaya menjadi Top Brand 2014 untuk kategori bedak kesehatan.Prestasi ini berhasil Caladine capai sebanyak 8 kali berturut-turut dari tahun 2007 hingga tahun 2014.Tentu bukan hal yang mudah untuk mempertahankannya, namun yang terutama bukanlah penghargaannya tetapi kepuasan dan kepercayaan masyarakat adalah hal terpenting bagi Caladine.',
                // date: '06-10-2014',
                // category: 'Kegiatan',
                // image_url: require('@/assets/images/news/topbrand.jpeg'),
                id: 2,
                title: 'Yuk Intip Keseruan Bali with JF Bestie!',
                description: 'Siapa sih yang menolak liburan gratis ke Bali? Bali, pulau eksotis di Indonesia, selalu menjadi destinasi yang menarik perhatian para wisatawan dari seluruh penjuru dunia. Sudah tentu Bali menawarkan keindahan alam, budaya, destinasi wisata menarik, dan berbagai permainan air seperti banana boat, parasailing, dan lainnya.',
                date: '18-10-2023',
                category: 'Artikel',
                image_url: require('@/assets/images/news/bali.png'),
            },
            PopularNews: [
                {
                    id: 1,
                    title: 'Caladine Top Brand 2014',
                    description: '-',
                    date: '06-10-2014',
                    category: 'Artikel',
                    image_url: require('@/assets/images/news/topbrand.jpeg'),
                },
                {
                    id: 2,
                    title: 'Yuk Intip Keseruan Bali with JF Bestie!',
                    description: '-',
                    date: '18-10-2023',
                    category: 'Artikel',
                    image_url: require('@/assets/images/news/bali.png'),
                }
            ],
            NewsList: [
                {
                    id: 1,
                    title: 'Caladine Top Brand 2014',
                    description: '-',
                    date: '06-10-2014',
                    category: 'CSR',
                    image_url: require('@/assets/images/news/topbrand.jpeg'),
                },
                {
                    id: 2,
                    title: 'Yuk Intip Keseruan Bali with JF Bestie!',
                    description: '-',
                    date: '18-10-2023',
                    category: 'Artikel',
                    image_url: require('@/assets/images/news/bali.png'),
                }
            ],
        }
    },
    methods: {
        enterSearch () {
            router.push({ path: 'search', query: { key: this.globalSearch }})
        },
        filterNews(category) {
            this.active_filter = category
            let temp_data = ''
            if (category != 'All') {
                temp_data = this.NewsList.filter(item => item.category == category)
            } else {
                temp_data = this.NewsList
            }
            this.NewsData = temp_data
        }
    },
    mounted() {
        this.NewsData = this.NewsList
    },
    created() {
        this.$store.dispatch('news/getAll','live')
        if (localStorage.getItem('newslive')) {
            this.getLocalNews = JSON.parse(localStorage.getItem('newslive'))
        } else {
            this.getLocalNews = this.news
            this.$store.dispatch('news/getAll','live')
        }

        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    }
}
</script>