<template>
    <div>
        <label :for="`${flag + index}`" class="group block aspect-square cursor-pointer overflow-hidden" data-aos="fade-up" :data-aos-delay="`${(index*150)+500}`">
            <img :src="image_url" :alt="'image-' + (index + 1)" class="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-125">
        </label>
        <input type="checkbox" :id="`${flag + index}`" class="modal-toggle" />
        <div class="modal modal-middle">
            <div class="modal-box rounded-none p-0 md:max-w-5xl overflow-hidden">
                <div>
                    <button @click="PrevProduct" class="btn btn-circle btn-sm">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                    </button>
                </div>
                <img :src="image_url" :alt="'image-' + (index + 1)" class="w-fit aspect-auto">
                <label :for="`${flag + index}`" class="btn btn-circle btn-primary btn-sm absolute right-2 top-2 font-[900] leading-[100%] md:btn-md">✕</label>
                <div>
                    <button @click="NextProduct" class="btn btn-circle btn-sm">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    </button>
                </div>
            </div>
            <label class="modal-backdrop" :for="`${flag + index}`">Close</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "OfficeCard",
    props: {
        image_url: {
            type: String,
            default: require('@/assets/images/about/tab6/office/office_1.png')
        },
        index: {
            type: Number,
            default: 0
        },
        flag: {
            type: String,
            default: 'Office'
        }
    },
    data() {
        return {
            show_detail_image: false,
        }
    },
    methods: {
        onDetailImage() {
            this.show_detail_image = !this.show_detail_image
            // console.log('popup show')
            if (this.show_detail_image) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
        },
    },
}
</script>
<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init({
        offset: 80,
        duration: 800,
        easing: 'ease',
        delay: 500,
        once: true,
        anchorPlacement: 'top-bottom',
    });
})

</script>