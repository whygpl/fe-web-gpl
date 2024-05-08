<template>
    <div class="static">
        <Navbar active_menu="news" />
        <section class="px-4 pb-10 pt-20 font-roboto md:px-0 md:pt-32">
            <div class="product-type-container one-col-min">

                <!-- breadcrumbs -->
                <div class="breadcrumbs mt-4 font-roboto text-lg">
                    <ul>
                        <li v-for="(item, index) in breadcrumbs" :key="index">
                            <router-link :to="item.link" class="flex items-center text-gal-grey-dark gap-2"
                                :class="(index + 1) == breadcrumbs.length ? 'text-primary font-[700]' : ''">
                                <div class="ql-editor" style="padding: 0;">
                                    <div v-html="getLocale == 'EN' ? item.name_en : item.name" />
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8 lg:divide-x-2 lg:divide-slate-400/50">

                    <div class="h-full lg:col-span-4 mr-8">
                        <div class="gal-title">
                            <div class="ql-editor" style="padding: 0;">
                                <div v-html="getLocale == 'EN' ? NewsDetail?.title_en : NewsDetail?.title" />
                            </div>
                        </div>
                        <div class="mt-2 flex items-center gap-4 md:mt-8 md:gap-8">
                            <div class="flex">
                                <div class="relative-blockquote before:bg-gal-grey-dark"></div>
                                <div class="text-sm font-[500] text-gal-grey-dark md:text-base">{{ NewsDetail.date }}
                                </div>
                            </div>
                            <div class="flex gap-2 md:gap-4">
                                <button class="btn btn-warning rounded-none">{{ getLocale == 'EN' ?
                            NewsDetail.category_en : NewsDetail.category }}</button>
                                <label for="modal_share_news"
                                    class="btn-outline-secondary btn grid place-content-center rounded-none">
                                    <div class="flex items-center justify-center">
                                        <font-awesome-icon icon="fa-solid fa-share-nodes" class="mr-3" />
                                        <span>{{ getLocale == 'EN' ? 'Share' : 'Bagikan' }}</span>
                                    </div>
                                </label>
                                <input type="checkbox" id="modal_share_news" class="modal-toggle" />
                                <!-- modal share news -->
                                <div class="modal modal-bottom w-full md:modal-middle">
                                    <div class="modal-box max-w-5xl">
                                        <div class="divider">{{ getLocale == 'EN' ? 'Share News' : 'Bagikan Berita' }}
                                        </div>
                                        <div class="mt-8 flex w-full flex-wrap gap-2">
                                            <a @click.prevent="share('whatsapp')"
                                                class="btn btn-success btn-sm text-white">
                                                <font-awesome-icon icon="fa-brands fa-whatsapp" /> Whatsapp
                                            </a>
                                            <a @click.prevent="share('telegram')"
                                                class="btn btn-info btn-sm text-white">
                                                <font-awesome-icon icon="fa-brands fa-telegram" /> Telegram
                                            </a>
                                            <a @click.prevent="share('facebook')" class="btn btn-primary btn-sm">
                                                <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
                                            </a>
                                            <a @click.prevent="share('copy')" class="btn btn-sm">
                                                <font-awesome-icon icon="fa-regular fa-clipboard" /> {{ isCopied ?
                            'Copied' : 'Copy' }}
                                            </a>
                                        </div>
                                        <label for="modal_share_news"
                                            class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 font-[900] leading-[100%]">✕</label>
                                    </div>
                                    <label class="modal-backdrop" for="modal_share_news">Close</label>
                                </div>
                            </div>
                        </div>
                        <div class="my-3 aspect-video w-full md:my-8">
                            <template v-if="NewsDetail.image_url">
                                <img :src="NewsDetail.image_url" alt=""
                                    class="onject-center h-full w-full object-cover">
                            </template>
                        </div>
                        <div class="gal-items text-justify font-roboto md:textjustify ckeditor-custom">
                            <div class="ck-content" v-html="getLocale == 'EN' ? description_en : description"></div>
                        </div>
                        <!-- <div class="gal-items mt-2 text-justify md:mt-3 md:text-left">{{ NewsDetail.description }}</div>
                        <div class="mt-2 grid grid-cols-1 md:mt-4 md:grid-cols-3 md:gap-x-8">
                            <div>
                                <img :src="NewsDetail.description" alt="" class="aspect-square w-full object-cover object-center">
                                <div class="text-xs italic text-gal-grey-dark">{{ NewsDetail.description }}</div>
                            </div>
                            <div class="gal-items col-span-2 mt-2 text-justify md:mt-0 md:text-left">{{ NewsDetail.description }}<p class="mt-2">{{ NewsDetail.description }}</p></div>
                            <div class="gal-items col-span-2 mt-2 text-justify md:mt-0 md:text-left"></div>
                        </div> -->
                    </div>

                    <div class="h-full px-0 lg:col-span-2 lg:pl-8">
                        <section
                            class="mt-4 grid grid-flow-row grid-cols-1 lg:ml-5 gap-2 divide-y divide-gray-400/50 lg:mt-0 lg:gap-4 lg:divide-y-2">
                            <div class="text-xl font-[900] text-primary md:text-2xl">
                                {{ getLocale == 'EN' ? 'Popular News' : 'Berita Populer' }}
                            </div>
                            <div class="grid grid-cols-1 gap-y-3 pt-3 md:grid-cols-1 md:gap-5 md:pt-5">
                                <div v-for="(item, index) in NewsDetail.popular" :key="index"
                                    class="group flex cursor-pointer items-center gap-4">
                                    <img :src="item.image_url" alt="" class="aspect-square w-[50px] md:w-[80px]">
                                    <a :href="$router.resolve({ path: '/news/detail/' + item.id }).href">
                                        <div
                                            class="line-clamp-2 font-roboto text-sm font-[500] text-gal-grey-darker group-hover:text-primary md:line-clamp-3 md:text-base">
                                            <div class="ql-editor" style="padding: 0;">
                                                <div v-html="getLocale == 'EN' ? item?.title_en : item?.title" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section
                            class="mt-6 grid grid-flow-row grid-cols-1 ml-5 gap-2 divide-y divide-gray-400/50 md:mt-10 md:gap-4 md:divide-y-2">
                            <div class="text-xl font-[900] text-primary md:text-2xl">
                                {{ getLocale == 'EN' ? 'Related News' : 'Berita Terkait' }}
                            </div>
                            <div class="grid grid-cols-1 divide-y divide-gray-400/50 md:grid-cols-1 md:divide-y-2">
                                <div v-for="(item, index) in RelatedNews" :key="index"
                                    class="line-clamp-2 cursor-pointer py-3 font-roboto text-sm font-[500] text-gal-grey-darker hover:text-primary md:line-clamp-3 md:py-4 md:text-base">
                                    <div class="ql-editor" style="padding: 0;">
                                        <div v-html="item.title" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            class="mt-6 grid grid-flow-row grid-cols-1 ml-5 gap-2 divide-y divide-gray-400/50 md:mt-10 md:gap-4 md:divide-y-2">
                            <div class="text-xl font-[900] text-primary md:text-2xl">
                                {{ getLocale == 'EN' ? 'Latest News' : 'Berita Terbaru' }}
                            </div>
                            <div class="grid grid-cols-1 divide-y divide-gray-400/50 md:grid-cols-1 md:divide-y-2">
                                <div v-for="(item, index) in LatestNews" :key="index"
                                    class="line-clamp-2 cursor-pointer py-3 font-roboto text-sm font-[500] text-gal-grey-darker hover:text-primary md:line-clamp-3 md:py-4 md:text-base">
                                    <div class="ql-editor" style="padding: 0;">
                                        <div v-html="item.title" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        <FlyingButton />
    </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import Footer from '@/components/footer/Footer.vue';
