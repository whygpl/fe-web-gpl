<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="General-FAQ" />
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
                <span class="label-text"><b>Notes</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title" :options="optionsTitle" placeholder="Notes"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text"><b>Notes</b></span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title_en" :options="optionsTitle"
                placeholder="Notes EN" theme="snow" />
            </div>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text"><b>Konten</b></span>
            </label>
            <template v-for="(item, index) in form.contact">
              <div class="collapse collapse-arrow rounded bg-base-200">
                <div class="mt-2">
                  <button class="btn btn-sm btn-default bg-error" @click.prevent="DeleteItem(index)">- Hapus</button>
                </div>
                <input type="checkbox" />
                <div class="collapse-title bg-gal-grey text-base font-medium">{{ item.question }}</div>
                <div class="collapse-content bg-white">
                  <label class="label">
                    <span class="label-text">Pertanyaan</span>
                  </label>
                  <div class="min-h-16">
                    <QuillEditor contentType="html" v-model:content="form.question" :options="optionsTitle"
                      placeholder="Pertanyaan" theme="snow" />
                  </div>
                  <label class="label">
                    <span class="label-text">Pertanyaan EN</span>
                  </label>
                  <div class="min-h-16">
                    <QuillEditor contentType="html" v-model:content="form.question_en" :options="optionsTitle"
                      placeholder="Pertanyaan EN" theme="snow" />
                  </div>
                  <label class="label">
                    <span class="label-text">Jawaban</span>
                  </label>
                  <div class="min-h-16">
                    <QuillEditor contentType="html" v-model:content="form.answer" :options="options"
                      placeholder="Jawaban" theme="snow" />
                  </div>
                  <label class="label">
                    <span class="label-text">Jawaban EN</span>
                  </label>
                  <div class="min-h-16">
                    <QuillEditor contentType="html" v-model:content="form.answer_en" :options="options"
                      placeholder="Jawaban EN" theme="snow" />
                  </div>
                </div>
              </div><br>
            </template>
            <div class="mt-2">
              <button class="btn btn-default" @click.prevent="addItem()">+ Tambah Baris</button>
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
            <!-- <router-link :to="{ name: 'FAQViewPreview' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'FAQView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
  name: 'CMSGeneralFAQEdit',
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
    addItem() {
      var addRow = this.form.contact
      addRow.push({ id: '', question: '', question_en: '', answer: '', answer_en: '' })
    },
    DeleteItem(index) {
      this.form.contact.splice(index, 1)
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('generalcms/formFAQPostPut', formData)
        .then(res => {
          this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
          if (localStorage.getItem('faqlive')) {
            this.$store.dispatch('general/getExtra', { id: 11, status: 'live' }).then(data => {
              localStorage.setItem('faqlive', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('general/getExtra', { id: 11, status: 'live' }).then(data => {
              localStorage.setItem('faqlive', JSON.stringify(data))
            })
          }
          if (localStorage.getItem('faqpreview')) {
            this.$store.dispatch('general/getExtra', { id: 11, status: 'preview' }).then(data => {
              localStorage.setItem('faqpreview', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('general/getExtra', { id: 11, status: 'preview' }).then(data => {
              localStorage.setItem('faqpreview', JSON.stringify(data))
            })
          }
        },
          err => {
            this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
          })
    },
    getData(id) {
      this.$store.dispatch('generalcms/getFaq').then(data => {
        console.log(data)
        this.form.page = data['pages']
        this.form.page_en = data['page_en']
        this.form.title = data['title']
        this.form.title_en = data['title_en']
        this.form.contact = data['contact']
      })
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('generalcms/getFaq')
  },
  setup() {
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>