<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out" :class="{ 'relative translate-x-0': showMenu }">
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
          <div class="w-full">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Award</span>
              </label>
              <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".svg, .jpg, .png, .jpeg" multiple @change="selectFile" />
              <div class="grid grid-cols-4 place-items-center gap-0 md:gap-4">
                <template v-for="(file, index) in selectedUrl">
                  <img class="aspect-square h-16 object-center md:h-36" :src="file.image_url" />
                </template>
              </div>
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
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Image - DEKSTOP</span>
              </label>
              <img style="height:400px" class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrlLG_1" />
              <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png" plain @change="inputImageRendererLG_1"/>
            </div> -->
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
          <div class="mt-10">
            <button class="btn btn-primary"  @click.prevent="saveData()">Simpan</button>
            <router-link :to="{ name: 'HomePreviewView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link>
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
import store from '@/store/index'
import { mapState } from 'vuex'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'HomeProductEdit',
  components: { Navbar, Menu, Footer },
  data () {
    return {
      form:{
        save_as:'preview',
        img_url_lg_1: '',setImageLG_1:'none',imageUrlLG_1:null,
        img_url_lg_2: '',setImageLG_2:'none',imageUrlLG_2:null,
        img_url_lg_3: '',setImageLG_3:'none',imageUrlLG_3:null,
        img_url_md_1: '',setImageMD_1:'none',imageUrlMD_1:null,
        img_url_md_2: '',setImageMD_2:'none',imageUrlMD_2:null,
        img_url_md_3: '',setImageMD_3:'none',imageUrlMD_3:null,
        img_url_sm_1: '',setImageSM_1:'none',imageUrlSM_1:null,
        img_url_sm_2: '',setImageSM_2:'none',imageUrlSM_2:null,
        img_url_sm_3: '',setImageSM_3:'none',imageUrlSM_3:null,
      },
      regData:[],
      selectedFiles: undefined,
      selectedUrl: [],
      fileInfos: [],
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
    notification (a,b,c,d,e) {
      toast().default(a,b).with({shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e}).show()
    },
    saveData () {
      const formData = this.form 
      this.$store.dispatch('homecms/formQualityPostPut', formData)
      .then(res => {
        this.notification('Success :','You have successfully','bg-green-500','white','50')
        this.$store.dispatch('home/getAll','preview')
        if (localStorage.getItem('homepreview')) {
          this.getLocalHome = JSON.parse(localStorage.getItem('homepreview'))
        } else {
          this.getLocalHome = this.home
          this.$store.dispatch('home/getAll','preview')
        }
        this.$store.dispatch('home/getAll','live')
        if (localStorage.getItem('homelive')) {
          this.getLocalHome = JSON.parse(localStorage.getItem('homelive'))
        } else {
          this.getLocalHome = this.home
          this.$store.dispatch('home/getAll','live')
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
      this.$store.dispatch('homecms/getQuality').then(data => {
        let selectedUrl = []
        for (let index = 0; index < data.award.length; index++) {
          selectedUrl[index] = {
            image_url: data.award[index].image_url
          }
        }
        this.selectedUrl.push(...selectedUrl)
        // this.form.imageUrlLG_1 = data[0]['image_url_lg']
        // this.form.imageUrlLG_2 = data[1]['image_url_lg']
        // this.form.imageUrlLG_3 = data[2]['image_url_lg']
        // this.form.imageUrlMD_1 = data[0]['image_url_md']
        // this.form.imageUrlMD_2 = data[1]['image_url_md']
        // this.form.imageUrlMD_3 = data[2]['image_url_md']
        // this.form.imageUrlSM_1 = data[0]['image_url_sm']
        // this.form.imageUrlSM_2 = data[1]['image_url_sm']
        // this.form.imageUrlSM_3 = data[2]['image_url_sm']
      })
    },
    selectFile() {
      let selectedUrl = []
      this.selectedFiles = event.target.files
      for (let index = 0; index < this.selectedFiles.length; index++) {
        selectedUrl[index] = {
          image_url: URL.createObjectURL(this.selectedFiles[index])
        }
      }
      this.selectedUrl.push(...selectedUrl)

			// const file = e.target.files[0]
			// this.form.img_url_lg_1 = file
			// this.form.setImageLG_1 = 'upload'
			// this.form.imageUrlLG_1 = URL.createObjectURL(e.target.files[0])
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
    uploadFiles() {
      this.message = "";
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  },
  mounted () {
    this.getData()
  },
  created () {
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