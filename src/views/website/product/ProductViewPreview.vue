<template>
    <div class="static" v-if="renderall">
    <Navbar active_menu="product" />
        <section class="pt-30 md:pt-16 lg:pt-30">
            <section v-for="(item, index) in getLocalProduct" :key="index" class="relative">
                <img :src="item.image_url_sm" class="block w-full object-cover object-center md:hidden" :alt="'bg-sm-' + index">
                <img :src="item.image_url_md" class="hidden w-full object-cover object-center md:block lg:hidden" :alt="'bg-md-' + index">
                <img :src="item.image_url_lg" class="hidden lg:h-[600px] w-full object-cover object-center lg:block" :alt="'bg-lg-' + index">
    
                <div class="absolute inset-0 flex w-full px-6 pb-10 pt-16 md:items-center md:pt-8 lg:p-0">
                    <div class="container mx-auto flex flex-col justify-start md:max-width md:justify-center">
                        <div v-if="index === 0" class="mb-2 font-roboto text-base font-[900] uppercase text-gal-blue-light lg:mb-8 lg:text-2xl">{{ getLocale == 'EN' ? item.title_head_en : item.title_head }}</div>
                        <div class="w-full font-roboto md:w-3/6">
                            <div class="font-roboto text-3xl font-[900] text-primary lg:text-5xl">{{ getLocale == 'EN' ? item.title_en : item.title }}</div>
                            <div class="mt-1 font-roboto text-base font-[400] text-gal-grey-darker md:mt-3 lg:text-xl">{{ getLocale == 'EN' ? item.description_en : item.description }}</div>
                            <router-link :to="{ name: `${item.router}` }">
                                <button class="hover:text-gal-blue-darker mt-4 font-roboto font-[900] text-[0.85rem] uppercase tracking-widest text-gal-blue-light transition-all duration-300 hover:scale-105 md:mt-2 lg:mt-10">
                                    {{ getLocale == 'EN' ? 'Read More' : 'SELENGKAPNYA'}}
                                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" size="lg" class="ml-3"/>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        <Footer />
        <FlyingButton />
    </div>
</template>
<script>
import router from '@/router/index.js'
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import FlyingButton from '@/components/flying_button/FlyingButton.vue'
import { mapState } from 'vuex'

export default {
    name: 'product',
    components: {
        Navbar, Footer, FlyingButton
    },
    data() {
        return {
            renderall: false,
            getLocale: 'ID',
            getLocalProduct: [],
            getApiProduct: [],
        }
    },
    computed: {
        ...mapState({ 
            product: state => state.product.type_items
        }),
    },
    watch: {
        product (values) {
            if(values){
                this.getApiProduct = values
            }
        },
    },
    methods: {
        getData () {
            if (localStorage.getItem('product_typepreview')) {
                this.$store.dispatch('product/getType','preview').then(data => {
                    localStorage.setItem('product_typepreview', JSON.stringify(data))
                })
                this.getLocalProduct = JSON.parse(localStorage.getItem('product_typepreview'))
                this.renderall = true
            } else {
                this.$store.dispatch('product/getType','preview').then(data => {
                    localStorage.setItem('product_typepreview', JSON.stringify(data))
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
}
</script>