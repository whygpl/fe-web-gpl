<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="HProduct-Category" />
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
                <span class="label-text">Produk Kesehatan/Resep</span>
              </label>
              <select v-model="form.product_type_id" class="select select-bordered">
                <option value="1">Produk Kesehatan</option>
                <option value="2">Resep</option>
              </select>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Kategori</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title" :options="options"
                    placeholder="Kategori" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Kategori EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title_en" :options="options"
                    placeholder="Kategori EN" theme="snow" />
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
            <template v-if="form.product_type_id == '1'">
              <div class="flex w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar | 4:3 | Max 2 MB</span>
                  </label>
                    <div v-if="imageC">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl + ')' }" class="image-background">
                      </div>
                      <cropper ref="cropperc" background-class="cropper-background" :src="form.imageUrl" 
                      :canvas="{
                          maxWidth: 1024,
                        }" :stencil-props="{
                          aspectRatio: 700 / 500
                        }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                    </div>
                  </div>

                  <div v-if="!imageC">
                    <img style="width:700px;height:500px;"
                      class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrl" />
                    <div class="mt-2">
                      <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                        plain @change="inputImageRenderer" />
                    </div>
                  </div>

                </div>
              </div>
            </template>
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
            <template v-if="form.product_type_id == '1'">
              <!-- <router-link :to="{ name: 'ProductTypeHealthViewPreview' }"><button class="btn btn-neutral ml-2">Lihat
                  Perubahan</button></router-link> -->
              <router-link :to="{ name: 'ProductTypeHealthView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
                  (Live)</button></router-link>
            </template>
            <template v-if="form.product_type_id == '2'">
              <!-- <router-link :to="{ name: 'ProductTypeDrugViewPreview' }"><button class="btn btn-neutral ml-2">Lihat
                  Perubahan</button></router-link> -->
              <router-link :to="{ name: 'ProductTypeDrugView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
                  (Live)</button></router-link>
            </template>
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
const { toast, snackbar } = require('tailwind-toast')
import { QuillEditor } from '@vueup/vue-quill'
export default {
  name: 'HomeAboutUsEdit',
  components: { Navbar, Menu, Footer,Cropper,QuillEditor },
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
      form: {
        id: '',
        product_type_id: '',
        title: '',
        title_en: '',
        description: '',
        description_en: '',
        save_as: 'live',
        img_url: '',
        img_url: '', setImage: 'none', imageUrl: null,
      },
      imageC: false,
      regData: []
    }
  },
  computed: {
    ...mapState({
      items: state => state.productcms.items
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
        const result = this.$refs.cropperc.getResult()
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
      console.log(this.form);
      if (this.form.product_type_id) {
        this.$store.dispatch('productcms/formCategoryPostPut', formData)
          .then(res => {
            this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
            if (localStorage.getItem('product_categorypreview')) {
              this.$store.dispatch('product/getCategory', { id: 1, status: 'preview' }).then(data => {
                localStorage.setItem('product_categorypreview', JSON.stringify(data))
              })
              this.getLocalProductCategory = JSON.parse(localStorage.getItem('product_categorypreview'))
            } else {
              this.$store.dispatch('product/getCategory', { id: 1, status: 'preview' }).then(data => {
                localStorage.setItem('product_categorypreview', JSON.stringify(data))
              })
            }
            if (localStorage.getItem('product_categorylive')) {
              this.$store.dispatch('product/getCategory', { id: 1, status: 'live' }).then(data => {
                localStorage.setItem('product_categorylive', JSON.stringify(data))
              })
              this.getLocalProductCategory = JSON.parse(localStorage.getItem('product_categorylive'))
            } else {
              this.$store.dispatch('product/getCategory', { id: 1, status: 'live' }).then(data => {
                localStorage.setItem('product_categorylive', JSON.stringify(data))
              })
            }
            if (localStorage.getItem('pcdrugpreview')) {
              this.$store.dispatch('product/getCategory', { id: 2, status: 'preview' }).then(data => {
                localStorage.setItem('pcdrugpreview', JSON.stringify(data))
              })
              this.getLocalProductCategory = JSON.parse(localStorage.getItem('pcdrugpreview'))
            } else {
              this.$store.dispatch('product/getCategory', { id: 2, status: 'preview' }).then(data => {
                localStorage.setItem('pcdrugpreview', JSON.stringify(data))
              })
            }
            if (localStorage.getItem('pcdruglive')) {
              this.$store.dispatch('product/getCategory', { id: 2, status: 'live' }).then(data => {
                localStorage.setItem('pcdruglive', JSON.stringify(data))
              })
              this.getLocalProductCategory = JSON.parse(localStorage.getItem('pcdruglive'))
            } else {
              this.$store.dispatch('product/getCategory', { id: 2, status: 'live' }).then(data => {
                localStorage.setItem('pcdruglive', JSON.stringify(data))
              })
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
    getData(id) {
      this.$store.dispatch('productcms/getCategoryId', id).then(data => {
        this.form.id = data['id']
        this.form.product_type_id = data['product_type_id']
        this.form.title = data['title']
        this.form.title_en = data['title_en']
        this.form.description = data['description']
        this.form.description_en = data['description_en']
        this.form.imageUrl = data['image_url']
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer(e) {
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
        this.imageC = true
        this.form.img_url = file
        this.form.setImage = 'upload'
        this.form.imageUrl = URL.createObjectURL(e.target.files[0])
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.form.id = this.$route.params.id
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