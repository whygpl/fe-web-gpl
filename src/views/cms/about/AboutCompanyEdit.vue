<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div
      class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
      :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="Aboutus-Company" />
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
            <div class="carousel w-full">
              <div id="item1" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Gambar | Rekomendasi 448x448 | Maksimal 2 MB</span>
                    </label>
                    <div v-if="imageC_1">
                      <div class="cropper-wrapperslide">
                        <div :style="{ backgroundImage: 'url(' + form.imageUrl_1 + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropper1" background-class="cropper-background" :src="form.imageUrl_1"
                        :canvas="{
                        maxWidth: 512,
                      }"
                      :stencil-props="{ aspectRatio: 1/1  }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC_1">
                      <img style="width:448px;height:448px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrl_1" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="inputImageRenderer_1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="item2" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full ">
                    <label class="label">
                      <span class="label-text">Gambar | Rekomendasi 448x448 | Maksimal 2 MB</span>
                    </label>
                    <div v-if="imageC_2">
                      <div class="cropper-wrapperslide">
                        <div :style="{ backgroundImage: 'url(' + form.imageUrl_2 + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropper2" background-class="cropper-background" :src="form.imageUrl_2"
                        :canvas="{
                        maxWidth: 512,
                      }"
                      :stencil-props="{ aspectRatio: 1/1  }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC_2">
                      <img style="width:448px;height:448px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrl_2" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="inputImageRenderer_2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="item3" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full ">
                    <label class="label">
                      <span class="label-text">Gambar | Rekomendasi 448x448 | Maksimal 2 MB</span>
                    </label>
                    <div v-if="imageC_3">
                      <div class="cropper-wrapperslide">
                        <div :style="{ backgroundImage: 'url(' + form.imageUrl_3 + ')' }" class="image-background">
                        </div>
                        <cropper ref="cropper3" background-class="cropper-background" :src="form.imageUrl_3"
                        :canvas="{
                        maxWidth: 512,
                      }"
                      :stencil-props="{ aspectRatio: 1/1  }" />
                      </div>
                      <div class="mt-2">
                        <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                      </div>
                    </div>
                    <div v-if="!imageC_3">
                      <img style="width:448px;height:448px;"
                        class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrl_3" />
                      <div class="mt-2">
                        <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg"
                          plain @change="inputImageRenderer_3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#item1" @click="carouselChange(1)" :class="item1 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Gambar 1</a>
              <a href="#item2" @click="carouselChange(2)" :class="item2 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Gambar 2</a>
              <a href="#item3" @click="carouselChange(3)" :class="item3 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Gambar 3</a>
            </div>
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
                <span class="label-text">Sub | Maksimal Karakter 200 Judul</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.subtitle" :options="optionsTitle"
                placeholder="Sub Judul" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub | Maksimal Karakter 200 Judul EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.subtitle_en" :options="optionsTitle"
                placeholder="Sub Judul EN" theme="snow" />
            </div>
            <div class="flex carousel w-full">
              <div id="sectionCPIN1" class="flex carousel-item w-full">
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Paragraph</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_1" :options="options"
                      placeholder="Paragraph 1" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_3" :options="options"
                      placeholder="Paragraph 3" theme="snow" />
                  </div>
                </div>
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_2" :options="options"
                      placeholder="Paragraph 2" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_4" :options="options"
                      placeholder="Paragraph 4" theme="snow" />
                  </div>
                </div>
              </div>
              <div id="sectionCPEN2" class="carousel-item w-full">
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Paragraph</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_1_en" :options="options"
                      placeholder="Paragraph EN 1" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_3_en" :options="options"
                      placeholder="Paragraph EN 3" theme="snow" />
                  </div>
                </div>
                <div class="w-full">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_2_en" :options="options"
                      placeholder="Paragraph EN 2" theme="snow" />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_4_en" :options="options"
                      placeholder="Paragraph EN 4" theme="snow" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#sectionCPIN1" @click="engChange1(1)" :class="item1 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Indonesia</a>
              <a href="#sectionCPEN2" @click="engChange1(2)" :class="item2 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">English</a>
            </div>
            <div class="flex w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gambar | Rekomendasi 1075x368 | Maksimal 2 MB</span>
                </label>
                <div v-if="imageC_C">
                  <div class="cropper-wrappertextb">
                    <div :style="{ backgroundImage: 'url(' + form.imageUrl + ')' }" class="image-background"></div>
                    <cropper ref="cropperc" background-class="cropper-background" :src="form.imageUrl" 
                      :canvas="{
                            maxWidth: 1075,
                          }"  :stencil-props="{ aspectRatio: 1075/368 }" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                  </div>
                </div>
                <div v-if="!imageC_C">
                  <img style="width:1075px;height:368px;"
                    class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrl" />
                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg" plain
                      @change="inputImageRenderer" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex carousel w-full">
              <div id="sectionCPIN3" class="carousel-item w-full">
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_5" :options="options"
                      placeholder="Paragraph 5" theme="snow" />
                  </div>
                </div>
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_6" :options="options"
                      placeholder="Paragraph 6" theme="snow" />
                  </div>
                </div>
              </div>
              <div id="sectionCPEN4" class="carousel-item w-full">
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_5_en" :options="options"
                      placeholder="Paragraph EN 5" theme="snow" />
                  </div>
                </div>
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.paragraph_6_en" :options="options"
                      placeholder="Paragraph EN 6" theme="snow" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#sectionCPIN3" @click="engChange2(1)" :class="item1 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Indonesia</a>
              <a href="#sectionCPEN4" @click="engChange2(2)" :class="item2 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">English</a>
            </div>
            <b>History</b>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_title" :options="optionsTitle" placeholder="Judul"
                theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Judul | Maksimal Karakter 50 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_title_en" :options="optionsTitle"
                placeholder="Judul EN" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub Judul | Maksimal Karakter 200</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_subtitle" :options="optionsTitle"
                placeholder="Sub Judul" theme="snow" />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Sub Judul | Maksimal Karakter 200 EN</span>
              </label>
              <QuillEditor contentType="html" v-model:content="form.h_subtitle_en" :options="optionsTitle"
                placeholder="Sub Judul EN" theme="snow" />
            </div>
            <div class="flex w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gambar | Rekomendasi 532x277 | Maksimal 2 MB</span>
                </label>
                <div v-if="imageC_H">
                  <div class="cropper-wrappertextc">
                    <div :style="{ backgroundImage: 'url(' + form.imageUrl_h + ')' }" class="image-background"></div>
                    <cropper ref="cropperh" background-class="cropper-background" :src="form.imageUrl_h"
                    :canvas="{
                            maxWidth: 720,
                          }"  :stencil-props="{ aspectRatio: 532/277 }" />
                  </div>
                  <div class="mt-2">
                    <button class="btn btn-primary" @click="cropImage()">Crop image</button>
                  </div>
                </div>
                <div v-if="!imageC_H">
                  <img style="width:532px;height:277px;"
                    class="mb-3 h-screen w-screen object-cover object-center lg:block" :src="form.imageUrl_h" />
                  <div class="mt-2">
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept=".jpg, .png, .jpeg" plain
                      @change="inputImageRenderer_h" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex carousel w-full">
              <div id="sectionCPIN5" class="carousel-item w-full">
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paragraph_1" :options="options"
                      placeholder="Paragraph" theme="snow" />
                  </div>
                </div>
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paragraph_2" :options="options"
                      placeholder="Paragraph 2" theme="snow" />
                  </div>
                </div>
              </div>
              <div id="sectionCPEN6" class="carousel-item w-full">
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paragraph_1_en" :options="options"
                      placeholder="Paragraph EN 1" theme="snow" />
                  </div>
                </div>
                <div class="w-1/2">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">&nbsp;</span>
                    </label>
                    <QuillEditor contentType="html" v-model:content="form.h_paragraph_2_en" :options="options"
                      placeholder="Paragraph EN 2" theme="snow" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#sectionCPIN5" @click="engChange3(1)" :class="item1 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">Indonesia</a>
              <a href="#sectionCPEN6" @click="engChange3(2)" :class="item2 ? 'bg-primary text-white' : ''"
                class="btn btn-xs">English</a>
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
            <!-- <router-link :to="{ name: 'AboutPreviewViewTab1' }"><button class="btn btn-neutral ml-2">Lihat
                Perubahan</button></router-link> -->
            <router-link :to="{ name: 'AboutViewTab1' }"><button class="btn btn-neutral ml-2">Lihat Perubahan
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
import { QuillEditor } from '@vueup/vue-quill'
import { mapState } from 'vuex'
const { toast, snackbar } = require('tailwind-toast')

