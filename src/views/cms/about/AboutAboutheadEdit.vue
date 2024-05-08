<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Aboutus-Abouthead" />
    </div>
    <!-- Main Content -->
    <div class="flex-1">
      <!-- Header Nav -->
      <div class="bg-white rounded-box m-4">
        <Navbar />
      </div>
      <!-- Content -->
      <div class="bg-white p-8 m-4 min-h-screen rounded-box place-items-center">
        <div class="flex flex-col w-full">
          <div class="w-full">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.page_title" :options="optionsTitle"
                placeholder="Judul" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.page_title_en" :options="optionsTitle"
                placeholder="Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub | Maksimal Karakter 150 Judul</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title" :options="optionsTitle"
                placeholder="Sub Judul " theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub | Maksimal Karakter 150 Judul EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title_en" :options="optionsTitle"
                placeholder="Sub Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Youtube URL</span>
              </label>
              <input type="text" v-model="form.youtube_url" maxlength="255" placeholder="Youtube URL"
                class="input input-bordered w-full" />
            </div>
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Simpan Sebagai</span>
            </label>
            <select v-model="form.save_as" class="select select-bordered" disabled>
              <option value="preview">Draft Review</option>
              <option value="live">Go Live</option>
            </select>
          </div>
          <div class="mt-10">
            <button class="btn btn-primary" @click.prevent="saveData()">Simpan</button>
            <!-- <router-link :to="{ name: 'AboutPreviewView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'AboutView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
                (Live)</button></router-link>
          </div>
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
import { mapState } from 'vuex'
import { QuillEditor } from '@vueup/vue-quill'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'AboutAboutheadEdit',
  components: { Navbar, Menu, Footer, QuillEditor },
  data() {
    return {
      optionsTitle: {
        debug: 'info',
        modules: {
          toolbar: [
            [{ 'color': [] }],
          ]
        },
        theme: 'snow'
      },
      form: {
        page_title: '',
        page_title_en: '',
        title: '',
        title_en: '',
        youtube_url: '',
        save_as: 'live',
      },
      regData: []
    }
  },
  computed: {
    ...mapState({
      items: state => state.aboutcms.items
    }),
  },
  methods: {
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('aboutcms/formAboutPostPut', formData)
        .then(res => {
          this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
          this.$store.dispatch('about/getAll', 'preview')
          if (localStorage.getItem('aboutpreview')) {
            this.getLocalAbout = JSON.parse(localStorage.getItem('aboutpreview'))
          } else {
            this.getLocalAbout = this.about
            this.$store.dispatch('about/getAll', 'preview')
          }
          this.$store.dispatch('about/getAll', 'live')
          if (localStorage.getItem('aboutlive')) {
            this.getLocalAbout = JSON.parse(localStorage.getItem('aboutlive'))
          } else {
            this.getLocalAbout = this.about
            this.$store.dispatch('about/getAll', 'live')
          }
          if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
          } else {
            this.getLocale = 'ID'
          }
        },
          err => {
            this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
          })
    },
    getData(id) {
      this.$store.dispatch('aboutcms/getAbout').then(data => {
        console.log(data)
        this.form.page_title = data['page_title']
        this.form.page_title_en = data['page_title_en']
        this.form.title = data['title']
        this.form.title_en = data['title_en']
        this.form.youtube_url = data['youtube_url']
      })
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('aboutcms/getAbout')
  },
  setup() {
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>