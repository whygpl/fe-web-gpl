<template>
    <div class="static">
        <Navbar active_menu="career" />
        <section
            class="relative z-10 bg-gal-grey-light px-4 pb-10 pt-20 font-roboto before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-72 before:w-full before:bg-primary before:content-[''] md:px-0 md:pb-20 md:pt-32 md:before:h-80 lg:before:h-96">
            <div class="product-type-container one-col-min">
                <div class="gal-title-2">{{ getLocale == 'EN' ? 'Career' : 'Karier' }}</div>
                <div class="gal-title-2 mt-4 font-[700] tracking-wide text-white md:mt-8">
                    <div class="ql-editor" style="padding: 0;">
                        <div v-html="getLocale == 'EN' ? CareerDetail.title_en : CareerDetail.title" />
                    </div>
                </div>
                <div class="mt-2 rounded bg-white px-4 py-6 md:mt-6 md:rounded-lg md:p-20">
                    <div class="grid grid-cols-1 gap-y-8 md:gap-y-16">
                        <section>
                            <h3 class="gal-subtitle font-[900] uppercase text-primary">
                                {{ getLocale == 'EN' ? 'Personal Information' : 'Informasi Personal' }}
                            </h3>
                            
                            <div class="grid grid-cols-1 gap-y-2 md:gap-y-4">
                                <p v-if="errors.length" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
                                        <b>Please correct the following error(s):</b>
                                        <ul>
                                        <li v-for="error in errors">{{ error }}</li>
                                        </ul>
                                    </p>
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">                                    
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">{{ getLocale == 'EN' ?
                    'Fullname' : 'Nama' }}<span class="text-rose-500">*</span></label>
                                        <input v-model="form.name" type="text"
                                            :placeholder="getLocale == 'EN' ? 'Fullname' : 'Nama'"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">Gender<span
                                                class="text-rose-500">*</span></label>
                                        <select v-model="form.gender"
                                            class="select select-bordered focus:input-info focus:outline-0">
                                            <option disabled selected>{{ getLocale == 'EN' ? 'Select' : 'Pilih' }}
                                                Gender</option>
                                            <option v-for="item in OptionGender" :value="item.id">{{ item.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">{{ getLocale == 'EN' ?
                    'Place of birth' : 'Tempat Lahir' }}<span
                                                class="text-rose-500">*</span></label>
                                        <input v-model="form.birth_place" type="text" placeholder="Tempat Lahir"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">
                                            {{ getLocale == 'EN' ? 'Date of birth' : 'Tanggal Lahir' }}
                                            <span class="text-rose-500">*</span>
                                        </label>
                                        <input v-model="form.birth_date" type="date"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">{{ getLocale == 'EN' ?
                    'Religion' : 'Agama' }}<span class="text-rose-500">*</span></label>
                                        <select v-model="form.religion"
                                            class="select select-bordered focus:input-info focus:outline-0">
                                            <option disabled selected>
                                                {{ getLocale == 'EN' ? 'Select Religion' : 'Pilih Agama' }}
                                            </option>
                                            <option v-for="item in OptionReligion" :value="item.id">{{ item.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">{{ getLocale == 'EN' ?
                    'Marital Status' : 'Status Perkawinan' }}<span
                                                class="text-rose-500">*</span></label>
                                        <select v-model="form.married"
                                            class="select select-bordered focus:input-info focus:outline-0">
                                            <option disabled selected>{{ getLocale == 'EN' ? 'Select Marital Status' :
                    'Pilih Perkawinan' }}</option>
                                            <option v-for="item in OptionMarried" :value="item.id">{{ item.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">{{ getLocale == 'EN' ?
                    'Highest Education' : 'Pendidikan Terakhir' }}<span
                                                class="text-rose-500">*</span></label>
                                        <input v-model="form.education" type="text"
                                            :placeholder="getLocale == 'EN' ? 'Education' : 'Pendidikan'"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 class="gal-subtitle font-[900] uppercase text-primary">{{ getLocale == 'EN' ? 'Address'
                    : 'Alamat' }}</h3>
                            <div class="grid grid-cols-1 gap-y-2 md:gap-y-4">
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">
                                            {{ getLocale == 'EN' ? 'Address' : 'Alamat' }}
                                            <span class="text-rose-500">*</span>
                                        </label>
                                        <input v-model="form.address" type="text"
                                            :placeholder="getLocale == 'EN' ? 'Address' : 'Nama Jalan'"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <v-select v-model="form.province" :options="OptionsProvince"
                                            :reduce="OptionsProvince => OptionsProvince.value" label="title"
                                            :placeholder="getLocale == 'EN' ? '-- Province  --' : '-- Provinsi --'"></v-select>
                                    </div>
                                    <div class="form-control w-full">
                                        <v-select v-model="form.regency" :options="OptionsRegency"
                                            :reduce="OptionsRegency => OptionsRegency.value" label="title"
                                            :placeholder="getLocale == 'EN' ? '-- Regency  --' : '-- Kota/Kabupaten --'"></v-select>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <v-select v-model="form.district" :options="OptionsDistrict"
                                            :reduce="OptionsDistrict => OptionsDistrict.value" label="title"
                                            :placeholder="getLocale == 'EN' ? '-- District  --' : '-- Kecamatan --'"></v-select>
                                    </div>
                                    <div class="form-control w-full">
                                        <v-select v-model="form.village" :options="OptionsVillage"
                                            :reduce="OptionsVillage => OptionsVillage.value" label="title"
                                            :placeholder="getLocale == 'EN' ? '-- Village  --' : '-- Kelurahan --'"></v-select>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 class="gal-subtitle font-[900] uppercase text-primary">
                                {{ getLocale == 'EN' ? 'Contact Information' : 'Informasi Kontak' }}
                            </h3>
                            <div class="grid grid-cols-1 gap-y-2 md:gap-y-4">
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">
                                            Email
                                            <span class="text-rose-500">*</span>
                                        </label>
                                        <input v-model="form.email" type="email" placeholder="Email"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" required /> <br />
                                        <span v-if="email_validate" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{{email_validate}}</span>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">
                                            Mobile 1
                                            <span class="text-rose-500">*</span>
                                        </label>
                                        <input v-model="form.mobile" type="text" placeholder="Mobile 1"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                    <div class="form-control w-full">
                                        <label class="label label-text">Mobile 2 (Optional)</label>
                                        <input v-model="form.mobile_sec" type="text" placeholder="Mobile 1"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 class="gal-subtitle font-[900] uppercase text-primary">{{ getLocale == 'EN' ?
                    'Experience' : 'Pengalaman' }}</h3>
                            <div class="grid grid-cols-1 gap-y-2 md:gap-y-4">
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">
                                    <!-- <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">
                                            {{ getLocale == 'EN' ? 'Experience' : 'Pengalaman' }}
                                            <span class="text-rose-500">*</span>
                                        </label>
                                        <input v-model="form.experience" type="text" :placeholder="getLocale == 'EN' ? 'Experience' : 'Pengalaman'" class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div> -->
                                    <div class="form-control w-full">
                                        <label class="label label-text">
                                            {{ getLocale == 'EN' ? 'Last Company' : 'Perusahaan Terakhir' }}
                                        </label>
                                        <input v-model="form.last_company" type="text"
                                            :placeholder="getLocale == 'EN' ? 'Last Company' : 'Nama Perusahaan'"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                    <div class="form-control w-full">
                                        <label class="label label-text">
                                            {{ getLocale == 'EN' ? 'Last Position' : 'Posisi Terakhir' }}
                                        </label>
                                        <input v-model="form.last_position" type="text"
                                            :placeholder="getLocale == 'EN' ? 'Position' : 'Posisi'"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <label class="label label-text">
                                            {{ getLocale == 'EN' ? 'Last Salary' : 'Gaji Terakhir' }}
                                        </label>
                                        <input v-model="form.last_salary" type="number"
                                            :placeholder="getLocale == 'EN' ? 'Salary' : 'Gaji'"
                                            class="input input-bordered w-full focus:input-info focus:outline-0" />
                                    </div>
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">
                                            Upload CV (Max. 2 Mb)
                                            <span class="text-rose-500">*</span>
                                        </label>
                                        <input v-on:change="handleCVFileChange" ref="cvInput" type="file"
                                            class="file-input file-input-bordered w-full" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">
                                    <div class="form-control w-full">
                                        <label class="label label-text justify-start gap-1">Upload Photo (Max. 2
                                            Mb)<span class="text-rose-500">*</span></label>
                                        <input v-on:change="handlePhotoFileChange" ref="photoInput" type="file"
                                            class="file-input file-input-bordered w-full" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div class="divider"></div>
                            <div class="flex flex-col justify-end gap-2 md:flex-row md:gap-4">
                                <div class="form-control">
                                    <label class="label cursor-pointer justify-start gap-2">
                                        <input type="checkbox" v-name="privacy" value="1" required="true"
                                            class="checkbox-primary checkbox checkbox-sm md:checkbox-md" />
                                        <span class="label-text">
                                            {{ getLocale == 'EN' ? 'Privacy Policy' : 'Kebijakan Privasi' }}
                                        </span>
                                    </label>
                                </div>
                                <div class="form-control">
                                    <input v-model="inputValue"
                                        :placeholder="getLocale == 'EN' ? 'submit your captcha' : 'isi captcha'"
                                        class="input input-bordered w-full focus:input-info focus:outline-0"
                                        type="text" /> <br />
                                    <VueClientRecaptcha :value="inputValue" :textColors="[
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
                                        ]" @getCode="getCaptchaCode" @isValid="checkValidCaptcha" />
                                </div>
                                <template v-if="data.isValid">
                                    <button @click="SubmitForm" :disabled="disabled"
                                        class="btn btn-primary btn-block md:btn-wide">
                                        {{ getLocale == 'EN' ? 'Send' : 'Kirim' }}
                                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                    </button>
                                </template>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <!-- v-show="active.success_toast" -->
        <!-- <div v-show="active.success_toast" id="success_toast"
            class="alert alert-success fixed right-2 top-2 z-[1002] w-5/6 transform transition-transform duration-500 ease-in-out md:top-4 md:w-2/6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
                <h3 class="font-bold">Success</h3>
                <div class="text-xs">Your purchase has been confirmed!</div>
            </div>
        </div> -->
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import { mapState } from 'vuex'
import 'vue-select/dist/vue-select.css'

