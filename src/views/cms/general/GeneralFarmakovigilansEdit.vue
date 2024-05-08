<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="General-Farma" />
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
                <span class="label-text"><b>Page</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.page" :options="optionsTitle" placeholder="Page"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text"><b>Page EN</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.page_en" :options="optionsTitle"
                placeholder="Page EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text"><b>Paragraph 1</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.paragraph_1" :options="options"
                placeholder="Paragraph 1" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text"><b>Paragraph 1 EN</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.paragraph_en_1" :options="options"
                placeholder="Paragraph 1 EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text"><b>Paragraph 2</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.paragraph_2" :options="options"
                placeholder="Paragraph 2" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text"><b>Paragraph 2 EN</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.paragraph_en_2" :options="options"
                placeholder="Paragraph 2 EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text"><b>Paragraph 3</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.paragraph_3" :options="options"
                placeholder="Paragraph 3" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text"><b>Paragraph 3 EN</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.paragraph_en_3" :options="options"
                placeholder="Paragraph 3 EN" theme="snow" />
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
            <!-- <router-link :to="{ name: 'FarmakovigilansViewPreview' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'FarmakovigilansView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
  name: 'CMSGeneralFarmaEdit',
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
        page: '',
        page_en: '',
        title: '',
        title_en: '',
        paragraph_1: '',
        paragraph_en_1: '',
        paragraph_2: '',
        paragraph_en_2: '',
        paragraph_3: '',
        paragraph_en_3: '',
        contact: '',
        save_as: 'live',
      },
      regData: []
    }
  },
  computed: {
    ...mapState({
      items: state => state.generalcms.items
    }),
  },
  methods: {
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('generalcms/formFarmaPostPut', formData)
        .then(res => {
          this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
          if (localStorage.getItem('farmalive')) {
            this.$store.dispatch('general/getExtra', { id: 10, status: 'live' }).then(data => {
              localStorage.setItem('farmalive', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('general/getExtra', { id: 10, status: 'live' }).then(data => {
              localStorage.setItem('farmalive', JSON.stringify(data))
            })
          }
          if (localStorage.getItem('farmapreview')) {
            this.$store.dispatch('general/getExtra', { id: 10, status: 'preview' }).then(data => {
              localStorage.setItem('farmapreview', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('general/getExtra', { id: 10, status: 'preview' }).then(data => {
              localStorage.setItem('farmapreview', JSON.stringify(data))
            })
          }
        },
          err => {
            this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
          })
    },
    getData(id) {
      this.$store.dispatch('generalcms/getFarma').then(data => {
        console.log(data)
        this.form.page = data['pages']
        this.form.page_en = data['page_en']
        this.form.paragraph_1 = data.contact['paragraph_1']
        this.form.paragraph_en_1 = data.contact['paragraph_en_1']
        this.form.paragraph_2 = data.contact['paragraph_2']
        this.form.paragraph_en_2 = data.contact['paragraph_en_2']
        this.form.paragraph_3 = data.contact['paragraph_3']
        this.form.paragraph_en_3 = data.contact['paragraph_en_3']
      })
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('generalcms/getFarma')
  },
  setup() {
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>