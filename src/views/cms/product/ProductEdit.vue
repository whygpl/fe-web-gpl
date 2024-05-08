<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="HProduct-PProduct" />
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
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Produk Kesehatan/Resep</span>
              </label>
              <select v-model="form.product_type_id" class="select select-bordered">
                <option value="1">Produk Kesehatan</option>
                <option value="2">Resep</option>
              </select>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Kategori</span>
              </label>
              <v-select v-model="form.product_category_id" :options="OptionsCategory"
                :reduce="(OptionsCategory) => OptionsCategory.value" label="title" placeholder="Kategori"></v-select>
            </div>
            <template v-if="form.product_type_id == 1">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Group</span>
                </label>
                <v-select v-model="form.product_group_id" :options="OptionsGroup"
                  :reduce="(OptionsGroup) => OptionsGroup.value" label="title" placeholder="Group"></v-select>
              </div>
            </template>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Nama Produk | Maksimal Karakter 100</span>
              </label>
              <input type="text" v-model="form.name" maxlength="100" placeholder="Nama Produk"
                class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Nama Produk | Maksimal Karakter 100 EN</span>
              </label>
              <input type="text" v-model="form.name_en" maxlength="100" placeholder="Nama Produk EN"
                class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Microsite</span>
              </label>
              <label>
                <input type="checkbox" v-model="form.microsite" placeholder="URL Microsite" class="checkbox" />
              </label>

              <template v-if="form.microsite">
                <input type="text" v-model="form.micrositeurl" placeholder="URL Microsite"
                  class="input input-bordered w-full" />
              </template>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">G-Store</span>
              </label>
              <label>
                <input type="checkbox" v-model="form.gstore" placeholder="URL G-Store" class="checkbox" />
              </label>

              <template v-if="form.gstore">
                <input type="text" v-model="form.gstoreurl" placeholder="URL G-Store"
                  class="input input-bordered w-full" />
              </template>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Chat</span>
              </label>
              <label>
                <input type="checkbox" v-model="form.chat" placeholder="Chat" class="checkbox" />
              </label>
              <template v-if="form.chat">
                <input type="text" v-model="form.chatvalue" placeholder="Chat" class="input input-bordered w-full" />
              </template>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <label>
                <input type="checkbox" v-model="form.email" placeholder="Email" class="checkbox" />
              </label>
             <template v-if="form.email">
                <input type="text" v-model="form.emailvalue" placeholder="Email" class="input input-bordered w-full" />
              </template>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi</span>
              </label>
              <textarea class="textarea textarea-bordered h-24" v-model="form.description"
                placeholder="Deskripsi"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Deskripsi EN</span>
              </label>
              <textarea class="textarea textarea-bordered h-24" v-model="form.description_en"
                placeholder="Deskripsi EN"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Komposisi</span>
              </label>
              <textarea class="textarea textarea-bordered h-24" v-model="form.compotition"
                placeholder="Deskripsi"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Komposisi EN</span>
              </label>
              <textarea class="textarea textarea-bordered h-24" v-model="form.compotition_en"
                placeholder="Deskripsi EN"></textarea>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Cara Pakai</span>
              </label>

              <template v-for="(item, index) in form.htu_in">
                <div class="flex flex-row items-center">
                  <input type="text" v-model="item.value" placeholder="Cara Pakai"
                    class="w-10/12 input input-bordered" />
                  <button class="w-2/12 ml-6 btn btn-sm btn-default bg-error" @click.prevent="DeleteItemHTU(index)">-
                    Hapus</button>
                </div>
              </template>
              <div class="mt-2">
                <button class="btn btn-default" @click.prevent="addItemHTU()">+ Tambah Baris</button>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Cara Pakai EN</span>
              </label>

              <template v-for="(item, index) in form.htu_en">
                <div class="flex flex-row items-center">
                  <input type="text" v-model="item.value" placeholder="Cara Pakai EN"
                    class="w-10/12 input input-bordered" />
                  <button class="w-2/12 ml-6 btn btn-sm btn-default bg-error" @click.prevent="DeleteItemHTU(index)">-
                    Hapus</button>
                </div>
              </template>
              <div class="mt-2">
                <button class="btn btn-default" @click.prevent="addItemHTU()">+ Tambah Baris</button>
              </div>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Attention</span>
              </label>
              <input type="text" v-model="form.attention"  placeholder="Attention"
                class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Attention EN</span>
              </label>
              <input type="text" v-model="form.attention_en"  placeholder="Attention EN"
                class="input input-bordered w-full" />
            </div>
            <div class="flex w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text"><b>Gambar Group | Rekomendasi 149x84 | Maksimal 2 MB</b></span>
                </label>
                <div v-if="imageC">
                  <div class="cropper-wrapper">
                    <div :style="{ backgroundImage: 'url(' + form.imageUrl + ')' }" class="image-background"></div>
                    <cropper ref="cropperc" background-class="cropper-background" :src="form.imageUrl" 
                    :canvas="{
                          maxWidth: 200,
                        }" :stencil-props="{
                          aspectRatio: 149 / 84
                        }" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImage()">
                      Crop image
                    </button>
                  </div>
                </div>
                <div v-if="!imageC">
                  <img v-if="form.imageUrl" style="width: 149px; height: 84px"
                    class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrl" />
                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg" plain
                      @change="inputImageRenderer" />
                  </div>
                </div>
              </div>
            </div>

            <template v-for="(item, index) in form.item">
              <div class="flex w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text"><b>Media Detail Produk {{ index + 1 }} | 1:1 |
                        Maksimal 2 MB</b></span>
                    <div class="mt-2">
                      <button class="btn btn-sm btn-default bg-error" @click.prevent="DeleteItem(index)">-
                        Hapus</button>
                    </div>
                  </label>
                
                  <!-- <template v-if="checkFileExtension(item.image_url) === 'image'"> -->
                  <!-- <template v-if="checkFileExtension(item.image_url) === 'image'"> -->
                  <!-- <img v-if="item.image_url !== null" style="height: 485px; width: 712px"
                    class="mb-3 object-cover object-center lg:block"
                    :src="item.image_url !== null ? item.image_url : item.img_url" /> -->
                  <!-- </template> -->
                  <!-- </template> -->
                  <!-- <input type="file" class="file-input file-input-bordered w-full max-w-xs" :key="index + 1"
                    ref="imageRef" accept=".jpg, .png, .mp4, .jpeg" plain @change="(e) => inputImageRendererIndex(e, index)" /> -->

                  <div v-if="imageD[index] && checkFileExtension(item.img_url ? item.img_url?.name : item.image_url)  !== 'video'">
                  <div class="cropper-wrapper">
                    <div :style="{ backgroundImage: 'url(' + item.image_url + ')' }" class="image-background"></div>
                    <cropper ref="cropperd" background-class="cropper-background" :src="item.image_url" 
                    :canvas="{
                          maxWidth: 500,
                        }" :stencil-props="{
                          aspectRatio: 1 / 1
                        }" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImageIndex(index)">
                      Crop image
                    </button>
                  </div>
                </div>
                <div v-if="!imageD[index]">
                  <img v-if="item.image_url && checkFileExtension(item.img_url ? item.img_url?.name : item.image_url) !== 'video'" style="width: 324px; height: 324px"
                    class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="item.image_url" />
                  <template v-if="item.image_url && checkFileExtension(item.img_url ? item.img_url?.name : item.image_url) === 'video'">
                    <!-- <video-player class="w-1/2 mb-3" :src="item.img_url ? getVideoSource(item.img_url) : item.image_url" controls :loop="true" :volume="0.6" /> -->
                    <video controls width="400">
                      <source :src="item.img_url ? getVideoSource(item.img_url) : item.image_url" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>
                  </template>
                   

                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg, .mp4" plain
                      @change="(e) => inputImageRendererIndex(e, index)" />
                  </div>
                </div>


                </div>
              </div>
            </template>
            <div class="mt-2">
              <button class="btn btn-default" @click.prevent="addItem()">
                + Tambah
              </button>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Simpan Sebagai</span>
              </label>
              <select v-model="form.save_as" class="select select-bordered" disabled>
                <option value="live">Go Live</option>
                <option value="preview">Draft Review</option>
              </select>
            </div>
          </div>
          <div class="mt-10">

            <template v-if="isLoading">
              <button type="button" class="btn btn-primary" disabled>
                Loading...
              </button>
            </template>

            <template v-if="!isLoading">
              <button type="button" class="btn btn-primary" @click.prevent="saveData()">
                Simpan
              </button>
            </template>

            <template v-if="form.product_type_id == '1'">
              <!-- <router-link :to="{
                path: '/cms/product/detail/preview/' + this.$route.params.id,
              }"><button class="btn btn-neutral ml-2 hidden">
                  Lihat Perubahan
                </button></router-link> -->
              <router-link :to="{ path: '/product/detail/' + this.$route.params.id }"><button
                  class="btn btn-neutral ml-2">
                  Lihat Perubahan (Live)
                </button></router-link>
            </template>

            <template v-if="form.product_type_id == '2'">
              <!-- <router-link :to="{
                path: '/cms/product/detail/preview/' + this.$route.params.id,
              }"><button class="btn btn-neutral ml-2 hidden">
                  Lihat Perubahan
                </button></router-link> -->
              <router-link :to="{ path: '/product/detail/' + this.$route.params.id }"><button
                  class="btn btn-neutral ml-2">
                  Lihat Perubahan (Live)
                </button></router-link>
            </template>
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
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { ref } from "vue";

