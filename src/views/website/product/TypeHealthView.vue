<template>
    <div class="static">
        <Navbar active_menu="product" />
        <section
            class="h-full w-full bg-[url('@/assets/icons/product/health/background.svg')] bg-cover bg-center bg-no-repeat md:h-screen">
            <div class="product-type-container h-full">
                <div class="flex h-full flex-col-reverse items-center justify-center p-4 md:flex-row md:p-0">
                    <div class="flex h-full w-full flex-col-reverse justify-center md:w-1/2 md:flex-col">
                        <div>
                            <div
                                class="mb-4 mt-8 font-roboto text-base font-[900] text-gal-blue-light md:mb-8 md:mt-0 lg:text-2xl">
                                <div class="ql-editor" style="padding: 0;">
                                    <div
                                        v-html="getLocale == 'EN' ? getLocalProductType.sub_title_head_en : getLocalProductType.sub_title_head">
                                    </div>
                                </div>
                            </div>
                            <div class="gal-title text-white">
                                <div class="ql-editor" style="padding: 0;">
                                    <div
                                        v-html="getLocale == 'EN' ? getLocalProductType.sub_title_en : getLocalProductType.sub_title">
                                    </div>
                                </div>
                            </div>
                            <div class="gal-description mt-2 text-white md:mt-6 lg:w-[80%]">
                                <div class="ql-editor" style="padding: 0;">
                                    <div
                                        v-html="getLocale == 'EN' ? getLocalProductType.sub_description_en : getLocalProductType.sub_description">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="relative mt-10 w-full md:w-3/5">
                            <v-select v-model="select_search" @change="search_open()" style="border:none;"
                                class="input w-full pr-10 font-roboto text-sm font-[400] focus:border-gal-blue-light focus:outline-0 focus:ring-2 focus:ring-offset-0 md:text-base"
                                aria-readonly="true" @search="onSearchProduct" :options="OptionsProduct"
                                :reduce="OptionsProduct => OptionsProduct.value" label="title"
                                :placeholder="getLocale == 'EN' ? 'Search products ...' : 'Cari produk ...'">
                                <template v-slot:no-options>{{ getLocale == 'EN' ? 'Items are not found in this category..' : 'Item tidak terdapat pada kategori ini..' }}</template>
                                <template #option="option">
                                    <span style="display: flex; height:35px;">
                                        <div v-html="option.title"></div>
                                    </span>
                                    <!-- <span style="display: flex; height:35px;" ><img style="width: 50px;margin-right: 20px;" :src="option.image" /><div v-html="option.title"></div></span> -->
                                </template>
                            </v-select>
                            <!-- <input type="text" id="Search" :placeholder="getLocale == 'EN' ? 'Search products ...' : 'Cari produk ...'" class="input input-bordered w-full pr-10 font-roboto text-sm font-[400] focus:border-gal-blue-light focus:outline-0 focus:ring-2 focus:ring-offset-0 md:text-base" /> -->
                            <span class="absolute inset-y-0 end-0 grid w-16 place-content-center">
                                <button type="button" class="text-gray-600 hover:text-primary">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </button>
                            </span>
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
       
        
        <section v-for="(item, index) in main_products" :class="index % 2 == 0 ? 'bg-white' : 'bg-gal-blue-lighter'"
            class="p-4 md:px-0 md:py-10">
            <div class="product-type-container" :class="index % 2 == 0 ? position.even : position.odd">
               
                <div class="flex flex-wrap" :class="index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'">
                    <div :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'" class="w-full md:w-2/5">
                        <img :src="item.image_url" :alt="'img-category-' + item.id"
                            class="w-full object-cover object-center shadow-xl aspect-[4/3]">
                    </div>
                    <div class="mt-4 w-full px-0 md:mt-0 md:w-3/5 md:px-10 lg:px-16">
                        <div class="ql-editor" style="padding: 0;height: fit-content;;overflow: hidden;">
                        <div  data-aos="fade-up" class="gal-title"
                            v-html="getLocale == 'EN' ? item.title_en : item.title">
                        </div>
                    </div>
                        <div class="ql-editor" style="padding: 0;height: fit-content;overflow: hidden;">
                        <div  data-aos="fade-up" data-aos-delay="600"
                            class="mt-2 font-roboto text-sm font-[400] text-gal-grey-darker md:mt-6 md:text-xl"
                            v-html="getLocale == 'EN' ? item.description_en : item.description">
                        </div>
                    </div>

                        <div class="mt-4 grid gap-2 md:mt-10 md:gap-4">
                            <div data-aos="fade-up" :data-aos-delay="`${(groupIndex * 150) + 500}`"
                                v-for="(group, groupIndex) in chunkArray(item.groups, 3)" :key="groupIndex"
                                class="grid grid-cols-3 place-content-center gap-2 md:gap-4">
                                <div data-aos="fade-up"
                                    :data-aos-delay="`${((groupIndex * 150) + 500) + (detailIndex * 300)}`"
                                    v-for="(detail, detailIndex) in group" @click="onProductItems(detail.id)"
                                    :key="detail.id" class="grid">
                                    <div :class="active_product_items && active_product_id == detail.id ? 'border-gal-blue-lighthover' : 'border-gal-blue-lighter'"
                                        class="grid cursor-pointer place-content-center rounded border border-gal-blue-lighter bg-white p-2 md:rounded-lg md:border-2 md:p-2">
                                        <img :src="detail.image_url" :alt="'logo-' + detail.title"
                                            class="aspect-video w-full">
                                    </div>
                                </div>

                                <template v-for="(detail, detailIndex) in group">
                                    <div :key="detail.id" v-if="active_product_items && active_product_id === detail.id"
                                        :class="active_product_items && active_product_id === detail.id ? 'border-gal-blue-lighthover border-2' : 'border-gal-blue-lighter'"
                                        class="col-span-3 w-full rounded border border-gal-blue-lighter bg-white p-4 md:rounded-lg">
                                        <div class="grid grid-cols-5 gap-2">
                                            <template v-for="(item, index) in detail.details" :key="index"
                                                v-if="detail.details.length != 0">
                                                <router-link :to="{ path: '/product/detail/' + item.id }">
                                                    <template v-if="index < keyz">
                                                        <div
                                                            class="grid place-content-center rounded border border-gal-blue-lighter bg-white md:rounded-lg md:border-2">
                                                            <img :src="item.image_url" :alt="item.name"
                                                                class="mx-auto aspect-video object-cover object-center">
                                                        </div>
                                                    </template>
                                                </router-link>
                                            </template>

                                            <template v-else>
                                                <div class="col-span-5 bg-white text-center">
                                                    {{ getLocale == 'EN' ? 'No product items on' :
        'tidak terdapat produk pada item ini' }}
                                                    {{ detail.name }}</div>
                                            </template>
                                        </div>

                                        <template v-if="detail.details.length > 10">
                                            <button @click="onMitraData('showMore')" v-if="keyz === 10"
                                                class="btn btn-primary btn-sm">{{ getLocale == 'EN' ? 'Show All' :
        'Tampilkan Semua' }}</button>
                                            <button @click="onMitraData('showLess')" v-else
                                                class="btn btn-primary btn-sm">{{ getLocale == 'EN' ? 'Hide' :
                                                'Sembunyikan'
                                                }}</button>
                                        </template>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <!-- <section v-for="(item, index) in HealthProducts.product_types" :class="index%2 == 0 ? 'bg-white' : 'bg-gal-blue-lighter'" class="p-6 md:px-0 md:py-10">
            <div class="container" :class="index%2 == 0 ? position.even : position.odd">
                <div class="flex flex-wrap" :class="index%2 == 0 ? 'flex-row' : 'flex-row-reverse'">
                    <div class="w-full md:w-2/5">
                        <img :src="item.image_url" alt="image-type" class="aspect-video w-full object-cover object-center shadow-xl md:aspect-[4/3]">
                    </div>
                    <div class="mt-4 w-full px-0 md:mt-0 md:w-3/5 md:px-16">
                        <div data-aos="fade-up" class="gal-title">{{ getLocale == 'EN' ? item.name_en : item.name }}</div>
                        <div data-aos="fade-up" data-aos-delay="600" class="mt-2 font-roboto text-sm font-[400] text-gal-grey-darker md:mt-6 md:text-xl">{{ getLocale == 'EN' ? item.description_en : item.description }}</div>
                        <div class="mt-4 grid gap-2 md:mt-10 md:gap-4">
                            <div data-aos="fade-up" :data-aos-delay="`${(groupIndex*150)+500}`" v-for="(group, groupIndex) in chunkArray(item.products, 3)" :key="groupIndex" class="grid grid-cols-3 place-content-center gap-2 md:gap-4" >
                                <div data-aos="fade-up" :data-aos-delay="`${((groupIndex*150)+500) + (productIndex*300)}`" v-for="(product, productIndex) in group" @click="onProductItems(product.id)" :key="product.id" class="grid cursor-pointer place-content-center rounded border border-gal-blue-lighter bg-white p-4 md:rounded-lg md:border-2 md:p-6" >
                                    <img :src="product.image_url" :alt="product.name" class="w-full object-cover object-center">
                                </div>
                                <template v-for="(product, productIndex) in group">
                                    <div :key="product.id" v-if="active_product_items && active_product_id === product.id" class="col-span-3 w-full rounded border border-gal-blue-lighter bg-white p-4 md:rounded-lg">
                                        <div class="grid grid-cols-5 gap-2">
                                            <router-link :to="{ name: 'ProductHealthDetailView' }" v-if="product.product_item.length != 0" v-for="(item, index) in product.product_item" :key="index">
                                                <div class="grid place-content-center rounded border border-gal-blue-lighter bg-white p-4 md:rounded-lg md:border-2 md:p-6">
                                                    <img :src="item.image_url" :alt="item.name" class="w-full object-cover object-center">
                                                </div>
                                            </router-link>
                                            <div v-else class="col-span-5 bg-white text-center"> {{ getLocale == 'EN' ? 'No product items on' : 'tidak terdapat produk pada item ini' }} {{product.name}}</div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>           
                    </div>
                </div>
            </div>
        </section> -->

        <Footer />
        <FlyingButton />
    </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import router from '@/router/index.js'
