<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="CR-Career" />
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
            <b>Bekerja</b>
            <div class="form-control w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gambar | Rekomendasi 684x385 | Maksimal 2 MB</span>
                  <!-- <span class="label-text">Gambar | *608px x 343px | Maksimal 2 MB</span> -->
                </label>
                <div v-if="imageC">
                  <div class="cropper-wrapper">
                    <div :style="{ backgroundImage: 'url(' + form.imageUrl_1 + ')' }" class="image-background"></div>
                    <cropper ref="cropperc1" :src="form.imageUrl_1"
                      :canvas="{
                        maxWidth: 720,
                      }"
                      :stencil-props="{ aspectRatio: 684/385 }" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                  </div>
                </div>
                <div v-if="!imageC">
                  <template v-if="form.imageUrl_1">
                    <img style="width:684px;height:385px" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrl_1" />
                  </template>
                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg" plain
                      @change="inputImageRenderer" />
                  </div>
                </div>
              </div>
            </div>
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
            <b>Budaya</b>
            <div class="flex w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gambar | Rekomendasi 684x385 | Maksimal 2 MB</span>
                </label>
                <div v-if="imageCH">
                  <div class="cropper-wrapper">
                    <div :style="{ backgroundImage: 'url(' + form.h_imageUrl_1 + ')' }" class="image-background"></div>
                    <cropper ref="cropperch1" background-class="cropper-background" :src="form.h_imageUrl_1"
                    :canvas="{
                        maxWidth: 720,
                      }"  :stencil-props="{ aspectRatio: 684/385 }" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                  </div>
                </div>
                <div v-if="!imageCH">

                  <template v-if="form.h_imageUrl_1">
                    <img style="width:684px;height:385px" class="mb-3 object-cover object-center lg:block"
                      :src="form.h_imageUrl_1" />
                  </template>
                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg" plain
                      @change="inputImageRenderer_h" />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_title" :options="optionsTitle" placeholder="Judul"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_title_en" :options="optionsTitle"
                placeholder="Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_description" :options="options"
                placeholder="Deskripsi" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_description_en" :options="options"
                placeholder="Deskripsi EN" theme="snow" />
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
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { ref } from 'vue'

import Navbar from '@/components/layout/cms/navbar/Navbar.vue'
import Menu from '@/components/layout/cms/menu/Menu.vue'
import Footer from '@/components/layout/cms/footer/Footer.vue'
import { mapState } from 'vuex'
import { QuillEditor } from '@vueup/vue-quill'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'CareerEdit',
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
      imageC: false,
      imageCH: false,
      form: {
        deadline: '',
        title: '',
        title_en: '',
        description: '',
        description_en: '',
        h_title: '',
        h_title_en: '',
        h_description: '',
        h_description_en: '',
        save_as: 'live',
        img_url_1: '', setImage_1: 'none', imageUrl_1: null,
        h_img_url_1: '', h_setImage_1: 'none', h_imageUrl_1: null,
      },
      stencilprops: {
        handlers: {},
        movable: true,
        resizable: true,
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
    cropImage() {
      if (this.imageC) {
        const result = this.$refs.cropperc1.getResult()
        this.form.imageUrl_1 = result.canvas.toDataURL(this.form.imageUrl_1)
        this.form.img_url_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_1),this.form.img_url_1.name)
        this.imageC = false
      }
      if (this.imageCH) {
        const result = this.$refs.cropperch1.getResult()
        this.form.h_imageUrl_1 = result.canvas.toDataURL(this.form.h_imageUrl_1)
        this.form.h_img_url_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.h_imageUrl_1),this.form.h_img_url_1.name)
        this.imageCH = false
      }
    },
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('careercms/formCareerPostPut', formData)
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
    getData(id) {
      this.$store.dispatch('careercms/getCareer').then(data => {
        this.form.title = data.work['title']
        this.form.title_en = data.work['title_en']
        this.form.description = data.work['description']
        this.form.description_en = data.work['description_en']
        this.form.imageUrl_1 = data.work['image_url']
        this.form.h_title = data.culture['title']
        this.form.h_title_en = data.culture['title_en']
        this.form.h_description = data.culture['description']
        this.form.h_description_en = data.culture['description_en']
        this.form.h_imageUrl_1 = data.culture['image_url']
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer_h(e) {
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
        this.imageCH = true
        this.form.h_img_url_1 = file
        this.form.h_setImage_1 = 'upload'
        this.form.h_imageUrl_1 = URL.createObjectURL(e.target.files[0])
      }
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
        this.imageC = true
        this.form.img_url_1 = file
        this.form.setImage_1 = 'upload'
        this.form.imageUrl_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_1(e) {
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
        this.form.img_url_1 = file
        this.form.setImage_1 = 'upload'
        this.form.imageUrl_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_2(e) {
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
        this.form.img_url_2 = file
        this.form.setImage_2 = 'upload'
        this.form.imageUrl_2 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_3(e) {
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
        this.form.img_url_3 = file
        this.form.setImage_3 = 'upload'
        this.form.imageUrl_3 = URL.createObjectURL(e.target.files[0])
      }
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('careercms/getCareer')
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

.cropper-wrapper {
  width: 600px;
  overflow: auto;
}
</style>