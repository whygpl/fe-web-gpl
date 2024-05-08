<template>
    <div class="static">
        <Navbar active_menu="contact" />
        <section class="min-h-56 relative max-h-full bg-primary font-roboto">
            <div class="left-0 top-0 -z-[1] h-full w-full bg-primary before:absolute before:right-0 before:top-0 before:hidden before:h-full before:bg-gal-blue-lighter before:content-[''] md:before:block md:before:w-3/4"></div>
            <div class="left-0 top-0 z-50 h-full w-full px-10 py-20 md:px-0 md:pt-40">
                <div class="container mx-auto">
                    <h3 class="gal-subtitle relative mt-2 font-[900] uppercase text-gal-blue-light md:mt-4">{{ getLocale == 'EN' ? contact.page_title_en : contact.page_title }}</h3>
                    <div class="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16">
                        <section class="relative bg-white p-8">
                            <h4 class="gal-subtitle font-[800] text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalGeneral.footer.office_name_en : getLocalGeneral.footer.office_name }}</h4>
                            <div class="mt-4 grid grid-cols-1 gap-2 text-gal-grey-darker md:gap-3">
                                <div class="flex flex-nowrap items-center">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                    <p class="gal-items ml-2 font-[500] md:ml-4">{{ getLocalGeneral.footer.office_address }}</p>
                                </div>
                                <div class="flex flex-nowrap items-center">
                                    <font-awesome-icon icon="fa-regular fa-envelope"/>
                                    <p class="gal-items ml-2 font-[500] md:ml-4">{{ getLocalGeneral.footer.email }}</p>
                                </div>
                                <div class="flex flex-nowrap items-center">
                                    <font-awesome-icon icon="fa-solid fa-phone" />
                                    <p class="gal-items ml-2 font-[500] md:ml-4">{{ getLocalGeneral.footer.office_phone }}</p>
                                </div>
                            </div>
                        </section>
                        <section class="relative grid grid-cols-1 gap-y-5 md:gap-y-6">
                            <div class="grid grid-cols-1 gap-y-3 md:gap-y-4">
                                <div class="form-control w-full">
                                    <input v-model="form.name" type="text" :placeholder="getLocale == 'EN' ? 'Name' : 'Nama'" class="input input-bordered w-full focus:input-info focus:outline-0" />
                                </div>
                                <div class="form-control w-full">
                                    <input v-model="form.email" type="email" placeholder="Email" class="input input-bordered w-full focus:input-info invalid:border-pink-500 invalid:text-pink-600 focus:outline-0" />
                                </div>
                                <div class="form-control w-full">
                                    <select v-model="form.subject" class="select select-bordered focus:input-info focus:outline-0">
                                        <option value="" disabled selected>{{ getLocale == 'EN' ? 'Subject' : 'Subjek ...' }}</option>
                                        <option v-for="item in OptionSubject" :value="item.id">{{ getLocale == 'EN' ? item.name_en : item.name }}</option>
                                    </select>
                                </div>
                                <template v-if="form.subject == 3">
                                    <div class="form-control w-full">
                                        <input v-model="form.any" type="text" :placeholder="getLocale == 'EN' ? 'Subject' : 'Subject'" class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                </template>
                                <div class="form-control w-full">
                                    <textarea rows="4" v-model="form.message" placeholder="Message" class="textarea textarea-bordered w-full focus:input-info focus:outline-0" />
                                </div>
                            </div>
                            <div class="flex justify-start md:justify-end">
                                <div class="form-control">
                                <input
                                    v-model="inputValue"
                                    :placeholder="getLocale == 'EN' ? 'submit your captcha' : 'isi captcha'"
                                    class="input input-bordered w-full focus:input-info focus:outline-0"
                                    type="text"
                                />
                                <VueClientRecaptcha
                                    :value="inputValue"
                                    :textColors="[
                                    'blue',
                                    'red',
                                    'purple',
                                    'green',
                                    '#e83e8c',
                                    '#ff5578',
                                    '#53b29f',
                                    '#d64a37',
                                    '#094899',
                                    '#f64141',
                                    'rgb(77,190,255)',
                                    ]"
                                    @getCode="getCaptchaCode"
                                    @isValid="checkValidCaptcha"
                                />
                                </div>
                                <template v-if="data.isValid">
                                    <button @click.prevent="SubmitForm" class="btn md:btn-primary md:btn-wide" :disabled="disabled">
                                        <font-awesome-icon icon="fa-regular fa-paper-plane" /> {{ getLocale == 'EN' ? 'Send' : 'Kirim'}}
                                    </button>
                                </template>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <section class="px-4 py-8 md:px-0 md:py-12">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
                    <div class="flex flex-col justify-between">
                        <div>
                            <h4 class="gal-subtitle font-[800] text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalGeneral.footer.office_name_en : getLocalGeneral.footer.office_name }}</h4>
                            <p class="gal-items">{{ getLocalGeneral.footer.office_address }}</p>
                        </div>
                        <iframe :src="getLocalGeneral.footer.office_map_embed" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mt-4 aspect-square rounded-lg border-2 border-gal-grey-dark"></iframe>
                    </div>
                    <div class="flex flex-col justify-between">
                        <div>
                            <h4 class="gal-subtitle font-[800] text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalGeneral.footer.factory_name_en : getLocalGeneral.footer.factory_name }}</h4>
                            <p class="gal-items">{{ getLocalGeneral.footer.factory_address }}</p>
                        </div>
                        <iframe :src="getLocalGeneral.footer.factory_map_embed" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mt-4 aspect-square rounded-lg border-2 border-gal-grey-dark"></iframe>
                    </div>
                    <div class="flex flex-col justify-between">
                        <div>
                            <h4 class="gal-subtitle font-[800] text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalGeneral.footer.distributor_name_en : getLocalGeneral.footer.distributor_name }}</h4>
                            <p class="gal-items">{{ getLocalGeneral.footer.distributor_address }}</p>
                        </div>
                        <iframe :src="getLocalGeneral.footer.distributor_map_embed" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mt-4 aspect-square rounded-lg border-2 border-gal-grey-dark"></iframe>
                    </div>
                </div>
            </div>
        </section>
        <div v-show="active.success_toast" id="success_toast"
            class="alert alert-success bg-primary fixed right-2 top-2 z-[1002] w-5/6 transform transition-transform duration-500 ease-in-out md:top-4 md:w-2/6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
                <h3 class="font-bold text-white">Berhasil</h3>
                <div class="text-xs text-white">Pesan Anda Berhasil terkirim!</div>
            </div>
        </div>
        <FooterPreview />
        <FlyingButton />
    </div>
