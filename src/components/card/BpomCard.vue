<template>
    <div>
        <div class="flex h-full flex-col justify-between rounded font-roboto">
            <div class="mt-6">
                <div>
                    <label :for="'modal_career_' + `${index}`" class="hover:text-gal-blue-darker mt-4 font-roboto font-[900] text-[0.85rem] uppercase tracking-widest text-gal-blue-light transition-all duration-300 hover:scale-105 md:mt-2 lg:mt-10">
                        {{ getLocale == 'EN' ? 'Read More' : 'SELENGKAPNYA' }}
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" size="lg"
                            class="ml-3" />                                                
                    </label>
                </div>
            </div>
        </div>
        <input type="checkbox" :id="'modal_career_' + `${index}`" class="modal-toggle" />
        <div class="modal modal-bottom md:modal-middle">
            <div class="modal-box md:max-w-2xl md:rounded-none h-80">                
                <section class="py-4">
                    <div class="flex flex-col gap-4 md:flex-row items-center justify-center mt-10">                       
                        <div class="flex gap-3">
                            <div>
                                <div class="mt-4 flex w-full flex-wrap gap-2 items-center justify-center">
                                    <h2 class="text-lg font-bold text-gal-grey-darker md:text-2xl text-center">
                                        <div style="padding: 0;">
                                            Apakah Anda Petugas Kesehatan ?
                                        </div>
                                    </h2>
                                </div>
                                
                                <div class="mt-4 flex w-full flex-wrap gap-2 items-center justify-center">
                                    <label :for="'modal_share_career_' + `${index}`"
                                        class="btn-outline-secondary btn btn-xl flex-none py-2 bg-[#0076C5] w-40">
                                        <div class="flex items-center justify-center text-[#FEFEFE]">                                        
                                            <span>{{ getLocale == 'EN' ? 'Yes' : 'Ya' }}</span>
                                        </div>
                                    </label>
                                    &nbsp;
                                    <a href="/"
                                        class="btn-outline-secondary btn btn-xl flex-none py-2 bg-[#e5e7eb] w-40">
                                        <div class="flex items-center justify-center text-black">
                                            <span>{{ getLocale == 'EN' ? 'No' : 'Tidak' }}</span>
                                        </div>
                                    </a>
                                </div>                                

                                <input type="checkbox" :id="'modal_share_career_' + `${index}`" class="modal-toggle" />
                                <!-- modal share news -->
                                <div class="modal modal-bottom w-full md:modal-middle">
                                    <div class="modal-box max-w-6xl">
                                        <div class="divider">{{ getLocale == 'EN' ? 'Please complete the following information' : 'Lengkapi Informasi Berikut Ini'
                                            }}</div>
                                        <p v-if="errors.length" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
                                        <b>Please correct the following error(s):</b>
                                        <ul>
                                        <li v-for="error in errors">{{ error }}</li>
                                        </ul>
                                        </p>
                                        <div class="mt-4 flex w-full flex-wrap gap-2 items-center justify-center">
                                            <div class="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-0">                                    
                                                <div class="form-control w-full">
                                                    <label class="label label-text justify-start gap-1">{{ getLocale == 'EN' ? 'Fullname' : 'Nama' }}<span class="text-rose-500">*</span></label>
                                                    <input v-model="form.nama" type="text" :placeholder="getLocale == 'EN' ? 'Fullname' : 'Nama'" class="input input-bordered w-full focus:input-info focus:outline-0" />
                                                </div>
                                                <div class="form-control w-full">
                                                    <label class="label label-text justify-start gap-1">{{ getLocale == 'EN' ? 'Practice Place Name' : 'Nama Tempat Praktek' }}<span class="text-rose-500">*</span></label>
                                                    <input v-model="form.namaprak" type="text" :placeholder="getLocale == 'EN' ? 'Practice Place Name' : 'Nama Tempat Praktek'" class="input input-bordered w-full focus:input-info focus:outline-0" />
                                                </div>
                                            </div>    
                                                    <button  @click="SubmitForm"
                                                        class="btn btn-primary btn-block">
                                                        {{ getLocale == 'EN' ? 'Send' : 'Kirim' }}
                                                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                                    </button>
                                        </div>
                                        <label :for="'modal_share_career_' + `${index}`"
                                            class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 font-[900] leading-[100%]">✕</label>
                                    </div>
                                    <label class="modal-backdrop"
                                        :for="'modal_share_career_' + `${index}`">Close</label>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>

                <!-- closed button -->
                <label :for="'modal_career_' + `${index}`"
                    class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 md:btn-md">✕</label>
            </div>
            <label class="modal-backdrop" :for="'modal_career_' + `${index}`">Close</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        obj_data: {
            type: Object,
            default: () => ({
                id: 1,
                title: 'Lorem Ipsum',
                subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                deadline: '01-12-2023',
                category: 'Marketing',
                education: 'Lulusan Mahasiswa',
                phone_number: '08123456789',
                description: [
                    'Lorem Ipsum is simplyxt of the printing and typesetting industry',
                    'Lorem Ipsum is simply dummy text and typesetting industry',
                    'Lorem Ipsum is y dummy text of the printing industry',
                ],
                requirement: [
                    'Lorem Ipsum is simply dummy text ',
                    'Lorem Ipsum is simply dummy text of the printing and typese dustry',
                    'Lorem Ipsum is simply dummy text of the printing ',
                    'Lorem Ipsum is simxt of the printing and typesetting industry',
                    'Lorem Ipsum is simply dummy text of the printing and typesetting istry',
                    'Lorem Ipsum is simply dummy text of the printing and typey',
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                    'Lorem Ipsum is of the printing and typesetting industry',
                    'Lorem Ipsum is simply dummy text of td typesetting industry',
                ]
            })
        },
        index: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            errors : [],
            isCopied: false,
            isModalActive: false,
            getLocale: 'ID',
            form: {
              nama: '',
              namaprak: ''
            },
        }
    },
    methods: {
        SubmitForm() {
            const formData = this.form;
            this.errors = [];

            if(!this.form.nama){
                this.errors.push('Nama Harus di isi.');
            }

            if(!this.form.namaprak){
                this.errors.push('Ijin Praktek harus di isi.');
            }

            if (this.form.nama && this.form.namaprak) { 
                this.$store.dispatch('general/formPostPut', formData)
                .then(res => {
                    console.log(res)
                },
                err => {

                })
            }
        },
        toggleModal() {
            this.isModalActive = !this.isModalActive
        }
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