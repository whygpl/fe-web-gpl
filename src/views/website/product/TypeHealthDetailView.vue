<template>
    <div class="static">
        <Navbar active_menu="product" />
        <section class="w-full py-20 md:py-32">
            <div class="product-type-container p-4 md:p-0">
                <div class="relative flex self-center">
                    <div class="relative-blockquote before:bg-[#34b6ff]"></div>
                    <div class="w-full">
                        <div class="font-roboto text-xl font-[900] text-gal-blue-light md:text-3xl">
                            <div class="ql-editor" style="padding: 0;">
                                <div
                                    v-html="getLocale == 'EN' ? ProductDetail.category.type_title_en : ProductDetail.category.type_title">
                                </div>
                            </div>
                        </div>
                        <!-- breadcrumbs -->
                        <div class="breadcrumbs mt-4 font-roboto text-sm">
                            <ul>
                                <li v-for="(item, index) in breadcrumbs" :key="index">
                                    <router-link :to="item.link" class="flex items-center gap-2"
                                        :class="(index + 1) == breadcrumbs.length ? 'text-primary font-[700]' : ''">
                                        <!-- {{ getLocale == 'EN' ? item.name_en : item.name }} -->
                                        <div class="ql-editor" style="padding: 0;">
                                            <div v-html="getLocale == 'EN' ? item.name_en : item.name">
                                            </div>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <!-- product detail -->
                        <div class="mt-4 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-4 lg:gap-10">

                            <!-- product image -->
                            <div class="">
                                <div
                                    class="group relative grid aspect-square w-full place-items-center bg-white overflow-auto touch-pan-y">
                                    <!-- <div class="cursor-pointer h-full w-full object-cover object-center"></div> -->
                                    <template
                                        v-if="checkFileExtension(image_url_detail[active_preview].image_url) == 'image'">
                                        <div id="zoompicture"
                                            :style="{ backgroundImage: `url(${image_url_detail[active_preview].image_url})` }"
                                            class="zoompicture cursor-pointer h-full w-full object-cover object-center">
                                            <img :src="image_url_detail[active_preview].image_url" alt=""
                                                class="zoompicture h-full w-full object-cover object-center">
                                        </div>
                                    </template>

                                    <template v-else>
                                        <div id="zoompicture" style="display:none;"></div>
                                        <template
                                            v-if="checkFileExtension(image_url_detail[active_preview].image_url) == 'video'">
                                            <video-player for="expand_modal"
                                                class="h-full w-full object-cover object-center"
                                                :src="image_url_detail[active_preview].image_url" controls :loop="true"
                                                :volume="0.6" />
                                        </template>
                                        <!-- <video class="aspect-video w-full" ref="video">
                                            <source src="image_url_detail[active_preview].image_url" type="video/mp4">
                                        </video> -->
                                    </template>
                                    <!-- <img :src="image_url_detail[active_preview].image_url" alt="" class="hover:scale-150 cursor-pointer h-full w-full object-cover object-center"> -->

                                    <!-- modal trigger button -->
                                    <label for="expand_modal"
                                        class="btn btn-circle btn-sm absolute right-2 top-2 hidden place-items-center group-hover:grid">
                                        <font-awesome-icon icon="fa-solid fa-up-right-and-down-left-from-center" />
                                    </label>
                                    <input type="checkbox" id="expand_modal" class="modal-toggle" />
                                    <!-- modal detail image -->
                                    <div class="modal modal-bottom md:modal-middle">
                                        <!-- TABLET:max-w-5xl -->
                                        <div class="modal-box p-0 py-6 overflow-hidde md:w-[80%]">
                                            <div class="flex items-start justify-between px-6 ">
                                                <h3 class="text-lg font-bold">{{ ProductDetail.name }}</h3>
                                                <label for="expand_modal"
                                                    class="btn btn-circle btn-ghost btn-sm font-[900] leading-[100%]">✕</label>
                                            </div>
                                            <div class="divider"></div>
                                            <div class="w-full h-64 lg:h-0"></div>
                                            <div class=" gap-6 px-6 md:grid-cols-3">
                                                <div class="col-span-2 grid grid-cols-5 place-items-center">
                                                    <div>
                                                        <button @click="PrevProduct" class="btn btn-circle btn-sm">
                                                            <font-awesome-icon icon="fa-solid fa-chevron-left" />
                                                        </button>
                                                    </div>
                                                    <div class="col-span-3">
                                                        <!-- <div id="zoompicturemodal" :style="{backgroundImage: `url(${image_url_detail[active_preview].image_url})`}" class="zoompicturemodal justify-center cursor-pointer "> -->

                                                        <template
                                                            v-if="checkFileExtension(image_url_detail[active_preview].image_url) == 'image'">
                                                            <img :src="image_url_detail[active_preview].image_url"
                                                                alt="" class="zoompicturemodal place-items-center ">
                                                            <!-- </div> -->
                                                            <!-- <img :src="image_url_detail[active_preview].image_url" alt="" class="h-full w-full object-cover object-center"> -->
                                                        </template>

                                                        <template
                                                            v-if="checkFileExtension(image_url_detail[active_preview].image_url) == 'video'">
                                                            <!-- <div style="width:200px;"> -->
                                                            <video-player :options="playerOptions"
                                                                :src="image_url_detail[active_preview].image_url"
                                                                controls :loop="true" :volume="0.6" />
                                                            <!-- </div> -->
                                                        </template>
                                                    </div>
                                                    <div>
                                                        <button @click="NextProduct" class="btn btn-circle btn-sm">
                                                            <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <!-- <div class="max-h-[650px] min-h-[300px] overflow-y-scroll bg-teal-50"> -->
                                                <div class="hidden">
                                                    <h3 class="gal-items font-[700]">
                                                        {{ getLocale == 'EN' ? 'Product Picture' : 'Gambar Barang' }}
                                                    </h3>
                                                    <div class="mt-4 grid grid-cols-4 gap-4 md:grid-cols-3">
                                                        <div @click="getSelectedImage(index)"
                                                            v-for="(photo, index) in image_url_detail"
                                                            class="aspect-square w-full cursor-pointer rounded border-2 border-gal-blue-lighter bg-white p-1"
                                                            :class="{ 'border-2 border-gal-blue-light': index == active_preview }">
                                                            <img :src="photo.image_url" :alt="'image-' + (index + 1)"
                                                                class="h-full w-full object-cover object-center">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-full h-64 lg:h-0"></div>
                                        </div>
                                        <label class="modal-backdrop" for="expand_modal">Close</label>
                                    </div>
                                </div>
                                <div class="relative mt-2 grid md:mt-4">
                                    <div id="image_list"
                                        class="flex w-full gap-2 overflow-hidden scroll-smooth md:gap-4">
                                        <div @click="getSelectedImage(index)" v-for="(photo, index) in image_url_detail"
                                            class="aspect-square w-1/4 flex-none cursor-pointer rounded border-2 border-gal-blue-lighter bg-white p-1"
                                            :class="{ 'border-2 border-gal-blue-light': index == active_preview }">

                                            <template v-if="checkFileExtension(photo.image_url) == 'image'">
                                                <img :src="photo.image_url" :alt="'image-' + (index + 1)"
                                                    class="h-full w-full object-cover object-center">
                                            </template>

                                            <template v-if="checkFileExtension(photo.image_url) == 'video'">
                                                <video class="w-full aspect-video" :src="photo.image_url"></video>
                                                <!-- <video-player class="w-full aspect-video" :src="photo.image_url"
                                                    controls :loop="true" :volume="0.6" /> -->
                                            </template>
                                        </div>
                                        <!-- :style="{ transform: `translateX(${-container.slide_hero * (current.slide_hero - 1)}px)`}" -->
                                    </div>
                                    <button @click="MoveLeft" class="btn btn-sm absolute left-0 place-self-center"
                                        :class="scroll_position != 0 ? 'block' : 'hidden'">
                                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                                    </button>
                                    <button @click="MoveRight" class="btn btn-sm absolute right-0 place-self-center"
                                        :class="image_url_detail.length > 3 ? 'block' : 'hidden'">
                                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                                    </button>
                                </div>
                            </div>

                            <div class="mt-4 font-roboto md:col-span-3 md:mt-0">
                                <div>

                                    <div class="flex items-center">
                                        <div class="relative-blockquote before:bg-[#34b6ff]"></div>
                                        <div class="text-base font-[900] text-gal-blue-light md:text-lg">

                                            <template v-if="ProductDetail.category.type_id == 1">{{ getLocale == 'EN' ?
                                        ProductDetail.group.title_en : ProductDetail.group.title
                                                }}</template>

                                            <template v-else>{{ getLocale == 'EN' ?
                                        ProductDetail.category.title_en : ProductDetail.category.title
                                                }}</template>
                                        </div>
                                    </div>
                                    <div class="gal-title text-4xl mt-2 md:mt-4">{{ getLocale == 'EN' ?
                                        ProductDetail.name_en : ProductDetail.name }}</div>
                                    <div class="flex">
                                        &nbsp;
                                        <!-- <p v-for="(weight, index) in ProductDetail.product_netto" class="mr-1 text-xs font-[600] tracking-wider text-gal-blue-light md:text-sm">{{ weight }} <span v-if="(index + 1) != ProductDetail.product_netto.length">dan</span> </p> -->
                                    </div>
                                    <hr>
                                    <div class="mt-4 font-roboto">
                                        <div class="font-[800] text-gal-grey-darker">{{ getLocale == 'EN' ?
                                        'Description' :
                                        'Deskripsi' }}</div>
                                        <div class="gal-items mt-1">{{ getLocale == 'EN' ? ProductDetail.description_en
                                        :
                                        ProductDetail.description }}</div>
                                    </div>
                                    <div class="mt-4 font-roboto">
                                        <div class="font-[800] text-gal-grey-darker">{{ getLocale == 'EN' ? 'How to use'
                                        :
                                        'Cara Pakai' }}</div>
                                        <ul class="ml-8 mt-1 list-disc">
                                            <li v-for="list in ProductDetail.htu" class="gal-items">{{ getLocale == 'EN'
                                        ?
                                        list.name_en : list.name }}</li>
                                        </ul>
                                    </div>
                                    <div class="mt-4 font-roboto">
                                        <div class="font-[800] text-gal-grey-darker">{{ getLocale == 'EN' ?
                                        'Compotition' :
                                        'Komposisi' }}</div>
                                        <div class="gal-items mt-1">{{ getLocale == 'EN' ? ProductDetail.compotition_en
                                        :
                                        ProductDetail.compotition }}</div>
                                    </div>
                                    <div class="mt-4 font-roboto">
                                        <div class="font-[800] text-gal-grey-darker">{{ getLocale == 'EN' ? 'Attention'
                                        :
                                        'Perhatian' }}</div>
                                        <div class="gal-items mt-1">{{ getLocale == 'EN' ? ProductDetail.attention_en :
                                        ProductDetail.attention }}</div>
                                    </div>
                                </div>
                                <div class="mt-6 flex flex-wrap gap-2 md:mt-10 md:gap-5">

                                    <template v-if="ProductDetail.microsite">
                                        <a :href="ProductDetail.micrositeurl" target="_blank"
                                            class="btn-outline-secondary btn">
                                            <span>{{ getLocale == 'EN' ? 'Visit Microsite' : 'Kunjungi Microsite'
                                                }}</span>
                                            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                        </a>
                                    </template>

                                    <template v-if="ProductDetail.gstore">
                                        <a :href="ProductDetail.gstoreurl" target="_blank"
                                            class="btn-outline-secondary btn">
                                            <span>{{ getLocale == 'EN' ? 'Get in G-Store' : 'Dapatkan di G-Store'
                                                }}</span>
                                            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                        </a>
                                    </template>
                                    <template v-if="ProductDetail.chat">
                                        <a :href="ProductDetail.chatvalue" target="_blank"
                                            class="btn-outline-secondary btn">
                                            <font-awesome-icon icon="fa-brands fa-whatsapp" />
                                            <span>{{ getLocale == 'EN' ? 'Chat Us' : 'Chat Kami' }}</span>
                                        </a>
                                    </template>

                                    <template v-if="ProductDetail.email">
                                        <a :href="`mailto:${ProductDetail.emailvalue}`" target="_blank"
                                            class="btn-outline-secondary btn">
                                            <font-awesome-icon icon="fa-regular fa-envelope" />
                                            <span>{{ getLocale == 'EN' ? 'Mail' : 'Email' }}</span>
                                        </a>
                                    </template>
                                </div>
                            </div>
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
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import FlyingButton from '@/components/flying_button/FlyingButton.vue'

