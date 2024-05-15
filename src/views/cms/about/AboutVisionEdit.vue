<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Aboutus-Vision" />
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
            <div class="carousel w-full">
              <div id="item1" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Gambar - MOBILE | Rekomendasi 390x720 | Maksimal 2 MB</span>
                    </label>
                    <div v-if="imageC_SM_V">
                      <div class="cropper-wrapper-mobile">
                        <div :style="{ backgroundImage: 'url(' + form.v_imageUrlSM + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropperSMv" background-class="cropper-background" :src="form.v_imageUrlSM"
                        :canvas="{
                            maxWidth: 512,
                          }"  :stencil-props="{ aspectRatio: 390/720 }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC_SM_V">
                      <div v-if="form.v_imageUrlSM">
                        <img style="width:390px;height:720px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.v_imageUrlSM" />
                      </div>
                      <div v-if="!form.v_imageUrlSM">
                          <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                              <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                            </svg>
                              <span class="sr-only">Loading...</span>
                          </div>
                      </div>
                      
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="v_inputImageRendererSM" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="item2" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Gambar - MOBILE | Rekomendasi 768x820 | Maksimal 2 MB</span>
                    </label>
                    <div v-if="imageC_MD_V">
                      <div class="cropper-wrapper">
                        <div :style="{ backgroundImage: 'url(' + form.v_imageUrlMD + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropperMDv" background-class="cropper-background" :src="form.v_imageUrlMD"
                        :canvas="{
                            maxWidth: 768,
                          }"  :stencil-props="{ aspectRatio: 768/820 }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC_MD_V">
                      <img style="width:768px;height:820px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.v_imageUrlMD" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="v_inputImageRendererMD" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="item3" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Gambar - DEKSTOP | Rekomendasi 1440x810 | Maksimal 2 MB</span>
                    </label>
                    <div v-if="imageC_LG_V">
                      <div class="cropper-wrapper">
                        <div :style="{ backgroundImage: 'url(' + form.v_imageUrlLG + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropperLGv" background-class="cropper-background" :src="form.v_imageUrlLG"
                        :canvas="{
                            maxWidth: 1080,
                          }"  :stencil-props="{ aspectRatio: 1440/810 }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC_LG_V">
                      <img style="width:1440px;height:810px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.v_imageUrlLG" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="v_inputImageRendererLG" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#item1" @click="carouselChange1(1)" :class="item11 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Gambar MOBILE</a>
              <a href="#item2" @click="carouselChange1(2)" :class="item12 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Gambar TABLET</a>
              <a href="#item3" @click="carouselChange1(3)" :class="item13 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Gambar DEKSTOP</a>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.v_title" :options="optionsTitle" placeholder="Judul"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.v_title_en" :options="optionsTitle"
                placeholder="Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.v_description" :options="options"
                placeholder="Deskripsi" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.v_description_en" :options="options"
                placeholder="Deskripsi EN" theme="snow" />
            </div>
            <div class="carousel w-full">
              <div id="mitem1" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Gambar - MOBILE | Rekomendasi 390x720 | Maksimal 2 MB</span>
                    </label>
                    <div v-if="imageC_SM_M">
                      <div class="cropper-wrapper">
                        <div :style="{ backgroundImage: 'url(' + form.m_imageUrlSM + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropperSMm" background-class="cropper-background" :src="form.m_imageUrlSM"
                        :canvas="{
                            maxWidth: 512,
                          }"  :stencil-props="{ aspectRatio: 390/720 }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC_SM_M">
                      <img style="width:390px;height:720px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.m_imageUrlSM" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="m_inputImageRendererSM" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="mitem2" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Gambar - MOBILE | Rekomendasi 768x820 | Maksimal 2 MB</span>
                    </label>
                    <div v-if="imageC_MD_M">
                      <div class="cropper-wrapper">
                        <div :style="{ backgroundImage: 'url(' + form.m_imageUrlMD + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropperMDm" background-class="cropper-background" :src="form.m_imageUrlMD"
                        :canvas="{
                            maxWidth: 768,
                          }"  :stencil-props="{ aspectRatio: 768/820 }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC_MD_M">
                      <img style="width:768px;height:820px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.m_imageUrlMD" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="m_inputImageRendererMD" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="mitem3" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Gambar - DEKSTOP | Rekomendasi 1440x810 | Maksimal 2 MB</span>
                    </label>
                    <div v-if="imageC_LG_M">
                      <div class="cropper-wrapper">
                        <div :style="{ backgroundImage: 'url(' + form.m_imageUrlLG + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropperLGm" background-class="cropper-background" :src="form.m_imageUrlLG"
                        :canvas="{
                            maxWidth: 1080,
                          }"  :stencil-props="{ aspectRatio: 1440/810 }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC_LG_M">
                      <img style="width:1440px;height:810px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.m_imageUrlLG" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="m_inputImageRendererLG" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#mitem1" @click="carouselChange2(1)" :class="item21 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Gambar MOBILE</a>
              <a href="#mitem2" @click="carouselChange2(2)" :class="item22 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Gambar TABLET</a>
              <a href="#mitem3" @click="carouselChange2(3)" :class="item23 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Gambar DESKTOP</a>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.m_title" :options="optionsTitle" placeholder="Judul"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.m_title_en" :options="optionsTitle"
                placeholder="Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub Judul | Maksimal Karakter 150</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.m_subtitle" :options="optionsTitle"
                placeholder="Sub Judul" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub Judul | Maksimal Karakter 150 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.m_subtitle_en" :options="optionsTitle"
                placeholder="Sub Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.m_description" :options="options"
                placeholder="Deskripsi" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.m_description_en" :options="options"
                placeholder="Deskripsi EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">List</span>
              </label>
              <template v-for="(item, index) in form.m_item.data">
                <QuillEditor contentType="html" v-model:content="item.name" :options="optionsTitle" placeholder="List"
                  theme="snow" />
              </template>
              <div class="mt-2">
                <button class="btn btn-default" @click.prevent="addItem()">+ Tambah Baris</button>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">List EN</span>
              </label>

              <template v-for="(item, index) in form.m_item_en.data">
                <QuillEditor contentType="html" v-model:content="item.name" :options="optionsTitle"
                  placeholder="List EN" theme="snow" />
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
            <!-- <router-link :to="{ name: 'AboutPreviewViewTab3' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'AboutViewTab3' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
      item11: true,
      item12: false,
      item13: false,
      item21: true,
      item22: false,
      item23: false,
      imageC_SM_V: false,
      imageC_MD_V: false,
      imageC_LG_V: false,
      imageC_SM_M: false,
      imageC_MD_M: false,
      imageC_LG_M: false,
      form: {
        v_title: '',
        v_title_en: '',
        v_description: '',
        v_description_en: '',
        v_img_urlSM: '', v_setImageSM: 'none', v_imageUrlSM: null,
        v_img_urlMD: '', v_setImageMD: 'none', v_imageUrlMD: null,
        v_img_urlLG: '', v_setImageLG: 'none', v_imageUrlLG: null,
        m_title: '',
        m_title_en: '',
        m_subtitle: '',
        m_subtitle_en: '',
        m_description: '',
        m_description_en: '',
        m_item: [],
        m_item_en: [],
        m_img_urlSM: '', m_setImageSM: 'none', m_imageUrlSM: null,
        m_img_urlMD: '', m_setImageMD: 'none', m_imageUrlMD: null,
        m_img_urlLG: '', m_setImageLG: 'none', m_imageUrlLG: null,
        save_as: 'live',
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
    carouselChange1(index) {
      if (index == 1) {
        this.item11 = true
        this.item12 = false
        this.item13 = false
      }
      if (index == 2) {
        this.item11 = false
        this.item12 = true
        this.item13 = false
      }
      if (index == 3) {
        this.item11 = false
        this.item12 = false
        this.item13 = true
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
      if (this.imageC_SM_V) {
        const result = this.$refs.cropperSMv.getResult()
        this.form.v_imageUrlSM = result.canvas.toDataURL(this.form.v_imageUrlSM)
        this.form.v_img_urlSM = this.dataURLtoFile(result.canvas.toDataURL(this.form.v_imageUrlSM), this.form.v_img_urlSM.name)
        this.imageC_SM_V = false
      }
      if (this.imageC_MD_V) {
        const result = this.$refs.cropperMDv.getResult()
        this.form.v_imageUrlMD = result.canvas.toDataURL(this.form.v_imageUrlMD)
        this.form.v_img_urlMD = this.dataURLtoFile(result.canvas.toDataURL(this.form.v_imageUrlMD), this.form.v_img_urlMD.name)
        this.imageC_MD_V = false
      }
      if (this.imageC_LG_V) {
        const result = this.$refs.cropperLGv.getResult()
        this.form.v_imageUrlLG = result.canvas.toDataURL(this.form.v_imageUrlLG)
        this.form.v_img_urlLG = this.dataURLtoFile(result.canvas.toDataURL(this.form.v_imageUrlLG), this.form.v_img_urlLG.name)
        this.imageC_LG_V = false
      }
      if (this.imageC_SM_M) {
        const result = this.$refs.cropperSMm.getResult()
        this.form.m_imageUrlSM = result.canvas.toDataURL(this.form.m_imageUrlSM)
        this.form.m_img_urlSM = this.dataURLtoFile(result.canvas.toDataURL(this.form.m_imageUrlSM), this.form.m_img_urlSM.name)
        this.imageC_SM_M = false
      }
      if (this.imageC_MD_M) {
        const result = this.$refs.cropperMDm.getResult()
        this.form.m_imageUrlMD = result.canvas.toDataURL(this.form.m_imageUrlMD)
        this.form.m_img_urlMD = this.dataURLtoFile(result.canvas.toDataURL(this.form.m_imageUrlMD), this.form.m_img_urlMD.name)
        this.imageC_MD_M = false
      }
      if (this.imageC_LG_M) {
        const result = this.$refs.cropperLGm.getResult()
        this.form.m_imageUrlLG = result.canvas.toDataURL(this.form.m_imageUrlLG)
        this.form.m_img_urlLG = this.dataURLtoFile(result.canvas.toDataURL(this.form.m_imageUrlLG), this.form.m_img_urlLG.name)
        this.imageC_LG_M = false
      }
    },
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('aboutcms/formVisionPostPut', formData)
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
    addItem() {
      var addRow = this.form.m_item.data
      addRow.push({ id: '', name: '' })
    },
    addItemEN() {
      var addRow = this.form.m_item_en.data
      addRow.push({ id: '', name: '' })
    },
    getData(id) {
      this.$store.dispatch('aboutcms/getVision').then(data => {
        this.form.v_title = data.vision['title']
        this.form.v_title_en = data.vision['title_en']
        this.form.v_description = data.vision['description']
        this.form.v_description_en = data.vision['description_en']
        this.form.v_imageUrlSM = data.vision['image_url_sm']
        this.form.v_imageUrlMD = data.vision['image_url_md']
        this.form.v_imageUrlLG = data.vision['image_url_lg']
        this.form.m_title = data.mission['title']
        this.form.m_title_en = data.mission['title_en']
        this.form.m_subtitle = data.mission['subtitle']
        this.form.m_subtitle_en = data.mission['subtitle_en']
        this.form.m_description = data.mission['description']
        this.form.m_description_en = data.mission['description_en']
        this.form.m_item = JSON.parse(data.mission['mission_item'])
        this.form.m_item_en = JSON.parse(data.mission['mission_item_en'])
        this.form.m_imageUrlSM = data.mission['image_url_sm']
        this.form.m_imageUrlMD = data.mission['image_url_md']
        this.form.m_imageUrlLG = data.mission['image_url_lg']
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    v_inputImageRendererSM(e) {
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
        this.imageC_SM_V = true
        this.form.v_img_urlSM = file
        this.form.v_setImageSM = 'upload'
        this.form.v_imageUrlSM = URL.createObjectURL(e.target.files[0])
      }
    },
    v_inputImageRendererMD(e) {
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
        this.imageC_MD_V = true
        this.form.v_img_urlMD = file
        this.form.v_setImageMD = 'upload'
        this.form.v_imageUrlMD = URL.createObjectURL(e.target.files[0])
      }
    },
    v_inputImageRendererLG(e) {
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
        this.imageC_LG_V = true
        this.form.v_img_urlLG = file
        this.form.v_setImageLG = 'upload'
        this.form.v_imageUrlLG = URL.createObjectURL(e.target.files[0])
      }
    },
    m_inputImageRendererSM(e) {
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
        this.imageC_SM_M = true
        this.form.m_img_urlSM = file
        this.form.m_setImageSM = 'upload'
        this.form.m_imageUrlSM = URL.createObjectURL(e.target.files[0])
      }
    },
    m_inputImageRendererMD(e) {
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
        this.imageC_MD_M = true
        this.form.m_img_urlMD = file
        this.form.m_setImageMD = 'upload'
        this.form.m_imageUrlMD = URL.createObjectURL(e.target.files[0])
      }
    },
    m_inputImageRendererLG(e) {
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
        this.imageC_LG_M = true
        this.form.m_img_urlLG = file
        this.form.m_setImageLG = 'upload'
        this.form.m_imageUrlLG = URL.createObjectURL(e.target.files[0])
      }
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('aboutcms/getVision')
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