<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Aboutus-President" />
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
            <div class="flex w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gambar | Rekomendasi 395x525 | Maksimal 2 MB</span>
                </label>
                <div v-if="imageC">
                  <div class="cropper-wrapper">
                    <div :style="{ backgroundImage: 'url(' + form.imageUrl + ')' }" class="image-background"></div>
                    <cropper ref="cropper" background-class="cropper-background" :src="form.imageUrl" 
                    :canvas="{
                            maxWidth: 720,
                          }"  :stencil-props="{ aspectRatio: 395/525 }" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                  </div>
                </div>
                <div v-if="!imageC">
                  <div v-if="form.imageUrl">
                      <img style="width:395px;height:525px;"
                    class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrl" />
                  </div>
                  <div v-if="!form.imageUrl">
                      <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                        </svg>
                          <span class="sr-only">Loading...</span>
                      </div>
                  </div>
                  
                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg" plain
                      @change="inputImageRenderer" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex carousel w-full">
              <div id="sectionCPIN1" class="flex carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Paragraph</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_1" :options="options"
                      placeholder="Paragraph 1" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_2" :options="options"
                      placeholder="Paragraph 2" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_3" :options="options"
                      placeholder="Paragraph 3" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_4" :options="options"
                      placeholder="Paragraph 4" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_5" :options="options"
                      placeholder="Paragraph 5" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_6" :options="options"
                      placeholder="Paragraph 6" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_7" :options="options"
                      placeholder="Paragraph 7" theme="snow" />
                  </div>
                </div>
              </div>
              <div id="sectionCPEN2" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Paragraph</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_1_en" :options="options"
                      placeholder="Paragraph EN 1" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_2_en" :options="options"
                      placeholder="Paragraph EN 2" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_3_en" :options="options"
                      placeholder="Paragraph EN 3" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_4_en" :options="options"
                      placeholder="Paragraph EN 4" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_5_en" :options="options"
                      placeholder="Paragraph EN 5" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_6_en" :options="options"
                      placeholder="Paragraph EN 6" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_7_en" :options="options"
                      placeholder="Paragraph EN 7" theme="snow" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#sectionCPIN1" @click="carouselChange(1)" :class="item1 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Indonesia</a>
              <a href="#sectionCPEN2" @click="carouselChange(2)" :class="item2 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">English</a>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sambutan</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.greeting" :options="optionsTitle"
                placeholder="Sambutan" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sambutan EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.greeting_en" :options="optionsTitle"
                placeholder="Sambutan EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Nama Presiden</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.messenger" :options="optionsTitle"
                placeholder="Nama Presiden" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Nama Presiden EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.messenger_en" :options="optionsTitle"
                placeholder="Nama Presiden EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Jabatan</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.job_title" :options="optionsTitle"
                placeholder="Jabatan" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Jabatan EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.job_title_en" :options="optionsTitle"
                placeholder="Jabatan EN" theme="snow" />
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
            <!-- <router-link :to="{ name: 'AboutPreviewViewTab2' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'AboutViewTab2' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
  name: 'HomeAboutUsEdit',
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
      item1: true,
      item2: false,
      imageC: false,
      form: {
        title: '',
        title_en: '',
        paragraph_1: '',
        paragraph_2: '',
        paragraph_3: '',
        paragraph_4: '',
        paragraph_5: '',
        paragraph_6: '',
        paragraph_7: '',
        paragraph_1_en: '',
        paragraph_2_en: '',
        paragraph_3_en: '',
        paragraph_4_en: '',
        paragraph_5_en: '',
        paragraph_6_en: '',
        paragraph_7_en: '',
        greeting: '',
        greeting_en: '',
        messenger: '',
        messenger_en: '',
        job_title: '',
        job_title_en: '',
        save_as: 'live',
        img_url: '',
        img_url: '', setImage: 'none', imageUrl: null,
      },
      stencilprops: {
        handlers: {},
        movable: true,
        resizable: false,
      },
      regData: []
    }
  },
  computed: {
    ...mapState({
      items: state => state.aboutcms.items
    }),
  },
  methods: {
    carouselChange(index) {
      if (index == 1) {
        this.item1 = true
        this.item2 = false
      }
      if (index == 2) {
        this.item1 = false
        this.item2 = true
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
    cropImage() {
      if (this.imageC) {
        const result = this.$refs.cropper.getResult()
        this.form.imageUrl = result.canvas.toDataURL(this.form.imageUrl)
        this.form.img_url = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl), this.form.img_url.name)
        this.imageC = false
      }
    },
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('aboutcms/formPresidentPostPut', formData)
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
      this.$store.dispatch('aboutcms/getPresident').then(data => {
        this.form.title = data['title']
        this.form.title_en = data['title_en']
        this.form.paragraph_1 = data['paragraph_1']
        this.form.paragraph_2 = data['paragraph_2']
        this.form.paragraph_3 = data['paragraph_3']
        this.form.paragraph_4 = data['paragraph_4']
        this.form.paragraph_5 = data['paragraph_5']
        this.form.paragraph_6 = data['paragraph_6']
        this.form.paragraph_7 = data['paragraph_7']
        this.form.paragraph_1_en = data['paragraph_1_en']
        this.form.paragraph_2_en = data['paragraph_2_en']
        this.form.paragraph_3_en = data['paragraph_3_en']
        this.form.paragraph_4_en = data['paragraph_4_en']
        this.form.paragraph_5_en = data['paragraph_5_en']
        this.form.paragraph_6_en = data['paragraph_6_en']
        this.form.paragraph_7_en = data['paragraph_7_en']
        this.form.imageUrl = data['image_url']
        this.form.greeting = data['greeting']
        this.form.greeting_en = data['greeting_en']
        this.form.messenger = data['messenger']
        this.form.messenger_en = data['messenger_en']
        this.form.job_title = data['job_title']
        this.form.job_title_en = data['job_title_en']
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
        this.imageC = true
        this.form.img_url = file
        this.form.setImage = 'upload'
        this.form.imageUrl = URL.createObjectURL(e.target.files[0])
      }
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('aboutcms/getPresident')
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
  /* width: 1200px;
	height: 810px; */
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