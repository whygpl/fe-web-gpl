<template>
    <div class="static">
        <Navbar active_menu="product" />
        <section
            class="h-full w-full bg-[url('@/assets/icons/product/health/background.svg')] bg-cover bg-center bg-no-repeat  md:h-screen lg:h-screen ">
            <div class="product-type-container h-full">
                <div class="flex h-full flex-col-reverse items-center justify-center md:flex-row ">
                    <div class="gridtype h-full w-full place-content-center md:w-1/2 p-4 md:p-0 lg:min-h-[800]">
                        <div
                            class="mb-4 mt-8 font-roboto text-base font-[900] text-gal-blue-light md:mb-8 md:mt-0 lg:text-2xl">
                            <div class="ql-editor" style="padding: 0;">
                                <div
                                    v-html="getLocale == 'EN' ? getLocalProductType.sub_title_head_en : getLocalProductType.sub_title_head">
                                </div>
                                <div v-if="!getLocalProductType.image_url">
                                    <div role="status" class="animate-pulse">
                                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                                        <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
                                        <div class="flex items-center justify-center mt-4">
                                            <svg class="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                            </svg>
                                            <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
                                            <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gal-title">
                            <div class="ql-editor" style="padding: 0;">
                                <div
                                    v-html="getLocale == 'EN' ? getLocalProductType.sub_title_en : getLocalProductType.sub_title">
                                </div>
                            </div>
                        </div>
                        <div class="gal-description mt-2 md:mt-6 lg:w-[80%]">
                            <div class="ql-editor" style="padding: 0;">
                                <div
                                    v-html="getLocale == 'EN' ? getLocalProductType.sub_description_en : getLocalProductType.sub_description">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="mt-8 p-4 gridtype h-full w-full place-content-center md:w-1/2">
                        <div v-if="getLocalProductType.image_url">
                            <img :src="getLocalProductType.image_url" alt="image-banner">
                        </div>                        
                    </div>
                </div>
            </div>
        </section>

        <div v-if="!renderall">
            <section :class="index % 2 == 0 ? 'bg-white' : 'bg-gal-blue-lighter'" class="p-4 md:px-0 md:py-10">
                <div class="mt-4 w-full px-0.5 pt-px md:mt-0 md:w-3/5 md:px-10 lg:px-16">
                    <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                        <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                        </div>
                        <div class="w-full">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        </div>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>       
            </section>
        </div>

        <section :style="backgroundStyle" class="bg-cover bg-top bg-no-repeat px-4 py-10 md:px-0 md:py-14">
            <div class="product-type-container">
                <div class="flex w-full flex-col items-center md:w-3/5 md:items-start">
                    <!-- input search -->
                    <div class="relative w-full">
                        <v-select v-model="select_search" @change="search_open()" style="border:none;"
                            class="input input-bordered w-full pr-10 font-roboto text-sm font-[400] focus:border-gal-blue-light focus:outline-0 focus:ring-2 focus:ring-offset-0 md:text-base"
                            aria-readonly="true" @search="onSearchProduct" :options="OptionsProduct"
                            :reduce="optionsProducts => optionsProducts.value" label="title"
                            :placeholder="getLocale == 'EN' ? 'Search products ...' : 'Cari produk ...'">
                            <template v-slot:no-options>Item tidak terdapat pada kategori ini..</template>

                            <template #option="option">
                                <span style="display: flex; height:35px;">
                                    <div v-html="option.title"></div>
                                </span>
                                <!-- <span style="display: flex; height:35px;"><img style="width: 50px;margin-right: 20px;" :src="option.image" /><div v-html="option.title"></div></span> -->
                            </template>
                        </v-select>
                        <!-- <input type="text" id="Search" placeholder="Cari produk ..." class="input input-bordered w-full pr-10 font-roboto text-sm font-[400] focus:border-gal-blue-light focus:outline-0 focus:ring-2 focus:ring-offset-0 md:text-base" /> -->
                        <!-- <input type="text" id="Search" placeholder="Cari produk ..." class="w-full rounded-md border border-gray-200 py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] shadow-sm focus:border-gal-blue-light focus:outline-0 focus:ring-2 focus:ring-offset-0 md:text-base" /> -->
                        <span class="absolute inset-y-0 end-0 grid w-16 place-content-center">
                            <button type="button" class="text-gray-600 hover:text-primary">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </span>
                    </div>

                    <!-- list -->
                    <div class="mt-8 w-full font-roboto">
                        <div class="grid grid-cols-2 bg-primary text-base font-[700]  text-white resep-text">
                            <div class="p-4 pr-0 md:p-6">{{ getLocale == 'EN' ? 'Category' : 'Kategori' }}</div>
                            <div class="p-4 md:p-6">{{ getLocale == 'EN' ? 'Product' : 'Produk' }}</div>
                        </div>
                        <div v-for="( item, index ) in  main_products " :key="index"
                            class="mt-2 grid-resep grid-resep-cols-2 bg-white text-base font-[400]  text-primary"
                            @click="toggle(index)">
                            <div class="p-4 md:p-6 resep-text-inner  grid-resep-item-1">
                                {{ getLocale == 'EN' ? item.title_en : item.title }}
                            </div>
                            <div class="relative pl-0 md:pl-3 grid-resep-item-2">
                                <div class="relative h-full w-full">
                                    <div class="absolute h-full w-full bg-white z-10 flex items-center  resep-text-inner">
                                        {{ getLocale == 'EN' ? "Select Product..." : "Pilih Produk..." }}
                                    </div>
                                    <v-select :ref="getRefName(index)" v-model="defaultProduct" label="title"
                                        :options="item.product" :reduce="optionsProduct => optionsProduct.value"
                                        @option:selected="selectedProduct" aria-readonly="true"
                                        class="absolute inset-0 w-full appearance-none py-2.5 pl-3 font-roboto text-sm font-[400] resep-text focus:outline-0 md:text-base cursor-pointer">
                                    </v-select>
                                    <div class="absolute right-0 top-0 grid h-full place-content-center p-4 z-20">
                                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="resep-text-inner"  />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div v-for="(item, index) in DrugProducts.product_list" :key="index" class="mt-2 grid grid-cols-2 bg-white text-base font-[400] tracking-wide text-primary">
                            <div class="p-4 md:p-6">{{ item.category_name }}</div>
                            <div class="relative pl-0 md:pl-3">
                                <div class="absolute right-0 top-0 grid h-full place-content-center p-4">
                                    <font-awesome-icon icon="fa-solid fa-chevron-down" class="pointer-events-none" />
                                </div>
                                <select class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base">
                                    <option v-for="list in item.product" :value="list.id">{{ list.name }}</option>
                                </select>
                            </div>
                        </div> -->
                    </div>

                    <!-- pagination -->
                    <!-- <div class="join mt-8 bg-primary">
                        <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true" class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button
                            class="btn btn-primary btn-outline join-item  btn-active btn-sm bg-white md:btn-md">1</button>
                        <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true" class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div> -->
                    <!-- <nav aria-label="Pagination" class="mt-8 inline-flex -space-x-px rounded-md bg-white text-primary shadow-sm">
                        <button type="button" class="inline-flex items-center rounded-l-md border border-gal-blue-lighter px-2 py-2 text-sm font-semibold hover:bg-gal-blue-lighter">
                            <span class="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button type="button" aria-current="page" class="inline-flex items-center border border-gal-blue-lighter bg-primary px-4 py-2 text-sm font-semibold text-white">1</button>
                        <button type="button" class="inline-flex items-center border border-gal-blue-lighter px-4 py-2 text-sm font-semibold hover:bg-gal-blue-lighter">2</button>
                        <button type="button" class="inline-flex items-center border border-gal-blue-lighter px-4 py-2 text-sm font-semibold hover:bg-gal-blue-lighter">3</button>
                        <button type="button" class="inline-flex items-center border border-gal-blue-lighter px-4 py-2 text-sm font-semibold hover:bg-gal-blue-lighter">...</button>
                        <button type="button" class="inline-flex items-center border border-gal-blue-lighter px-4 py-2 text-sm font-semibold hover:bg-gal-blue-lighter">7</button>
                        <button type="button" class="inline-flex items-center border border-gal-blue-lighter px-4 py-2 text-sm font-semibold hover:bg-gal-blue-lighter">8</button>
                        <button type="button" class="inline-flex items-center border border-gal-blue-lighter px-4 py-2 text-sm font-semibold hover:bg-gal-blue-lighter">9</button>
                        <button type="button" class="inline-flex items-center rounded-r-md border border-gal-blue-lighter px-2 py-2 text-sm font-semibold hover:bg-gal-blue-lighter">
                            <span class="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </nav> -->
                </div>
            </div>
        </section>
        <Footer />
        <FlyingButton />
    </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';
