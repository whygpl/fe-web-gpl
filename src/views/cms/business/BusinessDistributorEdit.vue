<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="BS-Distributor" />
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
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Produk Kesehatan/Produk Resep</span>
              </label>
              <select v-model="form.type" class="select select-bordered">
                <option value="health">Produk Kesehatan</option>
                <option value="drug">Produk Resep</option>
              </select>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Provinsi | Maksimal Karakter 100</span>
              </label>
              <!-- <QuillEditor contentType="html" v-model:content="form.city_name" :options="optionsTitle"
                placeholder="Provinsi" theme="snow" /> -->
              <input type="text" v-model="form.city_name" placeholder="Provinsi" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Provinsi | Maksimal Karakter 100 EN</span>
              </label>
              <!-- <QuillEditor contentType="html" v-model:content="form.city_name_en" :options="optionsTitle"
                placeholder="Provinsi EN" theme="snow" /> -->
              <input type="text" v-model="form.city_name_en" placeholder="Provinsi EN"
                class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Latitude</span>
              </label>
              <input type="text" v-model="form.latitude" placeholder="Latitude" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Longitude</span>
              </label>
              <input type="text" v-model="form.longitude" placeholder="Longitude" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Distributor</span>
              </label>
              <template v-for="(item, index) in form.companies">
                <!-- <QuillEditor contentType="html" v-model:content="item.name" :options="optionsTitle" placeholder="Nama"
                  theme="snow" />
                <QuillEditor contentType="html" v-model:content="item.address" :options="optionsTitle"
                  placeholder="Alamat" theme="snow" /> -->
                <input type="text" v-model="item.name" placeholder="Nama" class="input input-bordered w-full" />
                <input type="text" v-model="item.address" placeholder="Alamat" class="input input-bordered w-full" />
              </template>
              <div class="mt-2">
                <button class="btn btn-default" @click.prevent="addItem()">+ Tambah Baris</button>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Distributor EN</span>
              </label>

              <template v-for="(item, index) in form.companies_en">
                <!-- <QuillEditor contentType="html" v-model:content="item.name" :options="optionsTitle" placeholder="Nama"
                  theme="snow" />
                <QuillEditor contentType="html" v-model:content="item.address" :options="optionsTitle"
                  placeholder="Alamat" theme="snow" /> -->
                <input type="text" v-model="item.name" placeholder="Nama" class="input input-bordered w-full" />
                <input type="text" v-model="item.address" placeholder="Alamat" class="input input-bordered w-full" />
              </template>
              <div class="mt-2">
                <button class="btn btn-default" @click.prevent="addItemEN()">+ Tambah Baris</button>
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
            <!-- <router-link :to="{ name: 'BusinessPreviewView' }"><button class="btn btn-neutral ml-2">Lihat
                Perubahan</button></router-link> -->
            <router-link :to="{ name: 'BusinessView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
        type: '',
        city_name: '',
        city_name_en: '',
        latitude: '',
        latitude_en: '',
        longitude: '',
        longitude_en: '',
        companies: [{ address: '', name: '' }],
        companies_en: [{ address: '', name: '' }],
        save_as: 'live',
        img_url: '',
        img_url: '', setImage: 'none', imageUrl: null,
      },
      regData: []
    }
  },
  computed: {
    ...mapState({
      items: state => state.businesscms.items
    }),
  },
  methods: {
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      console.log(this.form);
      if (this.form.type != "") {
        this.$store.dispatch('businesscms/formDistributionPostPut', formData)
          .then(res => {
            this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
            if (localStorage.getItem('businessmitralive')) {
              this.$store.dispatch('business/getMitra', 'live').then(data => {
                localStorage.setItem('businessmitralive', JSON.stringify(data))
              })
              this.getLocalBusinessmitra = JSON.parse(localStorage.getItem('businessmitralive'))
            } else {
              this.$store.dispatch('business/getMitra', 'live').then(data => {
                localStorage.setItem('businessmitralive', JSON.stringify(data))
              })
            }
            if (localStorage.getItem('businesslive')) {
              this.$store.dispatch('business/get', 'live').then(data => {
                localStorage.setItem('businesslive', JSON.stringify(data))
              })
              this.getLocalBusiness = JSON.parse(localStorage.getItem('businesslive'))
              this.renderall = true
            } else {
              this.$store.dispatch('business/get', 'live').then(data => {
                localStorage.setItem('businesslive', JSON.stringify(data))
              })
            }

            if (localStorage.getItem('businessmitrapreview')) {
              this.$store.dispatch('business/getMitra', 'preview').then(data => {
                localStorage.setItem('businessmitrapreview', JSON.stringify(data))
              })
              this.getLocalBusinessmitra = JSON.parse(localStorage.getItem('businessmitrapreview'))
            } else {
              this.$store.dispatch('business/getMitra', 'preview').then(data => {
                localStorage.setItem('businessmitrapreview', JSON.stringify(data))
              })
            }
            if (localStorage.getItem('businesspreview')) {
              this.$store.dispatch('business/get', 'preview').then(data => {
                localStorage.setItem('businesspreview', JSON.stringify(data))
              })
              this.getLocalBusiness = JSON.parse(localStorage.getItem('businesspreview'))
              this.renderall = true
            } else {
              this.$store.dispatch('business/get', 'preview').then(data => {
                localStorage.setItem('businesspreview', JSON.stringify(data))
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
      var addRow = this.form.companies
      addRow.push({ address: '', name: '' })
    },
    addItemEN() {
      var addRow = this.form.companies_en
      addRow.push({ address: '', name: '' })
    },
    getData(id) {
      this.$store.dispatch('businesscms/getDistributorId', id).then(data => {
        this.form.id = data['id']
        this.form.type = data['type']
        this.form.city_name = data['city_name']
        this.form.city_name_en = data['city_name_en']
        this.form.latitude = data['latitude']
        this.form.latitude_en = data['latitude_en']
        this.form.longitude = data['longitude']
        this.form.longitude_en = data['longitude_en']
        this.form.companies = data['companies']
        this.form.companies_en = data['companies_en']
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer(e) {
      const file = e.target.files[0];
      if (!this.isValidFileSize(file, 2)) {
        this.notification(
          "Failed :",
          "File size exceeds the limit of 2 MB",
          "bg-red-500",
          "white",
          "50"
        );
        return;
      } else {
        this.form.img_url = file
        this.form.setImage = 'upload'
        this.form.imageUrl = URL.createObjectURL(e.target.files[0])
      }
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