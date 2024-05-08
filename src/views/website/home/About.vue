<template>
    <section class="relative w-full before:absolute before:right-0 before:-z-50 before:block before:h-full before:w-full before:bg-primary before:content-[''] md:before:w-3/4">
      <div class="flex h-full items-center justify-center py-10 md:py-16">
        <div class="container mx-auto md:px-20">
          <div id="sec2_container" class="grid grid-cols-1 gap-y-8 px-10 md:grid-cols-5 md:px-0">
            <section id="sec2_reveal_origin_left" class="relative col-span-2 -translate-x-[80px] opacity-0 transition-all delay-500 duration-[1000ms] ease-in-out">
              <div class="flex flex-col items-center justify-center md:items-end">
                <div class="flex w-full overflow-hidden">
                  <div id="slider_img_about" v-for="(item, index) in slider_about.img_urls" :key="item.id"
                    class="group flex w-full min-w-full max-w-full items-center justify-center overflow-hidden scroll-smooth duration-500"
                    :style="{ transform: `translateX(${-container.slide_about * (current.slide_about - 1)}px)`}">
                    <img :src="item.img_url" :alt="'Slider Pic ' + item.id" class="w-full object-cover object-center transition-all duration-700 group-hover:scale-125 aspect-square" />
                  </div>
                </div>
                <div class="col flex items-center justify-end gap-x-4 py-4">
                    <button v-for="item in slider_about.img_urls.length" :key="'slider-dot-' + item.id"
                      class="my-1 h-1.5 w-12 duration-500" :class="{
                        'bg-white opacity-20 hover:opacity-70': current.slide_about != item,
                        'bg-white': current.slide_about == item,
                      }" @click="current.slide_about = item" />
                </div>
              </div>
            </section>
            <section id="sec2_reveal_origin_right" class="relative col-span-3 translate-x-[80px] opacity-0 transition-all delay-500 duration-[1000ms] ease-in-out">
              <div class="flex h-full">
                <div class="flex self-center">
                  <div class="relative-blockquote hidden before:bg-white md:block"></div>
                  <div class="">
                    <div class="font-roboto font-[900] text-xl text-gal-blue-light">TENTANG KAMI</div>
                    <div class="mt-4 font-roboto text-5xl font-[900] text-white md:mt-8 md:text-7xl">We Live for People’s Life</div>
                    <div class="mt-3 font-roboto text-base font-[400] tracking-wide text-white md:mt-6 md:text-xl md:tracking-normal">Kami berkomitmen untuk meningkatkan kesehatan masyarakat melalui produk PT Galenium Pharmasia Laboratories.</div>
                    <router-link to="/">
                      <button class="mt-10 font-roboto font-[900] text-[0.85rem] tracking-widest text-gal-blue-light transition-all duration-300 hover:scale-105 hover:text-white">
                        SELENGKAPNYA
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" size="lg" class="ml-3"/>
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
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      stop: {
        right_el: false,
        left_el: false,
      },
      container: {
        slide_about: 0,
      },
      current: {
        slide_about: 1,
      },
      slider_about: {
        title: `We Live for People’s Life`,
        img_urls: [
          {
            id: '1',
            img_url: require('@/assets/images/home/about/about_1.png')
          },
          {
            id: '2',
            img_url: require('@/assets/images/home/about/about_2.png')
            // img_url: "https://images.unsplash.com/photo-1612979168715-3dde2d721351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
          },
          {
            id: '3',
            img_url: require('@/assets/images/home/about/about_3.png')
          },
        ],
      },  
    }
  },
  computed: {
    ...mapState({ 
      home: state => state.home.items
    })
  },
  methods: {
    nextAbout() {
        if (this.current.slide_about === this.slider_about.img_urls.length) {
            this.current.slide_about = 1
        } else {
            this.current.slide_about++
        }
    },
    slideAboutWidth() {
      const slider_about = document.querySelector('#slider_img_about')
      if (slider_about) {
        this.container.slide_about = slider_about.offsetWidth;
      }
    },
    scrollTrigger(){
        // get the elements 
        const left_el = document.querySelector('#sec2_reveal_origin_left')
        const right_el = document.querySelector('#sec2_reveal_origin_right')
        const container_el = document.querySelector('#sec2_container')

        // check if the elements exist and the trigger is not yet triggered
        if (right_el && left_el && container_el && !this.stop.right_el && !this.stop.left_el) {
          // get the element position in the viewport
          const rect = container_el.getBoundingClientRect();
          
          // Check if the element is in the viewport
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // remove existing inline class
            left_el.classList.remove('-translate-x-[80px]');
            left_el.classList.remove('opacity-0');
            right_el.classList.remove('translate-x-[80px]');
            right_el.classList.remove('opacity-0');

            // add new inline class
            left_el.classList.add('translate-x-0');
            left_el.classList.add('opacity-1');
            right_el.classList.add('translate-x-0');
            right_el.classList.add('opacity-1');

            // make the element not trigger again
            this.stop.right_el = true;
            this.stop.left_el = true;
          } 
        }
    }
  },
  mounted() {
    this.$store.dispatch('home/getAll')
    // Trigger for reveal
    window.addEventListener('scroll', this.scrollTrigger)
    window.addEventListener('resize', this.scrollTrigger)
    this.scrollTrigger()

    // Trigger for slider
    this.slideAboutWidth()
    window.addEventListener('resize', this.slideAboutWidth)
    setInterval(() => {
        this.nextAbout()
    }, 4000)
  },
  destroyed() {
    // Destroy reveal trigger after leave the viewport
    window.removeEventListener('scroll', this.scrollTrigger);
    window.removeEventListener('resize', this.scrollTrigger)
    
    // Destroy trigger for slider
    window.removeEventListener('resize', this.slideAboutWidth)
  },
}
</script>
