<template>
    <!-- <nav class="fixed left-0 right-0 top-0 z-[800] flex w-full items-center px-4 md:px-16" :class="!is_scrolling ? 'bg-white' : 'backdrop-blur-xl'"> -->
    <nav class="fixed left-0 right-0 top-0 z-[800] flex w-full items-center bg-white px-4 shadow-lg md:px-16">
        <div class="py-4 md:py-8">
            <!-- <img src="@/assets/images/general/logo_galenium_navbar.png" alt="navbar_logo" width="100"> -->
            <router-link :to="{ name: 'HomeView' }">
                    <img :src="getLocalGeneral?.icon?.navbar" alt="navbar_logo" class="sm:block w-[100px] lg:w-[140px]">
            </router-link>
        </div>
        <ul id="is_expand"
            class="absolute left-0 right-0 top-full ml-auto hidden bg-white transition duration-1000 lg:relative lg:flex lg:space-x-2 lg:bg-transparent lg:px-2"
            style="transform: translateY(-10%)">
            <li>
                <router-link :to="{ name: 'HomeView' }" class="navbar__link"
                    :class="active_menu === 'home' ? 'navbar__link__actived' : ''">
                    <span>{{ active_language == 'EN' ? 'Home' : 'Beranda' }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'AboutView' }" class="navbar__link"
                    :class="active_menu === 'about' ? 'navbar__link__actived' : ''">
                    <span>{{ active_language == 'EN' ? 'About Us' : 'Tentang Kami' }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'ProductView' }" class="navbar__link"
                    :class="active_menu === 'product' ? 'navbar__link__actived' : ''">
                    <span>{{ active_language == 'EN' ? 'Product' : 'Produk' }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'BusinessView' }" class="navbar__link"
                    :class="active_menu === 'business' ? 'navbar__link__actived' : ''">
                    <span>{{ active_language == 'EN' ? 'Business' : 'Bisnis' }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'NewsView' }" class="navbar__link"
                    :class="active_menu === 'news' ? 'navbar__link__actived' : ''">
                    <span>{{ active_language == 'EN' ? 'News' : 'Berita' }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'CareerView' }" class="navbar__link"
                    :class="active_menu === 'career' ? 'navbar__link__actived' : ''">
                    <span>{{ active_language == 'EN' ? 'Career' : 'Karier' }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'ContactView' }" class="navbar__link"
                    :class="active_menu === 'contact' ? 'navbar__link__actived' : ''">
                    <span>{{ active_language == 'EN' ? 'Contact' : 'Kontak' }}</span>
                </router-link>
            </li>
            <!-- <li class="parent relative">
                <a href="#" class="navbar__link navbar__space" :class="active_menu === 'carier' ? 'navbar__link__actived' : ''">
                    <span>Produk</span>
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                </a>
                <ul class="child navbar__child">
                    <li>
                        <a href="#" class="navbar__child__link">
                            Web development
                        </a>
                    </li>
                    <li>
                        <a href="#" class="navbar__child__link">
                            Web Design
                        </a>
                    </li>
                    <li>
                        <a href="#" class="navbar__child__link">
                            Machine Learning
                        </a>
                    </li>
                </ul>
            </li> -->
        </ul>
        <section class="ml-auto flex items-center gap-x-4 lg:ml-2">
            <div>
                <div class="tabs-boxed tabs">
                    <input @click="switchLanguage('ID')" v-model="active_language" value="ID" type="radio"
                        name="language" aria-label="ID" class="btn btn-sm" />
                    <input @click="switchLanguage('EN')" v-model="active_language" value="EN" type="radio"
                        name="language" aria-label="EN" class="btn btn-sm" />
                </div>
            </div>
            <!-- <div class="dropdown dropdown-end">
                <button class="btn btn-ghost">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
                <ul tabindex="0" class="menu dropdown-content z-[1] lg:mr-0 md:mr-0 mr-[-60px] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li><input v-model="globalSearch" @keyup.enter="enterSearch" class="input input-bordered w-full"/></li> 
                </ul>
            </div> -->
            <button @click="expandMenu()" class="btn btn-primary relative lg:hidden">
                <font-awesome-icon :icon="active_icon" />
            </button>
        </section>
    </nav>
</template>

<script>
import { mapState } from 'vuex'
import router from '@/router/index.js'
export default {
    props: {
        active_menu: {
            type: String,
            default: 'home'
        }
    },
    data() {
        return {
            // is_scrolling: false,
            // active_scroll: 'bg-white',
            getLocalGeneral: {},
            active_icon: 'fa-solid fa-bars',
            is_expand: false,
            active_language: 'ID',
            globalSearch: ''
        }
    },
    methods: {
        enterSearch() {
            router.push({ name: 'SearchView', query: { key: this.globalSearch } })
        },
        onScroll() {
            // console.log('scrolling')
            if (window.pageYOffset > 0) {
                this.is_scrolling = true
                // this.active_scroll = 'backdrop-blur-xl'
            } else {
                this.is_scrolling = false
                // this.active_scroll = 'bg-white'
            }
        },
        expandMenu() {
            this.is_expand = !this.is_expand
            const is_expand_class = document.getElementById('is_expand')
            // console.log('clicked: ', this.is_expand);
            if (this.is_expand === true) {
                this.active_icon = 'fa-solid fa-x'
                is_expand_class.classList.add('block')
                is_expand_class.classList.remove('hidden')
            } else {
                this.active_icon = 'fa-solid fa-bars'
                is_expand_class.classList.add('hidden')
                is_expand_class.classList.remove('block')
            }
        },
        switchLanguage(param) {
            if (param) {
                localStorage.setItem('locale', param)
            } else {
                localStorage.setItem('locale', 'ID')
            }
            window.location.reload()
        },
        getData() {
            if (localStorage.getItem('generallive')) {
                this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
            } else {
                this.$store.dispatch('general/get', 'live').then(data => {
                    localStorage.setItem('generallive', JSON.stringify(data))
                    this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
                })
            }
        }
    },
    mounted() {
        this.getData()
    },
    computed: {
        ...mapState({
            general: state => state.general.items
        })
    },
    created() {
        if (localStorage.getItem('locale')) {
            this.active_language = localStorage.getItem('locale')
        } else {
            localStorage.setItem('locale', 'ID')
            this.active_language = 'ID'
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 768px) {
    .parent:hover .child {
        opacity: 1;
        height: auto;
        overflow: none;
        transform: translateY(0);
    }

    .child {
        opacity: 0;
        height: 0;
        overflow: hidden;
        transform: translateY(-10%);
    }
}
</style>