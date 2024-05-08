<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="General-Generalhead" />
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
                <span class="label-text">Whatapp Number</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.whatsapp_number" :options="optionsTitle"
                placeholder="Whatapp Number" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.email" :options="optionsTitle" placeholder="Email"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Store URL</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.store_url" :options="optionsTitle"
                placeholder="Store URL" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Instagram</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.instagram_url" :options="optionsTitle"
                placeholder="Instagram" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Youtube</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.youtube_url" :options="optionsTitle"
                placeholder="Youtube" theme="snow" />
            </div>
            <br>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#sectionOffice" @click="carouselChange2(1)" :class="item21 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Kantor Pusat</a>
              <a href="#sectionDitribution" @click="carouselChange2(2)" :class="item22 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Distributor Utama</a>
              <a href="#sectionFactory" @click="carouselChange2(3)" :class="item23 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Pabrik</a>
            </div>
            <div class="flex carousel w-full">
              <div id="sectionOffice" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Nama Kantor</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.office_name" :options="optionsTitle"
                      placeholder="Nama Kantor" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Nama Kantor EN</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.office_name_en" :options="optionsTitle"
                      placeholder="Nama Kantor EN" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Telepon Kantor</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.office_phone" :options="optionsTitle"
                      placeholder="Telepon Kantor" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Alamat Kantor Embed | *Google Maps Embed</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.office_map_embed" :options="options"
                      placeholder="Embed Alamat Kantor" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Alamat Kantor</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.office_address" :options="options"
                      placeholder="Alamat Kantor" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Alamat Kantor EN</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.office_address_en" :options="options"
                      placeholder="Alamat Kantor EN" theme="snow" />
                  </div>
                </div>
              </div>
              <div id="sectionDitribution" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Nama Distributor</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.distributor_name" :options="optionsTitle"
                      placeholder="Nama Distributor" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Nama Distributor EN</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.distributor_name_en" :options="optionsTitle"
                      placeholder="Nama Distributor EN" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Telepon Distributor</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.distributor_phone" :options="optionsTitle"
                      placeholder="Telepon Distributor" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Alamat Distributor Embed | *Google Maps Embed</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.distributor_map_embed" :options="optionsTitle"
                      placeholder="Embed Alamat Distributor" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Alamat Distributor</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.distributor_address" :options="options"
                      placeholder="Alamat Distributor" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Alamat Distributor EN</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.distributor_address_en" :options="options"
                      placeholder="Alamat Distributor EN" theme="snow" />
                  </div>
                </div>
              </div>
              <div id="sectionFactory" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Nama Pabrik</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.factory_name" :options="optionsTitle"
                      placeholder="Nama Pabrik" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Nama Pabrik EN</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.factory_name_en" :options="optionsTitle"
                      placeholder="Nama Pabrik EN" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Telepon Pabrik</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.factory_phone" :options="optionsTitle"
                      placeholder="Telepon Pabrik" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Alamat Pabrik Embed | *Google Maps Embed</span>
                    </label>
                    <input type="text" v-model="form.factory_map_embed" placeholder="Embed Alamat Pabrik"
                      class="input input-bordered w-full" />
                    <QuillEditor contentType="html" v-model:content="form.factory_map_embed" :options="optionsTitle"
                      placeholder="Embed Alamat Pabrik" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Alamat Pabrik</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.factory_address" :options="optionsTitle"
                      placeholder="Alamat Pabrik" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Alamat Pabrik EN</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.factory_address_en" :options="optionsTitle"
                      placeholder="Alamat Pabrik EN" theme="snow" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#sectionOffice" @click="carouselChange2(1)" :class="item21 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Kantor Pusat</a>
              <a href="#sectionDitribution" @click="carouselChange2(2)" :class="item22 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Distributor Utama</a>
              <a href="#sectionFactory" @click="carouselChange2(3)" :class="item23 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Pabrik</a>
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
            <!-- <router-link :to="{ name: 'ContactPreviewView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'ContactView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
  name: 'GeneralEdit',
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
      item1: true,
      item2: false,
      item3: false,
      item21: true,
      item22: false,
      item23: false,
      form: {
        distributor_map_embed: '',
        distributor_address: '',
        distributor_address_en: '',
        distributor_fax: '',
        distributor_fax_en: '',
        distributor_name: '',
        distributor_name_en: '',
        distributor_phone: '',
        distributor_phone_en: '',
        factory_address: '',
        factory_address_en: '',
        factory_fax: '',
        factory_fax_en: '',
        factory_map_embed: '',
        factory_name: '',
        factory_name_en: '',
        factory_phone: '',
        factory_phone_en: '',
        image_url_footer: '',
        image_url_navbar: '',
        instagram_url: '',
        youtube_url: '',
        office_address: '',
        office_address_en: '',
        office_fax: '',
        office_fax_en: '',
        office_map_embed: '',
        office_name: '',
        office_name_en: '',
        office_phone: '',
        office_phone_en: '',
        store_url: '',
        whatsapp_number: '',
        email: '',
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
    carouselChange(index) {
      if (index == 1) {
        this.item1 = true
        this.item2 = false
        this.item3 = false
      }
      if (index == 2) {
        this.item1 = false
        this.item2 = true
        this.item3 = false
      }
      if (index == 3) {
        this.item1 = false
        this.item2 = false
        this.item3 = true
      }
    },
    carouselChange2(index) {
      if (index == 1) {
        this.item21 = true
        this.item22 = false
        this.item23 = false
      }
      if (index == 2) {
        this.item21 = false
        this.item22 = true
        this.item23 = false
      }
      if (index == 3) {
        this.item21 = false
        this.item22 = false
        this.item23 = true
      }
    },
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('generalcms/formGeneralPostPut', formData)
        .then(res => {
          this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
          if (localStorage.getItem('generallive')) {
            this.getLocalGeneral = JSON.parse(localStorage.getItem('generallive'))
            this.$store.dispatch('general/get', 'live').then(data => {
              localStorage.setItem('generallive', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('general/get', 'live').then(data => {
              localStorage.setItem('generallive', JSON.stringify(data))
            })
          }
          if (localStorage.getItem('generalpreview')) {
            this.getLocalGeneral = JSON.parse(localStorage.getItem('generalpreview'))
            this.$store.dispatch('general/get', 'preview').then(data => {
              localStorage.setItem('generalpreview', JSON.stringify(data))
            })
          } else {
            this.$store.dispatch('general/get', 'preview').then(data => {
              localStorage.setItem('generalpreview', JSON.stringify(data))
            })
          }
        },
          err => {
            this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
          })
    },
    getData(id) {
      this.$store.dispatch('generalcms/getGeneral').then(data => {
        this.form.distributor_map_embed = data['distributor_map_embed']
        this.form.distributor_address = data['distributor_address']
        this.form.distributor_address_en = data['distributor_address_en']
        this.form.distributor_fax = data['distributor_fax']
        this.form.distributor_fax_en = data['distributor_fax_en']
        this.form.distributor_name = data['distributor_name']
        this.form.distributor_name_en = data['distributor_name_en']
        this.form.distributor_phone = data['distributor_phone']
        this.form.distributor_phone_en = data['distributor_phone_en']
        this.form.factory_address = data['factory_address']
        this.form.factory_address_en = data['factory_address_en']
        this.form.factory_fax = data['factory_fax']
        this.form.factory_fax_en = data['factory_fax_en']
        this.form.factory_map_embed = data['factory_map_embed']
        this.form.factory_name = data['factory_name']
        this.form.factory_name_en = data['factory_name_en']
        this.form.factory_phone = data['factory_phone']
        this.form.factory_phone_en = data['factory_phone_en']
        this.form.image_url_footer = data['image_url_footer']
        this.form.image_url_navbar = data['image_url_navbar']
        this.form.instagram_url = data['instagram_url']
        this.form.youtube_url = data['youtube_url']
        this.form.office_address = data['office_address']
        this.form.office_address_en = data['office_address_en']
        this.form.office_fax = data['office_fax']
        this.form.office_fax_en = data['office_fax_en']
        this.form.office_map_embed = data['office_map_embed']
        this.form.office_name = data['office_name']
        this.form.office_name_en = data['office_name_en']
        this.form.office_phone = data['office_phone']
        this.form.office_phone_en = data['office_phone_en']
        this.form.store_url = data['store_url']
        this.form.whatsapp_number = data['whatsapp_number']
        this.form.email = data['email']
      })
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('generalcms/getGeneral')
  },
  setup() {
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>