<template>
    <div class="static" v-if="renderall">
        <Navbar active_menu="business" />
        <section class="h-full w-full bg-primary px-4 pb-10 pt-20 font-roboto md:px-0 md:pb-16 md:pt-32">
            <div class="container mx-auto">
                <div class="gal-title-2 uppercase">{{ getLocale == 'EN' ? getLocalBusiness.page.page_en : getLocalBusiness.page.pages }}</div>
                <div class="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-8 lg:gap-16">
                    <div>
                        <div class="gal-title text-white">{{ getLocale == 'EN' ? getLocalBusiness.export.title_en : getLocalBusiness.export.title }}</div>
                        <div class="gal-description mt-lg-6 mt-4 text-white">{{ getLocale == 'EN' ? getLocalBusiness.export.subtitle_en : getLocalBusiness.export.subtitle }}</div>
                        <div class="mt-2 text-justify text-white md:mt-4">{{ getLocale == 'EN' ? getLocalBusiness.export.paraghraph_1_en : getLocalBusiness.export.paraghraph_1 }}</div>
                        <div class="mt-2 text-justify text-white md:mt-4">{{ getLocale == 'EN' ? getLocalBusiness.export.paraghraph_2_en : getLocalBusiness.export.paraghraph_2 }}</div>
                        <div class="mt-2 text-justify text-white md:mt-4">{{ getLocale == 'EN' ? getLocalBusiness.export.paraghraph_3_en : getLocalBusiness.export.paraghraph_3 }}</div>
                    </div>
                    <div>
                        <div class="mx-auto w-full flex-col items-center justify-center md:mx-0 md:items-start">
                            <div class="flex overflow-hidden">
                                <!-- <div id="slider_img_export" v-for="(item, index) in getLocalBusiness.export.image_urls" :key="item.id" :style="{ transform: `translateX(${-container.slide_export * (current.slide_export - 1)}px)` }" -->
                                    <div id="slider_img_export"
                                    class="group flex w-full min-w-full max-w-full items-center justify-center overflow-hidden scroll-smooth duration-500"
                                    >
                                    <img :src="getLocalBusiness.export.image_urls[0].image_url" :alt="'Slider Pic ' + 1" class="w-full object-cover object-center transition-all duration-700 group-hover:scale-125 aspect-[4/3]" />
                                </div>
                            </div>
                            <div class="col flex items-center justify-center gap-x-4 py-4 md:justify-end">
                                <!-- <button v-for="item in getLocalBusiness.export.image_urls.length" :key="'slider-dot-' + item.id"
                                    class="my-1 h-1.5 w-12 duration-500" :class="{
                                        'bg-gal-grey-dark hover:opacity-70': current.slide_export != item,
                                        'bg-gal-blue-light': current.slide_export == item,
                                    }" @click="current.slide_export = item" /> -->
                            </div>
                        </div>
                        <details class="dropdown dropdown-top">
                            <summary class="btn btn-sm md:btn-md">
                                {{ getLocale == 'EN' ? 'Our Contact' : 'Kontak Kami' }}
                                <font-awesome-icon icon="fa-solid fa-chevron-up" class="ml-3" />
                            </summary>
                            <ul class="menu dropdown-content rounded-box z-[1] w-60 bg-base-100 p-2 shadow">
                                <li>
                                    <a :href="'mailto:' + getLocalBusiness.page.contact.email"><font-awesome-icon class="mr-4" icon="fa-regular fa-envelope"/>{{ getLocalBusiness.page.contact.email }}</a>
                                </li>
                                <li>
                                    <a><font-awesome-icon class="mr-4" icon="fa-solid fa-phone" />{{ getLocalBusiness.page.contact.phone }}</a></li>
                                <li>
                                    <a :href="'https://wa.me/' + getLocalBusiness.page.contact.whatsapp" target="_blank"><font-awesome-icon class="mr-4" icon="fa-brands fa-whatsapp"/>{{ getLocalBusiness.page.contact.whatsapp }}</a>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>

            </div>
        </section>
        <section class="h-full w-full bg-white px-4 py-10 font-roboto md:px-0 md:py-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-16">
                    <div class="lg:max-h-64">
                        <div class="mx-auto w-full flex-col max-h-80 items-center justify-center md:mx-0 md:items-start">
                            <div class="flex overflow-hidden">
                                <!-- <div id="slider_img_manufacturing" v-for="(item, index) in getLocalBusiness.manufacturing.image_urls" :key="item.id" :style="{ transform: `translateX(${-container.slide_manufacturing * (current.slide_manufacturing - 1)}px)` }" -->
                                <div id="slider_img_manufacturing"
                                    class="group flex w-full min-w-full max-w-full justify-center overflow-hidden scroll-smooth duration-500"
                                    >
                                    <img :src="getLocalBusiness.manufacturing.image_urls[0].image_url" :alt="'Slider Pic ' + 1" class="w-full h-2/5 object-cover object-center transition-all duration-700 group-hover:scale-125 aspect-square" />
                                    <!-- <img :src="item.image_url" :alt="'Slider Pic ' + item.id" class="aspect-video w-full object-cover object-center transition-all duration-700 group-hover:scale-125 md:aspect-[4/3]" /> -->
                                </div>
                            </div>
                            <div class="col flex items-center justify-center gap-x-4 py-4 md:justify-end">
                                <!-- <button v-for="item in getLocalBusiness.manufacturing.image_urls.length" :key="'slider-dot-' + item.id"
                                    class="my-1 h-1.5 w-12 duration-500" :class="{
                                        'bg-gal-grey-dark hover:opacity-70': current.slide_manufacturing != item,
                                        'bg-gal-blue-light': current.slide_manufacturing == item,
                                    }" @click="current.slide_manufacturing = item" /> -->
                            </div>
                        </div>
                        <details class="dropdown dropdown-top">
                            <summary class="btn btn-sm md:btn-md">
                                {{ getLocale == 'EN' ? 'Our Contact' : 'Kontak Kami' }}
                                <font-awesome-icon icon="fa-solid fa-chevron-up" class="ml-3" />
                            </summary>
                            <ul class="menu dropdown-content rounded-box z-[1] w-60 bg-base-100 p-2 shadow">
                                <li>
                                    <a :href="'mailto:' + getLocalBusiness.page.contact.email"><font-awesome-icon class="mr-4" icon="fa-regular fa-envelope"/>{{ getLocalBusiness.page.contact.email }}</a>
                                </li>
                                <li>
                                    <a><font-awesome-icon class="mr-4" icon="fa-solid fa-phone" />{{ getLocalBusiness.page.contact.phone }}</a></li>
                                <li>
                                    <a :href="'https://wa.me/' + getLocalBusiness.page.contact.whatsapp" target="_blank"><font-awesome-icon class="mr-4" icon="fa-brands fa-whatsapp"/>{{ getLocalBusiness.page.contact.whatsapp }}</a>
                                </li>
                            </ul>
                        </details>
                    </div>
                    <div class="lg:max-h-80">
                        <div class="gal-title text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalBusiness.manufacturing.title_en : getLocalBusiness.manufacturing.title }}</div>
                        <div class="gal-description mt-lg-6 mt-4 text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalBusiness.manufacturing.subtitle_en : getLocalBusiness.manufacturing.subtitle }}</div>
                        <div class="mt-2 text-justify md:mt-4">{{ getLocale == 'EN' ? getLocalBusiness.manufacturing.paraghraph_1_en : getLocalBusiness.manufacturing.paraghraph_1 }}</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="h-full w-full bg-white px-4 font-roboto md:px-0 py-0 md:py-10 mb-10">
            <div class="container mx-auto">
                <div class="mt-2 grid grid-cols-1 gap-4 md:mt-4 md:grid-cols-2 md:gap-8 lg:gap-16">
                    <div>
                        <div class="mt-2 text-justify md:mt-4">{{ getLocale == 'EN' ? getLocalBusiness.manufacturing.paraghraph_2_en : getLocalBusiness.manufacturing.paraghraph_2 }}</div>
                        <ul class="ml-8 mt-2 list-disc md:mt-4">
                            <li v-if="getLocale == 'EN'" v-for="item in getLocalBusiness.manufacturing.par_list_2_en">{{ item.name }}</li>
                            <li v-else v-for="item in getLocalBusiness.manufacturing.par_list_2">{{ item.name }}</li>
                        </ul>

                        <div class="mt-2 text-justify md:mt-4">{{ getLocale == 'EN' ? getLocalBusiness.manufacturing.paraghraph_3_en : getLocalBusiness.manufacturing.paraghraph_3 }}</div>
                        <ul class="ml-8 mt-2 list-decimal md:mt-4">
                            <li v-if="getLocale == 'EN'" v-for="item in getLocalBusiness.manufacturing.par_list_3_en">
                                <div class="font-[900] text">{{ item.name }}</div>
                                <div>Product types: {{ item.form }}</div>
                            </li>
                            <li v-else v-for="item in getLocalBusiness.manufacturing.par_list_3">
                                <div class="font-[900] text">{{ item.name }}</div>
                                <div>Bentuk Produk: {{ item.form }}</div>
                            </li>
                        </ul>
                    </div>
                    <div class="h-full overflow-hidden bg-slate-500 bg-cover bg-center aspect-auto" v-bind:style="{ backgroundImage: 'url(' + getLocalBusiness.manufacturing.image_url + ')' }"></div>
                </div>
            </div>
        </section>
        <!-- maps section -->
        <!-- <section class="h-full w-full bg-[url('@/assets/images/business/distribution/background.png')] bg-cover bg-top bg-no-repeat pt-10 font-roboto md:px-0 md:pt-10"> -->
        <section class="h-full w-full bg-[#eaf9ff] bg-cover bg-top bg-no-repeat pt-10 font-roboto md:px-0 md:pt-10">
            <div>
                <div class="container px-8 md:px-0 mx-auto">
                    <h3 class="gal-title-2 text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalBusiness.page.subtitle_en : getLocalBusiness.page.subtitle }}</h3>
                    <p class="text-gal-grey-darker md:mt-2">{{ getLocale == 'EN' ? getLocalBusiness.page.subtitle_2_en : getLocalBusiness.page.subtitle_2 }}</p>
                    <!-- <div class="mt-4 flex gap-2 md:mt-8">
                        <input v-model="active_map" name="map" value="1" type="radio" aria-label="Produk Kesehatan" class="btn btn-sm md:btn-md" />
                        <input v-model="active_map" name="map" value="2" type="radio" aria-label="Produk Obat Resep" class="btn btn-sm md:btn-md" />
                    </div> -->
                </div>
                <Maps :distribution="getLocalBusiness.distribution" :eng="getLocale" class="mt-8" />
                <!-- <img src="@/assets/images/business/distribution/map.png" class="mt-20 w-full" alt=""> -->
            </div>
        </section>
        <section class="h-full w-full bg-gal-grey-light px-4 py-10 font-roboto md:px-0 md:py-20">
            <div class="container mx-auto">
                <div class="flex justify-between">
                    <div class="gal-title-2 font-[700] tracking-wide text-gal-grey-darker">{{ getLocale == 'EN' ? 'Business Partner' : 'Mitra Bisnis' }}</div>
                    <div>
                        <button @click="onMitraData('showMore')" v-if="mitra_container.length === 6" class="btn btn-primary btn-sm">{{ getLocale == 'EN' ? 'Show All' : 'Tampilkan Semua' }}</button>
                        <button @click="onMitraData('showLess')" v-else class="btn btn-primary btn-sm">{{ getLocale == 'EN' ? 'Hide' : 'Sembunyikan' }}</button>
                    </div>
                </div>
                <div class="mt-4 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-4">
                    <div data-aos="fade-up" :data-aos-delay="`${(index*150)+500}`" v-for="(item, index) in mitra_container" :key="index" class="transition-transform duration-300 ease-in-out">
                        <div class="grid aspect-square place-content-center border-2 border-gal-grey-light bg-white p-4">
                            <img :src="item.image_url" :alt="'img' + (index + 1)" class="w-full object-cover object-center">
                        </div>
                    </div>
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
import Maps from '@/views/website/business/Maps.vue';
import router from '@/router/index.js'
import FlyingButton from '@/components/flying_button/FlyingButton.vue';
import { mapState } from 'vuex'
export default {
    components: {
        Navbar, Footer, Maps, FlyingButton
    },
    data() {
        return {
            renderall: false,
            getLocale: 'ID',
            // active_map: '1',
            pixelShift: 500, 
            initialShowingMitra: 6,
            mitra_container: [],
            getApiBusiness:{},
            current: {
                slide_export: 1,
                slide_manufacturing: 1,
            },
            container: {
                slide_export: 0,
                slide_manufacturing: 0,
            },
            getLocalBusinessmitra: [],
            getLocalBusiness: {}
        }
    },
    computed: {
        ...mapState({ 
            business: state => state.business.items
        })
    },

    watch: {
        business (obj) {
            if(obj){
                this.getApiBusiness = obj
            }
        },
    },
    methods: {
        nextExport() {
            if (this.current.slide_export === this.getLocalBusiness.export.image_urls.length) {
                this.current.slide_export = 1
            } else {
                this.current.slide_export++
            }
        },
        slideExportWidth() {
            const ExportData = document.querySelector('#slider_img_export')
            if (ExportData) {
                this.container.slide_export = ExportData.offsetWidth;
            }
        },
        nextManufacturing() {
            if (this.current.slide_manufacturing === this.getLocalBusiness.manufacturing.image_urls.length) {
                this.current.slide_manufacturing = 1
            } else {
                this.current.slide_manufacturing++
            }
        },
        slideManufacturingWidth() {
            const ManufacturingData = document.querySelector('#slider_img_manufacturing')
            if (ManufacturingData) {
                this.container.slide_manufacturing = ManufacturingData.offsetWidth;
            }
        },
        getMitraData() {
            return this.mitra_container = this.getLocalBusinessmitra.slice(0, this.initialShowingMitra)
        },
        onMitraData(action) {
            if (action == 'showMore') {
                this.mitra_container = this.getLocalBusinessmitra
            } else if (action === 'showLess') {
                this.mitra_container = this.getLocalBusinessmitra.slice(0, this.initialShowingMitra)
            }
        },
        getData () {
            if (localStorage.getItem('businessmitrapreview')) {
                this.$store.dispatch('business/getMitra','preview').then(data => {
                    localStorage.setItem('businessmitrapreview', JSON.stringify(data))
                })
                this.getLocalBusinessmitra = JSON.parse(localStorage.getItem('businessmitrapreview'))
            } else {
                this.$store.dispatch('business/getMitra','preview').then(data => {
                    localStorage.setItem('businessmitrapreview', JSON.stringify(data))
                })
            }
            if (localStorage.getItem('businesspreview')) {
                this.$store.dispatch('business/get','preview').then(data => {
                    localStorage.setItem('businesspreview', JSON.stringify(data))
                })
                this.getLocalBusiness = JSON.parse(localStorage.getItem('businesspreview'))
                this.renderall = true
            } else {
                this.$store.dispatch('business/get','preview').then(data => {
                    localStorage.setItem('businesspreview', JSON.stringify(data))
                    router.go(0)
                })
            }
        }
    },
    created() {
        this.getData()
        this.mitra_container = this.getMitraData()
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    },
    mounted() {
        this.slideExportWidth()
        window.addEventListener('resize', this.slideExportWidth)
        setInterval(() => {
            this.nextExport()
        }, 4000)

        this.slideManufacturingWidth()
        window.addEventListener('resize', this.slideManufacturingWidth)
        setInterval(() => {
            this.nextManufacturing()
        }, 5000)

        // this.getMitraData()
    },
    destroyed() {
        window.removeEventListener('resize', this.slideExportWidth)
        window.removeEventListener('resize', this.slideManufacturingWidth)
    },
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