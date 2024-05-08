<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="HProduct-Group" />
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
                <span class="label-text">Kategori</span>
              </label>
              <v-select v-model="form.product_category_id" :options="OptionsCategory"
                :reduce="OptionsCategory => OptionsCategory.value" label="title" placeholder="Kategori"></v-select>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Grup | Maksimal Karakter 100</span>
              </label>
              <input type="text" v-model="form.title" maxlength="100" placeholder="Grup"
                class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Grup | Maksimal Karakter 100 EN</span>
              </label>
              <input type="text" v-model="form.title_en" maxlength="100" placeholder="Grup EN"
                class="input input-bordered w-full" />
            </div>
            <div class="flex w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gambar | Rekomedasi 98x55 | Max 2 MB</span>
                </label>
                <img v-if="form.imageUrl" style="width:98px;height:55px;" class="mb-3  lg:block" :src="form.imageUrl" />
                <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg" plain
                  @change="inputImageRenderer" />
              </div>
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
            <!-- <router-link :to="{ name: 'ProductTypeHealthViewPreview' }"><button class="btn btn-neutral ml-2">Lihat
                Perubahan</button></router-link> -->
            <router-link :to="{ name: 'ProductTypeHealthView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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

import 'vue-select/dist/vue-select.css'
import Navbar from '@/components/layout/cms/navbar/Navbar.vue'
import Menu from '@/components/layout/cms/menu/Menu.vue'
import Footer from '@/components/layout/cms/footer/Footer.vue'
import { mapState } from 'vuex'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'HomeAboutUsEdit',
  components: { Navbar, Menu, Footer },
  data() {
    return {
      form: {
        id: '',
        product_category_id: '',
        title: '',
        title_en: '',
        save_as: 'live',
        img_url: '',
        img_url: '', setImage: 'none', imageUrl: null,
      },
      regData: []
    }
  },
  computed: {
    ...mapState({
      items: state => state.productcms.items,
      OptionsCategory: state => state.productcms.options.category
    }),
  },
  methods: {
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      if (this.form.product_category_id) {
        this.$store.dispatch('productcms/formGroupPostPut', formData)
          .then(res => {
            this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
            if (localStorage.getItem('product_grouppreview')) {
              this.$store.dispatch('product/getGroup', { id: 1, status: 'preview' }).then(data => {
                localStorage.setItem('product_grouppreview', JSON.stringify(data))
              })
              this.getLocalProductCategory = JSON.parse(localStorage.getItem('product_grouppreview'))
            } else {
              this.$store.dispatch('product/getGroup', { id: 1, status: 'preview' }).then(data => {
                localStorage.setItem('product_grouppreview', JSON.stringify(data))
              })
            }
            if (localStorage.getItem('product_grouplive')) {
              this.$store.dispatch('product/getGroup', { id: 1, status: 'live' }).then(data => {
                localStorage.setItem('product_grouplive', JSON.stringify(data))
              })
              this.getLocalProductCategory = JSON.parse(localStorage.getItem('product_grouplive'))
            } else {
              this.$store.dispatch('product/getGroup', { id: 1, status: 'live' }).then(data => {
                localStorage.setItem('product_grouplive', JSON.stringify(data))
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
      this.$store.dispatch('productcms/getGroupId', id).then(data => {
        this.form.id = data['id']
        this.form.product_category_id = data['product_category_id']
        this.form.title = data['title']
        this.form.title_en = data['title_en']
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
        this.form.img_url = file
        this.form.setImage = 'upload'
        this.form.imageUrl = URL.createObjectURL(e.target.files[0])
      }
    }
  },
  mounted() {
    this.$store.dispatch('productcms/getParamCategoryGroup')
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
.vs--searchable {
  height: 3rem;
}

.vs__dropdown-toggle {
  height: 3rem;
  border-radius: var(--rounded-btn, 0.5rem);
}
</style>