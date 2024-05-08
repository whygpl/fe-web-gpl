<template>
    <div class="static">
        <Navbar active_menu="news" />
        <section class="h-full w-full bg-primary px-4 pb-10 pt-20 font-roboto md:px-0 md:pt-32">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 items-center gap-4 h-64">
                    <div class="gal-title-2 text-center uppercase md:text-center">{{ getLocale == 'EN' ? 'SEARCH' :
                        'PENCARIAN' }}</div>
                </div>
            </div>
        </section>
        <section class="w-full bg-white px-4 py-8 font-roboto md:px-0 md:py-10">
            <div class="container mx-auto">
                <div class="font roboto text-xl font-[900] text-gal-grey-darker md:text-2xl">{{ getLocale == 'EN' ?
                        'SEARCH RESULT' : 'HASIL PENCARIAN' }} : {{ this.$route.query.key }}</div>
                <div class="mt-4">
                    <router-link v-for="item in NewsData" :to="{ path: '/news/detail/' + item.id }">
                        <SearchCard :title="item.title" :description="item.desc"
                            :category="getLocale == 'EN' ? 'NEWS' : 'BERITA'" :date="item.date"
                            :image_url="item.image_url" />
                    </router-link>
                    <router-link v-for="item in rows" :to="{ path: '/product/detail/' + item.id }">
                        <SearchCard :title="item.name" :description="item.description"
                            :category="getLocale == 'EN' ? 'PRODUCTS' : 'PRODUK'" :image_url="item.image_url" />
                    </router-link>
                </div>
            </div>
        </section>
        <!-- <section class="w-full bg-white px-4 py-8 font-roboto md:px-0 md:py-10">
            <div class="container mx-auto">
                <div class="w-full">
                    <vue-good-table :columns="columns" :rows="rows">
                    <template #table-row="props">
                        <span v-if="props.column.field == 'actions'">
                        <router-link :to="{ path: '/cms/product/detail/edit/'+ props.row.id}"><button class="btn btn-primary">Edit</button></router-link>
                        <router-link :to="{ path: '/cms/product/detail/delete/'+ props.row.id}"><button class="btn btn-primary">Delete</button></router-link>
                        </span>
                        <span v-else>
                        {{props.formattedRow[props.column.field]}}
                        </span>
                        <span v-if="props.column.field == 'image_urlz'">
                            <img width="300" :src="props.row.image_url" :alt="props.row.image_url" class="mx-auto aspect-video object-cover object-center">
                        </span>
                    </template>
</vue-good-table>
</div>
</div>
</section> -->
        <Footer />
    </div>
</template>
<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import SearchCard from '@/components/card/SearchCard.vue'
import { VueGoodTable } from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { mapState } from 'vuex'
export default {
    components: {
        Navbar, Footer, SearchCard, VueGoodTable
    },
    data() {
        return {
            regData: [],
            NewsData: [],
            active_filter: 'All',
            getLocalNews: [],
            // CategoryList: [
            //     { id: 1, name: 'Kegiatan' },
            //     { id: 2, name: 'Artikel' },
            //     { id: 3, name: 'CSR' },
            // ],
            // HeroNews: {
            //     id: 1,
            //     title: 'Caladine Top Brand 2014',
            //     description: 'Caladine kembali dipercaya menjadi Top Brand 2014 untuk kategori bedak kesehatan.Prestasi ini berhasil Caladine capai sebanyak 8 kali berturut-turut dari tahun 2007 hingga tahun 2014.Tentu bukan hal yang mudah untuk mempertahankannya, namun yang terutama bukanlah penghargaannya tetapi kepuasan dan kepercayaan masyarakat adalah hal terpenting bagi Caladine.',
            //     date: '06-10-2014',
            //     category: 'Kegiatan',
            //     image_url: require('@/assets/images/news/topbrand.jpeg'),
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
            // ],
            rows: [],
            regData: []
        }
    },
    computed: {
        ...mapState({
            items: state => state.productcms.search.items,
            columns: state => state.productcms.search.columns,
            rows: state => state.productcms.search.rows,
        }),
    },
    methods: {
        filterNews(category) {
            this.active_filter = category
            let temp_data = ''
            if (category != 'All') {
                temp_data = this.getLocalNews.filter(item => item.category == category)
            } else {
                temp_data = this.getLocalNews.news
            }
            this.NewsData = temp_data
        },
        getData() {
            // this.$store.dispatch('productcms/getProductSearch', this.$route.query.key).then(data => {
            //     this.rows = data
            // })
            if (localStorage.getItem('newssearch')) {
                this.$store.dispatch('news/getSearch', this.$route.query.key).then(data => {
                    localStorage.setItem('newssearch', JSON.stringify(data))
                    this.getLocalNews = JSON.parse(localStorage.getItem('newssearch'))
                    this.NewsData = this.getLocalNews
                    this.NewsList = this.getLocalNews
                })
                this.getLocalNews = JSON.parse(localStorage.getItem('newssearch'))
                this.NewsData = this.getLocalNews
                this.NewsList = this.getLocalNews
                console.log(this.getLocalNews)
                this.renderall = true
            } else {
                this.$store.dispatch('news/getSearch', this.$route.query.key).then(data => {
                    localStorage.setItem('newssearch', JSON.stringify(data))
                    this.getLocalNews = JSON.parse(localStorage.getItem('newssearch'))
                    this.NewsData = this.getLocalNews
                    this.NewsList = this.getLocalNews
                    router.go(0)
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
    mounted() {
        console.log(this.$route.query.key)
        this.NewsData = this.NewsList
        this.NewsData = this.getLocalNews
    }
}
</script>