import 'vue-select/dist/vue-select.css'
import router from '@/router/index.js'
import { mapState } from 'vuex'
import FlyingButton from '@/components/flying_button/FlyingButton.vue';
export default {
    components: {
        Navbar, Footer, FlyingButton
    },
    data() {
        return {
            defaultProduct: {
                title: "",
                value: "",
            },
            renderall: false,
            multiple: [
                {
                    id: 140
                }
            ],
            getLocalProductType: {},
            getLocalDetailItems: [],
            getLocalProductCategory: [],
            main_products: [],
            product_detail: [],
            select_search: '',
            select_product: '',
            OptionsProduct: [],
            OptionsProductList: [],
            search: '',
            refs: {},
            windowWidth: window.innerWidth,
        }
    },
    computed: {
        OptionsProduct() {
            return (this.search == '') ? [] : this.OptionsProduct
        },
        ...mapState({
            product_category: state => state.product.category_items,
            product_detail: state => state.product.detail_items
        }),
        backgroundStyle() {
            // Sesuaikan breakpoints sesuai kebutuhan
            const lgBreakpoint = 1024;
            const mdBreakpoint = 768;

            let imageUrl;
            if (this.windowWidth >= lgBreakpoint) {
                imageUrl = this.getLocalProductType.image_bg_lg;
            } else if (this.windowWidth >= mdBreakpoint && this.windowWidth < lgBreakpoint) {
                imageUrl = this.getLocalProductType.image_bg_md;
            } else {
                imageUrl = this.getLocalProductType.image_bg_sm;
            }

            return { backgroundImage: `url(${imageUrl})` };
        },
    },
    watch: {
        product_category(values) {
            if (values) {
                this.getApiProductCategory = values
            }
        },
        product_detail(values) {
            if (values) {
                this.getApiDetailItems = values
            }
        }
    },
    methods: {
        selectedProduct(e) {
            let value = e?.value
            router.push({ path: `/product/detail/${value}` })
        },
        getRefName(index) {
            return `ref_select_${index}`;
        },
        toggle(index) {
            let refName = this.getRefName(index);
            if (this.$refs[refName] && this.$refs[refName][0]) {
                // Buka dropdown yang diklik
                this.$refs[refName][0].open = !this.$refs[refName][0].open;
            }
            this.toggleClose(index);
        },
        toggleClose(index) {
            for (let i = 0; i < this.main_products.length; i++) {
                let refName = this.getRefName(i);
                if (i !== index && this.$refs[refName] && this.$refs[refName][0]) {
                    // Tutup dropdown kecuali yang diklik
                    this.$refs[refName][0].open = false;
                }
            }
        },
        search_open() {
            if (this.select_search) {
                router.push({ path: `/product/detail/${this.select_search}` })
            }
        },
        onSearchProduct(search, loading) {
            this.search = search
            if (search.length >= 3) {
                this.OptionsProduct = []
                const data = this.getLocalDetailItems
                const searches = [this.search]
                // const matchingLogs = data.filter(l => {
                //     return searches.some(term => l.name.toLowerCase().includes(term))
                // })
                const matchingLogs = data?.filter((obj) => {
                    return searches.every((keyword) => {
                        return Object.values(obj).some((value) => (value.namesearch != null) ? value.toLowerCase().includes(keyword) : [])
                    })
                })
                if (matchingLogs) {
                    for (let i = 0; i < matchingLogs.length; i++) {
                        const option = []
                        if (matchingLogs[i]['id'] != null) {
                            for (const key in matchingLogs[i]) {
                                if (key === 'id') { option['value'] = matchingLogs[i][key] } else if (key === 'namesearch') { option['title'] = this.makeBold(matchingLogs[i][key].toUpperCase(), search) } else if (key === 'image_url') { option['image'] = matchingLogs[i][key] } else if (key === 'id') { option['oid'] = matchingLogs[i][key] }
                            }
                            this.OptionsProduct.push(Object.assign({}, option))
                        }
                    }
                }
            }
            // loading(true)
            // this.$store.dispatch('product/getAllDetailResolve', search).then(data => {
            //     this.OptionsProduct = []
            //     if (data) {
            //         for (let i = 0; i < data.length; i++) {
            //             const option = []
            //             for (const key in data[i]) {
            //                 if (key === 'id') { option['value'] = data[i][key] } else if (key === 'name') { option['title'] = data[i][key] } else if (key === 'image_url') { option['image'] = data[i][key] } else if (key === 'id') { option['oid'] = data[i][key] }
            //             }
            //             this.OptionsProduct.push(Object.assign({}, option))
            //         }
            //     }
            //     loading(false)
            // })
        },
        makeBold(str, query) {
            // mask all word characters in city name
            const city_mask = str.replace(/\w/g, "#");
            // strip city and query string from any non-word character
            let query_stripped = query.toLowerCase().replace(/\W/g, "");
            let string_stripped = str.replace(/\W/g, "");
            // find the index of querystring in city name
            let index = string_stripped.toLowerCase().indexOf(query_stripped);

            if (index > -1 && query_stripped.length) {
                // find the end position of substring in stripped city name
                let end_index = index + query_stripped.length - 1;

                // replacer function for each masked character.
                // it will add to the start and end character of substring the corresponding tags,
                // replacing all masked characters with the original one.
                function replacer(i) {
                    let repl = string_stripped[i];
                    if (i === index) {
                        repl = "<b><u>" + repl;
                    }
                    if (i === end_index) {
                        repl = repl + "</u></b>";
                    }
                    return repl;
                }
                let i = -1;
                // restore masked string
                return city_mask.replace(/#/g, (_) => {
                    i++;
                    return replacer(i);
                });
            }

            return str;
        },
        async getData() {
            await this.$store.dispatch('product/getTypeById', { id: 2, status: 'live' }).then(data => {
                this.getLocalProductType = data
            })
            await this.$store.dispatch('product/getDetailDrugs', 'live').then(data => {
                // localStorage.setItem('product_druglive', JSON.stringify(data))
                this.getLocalDetailItems = data
                this.renderall = true
            })
            await this.$store.dispatch('product/getCategory', { id: 2, status: 'live' }).then(data => {
                this.getLocalProductCategory = data
            })
            // this.getLocalProductType = JSON.parse(localStorage.getItem('pdrugtypelive'))
            // if (localStorage.getItem('pdrugtypelive')) {
            //     this.$store.dispatch('product/getTypeById', { id: 2, status: 'live' }).then(data => {
            //         localStorage.setItem('pdrugtypelive', JSON.stringify(data))
            //     })
            //     this.getLocalProductType = JSON.parse(localStorage.getItem('pdrugtypelive'))
            // } else {
            //     this.$store.dispatch('product/getTypeById', { id: 2, status: 'live' }).then(data => {
            //         localStorage.setItem('pdrugtypelive', JSON.stringify(data))
            //     })
            // }
            // if (localStorage.getItem('pcdruglive')) {
            //     this.$store.dispatch('product/getCategory', { id: 2, status: 'live' }).then(data => {
            //         localStorage.setItem('pcdruglive', JSON.stringify(data))
            //     })
            //     this.getLocalProductCategory = JSON.parse(localStorage.getItem('pcdruglive'))
            // } else {
            //     this.$store.dispatch('product/getCategory', { id: 2, status: 'live' }).then(data => {
            //         localStorage.setItem('pcdruglive', JSON.stringify(data))
            //     })
            // }
            // if (localStorage.getItem('product_druglive')) {
            // this.$store.dispatch('product/getDetailDrugs', 'live').then(data => {
            // localStorage.setItem('product_druglive', JSON.stringify(data))
            // })
            // this.getLocalDetailItems = JSON.parse(localStorage.getItem('product_druglive'))
            // this.renderall = true
            // } else {
            //     this.$store.dispatch('product/getDetailDrugs', 'live').then(data => {
            //         localStorage.setItem('product_druglive', JSON.stringify(data))
            //         router.go(0)
            //     })
            // }
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
    },
    async created() {
        await this.getData()
        // locale
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
        let products = []
        let groups = []
        let details = []
        let getLocalProductCategory = this.getLocalProductCategory
        let getLocalProductDetail = this.getLocalDetailItems
        for (let d = 0; d < getLocalProductDetail?.length; d++) {
            const option = []
            if (getLocalProductDetail[d]['id'] != null) {
                for (const key in getLocalProductDetail[d]) {
                    if (key === 'id') { option['value'] = getLocalProductDetail[d][key] } else if (key === 'name') { option['title'] = getLocalProductDetail[d][key] } else if (key === 'image_url') { option['image'] = getLocalProductDetail[d][key] } else if (key === 'id') { option['oid'] = getLocalProductDetail[d][key] }
                }
                this.OptionsProductList.push(Object.assign({}, option))
            }
            details[d] = {
                id: getLocalProductDetail[d].id,
                value: getLocalProductDetail[d].id,
                title: getLocalProductDetail[d].name.toUpperCase(),
                product_category_id: getLocalProductDetail[d].product_category_id,
                name: getLocalProductDetail[d].name.toUpperCase(),
                name_en: getLocalProductDetail[d].name_en.toUpperCase(),
                image_url: getLocalProductDetail[d].image_url
            }
        }
        for (let c = 0; c < getLocalProductCategory?.length; c++) {
            const result = details.filter(function (id) {
                return id.product_category_id === getLocalProductCategory[c].id
            })
            products[c] = {
                id: getLocalProductCategory[c].id,
                title: getLocalProductCategory[c].title.toUpperCase(),
                title_en: getLocalProductCategory[c].title_en.toUpperCase(),
                description: getLocalProductCategory[c].description,
                description_en: getLocalProductCategory[c].description_en,
                image_url: getLocalProductCategory[c].image_url,
                product: result
            }
        }
        this.main_products = products

        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        window.addEventListener('resize', this.handleResize);
    },
}

</script>

<style>
.vs__selected {
    margin: 14.5px 2px 0;
}

.vs__dropdown-toggle {
    border: none;
}

.vs__actions {
    display: none;
}

.vs__search {
    padding-top: 0.5rem;
}

.vs__search:focus {
    padding-top: 0.5rem;
}
</style>