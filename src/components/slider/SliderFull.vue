<template>
    <div class="relative font-roboto">
        <div class="w-full overflow-hidden h-screen">
            <div class="flex justify-center items-center">
                <div id="slider_img" v-for="(item, index) in slider_img" :key="item.id" class="bg-cover bg-center w-full min-w-full max-w-full duration-500 scroll-smooth flex justify-center items-center" 
                :style="{ transform: `translateX(${-container_slide_width * (currentSlide - 1)}px)`}">
                    <div class="absolute w-full">
                        <div class="flex justify-center">
                            <div class="container">
                                <div class="w-2/5 text-7xl font-black leading-10 md:leading-[87.55px] text-white">{{ item.title }}</div>
                                <div class="w-2/6 mt-8 flex">
                                    <div class="relative-blockquote before:bg-gal-blue-light mr-4"></div>
                                    <span class="text-white">{{ item.description }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img :src="item.img_url" :alt="'Slider Pic ' + item.id" class="w-screen h-screen object-cover object-center" />
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 w-full">
            <div class="flex justify-center">
                <div class="container flex">
                    <div class="w-20 h-20 bg-white hover:bg-gal-grey hover:duration-300 cursor-pointer text-primary text-2xl grid content-center justify-center" @click="prevLanding">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                    </div>
                    <div class="w-20 h-20 bg-primary hover:bg-gal-blue-dark hover:duration-300 cursor-pointer text-white text-2xl grid content-center justify-center" @click="nextLanding">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute right-4 bottom-2/4">
            <div class="flex flex-col items-center justify-center gap-x-4 py-4">
                <button v-for="item in slider_img.length" :key="'slider2-dot-' + item.id" class="rounded-full my-1 duration-500" :class="{
                    'border-2 border-gal-grey w-3 h-3': currentSlide != item-1,
                    'bg-gal-grey w-5 h-5': currentSlide == item-1,
                }" @click="currentSlide = item-1" />
            </div>
        </div>
    </div>
</template>
  
<script lang="js">
export default {
    name: 'SliderFull',
    data() {
        return {
            currentSlide: 0,
            container_slide_width: 0,
            slider_img: [
                { 
                    id: '1',
                    title: "Innovating Everyday Healthcare",
                    description: "Pengembangan produk menjadi kunci utama PT Galenium Pharmasia Laboratories dalam memberikan solusi kesehatan bagi masyarakat.",
                    img_url: "https://images.unsplash.com/photo-1631170405264-c84f56ce0bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                },
                { 
                    id: '2',
                    title: "Menghadirkan Produk Kesehatan Berkualitas",
                    description: "Di PT Galenium Pharmasia Laboratories, kami percaya setiap individu berhak mendapatkan kehidupan yang penuh vitalitas, kebahagiaan, dan kepuasan. Di dunia yang serba cepat, dimana kesehatan dan kesejahteraan adalah hal yang terpenting.",
                    img_url: "https://images.unsplash.com/photo-1614945762371-4d12a35d2890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                },
                { 
                    id: '3', 
                    title: "Bersama Menyehatkan Bangsa", 
                    description: "Kami berdedikasi untuk memberikan dampak positif pada kehidupan dan membangun masa depan yang lebih sehat.", 
                    img_url: "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                },
            ]
        }
    },
    methods: {
        prevLanding() {
            if (this.currentSlide > 0) {
                this.currentSlide--
            } else {
                this.currentSlide = this.slider_img.length-1
            }
        },
        nextLanding() {
            if (this.currentSlide === this.slider_img.length-1) {
                this.currentSlide = 0
            } else {
                this.currentSlide++
            }
        },
        slideLandingWidth() {
            const slider = document.querySelector('#slider_img')
            this.container_slide_width = slider.offsetWidth;
        },
    },
    mounted() {
        this.slideLandingWidth();
        window.addEventListener('resize', this.slideLandingWidth)

        setInterval(() => {
            this.nextLanding()
        }, 5000);
    },
    destroyed() {
        window.removeEventListener('resize', this.slideLandingWidth)
    },
}
</script>