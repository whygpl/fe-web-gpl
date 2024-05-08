<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="BS-Mitra" />
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
            <template v-for="(item, index) in form.item">
              <div class="flex w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text"><b>Gambar {{ index + 1 }} | *140px x 105px | Maksimal 2 MB</b></span>
                    <div class="mt-2">
                      <button class="btn btn-sm btn-default bg-error" @click.prevent="DeleteItem(index)">- Hapus</button>
                    </div>
                  </label>
                  <img v-if="item.image_url" style="width:140px;height:105px" class="mb-3  lg:block"
                    :src="item.image_url" />
                  <input type="file" class="file-input file-input-bordered w-full max-w-xs" :key="index + 1"
                    ref="imageRef" accept=".jpg, .png, .jpeg" plain @change="inputImageRenderer($event, index)" />
                </div>
              </div>
            </template>
            <div class="mt-2">
              <button class="btn btn-default" @click.prevent="addItem()">+ Tambah</button>
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
            <!-- <router-link :to="{ name: 'BusinessPreviewView' }"><button class="btn btn-neutral ml-2 hidden">Lihat Perubahan</button></router-link> -->
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
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { ref } from 'vue'

import Navbar from '@/components/layout/cms/navbar/Navbar.vue'
import Menu from '@/components/layout/cms/menu/Menu.vue'
import Footer from '@/components/layout/cms/footer/Footer.vue'
import { mapState } from 'vuex'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'BusinessMitraEdit',
  components: { Navbar, Menu, Footer, Cropper },
  data() {
    return {
      form: {
        save_as: 'live',
        item: '',
        img_url: '', setImage: 'none', imageUrl: null,
      },
      stencilprops: {
        handlers: {},
        movable: true,
        resizable: false,
      },
      selectedUrl: [],
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
    addItem() {
      var addRow = this.form.item
      addRow.push({ id: '', image_url: '' })
    },
    DeleteItem(index) {
      this.form.item.splice(index, 1)
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('businesscms/formMitraPostPut', formData)
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
    },
    getData(id) {
      this.$store.dispatch('businesscms/getMitra').then(data => {
        this.form.item = data
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer(e, index) {
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
        this.form.item[index].img_url = file
        this.form.item[index].setImage = 'upload'
        this.form.item[index].image_url = URL.createObjectURL(file)
      }
    }
  },
  mounted() {
    this.getData()
    console.log(this.form.item[0])

  },
  created() {
    this.$store.dispatch('businesscms/getMitra')
  },
  setup() {
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>
<style>
.cropper-wrapper {
  overflow: hidden;
  position: relative;
  /* width: 320px;
	height: 720px; */
  /* background: black; */
  background-repeat: no-repeat;
}

.cropper-background {
  background: none;
  background-repeat: no-repeat;
}

.image-background {
  position: absolute;
  /* width: calc(100% + 20px);
	height: calc(100% + 20px); */
  left: -10px;
  top: -10px;
  background-size: cover;
  background-position: 50%;
  filter: blur(5px);
  background-repeat: no-repeat;
}
</style>