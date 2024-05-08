<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out" :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="General-SMTP" />
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
                <span class="label-text">Host</span>
              </label>
              <input type="text" v-model="form.host" placeholder="Host" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Email Host *Default Sender</span>
              </label>
              <input type="text" v-model="form.emailhost" placeholder="Email Host *Default Sender" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" v-model="form.password" placeholder="Password" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">SMTPSecure</span>
              </label>
              <input type="text" v-model="form.secure" placeholder="SMTPSecure" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">PORT</span>
              </label>
              <input type="text" v-model="form.port" placeholder="PORT" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Email Pertanyaan</span>
              </label>
              <input type="text" v-model="form.sendquestion" placeholder="Email Pertanyaan" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Email Kritik & Saran</span>
              </label>
              <input type="text" v-model="form.sendadvice" placeholder="Email Kritik & Saran" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Email Lainnya</span>
              </label>
              <input type="text" v-model="form.sendany" placeholder="Email Lainnya" class="input input-bordered w-full" />
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
          <div class="mt-10">
            <button class="btn btn-primary"  @click.prevent="saveData()">Simpan</button>
            <router-link :to="{ name: 'ContactPreviewView' }"><button class="btn btn-neutral ml-2">Lihat Perubahan</button></router-link>
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
  name: 'CmsSMTPEdit',
  components: { Navbar, Menu, Footer },
  data () {
    return {
      form:{
        host:'',
        emailhost:'',
        password:'',
        secure:'',
        port:'',
        sendquestion:'',
        sendadvice:'',
        sendany:'',
        whatsapp_number:'',
        save_as:'live',
      },
      regData:[]
    }
  },
  computed: {
    ...mapState({ 
      items: state => state.generalcms.items
    }),
  },
  methods: {
    notification (a,b,c,d,e) {
      toast().default(a,b).with({shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e}).show()
    },
    saveData () {
      const formData = this.form 
      this.$store.dispatch('generalcms/formSMTPPostPut', formData)
      .then(res => {
        this.notification('Success :','You have successfully','bg-green-500','white','50')
      }, 
      err => {
        this.notification('Failed :','You have unsuccessful','bg-red-500','white','50')
      })
    },
    getData (id) {
      this.$store.dispatch('generalcms/getSmtp').then(data => {
        this.form.host = data['host']
        this.form.emailhost = data['emailhost']
        this.form.password = data['password']
        this.form.secure = data['secure']
        this.form.port = data['port']
        this.form.sendquestion = data['sendquestion']
        this.form.sendadvice = data['sendadvice']
        this.form.sendany = data['sendany']
      })
    }
  },
  mounted () {
    this.getData()
  },
  created () {
    this.$store.dispatch('generalcms/getSmtp')
  },
  setup() { 
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>