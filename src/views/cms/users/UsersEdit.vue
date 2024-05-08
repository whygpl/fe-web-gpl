<template>
    <!-- <Menu /> -->
    <div class="bg-base-300 flex min-h-screen">
        <!-- Sidebar Menu -->
        <div class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
            :class="{ 'relative translate-x-0': showMenu }">
            <Menu selectedMenu="Users" />
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
                                <span class="label-text">Full Name</span>
                            </label>
                            <input type="text" v-model="form.full_name" placeholder="Full Name"
                                class="input input-bordered w-full" />
                        </div>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" v-model="form.email" placeholder="Email"
                                class="input input-bordered w-full" />
                        </div>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" v-model="form.password" placeholder="Password"
                                class="input input-bordered w-full" />
                        </div>
                        <!-- <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Role</span>
                            </label>
                            
                            <select v-model="form.role" class="select select-bordered">
                                <option value="Administrator">Administrator</option>
                                <option value="staff">Staff</option>
                            </select>
                        </div> -->
                    </div>
                    <div class="mt-10">
                        <button class="btn btn-primary" @click.prevent="saveData()">Simpan</button>
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
import { QuillEditor } from '@vueup/vue-quill'
import router from '@/router'
const { toast, snackbar } = require('tailwind-toast')

export default {
    name: 'UsersEdit',
    components: { Navbar, Menu, Footer, QuillEditor },
    data() {
        return {
            type: "create",
            form: {
                id: '',
                full_name: '',
                email: '',
                password: '',
                role: 'Administrator'
            },
        }
    },
    computed: {
        ...mapState({
            items: state => state.businesscms.items
        }),
    },
    methods: {
        notification(a, b, c, d, e) {
            toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
        },
        saveData() {
            const formData = this.form
            if (this.form.email != "") {
                if (this.type === "create") {
                    this.$store.dispatch('users/formUsersPost', formData)
                        .then(res => {
                            this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
                            router.push({ path: "/cms/users/" });
                        },
                            err => {
                                console.log(err);
                                this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
                            })
                } else if (this.type === "update") {
                    this.$store.dispatch('users/formUsersPut', formData)
                        .then(res => {
                            this.notification('Success :', 'You have successfully', 'bg-green-500', 'white', '50')
                            router.push({ path: "/cms/users/" });
                        },
                            err => {
                                console.log(err);
                                this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
                            })
                }
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
            this.$store.dispatch('users/getUsersId', id).then(data => {
                this.form.id = data['id']
                this.form.full_name = data['fullname']
                this.form.email = data['email']
                this.form.role = data['role']
            })
        },
    },
    mounted() {
        if (this.$route.params.id) {
            this.getData(this.$route.params.id)
            this.type = "update"
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