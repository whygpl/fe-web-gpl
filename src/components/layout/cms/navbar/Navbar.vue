<template>
    <div class="navbar">
        <div class="flex-1">
            <button class="btn btn-square btn-ghost" @click="showMenu = !showMenu"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
            <a class="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                   <img src="@/assets/images/general/icons8-account-48.png" alt="navbar_logo" width="150">
                </div>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <!-- <li>
                        <a class="justify-between">
                        Profile
                        </a>
                    </li> -->
                <!-- <li><a>Settings</a></li> -->
                <li @click="logout"><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import useJwt from '@/auth/jwt/useJwt'

export default {
  data() {
    return {
    //   userData: JSON.parse(localStorage.getItem('userData')),
    }
  },
  methods: {
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
       localStorage.removeItem('userData')

      // Redirect to login page
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>