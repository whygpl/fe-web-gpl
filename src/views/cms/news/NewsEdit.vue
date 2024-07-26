<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="News-List" />
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
            <div class="form-control max-w-xs">
              <label class="label">
                <span class="label-text">Tanggal</span>
              </label>
              <input type="date" v-model="form.date" placeholder="Tanggal" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 150</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title" :options="options" placeholder="Judul"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 150 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.title_en" :options="options"
                placeholder="Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.desc" :options="options" placeholder="Deskripsi"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.desc_en" :options="options"
                placeholder="Deskripsi EN" theme="snow" />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Kategori</span>
              </label>
              <select v-model="form.category_id" class="select select-bordered">
                <option value="1">Artikel</option>
                <option value="2">CSR</option>
                <option value="3">Kegiatan</option>
              </select>
            </div>
            <div class="flex w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gambar | *608px x 456px | Maksimal 2 MB</span>
                </label>
                <div v-if="imageCH">
                  <div class="cropper-wrapper">
                    <div :style="{ backgroundImage: 'url(' + form.imageUrl + ')' }" class="image-background"></div>
                    <cropper ref="cropperc1" background-class="cropper-background" :src="form.imageUrl"
                      :min-height="456" :min-width="608" :stencil-size="{ width: 608, height: 456 }"
                      :stencil-props="stencilprops" image-restriction="stencil" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                  </div>
                </div>
                <div v-if="!imageCH">
                  <template v-if="form.imageUrl">
                    <img style="height:608px;width:456px" class="mb-3 object-cover object-center lg:block"
                      :src="form.imageUrl" />
                  </template>
                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg" plain
                      @change="inputImageRenderer" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full">
              <div class="w-full">
                <div class="form-control w-full h-full">
                  <label class="label">
                    <span class="label-text">Konten</span>
                  </label>
                  <div class="document-editor__toolbar"></div>
                  <div class="document-editor__editable-container">
                      <ckeditor :class="pl-2" :editor="editor" v-model="form.description" :config="editorConfig"  @ready="onReady"></ckeditor>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full">
              <div class="w-full">
                <div class="form-control w-full h-full">
                  <label class="label">
                    <span class="label-text">Konten EN</span>
                  </label>
                  <div class="document-editor__toolbar_en"></div>
                  <div class="document-editor__editable-container">
                      <ckeditor :class="pl-2" :editor="editor" v-model="form.description_en" :config="editorConfig"  @ready="onReadyEn"></ckeditor>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="flex justify-center w-full py-2 gap-2">
              <a href="#sectionCPIN5" @click="carouselChange2(1)" :class="item1 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Indonesia</a>
              <a href="#sectionCPEN6" @click="carouselChange2(2)" :class="item2 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">English</a>
            </div> -->
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Save As</span>
              </label>
              <select v-model="form.save_as" class="select select-bordered" disabled>
                <option value="preview">Draft Review</option>
                <option value="live">Go Live</option>
              </select>
            </div>
          </div>
          <div class="mt-10">
            <button class="btn btn-primary" @click.prevent="saveData()">Simpan</button>
            <!-- <router-link :to="{ path: '/cms/news/detail/preview/' + this.$route.params.id }"><button
                class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link> -->
            <router-link :to="{ path: '/news/detail/' + this.$route.params.id }"><button
                class="btn btn-neutral ml-2">Lihat
                Perubahan (Live)</button></router-link>
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
import CKEditor from '@ckeditor/ckeditor5-vue';
import ThisCustomUploadAdapterPlugin from './UploadAdapter';

import Navbar from '@/components/layout/cms/navbar/Navbar.vue'
import Menu from '@/components/layout/cms/menu/Menu.vue'
import Footer from '@/components/layout/cms/footer/Footer.vue'
import { mapState } from 'vuex'
import { QuillEditor } from '@vueup/vue-quill'
import MyCustomEditor from '@/ckeditor/ckeditor';
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'HomenewsUsEdit',
  components: {
    Navbar, Menu, Footer, Cropper,
    ckeditor: CKEditor.component, QuillEditor
  },
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
      imageCH: false,
      editor: MyCustomEditor,
      editorConfig: {
        extraPlugins: [ThisCustomUploadAdapterPlugin],
      },
      item1: true,
      item2: false,
      form: {
        id: '',
        date: '',
        title: '',
        title_en: '',
        category_id: '',
        desc: '',
        desc_en: '',
        description: '',
        description_en: '',
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
      items: state => state.newscms.items
    }),
  },
  methods: {
    uploader(editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new UploadAdapter(loader);
      };
    },
    carouselChange2(index) {
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
      if (this.imageCH) {
        const result = this.$refs.cropperc1.getResult()
        // this.form.imageUrl = result.canvas.toDataURL(this.form.imageUrl)
        // this.form.img_url = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl),this.form.img_url.name)
        this.imageCH = false
      }
    },
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    async saveData() {
      const formData = this.form
      // this.form.description = await this.modifyUrl(this.form.description)
      // this.form.description_en = await this.modifyUrl(this.form.description_en)
      console.log(this.form);
      if (this.form.title != "") {
        this.$store.dispatch('newscms/formPostPut', formData)
          .then(res => {
            this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
            // this.$store.dispatch('news/getAll', 'preview')
            // if (localStorage.getItem('newspreview')) {
            //   this.getLocalNews = JSON.parse(localStorage.getItem('newspreview'))
            // } else {
            //   this.getLocalNews = this.news
            //   this.$store.dispatch('news/getAll', 'preview')
            // }
            this.$store.dispatch('news/getAll', 'live')
            if (localStorage.getItem('newslive')) {
              this.getLocalNews = JSON.parse(localStorage.getItem('newslive'))
            } else {
              this.getLocalNews = this.news
              this.$store.dispatch('news/getAll', 'live')
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
    modifyUrl(url) {
      let endpoint = url;
      endpoint = endpoint.replace('oembed', 'iframe');
      endpoint = endpoint.replace('&lt;', '<');
      endpoint = endpoint.replace('&gt;', '>');
      endpoint = endpoint.replace('url', 'src');
      endpoint = endpoint.replace('watch?v=', 'embed/');
      endpoint = endpoint.replace('oembed', 'iframe');
      return endpoint;
    },
    getData(id) {
      console.log(id);
      this.$store.dispatch('newscms/getId', id).then(data => {
        this.form.id = data['id']
        this.form.category_id = data['category_id']
        this.form.date = data['date']
        this.form.title = data['title']
        this.form.title_en = data['title_en']
        this.form.desc = data['desc']
        this.form.desc_en = data['desc_en']
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
        this.imageCH = false
        this.form.img_url = file
        this.form.setImage = 'upload'
        this.form.imageUrl = URL.createObjectURL(e.target.files[0])
      }
    },
    onReady(editor) {
         DecoupledEditor.builtinPlugins = []  
          const toolbarContainer = document.querySelector(  '.document-editor__toolbar' );
          toolbarContainer.appendChild( editor.ui.view.toolbar.element );
      },
      onReadyEn(editor) {
          const toolbarContainer = document.querySelector(  '.document-editor__toolbar_en' );
          toolbarContainer.appendChild( editor.ui.view.toolbar.element );
      }
  },
  mounted() {
    if (this.$route.params.id) {
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

.ck-content ol,
.ck-content ul {
  margin-left: 50px;
}
</style>