import FlyingButton from '@/components/flying_button/FlyingButton.vue';
import '@/ckeditor/style.css';
export default {
    components: {
        Navbar, Footer, FlyingButton
    },
    data() {
        return {
            isCopied: false,
            breadcrumbs: [
                { name_en: 'News & Article', name: 'Berita & Artikel', link: '/news' },
                { name_en: 'Activity', name: 'Kegiatan', link: '/' },
                { name_en: 'Yuk Intip Keseruan Bali with JF Bestie!', name: 'Yuk Intip Keseruan Bali with JF Bestie!', link: '/news/id' },
            ],
            NewsDetail: {
                // title: 'Yuk Intip Keseruan Bali with JF Bestie!',
                // image_url: require('@/assets/images/news/bali.png'),
                // date: '18-10-2023',
                // category: 'Kegiatan',
                // category_en: 'Activity',
                // content: {
                //     paragraph_1: 'Siapa sih yang menolak liburan gratis ke Bali? Bali, pulau eksotis di Indonesia, selalu menjadi destinasi yang menarik perhatian para wisatawan dari seluruh penjuru dunia. Sudah tentu Bali menawarkan keindahan alam, budaya, destinasi wisata menarik, dan berbagai permainan air seperti banana boat, parasailing, dan lainnya.',
                //     paragraph_2: 'Hal yang lebih menarik lagi, pemenang Bali with JF Bestie liburan gratis selama 3 hari 2 malam.Setelah diumumkan kompetisi video review JF Acne Series, terpilih 5 pemenang diantaranya @erikaaaaanf, @sherlyamanda, @atikahnrsyfa, @/Iniakunitaa_, @Erikafbrnt_ dengan berbagai macam profesi dari guru, pendaki gunung, mahasiswa S2, konten kreator dan petugas rumah sakit.',
                //     paragraph_3: 'Sebelum keberangkatan ke Bali, para pemenang disambut oleh Tim JF di kantor pusat Galenium Pharmasia Laboratories, Jakarta Selatan. Kemudian dilanjutkan mendengarkan sambutan oleh Head Div. Marketing, Anna Mariana dengan setelah penyerahan hadiah berupa produk JF, ditutup dengan makan malam bersama.',
                //     paragraph_4: 'Kelima pemenang sangat antusias menyambut hari keberangkatannya ke Bali bersama JF. Pada tanggal 25 September 2023, sesampainya di Bali, para pemenang mengunjungi Bintang Supermarket Seminyak dimana lokasi tersebut menjual rangkaian produk JF Acne Series lengkap. Setelah makan siang, para pemenang bersepeda di Sanur lalu ke villa untuk beristirahat.',
                //     image_url: require('@/assets/images/news/bali.png'),
                //     image_caption: 'Foto Bersama.',
                // }
            },
            description: '',
            description_en: '',
            PopularNews: [
                {
                    id: 1,
                    title: 'Caladine Top Brand 2014',
                    image_url: require('@/assets/images/news/topbrand.jpeg'),
                },
            ],
            RelatedNews: [
                { id: 1, title: 'Caladine Top Brand 2014' },
            ],
            LatestNews: [
                { id: 1, title: 'Caladine Top Brand 2014' },
            ],
        }
    },
    methods: {
        share(platform) {
            switch (platform) {
                case "whatsapp":
                    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(this.NewsDetail.title)} ${encodeURIComponent(window.location.href)}`);
                    break;
                case "telegram":
                    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(this.NewsDetail.title)}`);
                    break;
                case "facebook":
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(this.NewsDetail.title)}`);
                    break;
                case "copy":
                    this.copyToClipboard(window.location.href);
                    break;
            }
        },
        copyToClipboard(text) {
            const elem = document.createElement('textarea');
            elem.value = text;
            document.body.appendChild(elem);
            elem.select();
            document.execCommand('copy');
            document.body.removeChild(elem);
            this.aftercopy()
        },
        aftercopy() {
            this.isCopied = true;
            setTimeout(() => {
                this.isCopied = false;
            }, 2000);
        },
        modifyUrl(url) {
            let endpoint = url;
            endpoint = endpoint.replace('oembed', 'iframe');
            endpoint = endpoint.replace('&lt;', '<');
            endpoint = endpoint.replace('&gt;', '>');
            endpoint = endpoint.replace('url', 'src');
            endpoint = endpoint.replace('watch?v=', 'embed/');
            endpoint = endpoint.replace('oembed', 'iframe');
            return endpoint;
        },
        getData(id) {
            this.$store.dispatch('news/getById', { id: id, status: 'live' }).then(data => {
                this.NewsDetail = data
                let desc = this.modifyUrl(data.description)
                // desc = desc.replace('&lt;', '<')
                // desc = desc.replace('&gt;', '>')
                // desc = desc.replace('&lt;', '<')
                // desc = desc.replace('&gt;', '>')
                this.description = desc
                let desc_en = this.modifyUrl(data.description_en)
                // desc_en = desc_en.replace('&lt;', '<')
                // desc_en = desc_en.replace('&gt;', '>')
                // desc_en = desc_en.replace('&lt;', '<')
                // desc_en = desc_en.replace('&gt;', '>')
                this.description_en = desc_en
                // if (data.image_url_detail) {
                //     if (data.image_url_detail.length > 0) {
                //         this.image_url_detail = data.image_url_detail
                //     }
                // }

                // breadcrumbs: [
                //     { name: 'Produk Kesehatan', link: '/product/type1' },
                //     { name: 'Perawatan Tubuh', link: '/' },
                //     { name: 'Gatal & Biang Keringat', link: '/' },
                //     { name: 'Caladine', link: '/product/type1/id' },
                // ],

                // breadcrumbs: [
                //     { name_en: 'News & Article', name: 'Berita & Artikel', link: '/news' },
                //     { name_en: 'Activity', name: 'Kegiatan', link: '/' },
                //     { name_en: 'Yuk Intip Keseruan Bali with JF Bestie!', name: 'Yuk Intip Keseruan Bali with JF Bestie!', link: '/news/id' },
                // ],
                this.breadcrumbs = [
                    { name_en: 'News & Article', name: 'Berita & Artikel', link: '/news' },
                    { name_en: 'Activity', name: 'Artikel', link: '/news' },
                    { name_en: data.title_en, name: data.title, link: `/news/detail/${this.$route.params.id}` },
                ]
            })
        },
    },
    mounted() {
        if (this.$route.params.id) {
            this.getData(this.$route.params.id)
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

<style>
.ckeditor-custom ol {
    list-style: decimal;
    margin-left: 50px
}

.ckeditor-custom ul {
    list-style: initial;
    margin-left: 50px
}

figure.media {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    /* Assuming a 16:9 aspect ratio, adjust if necessary */
}

figure.media iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.ckeditor-custom blockquote {
    border-left: 5px solid #ccc;
    font-style: italic;
    margin-left: 0;
    margin-right: 0;
    overflow: hidden;
    padding-left: 1.5em;
    padding-right: 1.5em;
}

.ckeditor-custom .table table {
    border: 1px double #b3b3b3;
    border-collapse: collapse;
    border-spacing: 0;
    height: 100%;
    width: 100%;
}
</style>