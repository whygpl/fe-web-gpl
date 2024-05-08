<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Home-Product" />
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
          <div class="carousel w-full">
            <div id="item1" class="carousel-item w-full">
              <div class="w-full overflow-scroll">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Kategori | Maksimal Karakter 50</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.category_1" :options="optionsTitle"
                    placeholder="Kategori" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Kategori | Maksimal Karakter 50 EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.category_en_1" :options="optionsTitle"
                    placeholder="Kategori EN" theme="snow" />
                </div>
                <!-- <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Product Type</span>
                  </label>
                  <input type="text" v-model="form.product_type_1" placeholder="Product Type" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Product Type EN</span>
                  </label>
                  <input type="text" v-model="form.product_type_en_1" placeholder="Product Type EN" class="input input-bordered w-full" />
                </div> -->
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 100</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.title_1" :options="optionsTitle"
                    placeholder="Judul" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 100 EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.title_en_1" :options="optionsTitle"
                    placeholder="Judul EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Deskripsi</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.description_1" :options="options"
                    placeholder="Deskripsi" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Deskripsi EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.description_en_1" :options="options"
                    placeholder="Deskripsi EN" theme="snow" />
                </div>
                <!-- <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Image - MOBILE</span>
                  </label>
                  <img style="width:400px;" class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlSM_1" />
                  <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png" plain @change="inputImageRendererSM_1"/>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Image - TABLET</span>
                  </label>
                  <img style="height:300px" class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlMD_1" />
                  <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png" plain @change="inputImageRendererMD_1"/>
                </div> -->
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - MOBILE | Rekomendasi 390x720  | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageCSM_1">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlSM_1 + ')' }" class="image-background">
                        </div>
                      <cropper ref="croppercsm1" background-class="cropper-background" :src="form.imageUrlSM_1"
                      :canvas="{
                            maxWidth: 512,
                          }"  :stencil-props="{  aspectRatio: 390/720 }" />
                          <!--  aspectRatio: 390/720  -->
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageCSM_1">
                    <img style="width:390px;height:720px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlSM_1" />
                    <div class="mt-2">
                      <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs"
                      accept=".jpg, .JPG, .PNG, .JPEG, .png" plain @change="inputImageRendererSM_1" />
                  </div>
                    </div>
                  </div>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - TABLET | Rekomendasi 1024x768 |  Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageCMD_1">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlMD_1 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercmd1" background-class="cropper-background" :src="form.imageUrlMD_1"
                      :canvas="{
                            maxWidth: 1024,
                          }"  :stencil-props="{  aspectRatio: 1024/768   }" />
                          <!-- aspectRatio: 1024/768 -->
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                
                  <div v-if="!imageCMD_1">
                    <img style="width:1024px;height:768px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlMD_1" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRendererMD_1" />
                    </div>
                  </div>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | Rekomendasi 1075x603 | Max 2 MB</span>
                  </label>
                  <div v-if="imageCLG_1">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlLG_1 + ')' }" class="image-background"></div>
                      <cropper ref="cropperclg1" background-class="cropper-background" :src="form.imageUrlLG_1"
                      :canvas="{
                            maxHeight: 1024,
                          }"  :stencil-props="{aspectRatio: 	16/9  }" />
                          <!-- aspectRatio: 	16/9 -->
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageCLG_1">
                    <img style="width:1075px;height:603px;" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrlLG_1" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg" plain
                        @change="inputImageRendererLG_1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="item2" class="carousel-item w-full">
              <div class="w-full overflow-scroll">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Kategori | Maksimal Karakter 50</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.category_2" :options="optionsTitle"
                    placeholder="Kategori" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Kategori | Maksimal Karakter 50 EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.category_en_2" :options="optionsTitle"
                    placeholder="Kategori EN" theme="snow" />
                </div>
                <!-- <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Product Type</span>
                  </label>
                  <input type="text" v-model="form.product_type_2" placeholder="Product Type" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Product Type EN</span>
                  </label>
                  <input type="text" v-model="form.product_type_en_2" placeholder="Product Type EN" class="input input-bordered w-full" />
                </div> -->
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 100</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.title_2" :options="optionsTitle"
                    placeholder="Judul" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 100 EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.title_en_2" :options="optionsTitle"
                    placeholder="Judul EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Deskripsi</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.description_2" :options="options"
                    placeholder="Deskripsi" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Deskripsi EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.description_en_2" :options="options"
                    placeholder="Deskripsi EN" theme="snow" />
                </div>
                <!-- <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Image - MOBILE</span>
                  </label>
                  <img style="width:400px" class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlSM_2" />
                  <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png" plain @change="inputImageRendererSM_2"/>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Image - TABLET</span>
                  </label>
                  <img style="height:300px" class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlMD_2" />
                  <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png" plain @change="inputImageRendererMD_2"/>
                </div> -->
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - MOBILE | Rekomendasi 390x720 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageCSM_2">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlSM_2 + ')' }" class="image-background">
                        </div>
                      <cropper ref="croppercsm2" background-class="cropper-background" :src="form.imageUrlSM_2"
                      :canvas="{
                            maxWidth: 512,
                          }"  :stencil-props="{ aspectRatio: 390/720  }" />
                          <!-- aspectRatio: 390/720 -->
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageCSM_2">
                    <img style="width:390px;height:720px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlSM_2" />
                    <div class="mt-2">
                      <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs"
                      accept=".jpg, .JPG, .PNG, .JPEG, .png" plain @change="inputImageRendererSM_2" />
                  </div>
                    </div>
                  </div>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - TABLET | Rekomendasi 1024x768 |  Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageCMD_2">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlMD_2 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercmd2" background-class="cropper-background" :src="form.imageUrlMD_2"
                      :canvas="{
                            maxWidth: 800,
                          }"  :stencil-props="{ aspectRatio: 1024/768  }" />
                          <!-- aspectRatio: 1024/768 -->
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                
                  <div v-if="!imageCMD_2">
                    <img style="width:1024px;height:768px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlMD_2" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .JPG, .PNG, .JPEG, .png"
                        plain @change="inputImageRendererMD_2" />
                    </div>
                  </div>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | Rekomendasi 1075x603 | Max 2 MB</span>
                  </label>
                  <div v-if="imageCLG_2">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlLG_2 + ')' }" class="image-background"></div>
                      <cropper ref="cropperclg2" background-class="cropper-background" :src="form.imageUrlLG_2"
                      :canvas="{
                            maxWidth: 1024,
                          }"  :stencil-props="{ aspectRatio: 	16/9 }" />
                          <!-- aspectRatio: 	16/9  -->
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageCLG_2">
                    <img style="width:1075px;height:603px;" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrlLG_2" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .JPG, .PNG, .JPEG, .png" plain
                        @change="inputImageRendererLG_2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center w-full py-2 gap-2">
            <a href="#item1" @click="carouselChange(1)" :class="item1 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">PRODUK 1</a>
            <a href="#item2" @click="carouselChange(2)" :class="item2 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">PRODUK 2</a>
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
            <!-- <router-link :to="{ name: 'HomePreviewView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'HomeView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
