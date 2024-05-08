<template>
    <div class="static">
        <Navbar active_menu="career" />
        <section class="relative z-10 bg-gal-grey-light px-4 pb-10 pt-20 font-roboto before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-72 before:w-full before:bg-primary before:content-[''] md:px-0 md:pb-20 md:pt-32 md:before:h-80 lg:before:h-96">
            <div class="container mx-auto">
                <div class="gal-title-2 uppercase">{{ getLocale == 'EN' ? 'Career' : 'Karier' }}</div>
                <!-- <div class="gal-title-2 mt-4 font-[700] tracking-wide text-white md:mt-8">Area Sales Supervisor</div> -->
                <div class="mt-2 rounded bg-white md:rounded-lg md:p-20">
                    <div class="grid grid-cols-1">
                        <section>
                            <div class="flex items-center justify-center">
                                <div class="p-4 rounded shadow-lg ring ring-primary">
                                    <div class="flex flex-col items-center space-y-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h1 class="text-4xl font-bold">Berhasil !</h1>
                                        <p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Lamaran Berhasil Dikirim, Terimakasih. &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</p>
                                        <a class="inline-flex items-center px-4 py-2 text-white bg-primary  border border-primary  rounded rounded-full hover:bg-primary  focus:outline-none focus:ring">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                            </svg>
                                            <router-link :to="{ path: '/career' }">
                                                <span class="text-sm font-medium"> Karier </span>
                                            </router-link>
                                        </a>
                                    </div>
                                </div>
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
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    components: {
        Navbar, Footer
    },
    data() {
        return {
            getLocale: 'ID',
            active: {
                success_toast: false,
            }
        }
    },
    methods: {

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
