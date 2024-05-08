<template>
    <div class="static" v-if="renderall">
        <Navbar active_menu="product" />
        <section class="pt-30 md:pt-16 lg:pt-30">
            <section v-for="(item, index) in  getLocalProduct " :key="index" class="relative">
                <!-- <img :src="item.image_url_sm" class="block w-full object-cover object-center md:hidden" alt="">
                <img :src="item.image_url_md" class="hidden w-full object-cover object-center md:block lg:hidden" alt="">
                <img :src="item.image_url_lg" class="hidden lg:h-[600px] w-full object-cover object-center lg:block" alt=""> -->
                <img :src="item.image_url_sm" class="block w-screen object-cover object-center md:hidden" />
                <img :src="item.image_url_md"
                    class="hidden w-screen object-cover object-center md:block lg:hidden" />
                <img :src="item.image_url_lg"
                    class="hidden lg:h-[600px] w-screen object-cover object-center lg:block" />

                <div class="absolute inset-0 flex w-full px-6 pb-10 pt-16 lg:items-center md:pt-8 lg:p-0">
                    <div class="product-container flex flex-col justify-start lg:max-width lg:justify-center">
                        <div class="relative flex  mt-16">
                            <div class="relative-blockquote before:bg-gal-blue-light"></div>
                            <div class="lg:pr-10">
                                <div
                                    class="mb-2 font-roboto text-base font-[900]  text-gal-blue-light lg:mb-8 lg:text-2xl">
                                    <div class="ql-editor" style="padding: 0; overflow-y: unset;">
                                        <div v-html="getLocale == 'EN' ? item.title_head_en : item.title_head" />
                                    </div>
                                </div>
                                <div class="w-full font-roboto lg:w-1/2">
                                    <div class="font-roboto text-3xl font-[900] text-primary lg:text-5xl">
                                        <div class="ql-editor" style="padding: 0; overflow-y: unset;">
                                            <div v-html="getLocale == 'EN' ? item.title_en : item.title"></div>
                                        </div>
                                    </div>
                                    <div
                                        class="mt-1 font-roboto text-base font-[400] text-gal-grey-darker md:mt-3 lg:text-xl lg:w-[80%]">
                                        <!-- {{getLocale == 'EN' ? item.description_en : item.description }} -->
                                        <div class="ql-editor mr-0 md:mr-14" style="padding: 0; overflow-y: unset;">
                                            <div v-html="getLocale == 'EN' ? item.description_en : item.description">
                                            </div>
                                        </div>
                                    </div>
                                    <router-link :to="{ name: `${item.router}` }">
                                        <button
                                            class="hover:text-gal-blue-darker mt-4 font-roboto font-[900] text-[0.85rem] uppercase tracking-widest text-gal-blue-light transition-all duration-300 hover:scale-105 md:mt-2 lg:mt-10">
                                            {{ getLocale == 'EN' ? 'Read More' : 'SELENGKAPNYA' }}
                                            <font-awesome-icon icon="fa-solid fa-arrow-right-long" size="lg"
                                                class="ml-3" />
                                        </button>
                                    </router-link>
                                </div>
                            </div>

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
        product(values) {
            if (values) {
                this.getApiProduct = values
            }
        },
    },
    methods: {
        getData() {
            if (localStorage.getItem('product_type')) {
                this.$store.dispatch('product/getType', 'live').then(data => {
                    localStorage.setItem('product_type', JSON.stringify(data))
                })
                this.getLocalProduct = JSON.parse(localStorage.getItem('product_type'))
                this.renderall = true
            } else {
                this.$store.dispatch('product/getType', 'live').then(data => {
                    localStorage.setItem('product_type', JSON.stringify(data))
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