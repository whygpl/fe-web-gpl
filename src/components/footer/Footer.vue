<template>
    <footer>
        <section class="bg-primary px-4 py-8 lg:py-16">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-10 text-white lg:grid-cols-4 lg:gap-10">
                    <div class="lg:ml-10 md:ml-10">
                        <img :src="getLocalGeneral?.icon?.footer" alt="footer-logo" class="w-1/3 lg:w-44">
                    </div>
                    <div class="font-roboto text-sm tracking-wide md:text-base lg:leading-7 lg:tracking-wider">
                        <div class="font-black text-gal-blue-light"></div>
                        
                        <div class="ql-editor" style="padding: 0; height:22px">
                                <div  class="font-black text-gal-blue-light" v-html="getLocale == 'EN' ? getLocalGeneral?.footer?.office_name_en : getLocalGeneral?.footer?.office_name" />
                        </div>

                        <div class="mt-2 lg:h-16 font-light text-white lg:mt-4">
                            <div class="ql-editor" style="padding: 0; ">
                                <div  class="" v-html="getLocale == 'EN' ? getLocalGeneral?.footer?.office_address_en : getLocalGeneral?.footer?.office_address" />
                            </div>
                        </div>
                        <div class="mt-2 font-light text-white lg:mt-4">
                            <div>
                                <div class="ql-editor" style="padding: 0; ">
                                    <div  class="" v-html="getLocalGeneral?.footer?.office_phone ? 'Telp : ' + getLocalGeneral?.footer?.office_phone.replace(/<\/?p>/g, '') : 'Telp : -' " />
                                </div>
                                <div></div>
                                <!-- <div>Fax: {{ getLocalGeneral?.footer?.office_fax ? getLocalGeneral?.footer?.office_fax : '-' }}</div> -->
                            </div>
                        </div>
                    </div>
                    <div class="font-roboto text-sm tracking-wide md:text-base lg:leading-7 lg:tracking-wider">
                        
                        <div class="ql-editor" style="padding: 0; height:22px">
                                <div  class="font-black text-gal-blue-light" v-html="getLocale == 'EN' ? getLocalGeneral?.footer?.factory_name_en : getLocalGeneral?.footer?.factory_name" />
                        </div>
                        <div class="mt-2  lg:h-16 font-light text-white lg:mt-4">
                            <div class="ql-editor" style="padding: 0; ">
                                <div  class="" v-html="getLocale == 'EN' ? getLocalGeneral?.footer?.factory_address_en : getLocalGeneral?.footer?.factory_address" />
                            </div>
                        </div>
                        <div class="mt-2 font-light text-white lg:mt-4">
                            <div>
                                <div class="ql-editor" style="padding: 0; ">
                                    <div  class="" v-html="getLocalGeneral?.footer?.factory_phone ? 'Telp : ' + getLocalGeneral?.footer?.factory_phone.replace(/<\/?p>/g, '') : 'Telp : -' " />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="font-roboto text-sm tracking-wide md:text-base lg:leading-7 lg:tracking-wider">
                        
                        <div class="ql-editor" style="padding: 0; height:22px">
                                <div  class="font-black text-gal-blue-light" v-html="getLocale == 'EN' ? getLocalGeneral?.footer?.distributor_name_en : getLocalGeneral?.footer?.distributor_name" />
                        </div>
                        <div class="mt-2 md:h-24 lg:h-16 font-light text-white lg:mt-4">
                            <div class="ql-editor" style="padding: 0; ">
                                <div  class="" v-html="getLocale == 'EN' ? getLocalGeneral?.footer?.distributor_address_en : getLocalGeneral?.footer?.distributor_address" />
                            </div>
                        </div>
                        <div class="mt-2 font-light text-white lg:mt-4">
                            <div>
                                <div class="ql-editor" style="padding: 0; ">
                                    <div  class="" v-html="getLocalGeneral?.footer?.distributor_phone ? 'Telp : ' + getLocalGeneral?.footer?.distributor_phone.replace(/<\/?p>/g, '') : 'Telp : -' " />
                                </div>
                                <!-- <div>Fax: {{ getLocalGeneral?.footer?.distributor_fax ? getLocalGeneral?.footer?.distributor_fax : '-' }}</div> -->
                            </div>
                        </div>
                    </div>
                    <!-- <div v-for="(item, index) in FooterData" :key="index" class="font-roboto text-sm tracking-wide md:text-base lg:leading-7 lg:tracking-wider">
                        <div class="font-black text-gal-blue-light">{{ getLocale == 'EN' ? item.office_name_en : item.office_name }}</div>
                        <div class="mt-2 font-light text-white lg:mt-4">
                            <div>{{ item.address }}</div>
                            <div>
                                <div>Telp: {{ item.phone }}</div>
                                <div>Fax: {{ item.fax }}</div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
        <section class="bg-gal-blue-dark py-5">
            <div class="container mx-auto flex justify-between px-2 md:px-0">
                <div class="devide-white flex flex-col gap-y-4 divide-x text-center font-roboto text-sm text-white opacity-40 md:flex-row md:gap-y-0 md:text-base">
                    <div class="px-4 text-xs md:px-4 md:text-sm">©2024 PT Galenium Pharmasia. All rights reserved.</div>
                    <div class="devide-white flex divide-x">
                        <div class="px-2 text-xs md:px-4 md:text-sm">
                            <router-link :to="{ name: 'PrivacyPoliceView'}">{{ getLocale == 'EN' ? link.privacy_en : link.privacy }}</router-link>
                        </div>
                        <div class="px-2 text-xs md:px-4 md:text-sm">
                            <router-link :to="{ name: 'TermsConditionView'}">{{ getLocale == 'EN' ? link.terms_en : link.terms }}</router-link>
                        </div>
                        <div class="px-2 text-xs md:px-4 md:text-sm">
                            <router-link :to="{ name: 'FarmakovigilansView'}">{{ getLocale == 'EN' ? link.farmako_en : link.farmako }}</router-link>
                        </div>
                        <div class="px-2 text-xs md:px-4 md:text-sm">
                            <router-link :to="{ name: 'FAQView'}">{{ getLocale == 'EN' ? link.faq_en : link.faq }}</router-link>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block gap">
                <!-- <div class="hidden md:block"> -->
                    <a :href="getLocalGeneral?.footer?.instagram_url" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-instagram" size="xl" class="mr-1" style="color:white" />
                    </a>
                    <a :href="getLocalGeneral?.footer?.youtube_url" target="_blank" class="ml-1">
                        <font-awesome-icon icon="fa-brands fa-youtube" size="xl" style="color:white" />
                    </a>
                </div>
            </div>
            <div class="lg:hidden container mx-auto flex justify-center sm:pt-5 mt-4 md:px-0">
                <div class="lg:hidden">
                    <div class="text-center object-center">
                    <!-- <div class="hidden md:block"> -->
                        <a :href="getLocalGeneral?.footer?.instagram_url" class="mr-1" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-instagram" size="xl" style="color:white" />
                        </a>
                        <a :href="getLocalGeneral?.footer?.youtube_url" class="ml-1" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-youtube" size="xl" style="color:white" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Footer',
    data() {
        return {
            getLocale: 'ID',
            getLocalGeneral: {},
            // FooterData: [
            //     {
            //         office_name: 'Kantor Pusat',
            //         office_name_en: 'Headquarter',
            //         address: 'Jl. Adityawarman No. 67 Kebayoran Baru, Kota Jakarta Selatan',
            //         phone: '021-7228601',
            //         fax: '',
            //     },
            //     {
            //         office_name: 'Pabrik',
            //         office_name_en: 'Factory',
            //         address: 'Jl. Raya Bogor KM 51.5 Sukaraja, Bogor',
            //         phone: '0251 - 8662506 / 8652161',
            //         fax: '0251 - 8652160',
            //     },
            //     {
            //         office_name: 'Distributor Utama',
            //         office_name_en: 'Main Distributor',
            //         address: 'Jl. Raya Kebayoran Lama No. 21 Kota Jakarta Selatan 12210',
            //         phone: '021 - 5323308 / 53678180',
            //         fax: '021 - 5360162',
            //     },
            // ],
            link: {
                privacy: 'Kebijakan Privasi',
                privacy_en: 'Privacy Policy',
                terms: 'Syarat dan Ketentuan',
                terms_en: 'Terms and Conditions',
                farmako: 'Farmakovigilans',
                farmako_en: 'Farmakovigilans',
                faq: 'FAQ',
                faq_en: 'FAQ',
            },
        }
    },
    computed: {
        ...mapState({ 
            general: state => state.general.items
        })
    },
    methods: {
        getData () {
            if (localStorage.getItem('generallive')) {
                this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
                this.$store.dispatch('general/get','live').then(data => {
                    localStorage.setItem('generallive', JSON.stringify(data))
                    this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
                })
            } else {
                this.$store.dispatch('general/get','live').then(data => {
                    localStorage.setItem('generallive', JSON.stringify(data))
                    this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
                })
            }
        }
    },
    mounted() {
        this.getData()
        window.addEventListener('scroll', this.onScroll)
    },
    created() {
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    },
}
</script>