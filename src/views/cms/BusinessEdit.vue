<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out" :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Business" />
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
                <span class="label-text">Judul</span>
              </label>
              <input type="text" v-model="form.title" placeholder="Judul" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul EN</span>
              </label>
              <input type="text" v-model="form.title_en" placeholder="Judul EN" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <textarea class="textarea textarea-bordered h-24" v-model="form.description" placeholder="Deskripsi"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <textarea class="textarea textarea-bordered h-24" v-model="form.description_en" placeholder="Deskripsi EN"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Image</span>
              </label>
              <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".svg, .jpg, .png, .jpeg" multiple @change="selectFile" />
              <div class="grid grid-cols-4 place-items-center gap-0 md:gap-4">
                <template v-for="(file, index) in selectedUrlOffice">
                  <img class="aspect-square h-16 object-center md:h-36" :src="file.image_url" />
                </template>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul</span>
              </label>
              <input type="text" v-model="form.f_title" placeholder="Judul" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul EN</span>
              </label>
              <input type="text" v-model="form.f_title_en" placeholder="Judul EN" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <textarea class="textarea textarea-bordered h-24" v-model="form.f_description" placeholder="Deskripsi"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <textarea class="textarea textarea-bordered h-24" v-model="form.f_description_en" placeholder="Deskripsi EN"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Image</span>
              </label>
              <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".svg, .jpg, .png, .jpeg" multiple @change="selectFileFactory" />
              <div class="grid grid-cols-4 place-items-center gap-0 md:gap-4">
                <template v-for="(file, index) in selectedUrlFactory">
                  <img class="aspect-square h-16 object-center md:h-36" :src="file.image_url" />
                </template>
              </div>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Simpan Sebagai</span>
              </label>
              <select v-model="form.save_as" class="select select-bordered">
                <option value="preview">Draft Review</option>
                <option value="live">Go Live</option>
              </select>
            </div>
          </div>
          <div class="mt-10">
            <button class="btn btn-primary"  @click.prevent="saveData()">Simpan</button>
            <router-link :to="{ name: 'AboutPreviewView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link>
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

import Navbar from '@/components/layout/cms/navbar/Navbar.vue'
import Menu from '@/components/layout/cms/menu/Menu.vue'
import Footer from '@/components/layout/cms/footer/Footer.vue'
import { mapState } from 'vuex'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'HomeAboutCompanyvalueEdit',
  components: { Navbar, Menu, Footer },
  data () {
    return {
      form:{
        title:'',
        title_en:'',
        description:'',
        description_en:'',
        save_as:'preview',
        item:'',
        img_url:'',setImage:'none',imageUrl:null,
      },
      selectedUrlOffice:[],
      selectedUrlFactory:[],
      regData:[]
    }
  },
  computed: {
    ...mapState({ 
      items: state => state.aboutcms.items
    }),
  },
  methods: {
    notification (a,b,c,d,e) {
      toast().default(a,b).with({shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e}).show()
    },
    saveData () {
      const formData = this.form 
      this.$store.dispatch('aboutcms/formOfficePostPut', formData)
      .then(res => {
        this.notification('Success :','You have successfully','bg-green-500','white','50')
        this.$store.dispatch('about/getAll','preview')
        if (localStorage.getItem('aboutpreview')) {
          this.getLocalAbout = JSON.parse(localStorage.getItem('aboutpreview'))
        } else {
          this.getLocalAbout = this.about
          this.$store.dispatch('about/getAll','preview')
        }
        this.$store.dispatch('about/getAll','live')
        if (localStorage.getItem('aboutlive')) {
          this.getLocalAbout = JSON.parse(localStorage.getItem('aboutlive'))
        } else {
          this.getLocalAbout = this.about
          this.$store.dispatch('about/getAll','live')
        }
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
      }, 
      err => {
        this.notification('Failed :','You have unsuccessful','bg-red-500','white','50')
      })
    },
    getData (id) {
      this.$store.dispatch('aboutcms/getOffice').then(data => {
        this.form.title = data.office['title']
        this.form.title_en = data.office['title_en']
        this.form.description = data.office['description']
        this.form.description_en = data.office['description_en']
        let selectedUrlOffice = []
        for (let index = 0; index < data.office.image_urls.length; index++) {
          selectedUrlOffice[index] = {
            image_url: data.office.image_urls[index].image_url
          }
        }
        this.selectedUrlOffice.push(...selectedUrlOffice)
        this.form.f_title = data.factory['title']
        this.form.f_title_en = data.factory['title_en']
        this.form.f_description = data.factory['description']
        this.form.f_description_en = data.factory['description_en']
        let selectedUrlFactory = []
        for (let index = 0; index < data.factory.image_urls.length; index++) {
          selectedUrlFactory[index] = {
            image_url: data.factory.image_urls[index].image_url
          }
        }
        this.selectedUrlFactory.push(...selectedUrlFactory)
      })
    },
    selectFileOffice() {
      let selectedUrlOffice = []
      this.selectedFiles = event.target.files
      for (let index = 0; index < this.selectedFiles.length; index++) {
        selectedUrlOffice[index] = {
          image_url: URL.createObjectURL(this.selectedFiles[index])
        }
      }
      this.selectedUrlOffice.push(...selectedUrlOffice)
    },
    selectFileFactory() {
      let selectedUrlFactory = []
      this.selectedFiles = event.target.files
      for (let index = 0; index < this.selectedFiles.length; index++) {
        selectedUrlFactory[index] = {
          image_url: URL.createObjectURL(this.selectedFiles[index])
        }
      }
      this.selectedUrlFactory.push(...selectedUrlFactory)
    },
    upload(idx, file) {
      this.progressInfos[idx] = { percentage: 0, fileName: file.name };

      UploadService.upload(file, (event) => {
        this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
      })
      .then((response) => {
        let prevMessage = this.message ? this.message + "\n" : "";
        this.message = prevMessage + response.data.message;

        return UploadService.getFiles();
      })
      .then((files) => {
        this.fileInfos = files.data;
      })
      .catch(() => {
        this.progressInfos[idx].percentage = 0;
        this.message = "Could not upload the file:" + file.name;
      });
    },
    inputImageRenderer (e) {
			const file = e.target.files[0]
			this.form.img_url = file
			this.form.setImage = 'upload'
			this.form.imageUrl = URL.createObjectURL(e.target.files[0])
		}
  },
  mounted () {
    this.getData()
  },
  created () {
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