<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div class="bg-white w-64 space-y-6 px-2 py-4 pl-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out" :class="{ 'relative translate-x-0': showMenu }">
      <div style="
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 0.8rem
      ">
        <img src="@/assets/images/general/logo_galenium_navbar.png" alt="navbar_logo" width="150">
      </div>
      <ul class="menu">
        <li>
          <details open>
            <summary>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Beranda
            </summary>
            <ul>
              <router-link :to="{ name: 'CmsHomeSliderEdit' }">
                <li><a>Slider</a></li>
              </router-link>
              <router-link :to="{ name: 'CmsHomeAboutUsEdit' }">
                <li><a>About Us</a></li>
              </router-link>
              <li><a>Category Product</a></li>
              <li><a>Quality & Certified</a></li>
            </ul>
          </details>
        </li>
        <router-link :to="{ name: 'CmsHomeSliderEdit' }">
        <li>
          <a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Tentang Kami</a>
        </li>
        </router-link>
        <router-link :to="{ name: 'CmsProductList' }">
        <li>
          <a class="active"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19.7786 4.22171C22.1217 6.56486 22.1217 10.3639 19.7786 12.707L12.7075 19.7781C10.3643 22.1212 6.56535 22.1212 4.2222 19.7781C1.87906 17.4349 1.87906 13.6359 4.2222 11.2928L11.2933 4.22171C13.6364 1.87857 17.4354 1.87857 19.7786 4.22171ZM14.1224 15.5347L8.46555 9.87786L5.63642 12.707C4.07432 14.2691 4.07432 16.8018 5.63642 18.3638C7.19851 19.9259 9.73117 19.9259 11.2933 18.3638L14.1224 15.5347ZM18.3643 5.63593C16.8022 4.07383 14.2696 4.07383 12.7075 5.63593L9.87976 8.46365L15.5366 14.1205L18.3643 11.2928C19.9264 9.73069 19.9264 7.19803 18.3643 5.63593Z" /></svg>Produk</a>
        </li>
        </router-link>
        <router-link :to="{ name: 'CmsBusinessEdit' }">
        <li>
          <a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11.8611 2.39057C12.8495 1.73163 14.1336 1.71797 15.1358 2.35573L19.291 4.99994H20.9998C21.5521 4.99994 21.9998 5.44766 21.9998 5.99994V14.9999C21.9998 15.5522 21.5521 15.9999 20.9998 15.9999H19.4801C19.5396 16.9472 19.0933 17.9102 18.1955 18.4489L13.1021 21.505C12.4591 21.8907 11.6609 21.8817 11.0314 21.4974C10.3311 22.1167 9.2531 22.1849 8.47104 21.5704L3.33028 17.5312C2.56387 16.9291 2.37006 15.9003 2.76579 15.0847C2.28248 14.7057 2 14.1254 2 13.5109V6C2 5.44772 2.44772 5 3 5H7.94693L11.8611 2.39057ZM4.17264 13.6452L4.86467 13.0397C6.09488 11.9632 7.96042 12.0698 9.06001 13.2794L11.7622 16.2518C12.6317 17.2083 12.7903 18.6135 12.1579 19.739L17.1665 16.7339C17.4479 16.5651 17.5497 16.2276 17.4448 15.9433L13.0177 9.74551C12.769 9.39736 12.3264 9.24598 11.9166 9.36892L9.43135 10.1145C8.37425 10.4316 7.22838 10.1427 6.44799 9.36235L6.15522 9.06958C5.58721 8.50157 5.44032 7.69318 5.67935 7H4V13.5109L4.17264 13.6452ZM14.0621 4.04306C13.728 3.83047 13.3 3.83502 12.9705 4.05467L7.56943 7.65537L7.8622 7.94814C8.12233 8.20827 8.50429 8.30456 8.85666 8.19885L11.3419 7.45327C12.5713 7.08445 13.8992 7.53859 14.6452 8.58303L18.5144 13.9999H19.9998V6.99994H19.291C18.9106 6.99994 18.5381 6.89148 18.2172 6.68727L14.0621 4.04306ZM6.18168 14.5448L4.56593 15.9586L9.70669 19.9978L10.4106 18.7659C10.6256 18.3897 10.5738 17.9178 10.2823 17.5971L7.58013 14.6247C7.2136 14.2215 6.59175 14.186 6.18168 14.5448Z" /></svg>Bisnis</a>
        </li>
        </router-link>
        <router-link :to="{ name: 'CmsNewsList' }">
        <li>
          <a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path  d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM14 9H18V7H14V9ZM18 13H14V11H18V13ZM6 15V17L18 17V15L6 15Z" /></svg>Berita</a>
        </li>
        </router-link>
        <router-link :to="{ name: 'CmsHomeSliderEdit' }">
        <li>
          <a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 3C15.5523 3 16 3.44772 16 4V6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7C2 6.44772 2.44772 6 3 6H8V4C8 3.44772 8.44772 3 9 3H15ZM16 8H8V19H16V8ZM4 8V19H6V8H4ZM14 5H10V6H14V5ZM18 8V19H20V8H18Z" /></svg>Karier</a>
        </li>
        </router-link>
        <router-link :to="{ name: 'CmsHomeSliderEdit' }">
        <li>
          <a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" /></svg>General</a>
        </li>
        </router-link>
      </ul>
    </div>
    <!-- Main Content -->
    <div class="flex-1">
      <!-- Header Nav -->
      <div class="bg-white rounded-box m-4">
      <div class="navbar">
        <div class="flex-1">
          <button class="btn btn-square btn-ghost" @click="showMenu = !showMenu"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
          <a class="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <!-- Content -->
      <div class="bg-white p-8 m-4 min-h-screen rounded-box place-items-center">
        <div class="flex flex-col w-full">
          <vue-good-table
            :columns="columns"
            :rows="rows"/>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="flex flex-col w-full border-opacity-50">
    <Navbar />
    <Footer />
  </div> -->
