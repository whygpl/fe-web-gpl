<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Home-Quality" />
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
                    <span class="label-text">Nama | Maksimal Karakter 50</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.name_1" :options="optionsTitle"
                    placeholder="Nama" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Nama | Maksimal Karakter 50 EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.name_en_1" :options="optionsTitle"
                    placeholder="Nama EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | *96px x 96px | Max 2 Mb</span>
                  </label>
                  <div v-if="imageC_1">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_1 + ')' }" class="image-background"></div>
                      <cropper ref="cropperc1" background-class="cropper-background" :src="form.imageUrl_1"
                        :min-height="96" :min-width="96" :stencil-size="{ width: 96, height: 96 }"
                        :stencil-props="stencilprops" image-restriction="stencil" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageC_1">
                    <div v-if="form.imageUrl_1">
                        <img style="width:96px;height:96px;" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrl_1" />
                    </div>
                    
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRenderer_1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="item2" class="carousel-item w-full">
              <div class="w-full overflow-scroll">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Nama | Maksimal Karakter 50</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.name_2" :options="optionsTitle"
                    placeholder="Nama EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Nama | Maksimal Karakter 50 EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.name_en_2" :options="optionsTitle"
                    placeholder="Nama EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | *96px x 96px | Max 2 Mb</span>
                  </label>
                  <div v-if="imageC_2">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_2 + ')' }" class="image-background"></div>
                      <cropper ref="cropperc2" background-class="cropper-background" :src="form.imageUrl_2"
                        :min-height="96" :min-width="96" :stencil-size="{ width: 96, height: 96 }"
                        :stencil-props="stencilprops" image-restriction="stencil" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageC_2">
                    <img style="width:96px;height:96px;" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrl_2" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRenderer_2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="item3" class="carousel-item w-full">
              <div class="w-full overflow-scroll">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Nama | Maksimal Karakter 50</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.name_3" :options="optionsTitle"
                    placeholder="Nama EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Nama | Maksimal Karakter 50 EN</span>
                  </label>
                  <QuillEditor contentType="html" v-model:content="form.name_en_3" :options="optionsTitle"
                    placeholder="Nama EN" theme="snow" />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | *96px x 96px | Max 2 Mb</span>
                  </label>
                  <div v-if="imageC_3">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_3 + ')' }" class="image-background"></div>
                      <cropper ref="cropperc3" background-class="cropper-background" :src="form.imageUrl_3"
                        :min-height="96" :min-width="96" :stencil-size="{ width: 96, height: 96 }"
                        :stencil-props="stencilprops" image-restriction="stencil" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageC_3">
                    <img style="width:96px;height:96px;" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrl_3" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRenderer_3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center w-full py-2 gap-2">
            <a href="#item1" @click="carouselChange(1)" :class="item1 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Qualities 1</a>
            <a href="#item2" @click="carouselChange(2)" :class="item2 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Qualities 2</a>
            <a href="#item3" @click="carouselChange(3)" :class="item3 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Qualities 3</a>
          </div>
          <div class="carousel w-full">
            <div id="itemc1" class="carousel-item w-full">
              <div class="w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | *244px x 244px | Max 2 Mb</span>
                  </label>
                  <div v-if="imageCC_1">
                    <div class="cropper-wrapperc">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_c_1 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercc1" background-class="cropper-background" :src="form.imageUrl_c_1"
                        :min-height="244" :min-width="244" :stencil-size="{ width: 244, height: 244 }"
                        :stencil-props="stencilprops" image-restriction="stencil" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageCC_1">
                    <img style="width:244px;height:244px;" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrl_c_1" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRenderer_c_1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="itemc2" class="carousel-item w-full">
              <div class="w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | *244px x 244px | Max 2 Mb</span>
                  </label>
                  <div v-if="imageCC_2">
                    <div class="cropper-wrapperc">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_c_2 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercc2" background-class="cropper-background" :src="form.imageUrl_c_2"
                        :min-height="244" :min-width="244" :stencil-size="{ width: 244, height: 244 }"
                        :stencil-props="stencilprops" image-restriction="stencil" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageCC_2">
                    <img style="width:244px;height:244px;" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrl_c_2" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRenderer_c_2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="itemc3" class="carousel-item w-full">
              <div class="w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | *244px x 244px | Max 2 Mb</span>
                  </label>
                  <div v-if="imageCC_3">
                    <div class="cropper-wrapperc">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_c_3 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercc3" background-class="cropper-background" :src="form.imageUrl_c_3"
                        :min-height="244" :min-width="244" :stencil-size="{ width: 244, height: 244 }"
                        :stencil-props="stencilprops" image-restriction="stencil" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageCC_3">
                    <img style="width:244px;height:244px;" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrl_c_3" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRenderer_c_3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="itemc4" class="carousel-item w-full">
              <div class="w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | *244px x 244px | Max 2 Mb</span>
                  </label>
                  <div v-if="imageCC_4">
                    <div class="cropper-wrapperc">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_c_4 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercc4" background-class="cropper-background" :src="form.imageUrl_c_4"
                        :min-height="244" :min-width="244" :stencil-size="{ width: 244, height: 244 }"
                        :stencil-props="stencilprops" image-restriction="stencil" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageCC_4">
                    <img style="width:244px;height:244px;" class="mb-4 object-cover object-center lg:block"
                      :src="form.imageUrl_c_4" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRenderer_c_4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="itemc5" class="carousel-item w-full">
              <div class="w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | *244px x 244px | Max 2 Mb</span>
                  </label>
                  <div v-if="imageCC_5">
                    <div class="cropper-wrapperc">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_c_5 + ')' }" class="image-background">
                      </div>
                      <cropper ref="croppercc5" background-class="cropper-background" :src="form.imageUrl_c_5"
                        :min-height="244" :min-width="244" :stencil-size="{ width: 244, height: 244 }"
                        :stencil-props="stencilprops" image-restriction="stencil" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageCC_5">
                    <img style="width:244px;height:244px;" class="mb-4 object-cover object-center lg:block"
                      :src="form.imageUrl_c_5" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRenderer_c_5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center w-full py-2 gap-2">
            <a href="#itemc1" @click="carouselChange2(1)" :class="item21 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Award 1</a>
            <a href="#itemc2" @click="carouselChange2(2)" :class="item22 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Award 2</a>
            <a href="#itemc3" @click="carouselChange2(3)" :class="item23 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Award 3</a>
            <a href="#itemc4" @click="carouselChange2(4)" :class="item24 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Award 4</a>
            <a href="#itemc5" @click="carouselChange2(5)" :class="item25 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Award 5</a>
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
import { mapState } from 'vuex'
import { QuillEditor } from '@vueup/vue-quill'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'HomeAboutUsEdit',
  components: { Navbar, Menu, Footer, Cropper, QuillEditor },
  data() {
    return {
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
      item23: false,
      imageC_1: false,
      imageC_2: false,
      imageC_3: false,
      imageCC_1: false,
      imageCC_2: false,
      imageCC_3: false,
      imageCC_4: false,
      imageCC_5: false,
      form: {
        name_1: '',
        name_en_1: '',
        name_2: '',
        name_en_2: '',
        name_3: '',
        name_en_3: '',
        save_as: 'live',
        img_url_id_1: '',
        img_url_id_2: '',
        img_url_id_3: '',
        img_url_1: '', setImage_1: 'none', imageUrl_1: null,
        img_url_2: '', setImage_2: 'none', imageUrl_2: null,
        img_url_3: '', setImage_3: 'none', imageUrl_3: null,
        img_url_id_c_1: '',
        img_url_id_c_2: '',
        img_url_id_c_3: '',
        img_url_id_c_4: '',
        img_url_c_1: '', setImage_c_1: 'none', imageUrl_c_1: null,
        img_url_c_2: '', setImage_c_2: 'none', imageUrl_c_2: null,
        img_url_c_3: '', setImage_c_3: 'none', imageUrl_c_3: null,
        img_url_c_4: '', setImage_c_4: 'none', imageUrl_c_4: null,
        img_url_c_5: '', setImage_c_5: 'none', imageUrl_c_5: null,
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
    carouselChange2(index) {
      if (index == 1) {
        this.item21 = true
        this.item22 = false
        this.item23 = false
        this.item24 = false
        this.item25 = false
      }
      if (index == 2) {
        this.item21 = false
        this.item22 = true
        this.item23 = false
        this.item24 = false
        this.item25 = false
      }
      if (index == 3) {
        this.item21 = false
        this.item22 = false
        this.item23 = true
        this.item24 = false
        this.item25 = false
      }
      if (index == 4) {
        this.item21 = false
        this.item22 = false
        this.item23 = false
        this.item24 = true
        this.item25 = false
      }
      if (index == 5) {
        this.item21 = false
        this.item22 = false
        this.item23 = false
        this.item24 = false
        this.item25 = true
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
      if (this.imageC_1) {
        const result = this.$refs.cropperc1.getResult()
        this.form.imageUrl_1 = result.canvas.toDataURL(this.form.imageUrl_1)
        this.form.img_url_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_1), this.form.img_url_1.name)
        this.imageC_1 = false
      }
      if (this.imageC_2) {
        const result = this.$refs.cropperc2.getResult()
        this.form.imageUrl_2 = result.canvas.toDataURL(this.form.imageUrl_2)
        this.form.img_url_2 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_2), this.form.img_url_2.name)
        this.imageC_2 = false
      }
      if (this.imageC_3) {
        const result = this.$refs.cropperc3.getResult()
        this.form.imageUrl_3 = result.canvas.toDataURL(this.form.imageUrl_3)
        this.form.img_url_3 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_3), this.form.img_url_3.name)
        this.imageC_3 = false
      }
      if (this.imageCC_1) {
        const result = this.$refs.croppercc1.getResult()
        this.form.imageUrl_c_1 = result.canvas.toDataURL(this.form.imageUrl_c_1)
        this.form.img_url_c_1 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_c_1), this.form.img_url_c_1.name)
        this.imageCC_1 = false
      }
      if (this.imageCC_2) {
        const result = this.$refs.croppercc2.getResult()
        this.form.imageUrl_c_2 = result.canvas.toDataURL(this.form.imageUrl_c_2)
        this.form.img_url_c_2 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_c_2), this.form.img_url_c_2.name)
        this.imageCC_2 = false
      }
      if (this.imageCC_3) {
        const result = this.$refs.croppercc3.getResult()
        this.form.imageUrl_c_3 = result.canvas.toDataURL(this.form.imageUrl_c_3)
        this.form.img_url_c_3 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_c_3), this.form.img_url_c_3.name)
        this.imageCC_3 = false
      }
      if (this.imageCC_4) {
        const result = this.$refs.croppercc4.getResult()
        this.form.imageUrl_c_4 = result.canvas.toDataURL(this.form.imageUrl_c_4)
        this.form.img_url_c_4 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_c_4), this.form.img_url_c_4.name)
        this.imageCC_4 = false
      }
      if (this.imageCC_5) {
        const result = this.$refs.croppercc5.getResult()
        this.form.imageUrl_c_5 = result.canvas.toDataURL(this.form.imageUrl_c_5)
        this.form.img_url_c_5 = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl_c_5), this.form.img_url_c_5.name)
        this.imageCC_5 = false
      }
    },
    saveData() {
      const formData = this.form
      //console.log(formData);
      
      this.$store.dispatch('homecms/formAQPostPut', formData)
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
      this.$store.dispatch('homecms/getQuality').then(data => {
        console.log(data)
        this.form.name_1 = data.quality[0]['name']
        this.form.name_en_1 = data.quality[0]['name_en']
        this.form.name_2 = data.quality[1]['name']
        this.form.name_en_2 = data.quality[1]['name_en']
        this.form.name_3 = data.quality[2]['name']
        this.form.name_en_3 = data.quality[2]['name_en']
        this.form.imageUrl_1 = data.quality[0]['image_url']
        this.form.imageUrl_2 = data.quality[1]['image_url']
        this.form.imageUrl_3 = data.quality[2]['image_url']
        this.form.img_url_id_1 = data.quality[0]['id']
        this.form.img_url_id_2 = data.quality[1]['id']
        this.form.img_url_id_3 = data.quality[2]['id']
        this.form.img_url_id_c_1 = data.award[0]['id']
        this.form.img_url_id_c_2 = data.award[1]['id']
        this.form.img_url_id_c_3 = data.award[2]['id']
        this.form.img_url_id_c_4 = data.award[3]['id']
        this.form.imageUrl_c_1 = data.award[0]['image_url']
        this.form.imageUrl_c_2 = data.award[1]['image_url']
        this.form.imageUrl_c_3 = data.award[2]['image_url']
        this.form.imageUrl_c_4 = data.award[3]['image_url']
        this.form.imageUrl_c_5 = data.award[4]['image_url']
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer_1(e) {
      console.log("Cek");
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
        this.imageC_1 = true
        this.form.img_url_1 = file
        this.form.setImage_1 = 'upload'
        this.form.imageUrl_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_2(e) {
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
        this.imageC_2 = true
        this.form.img_url_2 = file
        this.form.setImage_2 = 'upload'
        this.form.imageUrl_2 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_3(e) {
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
        this.imageCC_3 = true
        this.form.img_url_3 = file
        this.form.setImage_3 = 'upload'
        this.form.imageUrl_3 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_c_1(e) {
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
        this.imageCC_1 = true
        this.form.img_url_c_1 = file
        this.form.setImage_c_1 = 'upload'
        this.form.imageUrl_c_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_c_2(e) {
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
        this.imageCC_2 = true
        this.form.img_url_c_2 = file
        this.form.setImage_c_2 = 'upload'
        this.form.imageUrl_c_2 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_c_3(e) {
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
        this.imageCC_3 = true
        this.form.img_url_c_3 = file
        this.form.setImage_c_3 = 'upload'
        this.form.imageUrl_c_3 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_c_4(e) {
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
        this.imageCC_4 = true
        this.form.img_url_c_4 = file
        this.form.setImage_c_4 = 'upload'
        this.form.imageUrl_c_4 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_c_5(e) {
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
        this.imageCC_5 = true
        this.form.img_url_c_5 = file
        this.form.setImage_c_5 = 'upload'
        this.form.imageUrl_c_5 = URL.createObjectURL(e.target.files[0])
      }
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('homecms/getAbout')
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
  /* width: 96px;
	height: 96px; */
  /* background: black; */
  background-repeat: no-repeat;
}

.cropper-wrapperc {
  overflow: hidden;
  position: relative;
  /* width: 244px;
	height: 244px; */
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