<template>
    <div class="group font-roboto bg-white shadow-md rounded-2xl p-4 mx-1 my-3 cursor-pointer">
        <div class="relative aspect-video w-full overflow-hidden">
            <img :src="image_url" alt="news_image" class="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110 rounded-2xl">
            <div class="absolute bottom-0 mb-2 px-2 py-1 text-xs font-[500] tracking-wide md:mb-6 md:px-3 md:py-2 md:text-sm" :class="category ? active_category : ''">
                <!-- {{ getLocale == 'EN' ? category : category }} -->
                <div class="ql-editor" style="padding: 0;">
                    <div
                        v-html="getLocale == 'EN' ? category : category" />
                </div>
            </div>
        </div>
        <div class="mt-2 md:mt-4 md:h-[130px]">
            <div class="line-clamp-2 text-base font-bold text-primary group-hover:underline group-hover:decoration-solid md:text-lg">
                <!-- {{ title }} -->
                <div class="ql-editor" style="padding: 0;">
                    <div
                        v-html="title" />
                </div>
            </div>
            <div class="mt-1 flex items-center gap-2 text-gal-grey-darker md:gap-3">
                <font-awesome-icon icon="fa-regular fa-clock" />
                <span class="text-sm">{{ date }}</span>
            </div>
            <button class="mt-2 text-xs font-[600] uppercase tracking-wider text-gal-blue-light group-hover:text-gal-blue-dark md:mt-4 md:text-sm md:font-[900] md:tracking-widest">
                {{ getLocale == 'EN' ? 'Read More' : 'Selengkapnya' }}
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" size="lg" class="ml-2 md:ml-3"/>
            </button>
        </div> 
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Init Title'
        },
        category: {
            type: String,
            default: 'Category'
        },
        date: {
            type: String,
            default: '06/10/2014'
        },
        image_url: {
            type: String,
            default: require('@/assets/images/news/news_2.png')
        },
    },
    data() {
        return {
            active_category: '',
        }
    },
    mounted() {
        this.getColor()
    },
    methods: {
        getColor() {
            switch (this.category) {
                case 'CSR':
                    this.active_category = 'bg-[#6FC3AF] text-gal-blue-dark'
                    break;
                case 'Artikel':
                    this.active_category = 'bg-[#4C91E6] text-white'
                    break;
                case 'Kegiatan':
                    this.active_category = 'bg-[#FFDC85] text-gal-blue-dark'
                    break;
                case 'Article':
                    this.active_category = 'bg-[#4C91E6] text-white'
                    break;
                case 'Activity':
                    this.active_category = 'bg-[#FFDC85] text-gal-blue-dark'
                    break;
                default:
                    this.active_category = 'bg-gal-grey-light text-gal-blue-dark'
                    break;
            }
        }
    },
    created() {
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    }
}
</script>