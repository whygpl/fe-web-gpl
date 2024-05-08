<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="BS-Business" />
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
            <b>Export</b>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Gambar | Rekomendasi 768x576 | Maksimal 2 MB</span>
                <!-- <span class="label-text">Gambar | *608px x 456px | Maksimal 2 MB</span>-->
              </label>
              <div v-if="imageC_1">
                <div class="cropper-wrapper">
                  <div :style="{ backgroundImage: 'url(' + form.imageUrl_1 + ')' }" class="image-background"></div>
                  <cropper ref="cropperc1" background-class="cropper-background" :src="form.imageUrl_1" 
                  :canvas="{ maxWidth: 720,}" :stencil-props="{ aspectRatio: 4 / 3 }" />
                </div>
                <div class="mt-2">
                  <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                </div>
              </div>
              <div v-if="!imageC_1">
                <img style="width:768px;height:576px;"
                  class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrl_1" />
                <div class="mt-2">
                  <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png" plain
                    @change="inputImageRenderer_1" />
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
                <span class="label-text">Sub Judul | Maksimal Karakter 200</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.subtitle" :options="optionsTitle"
                placeholder="Sub Judul" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub Judul | Maksimal Karakter 200 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.subtitle_en" :options="optionsTitle"
                placeholder="Sub Judul EN" theme="snow" />
            </div>
            <div class="flex carousel w-full">
              <div id="sectionCPIN1" class="flex carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Paraghraph</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paraghraph_1" :options="options"
                      placeholder="Paraghraph 1" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paraghraph_2" :options="options"
                      placeholder="Paraghraph 2" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paraghraph_3" :options="options"
                      placeholder="Paraghraph 3" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Kontak</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.contact.email" :options="optionsTitle"
                      placeholder="Email" theme="snow" />
                    <QuillEditor contentType="html" v-model:content="form.contact.phone" :options="optionsTitle"
                      placeholder="Phone" theme="snow" />
                    <QuillEditor contentType="html" v-model:content="form.contact.whatsapp" :options="optionsTitle"
                      placeholder="Whatsapp" theme="snow" />
                  </div>
                </div>
              </div>
              <div id="sectionCPEN2" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Paraghraph EN</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paraghraph_1_en" :options="options"
                      placeholder="Paraghraph EN 1" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paraghraph_2_en" :options="options"
                      placeholder="Paraghraph EN 2" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paraghraph_3_en" :options="options"
                      placeholder="Paraghraph EN 3" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Kontak EN</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.contact_en.email" :options="optionsTitle"
                      placeholder="Email EN" theme="snow" />
                    <QuillEditor contentType="html" v-model:content="form.contact_en.phone" :options="optionsTitle"
                      placeholder="Phone EN" theme="snow" />
                    <QuillEditor contentType="html" v-model:content="form.contact_en.whatsapp" :options="optionsTitle"
                      placeholder="Whatsapp EN" theme="snow" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#sectionCPIN1" @click="carouselChange2(1)" :class="item21 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Indonesia</a>
              <a href="#sectionCPEN2" @click="carouselChange2(2)" :class="item22 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">English</a>
            </div>
            <div class="flex w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gambar | Rekomendasi 768x432 | Maksimal 2 MB</span>
                </label>
                <div v-if="imageCH_1">
                  <div class="cropper-wrapper">
                    <div :style="{ backgroundImage: 'url(' + form.h_imageUrl_1 + ')' }" class="image-background"></div>
                    <cropper ref="cropperch1" background-class="cropper-background" :src="form.h_imageUrl_1" :canvas="{
        maxWidth: 720,
      }" :stencil-props="{ aspectRatio: 16 / 9 }" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                  </div>
                </div>
                <div v-if="!imageCH_1">
                  <img style="width:768px;height:432px;"
                    class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.h_imageUrl_1" />
                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs"
                      accept=".jpg, .JPG, .PNG, .JPEG, .png" plain @change="inputImageRenderer" />
                  </div>
                </div>
              </div>
            </div>
            <b>Manufacturing</b>
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
                <span class="label-text">Sub Judul | Maksimal Karakter 200</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_subtitle" :options="optionsTitle"
                placeholder="Sub Judul" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub Judul | Maksimal Karakter 200 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_subtitle_en" :options="optionsTitle"
                placeholder="Sub Judul EN" theme="snow" />
            </div>
            <div class="flex w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gambar | Rekomendasi 512x512 | Maksimal 2 MB</span>
                </label>
                <div v-if="imageCH">
                  <div class="cropper-wrapper">
                    <div :style="{ backgroundImage: 'url(' + form.h_imageUrl + ')' }" class="image-background"></div>
                    <cropper ref="cropperch1" background-class="cropper-background" :src="form.h_imageUrl" :canvas="{
        maxWidth: 720,
      }" :stencil-props="{ aspectRatio: 1 / 1 }" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                  </div>
                </div>
                <div v-if="!imageCH">
                  <img style="width:512px;height:512px;"
                    class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.h_imageUrl" />
                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs"
                      accept=".jpg, .JPG, .PNG, .JPEG, .png" plain @change="h_inputImageRenderer" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex carousel w-full">
              <div id="sectionCPIN5" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paraghraph_1" :options="options"
                      placeholder="Paraghraph 1" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paraghraph_2" :options="options"
                      placeholder="Paraghraph 2" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">List</span>
                    </label>
                    <template v-for="(item, index) in form.par_list_2">
                      <QuillEditor contentType="html" v-model:content="item.name" :options="optionsTitle"
                        placeholder="Text" theme="snow" />
                    </template>
                    <div class="mt-2">
                      <button class="btn btn-default" @click.prevent="addItemPL2()">+ Tambah Baris</button>
                    </div>
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paraghraph_3" :options="options"
                      placeholder="Paraghraph 3" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">List</span>
                    </label>

                    <template v-for="(item, index) in form.par_list_3">
                      <QuillEditor contentType="html" v-model:content="item.name" :options="optionsTitle"
                        placeholder="Judul" theme="snow" />
                      <QuillEditor contentType="html" v-model:content="item.form" :options="optionsTitle"
                        placeholder="Sub Judul" theme="snow" />
                    </template>
                    <div class="mt-2">
                      <button class="btn btn-default" @click.prevent="addItemPL3()">+ Tambah Baris</button>
                    </div>
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Kontak</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_contact.email" :options="optionsTitle"
                      placeholder="Email" theme="snow" />
                    <QuillEditor contentType="html" v-model:content="form.h_contact.phone" :options="optionsTitle"
                      placeholder="Phone" theme="snow" />
                    <QuillEditor contentType="html" v-model:content="form.h_contact.whatsapp" :options="optionsTitle"
                      placeholder="Whatsapp" theme="snow" />
                  </div>
                </div>
              </div>
              <div id="sectionCPEN6" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paraghraph_1_en" :options="options"
                      placeholder="Paraghraph EN 1" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paraghraph_2_en" :options="options"
                      placeholder="Paraghraph EN 2" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">List EN</span>
                    </label>

                    <template v-for="(item, index) in form.par_list_2_en">
                      <QuillEditor contentType="html" v-model:content="item.name" :options="optionsTitle"
                        placeholder="Text EN" theme="snow" />
                    </template>
                    <div class="mt-2">
                      <button class="btn btn-default" @click.prevent="addItemPL2EN()">+ Tambah Baris</button>
                    </div>
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paraghraph_3_en" :options="options"
                      placeholder="Paraghraph EN 3" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">List EN</span>
                    </label>

                    <template v-for="(item, index) in form.par_list_3_en">
                      <QuillEditor contentType="html" v-model:content="item.name" :options="options"
                        placeholder="Judul EN" theme="snow" />
                      <QuillEditor contentType="html" v-model:content="item.form" :options="options"
                        placeholder="Sub Judul EN" theme="snow" />
                    </template>
                    <div class="mt-2">
                      <button class="btn btn-default" @click.prevent="addItemPL3EN()">+ Tambah Baris</button>
                    </div>
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Kontak EN</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_contact_en.email" :options="optionsTitle"
                      placeholder="Email" theme="snow" />
                    <QuillEditor contentType="html" v-model:content="form.h_contact_en.phone" :options="optionsTitle"
                      placeholder="Phone" theme="snow" />
                    <QuillEditor contentType="html" v-model:content="form.h_contact_en.whatsapp" :options="optionsTitle"
                      placeholder="Whatsapp" theme="snow" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#sectionCPIN5" @click="carouselChange(1)" :class="item1 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Indonesia</a>
              <a href="#sectionCPEN6" @click="carouselChange(2)" :class="item2 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">English</a>
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
import { QuillEditor } from '@vueup/vue-quill'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'BusinessEdit',
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
      item21: true,
      item22: false,
      imageC_1: false,
      imageCH_1: false,
      imageCH: false,
      form: {
        title: '',
        title_en: '',
        subtitle: '',
        subtitle_en: '',
        paraghraph_1: '',
        paraghraph_2: '',
        paraghraph_3: '',
        paraghraph_1_en: '',
        paraghraph_2_en: '',
        paraghraph_3_en: '',
        contact: '',
        contact_en: '',
        h_title: '',
        h_title_en: '',
        h_subtitle: '',
        h_subtitle_en: '',
        h_paraghraph_1: '',
        h_paraghraph_2: '',
        h_paraghraph_3: '',
        h_paraghraph_1_en: '',
        h_paraghraph_2_en: '',
        h_paraghraph_3_en: '',
        par_list_2: '',
        par_list_3: '',
        par_list_2_en: '',
        par_list_3_en: '',
        h_contact: {
          email: '',
          phone: '',
          whatsapp: ''
        },
        h_contact_en: {
          email: '',
          phone: '',
          whatsapp: ''
        },
        save_as: 'live',
        img_url_id: '',
        img_url_id_1: '',
        h_img_url_id_1: '',
        img_url_1: '', setImage_1: 'none', imageUrl_1: null,
        h_img_url: '', h_setImage: 'none', h_imageUrl: null,
        h_img_url_1: '', h_setImage_1: 'none', h_imageUrl_1: null,
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
      items: state => state.businesscms.items
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
    carouselChange2(index) {
      if (index == 1) {
        this.item21 = true
        this.item22 = false
      }
      if (index == 2) {
        this.item21 = false
        this.item22 = true
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
      if (this.imageC_1) {
        const result = this.$refs.cropperc1.getResult()
        this.form.imageUrl_1 = result.canvas.toDataURL(this.form.imageUrl_1)
        this.form.img_url_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_1), this.form.img_url_1.name)
        this.imageC_1 = false
      }
      if (this.imageCH_1) {
        const result = this.$refs.cropperch1.getResult()
        this.form.h_imageUrl_1 = result.canvas.toDataURL(this.form.h_imageUrl_1)
        this.form.h_img_url_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.h_imageUrl_1), this.form.h_img_url_1.name)
        this.imageCH_1 = false
      }
      if (this.imageCH) {
        const result = this.$refs.cropperch1.getResult()
        this.form.h_imageUrl = result.canvas.toDataURL(this.form.h_imageUrl)
        this.form.h_img_url = this.dataURLtoFile(result.canvas.toDataURL(this.form.h_imageUrl), this.form.h_img_url.name)
        this.imageCH = false
      }
    },
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('businesscms/formBusinessPostPut', formData)
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
      this.$store.dispatch('businesscms/getBusiness').then(data => {
        this.form.title = data.export['title']
        this.form.title_en = data.export['title_en']
        this.form.subtitle = data.export['subtitle']
        this.form.subtitle_en = data.export['subtitle_en']
        this.form.paraghraph_1 = data.export['paraghraph_1']
        this.form.paraghraph_2 = data.export['paraghraph_2']
        this.form.paraghraph_3 = data.export['paraghraph_3']
        this.form.paraghraph_1_en = data.export['paraghraph_1_en']
        this.form.paraghraph_2_en = data.export['paraghraph_2_en']
        this.form.paraghraph_3_en = data.export['paraghraph_3_en']
        this.form.contact = data.export['contact']
        this.form.contact_en = data.export['contact_en']
        this.form.img_url_id_1 = data.export['image_urls']['id']
        this.form.imageUrl_1 = data.export['image_urls']['image_url']
        this.form.h_title = data.manufacturing['title']
        this.form.h_title_en = data.manufacturing['title_en']
        this.form.h_subtitle = data.manufacturing['subtitle']
        this.form.h_subtitle_en = data.manufacturing['subtitle_en']
        this.form.h_paraghraph_1 = data.manufacturing['paraghraph_1']
        this.form.h_paraghraph_2 = data.manufacturing['paraghraph_2']
        this.form.h_paraghraph_3 = data.manufacturing['paraghraph_3']
        this.form.h_paraghraph_1_en = data.manufacturing['paraghraph_1_en']
        this.form.h_paraghraph_2_en = data.manufacturing['paraghraph_2_en']
        this.form.h_paraghraph_3_en = data.manufacturing['paraghraph_3_en']
        this.form.h_contact = data.manufacturing['contact'] ?? { email: '', phone: '', whatsapp: '' }
        this.form.h_contact_en = data.manufacturing['contact_en'] ?? { email: '', phone: '', whatsapp: '' }
        this.form.par_list_2 = data.manufacturing['par_list_2']
        this.form.par_list_3 = data.manufacturing['par_list_3']
        this.form.par_list_2_en = data.manufacturing['par_list_2_en']
        this.form.par_list_3_en = data.manufacturing['par_list_3_en']
        this.form.h_imageUrl = data.manufacturing['image_url']
        this.form.h_imageUrl_1 = data.manufacturing['image_urls']['image_url']
        this.form.h_img_url_id_1 = data.manufacturing['image_urls']['id']
      })
    },
    addItemPL2() {
      var addRow = this.form.par_list_2
      addRow.push({ id: '', name: '' })
    },
    addItemPL2EN() {
      var addRow = this.form.par_list_2_en
      addRow.push({ id: '', name: '' })
    },
    addItemPL3() {
      var addRow = this.form.par_list_3
      addRow.push({ id: '', name: '', form: '' })
    },
    addItemPL3EN() {
      var addRow = this.form.par_list_3_en
      addRow.push({ id: '', name: '', form: '' })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    h_inputImageRenderer(e) {
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
        this.form.h_img_url = file
        this.form.h_setImage = 'upload'
        this.form.h_imageUrl = URL.createObjectURL(e.target.files[0])
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
        this.imageCH_1 = true
        this.form.h_img_url_1 = file
        this.form.h_setImage_1 = 'upload'
        this.form.h_imageUrl_1 = URL.createObjectURL(e.target.files[0])
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
        this.imageC_1 = true
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
    this.$store.dispatch('businesscms/getBusiness')
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
  width: 768px;
  overflow: auto;
}
</style>