import 'vue-select/dist/vue-select.css'
import { mapState } from 'vuex'
import FlyingButton from '@/components/flying_button/FlyingButton.vue';

export default {
    components: {
        Navbar, Footer, FlyingButton
    },
    data() {
        return {
            keyz: 10,
            loading: false,
            renderall: false,
            getLocale: 'ID',

            getLocalProductType: {},
            getApiProductType: {},

            getLocalProductCategory: [],
            getApiProductCategory: [],

            getLocalProductGroup: [],
            getApiProductGroup: [],

            getLocalDetailItems: [],
            getApiDetailItems: [],

            position: {
                even: 'mx-auto md:mr-auto md:ml-0 xl:mx-auto',
                odd: 'mx-auto md:mr-0 md:ml-auto xl:mx-auto'
            },
            stop: {
                title: false,
                description: false,
                group: false,
                product: false,
            },
            main_products: [],

            active_product_items: false,
            active_product_id: null,
            search: '',
            select_search: '',
            OptionsProduct: [],
        }
    },
    methods: {
        search_open() {
            if (this.select_search) {
                router.push({ path: '/product/detail/' + this.select_search })
            }
        },
        onMitraData(action) {
            if (action == 'showMore') {
                this.keyz = 100
            } else if (action === 'showLess') {
                this.keyz = 10
            }
        },
        onSearchProduct(search, loading) {
            this.search = search
            if (search.length >= 3) {
                this.OptionsProduct = []
                const data =  this.getLocalDetailItems
                const searches = [this.search]
                const matchingLogs = data.filter((obj) => {
                    return searches.every((keyword) => {
                        return Object.values(obj).some((value) => (value.namesearch != null) ? value.toLowerCase().includes(keyword) : [])
                    })
                })

                if (matchingLogs) {
                    for (let i = 0; i < matchingLogs.length; i++) {
                        const option = []
                        for (const key in matchingLogs[i]) {
                            if (key === 'id') { option['value'] = matchingLogs[i][key] } else if (key === 'namesearch') { option['title'] = this.makeBold(matchingLogs[i][key].toUpperCase(), search) } else if (key === 'image_url') { option['image'] = matchingLogs[i][key] } else if (key === 'id') { option['oid'] = matchingLogs[i][key] }
                        }
                        this.OptionsProduct.push(Object.assign({}, option))
                    }
                }
            }
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
        chunkArray(array, size) {
            const resultArray = []
            for (let i = 0; i < array.length; i += size) {
                resultArray.push(array.slice(i, i + size))
            }
            return resultArray
        },
        onProductItems(id) {
            this.keyz = 10
            this.active_product_id = id
            this.active_product_items = !this.active_product_items;
        },
        async getData() {
            await this.$store.dispatch('product/getTypeById', { id: 1, status: 'live' }).then(data => {
                // localStorage.setItem('product_type_by_idlive', JSON.stringify(data))
                this.getLocalProductType = data
            })
            await this.$store.dispatch('product/getCategory', { id: 1, status: 'live' }).then(data => {
                // localStorage.setItem('product_categorylive', JSON.stringify(data))
                this.getLocalProductCategory = data
            })
            await this.$store.dispatch('product/getGroup', 'live').then(data => {
                // localStorage.setItem('product_grouplive', JSON.stringify(data))
                this.getLocalProductGroup = data
            })
            await this.$store.dispatch('product/getDetailHealths', 'live').then(data => {
                // localStorage.setItem('product_detaillive', JSON.stringify(data))
                this.getLocalDetailItems = data
            })
            this.renderall = true
            // if (localStorage.getItem('product_type_by_idlive')) {
            //     this.$store.dispatch('product/getTypeById', { id: 1, status: 'live' }).then(data => {
            //         localStorage.setItem('product_type_by_idlive', JSON.stringify(data))
            //     })
            //     this.getLocalProductType = JSON.parse(localStorage.getItem('product_type_by_idlive'))
            // } else {
            //     this.$store.dispatch('product/getTypeById', { id: 1, status: 'live' }).then(data => {
            //         localStorage.setItem('product_type_by_idlive', JSON.stringify(data))
            //     })
            // }
            // if (localStorage.getItem('product_categorylive')) {
            //     this.$store.dispatch('product/getCategory', { id: 1, status: 'live' }).then(data => {
            //         localStorage.setItem('product_categorylive', JSON.stringify(data))
            //     })
            //     this.getLocalProductCategory = JSON.parse(localStorage.getItem('product_categorylive'))
            // } else {
            //     this.$store.dispatch('product/getCategory', { id: 1, status: 'live' }).then(data => {
            //         localStorage.setItem('product_categorylive', JSON.stringify(data))
            //     })
            // }
            // if (localStorage.getItem('product_grouplive')) {
            //     this.$store.dispatch('product/getGroup', 'live').then(data => {
            //         localStorage.setItem('product_grouplive', JSON.stringify(data))
            //     })
            //     this.getLocalProductGroup = JSON.parse(localStorage.getItem('product_grouplive'))
            // } else {
            //     this.$store.dispatch('product/getGroup', 'live').then(data => {
            //         localStorage.setItem('product_grouplive', JSON.stringify(data))
            //     })
            // }
            // if (localStorage.getItem('product_detaillive')) {
            //     this.$store.dispatch('product/getDetailHealths', 'live').then(data => {
            //         localStorage.setItem('product_detaillive', JSON.stringify(data))
            //     })
            //     this.getLocalDetailItems = JSON.parse(localStorage.getItem('product_detaillive'))
            //     this.renderall = true
            // } else {
            //     this.$store.dispatch('product/getDetailHealths', 'live').then(data => {
            //         localStorage.setItem('product_detaillive', JSON.stringify(data))
            //         router.go(0)
            //     })
            // }
        }
    },
    computed: {
        OptionsProduct() {
            return (this.search == '') ? [] : this.OptionsProduct
        },
        ...mapState({
            product_type: state => state.product.type_items_by_id,
            product_category: state => state.product.category_items,
            product_group: state => state.product.group_items,
            product_detail: state => state.product.detail_items,
        }),
    },
    watch: {
        search(values) {
            return this.OptionsProduct.push(Object.assign({}, []))
        },
        product_type(values) {
            if (values) {
                this.getApiProductType = values
            }
        },
        product_category(values) {
            if (values) {
                this.getApiProductCategory = values
            }
        },
        product_group(values) {
            if (values) {
                this.getApiProductGroup = values
            }
        },
        product_detail(values) {
            if (values) {
                this.getApiDetailItems = values
            }
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
        let getLocalProductGroup = this.getLocalProductGroup
        let getLocalProductDetail = this.getLocalDetailItems
        for (let d = 0; d < getLocalProductDetail.length; d++) {
            if (getLocalProductDetail[d].image_url) {
                details[d] = {
                    id: getLocalProductDetail[d].id,
                    product_group_id: getLocalProductDetail[d].product_group_id,
                    name: getLocalProductDetail[d].name,
                    name_en: getLocalProductDetail[d].name_en,
                    image_url: getLocalProductDetail[d].image_url
                }
            }
        }
        for (let g = 0; g < getLocalProductGroup.length; g++) {
            const result = details.filter(function (id) {
                return id.product_group_id === getLocalProductGroup[g].id
            })
            groups[g] = {
                id: getLocalProductGroup[g].id,
                product_category_id: getLocalProductGroup[g].product_category_id,
                title: getLocalProductGroup[g].title,
                title_en: getLocalProductGroup[g].title_en,
                image_url: getLocalProductGroup[g].image_url,
                details: result
            }
        }
        for (let c = 0; c < getLocalProductCategory.length; c++) {
            const result = groups.filter(function (id) {
                return id.product_category_id === getLocalProductCategory[c].id
            })
            products[c] = {
                id: getLocalProductCategory[c].id,
                title: getLocalProductCategory[c].title,
                title_en: getLocalProductCategory[c].title_en,
                description: getLocalProductCategory[c].description,
                description_en: getLocalProductCategory[c].description_en,
                image_url: getLocalProductCategory[c].image_url,
                groups: result
            }
        }
        this.main_products = products
    }
}

</script>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init({
        offset: 80,
        duration: 800,
        easing: 'ease',
        delay: 500,
        once: true,
        anchorPlacement: 'top-bottom',
    });
})

</script>

<style>
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