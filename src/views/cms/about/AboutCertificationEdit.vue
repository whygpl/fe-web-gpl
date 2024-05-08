<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Aboutus-Certification" />
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
              <QuillEditor contentType="html" v-model:content="form.title" :options="optionsTitle" placeholder="Judul"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title_en" :options="optionsTitle"
                placeholder="Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.description" :options="options"
                placeholder="Deskripsi" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.description_en" :options="options"
                placeholder="Deskripsi EN" theme="snow" />
            </div>
            <template v-for="(item, index) in form.item">
              <div class="flex w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text"><b>Gambar {{ index + 1 }} | Rekomendasi 244x244 | Maksimal 2 MB</b></span>
                    <div class="mt-2">
                      <button class="btn btn-sm btn-default bg-error" @click.prevent="DeleteItem(index)">-
                        Hapus</button>
                    </div>
                  </label>
                  <!-- <img v-if="item.image_url" style="height:244px;width:244px"
                    class="mb-3 object-cover object-center lg:block" :src="item.image_url" />
                  <input type="file" class="file-input file-input-bordered w-full max-w-xs" :key="index + 1"
                    ref="imageRef" accept=".jpg, .png" plain @change="inputImageRenderer($event, index, item)" />
                   -->
                    <div v-if="imageC[index]">
                      <div class="cropper-wrapper">
                        <div :style="{ backgroundImage: 'url(' + item.image_url + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropperImage" background-class="cropper-background" :src="item.image_url"
                        :canvas="{
                            maxWidth: 300,
                          }"  :stencil-props="{ aspectRatio: 1/1 }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage(index)">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC[index]">
                      <img style="width:244px;height:244px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="item.image_url" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="inputImageRenderer($event, index)" />
                      </div>
                    </div>


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
                <option value="live">Go Live</option>
                <option value="preview">Draft Review</option>
              </select>
            </div>
          </div>
          <div class="mt-10">
            <button class="btn btn-primary" @click.prevent="saveData()">Simpan</button>
            <router-link :to="{ name: 'AboutPreviewViewTab5' }"><button class="btn btn-neutral ml-2 hidden">Lihat
                Perubahan</button></router-link>
            <router-link :to="{ name: 'AboutViewTab5' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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

import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import Navbar from '@/components/layout/cms/navbar/Navbar.vue'
import Menu from '@/components/layout/cms/menu/Menu.vue'
import Footer from '@/components/layout/cms/footer/Footer.vue'
import { mapState } from 'vuex'
import { QuillEditor } from '@vueup/vue-quill'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'HomeAboutCompanyvalueEdit',
  components: { Navbar, Menu, Footer, Cropper, QuillEditor },
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
      imageC: [],
      form: {
        title: '',
        title_en: '',
        description: '',
        description_en: '',
        save_as: 'live',
        item: '',
        img_url: '', setImage: 'none', imageUrl: null
      },
      selectedUrl: [],
      regData: []
    }
  },
  computed: {
    ...mapState({
      items: state => state.aboutcms.items
    }),
  },
  methods: {
    cropImage(index) {
      if (this.imageC[index]) {
        const result = this.$refs.cropperImage[0].getResult()
        this.form.item[index].setImage = 'upload'
        this.form.item[index].image_url = result.canvas.toDataURL( this.form.item[index].image_url)
        this.form.item[index].img_url = this.dataURLtoFile(result.canvas.toDataURL( this.form.item[index].image_url),  this.form.item[index].image_url.name)
        this.imageC[index] = false
      }
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime })
    },
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
      this.$store.dispatch('aboutcms/formCertificationPostPut', formData)
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
      this.$store.dispatch('aboutcms/getCertification').then(data => {
        this.form.title = data['title']
        this.form.title_en = data['title_en']
        this.form.description = data['description']
        this.form.description_en = data['description_en']
        this.form.item = data['image_urls']
        console.log(data)
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer(e, index, item) {
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
        this.imageC[index] = true;
        //this.form.item[index].id = item.id
        this.form.item[index].img_url = file
        this.form.item[index].setImage = 'upload'
        this.form.item[index].image_url = URL.createObjectURL(file)
      }
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('aboutcms/getCertification')
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
  background-repeat: no-repeat;
}

.cropper-background {
  background: none;
  background-repeat: no-repeat;
}

.image-background {
  position: absolute;
  left: -10px;
  top: -10px;
  background-size: cover;
  background-position: 50%;
  filter: blur(5px);
  background-repeat: no-repeat;
}
.cropper-wrapper {
  width: 400px;
  overflow: auto;
}
</style>