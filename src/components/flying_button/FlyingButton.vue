<template>
    <div class="fixed right-4 z-[801] flex flex-col items-end gap-y-2 font-roboto md:gap-y-4 md:right-16" :class="!is_scrollingz ? 'scroll-smooth duration-1000 lg:bottom-16 md:bottom-16 bottom-16':'scroll-smooth duration-1000 lg:bottom-[21rem] md:bottom-[21rem] bottom-[28rem]'">
        <div>
            <a :href="'https://wa.me/' + getWhatsappNumber?.replace(/<[^>]*>/g, '')" target="_blank" class="btn lg:btn-md md:btn-md btn-sm border-2 border-gal-grey shadow-lg shadow-neutral-800/30">
                <font-awesome-icon icon="fa-brands fa-whatsapp" size="lg"/>
                <span class="uppercase sm:text-chat">
                    Chat <span class="font-[400]">With Us</span>
                </span>
            </a>
        </div>
        <div>
            <a :href="getLocalGeneral?.footer?.store_url?.replace(/<[^>]*>/g, '')" target="_blank" class="btn lg:btn-md md:btn-md btn-sm btn-primary shadow-lg shadow-neutral-800/30" style="background: linear-gradient(180deg, #1E6BCC 0%, #17539E 100%);">
                <img src="@/assets/icons/general/shopping_bag.svg" alt="bag">
                <span class="uppercase sm:text-chat">
                    <span class="font-[400]">GO TO</span> G-STORE
                </span>
                <img src="@/assets/icons/general/long_arrow.svg" alt="bag">
            </a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'FlyingButton',
    data() {
        return {
            getLocalGeneral: {},
            is_scrollingz: false,
            wa_url: 'https://wa.me/6282219542312'
        }
    },
    computed: {
        ...mapState({ 
            general: state => state.general.items
        }),
        getWhatsappNumber() {
            if (this.getLocalGeneral?.footer?.whatsapp_number.startsWith('0')) {
                return this.getLocalGeneral.footer.whatsapp_number = '62' + this.getLocalGeneral?.footer?.whatsapp_number.slice(1);
            }
            return this.getLocalGeneral?.footer?.whatsapp_number
        }
    },
    methods: {
        onScrollz () {
            var d = document.documentElement
            var offset = Math.round(d.scrollTop + window.innerHeight)
            var height = d.offsetHeight

            if (offset === height) {
                this.is_scrollingz = true
            } else if ((offset+1) === height) {
                this.is_scrollingz = true
            } else if ((offset-1) === height) {
                this.is_scrollingz = true
            } else if ((offset+2) === height) {
                this.is_scrollingz = true
            } else if ((offset-2) === height) {
                this.is_scrollingz = true
            } else {
                this.is_scrollingz = false
            }
            // console.log('offset '+offset)
            // console.log('height '+height)
        },
        getData () {
            if (localStorage.getItem('generallive')) {
                this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
            } else {
                this.$store.dispatch('general/get','live').then(data => {
                    localStorage.setItem('generallive', JSON.stringify(data))
                    this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
                })
            }
        }
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.onScrollz);
    },

    mounted() {
        this.getData()
        window.addEventListener('scroll', this.onScrollz)
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