<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="CR-CareerList" />
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
              <label class="label">Pilih Posisi</label>
              <select v-model="form.career_category_id" class="select select-bordered">
                <option v-for="(item, index) in dataCategory" :value="item.id" :key="index">{{ item.title?.replace(/<[^>]*>/g, '') }} </option>
              </select>
            </div>
            <div class="form-control max-w-xs">
              <label class="label">
                <span class="label-text">Batas Lamar</span>
              </label>
              <input type="date" v-model="form.deadline" placeholder="Batas Lamar"
                class="input input-bordered w-full" />
            </div>
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
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <template v-for="(item, index) in form.description">
                <QuillEditor contentType="html" v-model:content="item.name" :options="options" placeholder="Deskripsi"
                  theme="snow" />
              </template>
              <div class="mt-2">
                <button class="btn btn-default" @click.prevent="addItem()">+ Tambah Baris</button>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>

              <template v-for="(item, index) in form.description_en">
                <QuillEditor contentType="html" v-model:content="item.name" :options="options"
                  placeholder="Deskripsi EN" theme="snow" />
              </template>
              <div class="mt-2">
                <button class="btn btn-default" @click.prevent="addItemEN()">+ Tambah Baris</button>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Requirement</span>
              </label>

              <template v-for="(item, index) in form.requierement">
                <QuillEditor contentType="html" v-model:content="item.name" :options="options" placeholder="Requirement"
                  theme="snow" />
              </template>
              <div class="mt-2">
                <button class="btn btn-default" @click.prevent="addReq()">+ Tambah Baris</button>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Requirement EN</span>
              </label>

              <template v-for="(item, index) in form.requierement_en">
                <QuillEditor contentType="html" v-model:content="item.name" :options="options"
                  placeholder="Requirement EN" theme="snow" />
              </template>
              <div class="mt-2">
                <button class="btn btn-default" @click.prevent="addReqEN()">+ Tambah Baris</button>
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
          </div>
          <div class="mt-10">
            <button class="btn btn-primary" @click.prevent="saveData()">Simpan</button>
            <!-- <router-link :to="{ name: 'CareerPreviewView' }"><button class="btn btn-neutral ml-2">Lihat
                Perubahan</button></router-link> -->
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
        deadline: '',
        title: '',
        title_en: '',
        subtitle: '',
        subtitle_en: '',
        description: [{ id: '', name: '' }],
        description_en: [{ id: '', name: '' }],
        requierement: [{ id: '', name: '' }],
        requierement_en: [{ id: '', name: '' }],
        save_as: 'live',
        img_url: '',
        img_url: '', setImage: 'none', imageUrl: null,
        career_category_id: '',
      },
      regData: [],
      dataCategory: []
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
      if (this.form.title != "") {
        this.$store.dispatch('careercms/formJoinPostPut', formData)
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
      } else {
        this.notification(
          "Failed :",
          "The form must be filled in",
          "bg-red-500",
          "white",
          "50"
        );
      }
    },
    addItem() {
      var addRow = this.form.description
      addRow.push({ id: '', name: '' })
    },
    addItemEN() {
      var addRow = this.form.description_en
      addRow.push({ id: '', name: '' })
    },
    addReq() {
      var addRow = this.form.requierement
      addRow.push({ id: '', name: '' })
    },
    addReqEN() {
      var addRow = this.form.requierement_en
      addRow.push({ id: '', name: '' })
    },
    getData(id) {
      this.$store.dispatch('careercms/getCareerId', id).then(data => {
        console.log("data", data);
        this.form.id = data['id']
        this.form.career_category_id = data['career_categorys_id']
        this.form.deadline = data['deadline']
        this.form.title = data['title']
        this.form.title_en = data['title_en']
        this.form.subtitle = data['subtitle']
        this.form.subtitle_en = data['subtitle_en']
        this.form.description = data['description']
        this.form.description_en = data['description_en']
        this.form.requierement = data['requierement']
        this.form.requierement_en = data['requierement_en']
      })
    },
    getDataCategory() {
      this.$store.dispatch('careercms/getCategory').then(data => {

        this.dataCategory = data
      })
      // this.$store.dispatch('careercms/getCategory').then(data => {
      //   this.rows = data
      //   this.rows.forEach(function (element,index) {
      //     element.no = index+1
      //   })
      // })
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
    this.getDataCategory()
  },
  setup() {
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>