import Navbar from "@/components/layout/cms/navbar/Navbar.vue";
import Menu from "@/components/layout/cms/menu/Menu.vue";
import Footer from "@/components/layout/cms/footer/Footer.vue";
import { mapState } from "vuex";
const { toast, snackbar } = require("tailwind-toast");

import "vue-select/dist/vue-select.css";
export default {
  name: "HomeAboutUsEdit",
  components: { Navbar, Menu, Footer, Cropper },
  data() {
    return {
      playerOptions: {
        // videojs options
        width: '485px',
        height: '712px',
      },
      isLoading: false,
      imageC: false,
      imageD: [],
      form: {
        id: "",
        product_type_id: "",
        product_category_id: "",
        product_group_id: "",
        name: "",
        name_en: "",
        micrositeurl: "",
        microsite: false,
        gstoreurl: "",
        gstore: false,
        chatvalue: "",
        chat: false,
        emailvalue: "",
        email: false,
        description: "",
        description_en: "",
        compotition: "",
        compotition_en: "",
        item: [
          {
            id: "",
            image_url: "",
            img_url: "",
            setImage: "none",
            imageUrl: null,
          },
        ],
        htu_in: [
          { "value": "", }
        ],
        htu_en: [
          { "value": "", }
        ],
        attention: "",
        attention_en: "",
        save_as: "live",
        img_url: "",
        img_url: "",
        setImage: "none",
        imageUrl: null,
      },
      stencilprops: {
        handlers: {},
        movable: true,
        resizable: false,
      },
      regData: [],
    };
  },
  computed: {
    ...mapState({
      items: (state) => state.productcms.items,
      OptionsCategory: (state) => state.productcms.options.category,
      OptionsGroup: (state) => state.productcms.options.group,
    }),
  },
  watch: {
    "form.product_type_id"(obj) {
      return this.$store.dispatch("productcms/getParamCategory", obj);
    },
    "form.product_category_id"(obj) {
      return this.$store.dispatch("productcms/getParamGroup", obj);
    },
  },
  methods: {
    addItem() {
      var addRow = this.form.item;
      addRow.push({
        id: "",
        image_url: "",
        img_url: "",
        setImage: "none",
        imageUrl: null,
      });
    },
    addItemHTU() {
      var addRow = this.form.htu_in
      addRow.push({ "value": "" })
      var addRowEN = this.form.htu_en
      addRowEN.push({ "value": "" })
    },
    // addItemHTUEN() {
    //   var addRow = this.form.htu_en
    //   addRow.push({ "value": "" })
    // },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    cropImage() {
      if (this.imageC) {
        const result = this.$refs.cropperc.getResult()
        this.form.imageUrl = result.canvas.toDataURL(this.form.imageUrl)
        this.form.img_url = this.dataURLtoFile(result.canvas.toDataURL(this.form.imageUrl),this.form.img_url.name)
        this.imageC = false;
      }
     
    },
    cropImageIndex(index) {
      if (this.imageD[index]) {
        const result = this.$refs.cropperd[0].getResult()
        this.form.item[index].image_url = result.canvas.toDataURL(this.form.item[index].image_url)
        this.form.item[index].img_url = this.dataURLtoFile(result.canvas.toDataURL(this.form.item[index].image_url),this.form.item[index].img_url.name);
        this.form.item[index].setImage = "upload";
        this.imageD[index] = false;
      }
    },
    DeleteItem(index) {
      this.form.item.splice(index, 1)
    },
    DeleteItemHTU(index) {
      if (this.form.htu_in.length > 1 && this.form.htu_en.length > 1) {
        this.form.htu_en.splice(index, 1)
        this.form.htu_in.splice(index, 1)
      }
    },
    // DeleteItemHTUEN(index) {
    //   if (this.form.htu_en.length > 1) {
    //     this.form.htu_en.splice(index, 1)
    //   }
    // },
    notification(a, b, c, d, e) {
      toast()
        .default(a, b)
        .with({
          shape: "square",
          duration: 4000,
          speed: 1000,
          positionX: "end",
          positionY: "top",
          color: c,
          fontColor: d,
          fontTone: e,
        })
        .show();
    },
    async saveData() {
      try {
        this.isLoading = true;
        const formData = this.form;

        if (this.form.product_type_id) {
          const res = await this.$store.dispatch("productcms/formProductPostPut", formData);

          // Lakukan sesuatu setelah berhasil
          if (localStorage.getItem("product_detaillive")) {
            const dataLive = await this.$store.dispatch("product/getDetailHealths", "live");
            localStorage.setItem("product_detaillive", JSON.stringify(dataLive));
          }

          // if (localStorage.getItem("product_detailpreview")) {
          //   const dataPreview = await this.$store.dispatch("product/getDetailHealths", "preview");
          //   localStorage.setItem("product_detailpreview", JSON.stringify(dataPreview));
          // }

          // Notifikasi setelah berhasil
          this.notification(
            "Success:",
            "You have successfully",
            "bg-green-500",
            "white",
            "50"
          );

        } else {
          // Notifikasi jika form belum diisi
          this.notification(
            "Failed:",
            "The form must be filled in",
            "bg-red-500",
            "white",
            "50"
          );
        }
      } catch (err) {
        // Notifikasi untuk kegagalan
        this.notification(
          "Failed:",
          "You have unsuccessful",
          "bg-red-500",
          "white",
          "50"
        );
      } finally {
        // Matikan loading setelah selesai
        this.isLoading = false;
      }
    },
    // saveData() {
    //   const formData = this.form;
    //   if (this.form.product_type_id) {
    //     this.$store.dispatch("productcms/formProductPostPut", formData).then(
    //       (res) => {
    //         this.isLoading = true;
    //         this.notification(
    //           "Success :",
    //           "You have successfully",
    //           "bg-green-500",
    //           "white",
    //           "50"
    //         );
    //         if (localStorage.getItem("product_detaillive")) {
    //           this.$store
    //             .dispatch("product/getDetailHealths", "live")
    //             .then((data) => {
    //               localStorage.setItem(
    //                 "product_detaillive",
    //                 JSON.stringify(data)
    //               );
    //             });
    //         } else {
    //           this.$store
    //             .dispatch("product/getDetailHealths", "live")
    //             .then((data) => {
    //               localStorage.setItem(
    //                 "product_detaillive",
    //                 JSON.stringify(data)
    //               );
    //             });
    //         }
    //         if (localStorage.getItem("product_detailpreview")) {
    //           this.$store
    //             .dispatch("product/getDetailHealths", "preview")
    //             .then((data) => {
    //               localStorage.setItem(
    //                 "product_detailpreview",
    //                 JSON.stringify(data)
    //               );
    //             });
    //         } else {
    //           this.$store
    //             .dispatch("product/getDetailHealths", "preview")
    //             .then((data) => {
    //               localStorage.setItem(
    //                 "product_detailpreview",
    //                 JSON.stringify(data)
    //               );
    //             });
    //         }
    //         this.isLoading = false
    //       },
    //       (err) => {
    //         this.notification(
    //           "Failed :",
    //           "You have unsuccessful",
    //           "bg-red-500",
    //           "white",
    //           "50"
    //         );
    //       }
    //     );
    //   } else {
    //     this.notification(
    //       "Failed :",
    //       "The form must be filled in",
    //       "bg-red-500",
    //       "white",
    //       "50"
    //     );
    //   }
    // },
    getData(id) {
      this.$store
        .dispatch("productcms/getProductId", { id: id, status: "preview" })
        .then((data) => {
          this.$store.dispatch(
            "productcms/getParamCategory",
            data["product_type_id"]
          );
          this.$store.dispatch(
            "productcms/getParamGroup",
            data["product_category_id"]
          );
          this.form.id = data["id"];
          this.form.name = data["name"];
          this.form.name_en = data["name_en"];
          this.form.product_type_id = data["product_type_id"];
          this.form.product_category_id = data["product_category_id"];
          this.form.product_group_id = data["product_group_id"];
          this.form.description = data["description"];
          this.form.description_en = data["description_en"];
          this.form.compotition = data["compotition"];
          this.form.compotition_en = data["compotition_en"];
          this.form.gstore = data["gstore"];
          this.form.gstoreurl = data["gstoreurl"];
          this.form.microsite = data["microsite"];
          this.form.micrositeurl = data["micrositeurl"];
          this.form.chat = data["chat"];
          this.form.chatvalue = data["chatvalue"];
          this.form.htu_en = data["htu_en"];
          this.form.htu_in = data["htu_in"];
          this.form.attention = data["attention"] ?? "";
          this.form.attention_en = data["attention_en"] ?? "";
          this.form.email = data["email"];
          this.form.emailvalue = data["emailvalue"];
          this.form.imageUrl = data["image_url"];
          if (data["image_url_detail"]) {
            this.form.item = data["image_url_detail"];
          }
        });
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer(e) {
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
        this.imageC = true;
        this.form.img_url = file;
        this.form.setImage = "upload";
        this.form.imageUrl = URL.createObjectURL(e.target.files[0]);
      }
    },
    getVideoSource(file){
      console.log(file,"file",URL.createObjectURL(file));
        return URL.createObjectURL(file)
    },
    inputImageRendererIndex(e, index) {
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
        this.imageD[index] = this.checkFileExtension(e.target.files[0].name) === 'image';
        this.form.item[index].img_url = file;
        this.form.item[index].setImage = "upload";
        this.form.item[index].image_url = URL.createObjectURL(e.target.files[0]);

      }
    },
    checkFileExtension(fileName) {
      const imageExtension = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
      const videoExtension = ['mp4', 'webm', 'ogg'];

      const extension = fileName.split('.').pop().toLowerCase();

      if (imageExtension.includes(extension)) {
        return "image";
      } else if (videoExtension.includes(extension)) {
        return "video";
      } else {
        return;
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.getData(this.$route.params.id);
    }
  },
  setup() {
    const showMenu = ref(false);
    return {
      showMenu,
    };
  },
};
</script>

<style>
.vs--searchable {
  height: 3rem;
}

.vs__dropdown-toggle {
  height: 3rem;
  border-radius: var(--rounded-btn, 0.5rem);
}

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
  width: 600px;
  overflow: auto;
}
</style>