export default {    
    name: 'Test',
    components: {
        Navbar, Footer
    },
    data() {
        return {
            errors : [],
            inputValue: null,
            data: {
                captchaCode: null,
                isValid: false,
            },
            disabled: false,
            getLocale: 'ID',
            active: {
                success_toast: false,
            },
            OptionGender: [
                { id: 1, name: 'Laki-laki' },
                { id: 2, name: 'Perempuan' },
            ],
            OptionReligion: [
                { id: 1, name: 'Islam' },
                { id: 2, name: 'Kristen' },
                { id: 3, name: 'Katolik' },
                { id: 4, name: 'Buddha' },
                { id: 5, name: 'Hindu' },
                { id: 6, name: 'Khonghucu' },
            ],
            OptionMarried: [
                { id: 1, name: 'Lajang' },
                { id: 2, name: 'Kawin' },
                { id: 3, name: 'Duda' },
                { id: 4, name: 'Janda' },
            ],
            form: {
                privacy: '',
                career_join_id: '',
                name: '',
                gender: '',
                birth_place: '',
                birth_date: '',
                religion: '',
                married: '',
                education: '',
                address: '',
                province: '',
                regency: '',
                district: '',
                village: '',
                email: '',
                mobile: '',
                mobile_sec: '',
                experience: '',
                last_company: '',
                last_position: '',
                last_salary: '',
                cv: [],
                photo: [],
                email_validate: '',
            },
            CareerDetail: []
        }
    },
    watch: {
        'form.province'(obj) {
            return this.$store.dispatch('career/getParamRegency', obj)
        },
        'form.regency'(obj) {
            return this.$store.dispatch('career/getParamDistrict', obj)
        },
        'form.district'(obj) {
            return this.$store.dispatch('career/getParamVillage', obj)
        },
        'form.email'(value){
            //this.email = value;
            this.validateEmail(value);
        },
    },
    computed: {
        ...mapState({
            OptionsProvince: state => state.career.options.province,
            OptionsRegency: state => state.career.options.regency,
            OptionsDistrict: state => state.career.options.district,
            OptionsVillage: state => state.career.options.village
        })
    },
    methods: {
        validateEmail(value){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            {
                this.email_validate = '';
            } 
            else{
                this.email_validate = 'Invalid Email Address';
            } 
        },
        getCaptchaCode(value) {
            /* you can access captcha code */
            this.data.captchaCode = value;
            console.log(value);
        },
        checkValidCaptcha(value) {
            /* expected return boolean if your value and captcha code are same return True otherwise return False */
            this.data.isValid = value
            console.log(value);
        },
        handleCVFileChange(event) {
            const selectedFile = event.target.files[0]
            this.form.cv = selectedFile
            console.log('cv: ', this.form.cv)
        },
        handlePhotoFileChange(event) {
            const selectedFile = event.target.files[0]
            this.form.photo = selectedFile
            console.log('photo: ', this.form.photo)
        },
        SubmitForm() {
            //console.log(this.form);
            const formData = this.form;
            this.errors = [];

            if(!this.form.name){
                this.errors.push('Name required.');
            }

            if(!this.form.email){
                this.errors.push('Email required.');
            }

            if(!this.form.gender){
                this.errors.push('Gender required.');
            }
            
            if(!this.form.birth_date){
                this.errors.push('Tanggal Lahir required.');
            }

            if(!this.form.birth_place){
                this.errors.push('Tempat Lahir required.');
            }

            if(!this.form.religion){
                this.errors.push('Agama required.');
            }

            if(!this.form.married){
                this.errors.push('Status Pernikahan required.');
            }

            if(!this.form.education){
                this.errors.push('Pendidikan required.');
            }

            if(!this.form.address){
                this.errors.push('Alamat required.');
            }

            if(!this.form.province){
                this.errors.push('Provinsi required.');
            }

            if(!this.form.regency){
                this.errors.push('Kota/Kabupaten required.');
            }

            if(!this.form.district){
                this.errors.push('Kecamatan required.');
            }

            if(!this.form.village){
                this.errors.push('Kota/Kelurahan required.');
            }

            if(!this.form.mobile){
                this.errors.push('No HP 1 required.');
            }

            /*if(!this.form.mobile_sec){
                this.errors.push('No HP 2 required.');
            }*/

            /*if(!this.form.last_company){
                this.errors.push('Perusahaan Terakhir required.');
            }

            if(!this.form.last_position){
                this.errors.push('Posisi Terakhir required.');
            }

            if(!this.form.last_salary){
                this.errors.push('Gaji Terakhir required.');
            }*/

            if(this.form.cv == ''){
                this.errors.push('CV required.');
            }

            if(this.form.photo == ''){
                this.errors.push('Photo required.');
            }

            if (this.form.name && this.form.email && this.form.gender && this.form.birth_date && this.form.birth_place && this.form.religion && this.form.married && this.form.education && this.form.address && this.form.province && this.form.regency && this.form.district && this.form.village && this.form.mobile && this.form.photo != '' && this.form.cv != '') { 
                this.$store.dispatch('career/formPostPut', formData)
                .then(res => {
                    console.log(res)
                },
                err => {

                })
            }


            // this.ClearForm();
            // const toast = document.querySelector("#success_toast");

            // if (!this.active.success_toast) {
            //     this.active.success_toast = true;
            //     // tunggui 3 detik
            //     setTimeout(() => {
            //         // ka kanan 100% pas dah waktunya
            //         toast.style.transform = "translateX(100%)";
            //         setTimeout(() => {
            //             // balin ke titik awal
            //             toast.style.transform = "translateX(0)";
            //             this.active.success_toast = false;
            //         }, 500);
            //     }, 3000);
            // } else if (this.active.success_toast) {
            //     this.active.success_toast = false;
            // }
        },
        ClearForm() {
            this.form.name = ''
            this.form.gender = ''
            this.form.birth_place = ''
            this.form.birth_date = ''
            this.form.religion = ''
            this.form.married = ''
            this.form.education = ''
            this.form.address = ''
            this.form.province = ''
            this.form.regency = ''
            this.form.district = ''
            this.form.village = ''
            this.form.email = ''
            this.form.mobile = ''
            this.form.mobile_sec = ''
            this.form.experience = ''
            this.form.last_company = ''
            this.form.last_position = ''
            this.form.last_salary = ''
            this.form.cv = []
            this.form.photo = []
            this.$refs.cvInput.value = null
            this.$refs.photoInput.value = null
        },
        getData(id) {
            this.$store.dispatch('career/getById', id).then(datad => {
                this.CareerDetail = datad
                this.form.career_join_id = id
            })
            if (localStorage.getItem('homelive')) {
                this.$store.dispatch('home/get', 'live').then(data => {
                    localStorage.setItem('homelive', JSON.stringify(data))
                })
                this.getLocalHome = JSON.parse(localStorage.getItem('homelive'))
                this.renderall = true
            } else {
                this.$store.dispatch('home/get', 'live').then(data => {
                    localStorage.setItem('homelive', JSON.stringify(data))
                    router.go(0)
                })
            }
        }
    },
    created() {
        this.$store.dispatch('career/getParamProvince', 'province')
        if (this.$route.params.id) {
            this.getData(this.$route.params.id)
        }
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    },
}
</script>

<style>
.vs--searchable {
    height: 3rem;
}

.vs__dropdown-toggle {
    height: 3rem;
    border-radius: var(--rounded-btn, 0.5rem);
}

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