</template>
<script>
import Navbar from '@/components/navbar/Navbar.vue';
import FooterPreview from '@/components/footer/FooterPreview.vue';
import FlyingButton from '@/components/flying_button/FlyingButton.vue';

export default {
    components: {
        Navbar, FooterPreview, FlyingButton
    },
    data() {
        return {
            inputValue: null,
            data: {
                captchaCode: null,
                isValid: false,
            },
            disabled:false,
            getLocale: 'ID',
            active: {
                success_toast: false,
            },
            contact: {
                page_title: 'Hubungi Kami',
                page_title_en: 'Contact us',
                office_name: 'Kantor Pusat',
                office_name_en: 'Headquarter',
                address: 'Jl. Adityawarman No. 67 Kebayoran Baru, Kota Jakarta Selatan',
                email: 'info@galenium.com',
                phone: '021-7228601',
            },
            OptionSubject: [
                { id: 1, name: 'Pertanyaan', name_en: 'Question'},
                { id: 2, name: 'Kritik & Saran', name_en: 'Criticism and Suggestions' },
                { id: 3, name: 'Lainnya', name_en: 'Others' },
            ],
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
                any: '',
            },
            office: [
                {
                    id: 1,
                    office_name: 'Kantor Pusat',
                    office_name_en: 'Headquarter',
                    address: 'Jl. Adityawarman No. 67 Kebayoran Baru, Kota Jakarta Selatan 12160',
                    map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.161713116263!2d106.80157437502268!3d-6.242407561125901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16f127e187b%3A0x24dbc86cbf060e1b!2sGalenium%20Pharmasia!5e0!3m2!1sid!2sid!4v1699250750495!5m2!1sid!2sid',
                },
                {
                    id: 2,
                    office_name: 'Pabrik',
                    office_name_en: 'Factory',
                    address: 'Jl. Raya Bogor KM 51.5, Sukaraja, Bogor 16710',
                    map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8506847135964!2d106.82372447502652!3d-6.540532463939518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c151632a612f%3A0xf1f43b78dbf9e2ca!2sPT.GALENIUM%20PHARMASI!5e0!3m2!1sid!2sid!4v1699251414256!5m2!1sid!2sid',
                },
                {
                    id: 3,
                    office_name: 'Distributor Utama',
                    office_name_en: 'Main Distributor',
                    address: 'Jl. Raya Kebayoran Lama No. 21 Kota Jakarta Selatan 12210',
                    map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.0805236001256!2d106.77797816956645!3d-6.220510491175389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12efb152f7f%3A0x80944787586aa9ae!2sGalenium%20Pharmasia%20Laboratories!5e0!3m2!1sid!2sid!4v1699252015755!5m2!1sid!2sid',
                },
            ],
        }
    },
    methods: {
        getCaptchaCode(value) {
            /* you can access captcha code */
            this.data.captchaCode = value;
        },
        checkValidCaptcha(value) {
            /* expected return boolean if your value and captcha code are same return True otherwise return False */
            this.data.isValid = value
        },
        SubmitForm () {
            const formData = this.form 
            this.disabled=true
            this.$store.dispatch('general/formSMTPPostPut', formData)
            .then(res => {
                if (res.data.status == '') {
                    this.ClearForm()
                    this.disabled=false
                    const toast = document.querySelector("#success_toast");
                    if (!this.active.success_toast) {
                        this.active.success_toast = true;
                        // tunggui 3 detik
                        setTimeout(() => {
                            // ka kanan 100% pas dah waktunya
                            toast.style.transform = "translateX(100%)";
                            setTimeout(() => {
                                // balin ke titik awal
                                toast.style.transform = "translateX(0)";
                                this.active.success_toast = false;
                            }, 500);
                        }, 3000);
                    } else if (this.active.success_toast) {
                        this.active.success_toast = false;
                    }
                }
            }, 
            err => {
                // this.notification('Failed :','You have unsuccessful','bg-red-500','white','50')
            })
        },
        ClearForm () {
            this.form.name = ''
            this.form.email = ''
            this.form.subject = ''
            this.form.any = ''
            this.form.message = ''
        },
        getData () {
            if (localStorage.getItem('generalpreview')) {
                this.getLocalGeneral = JSON.parse(localStorage.getItem('generalpreview'))
                this.$store.dispatch('general/get','preview').then(data => {
                    localStorage.setItem('generalpreview', JSON.stringify(data))
                    this.getLocalGeneral = JSON.parse(localStorage.getItem('generalpreview'))
                })
            } else {
                this.$store.dispatch('general/get','preview').then(data => {
                    localStorage.setItem('generalpreview', JSON.stringify(data))
                    this.getLocalGeneral = JSON.parse(localStorage.getItem('generalpreview'))
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
<style>
    @import url("/node_modules/vue-client-recaptcha/dist/style.css");
    .sample-captcha {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .sample-captcha .data-box .input {
        padding: 10px;
        border: 1px solid #f1f1f1;
        border-radius: 4px;
        width: 100%;
    }
    .sample-captcha .data-box .input:focus {
        background: #f0f0f00d;
        outline: none;
        box-shadow: inset 0 -2px 0 #0077ff;
    }
    .sample-captcha .data-box .data {
        width: 100%;
        margin-top: 10px;
        padding: 20px 0 20px 20px;
        background-color: #ebebeb;
        border-radius: 4px;
    }
    .sample-captcha .captcha-box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px auto;
    }
</style>