export default {
  name: 'HomeAboutUsEdit',
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
      item1: true,
      item2: false,
      item3: false,
      ind1: true,
      eng1: false,
      ind2: true,
      eng2: false,
      ind3: true,
      eng3: false,
      form: {
        imageC_1: false,
        imageC_2: false,
        imageC_3: false,
        imageC_C: false,
        imageC_H: false,
        title: '',
        title_en: '',
        subtitle: '',
        subtitle_en: '',
        paragraph_1: '',
        paragraph_2: '',
        paragraph_3: '',
        paragraph_4: '',
        paragraph_5: '',
        paragraph_6: '',
        paragraph_1_en: '',
        paragraph_2_en: '',
        paragraph_3_en: '',
        paragraph_4_en: '',
        paragraph_5_en: '',
        paragraph_6_en: '',
        h_title: '',
        h_title_en: '',
        h_subtitle: '',
        h_subtitle_en: '',
        h_paragraph_1: '',
        h_paragraph_2: '',
        save_as: 'live',
        // img_url:'',
        img_url_id_1: '',
        img_url_id_2: '',
        img_url_id_3: '',
        img_url: '', setImage: 'none', imageUrl: null,
        img_url_h: '', setImage_h: 'none', imageUrl_h: null,
        img_url_1: '', setImage_1: 'none', imageUrl_1: null,
        img_url_2: '', setImage_2: 'none', imageUrl_2: null,
        img_url_3: '', setImage_3: 'none', imageUrl_3: null,
      },
      stencilprops: {
        handlers: {},
        movable: true,
        resizable: true,
      },
      regData: [],
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
      items: state => state.aboutcms.items
    }),
  },
  methods: {
    carouselChange(index) {
      if (index == 1) {
        this.item1 = true
        this.item2 = false
        this.item3 = false
      }
      if (index == 2) {
        this.item1 = false
        this.item2 = true
        this.item3 = false
      }
      if (index == 3) {
        this.item1 = false
        this.item2 = false
        this.item3 = true
      }
    },
    engChange1(index) {
      if (index == 1) {
        this.ind1 = true
        this.eng1 = false
      }
      if (index == 2) {
        this.ind1 = false
        this.eng1 = true
      }
    },
    engChange2(index) {
      if (index == 1) {
        this.ind2 = true
        this.eng2 = false
      }
      if (index == 2) {
        this.ind2 = false
        this.eng2 = true
      }
    },
    engChange3(index) {
      if (index == 1) {
        this.ind3 = true
        this.eng3 = false
      }
      if (index == 2) {
        this.ind3 = false
        this.eng3 = true
      }
    },
    dataURLtoFile(dataurl, filename, typed) {
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: typed })
    },
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(',');
      if (arr.length < 2) {
        return null; // atau throw exception sesuai kebutuhan
      }

      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[arr.length - 1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new Blob([u8arr], { type: mime });
    },
    cropImage() {
      if (this.imageC_1) {
        const result = this.$refs.cropper1.getResult()
        this.form.imageUrl_1 = result.canvas.toDataURL(this.form.imageUrl_1)
        this.form.img_url_1 = this.dataURLtoFile(this.form.imageUrl_1, this.form.img_url_1.name, this.form.img_url_1.type)
        this.imageC_1 = false
      }
      if (this.imageC_2) {
        const result = this.$refs.cropper2.getResult()
        this.form.imageUrl_2 = result.canvas.toDataURL(this.form.imageUrl_2)
        this.form.img_url_2 = this.dataURLtoFile(this.form.imageUrl_2, this.form.img_url_2.name, this.form.img_url_2.type)
        this.imageC_2 = false
      }
      if (this.imageC_3) {
        const result = this.$refs.cropper3.getResult()
        this.form.imageUrl_3 = result.canvas.toDataURL(this.form.imageUrl_3)
        this.form.img_url_3 = this.dataURLtoFile(this.form.imageUrl_3, this.form.img_url_3.name, this.form.img_url_3.type)
        this.imageC_3 = false
      }
      if (this.imageC_C) {
        const result = this.$refs.cropperc.getResult()
        this.form.imageUrl = result.canvas.toDataURL(this.form.imageUrl)
        this.form.img_url = this.dataURLtoFile(this.form.imageUrl, this.form.img_url.name, this.form.img_url.type)
        this.imageC_C = false
      }
      if (this.imageC_H) {
        const result = this.$refs.cropperh.getResult()
        this.form.imageUrl_h = result.canvas.toDataURL(this.form.imageUrl_h)
        this.form.img_url_h = this.dataURLtoFile(this.form.imageUrl_h, this.form.img_url_h.name, this.form.img_url_h.type)
        this.imageC_H = false
      }
    },
    notification(a, b, c, d, e) {
      toast().default(a, b).with({ shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e }).show()
    },
    saveData() {
      const formData = this.form
      this.$store.dispatch('aboutcms/formCompanyPostPut', formData)
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
        },
          err => {
            this.notification('Failed :', 'You have unsuccessful', 'bg-red-500', 'white', '50')
          })
    },
    getData(id) {
      this.$store.dispatch('aboutcms/getCompany').then(data => {
        this.form.title = data.profiles['title']
        this.form.title_en = data.profiles['title_en']
        this.form.subtitle = data.profiles['subtitle']
        this.form.subtitle_en = data.profiles['subtitle_en']
        this.form.paragraph_1 = data.profiles['paragraph_1']
        this.form.paragraph_2 = data.profiles['paragraph_2']
        this.form.paragraph_3 = data.profiles['paragraph_3']
        this.form.paragraph_4 = data.profiles['paragraph_4']
        this.form.paragraph_5 = data.profiles['paragraph_5']
        this.form.paragraph_6 = data.profiles['paragraph_6']
        this.form.paragraph_1_en = data.profiles['paragraph_1_en']
        this.form.paragraph_2_en = data.profiles['paragraph_2_en']
        this.form.paragraph_3_en = data.profiles['paragraph_3_en']
        this.form.paragraph_4_en = data.profiles['paragraph_4_en']
        this.form.paragraph_5_en = data.profiles['paragraph_5_en']
        this.form.paragraph_6_en = data.profiles['paragraph_6_en']
        this.form.imageUrl = data.profiles['image_url']
        this.form.imageUrl_1 = data.profiles.image_urls[0]['image_url']
        this.form.imageUrl_2 = data.profiles.image_urls[1]['image_url']
        this.form.imageUrl_3 = data.profiles.image_urls[2]['image_url']
        this.form.img_url_id_1 = data.profiles.image_urls[0]['id']
        this.form.img_url_id_2 = data.profiles.image_urls[1]['id']
        this.form.img_url_id_3 = data.profiles.image_urls[2]['id']
        this.form.h_title = data.histories['title']
        this.form.h_title_en = data.histories['title_en']
        this.form.h_subtitle = data.histories['subtitle']
        this.form.h_subtitle_en = data.histories['subtitle_en']
        this.form.h_paragraph_1 = data.histories['paragraph_1']
        this.form.h_paragraph_2 = data.histories['paragraph_2']
        this.form.h_paragraph_1_en = data.histories['paragraph_1_en']
        this.form.h_paragraph_2_en = data.histories['paragraph_2_en']
        this.form.imageUrl_h = data.histories['image_url']
      })
    },
    isValidFileSize(file, maxSizeMB) {
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to Bytes
      return file.size <= maxSizeBytes;
    },
    inputImageRenderer_h(e) {
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
        this.imageC_H = true
        this.form.img_url_h = file
        this.form.setImage_h = 'upload'
        this.form.imageUrl_h = URL.createObjectURL(e.target.files[0])
      }
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
        this.imageC_C = true
        this.form.img_url = file
        this.form.setImage = 'upload'
        this.form.imageUrl = URL.createObjectURL(file)
      }
    },
    inputImageRenderer_1(e) {
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
        this.imageC_1 = true
        this.form.img_url_1 = file
        this.form.setImage_1 = 'upload'
        this.form.imageUrl_1 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_2(e) {
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
        this.imageC_2 = true
        this.form.img_url_2 = file
        this.form.setImage_2 = 'upload'
        this.form.imageUrl_2 = URL.createObjectURL(e.target.files[0])
      }
    },
    inputImageRenderer_3(e) {
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
        this.imageC_3 = true
        this.form.img_url_3 = file
        this.form.setImage_3 = 'upload'
        this.form.imageUrl_3 = URL.createObjectURL(e.target.files[0])
      }
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.$store.dispatch('aboutcms/getCompany')
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
.cropper-wrapperslide {
  overflow: hidden;
  position: relative;
  /* width: 320px;
	height: 720px; */
  /* background: black; */
  background-repeat: no-repeat;
}

.cropper-wrappertextc {
  overflow: hidden;
  position: relative;
  /* width: 1024px;
	height: 768px; */
  /* background: black; */
  background-repeat: no-repeat;
}

.cropper-wrappertexth {
  overflow: hidden;
  position: relative;
  /* width: 1200px;
	height: 810px; */
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

.cropper-wrappertextc, .cropper-wrapperslide {
  width: 600px;
  overflow: auto;
}

.cropper-wrappertextb {
  width: 1075px;
  overflow: auto;
}


</style>