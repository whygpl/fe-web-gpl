<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="CR-CareerCategory" />
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
                <span class="label-text">Judul | Maksimal Karakter 100</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title" :options="optionsTitle" placeholder="Judul"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 100 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title_en" :options="optionsTitle"
                placeholder="Judul EN" theme="snow" />
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
          </div>
          <div class="mt-10">
            <button class="btn btn-primary" @click.prevent="saveData()">Simpan</button>
            <!-- <router-link :to="{ name: 'CareerPreviewView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'CareerView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
  name: 'BusinessDistributorEdit',
  components: { Navbar, Menu, Footer, QuillEditor },
  data() {
    return {
      options: {
        debug: 'info',
        modules: {
          toolbar: [
            [{ 'align': [] }],
            [{ 'color': [] }],
          ]
        },
        theme: 'snow'
      },
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
        id: '',
        title: '',
        title_en: '',
        save_as: 'live',
        img_url: '',
        img_url: '', setImage: 'none', imageUrl: null,
      },
      regData: []
    }
  },
  computed: {
    ...mapState({
      items: state => state.careercms.items
    }),
  },
  methods: {
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('careercms/formCategoryPostPut', formData)
        .then(res => {
          this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
          if (localStorage.getItem('careerpreview')) {
            this.$store.dispatch('career/get', 'preview').then(data => {
              localStorage.setItem('careerpreview', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('career/get', 'preview').then(data => {
              localStorage.setItem('careerpreview', JSON.stringify(data))
            })
          }
          if (localStorage.getItem('careerlive')) {
            this.$store.dispatch('career/get', 'live').then(data => {
              localStorage.setItem('careerlive', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('career/get', 'live').then(data => {
              localStorage.setItem('careerlive', JSON.stringify(data))
            })
          }
        },
          err => {
            this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
          })
    },
    addItem() {
      var addRow = this.form.m_item.data
      addRow.push({ address: '', name: '' })
    },
    addItemEN() {
      var addRow = this.form.m_item_en.data
      addRow.push({ address: '', name: '' })
    },
    getData(id) {
      this.$store.dispatch('careercms/getCategoryId', id).then(data => {
        this.form.id = data['id']
        this.form.title = data['title']
        this.form.title_en = data['title_en']
      })
    },
    inputImageRenderer(e) {
      const file = e.target.files[0]
      this.form.img_url = file
      this.form.setImage = 'upload'
      this.form.imageUrl = URL.createObjectURL(e.target.files[0])
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.getData(this.$route.params.id)
    }
  },
  setup() {
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>