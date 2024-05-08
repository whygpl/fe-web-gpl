<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Aboutus-Office" />
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
            <template v-for="(item, index) in form.image_urls">
              <div class="flex w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text"><b>Gambar {{ index + 1 }} | Rekomendasi 244x244 |
                        Maksimal 2 MB</b></span>
                  </label>
                  <!-- <img class="mb-3 object-cover object-center lg:block" style="width: 392px; height: 392px;"
                    :src="item.file == null ? item.image_url : item.file" />
                  <input type="file" class="file-input file-input-bordered w-full max-w-xs" :key="index + 1"
                    ref="imageRef" accept=".jpg, .png" plain
                    @change="inputImageRenderer($event, index, item, 'office')" />
 -->
                    <div v-if="imageC[index]">
                      <div class="cropper-wrapper">
                        <div :style="{ backgroundImage: 'url(' + item.image_url + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropperImage" background-class="cropper-background" :src="item.image_url"
                        :canvas="{
                            maxWidth: 500,
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
                          plain @change="inputImageRenderer($event, index,item,'office')" />
                      </div>
                    </div>

                </div>
              </div>
            </template>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.f_title" :options="optionsTitle" placeholder="Judul"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.f_title_en" :options="optionsTitle"
                placeholder="Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.f_description" :options="options"
                placeholder="Deskripsi" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.f_description_en" :options="options"
                placeholder="Deskripsi EN" theme="snow" />
            </div>

            <template v-for="(item, index) in form.f_image_urls">
              <div class="flex w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text"><b>Gambar {{ index + 1 }} |  Rekomendasi 244x244 |
                        Maksimal 2 MB</b></span>
                  </label>
                  <!-- <img class="mb-3 object-cover object-center lg:block" style="width: 392px; height: 392px;"
                    :src="item.file == null ? item.image_url : item.file" />
                  <input type="file" class="file-input file-input-bordered w-full max-w-xs" :key="index + 1"
                    ref="imageRef" accept=".jpg, .png" plain
                    @change="inputImageRenderer($event, index, item, 'factory')" /> -->
                    <div v-if="imageF[index]">
                      <div class="cropper-wrapper">
                        <div :style="{ backgroundImage: 'url(' + item.image_url + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropperImageF" background-class="cropper-background" :src="item.image_url"
                        :canvas="{
                            maxWidth: 500,
                          }"  :stencil-props="{ aspectRatio: 1/1 }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage(index)">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageF[index]">
                      <img style="width:244px;height:244px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="item.image_url" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="inputImageRenderer($event, index,item,'factory')" />
                      </div>
                    </div>

                </div>
              </div>
            </template>
            <!-- <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Gambar | *1024px x 576px | Maksimal 2 MB</span>
              </label>
              <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".svg, .jpg, .png" multiple @change="selectFileFactory" />
              <div class="grid grid-cols-4 place-items-center gap-0 md:gap-4">
                <template v-for="(file, index) in selectedUrlFactory">
                  <img class="aspect-square h-16 object-center md:h-36" :src="file.image_url" />
                </template>
              </div>
            </div> -->
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
            <!-- <router-link :to="{ name: 'AboutPreviewViewTab6' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ name: 'AboutViewTab6' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
      imageF: [],
      form: {
        title: '',
        title_en: '',
        description: '',
        description_en: '',
        image_urls: '',
        f_title: '',
        f_title_en: '',
        f_description: '',
        f_description_en: '',
        f_image_urls: '',
        save_as: 'live',
        item: '',
        img_url: '', setImage: 'none', imageUrl: null,
      },
      selectedUrlOffice: [],
      selectedUrlFactory: [],
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
        this.form.image_urls[index].setImage = 'upload'
        this.form.image_urls[index].image_url = result.canvas.toDataURL( this.form.image_urls[index].image_url)
        this.form.image_urls[index].img_url = this.dataURLtoFile(result.canvas.toDataURL( this.form.image_urls[index].image_url),  this.form.image_urls[index].image_url.name)
        this.imageC[index] = false
      }
      if (this.imageF[index]) {
        const result = this.$refs.cropperImageF[0].getResult()
        this.form.f_image_urls[index].setImage = 'upload'
        this.form.f_image_urls[index].image_url = result.canvas.toDataURL( this.form.f_image_urls[index].image_url)
        this.form.f_image_urls[index].img_url = this.dataURLtoFile(result.canvas.toDataURL( this.form.f_image_urls[index].image_url), this.form.f_image_urls[index].image_url.name)
        this.imageF[index] = false
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
    saveData() {
      const formData = this.form
      this.$store.dispatch('aboutcms/formOfficePostPut', formData)
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
          this.getData()
        },
          err => {
            this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
          })
    },
    getData(id) {
      this.$store.dispatch('aboutcms/getOffice').then(data => {
        this.form.title = data.office['title']
        this.form.title_en = data.office['title_en']
        this.form.description = data.office['description']
        this.form.description_en = data.office['description_en']
        this.form.image_urls = data.office['image_urls']
        // let selectedUrlOffice = []
        // for (let index = 0; index < data.office.image_urls.length; index++) {
        //   selectedUrlOffice[index] = {
        //     image_url: data.office.image_urls[index].image_url
        //   }
        // }
        // this.selectedUrlOffice.push(...selectedUrlOffice)
        this.form.f_title = data.factory['title']
        this.form.f_title_en = data.factory['title_en']
        this.form.f_description = data.factory['description']
        this.form.f_description_en = data.factory['description_en']
        this.form.f_image_urls = data.factory['image_urls']
        // let selectedUrlFactory = []
        // for (let index = 0; index < data.factory.image_urls.length; index++) {
        //   selectedUrlFactory[index] = {
        //     image_url: data.factory.image_urls[index].image_url
        //   }
        // }
        // this.selectedUrlFactory.push(...selectedUrlFactory)
      })
    },
    // selectFileOffice() {
    //   let selectedUrlOffice = []
    //   this.selectedFiles = event.target.files
    //   for (let index = 0; index < this.selectedFiles.length; index++) {
    //     selectedUrlOffice[index] = {
    //       image_url: URL.createObjectURL(this.selectedFiles[index])
    //     }
    //   }
    //   this.selectedUrlOffice.push(...selectedUrlOffice)
    // },
    // selectFileFactory() {
    //   let selectedUrlFactory = []
    //   this.selectedFiles = event.target.files
    //   for (let index = 0; index < this.selectedFiles.length; index++) {
    //     selectedUrlFactory[index] = {
    //       image_url: URL.createObjectURL(this.selectedFiles[index])
    //     }
    //   }
    //   this.selectedUrlFactory.push(...selectedUrlFactory)
    // },
    // upload(idx, file) {
    //   this.progressInfos[idx] = { percentage: 0, fileName: file.name };

    //   UploadService.upload(file, (event) => {
    //     this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
    //   })
    //   .then((response) => {
    //     let prevMessage = this.message ? this.message + "\n" : "";
    //     this.message = prevMessage + response.data.message;

    //     return UploadService.getFiles();
    //   })
    //   .then((files) => {
    //     this.fileInfos = files.data;
    //   })
    //   .catch(() => {
    //     this.progressInfos[idx].percentage = 0;
    //     this.message = "Could not upload the file:" + file.name;
    //   });
    // },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer(e, index, item, type) {
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
        console.log(type,type === "factory")
        if (type === "factory") {
          this.form.f_image_urls[index] = { id: item.id, img_url: file, setImage: "upload", image_url: URL.createObjectURL(e.target.files[0]) }
          this.imageF[index] = true
        } else {
          this.form.image_urls[index] = { id: item.id, img_url: file, setImage: "upload", image_url: URL.createObjectURL(e.target.files[0]) }
          this.imageC[index] = true
        }

       
      }
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('aboutcms/getOffice')
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
  width: 500px;
  overflow: auto;
}
</style>