export default {
    components: {
        Navbar, Footer, FlyingButton
    },
    data() {
        return {
            getLocalGeneral: [],
            mouseX: 0,
            mouseY: 0,
            active_preview: 0,
            scroll_position: 0,
            playerOptions: {
                // videojs options
                width: '230px',
                height: '500px',
            },
            breadcrumbs: [
                { name: '', link: '/product' },
                { name: '', link: '/' },
                { name: '', link: '/' },
                { name: '', link: '/product' },
            ],
            image_url_detail: [
                { id: '1', image_url: require('@/assets/images/no-image.jpg') },
            ],
            ProductDetail: {
                type: '',
                product_name: '',
                product_item_name: '',
                product_netto: [''],
                category: {},
                group: {},
                description: '',
                how_to_use: [
                    ''
                ],
                composition: '',
                image_urls: [
                    { id: '1', image_url: require('@/assets/images/no-image.jpg') },
                ]
            }
        }
    },
    methods: {
        getSelectedImage(index) {
            this.active_preview = index
        },
        NextProduct() {
            if (this.active_preview < this.ProductDetail.image_url_detail.length - 1) {
                this.active_preview++
            } else {
                this.active_preview = 0
            }
        },
        PrevProduct() {
            if (this.active_preview > 0) {
                this.active_preview--
            } else {
                this.active_preview = this.ProductDetail.image_url_detail.length - 1
            }
        },
        MoveRight() {
            const container = document.querySelector('#image_list');
            container.scrollLeft += 125
            this.scroll_position += 125
        },
        MoveLeft() {
            const container = document.querySelector('#image_list');
            container.scrollLeft -= 125
            this.scroll_position -= 125
        },
        getData(id) {
            this.$store.dispatch('product/getById', { id: id, status: 'live' }).then(data => {
                this.ProductDetail = data
                if (data.image_url_detail) {
                    if (data.image_url_detail.length > 0) {
                        this.image_url_detail = data.image_url_detail
                    }
                }

                // breadcrumbs: [
                //     { name: 'Produk Kesehatan', link: '/product/type1' },
                //     { name: 'Perawatan Tubuh', link: '/' },
                //     { name: 'Gatal & Biang Keringat', link: '/' },
                //     { name: 'Caladine', link: '/product/type1/id' },
                // ],
                if (data.category.product_type_id == 1) {
                    this.breadcrumbs = [
                        { name_en: data.category.type_title_en, name: data.category.type_title, link: '/product/healthcare' },
                        { name_en: data.category.title_en, name: data.category.title, link: '/product/healthcare' },
                        { name_en: data.group.title_en, name: data.group.title, link: '/product/healthcare' },
                        { name_en: data.name_en, name: data.name, link: `/product/detail/${this.$route.params.id}` },
                    ]
                } else {
                    this.breadcrumbs = [
                        { name_en: data.category.type_title_en, name: data.category.type_title, link: '/product/ethical' },
                        { name_en: data.category.title_en, name: data.category.title, link: '/product/ethical' },
                        { name_en: data.name_en, name: data.name, link: `/product/detail/${this.$route.params.id}` },
                    ]
                }
                if (localStorage.getItem('generallive')) {
                    this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
                    this.$store.dispatch('general/get', 'live').then(data => {
                        localStorage.setItem('generallive', JSON.stringify(data))
                        this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
                    })
                } else {
                    this.$store.dispatch('general/get', 'live').then(data => {
                        localStorage.setItem('generallive', JSON.stringify(data))
                        this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
                    })
                }
            })
        },
        checkFileExtension(fileName) {
            const imageExtension = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
            const videoExtension = ['mp4', 'webm', 'ogg'];

            const extension = fileName.split('.').pop().toLowerCase();

            if (imageExtension.includes(extension)) {
                return "image";
            } else if (videoExtension.includes(extension)) {
                return "video";
            } else {
                return;
            }
        },
        mousemove() {
            const el = document.querySelector("#zoompicture")
            el.addEventListener("mousemove", (e) => {
                el.style.backgroundPositionX = -e.offsetX + "px"
                el.style.backgroundPositionY = -e.offsetY + "px"
                // console.log(-e.offsetX + "px")
                // console.log(-e.offsetY + "px")
            })
            // const elmodal = document.querySelector("#zoompicturemodal")
            // elmodal.addEventListener("mousemove", (e) => {
            //     elmodal.style.backgroundPositionX = -e.offsetX + "px"
            //     elmodal.style.backgroundPositionY = -e.offsetY + "px"
            //     // console.log(-e.offsetX + "px")
            //     // console.log(-e.offsetY + "px")
            // })
        }
    },
    beforeUnmount() {
        window.removeEventListener('mousemove', this.mousemove);
    },
    mounted() {
        window.addEventListener('mousemove', this.mousemove)
        if (this.$route.params.id) {
            this.getData(this.$route.params.id)
        }
    },
    created() {
        document.addEventListener("mousemove", (event) => {
        })
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    }
}
</script>

<style>
.zoompicture {
    background-position: 50% 50%;
    background-size: 200%;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    /* cursor: zoom-in; */
}

.zoompicture img:hover {
    opacity: 0;
}

.zoompicture img {
    transition: opacity .5s;
    display: block;
}

.zoompicturemodal {
    background-position: 50% 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    /* position: relative; */
    /* overflow: hidden; */
    /* cursor: zoom-in; */
}

.zoompicturemodal img:hover {
    opacity: 0;
}

.zoompicturemodal img {
    width: 100%;
    transition: opacity .5s;
    display: block;
}

.modal:not(dialog:not(.modal-open)),
.modal::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
    animation: modal-pop 0.2s ease-out;
}
</style>