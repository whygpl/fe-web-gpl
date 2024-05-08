<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 w-full min-h-screen">
    <div class="flex justify-center my-auto">
      <!-- Content -->
      <div class="bg-white p-8 mt-52 w-full mx-4 lg:w-[600px] rounded-box place-items-center">
        <div class="flex flex-col w-full">
          <div class="w-full">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="email" v-model="email" placeholder="Email" class="input input-bordered w-full" />
            </div>
          </div>
          <div class="w-full">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" v-model="password" placeholder="Password" class="input input-bordered w-full" />
            </div>
          </div>
          <!-- <div class="w-full flex justify-end">
            <a href="/reset-password" class="text-blue-600 ">reset password</a>
          </div> -->
          <div class=" mt-5">
            <button class="w-full lg:w-auto btn btn-primary" @click="login()" type="submit">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useJwt from '@/auth/jwt/useJwt'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'
const { toast, snackbar } = require('tailwind-toast')
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    login() {
      useJwt.login({
        email: this.email,
        password: this.password
      })
        .then(response => {
          useJwt.setToken(response.data.data.token)
          this.role = 'Administrator'
          const userData =
          {
            id: 1,
            fullName: 'Administrator',
            username: 'Administrator',
            password: '',
            avatar: '',
            email: 'administrator@admin.com',
            data: '',
            role: this.role,
            ability: [
              {
                action: 'manage',
                subject: 'all'
              }
            ]
          }
          localStorage.setItem('sesnotify', 'on')
          localStorage.setItem('userData', JSON.stringify(userData))
          this.$router.replace(getHomeRouteForLoggedInUser(userData.role))
            .then(() => {
              this.notification('Success :', `Welcome ${userData.fullName || userData.username}`, 'bg-green-500', 'white', '50')
              window.location.reload()
            })
        })
        .catch(error => {
          this.notification('Failed :', 'Incorrect Email or Password', 'bg-red-500', 'white', '50')
          console.log(error)
        })
    }
  }
}
</script>