<template>
  <div class="static" v-if="renderall">
   <NavbarHome />

    <!-- SECTION 1 - HERO -->
    <section class="relative font-roboto">
      <div class="h-screen w-full overflow-hidden">
        <div class="flex md:items-center items-start justify-center">
          <div id="slider_img" v-for="(item, index) in getLocalHome?.hero" :key="item.id"
            class="flex w-full min-w-full max-w-full items-center justify-center scroll-smooth bg-cover bg-center duration-500"
            :style="{ transform: `translateX(${-container.slide_hero * (current.slide_hero - 1)}px)` }">
            <div class="absolute w-full top-0 md:top-auto left-0 md:left-auto md:p-0 pt-28">
              <div class="mx-auto md:mx-16 lg:mx-20 px-4 " :class="`text-${item.colour}`">
                <div class="text-left text-5xl font-black lg:text-7xl w-title"
                  :class="index == 1 ? 'lg:w-5/12 md:w-3/6' : 'lg:w-3/6 md:w-1/2'">
                  <div class="text-left" style="padding: 0;">
                    <div class="" v-html="getLocale == 'EN' ? item.title_en : item.title">
                    </div>
                  </div>
                </div>
                <div class="mt-3 flex lg:w-2/6" :class="index == 1 ? 'lg:w-5/12 md:w-5/12' : 'lg:w-2/6'">
                  <div
                    v-if="item.description_en?.replace(/<[^>]*>/g, '') || item.description?.replace(/<[^>]*>/g, '') || item.title_en?.replace(/<[^>]*>/g, '') || item.title?.replace(/<[^>]*>/g, '')"
                    class="relative-blockquote before:bg-gal-blue-light"></div>
                  <div class="text-left text-xl md:text-xl">
                    <div class="ql-editor-left" style="padding: 0;">
                      <div v-html="getLocale == 'EN' ? item.description_en : item.description">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img :src="item.image_url_sm" :alt="'Slider Pic ' + item.id"
              class="block h-screen w-screen object-cover object-center md:hidden" />
            <img :src="item.image_url_md" :alt="'Slider Pic ' + item.id"
              class="hidden h-screen w-screen object-cover object-center md:block lg:hidden" />
            <img :src="item.image_url_lg" :alt="'Slider Pic ' + item.id"
              class="hidden h-screen w-screen object-cover object-center lg:block" />
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 w-full">
        <div class="flex justify-center">
          <div class="container flex">
            <div
              class="grid h-12 w-12 cursor-pointer content-center justify-center bg-white text-2xl text-primary hover:bg-gal-grey hover:duration-300 md:h-20 md:w-20"
              @click="prevhero">
              <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </div>
            <div
              class="grid h-12 w-12 cursor-pointer content-center justify-center bg-primary text-2xl text-white hover:bg-gal-blue-dark hover:duration-300 md:h-20 md:w-20"
              @click="nexthero">
              <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-2/4 right-4">
        <div class="flex flex-col items-center justify-center gap-x-4 py-4">
          <button v-for="item in getLocalHome?.hero?.length" :key="'slider2-dot-' + item.id"
            class="my-1 rounded-full duration-500" :class="{
    'border-2 border-gal-grey w-3 h-3': current.slide_hero != item - 1,
    'bg-gal-grey w-5 h-5': current.slide_hero == item - 1,
  }" @click="current.slide_hero = item - 1" />
        </div>
      </div>
    </section>

    <!-- SECTION 2 - ABOUT -->
    <section
      class="relative w-full before:absolute before:right-0 before:-z-50 before:block before:h-full before:w-full before:bg-primary before:content-[''] md:before:w-3/4">
      <div class="flex h-full items-center justify-center py-4 md:py-16">
        <div class="mx-auto px-4 lg:px-20 ">
          <div class="grid grid-cols-1 gap-y-8 md:grid-cols-5 md:px-0">
            <section data-aos="fade-right" class="col-span-2">
              <div class="flex flex-col items-center justify-center md:items-end">
                <div class="flex w-full overflow-hidden gal-shadow">
                  <template v-if="getLocalHome?.about">
                    <div id="slider_img_about" v-for="(item, index) in getLocalHome?.about?.image_urls" :key="index + 1"
                      class="group flex w-full min-w-full max-w-full items-center justify-center overflow-hidden scroll-smooth duration-500"
                      :style="{ transform: `translateX(${-container.slide_about * (current.slide_about - 1)}px)` }">
                      <img :src="item.image_url" :alt="'Slider Pic ' + (index + 1)"
                        class="w-full object-cover object-center transition-all duration-700 group-hover:scale-125 aspect-square" />
                    </div>
                  </template>
                </div>

                <template v-if="getLocalHome?.about">
                  <div class="col flex items-center justify-end gap-x-4 py-4">
                    <button v-for="(item, index) in getLocalHome.about.image_urls.length"
                      :key="'slider-dot-' + (index + 1)" class="my-1 h-1.5 w-12 duration-500" :class="{
    'bg-white opacity-20 hover:opacity-70': current.slide_about != item,
    'bg-white': current.slide_about == item,
  }" @click="current.slide_about = item" />
                  </div>
                </template>
              </div>
            </section>
            <section data-aos="fade-left" class="col-span-3">
              <div class="flex h-full">
                <div class="flex self-center">
                  <div class="relative-blockquote hidden before:bg-white md:block"></div>
                  <div class="">
                    <div class="font-roboto font-[900] text-xl text-gal-blue-light">
                      <div class="ql-editor" style="padding: 0;">
                        <div
                          v-html="getLocale == 'EN' ? getLocalHome?.about?.page_title_en : getLocalHome?.about?.page_title">
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 font-roboto text-5xl font-[900] text-white md:mt-8 lg:text-7xl">
                      <div class="ql-editor" style="padding: 0;">
                        <div v-html="getLocale == 'EN' ? getLocalHome?.about?.title_en : getLocalHome?.about?.title">
                        </div>
                      </div>
                    </div>
                    <div
                      class="mt-3 font-roboto text-base font-[400] tracking-wide text-white md:mt-6 md:text-xl md:tracking-normal">
                      <!-- {{ getLocale == 'EN' ? getLocalHome?.about?.description_en : getLocalHome?.about?.description }} -->
                      <div class="ql-editor-left" style="padding: 0;">
                        <div
                          v-html="getLocale == 'EN' ? getLocalHome?.about?.description_en : getLocalHome?.about?.description">
                        </div>
                      </div>
                    </div>
                    <router-link to="/about">
                      <button
                        class="mt-10 font-roboto font-[900] text-[0.85rem] uppercase tracking-widest text-gal-blue-light transition-all duration-300 hover:scale-105 hover:text-white">
                        {{ getLocale == 'EN' ? 'Read More' : 'SELENGKAPNYA' }}
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" size="lg" class="ml-3" />
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 - PRODUCT -->
    <section class="flex flex-row -space-x-[50%]">
      <!-- <section v-for="(item, index) in getLocalHome?.product" class="relative h-[600px]	w-3/4 flex-none bg-white duration-500 ease-in-out md:duration-700"  -->
      <!-- <section v-for="(item, index) in getLocalHome?.product" class="relative h-screen min-h-screen sm:h-[600px] md:min-h-[170vh] lg:min-h-screen w-3/4 flex-none bg-white duration-500 ease-in-out md:duration-700"  -->
      <section v-for="(item, index) in getLocalHome?.product"
        class="relative md:min-h-[600px] lg:min-h-screen w-3/4 flex-none bg-white duration-500 ease-in-out md:duration-700"
        :class="{
    '-translate-x-2/3': index == 0 && active_weird_slider,
    'translate-x-0': index == 0 && !active_weird_slider,
    'z-50': index == 0,
    'z-40': index == 1,
    'shadow-[rgba(0,0,15,0.5)_5px_0px_10px_0px]': index == 0 && !active_weird_slider
  }">
        <div v-if="index != 0 && !active_weird_slider"
          class="block bg-black/[.20] inset-0 h-full w-full absolute z-[500]">
        </div>
        <!-- <img :src="item.image_url_lg" alt="" class="h-full w-full object-cover object-center"> -->
        <img :src="item.image_url_sm" class="block w-full object-cover object-center md:hidden" />
        <img :src="item.image_url_md" class="hidden w-full object-cover object-center md:block lg:hidden" />
        <img :src="item.image_url_lg" class="hidden w-full object-cover object-center lg:block" />

        <div class="absolute left-0 top-0 flex h-full w-full flex-col p-8 px-4 md:w-3/4 lg:w-2/3 lg:p-24">
          <div class="font-roboto text-base font-[900] text-gal-blue-light md:text-xl">
            <div class="ql-editor" style="padding: 0;">
              <div v-html="getLocale == 'EN' ? item.category_en : item.category">
              </div>
            </div>
          </div>
          <div class="mt-2 font-roboto text-5xl font-black lg:text-7xl font-[900] text-primary md:mt-8 ">
            <div class="ql-editor" style="padding: 0;">
              <div v-html="getLocale == 'EN' ? item.title_en : item.title">
              </div>
            </div>
          </div>
          <div
            class="mt-3 font-roboto text-sm tracking-wide text-gal-grey-darker mr-5  lg:mr-0 md:mr-0 md:mt-6 md:text-xl md:tracking-normal md:w-2/3 " >
            <div class="ql-editor-left" style="padding: 0; text-align: left;">
              <div v-html="getLocale == 'EN' ? item.description_en : item.description"></div>
            </div>
          </div>
          <router-link :to="index == 0 ? 'product/healthcare' : 'product/ethical'">
            <button
              class="mt-next  font-roboto font-[900] text-[0.85rem] uppercase tracking-widest text-gal-blue-light transition-all duration-300">
              {{ getLocale == 'EN' ? 'Read More' : 'SELENGKAPNYA' }}
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" size="lg" class="ml-3" />
            </button>
          </router-link>
        </div>
        <!-- <div @click="MoveWeirdSlider" class="absolute right-0 top-9 z-[501] flex translate-x-12 translate-y-20 -rotate-90 cursor-pointer gap-x-2 rounded bg-slate-100 p-2 font-roboto hover:bg-gal-blue-lighter md:translate-x-16 md:gap-x-4"> -->
        <div @click="MoveWeirdSlider" :class="getLocale == 'EN' ? 'h-fit' : 'h-fit'"
          class="absolute z-[501] flex absolute top-0 inset-y-0 right-0 w-8 cursor-pointer gap-x-2 rounded bg-slate-100 p-2 font-roboto hover:bg-gal-blue-lighter md:gap-x-4">
          <!-- <font-awesome-icon :icon="index == 0 && active_weird_slider ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'" style="color: #29B6FF" />
          <span class="text-sm uppercase text-primary md:text-base">{{ getLocale == 'EN' ? item.product_type_en : item.product_type}}</span> -->
          <div class="text-center"><span
              class="text-sm text-primary md:text-base [writing-mode:vertical-rl] text-left transform rotate-180 ml-[-2px]">
              <!-- {{ getLocale == 'EN' ? item.category_en : item.category }} -->
              <div class="ql-editor" style="padding: 0;">
                <div v-html="getLocale == 'EN' ? item.category_en : item.category">
                </div>
              </div>
            </span>
            <font-awesome-icon class=""
              :icon="index == 0 && active_weird_slider ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'"
              style="color: #29B6FF" />
          </div>
        </div>
      </section>
    </section>

    <!-- SECTION 4 - QUALITY -->
    <section class="bg-gal-blue-lighter py-10 lg:py-20">
      <div class="container mx-auto">
        <div class="grid grid-cols-3 place-items-center gap-2 md:gap-4">
          <div v-for="(item, index) in getLocalHome?.qualitie" data-aos="fade-up"
            :data-aos-delay="`${(index * 200) + 500}`" class="flex flex-col items-center">
            <img :src="item.image_url" alt="icons" class="aspect-square h-12 object-center md:h-24">
            <p class="mt-4 text-center font-roboto text-xs  text-primary md:mt-10 md:text-base">
              <!-- {{ getLocale == 'EN' ? item.name_en : item.name }} -->
            <div class="ql-editor" style="padding: 0;">
              <div v-html="getLocale == 'EN' ? item.name_en : item.name">
              </div>
            </div>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 - AWARD -->
    <section class="bg-white py-10 lg:py-20">
      <div class="container mx-auto">
        <div class="grid grid-cols-5 place-items-center gap-0 md:gap-5">
          <div v-for="(item, index) in getLocalHome?.award" data-aos="fade-up"
            :data-aos-delay="`${(index * 150) + 500}`" class="flex justify-center">
            <img :src="item.image_url" alt="icons" class="aspect-square h-16 object-center md:h-36">
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <FlyingButton />
  </div>
