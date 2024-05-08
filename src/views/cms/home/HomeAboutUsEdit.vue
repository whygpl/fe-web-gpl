<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Home-About" />
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
              <QuillEditor contentType="html" v-model:content="form.page_title" :options="optionsTitle"
                placeholder="Judul" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.page_title_en" :options="optionsTitle"
                placeholder="Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub Judul | Maksimal Karakter 100</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title" :options="optionsTitle"
                placeholder="Sub Judul" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub Judul | Maksimal Karakter 100 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title_en" :options="optionsTitle"
                placeholder="Sub Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <!-- <textarea class="textarea textarea-bordered h-24" v-model="form.description"
                placeholder="Deskripsi"></textarea> -->
              <QuillEditor contentType="html" v-model:content="form.description" :options="options"
                placeholder="Deskripsi" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <!-- <textarea class="textarea textarea-bordered h-24" v-model="form.description_en"
                placeholder="Deskripsi EN"></textarea> -->
              <QuillEditor contentType="html" v-model:content="form.description_en" :options="options"
                placeholder="Deskripsi EN" theme="snow" />
            </div>
          </div>
          <div class="carousel w-full">
            <div id="item1" class="carousel-item w-full">
              <div class="w-full overflow-scroll">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Gambar - MOBILE | Rekomendasi 448x448p | 2 Mb</span>
                  </label>
                  <div v-if="imageC_1">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_1 + ')' }" class="image-background"></div>
                      <cropper ref="cropperc1" background-class="cropper-background" :src="form.imageUrl_1"
                      :canvas="{ maxWidth: 512,}" :stencil-props="{ aspectRatio: 448 / 448 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageC_1">
                    <img style="width:448px;height:448px;" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrl_1" />
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
                    <span class="label-text">Gambar - MOBILE | Rekomendasi 448x448 | 2 Mb</span>
                  </label>
                  <div v-if="imageC_2">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_2 + ')' }" class="image-background"></div>
                      <cropper ref="cropperc2" background-class="cropper-background" :src="form.imageUrl_2"
                      :canvas="{ maxWidth: 512,}" :stencil-props="{ aspectRatio: 448 / 448 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageC_2">
                    <img style="width:448px;height:448px;" class="mb-3 object-cover object-center lg:block"
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
                    <span class="label-text">Gambar - MOBILE | 448x448 | 2 Mb</span>
                  </label>
                  <div v-if="imageC_3">
                    <div class="cropper-wrapper">
                      <div :style="{ backgroundImage: 'url(' + form.imageUrl_3 + ')' }" class="image-background"></div>
                      <cropper ref="cropperc3" background-class="cropper-background" :src="form.imageUrl_3"
                      :canvas="{ maxWidth: 512,}" :stencil-props="{ aspectRatio: 448 / 448 }" />
                    </div>
                    <div class="mt-2">
                      <button class="btn btn-primary" @click="cropImage()">Crop Gambar</button>
                    </div>
                  </div>
                  <div v-if="!imageC_3">
                    <img style="width:448px;height:448px;" class="mb-3 object-cover object-center lg:block"
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
              class="btn btn-xs">Gambar 1</a>
            <a href="#item2" @click="carouselChange(2)" :class="item2 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Gambar 2</a>
            <a href="#item3" @click="carouselChange(3)" :class="item3 ? 'bg-primary text-white' : ''"
              class="btn btn-xs">Gambar 3</a>
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
      imageC_1: false,
      imageC_2: false,
      imageC_3: false,
      form: {
        page_title: '',
        page_title_en: '',
        title: '',
        title_en: '',
        description: '',
        description_en: '',
        save_as: 'live',
        img_url_id_1: '',
        img_url_id_2: '',
        img_url_id_3: '',
        img_url_1: '', setImage_1: 'none', imageUrl_1: null,
        img_url_2: '', setImage_2: 'none', imageUrl_2: null,
        img_url_3: '', setImage_3: 'none', imageUrl_3: null,
      },
      stencilprops: {
        handlers: {},
        movable: true,
        resizable: false,
      },
      regData: [],
      // img_url_sm: 'https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // img_url_md: 'https://images.unsplash.com/photo-1699111260849-f7e9cdfc1bde?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // img_url_sm_2: 'https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // img_url_md_2: 'https://images.unsplash.com/photo-1699111260849-f7e9cdfc1bde?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // img_url_lg_2: require('@/assets/images/home/hero/hero_2.png'),
      // img_url_sm_3: 'https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // img_url_md_3: 'https://images.unsplash.com/photo-1699111260849-f7e9cdfc1bde?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // img_url_lg_3: require('@/assets/images/home/hero/hero_3.png'),
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
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('homecms/formAboutPostPut', formData)
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
      this.$store.dispatch('homecms/getAbout').then(data => {
        console.log(data)
        this.form.page_title = data['page_title']
        this.form.page_title_en = data['page_title_en']
        this.form.title = data['title']
        this.form.title_en = data['title_en']
        this.form.description = data['description']
        this.form.description_en = data['description_en']
        this.form.imageUrl_1 = data.image_urls[0]['image_url']
        this.form.imageUrl_2 = data.image_urls[1]['image_url']
        this.form.imageUrl_3 = data.image_urls[2]['image_url']
        this.form.img_url_id_1 = data.image_urls[0]['id']
        this.form.img_url_id_2 = data.image_urls[1]['id']
        this.form.img_url_id_3 = data.image_urls[2]['id']
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer_1(e) {
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
        this.imageC_3 = true
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