</template>

<script>
import { ref } from 'vue'

import Navbar from '@/components/layout/cms/navbar/Navbar.vue'
import Menu from '@/components/layout/cms/menu/Menu.vue'
import Footer from '@/components/layout/cms/footer/Footer.vue'
import store from '@/store/index'
import { mapState } from 'vuex'
const { toast, snackbar } = require('tailwind-toast')
import { VueGoodTable } from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'

export default {
  name: 'CmsView',
  components: { Navbar, Menu, Footer, VueGoodTable },
  data () {
    return {
      form:{
        colour_1:'',
        title_1:'',
        title_en_1:'',
        description_1:'',
        description_en_1:'',
        colour_2:'',
        title_2:'',
        title_en_2:'',
        description_2:'',
        description_en_2:'',
        colour_3:'',
        title_3:'',
        title_en_3:'',
        description_3:'',
        description_en_3:'',
        save_as:'preview',
        img_url_lg_1: '',setImageLG_1:'none',imageUrlLG_1:null,
        img_url_lg_2: '',setImageLG_2:'none',imageUrlLG_2:null,
        img_url_lg_3: '',setImageLG_3:'none',imageUrlLG_3:null,
        img_url_md_1: '',setImageMD_1:'none',imageUrlMD_1:null,
        img_url_md_2: '',setImageMD_2:'none',imageUrlMD_2:null,
        img_url_md_3: '',setImageMD_3:'none',imageUrlMD_3:null,
        img_url_sm_1: '',setImageSM_1:'none',imageUrlSM_1:null,
        img_url_sm_2: '',setImageSM_2:'none',imageUrlSM_2:null,
        img_url_sm_3: '',setImageSM_3:'none',imageUrlSM_3:null,
      },
      regData:[]
    }
  },
  computed: {
    ...mapState({ 
      items: state => state.homecms.items,
      columns: state => state.homecms.products.columns,
      rows: state => state.homecms.products.rows
    }),
  },
  methods: {
    notification (a,b,c,d,e) {
      toast().default(a,b).with({shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e}).show()
    },
    saveData () {
      const formData = this.form 
      this.$store.dispatch('homecms/formPostPut', formData)
      .then(res => {
        this.notification('Success :','You have successfully','bg-green-500','white','50')
        this.$store.dispatch('home/getAll','preview')
        if (localStorage.getItem('homepreview')) {
          this.getLocalHome = JSON.parse(localStorage.getItem('homepreview'))
        } else {
          this.getLocalHome = this.home
          this.$store.dispatch('home/getAll','preview')
        }
        this.$store.dispatch('home/getAll','live')
        if (localStorage.getItem('homelive')) {
          this.getLocalHome = JSON.parse(localStorage.getItem('homelive'))
        } else {
          this.getLocalHome = this.home
          this.$store.dispatch('home/getAll','live')
        }

        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
      }, 
      err => {
        this.notification('Failed :','You have unsuccessful','bg-red-500','white','50')
      })
    },
    getData (id) {
      this.$store.dispatch('homecms/getAll').then(data => {
        this.form.colour_1 = data[0]['colour']
        this.form.title_1 = data[0]['title']
        this.form.title_en_1 = data[0]['title_en']
        this.form.description_1 = data[0]['description']
        this.form.description_en_1 = data[0]['description_en']
        this.form.colour_2 = data[1]['colour']
        this.form.title_2 = data[1]['title']
        this.form.title_en_2 = data[1]['title_en']
        this.form.description_2 = data[1]['description']
        this.form.description_en_2 = data[1]['description_en']
        this.form.colour_3 = data[2]['colour']
        this.form.title_3 = data[2]['title']
        this.form.title_en_3 = data[2]['title_en']
        this.form.description_3 = data[2]['description']
        this.form.description_en_3 = data[2]['description_en']
        this.form.imageUrlLG_1 = data[0]['image_url_lg']
        this.form.imageUrlLG_2 = data[1]['image_url_lg']
        this.form.imageUrlLG_3 = data[2]['image_url_lg']
        this.form.imageUrlMD_1 = data[0]['image_url_md']
        this.form.imageUrlMD_2 = data[1]['image_url_md']
        this.form.imageUrlMD_3 = data[2]['image_url_md']
        this.form.imageUrlSM_1 = data[0]['image_url_sm']
        this.form.imageUrlSM_2 = data[1]['image_url_sm']
        this.form.imageUrlSM_3 = data[2]['image_url_sm']
      })
    },
    inputImageRendererLG_1 (e) {
			const file = e.target.files[0]
			this.form.img_url_lg_1 = file
			this.form.setImageLG_1 = 'upload'
			this.form.imageUrlLG_1 = URL.createObjectURL(e.target.files[0])
		},
    inputImageRendererLG_2 (e) {
			const file = e.target.files[0]
			this.form.img_url_lg_2 = file
			this.form.setImageLG_2 = 'upload'
			this.form.imageUrlLG_2 = URL.createObjectURL(e.target.files[0])
		},
    inputImageRendererLG_3 (e) {
			const file = e.target.files[0]
			this.form.img_url_lg_3 = file
			this.form.setImageLG_3 = 'upload'
			this.form.imageUrlLG_3 = URL.createObjectURL(e.target.files[0])
		},
    inputImageRendererMD_1 (e) {
			const file = e.target.files[0]
			this.form.img_url_md_1 = file
			this.form.setImageMD_1 = 'upload'
			this.form.imageUrlMD_1 = URL.createObjectURL(e.target.files[0])
		},
    inputImageRendererMD_2 (e) {
			const file = e.target.files[0]
			this.form.img_url_md_2 = file
			this.form.setImageMD_2 = 'upload'
			this.form.imageUrlMD_2 = URL.createObjectURL(e.target.files[0])
		},
    inputImageRendererMD_3 (e) {
			const file = e.target.files[0]
			this.form.img_url_md_3 = file
			this.form.setImageMD_3 = 'upload'
			this.form.imageUrlMD_3 = URL.createObjectURL(e.target.files[0])
		},
    inputImageRendererSM_1 (e) {
			const file = e.target.files[0]
			this.form.img_url_sm_1 = file
			this.form.setImageSM_1 = 'upload'
			this.form.imageUrlSM_1 = URL.createObjectURL(e.target.files[0])
		},
    inputImageRendererSM_2 (e) {
			const file = e.target.files[0]
			this.form.img_url_sm_2 = file
			this.form.setImageSM_2 = 'upload'
			this.form.imageUrlSM_2 = URL.createObjectURL(e.target.files[0])
		},
    inputImageRendererSM_3 (e) {
			const file = e.target.files[0]
			this.form.img_url_sm_3 = file
			this.form.setImageSM_3 = 'upload'
			this.form.imageUrlSM_3 = URL.createObjectURL(e.target.files[0])
		}
  },
  mounted () {
    this.getData()
  },
  created () {
    this.$store.dispatch('homecms/getProduct')
  },
  setup() { 
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>