</template>

<script>
import router from '@/router/index.js'
import NavbarHome from '@/components/navbar/NavbarHome.vue'
import Footer from '@/components/footer/Footer.vue'
import { mapState } from 'vuex'
import { ref } from 'vue'
import FlyingButton from '@/components/flying_button/FlyingButton.vue';

export default {
  name: 'HomeView',
  components: { NavbarHome, Footer, FlyingButton },
  data() {
    return {
      renderall: false,
      getLocale: 'ID',
      getLocalHome: {},
      active_weird_slider: false,
      container: {
        slide_hero: 0,
        slide_about: 0
      },
      current: {
        slide_hero: 0,
        slide_about: 1
      }
    }
  },
  computed: {
    ...mapState({
      home: state => state.home.items
    })
  },
  methods: {
    prevhero() {
      if (this.current.slide_hero > 0) {
        this.current.slide_hero--
      } else {
        this.current.slide_hero = this.getLocalHome.hero.length - 1
      }
    },
    nexthero() {
      if (this.current.slide_hero === this.getLocalHome.hero.length - 1) {
        this.current.slide_hero = 0
      } else {
        this.current.slide_hero++
      }
    },
    slideheroWidth() {
      const slider = document.querySelector('#slider_img')
      if (slider) {
        this.container.slide_hero = slider.offsetWidth
      }
    },
    nextAbout() {
      if (this.current.slide_about === this.getLocalHome.about.image_urls.length) {
        this.current.slide_about = 1
      } else {
        this.current.slide_about++
      }
    },
    slideAboutWidth() {
      const slider_about = document.querySelector('#slider_img_about')
      if (slider_about) {
        this.container.slide_about = slider_about.offsetWidth + 0.1;
      }
    },
    MoveWeirdSlider() {
      this.active_weird_slider = !this.active_weird_slider
    },
    getData() {
      if (localStorage.getItem('homelive')) {
        this.$store.dispatch('home/get', 'live').then(data => {
          localStorage.setItem('homelive', JSON.stringify(data))
          // this.getLocalHome = data
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

  mounted() {
    this.slideheroWidth()
    window.addEventListener('resize', this.slideheroWidth)
    setInterval(() => {
       this.nexthero()
    }, 10000)
    this.slideAboutWidth()
    window.addEventListener('resize', this.slideAboutWidth)
    setInterval(() => {
      this.nextAbout()
    }, 4000)
  },

  destroyed() {
    window.removeEventListener('resize', this.slideheroWidth)
    window.removeEventListener('resize', this.slideAboutWidth)
  },

  created() {
    this.getData()
    if (localStorage.getItem('locale')) {
      this.getLocale = localStorage.getItem('locale')
    } else {
      this.getLocale = 'ID'
    }
  }

}
</script>

<script setup>
import { onMounted } from "vue"
import AOS from "aos"

onMounted(() => {
  AOS.init({
    offset: 80,
    duration: 800,
    easing: 'ease',
    delay: 500,
    once: true,
    anchorPlacement: 'top-bottom',
  })
})
</script>
