<template>
    <div class="static">
        <Navbar active_menu="news" />
        <section class="px-4 pb-10 pt-20 font-roboto md:px-0 md:pt-32">
            <div class="container mx-auto">

                <!-- breadcrumbs -->
                <div class="breadcrumbs mt-4 font-roboto text-lg">
                    <ul>
                        <li v-for="(item, index) in breadcrumbs" :key="index">
                            <router-link :to="item.link" class="flex items-center text-gal-grey-dark gap-2" :class="(index + 1) == breadcrumbs.length ? 'text-primary font-[700]' : ''">{{ getLocale == 'EN' ? item.name_en : item.name }}</router-link>
                        </li>
                    </ul>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-8 md:divide-x-2 md:divide-slate-400/50">

                    <div class="h-full md:col-span-4 mr-8">
                        <div class="gal-title">{{ NewsDetail.title }}</div>
                        <div class="mt-2 flex items-center gap-4 md:mt-8 md:gap-8">
                            <div class="flex">
                                <div class="relative-blockquote before:bg-gal-grey-dark"></div>
                                <div class="text-sm font-[500] text-gal-grey-dark md:text-base">{{ NewsDetail.date }}</div>
                            </div>
                            <div class="flex gap-2 md:gap-4">
                                <button class="btn btn-warning rounded-none">{{ getLocale == 'EN' ? NewsDetail.category_en : NewsDetail.category }}</button>
                                <label for="modal_share_news" class="btn-outline-secondary btn grid place-content-center rounded-none">
                                    <div class="flex items-center justify-center">
                                        <font-awesome-icon icon="fa-solid fa-share-nodes" class="mr-3"/>
                                        <span>{{ getLocale == 'EN' ? 'Share' : 'Bagikan' }}</span>
                                    </div>
                                </label>
                                <input type="checkbox" id="modal_share_news" class="modal-toggle" />
                                <!-- modal share news -->
                                <div class="modal modal-bottom w-full md:modal-middle">
                                    <div class="modal-box max-w-5xl">
                                        <div class="divider">{{ getLocale == 'EN' ? 'Share News' : 'Bagikan Berita' }}</div>
                                        <div class="mt-8 flex w-full flex-wrap gap-2">
                                            <a @click.prevent="share('whatsapp')" class="btn btn-success btn-sm text-white">
                                                <font-awesome-icon icon="fa-brands fa-whatsapp"/> Whatsapp
                                            </a>
                                            <a @click.prevent="share('telegram')" class="btn btn-info btn-sm text-white">
                                                <font-awesome-icon icon="fa-brands fa-telegram" /> Telegram
                                            </a>
                                            <a @click.prevent="share('facebook')" class="btn btn-primary btn-sm">
                                                <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
                                            </a>
                                            <a @click.prevent="share('copy')" class="btn btn-sm">
                                                <font-awesome-icon icon="fa-regular fa-clipboard" /> {{ isCopied ? 'Copied' : 'Copy'  }}
                                            </a>
                                        </div>
                                        <label for="modal_share_news" class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 font-[900] leading-[100%]">✕</label>
                                    </div>
                                    <label class="modal-backdrop" for="modal_share_news">Close</label>
                                </div>
                            </div>
                        </div>
                        <div class="my-3 aspect-video w-full md:my-8">
                            <img :src="NewsDetail.image_url" alt="" class="onject-center h-full w-full object-cover">
                        </div>
                        <div class="gal-items text-justify md:text-left">{{ NewsDetail.content.paragraph_1 }}</div>
                        <div class="gal-items mt-2 text-justify md:mt-3 md:text-left">{{ NewsDetail.content.paragraph_2 }}</div>
                        <div class="mt-2 grid grid-cols-1 md:mt-4 md:grid-cols-3 md:gap-x-8">
                            <div>
                                <img :src="NewsDetail.content.image_url" alt="" class="aspect-square w-full object-cover object-center">
                                <div class="text-xs italic text-gal-grey-dark">{{ NewsDetail.content.image_caption }}</div>
                            </div>
                            <div class="gal-items col-span-2 mt-2 text-justify md:mt-0 md:text-left">{{ NewsDetail.content.paragraph_3 }}</div>
                        </div>
                        <div class="gal-items mt-2 text-justify md:mt-3 md:text-left">{{ NewsDetail.content.paragraph_4 }}</div>
                    </div>

                    <div class="h-full px-0 md:col-span-2 md:pl-8">
                        <section class="mt-4 grid grid-flow-row grid-cols-1 ml-5 gap-2 divide-y divide-gray-400/50 md:mt-0 md:gap-4 md:divide-y-2">
                            <div class="text-xl font-[900] text-primary md:text-2xl">{{ getLocale == 'EN' ? 'Popular News' : 'Berita Populer' }}</div>
                            <div class="grid grid-cols-1 gap-y-3 pt-3 md:grid-cols-1 md:gap-5 md:pt-5">
                                <div v-for="(item, index) in PopularNews" :key="index" class="group flex cursor-pointer items-center gap-4">
                                    <img :src="item.image_url" alt="" class="aspect-square w-[50px] md:w-[80px]">
                                    <div class="line-clamp-2 font-roboto text-sm font-[500] text-gal-grey-darker group-hover:text-primary md:line-clamp-3 md:text-base">{{ item.title }}</div>
                                </div>
                            </div>
                        </section>
                        <section class="mt-6 grid grid-flow-row grid-cols-1 ml-5 gap-2 divide-y divide-gray-400/50 md:mt-10 md:gap-4 md:divide-y-2">
                            <div class="text-xl font-[900] text-primary md:text-2xl">{{ getLocale == 'EN' ? 'Related News' : 'Berita Terkait' }}</div>
                            <div class="grid grid-cols-1 divide-y divide-gray-400/50 md:grid-cols-1 md:divide-y-2">
                                <div v-for="(item, index) in RelatedNews" :key="index" class="line-clamp-2 cursor-pointer py-3 font-roboto text-sm font-[500] text-gal-grey-darker hover:text-primary md:line-clamp-3 md:py-4 md:text-base">{{ item.title }}</div>
                            </div>
                        </section>
                        <section class="mt-6 grid grid-flow-row grid-cols-1 ml-5 gap-2 divide-y divide-gray-400/50 md:mt-10 md:gap-4 md:divide-y-2">
                            <div class="text-xl font-[900] text-primary md:text-2xl">{{ getLocale == 'EN' ? 'Latest News' : 'Berita Terbaru' }}</div>
                            <div class="grid grid-cols-1 divide-y divide-gray-400/50 md:grid-cols-1 md:divide-y-2">
                                <div v-for="(item, index) in LatestNews" :key="index" class="line-clamp-2 cursor-pointer py-3 font-roboto text-sm font-[500] text-gal-grey-darker hover:text-primary md:line-clamp-3 md:py-4 md:text-base">{{ item.title }}</div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
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
            isCopied: false,
            breadcrumbs: [
                { name_en: 'News & Article', name: 'Berita & Artikel', link: '/news' },
                { name_en: 'Activity', name: 'Kegiatan', link: '/' },
                { name_en: 'Caladine Top Brand 2014', name: 'Caladine Top Brand 2014', link: '/news/id' },
            ],
            NewsDetail: {
                title: 'Caladine Top Brand 2014',
                image_url: require('@/assets/images/news/topbrand.jpeg'),
                date: '06-10-2017',
                category: 'Kegiatan',
                category_en: 'Activity',
                content: {
                    paragraph_1: 'Caladine kembali dipercaya menjadi Top Brand 2014 untuk kategori bedak kesehatan.Prestasi ini berhasil Caladine capai sebanyak 8 kali berturut-turut dari tahun 2007 hingga tahun 2014.Tentu bukan hal yang mudah untuk mempertahankannya, namun yang terutama bukanlah penghargaannya tetapi kepuasan dan kepercayaan masyarakat adalah hal terpenting bagi Caladine.',
                    paragraph_2: 'Untuk meningkatkan Brand Awareness dan kepuasan pelanggan terhadap produk Caladine, tim brand Caladine terus melakukan promosi baik di media cetak dan elektronik seperti iklan di majalah, roadshow talkshow, kuis jingle Caladine dan iklan di radio. Berbagai Consumer Promo dan Program Trade Marketing dilakukan  Caladine agar tercipta ikatan yang kuat dan meningkatkan hubungan baik dengan pihak distributor, outlet dan konsumen.',
                    paragraph_3: 'Sejalan dengan itu, Caladine sangat mendukung perkembangan pendidikan anak di Indonesia. Salah satunya melalui pembukaan establishment Caladine Medicated Powder Factory di Kidzania Jakarta sejak 3 Juli 2013. Di sini anak-anak mendapat kesempatan untuk menjalani peran profesi sebagai pekerja pabrik bedak, sehingga diharapkan mereka lebih mengenal Caladine baik dari bahan baku, proses produksi yang higienis hingga siap didistribusikan ke pasar.',
                    paragraph_4: 'Roadshow Caladine to Kindergarden juga menjadi salah satu agenda Caladine di tahun 2013.pada kesempatan ini diharapkan sejak usia dini anak dapat belajar mengenaicara menjaga dan merawat agar kulit tetap sehat. Semoga Caladine tetap menjadi pilihan pertama dan terpercaya oleh masyarakat untuk mendapatkan Top Brand di tahun-tahun berikutnya.',
                    image_url: require('@/assets/images/news/topbrand.jpeg'),
                    image_caption: 'Foto Bersama.',
                }
            },
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