import store from '@/store/index'
import { mapState } from 'vuex'
import { QuillEditor } from '@vueup/vue-quill'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'HomeProductEdit',
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
      item3: false,
      imageCLG_1: false,
      imageCMD_1: false,
      imageCSM_1: false,
      imageCLG_2: false,
      imageCMD_2: false,
      imageCSM_2: false,
      form: {
        category_1: '',
        category_en_1: '',
        product_type_1: '',
        product_type_en_1: '',
        title_1: '',
        title_en_1: '',
        description_1: '',
        description_en_1: '',
        category_2: '',
        category_en_2: '',
        product_type_2: '',
        product_type_en_2: '',
        title_2: '',
        title_en_2: '',
        description_2: '',
        description_en_2: '',
        save_as: 'live',
        img_url_lg_1: '', setImageLG_1: 'none', imageUrlLG_1: null,
        img_url_lg_2: '', setImageLG_2: 'none', imageUrlLG_2: null,
        img_url_md_1: '', setImageMD_1: 'none', imageUrlMD_1: null,
        img_url_md_2: '', setImageMD_2: 'none', imageUrlMD_2: null,
        img_url_sm_1: '', setImageSM_1: 'none', imageUrlSM_1: null,
        img_url_sm_2: '', setImageSM_2: 'none', imageUrlSM_2: null,
      },
      regData: []
    }
  },
  computed: {
    ...mapState({
      items: state => state.homecms.items
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
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
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
      if (this.imageCSM_1) {
        const result = this.$refs.croppercsm1.getResult()
        this.form.imageUrlSM_1 = result.canvas.toDataURL(this.form.imageUrlSM_1)
        this.form.img_url_sm_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlSM_1), this.form.img_url_sm_1.name)
        this.imageCSM_1 = false
      }
      if (this.imageCMD_1) {
        const result = this.$refs.croppercmd1.getResult()
        this.form.imageUrlMD_1 = result.canvas.toDataURL(this.form.imageUrlMD_1)
        this.form.img_url_md_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlMD_1), this.form.img_url_md_1.name)
        this.imageCMD_1 = false
      }
      if (this.imageCLG_1) {
        const result = this.$refs.cropperclg1.getResult()
        this.form.imageUrlLG_1 = result.canvas.toDataURL(this.form.imageUrlLG_1)
        this.form.img_url_lg_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlLG_1), this.form.img_url_lg_1.name)
        this.imageCLG_1 = false
      }

      if (this.imageCSM_2) {
        const result = this.$refs.croppercsm2.getResult()
        this.form.imageUrlSM_2 = result.canvas.toDataURL(this.form.imageUrlSM_2)
        this.form.img_url_sm_2 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlSM_2), this.form.img_url_sm_2.name)
        this.imageCSM_2 = false
      }
      if (this.imageCMD_2) {
        const result = this.$refs.croppercmd2.getResult()
        this.form.imageUrlMD_2 = result.canvas.toDataURL(this.form.imageUrlMD_2)
        this.form.img_url_md_2 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlMD_2), this.form.img_url_md_2.name)
        this.imageCMD_2 = false
      }
      if (this.imageCLG_2) {
        const result = this.$refs.cropperclg2.getResult()
        this.form.imageUrlLG_2 = result.canvas.toDataURL(this.form.imageUrlLG_2)
        this.form.img_url_lg_2 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlLG_2), this.form.img_url_lg_2.name)
        this.imageCLG_2 = false
        
      }
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('homecms/formProductPostPut', formData)
        .then(res => {
          this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
          this.$store.dispatch('home/getAll', 'preview')
          if (localStorage.getItem('homepreview')) {
            this.getLocalHome = JSON.parse(localStorage.getItem('homepreview'))
          } else {
            this.getLocalHome = this.home
            this.$store.dispatch('home/getAll', 'preview')
          }
          this.$store.dispatch('home/getAll', 'live')
          if (localStorage.getItem('homelive')) {
            this.getLocalHome = JSON.parse(localStorage.getItem('homelive'))
          } else {
            this.getLocalHome = this.home
            this.$store.dispatch('home/getAll', 'live')
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
      this.$store.dispatch('homecms/getProduct').then(data => {
        this.form.category_1 = data[0]['category']
        this.form.category_en_1 = data[0]['category_en']
        this.form.product_type_1 = data[0]['product_type']
        this.form.product_type_en_1 = data[0]['product_type_en']
        this.form.title_1 = data[0]['title']
        this.form.title_en_1 = data[0]['title_en']
        this.form.description_1 = data[0]['description']
        this.form.description_en_1 = data[0]['description_en']
        this.form.category_2 = data[1]['category']
        this.form.category_en_2 = data[1]['category_en']
        this.form.product_type_2 = data[1]['product_type']
        this.form.product_type_en_2 = data[1]['product_type_en']
        this.form.title_2 = data[1]['title']
        this.form.title_en_2 = data[1]['title_en']
        this.form.description_2 = data[1]['description']
        this.form.description_en_2 = data[1]['description_en']
        this.form.imageUrlLG_1 = data[0]['image_url_lg']
        this.form.imageUrlLG_2 = data[1]['image_url_lg']
        this.form.imageUrlMD_1 = data[0]['image_url_md']
        this.form.imageUrlMD_2 = data[1]['image_url_md']
        this.form.imageUrlSM_1 = data[0]['image_url_sm']
        this.form.imageUrlSM_2 = data[1]['image_url_sm']
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRendererLG_1(e) {
      const file = e.target.files[0];
      if (!this.isValidFileSize(file, 2) && false) {
        this.notification(
          "Failed :",
          "File size exceeds the limit of 2 MB",
          "bg-red-500",
          "white",
          "50"
        );
        return;
      } else {
        this.imageCLG_1 = true
        this.form.img_url_lg_1 = file
        this.form.setImageLG_1 = 'upload'
        this.form.imageUrlLG_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererLG_2(e) {
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
        this.imageCLG_2 = true
        this.form.img_url_lg_2 = file
        this.form.setImageLG_2 = 'upload'
        this.form.imageUrlLG_2 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererMD_1(e) {
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
        this.imageCMD_1 = true
        this.form.img_url_md_1 = file
        this.form.setImageMD_1 = 'upload'
        this.form.imageUrlMD_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererMD_2(e) {
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
        this.imageCMD_2 = true
        this.form.img_url_md_2 = file
        this.form.setImageMD_2 = 'upload'
        this.form.imageUrlMD_2 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererSM_1(e) {
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
        this.imageCSM_1 = true
        this.form.img_url_sm_1 = file
        this.form.setImageSM_1 = 'upload'
        this.form.imageUrlSM_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererSM_2(e) {
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
        this.imageCSM_2 = true
        this.form.img_url_sm_2 = file
        this.form.setImageSM_2 = 'upload'
        this.form.imageUrlSM_2 = URL.createObjectURL(e.target.files[0])
      }
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('homecms/getProduct')
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
  width: 600px;
  overflow: auto;
}
</style>