<template>
    <div class="static" v-if="renderall">
        <Navbar active_menu="product" />
        <section class="h-full w-full bg-[url('@/assets/icons/product/drug/background.svg')] bg-cover bg-center bg-no-repeat px-4 pb-10 pt-20 md:px-0 md:pb-16 md:pt-32">
            <div class="container mx-auto h-full">
                <div class="flex h-full flex-col-reverse items-center justify-center md:flex-row">
                    <div class="grid h-full w-full place-content-center md:w-1/2">
                        <div class="mb-4 mt-8 font-roboto text-base font-[900]  text-gal-blue-light md:mb-8 md:mt-0 lg:text-2xl">{{getLocale == 'EN' ? getLocalProductType.title_head_en : getLocalProductType.title_head}}</div>
                        <div class="gal-title">{{ getLocale == 'EN' ? getLocalProductType.title_en : getLocalProductType.title }}</div>
                        <div class="gal-description mt-2 md:mt-6">{{ getLocale == 'EN' ? getLocalProductType.sub_description_en : getLocalProductType.sub_description }}</div>
                    </div>
                    <div class="mt-8 grid h-full w-full place-content-center md:w-1/2">
                        <img :src="getLocalProductType.image_url" alt="image-banner">
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-[url('@/assets/images/product/drug/background.png')] bg-cover bg-top bg-no-repeat px-4 py-10 md:px-0 md:py-14">
            <div class="container mx-auto">
                <div class="flex w-full flex-col items-center md:w-3/5 md:items-start">
                    <!-- input search -->
                    <div class="relative w-full">
                        <v-select v-model="select_search" @change="search_open()" style="border:none;" class="input input-bordered w-full pr-10 font-roboto text-sm font-[400] focus:border-gal-blue-light focus:outline-0 focus:ring-2 focus:ring-offset-0 md:text-base" aria-readonly="true" @search="onSearchProduct" :options="OptionsProduct" :reduce="OptionsProduct => OptionsProduct.value" label="title" :placeholder="getLocale == 'EN' ? 'Search products ...' : 'Cari produk ...'">
                            <template v-slot:no-options>Loading..</template>
                            <template #option="option">
                                <span style="display: flex; height:35px;"><img style="width: 50px;margin-right: 20px;" :src="option.image" />{{ option.title }}</span>
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
                        <div class="grid grid-cols-2 bg-primary text-base font-[700] tracking-wide text-white">
                            <div class="p-4 md:p-6">{{ getLocale == 'EN' ? 'Category' : 'Kategori' }}</div>
                            <div class="p-4 md:p-6">{{ getLocale == 'EN' ? 'Product' : 'Produk' }}</div>
                        </div>
                        <div v-for="(item, index) in main_products" :key="index" class="mt-2 grid grid-cols-2 bg-white text-base font-[400] tracking-wide text-primary">
                            <!-- <template v-if="item.id == 2"> -->
                                <div class="p-4 md:p-6">{{ getLocale == 'EN' ? item.title_en : item.title }}</div>
                                <div class="relative pl-0 md:pl-3">
                                    <div class="absolute right-0 top-0 grid h-full place-content-center p-4">
                                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="pointer-events-none" />
                                    </div>
                                    <template v-if="item.id == 2">
                                        <v-select v-model="select_product_1"  @option:selected="search_product_1()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <template v-if="item.id == 9">
                                        <v-select v-model="select_product_2"  @option:selected="search_product_2()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <template v-if="item.id == 10">
                                        <v-select v-model="select_product_3"  @option:selected="search_product_3()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <template v-if="item.id == 11">
                                        <v-select v-model="select_product_4"  @option:selected="search_product_4()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <template v-if="item.id == 12">
                                        <v-select v-model="select_product_5"  @option:selected="search_product_5()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <template v-if="item.id == 13">
                                        <v-select v-model="select_product_6"  @option:selected="search_product_6()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <template v-if="item.id == 14">
                                        <v-select v-model="select_product_7"  @option:selected="search_product_7()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <template v-if="item.id == 15">
                                        <v-select v-model="select_product_8"  @option:selected="search_product_8()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <template v-if="item.id == 16">
                                        <v-select v-model="select_product_9"  @option:selected="search_product_9()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <template v-if="item.id == 17">
                                        <v-select v-model="select_product_10"  @option:selected="search_product_10()" :options="item.product" :reduce="OptionsProduct => OptionsProduct.value" label="title" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base"></v-select>
                                    </template>
                                    <!-- <select v-model="select_product_1" @change="search_product()" class="h-full w-full appearance-none py-2.5 pl-3 pr-10 font-roboto text-sm font-[400] focus:outline-0 md:text-base">
                                        <option v-for="list in item.product" :value="list.id">{{ list.name }}</option>
                                    </select> -->
                                </div>
                            <!-- </template> -->
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
                    <div class="join mt-8 bg-primary">
                        <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button class="btn btn-primary btn-outline join-item  btn-active btn-sm bg-white md:btn-md">1</button>
                        <!-- <button class="btn btn-primary btn-outline join-item btn-active btn-sm bg-white md:btn-md">2</button>
                        <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">99</button>
                        <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">100</button> -->
                        <button class="btn btn-primary btn-outline join-item btn-sm bg-white md:btn-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
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
            renderall: false,
            multiple:[
                {
                    id:140
                }
            ],
            main_products:[],
            select_search:'',
            select_product:'',
            select_product_1:'',
            select_product_2:'',
            select_product_3:'',
            select_product_4:'',
            select_product_5:'',
            select_product_6:'',
            select_product_7:'',
            select_product_8:'',
            select_product_9:'',
            select_product_10:'',
            OptionsProduct:[],
            OptionsProductList:[],
            search:''
        }
    },
    computed: {
        OptionsProduct (){
            return (this.search == '') ? [] : this.OptionsProduct
        },
        ...mapState({ 
            product_category: state => state.product.category_items,
            product_detail: state => state.product.detail_items
        })
    },
    watch: {
        product_category (values) {
            if(values){
                this.getApiProductCategory = values
            }
        },
        product_detail (values) {
            if(values){
                this.getApiDetailItems = values
            }
        }
    },
    methods: {
        search_open () {
            if (this.select_search) {
                router.push({ path: `/product/detail/${this.select_search}` })
            }
        },
        search_product_1 () {
            if (this.select_product_1) {
                router.push({ path: `/product/detail/${this.select_product_1}` })
            }
        },
        search_product_2 () {
            if (this.select_product_2) {
                router.push({ path: `/product/detail/${this.select_product_2}` })
            }
        },
        search_product_3 () {
            if (this.select_product_3) {
                router.push({ path: `/product/detail/${this.select_product_3}` })
            }
        },
        search_product_4 () {
            if (this.select_product_4) {
                router.push({ path: `/product/detail/${this.select_product_4}` })
            }
        },
        search_product_5 () {
            if (this.select_product_5) {
                router.push({ path: `/product/detail/${this.select_product_5}` })
            }
        },
        search_product_6 () {
            if (this.select_product_6) {
                router.push({ path: `/product/detail/${this.select_product_6}` })
            }
        },
        search_product_7 () {
            if (this.select_product_7) {
                router.push({ path: `/product/detail/${this.select_product_7}` })
            }
        },
        search_product_8 () {
            if (this.select_product_8) {
                router.push({ path: `/product/detail/${this.select_product_8}` })
            }
        },
        search_product_9 () {
            if (this.select_product_9) {
                router.push({ path: `/product/detail/${this.select_product_9}` })
            }
        },
        search_product_10 () {
            if (this.select_product_10) {
                router.push({ path: `/product/detail/${this.select_product_10}` })
            }
        },
        onSearchProduct(search, loading) {
            this.search = search
            if(search.length >= 3) {
                this.OptionsProduct = []
                const data = JSON.parse(localStorage.getItem('product_druglive'))
                const searches = [this.search]
                // const matchingLogs = data.filter(l => {
                //     return searches.some(term => l.name.toLowerCase().includes(term))
                // })
                const matchingLogs = data.filter((obj) => {
                    return searches.every((keyword) => {
                        return Object.values(obj).some((value) => (value.namesearch != null) ? value.toLowerCase().includes(keyword) : [])
                    })
                })
                if (matchingLogs) {
                    for (let i = 0; i < matchingLogs.length; i++) {
                        const option = []
                        if (matchingLogs[i]['id'] != null) {
                            for (const key in matchingLogs[i]) {
                                if (key === 'id') { option['value'] = matchingLogs[i][key] } else if (key === 'namesearch') { option['title'] = matchingLogs[i][key].toUpperCase() } else if (key === 'image_url') { option['image'] = matchingLogs[i][key] } else if (key === 'id') { option['oid'] = matchingLogs[i][key] }
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
            //         console.log(data)
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
        getData() {
            if (localStorage.getItem('pdrugtypepreview')) { 
                this.$store.dispatch('product/getTypeById', {id:2, status:'preview'}).then(data => {
                    localStorage.setItem('pdrugtypepreview', JSON.stringify(data))
                })
                this.getLocalProductType = JSON.parse(localStorage.getItem('pdrugtypepreview'))
            } else {
                this.$store.dispatch('product/getTypeById', {id:2, status:'preview'}).then(data => {
                    localStorage.setItem('pdrugtypepreview', JSON.stringify(data))
                })
            }
            if (localStorage.getItem('pcdrugpreview')) { 
                this.$store.dispatch('product/getCategory', {id:2, status:'preview'}).then(data => {
                    localStorage.setItem('pcdrugpreview', JSON.stringify(data))
                })
                this.getLocalProductCategory = JSON.parse(localStorage.getItem('pcdrugpreview'))
            } else {
                this.$store.dispatch('product/getCategory', {id:2, status:'preview'}).then(data => {
                    localStorage.setItem('pcdrugpreview', JSON.stringify(data))
                })
            }
            if (localStorage.getItem('product_drugpreview')) {
                this.$store.dispatch('product/getDetailDrugs', 'preview').then(data => {
                    localStorage.setItem('product_drugpreview', JSON.stringify(data))
                })
                this.getLocalDetailItems = JSON.parse(localStorage.getItem('product_drugpreview'))
                this.renderall = true
            } else {
                this.$store.dispatch('product/getDetailDrugs', 'preview').then(data => {
                    localStorage.setItem('product_drugpreview', JSON.stringify(data))
                    router.go(0)
                })
            }
        }
    },
    created() {
        this.getData()
        // locale
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
        // console.log(this.HealthProducts.product_types)
        // console.log(this.getLocalProductCategory)
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
            if (getLocalProductDetail[d].product_category_id == 2) {
                this.select_product_1 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
            }
            if (getLocalProductDetail[d].product_category_id == 9) {
                this.select_product_2 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
            }
            if (getLocalProductDetail[d].product_category_id == 10) {
                this.select_product_3 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
            }
            if (getLocalProductDetail[d].product_category_id == 11) {
                this.select_product_4 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
            }
            if (getLocalProductDetail[d].product_category_id == 12) {
                this.select_product_5 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
            }
            if (getLocalProductDetail[d].product_category_id == 13) {
                this.select_product_6 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
            }
            if (getLocalProductDetail[d].product_category_id == 14) {
                this.select_product_7 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
            }
            if (getLocalProductDetail[d].product_category_id == 15) {
                this.select_product_8 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
            }
            if (getLocalProductDetail[d].product_category_id == 16) {
                this.select_product_9 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
            }
            if (getLocalProductDetail[d].product_category_id == 17) {
                this.select_product_10 = {value:getLocalProductDetail[d].id,title:getLocalProductDetail[d].name.toUpperCase()}
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
            const result = details.filter(function(id) {
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
        // console.log(this.OptionsProductList)
    }
}

</script>
<style>
    .vs__selected {
        margin: 14.5px 2px 0;
    }
    .vs__dropdown-toggle {
        border:none;
    }
    .vs__actions {
        display:none;
    }
    .vs__search {
        padding-top: 0.5rem;
    }
    .vs__search:focus {
        padding-top: 0.5rem;
    }
</style>