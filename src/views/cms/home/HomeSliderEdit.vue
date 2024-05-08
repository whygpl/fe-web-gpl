<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Home-Slider" />
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
          <div class="flex justify-center w-full py-2 gap-2">
            <a href="#item1" @click="carouselChange(1)" :class="item1 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Slide 1</a>
            <a href="#item2" @click="carouselChange(2)" :class="item2 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Slide 2</a>
            <a href="#item3" @click="carouselChange(3)" :class="item3 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Slide 3</a>
          </div>
          <div class="carousel w-full">
            <div id="item1" class="carousel-item w-full">
              <div class="w-full overflow-scroll">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Warna Tulisan</span>
                  </label>
                  <select v-model="form.colour_1" class="select select-bordered">
                    <option value="white">Warna Putih</option>
                    <option value="primary">Warna Biru</option>
                    <option value="black">Warna Hitam</option>
                  </select>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 50</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.title_1" :options="optionsTitle"
                    placeholder="Judul" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
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
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - MOBILE | Rekomendasi 320x720 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageC_SM_1">
                    <div class="cropper-wrappersm">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlSM_1 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercsm1" background-class="cropper-background" :src="form.imageUrlSM_1"
                      :canvas="{ maxWidth: 512,}" :stencil-props="{ aspectRatio: 320 / 720 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageC_SM_1">
                    <img style="width:320px;height:720px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlSM_1" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRendererSM_1" />
                    </div>
                  </div>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - TABLET | Rekomendasi 1024x768 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageC_MD_1">
                    <div class="cropper-wrappermd">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlMD_1 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercmd1" background-class="cropper-background" :src="form.imageUrlMD_1"
                      :canvas="{ maxWidth: 800,}" :stencil-props="{ aspectRatio: 1024 / 768 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageC_MD_1">
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
                    <span class="label-text">Gambar - DEKSTOP | Rekomendasi 1200x810 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageC_LG_1">
                    <div class="cropper-wrapperlg">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlLG_1 + ')' }" class="image-background">
                      </div>
                      <cropper ref="cropperclg1" background-class="cropper-background" :src="form.imageUrlLG_1"
                      :canvas="{ maxWidth: 1024}" :stencil-props="{ aspectRatio: 1200 / 810 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageC_LG_1">
                    <img style="width:1200px;height:810px"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlLG_1" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRendererLG_1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="item2" class="carousel-item w-full">
              <div class="w-full overflow-scroll">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Warna Tulisan</span>
                  </label>
                  <select v-model="form.colour_2" class="select select-bordered">
                    <option value="white">Warna Putih</option>
                    <option value="primary">Warna Biru</option>
                    <option value="black">Warna Hitam</option>
                  </select>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 50</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.title_2" :options="optionsTitle"
                    placeholder="Judul" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.title_en_2" :options="optionsTitle"
                    placeholder="Judul EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Deskripsi</span>
                  </label>
                  <!-- <textarea class="textarea textarea-bordered h-24" v-model="form.description_2"
                    placeholder="Deskripsi"></textarea> -->
                  <QuillEditor contentType="html" v-model:content="form.description_2" :options="options"
                    placeholder="Deskripsi" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Deskripsi EN</span>
                  </label>
                  <!-- <textarea class="textarea textarea-bordered h-24" v-model="form.description_en_2"
                    placeholder="Deskripsi"></textarea> -->
                  <QuillEditor contentType="html" v-model:content="form.description_en_2" :options="options"
                    placeholder="Deskripsi EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - MOBILE | Rekomendasi 320x720 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageC_SM_2">
                    <div class="cropper-wrappersm">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlSM_2 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercsm2" background-class="cropper-background" :src="form.imageUrlSM_2"
                      :canvas="{ maxWidth: 512}" :stencil-props="{ aspectRatio: 320 / 720 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageC_SM_2">
                    <img style="width:320px;height:720px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlSM_2" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRendererSM_2" />
                    </div>
                  </div>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - TABLET | Rekomendasi 1024x768 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageC_MD_2">
                    <div class="cropper-wrappermd">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlMD_2 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercmd2" background-class="cropper-background" :src="form.imageUrlMD_2"
                      :canvas="{ maxWidth: 800}" :stencil-props="{ aspectRatio: 1024 / 768 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageC_MD_2">
                    <img style="width:1024px;height:768px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlMD_2" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRendererMD_2" />
                    </div>
                  </div>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - DEKSTOP | Rekomendasi 1200x810 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageC_LG_2">
                    <div class="cropper-wrapperlg">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlLG_2 + ')' }" class="image-background">
                      </div>
                      <cropper ref="cropperclg2" background-class="cropper-background" :src="form.imageUrlLG_2"
                      :canvas="{ maxWidth: 1024}" :stencil-props="{ aspectRatio: 1200 / 810 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageC_LG_2">
                    <img style="width:1200px;height:810px"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlLG_2" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRendererLG_2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="item3" class="carousel-item w-full">
              <div class="w-full overflow-scroll">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Warna Tulisan</span>
                  </label>
                  <select v-model="form.colour_3" class="select select-bordered">
                    <option value="white">Warna Putih</option>
                    <option value="primary">Warna Biru</option>
                    <option value="black">Warna Hitam</option>
                  </select>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 50</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.title_3" :options="optionsTitle"
                    placeholder="Judul" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.title_en_3" :options="optionsTitle"
                    placeholder="Judul EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Deskripsi</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.description_3" :options="options"
                    placeholder="Deskripsi" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Deskripsi EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.description_en_3" :options="options"
                    placeholder="Deskripsi EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - MOBILE | Rekomendasi 320x720 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageC_SM_3">
                    <div class="cropper-wrappersm">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlSM_3 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercsm3" background-class="cropper-background" :src="form.imageUrlSM_3"
                      :canvas="{ maxWidth: 512 }" :stencil-props="{ aspectRatio: 320 / 720 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageC_SM_3">
                    <img style="width:320px;height:720px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlSM_3" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRendererSM_3" />
                    </div>
                  </div>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - TABLET | Rekomendasi 1024x768 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageC_MD_3">
                    <div class="cropper-wrappermd">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlMD_3 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercmd3" background-class="cropper-background" :src="form.imageUrlMD_3"
                      :canvas="{ maxWidth: 800,}" :stencil-props="{ aspectRatio: 1024 / 768 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageC_MD_3">
                    <img style="width:1024px;height:768px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlMD_3" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRendererMD_3" />
                    </div>
                  </div>
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - DEKSTOP | Rekomendasi 1200x810 | Maksimal 2 MB</span>
                  </label>
                  <div v-if="imageC_LG_3">
                    <div class="cropper-wrapperlg">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrlLG_3 + ')' }" class="image-background">
                      </div>
                      <cropper ref="cropperclg3" background-class="cropper-background" :src="form.imageUrlLG_3"
                      :canvas="{ maxWidth: 1024 }" :stencil-props="{ aspectRatio: 1200 / 810 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>
                  <div v-if="!imageC_LG_3">
                    <img style="width:1200px;height:810px"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlLG_3" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRendererLG_3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center w-full py-2 gap-2">
            <a href="#item1" @click="carouselChange(1)" :class="item1 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Slide 1</a>
            <a href="#item2" @click="carouselChange(2)" :class="item2 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Slide 2</a>
            <a href="#item3" @click="carouselChange(3)" :class="item3 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Slide 3</a>
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
  name: 'HomeSliderEdit',
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
      imageC_SM_1: false,
      imageC_SM_2: false,
      imageC_SM_3: false,
      imageC_MD_1: false,
      imageC_MD_2: false,
      imageC_MD_3: false,
      imageC_LG_1: false,
      imageC_LG_2: false,
      imageC_LG_3: false,
      form: {
        colour_1: '',
        title_1: '',
        title_en_1: '',
        description_1: '',
        description_en_1: '',
        colour_2: '',
        title_2: '',
        title_en_2: '',
        description_2: '',
        description_en_2: '',
        colour_3: '',
        title_3: '',
        title_en_3: '',
        description_3: '',
        description_en_3: '',
        save_as: 'live',
        img_url_lg_1: '', setImageLG_1: 'none', imageUrlLG_1: null,
        img_url_lg_2: '', setImageLG_2: 'none', imageUrlLG_2: null,
        img_url_lg_3: '', setImageLG_3: 'none', imageUrlLG_3: null,
        img_url_md_1: '', setImageMD_1: 'none', imageUrlMD_1: null,
        img_url_md_2: '', setImageMD_2: 'none', imageUrlMD_2: null,
        img_url_md_3: '', setImageMD_3: 'none', imageUrlMD_3: null,
        img_url_sm_1: '', setImageSM_1: 'none', imageUrlSM_1: null,
        img_url_sm_2: '', setImageSM_2: 'none', imageUrlSM_2: null,
        img_url_sm_3: '', setImageSM_3: 'none', imageUrlSM_3: null,
      },
      stencilprops: {
        handlers: {},
        movable: true,
        resizable: false,
      },
      regData: [],
    }
  },
  computed: {
    ...mapState({
      items: state => state.homecms.items
    })
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
      if (this.imageC_SM_1) {
        const result = this.$refs.croppercsm1.getResult()
        this.form.imageUrlSM_1 = result.canvas.toDataURL(this.form.imageUrlSM_1)
        this.form.img_url_sm_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlSM_1), this.form.img_url_sm_1.name)
        this.imageC_SM_1 = false
      }
      if (this.imageC_MD_1) {
        const result = this.$refs.croppercmd1.getResult()
        this.form.imageUrlMD_1 = result.canvas.toDataURL(this.form.imageUrlMD_1)
        this.form.img_url_md_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlMD_1), this.form.img_url_md_1.name)
        this.imageC_MD_1 = false
      }
      if (this.imageC_LG_1) {
        const result = this.$refs.cropperclg1.getResult()
        this.form.imageUrlLG_1 = result.canvas.toDataURL(this.form.imageUrlLG_1)
        this.form.img_url_lg_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlLG_1), this.form.img_url_lg_1.name)
        this.imageC_LG_1 = false
      }
      if (this.imageC_SM_2) {
        const result = this.$refs.croppercsm2.getResult()
        this.form.imageUrlSM_2 = result.canvas.toDataURL(this.form.imageUrlSM_2)
        this.form.img_url_sm_2 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlSM_2), this.form.img_url_sm_2.name)
        this.imageC_SM_2 = false
      }
      if (this.imageC_MD_2) {
        const result = this.$refs.croppercmd2.getResult()
        this.form.imageUrlMD_2 = result.canvas.toDataURL(this.form.imageUrlMD_2)
        this.form.img_url_md_2 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlMD_2), this.form.img_url_md_2.name)
        this.imageC_MD_2 = false
      }
      if (this.imageC_LG_2) {
        const result = this.$refs.cropperclg2.getResult()
        this.form.imageUrlLG_2 = result.canvas.toDataURL(this.form.imageUrlLG_2)
        this.form.img_url_lg_2 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlLG_2), this.form.img_url_lg_2.name)
        this.imageC_LG_2 = false
      }
      if (this.imageC_SM_3) {
        const result = this.$refs.croppercsm3.getResult()
        this.form.imageUrlSM_3 = result.canvas.toDataURL(this.form.imageUrlSM_3)
        this.form.img_url_sm_3 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlSM_3), this.form.img_url_sm_3.name)
        this.imageC_SM_3 = false
      }
      if (this.imageC_MD_3) {
        const result = this.$refs.croppercmd3.getResult()
        this.form.imageUrlMD_3 = result.canvas.toDataURL(this.form.imageUrlMD_3)
        this.form.img_url_md_3 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlMD_3), this.form.img_url_md_3.name)
        this.imageC_MD_3 = false
      }
      if (this.imageC_LG_3) {
        const result = this.$refs.cropperclg3.getResult()
        this.form.imageUrlLG_3 = result.canvas.toDataURL(this.form.imageUrlLG_3)
        this.form.img_url_lg_3 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrlLG_3), this.form.img_url_lg_3.name)
        this.imageC_LG_3 = false
      }
    },
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('homecms/formHeroPostPut', formData)
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
      this.$store.dispatch('homecms/getHero').then(data => {
        this.form.colour_1 = data[0]['colour']
        this.form.title_1 = data[0]['title']
        this.form.title_en_1 = data[0]['title_en']
        this.form.description_1 = data[0]['description']
        this.form.description_en_1 = data[0]['description_en']
        this.form.colour_2 = data[1]['colour']
        this.form.title_2 = data[1]['title']
        this.form.title_en_2 = data[1]['title_en']
        this.form.description_2 = data[1]['description']
        this.form.description_en_2 = data[1]['description_en']
        this.form.colour_3 = data[2]['colour']
        this.form.title_3 = data[2]['title']
        this.form.title_en_3 = data[2]['title_en']
        this.form.description_3 = data[2]['description']
        this.form.description_en_3 = data[2]['description_en']
        this.form.imageUrlLG_1 = data[0]['image_url_lg']
        this.form.imageUrlLG_2 = data[1]['image_url_lg']
        this.form.imageUrlLG_3 = data[2]['image_url_lg']
        this.form.imageUrlMD_1 = data[0]['image_url_md']
        this.form.imageUrlMD_2 = data[1]['image_url_md']
        this.form.imageUrlMD_3 = data[2]['image_url_md']
        this.form.imageUrlSM_1 = data[0]['image_url_sm']
        this.form.imageUrlSM_2 = data[1]['image_url_sm']
        this.form.imageUrlSM_3 = data[2]['image_url_sm']
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRendererLG_1(e) {
      const file = e.target.files[0]
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
        this.imageC_LG_1 = true
        this.form.img_url_lg_1 = file
        this.form.setImageLG_1 = 'upload'
        this.form.imageUrlLG_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererLG_2(e) {
      const file = e.target.files[0]
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
        this.imageC_LG_2 = true
        this.form.img_url_lg_2 = file
        this.form.setImageLG_2 = 'upload'
        this.form.imageUrlLG_2 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererLG_3(e) {
      const file = e.target.files[0]
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
        this.imageC_LG_3 = true
        this.form.img_url_lg_3 = file
        this.form.setImageLG_3 = 'upload'
        this.form.imageUrlLG_3 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererMD_1(e) {
      const file = e.target.files[0]
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
        this.imageC_MD_1 = true
        this.form.img_url_md_1 = file
        this.form.setImageMD_1 = 'upload'
        this.form.imageUrlMD_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererMD_2(e) {
      const file = e.target.files[0]
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
        this.imageC_MD_2 = true
        this.form.img_url_md_2 = file
        this.form.setImageMD_2 = 'upload'
        this.form.imageUrlMD_2 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererMD_3(e) {
      const file = e.target.files[0]
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
        this.imageC_MD_3 = true
        this.form.img_url_md_3 = file
        this.form.setImageMD_3 = 'upload'
        this.form.imageUrlMD_3 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererSM_1(e) {
      const file = e.target.files[0]
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
        this.imageC_SM_1 = true
        this.form.img_url_sm_1 = file
        this.form.setImageSM_1 = 'upload'
        this.form.imageUrlSM_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererSM_2(e) {
      const file = e.target.files[0]
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
        this.imageC_SM_2 = true
        this.form.img_url_sm_2 = file
        this.form.setImageSM_2 = 'upload'
        this.form.imageUrlSM_2 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRendererSM_3(e) {
      const file = e.target.files[0]
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
        this.imageC_SM_3 = true
        this.form.img_url_sm_3 = file
        this.form.setImageSM_3 = 'upload'
        this.form.imageUrlSM_3 = URL.createObjectURL(e.target.files[0])
      }
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('homecms/getHero')
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
.cropper-wrapper,.cropper-wrappersm,.cropper-wrappermd,.cropper-wrapperlg {
  width: 600px;
  overflow: auto;
}
</style>