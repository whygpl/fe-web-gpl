<template>
  <div class="static">
    <Navbar active_menu="about"/>
    <section class="min-h-56 relative max-h-full bg-primary font-roboto">
        <div class="left-0 top-0 -z-[1] h-full w-full bg-primary before:absolute before:right-0 before:top-0 before:hidden before:h-full before:bg-white before:content-[''] md:before:block md:before:w-1/4"></div>
        <div class="left-0 top-0 h-full w-full px-10 pb-10 pt-20 md:px-0 md:pb-20 md:pt-40">
            <div class="container z-50 mx-auto">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                <div class="relative flex self-center">
                  <div class="relative-blockquote before:bg-white"></div>
                  <div class="lg:pr-10">
                    <div class="font-roboto font-[900] text-xl text-gal-blue-light">{{ getLocale == 'EN' ? getLocalAbout.about.page_title_en : getLocalAbout.about.page_title }}</div>
                    <div class="mt-2 font-roboto text-5xl font-[900] text-white md:mt-8 md:text-7xl">{{  getLocale == 'EN' ? getLocalAbout.about.title_en : getLocalAbout.about.title }}</div>
                  </div>
                </div>
                <div class="relative">
                  <div @click="onModalVideo" class="absolute flex aspect-video h-full w-full cursor-pointer items-center justify-center rounded-2xl">
                    <!-- <div class="flex h-20 w-20 items-center justify-center rounded-full bg-black/70">
                      <font-awesome-icon icon="fa-solid fa-play" size="2xl" class="text-white" />
                    </div> -->
                  </div>
                  <iframe class="aspect-video w-full rounded-2xl gal-shadow" :src="processedVideoUrl"></iframe>
                </div>
              </div>
            </div>
        </div>
    </section>
    <section class="w-full">
      <div class="container mx-auto flex items-center">
        <ul class="mx-2 flex w-full flex-wrap rounded-lg bg-gal-grey-light p-1 text-center font-roboto text-sm text-gal-grey-darker md:mx-0 md:grid md:grid-flow-col md:text-base">
          <li @click="goTotab('tab1')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
            <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal" :class="active_tab === 'tab1' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? 'Company Profile' : 'Sekilas Tentang Kami'}}</span>
          </li>
          <li @click="goTotab('tab2')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
            <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal" :class="active_tab === 'tab2' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? "President's Welcome" : 'Sambutan Presiden Direktur'}}</span>
          </li>
          <li @click="goTotab('tab3')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
            <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal" :class="active_tab === 'tab3' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? 'Vision & Mission' : 'Visi Misi'}}</span>
          </li>
          <li @click="goTotab('tab4')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
            <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal" :class="active_tab === 'tab4' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? 'Company Value' : 'Nilai Perusahaan'}}</span>
          </li>
          <li @click="goTotab('tab5')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
            <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal" :class="active_tab === 'tab5' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? 'Certification' : 'Sertifikasi'}}</span>
          </li>
          <li @click="goTotab('tab6')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
            <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal" :class="active_tab === 'tab6' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? 'Office & Factory' : 'Kantor & Pabrik'}}</span>
          </li>
          <li @click="goTotab('tab7')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
            <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal" :class="active_tab === 'tab7' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? 'Awards' : 'Penghargaan'}}</span>
          </li>
        </ul>
      </div>
    </section>

    <section v-if="active_tab === 'tab1'" class="w-full">
      <section id="section-1" class="p-10 lg:px-0 lg:py-20">
        <div class="container mx-auto lg:px-40">
          <div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div class="mx-auto w-full flex-col items-center justify-center md:mx-0 md:items-start">
              <div class="flex overflow-hidden gal-shadow">
                <!-- belom dari api -->
                <div id="slider_img_glimpse" v-for="(item, index) in getLocalAbout.about_company_profile.slider" :key="item.id"
                  class="group flex w-full min-w-full max-w-full items-center justify-center overflow-hidden scroll-smooth duration-500"
                  :style="{ transform: `translateX(${-container.slide_glimpse * (current.slide_glimpse - 1)}px)`}">
                  <img :src="item.image_url" :alt="'Slider Pic ' + item.id" class="w-full object-cover object-center transition-all duration-700 group-hover:scale-125 aspect-square" />
                </div>
              </div>
              <div class="col flex items-center justify-center gap-x-4 py-4 md:justify-end">
                  <button v-for="item in getLocalAbout.about_company_profile.slider.length" :key="'slider-dot-' + item.id"
                    class="my-1 h-1.5 w-12 duration-500" :class="{
                      'bg-gal-grey-dark hover:opacity-70': current.slide_glimpse != item,
                      'bg-gal-blue-light': current.slide_glimpse == item,
                    }" @click="current.slide_glimpse = item" />
              </div>
            </div>
            <div>
              <div class="gal-title">{{ getLocale == 'EN' ? getLocalAbout.about_company_profile.title_en : getLocalAbout.about_company_profile.title }}</div>
              <div class="mt-2 flex md:mt-10">
                <div class="relative-blockquote mr-4 hidden before:bg-gal-blue-light md:block"></div>
                <div class="gal-description">{{ getLocale == 'EN' ? getLocalAbout.about_company_profile.subtitle_en : getLocalAbout.about_company_profile.subtitle }}</div>              
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-x-8 text-justify font-roboto text-sm font-[400] md:grid-cols-2 md:text-base">
            <div>
              <div class="leading-relaxed text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_1_en : getLocalAbout.about_company_profile.paragraph_1 }}</div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-6">{{ getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_2_en : getLocalAbout.about_company_profile.paragraph_2 }}</div>
            </div>
            <div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-0">{{ getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_3_en : getLocalAbout.about_company_profile.paragraph_3 }}</div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-6">{{ getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_4_en : getLocalAbout.about_company_profile.paragraph_4 }}</div>
            </div>
          </div>
          <div class="py-8">
            <!-- belom dari api -->
            <img :src="getLocalAbout.about_company_profile.image_url" class="w-full gal-shadow" alt="img-profile">
          </div>
          <div class="grid grid-cols-1 gap-x-8 text-justify font-roboto text-sm font-[400] md:grid-cols-2 md:text-base">
            <div>
              <div class="leading-relaxed text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_5_en : getLocalAbout.about_company_profile.paragraph_5 }}</div>
            </div>
            <div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-0">{{ getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_6_en : getLocalAbout.about_company_profile.paragraph_6 }}</div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-2" class="bg-gal-grey-light p-10 lg:px-0 lg:py-20">
        <div class="container mx-auto lg:px-40">
          <div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div class="gal-title">{{ getLocale == 'EN' ? getLocalAbout.about_company_historie.title_en : getLocalAbout.about_company_historie.title }}</div>
              <div class="mt-2 flex md:mt-10">
                <div class="relative-blockquote mr-4 hidden before:bg-gal-blue-light md:block"></div>
                <div class="gal-description">{{ getLocale == 'EN' ? getLocalAbout.about_company_historie.subtitle_en : getLocalAbout.about_company_historie.subtitle }}</div>              
              </div>
            </div>
            <div>
              <img :src="getLocalAbout.about_company_historie.image_url" class="aspect-video w-full object-cover object-center gal-shadow" alt="image-2">
            </div>
          </div>
          <div class="grid grid-cols-1 gap-x-8 text-justify font-roboto text-sm font-[400] md:grid-cols-2 md:text-base">
            <div>
              <div class="leading-relaxed text-gal-grey-darker">{{ getLocale == 'EN' ? getLocalAbout.about_company_historie.paragraph_1_en : getLocalAbout.about_company_historie.paragraph_1 }}</div>
            </div>
            <div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-0">{{ getLocale == 'EN' ? getLocalAbout.about_company_historie.paragraph_2_en : getLocalAbout.about_company_historie.paragraph_2 }}</div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section v-if="active_tab === 'tab2'" class="p-10 lg:px-0 lg:py-20">
      <div class="container mx-auto lg:px-40">
        <div class="gal-title mb-8">{{ getLocale == 'EN' ? getLocalAbout.about_greeting.title_en : getLocalAbout.about_greeting.title }}</div>
        <div class="mt- mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img :src="getLocalAbout.about_greeting.image_url" class="w-full object-cover object-top aspect-[3/4] lg:object-center gal-shadow" alt="image-2">
          </div>
          <div class="col-span-2 font-roboto text-sm font-[400] text-gal-grey-darker md:text-base">
            <div class="leading-relaxed text-justify">{{ getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_1_en : getLocalAbout.about_greeting.paragraph_1 }}</div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">{{ getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_2_en : getLocalAbout.about_greeting.paragraph_2 }}</div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">{{ getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_3_en : getLocalAbout.about_greeting.paragraph_3 }}</div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">{{ getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_4_en : getLocalAbout.about_greeting.paragraph_4 }}</div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">{{ getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_5_en : getLocalAbout.about_greeting.paragraph_5 }}</div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">{{ getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_6_en : getLocalAbout.about_greeting.paragraph_6 }}</div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">{{ getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_7_en : getLocalAbout.about_greeting.paragraph_7 }}</div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">{{ getLocale == 'EN' ? getLocalAbout.about_greeting.greeting_en : getLocalAbout.about_greeting.greeting }}, <br> {{ getLocalAbout.about_greeting.messenger }} <br> {{ getLocale == 'EN' ? getLocalAbout.about_greeting.job_title_en : getLocalAbout.about_greeting.job_title }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <section v-if="active_tab === 'tab3'">
      <section class="relative">
        <img :src="getLocalAbout.about_visi_misi.visi.image_url_sm" class="block w-full md:hidden" alt="img-vision-sm">
        <img :src="getLocalAbout.about_visi_misi.visi.image_url_md" class="hidden w-full md:block lg:hidden" alt="img-vision-md">
        <img :src="getLocalAbout.about_visi_misi.visi.image_url_lg" class="hidden w-full lg:block" alt="img-vision-lg">

        <div class="absolute inset-0 flex h-full w-full px-6 py-10 md:items-center lg:p-0">
          <div class="container mx-auto">
            <div class="w-full md:w-2/3 lg:w-1/2">
              <div class="font-roboto text-3xl font-[900] text-primary lg:text-5xl">{{ getLocale == 'EN' ? getLocalAbout.about_visi_misi.visi.title_en : getLocalAbout.about_visi_misi.visi.title }}</div>
              <div class="mt-2 font-roboto text-base font-[400] text-gal-grey-darker lg:mt-6 lg:text-xl">{{ getLocale == 'EN' ? getLocalAbout.about_visi_misi.visi.description_en : getLocalAbout.about_visi_misi.visi.description }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative">
        <img :src="getLocalAbout.about_visi_misi.misi.image_url_sm" class="block w-full md:hidden" alt="">
        <img :src="getLocalAbout.about_visi_misi.misi.image_url_md" class="hidden w-full md:block lg:hidden" alt="">
        <img :src="getLocalAbout.about_visi_misi.misi.image_url_lg" class="hidden w-full lg:block" alt="">

        <!-- <div class="absolute left-0 top-0 hidden h-full w-3/4 bg-gradient-to-r from-white via-white md:block"></div> -->
        <div class="absolute inset-0 flex h-full w-full px-6 py-10 md:items-center lg:p-0">
          <div class="container mx-auto">
            <div class="w-full md:w-2/3 lg:w-1/2">
              <div class="font-roboto text-3xl font-[900] text-primary lg:text-5xl">{{ getLocale == 'EN' ? getLocalAbout.about_visi_misi.misi.title_en : getLocalAbout.about_visi_misi.misi.title }}</div>
              <div class="gal-subtitle">{{ getLocale == 'EN' ? getLocalAbout.about_visi_misi.misi.subtitle_en : getLocalAbout.about_visi_misi.misi.subtitle }}</div>
              <div class="mt-2 font-roboto text-base font-[400] text-gal-grey-darker lg:mt-6 lg:text-xl">
                <div>{{ getLocale == 'EN' ? getLocalAbout.about_visi_misi.misi.description_en : getLocalAbout.about_visi_misi.misi.description }}</div>
                <ul class="ml-8 list-decimal">
                  <li v-if="getLocale == 'EN'" v-for="item in getLocalAbout.about_visi_misi.misi.mission_item_en">{{ item.name }}</li>
                  <li v-else v-for="item in getLocalAbout.about_visi_misi.misi.mission_item">{{ item.name }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section v-if="active_tab === 'tab4'" class="p-10 lg:px-0 lg:py-20">
      <div class="container mx-auto lg:px-40">
        <div class="gal-title">{{ getLocale == 'EN' ? getLocalAbout.about_company_value.title_en : getLocalAbout.about_company_value.title }}</div>
        <div class="gal-description mt-1 md:mt-3">{{ getLocale == 'EN' ? getLocalAbout.about_company_value.description_en : getLocalAbout.about_company_value.description }}</div>
        <div class="mt-8 grid grid-flow-row grid-cols-1 gap-4 md:mt-12 md:grid-flow-col md:grid-cols-none md:grid-rows-4">
          <div v-for="(item, index) in getLocalAbout.about_company_value.list" :key="index" class="flex items-center gap-x-2 md:gap-x-4">
            <img :src="item.image_url" :alt="'icon-' + index" class="w-8 md:w-10 lg:w-14">
            <div class="font-roboto font-[400] text-sm text-gal-grey-darker md:text-base lg:text-lg"> {{ index + 1 }}. {{ getLocale == 'EN' ? item.title_en : item.title }}</div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="active_tab === 'tab5'" class="p-10 lg:px-0 lg:py-20">
      <div class="container mx-auto lg:px-40">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          <div>
            <div class="gal-title">{{ getLocale == 'EN' ? getLocalAbout.about_certification.title_en : getLocalAbout.about_certification.title }}</div>
            <div class="gal-description text-justify mt-1 md:mt-3">{{ getLocale == 'EN' ? getLocalAbout.about_certification.description_en : getLocalAbout.about_certification.description }}</div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
            <div data-aos="fade-up" :data-aos-delay="`${(index*150)+500}`" v-for="(item, index) in getLocalAbout.about_certification.list" :key="item.id" class="grid aspect-square place-content-center border border-gal-blue-lighter p-4 md:border-2 md:p-6">
              <img :src="item.image_url" :alt="'image' + index" class="max-h-max object-cover object-center">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="active_tab === 'tab6'" class="static p-10 lg:px-0 lg:py-20">
      <div class="container mx-auto lg:px-40">
        <section>
          <div class="grid grid-cols-1 md:grid-cols-4">
            <div class="gal-title">{{ getLocale == 'EN' ? getLocalAbout.about_office_factory.office.title_en : getLocalAbout.about_office_factory.office.title }}</div>
            <div class="gal-description text-justify col-span-3 mt-1 md:mt-0">{{ getLocale == 'EN' ? getLocalAbout.about_office_factory.office.description_en : getLocalAbout.about_office_factory.office.description }}</div>
          </div>
          <div class="mt-6 grid grid-cols-2 md:grid-cols-3 place-items-stretch gap-3 md:mt-10 md:grid-cols-3 md:gap-5">
            <div v-for="(item, index) in getLocalAbout.about_office_factory.office.list">
                <OfficeCard :image_url="item.image_url" :index="index" :flag="getLocalAbout.about_office_factory.office.title"/>
            </div>
          </div>
        </section>
        <section class="mt-10 md:mt-20">
          <div class="grid grid-cols-1 md:grid-cols-4">
            <div class="gal-title">{{ getLocale == 'EN' ? getLocalAbout.about_office_factory.factory.title_en : getLocalAbout.about_office_factory.factory.title }}</div>
            <div class="gal-description text-justify col-span-3 mt-1 md:mt-0">{{ getLocale == 'EN' ? getLocalAbout.about_office_factory.factory.description_en : getLocalAbout.about_office_factory.factory.description }}</div>
          </div>
          <div class="mt-6 grid grid-cols-2 md:grid-cols-3 place-items-stretch gap-3 md:mt-10 md:grid-cols-3 md:gap-5">
            <div v-for="(item, index) in getLocalAbout.about_office_factory.factory.list">
                <OfficeCard :image_url="item.image_url" :index="index" :flag="getLocalAbout.about_office_factory.factory.title"/>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section v-if="active_tab === 'tab7'" class="p-10 lg:px-0 lg:py-20">
      <div class="container mx-auto lg:px-40">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          <div>
            <div class="gal-title">{{ getLocale == 'EN' ? getLocalAbout.about_award.title_en : getLocalAbout.about_award.title }}</div>
            <div class="gal-description text-justify mt-1 md:mt-3">{{ getLocale == 'EN' ? getLocalAbout.about_award.description_en : getLocalAbout.about_award.description }}</div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
            <div data-aos="fade-up" :data-aos-delay="`${(index*150)+500}`" v-for="(item, index) in getLocalAbout.about_award.list" :key="item.id" class="grid aspect-square place-content-center border border-gal-blue-lighter p-4 md:border-2 md:p-6">
              <img :src="item.image_url" :alt="'image-award' + (index+1)" class="max-h-max object-cover object-center">
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div @click="onModalVideo" v-if="show_modal_video" id="modal_video_about" class="fixed left-0 top-0 z-[1001] flex h-screen w-full scale-100 items-center justify-center bg-black/75 transition-all ease-in">
      <div class="container aspect-video p-3 md:p-40">
        <iframe class="aspect-video w-full" :src="processedVideoUrl"></iframe>
      </div>
      <!-- <button @click="onModalVideo" class="btn-indigo btn absolute right-0 top-0 z-[1002] m-10 text-white">close</button> -->
    </div>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import OfficeCard from '@/components/card/OfficeCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'AboutView',
  components: { Navbar, Footer, OfficeCard },

  data() {
    return {
      getLocale: 'ID',
      getLocalAbout: {},
      getApiAbout: {},
      show_modal_video: false,
      active_tab: 'tab1',
      current: {
        slide_glimpse: 1,
      },
      container: {
        slide_glimpse: 0,
      },

      active_class_tab: 'rounded-lg shadow bg-white text-primary font-[600] tracking-wide transition-all duration-300 ease-linear',
      // DataAbout: {
      //   page_title: 'Tentang Kami',
      //   page_title_en: 'About us',
      //   title: 'We Live for People’s Life',
      //   title_en: 'We Live for People’s Life',
      //   url_video: 'https://www.youtube.com/watch?v=dqF1YLO5Ltw'
      // },
      // GlimpseData: {
        // title: `Profil Perusahaan`,
        // title_en: `Company Profile`,
        // subtitle: 'PT Galenium Pharmasia Laboratories merupakan perusahaan farmasi yang berkomitment menghadirkan produk kesehatan berkualitas.',
        // subtitle_en: 'PT Galenium Pharmasia Laboratories is a pharmaceutical company committed to delivering high-quality healthcare products.',
        // img_urls: [
        //   {
        //     id: '1',
        //     img_url: require('@/assets/images/about/tab1/slide_1.png')
        //   },
        //   {
        //     id: '2',
        //     img_url: require('@/assets/images/about/tab1/slide_2.png')
        //   },
        //   {
        //     id: '3',
        //     img_url: require('@/assets/images/about/tab1/slide_3.png')
        //   },
        // ],
        // paragraph_1: 'Seluruh produk yang dihasilkan oleh PT Galenium Pharmasia Laboratories telah memenuhi standar kualitas, teruji secara klinis serta mendapatkan sertifikasi cGMP (CPOB, CPKB, CPOTB, CPPKRTB) dari BPOM dan Kemenkes. Untuk menjaga kepuasan pelanggan serta integritas perusahaan, PT Galenium Pharmasia Laboratories juga sudah mendapatkan Sertifikasi Sistem Jaminan Halal (SJH) dari MUI serta menerapkan Sistem Manajemen Mutu ISO 9001:2018, Sistem Manajemen Keselamatan dan Kesehatan Kerja ISO 45001:2018.',
        // paragraph_1_en: "As part of its endeavor to become a world-class pharmaceutical company, PT Galenium Pharmasia Laboratories designs and develops a wide range of healthcare products. These include facial and body skincare products, laxatives, hemorrhoid treatments, diarrhea remedies, fever reducers, respiratory solutions, muscle and joint products, solutions for blood vessels and nerves, supplements and multivitamins, nausea and vomiting remedies, as well as feminine care products.",
        // paragraph_2: "Sebagai upaya untuk mewujudkan perusahaan farmasi kelas dunia, PT Galenium Pharmasia Laboratories membuat dan mengembangkan produk kesehatan, diantaranya  produk kesehatan kulit wajah dan tubuh, laksatif, haemoroid atau wasir, diare, penurun demam, saluran pernapasan, otot dan sendi, pembuluh darah dan syaraf, suplemen dan multivitamin, mual dan muntah, serta area kewanitaan.",
        // paragraph_2_en: "All products produced by PT Galenium Pharmasia Laboratories meet quality standards, are clinically tested, and have obtained cGMP certification (CPOB, CPKB, CPOTB, CPPKRTB) from BPOM and the Ministry of Health. To maintain customer satisfaction and the company's integrity, PT Galenium Pharmasia Laboratories has also obtained Halal Assurance System (SJH) certification from MUI and implemented the ISO 9001:2018 Quality Management System and the ISO 45001:2018 Occupational Health and Safety Management System.",
        // paragraph_3: "Dalam memasarkan dan mendistribusikan produk yang berkualitas, PT Galenium Pharmasia Laboratories tidak hanya terbatas di Indonesia, namun sudah melintas ke 5 benua, yakni Asia, Amerika, Austria, Amerika dan Eropa. Distribusi produk-produk Galenium ke mancanegara membuktikan dedikasi perusahaan untuk memenuhi kebutuhan perawatan kesehatan masyarakat secara luas. Atas dedikasi tersebut, Galenium telah mendapatkan beragam penghargaan antara lain: CSA, Top Brand dan Digital Popular Brand Award.",
        // paragraph_3_en: "In marketing and distributing quality products, PT Galenium Pharmasia Laboratories extends its reach beyond Indonesia, spanning five continents, namely Asia, America, Austria, and Europe. The distribution of Galenium products overseas underscores the company's dedication to meeting healthcare needs on a global scale. As a testament to this dedication, Galenium has received various awards, including CSA, Top Brand, and Digital Popular Brand Award.",
        // paragraph_4: "Dalam menjalankan aktivitas bisnis, PT Galenium Pharmasia Laboratories memastikan kinerja yang optimal dari Sumber Daya Manusia (SDM) berintegritas, profesional dan inovatif dengan daya saing tinggi. Galenium percaya SDM yang mumpuni adalah aset perusahaan guna mengantar kepada target-target yang dituju, termasuk menjadi perusahaan farmasi kelas dunia berdaya saing tinggi. Penerapan sistem manajemen modern yang terintegrasi juga menjadi kunci produktivitas operasional  PT Galenium Pharmasia Laboratories.",
        // paragraph_4_en: "In carrying out its business activities, PT Galenium Pharmasia Laboratories ensures the optimal performance of its , emphasizing integrity, professionalism, and a high level of competitiveness. Galenium firmly believes that competent manpowers are a valuable asset to the company, driving the achievement of set targets, including the goal of becoming a highly competitive world-class pharmaceutical company. The implementation of an integrated modern management system is also a pivotal factor in enhancing the operational productivity of PT Galenium Pharmasia Laboratories.",
        // paragraph_5: "",
        // paragraph_5_en: "As part of PT Galenium Pharmasia Laboratories' commitment to sustainable business practices, we have launched an official online store named G-STORE.id as a mobile application available on Android and iOS platforms. One of the advantages of the G-STORE application is its ability to serve distributors who require products in large quantities. Additionally, PT Galenium Pharmasia Laboratories is expanding its business by offering Toll Manufacturing (contract manufacturing) services in collaboration with businesses across the archipelago.",
        // paragraph_6: "",
        // paragraph_6_en: "In order to be a company that adheres to the principles of Good Corporate Governance and maintains the trust of all stakeholders, PT Galenium Pharmasia Laboratories is also committed to implement social and environmental conservation activities through a number of Corporate Social Responsibility (CSR) programs. To present day, PT Galenium Pharmasia Laboratories has continuously provided assistance to the community by building facilities and infrastructure for various institutions, foundations, and healthcare facilities that lack adequate resources. The implementation of PT Galenium Pharmasia Laboratories' CSR is a demonstration of the company's concern for a better quality of life for the present and future generations.",
      // },
      // HistoryData: {
      //   title: 'Sejarah Perusahaan',
      //   title_en: 'Company History',
      //   subtitle: '“Menjadi perusahaan perawatan kesehatan berkelas dunia yang memiliki daya saing tinggi dalam melayani dan menghasilkan produk dan jasa yang berkualitas bagi para pelanggan”',
      //   subtitle_en: 'We envision to be world-class healthcare and pharmaceutical manufacturing company, providing the best quality of service and products for our customers',
      //   img_url: require('@/assets/images/about/tab1/image_2.png'),
      //   paragraph_1: "PT Galenium Pharmasia Laboratories telah berdiri sejak tahun 1960 yang semula bernama PT Yupharin Pharmaceuticals. Perusahaan yang menghasilkan produk kesehatan ini diprakarsai oleh Joesoef Bagindo Sutan dan Dr. Eddy Joesoef di Jakarta. Pada tahun 2004, perusahaan berganti nama menjadi PT Galenium Pharmasia Laboratories di bawah kepemimpinan Juzardi Joesoef sebagai Presiden Direktur. Pergantian nama yang diikuti dengan restrukturisasi organisasi, peningkatan sistem operasional dan manajerial, serta peningkatan skala bisnis dilakukan dengan berkesinambungan guna mewujudkan perusahaan farmasi kelas dunia. Hal tersebut diwujudkan dengan dalam kurun waktu setengah tahun, PT Galenium Pharmasia Laboratories mendapat keuntungan hingga empat kali lipat lebih besar serta mempertahankan pertumbuhan profit di atas 32% per tahun.",
      //   paragraph_1_en: "PT Galenium Pharmasia Laboratories was established in 1960, originally operating under the name PT Yupharin Pharmaceuticals. This healthcare product manufacturing company was founded by Joesoef Bagindo Sutan and Dr. Eddy Joesoef in Jakarta. In 2004, under the leadership of Juzardi Joesoef as President Director, the company underwent a name change, becoming PT Galenium Pharmasia Laboratories. This name change was accompanied by organizational restructuring, operational and managerial enhancements, and a continuous expansion of its business scale, with the aim of becoming a world-class pharmaceutical company. Within just six months, PT Galenium Pharmasia Laboratories managed to increase its profits by fourfold while maintaining a yearly profit growth rate of over 32%.",
      //   paragraph_2: "Transformasi PT Yupharin Pharmaceuticals menjadi PT Galenium Pharmasia Laboratories juga melahirkan visi perusahaan baru yaitu “Menjadi perusahaan perawatan kesehatan berkelas dunia yang memiliki daya saing tinggi dalam melayani dan menghasilkan produk dan jasa yang berkualitas bagi para pelanggan”. Demi mencapai visi perusahaan, PT Galenium Pharmasia Laboratories terus-menerus mengembangkan fasilitas sehingga dapat meningkatkan kapasitas dan kualitas produksi. Dengan demikian, peningkatan penjualan produk juga dapat terlaksana. Dalam menjalankan bisnis yang berkelanjutan hingga saat ini , PT Galenium Pharmasia Laboratories berpegang teguh pada pengukuhan fondasi di setiap organ perusahaan dengan menitikberatkan kerja sama tim agar selalu dapat diandalkan guna mempertahankan kepercayaan konsumen, mitra kerja serta seluruh pemangku kepentingan.",
      //   paragraph_2_en: "The transformation of PT Yupharin Pharmaceuticals into PT Galenium Pharmasia Laboratories also marked the birth of a new company vision: 'To become a world-class healthcare company with a strong competitive edge in providing and delivering high-quality products and services to customers.' In pursuit of this vision, PT Galenium Pharmasia Laboratories continually invests in facility development to enhance production capacity and quality. Consequently, this strategic move facilitates an increase in product sales. In its ongoing and sustainable business operations, PT Galenium Pharmasia Laboratories is firmly committed to fortifying the foundations of the company in every aspect, with a strong focus on team collaboration, aiming to ensure reliability and maintain the trust of consumers, working partners, and all stakeholders.",
      // },
      // GreetingData: {
      //   title: 'Sambutan Presiden Direktur',
      //   title_en: 'Message from the President Director',
      //   img_url: require('@/assets/images/about/tab2/image_1.png'),
      //   paragraph_1: "PT Galenium Pharmasia Laboratories yang bertransformasi dari PT Yupharin Pharmaceuticals saat ini berusia lebih dari 60 tahun. Melalui perjalanan panjang yang penuh tantangan, perusahaan telah mengalami pertumbuhan dan perkembangan yang konkret.",
      //   paragraph_1_en: "PT Galenium Pharmasia Laboratories, which transformed from PT Yupharin Pharmaceuticals, is now over 60 years old. Through a long and challenging journey, the company has experienced substantial growth and development.",
      //   paragraph_2: "Hal ini terjadi karena didukung oleh profesionalitas, inovasi, dan nilai-nilai perusahaan. Profesionalitas kami terbentuk melalui proses rekrutmen yang selektif, pembinaan karakter, serta melalui berbagai pelatihan yang berkelanjutan.",
      //   paragraph_2_en: "This has been made possible by our professionalism, innovation, and company values. Our professionalism is shaped through a selective recruitment process, character development, and continuous training.",
      //   paragraph_3: "Kami selalu berkomitmen dalam melaksanakan tata kelola yang baik dan kepatuhan terhadap tata cara pembuatan obat dan kosmetik yang baik dan benar sesuai ketetapan BPOM dan Kemenkes. Selain itu, untuk memenuhi standar manajemen kesehatan dan keselamatan kerja, perusahaan juga telah mendapatkan ISO 9001:2015 dan ISO 45001:2018 serta Sertifikasi Halal.",
      //   paragraph_3_en: "We are committed to upholding good governance and compliance with the proper procedures for the production of pharmaceuticals and cosmetics as stipulated by BPOM and the Ministry of Health. Additionally, to meet health and safety management standards, the company has obtained ISO 9001:2015 and ISO 45001:2018 certifications, as well as Halal certification.",
      //   paragraph_4: "Sebagai upaya untuk terus mewujudkan perusahaan sebagai world class company, kami melakukan investasi untuk meningkatkan kapasitas produksi dengan menambah jumlah pabrik yang ditunjang oleh fasilitas berteknologi tinggi untuk mendukung pengembangan produk secara berkesinambungan.",
      //   paragraph_4_en: "As part of our efforts to become a world-class company, we are investing in increasing production capacity by adding more factories supported by high-tech facilities to sustain product development.",
      //   paragraph_5: "Dengan menyelaraskan beberapa hal tersebut di atas, serta langkah-langkah strategis, kami siap menghadapi pasar global yang penuh potensi. Pengembangan produk menjadi kunci utama kami dalam memberikan solusi kesehatan bagi masyarakat.",
      //   paragraph_5_en: "By aligning these aspects and strategic steps, we are ready to face the global market full of potential. Product development is our key focus in providing healthcare solutions to the public.",
      //   paragraph_6: "Pencapaian kami tidak akan mungkin terwujud tanpa dukungan dan kepercayaan dari para profesional medis, mitra usaha, serta pelanggan setia kami. Dan website ini selain sebagai platform untuk berbagi informasi, juga merupakan jembatan interaksi antara kami dengan pelanggan, mitra usaha, dan semua pihak yang berhubungan dengan kami.",
      //   paragraph_6_en: "Our achievements would not be possible without the support and trust of medical professionals, business partners, and our loyal customers. This website serves as a platform for sharing information and a bridge for interaction between us and our customers, business partners, and all parties associated with us.",
      //   paragraph_7: "Terima kasih atas kerjasama para mitra selama ini.",
      //   paragraph_7_en: "Thank you for the cooperation of our partners all this time.",
      //   greeting: "Salam",
      //   greeting_en: "Greetings",
      //   messenger: "Juzardi Joesoef",
      //   job_title: "Presiden Direktur",
      //   job_title_en: "President Director",
      // },
      // VisionData: {
      //   vision: {
      //     title: 'Visi Kami',
      //     title_en: 'Vision',
      //     description: 'Menjadi perusahaan pelayanan kesehatan berkelas dunia yang memiliki keunggulan dalam melayani dan menghasilkan produk berkualitas tinggi untuk para pelanggan.',
      //     description_en: "To become a world-class healthcare company with a strong competitive edge in providing and delivering high-quality products and services to customers.",
      //     img_url_sm: require('@/assets/images/about/tab3/image_1_sm.png'),
      //     img_url_md: require('@/assets/images/about/tab3/image_1_md.png')
      //   },
      //   mision: {
      //     title: 'Misi Kami',
      //     title_en: 'Mission',
      //     subtitle: '(People-Process-Value)',
      //     subtitle_en: '(People-Process-Value)',
      //     description: 'Memastikan pertumbuhan yang berkesinambungan untuk melahirkan hasil usaha terbaik kepada para pemangku kepentingan dengan menjalankan bisnis dengan prinsip people-process-value yaitu bisnis yang mengutamakan:',
      //     description_en: "To ensure sustainable growth and deliver the best business results to stakeholders by adhering to the principles of people-process-value, which emphasize in:",
      //     list: [
      //       'Pemberdayaan sumber daya manusia (people) yang kompeten dan berdedikasi tinggi.',
      //       'Penerapan proses berbisnis yang efektif dan efisien.',
      //       'Menerapkan Tata Kelola Perusahaan yang Baik (Good Corporate Governance) dengan mengacu kepada prinsip 7Q.',
      //       'Menerapkan Tata Kelola Perusahaan yang Baik (Good Corporate Governance) dengan mengacu kepada prinsip 7Q.',
      //     ],
      //     list_en: [
      //       'Empowering competent and highly dedicated human resources (people).',
      //       'Implementing effective and efficient business processes.',
      //       'Applying Good Corporate Governance in accordance with the 7Q principles.',
      //     ],
      //     img_url_sm: require('@/assets/images/about/tab3/image_2_sm.png'),
      //     img_url_md: require('@/assets/images/about/tab3/image_2_md.png'),
      //   }
      // },
      // ValuesData: {
      //   title: 'Nilai Perusahaan',
      //   title_en: 'COMPANY VALUE',
      //   description: '7 Kualitas Nilai Budaya Perusahaan',
      //   description_en: '7 QUALITIES OF CORPORATE CULTURE',
      //   list: [
      //     { id: '1', image_url: require('@/assets/icons/about/tab4/icon_1.svg'), title: 'Mengutamakan kepuasan pelanggan', title_en: 'Priority to Customer Satisfaction' },
      //     { id: '2', image_url: require('@/assets/icons/about/tab4/icon_2.svg'), title: 'Fokus pada target perusahaan', title_en: 'Focus on Corporate Objectives' },
      //     { id: '3', image_url: require('@/assets/icons/about/tab4/icon_3.svg'), title: 'Berintegritas', title_en: 'Integrity' },
      //     { id: '4', image_url: require('@/assets/icons/about/tab4/icon_4.svg'), title: 'Berinovasi', title_en: 'Innovation' },
      //     { id: '5', image_url: require('@/assets/icons/about/tab4/icon_5.svg'), title: 'Gigih dan Ulet', title_en: 'Perseverance' },
      //     { id: '6', image_url: require('@/assets/icons/about/tab4/icon_6.svg'), title: 'Terpercaya', title_en: 'Trustworthy' },
      //     { id: '7', image_url: require('@/assets/icons/about/tab4/icon_7.svg'), title: 'Bekerjasama', title_en: 'Teamwork' },
      //   ]
      // },
      // CertificateData: {
      //   title: 'Sertifikasi',
      //   title_en: 'Certification',
      //   description: 'Sebagai perusahaan yang berintegritas, Galenium berkomitmen untuk dapat menerapkan prinsip Good Corporate Governance (GCG) secara berkelanjutan. Salah satunya adalah dengan menciptakan sistem Manajemen Mutu guna meningkatkan kualitas daya saing perusahaan.',
      //   description_en: "As an integrity-driven company, Galenium is committed to implementing Good Corporate Governance (GCG) principles consistently. One of these commitments is achieved through the establishment of a Quality Management System aimed at enhancing the company's competitiveness.",
      //   image_urls: [
      //     { id: '1', image_url: require('@/assets/icons/about/tab5/icon_1.svg') },
      //     { id: '2', image_url: require('@/assets/icons/about/tab5/icon_2.svg') },
      //     { id: '3', image_url: require('@/assets/icons/about/tab5/icon_3.svg') },
      //     { id: '4', image_url: require('@/assets/icons/about/tab5/icon_4.svg') },
      //     { id: '5', image_url: require('@/assets/icons/about/tab5/icon_5.svg') },
      //     { id: '6', image_url: require('@/assets/icons/about/tab5/icon_6.svg') },
      //   ]
      // },
      // OfficeData: [
      //   {
      //     title: 'Kantor',
      //     title_en: 'Office',
      //     description: 'Berlokasi di salah satu area bisnis di Jakarta, PT Galenium Pharmasia Laboratories menjalankan aktivitas operasional dengan menghadirkan lingkungan kerja yang kondusif sehingga produktivitas yang melahirkan inovasi tetap terjaga untuk mencapai visi misi perusahaan.',
      //     description_en: "Situated in one of Jakarta's business districts, PT Galenium Pharmasia Laboratories offers a conducive working environment that fosters continuous innovation and helps achieve the company's vision and mission by ensuring high productivity.",
      //     image_urls: [
      //       { id: '1', flag: 'Kantor', image_url: require('@/assets/images/about/tab6/office/office_1.png') },
      //       { id: '2', flag: 'Kantor', image_url: require('@/assets/images/about/tab6/office/office_2.png') },
      //       { id: '3', flag: 'Kantor', image_url: require('@/assets/images/about/tab6/office/office_3.png') },
      //       { id: '4', flag: 'Kantor', image_url: require('@/assets/images/about/tab6/office/office_4.png') },
      //       { id: '5', flag: 'Kantor', image_url: require('@/assets/images/about/tab6/office/office_5.png') },
      //       { id: '6', flag: 'Kantor', image_url: require('@/assets/images/about/tab6/office/office_6.png') },
      //     ]
      //   },
      //   {
      //     title: 'Pabrik',
      //     title_en: 'Factory',
      //     description: 'Di atas lahan yang luas, PT Galenium Pharmasia Laboratories membangun area pabrik dengan mengutamakan Keamanan, dan Keselamatan Kerja (K3) seluruh lapisan karyawan. Sistem produksi di dalam area pabrik memanfaatkan teknologi yang dapat menjaga kualitas produk agar selalu sesuai standar dan meningkatkan produktivitas bisnis.',
      //     description_en: 'On a spacious piece of land, PT Galenium Pharmasia Laboratories has established a factory area with a primary focus on the safety and occupational health (K3) of all its employees. The production system within the factory area employs advanced technology to ensure that product quality adheres to standards and enhances business productivity.',
      //     image_urls: [
      //       { id: '1', flag: 'Pabrik', image_url: require('@/assets/images/about/tab6/plant/plant_1.png') },
      //       { id: '2', flag: 'Pabrik', image_url: require('@/assets/images/about/tab6/plant/plant_2.png') },
      //       { id: '3', flag: 'Pabrik', image_url: require('@/assets/images/about/tab6/plant/plant_3.png') },
      //       { id: '4', flag: 'Pabrik', image_url: require('@/assets/images/about/tab6/plant/plant_4.png') },
      //       { id: '5', flag: 'Pabrik', image_url: require('@/assets/images/about/tab6/plant/plant_5.png') },
      //       { id: '6', flag: 'Pabrik', image_url: require('@/assets/images/about/tab6/plant/plant_6.png') },
      //     ]
      //   },
      // ],
      // AwardData: {
      //   title: 'Penghargaan',
      //   title_en: 'Awards',
      //   description: 'PT Galenium Pharmasia Laboratories telah mendapatkan berbagai pengakuan dan penghargaan dari masa ke masa sebagai wujud komitmen dalam menjaga standar kualitas produk dan memberikan yang terbaik untuk seluruh pemangku kepentingan.',
      //   description_en: 'PT Galenium Pharmasia Laboratories has received numerous awards and recognitions over time, which serve as evidence of our commitment to maintaining high-quality products and delivering the best to all stakeholders.',
      //   image_urls: [
      //     { id: '1', image_url: require('@/assets/icons/about/tab7/icon_1.svg') },
      //     { id: '2', image_url: require('@/assets/icons/about/tab7/icon_2.svg') },
      //     { id: '3', image_url: require('@/assets/icons/about/tab7/icon_3.svg') },
      //     { id: '4', image_url: require('@/assets/icons/about/tab7/icon_4.svg') },
      //     { id: '5', image_url: require('@/assets/icons/about/tab7/icon_5.svg') },
      //     { id: '6', image_url: require('@/assets/icons/about/tab7/icon_6.svg') },
      //     { id: '7', image_url: require('@/assets/images/about/tab7/image_7.png') },
      //   ]
      // },
    }
  },
  
  computed: {
    ...mapState({ 
      about: state => state.about.items
    }),

    processedVideoUrl() {
        if (this.getLocalAbout.about.youtube_url.includes('www.youtube.com/watch?v=')) {
            return this.getLocalAbout.about.youtube_url.replace('www.youtube.com/watch?v=', 'www.youtube.com/embed/');
        } else if (this.getLocalAbout.about.youtube_url.includes('youtu.be/')) {
            return this.getLocalAbout.about.youtube_url.replace('youtu.be/', 'youtube.com/embed/');
        } else {
            return this.getLocalAbout.about.youtube_url;
        }
    },
  },

  watch: {
    about (obj) {
        if(obj){
            this.getApiAbout = obj
        }
    },
  },

  methods: {
    onModalVideo () {
      this.show_modal_video = !this.show_modal_video
      // console.log('popup show')
      if (this.show_modal_video ) {
          document.body.style.overflow = 'hidden'
      } else {
          document.body.style.overflow = 'auto'
      }
    },
    goTotab (tab) {
      this.active_tab = tab
    },
    nextGlimpse() {
        if (this.current.slide_glimpse === this.getLocalAbout.about_company_profile.slider.length) {
        // if (this.current.slide_glimpse === this.GlimpseData.img_urls.length) {
            this.current.slide_glimpse = 1
        } else {
            this.current.slide_glimpse++
        }
    },
    slideGlimpseWidth() {
      const GlimpseData = document.querySelector('#slider_img_glimpse')
      if (GlimpseData) {
        this.container.slide_glimpse = GlimpseData.offsetWidth;
      }
    },
  },
  mounted() {
    this.slideGlimpseWidth()
    window.addEventListener('resize', this.slideGlimpseWidth)
    setInterval(() => {
        this.nextGlimpse()
    }, 4000)
  },
  destroyed() {
    window.removeEventListener('resize', this.slideGlimpseWidth)
  },
  created() {
      this.$store.dispatch('about/getAll','preview')

      if (localStorage.getItem('aboutpreview')) {
        this.getLocalAbout = JSON.parse(localStorage.getItem('aboutpreview'))
      } else {
        this.getLocalAbout = this.about
        this.$store.dispatch('about/getAll','preview')
      }

      if (localStorage.getItem('locale')) {
          this.getLocale = localStorage.getItem('locale')
      } else {
          this.getLocale = 'ID'
    }
  }
}
</script>
<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init({
        offset: 80,
        duration: 800,
        easing: 'ease',
        delay: 500,
        once: true,
        anchorPlacement: 'top-bottom',
    });
})

</script>