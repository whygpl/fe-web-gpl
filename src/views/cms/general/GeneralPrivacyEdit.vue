<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="General-Privacy" />
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
                <div class="collapse-title bg-gal-grey text-base font-medium">
                  <div class="ql-editor" style="padding: 0;">
                    <div v-html="item.title + ' | ' + item.title_en" style=" display: flex; flex-direction: row;">
                    </div>
                  </div>
                </div>
                <div class="collapse-content bg-white">
                  <label class="label">
                    <span class="label-text">Judul</span>
                  </label>
                  <div class="min-h-16">
                    <QuillEditor contentType="html" v-model:content="item.title" :options="optionsTitle"
                      placeholder="Judul" theme="snow" />
                  </div>
                  <label class="label">
                    <span class="label-text">Judul EN</span>
                  </label>
                  <div class="min-h-16">
                    <QuillEditor contentType="html" v-model:content="item.title_en" :options="optionsTitle"
                      placeholder="Judul EN" theme="snow" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-default" @click.prevent="addParagraph(index)">+ Tambah Paraghraph</button>
                  </div>
                  <template v-for="(itemd, indexd) in item.description">
                    <label class="label">
                      <span class="label-text">Paragraph</span>
                    </label>
                    <div class="min-h-16">
                      <QuillEditor contentType="html" v-model:content="itemd.name" :options="options"
                        placeholder="Paragraph" theme="snow" />
                    </div>
                    <label class="label">
                      <span class="label-text">Paragraph EN</span>
                    </label>
                    <div class="min-h-16">
                      <QuillEditor contentType="html" v-model:content="itemd.name_en" :options="options"
                        placeholder="Paragraph EN" theme="snow" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-default" @click.prevent="addList(index, indexd)">+ Tambah List</button>
                    </div>
                    <label class="label">
                      <span class="label-text">Paragraph List</span>
                    </label>
                    <template v-for="(iteml, indexd) in itemd.list">
                      <div class="flex carousel w-full">
                        <div class="w-1/2">
                          <QuillEditor contentType="html" v-model:content="iteml.name" :options="optionsTitle"
                            placeholder="List" theme="snow" />
                        </div>
                        <div class="w-1/2">
                          <QuillEditor contentType="html" v-model:content="iteml.name_en" :options="optionsTitle"
                            placeholder="List EN" theme="snow" />
                        </div>
                      </div>
                    </template>
                  </template>
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
            <!-- <router-link :to="{ name: 'PrivacyPoliceViewPreview' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'PrivacyPoliceView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
  name: 'CMSGeneralPrivacyEdit',
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
        contact: '',
        youtube_url: '',
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
      addRow.push({ id: '', title: '', title_en: '', description: [] })
    },
    DeleteItem(index) {
      this.form.contact.splice(index, 1)
    },
    addParagraph(index) {
      var addRow = this.form.contact[index].description
      addRow.push({ id: '', name: '', name_en: '', list: [] })
    },
    addList(indexd, indexl) {
      var addRow = this.form.contact[indexd].description[indexl].list
      addRow.push({ id: '', name: '', name_en: '' })
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('generalcms/formPrivacyPostPut', formData)
        .then(res => {
          this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
          if (localStorage.getItem('privacylive')) {
            this.$store.dispatch('general/getExtra', { id: 8, status: 'live' }).then(data => {
              localStorage.setItem('privacylive', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('general/getExtra', { id: 8, status: 'live' }).then(data => {
              localStorage.setItem('privacylive', JSON.stringify(data))
            })
          }
          if (localStorage.getItem('privacypreview')) {
            this.$store.dispatch('general/getExtra', { id: 8, status: 'preview' }).then(data => {
              localStorage.setItem('privacypreview', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('general/getExtra', { id: 8, status: 'preview' }).then(data => {
              localStorage.setItem('privacypreview', JSON.stringify(data))
            })
          }
        },
          err => {
            this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
          })
    },
    getData(id) {
      this.$store.dispatch('generalcms/getPrivacy').then(data => {
        console.log(data)
        this.form.page = data['pages']
        this.form.page_en = data['page_en']
        this.form.contact = data['contact']
      })
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('generalcms/getPrivacy')
  },
  setup() {
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>