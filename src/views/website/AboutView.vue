<template>
  <div class="static" v-if="renderall">
    <Navbar active_menu="about" />
    <section class="min-h-56 relative max-h-full bg-primary font-roboto">
      <div
        class="left-0 top-0 -z-[1] h-full w-full bg-primary before:absolute before:right-0 before:top-0 before:hidden before:h-full before:bg-white before:content-[''] md:before:hidden lg:before:w-1/4">
      </div>
      <div class="left-0 top-0 h-full w-full px-4 pb-10 pt-20 md:px-0 md:pb-20 md:pt-40">
        <div class="z-50 mx-auto md:mx-16 lg:mx-20">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div class="relative flex self-center">
              <div class="relative-blockquote before:bg-white"></div>
              <div class="">
                <div class="font-roboto font-[900] text-xl text-gal-blue-light">
                  <div class="ql-editor" style="padding: 0;">
                    <div
                      v-html="getLocale == 'EN' ? getLocalAbout.about.page_title_en : getLocalAbout.about.page_title" />
                  </div>
                </div>
                <div class="mt-2 font-roboto text-5xl font-[900] text-white md:mt-8 lg:text-7xl" :class="getLocale == 'EN' ? 'lg:text-7xl' : 'lg:text-7xl-id' ">
                  <div class="ql-editor" style="padding: 0;">
                    <div v-html="getLocale == 'EN' ? getLocalAbout.about.title_en : getLocalAbout.about.title" />
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <div @click="onModalVideo"
                class="absolute flex aspect-video h-full w-full cursor-pointer items-center justify-center rounded-2xl border-r-2">
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
      <div class="lg:mx-20 mx-auto flex items-center">
        <ul
          class="flex w-full flex-wrap rounded-lg bg-gal-grey-light p-1 text-center font-roboto text-sm text-gal-grey-darker md:mx-0 md:grid md:grid-flow-col md:text-base">
          <a href="#tab1">
            <li @click="goTotab('tab1')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
              <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal"
                :class="active_tab === 'tab1' ? active_class_tab : 'font-[400]'">
                {{ getLocale == 'EN' ? 'Company Profile' : 'Sekilas Tentang Kami' }}
              </span>
            </li>
          </a>
          <a href="#tab2">
            <li @click="goTotab('tab2')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
              <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal"
                :class="active_tab === 'tab2' ? active_class_tab : 'font-[400]'">
                {{ getLocale == 'EN' ? "Message from President Director" : 'Sambutan Presiden Direktur' }}
              </span>
            </li>
          </a>
          <a href="#tab3">
            <li @click="goTotab('tab3')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
              <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal"
                :class="active_tab === 'tab3' ? active_class_tab : 'font-[400]'">
                {{ getLocale == 'EN' ? 'Vision & Mission' : 'Visi Misi' }}
              </span>
            </li>
          </a>
          <a href="#tab4">
            <li @click="goTotab('tab4')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
              <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal"
                :class="active_tab === 'tab4' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? 'Company Value'
    : 'Nilai Perusahaan' }}</span>
            </li>
          </a>
          <a href="#tab5">
            <li @click="goTotab('tab5')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
              <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal"
                :class="active_tab === 'tab5' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? 'Certification'
    : 'Sertifikasi' }}</span>
            </li>
          </a>
          <a href="#tab6">
            <li @click="goTotab('tab6')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
              <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal"
                :class="active_tab === 'tab6' ? active_class_tab : 'font-[400]'">
                {{ getLocale == 'EN' ? 'Office & Factory' : 'Kantor & Pabrik' }}
              </span>
            </li>
          </a>
          <a href="#tab7">
            <li @click="goTotab('tab7')" class="cursor-pointer hover:rounded-lg hover:bg-white hover:shadow">
              <span class="flex justify-center whitespace-nowrap p-4 md:whitespace-normal"
                :class="active_tab === 'tab7' ? active_class_tab : 'font-[400]'">{{ getLocale == 'EN' ? 'Awards' :
    'Penghargaan' }}</span>
            </li>
          </a>
        </ul>
      </div>
    </section>

    <section v-if="active_tab === 'tab1'" id="tab1" class="w-full">
      <section id="section-1" class="px-4 tab-container py-10 lg:py-20">
        <div class="">
          <div class="mb-4 md:mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div class="mx-auto w-full flex-col items-center justify-center md:mx-0 md:items-start">
              <div class="flex overflow-hidden gal-shadow">
                <!-- belom dari api -->
                <div id="slider_img_glimpse" v-for="(item, index) in getLocalAbout.about_company_profile.slider"
                  :key="item.id"
                  class="group flex w-full min-w-full max-w-full items-center justify-center overflow-hidden scroll-smooth duration-500"
                  :style="{ transform: `translateX(${-container.slide_glimpse * (current.slide_glimpse - 1)}px)` }">
                  <img :src="item.image_url" :alt="'Slider Pic ' + item.id"
                    class="w-full object-cover object-center transition-all duration-700 group-hover:scale-125 aspect-square" />
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
              <div class="gal-title">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_profile.title_en : getLocalAbout.about_company_profile.title">
                  </div>
                </div>
              </div>
              <div class="mt-2 flex md:mt-10">
                <div class="relative-blockquote hidden before:bg-gal-blue-light md:block"></div>
                <div class="gal-description w-4/5 lg:w-2/4">
                  <div class="ql-editor" style="padding: 0;">
                    <div
                      v-html="getLocale == 'EN' ? getLocalAbout.about_company_profile.subtitle_en : getLocalAbout.about_company_profile.subtitle">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-x-8 text-justify font-roboto text-sm font-[400] md:grid-cols-2 md:text-base">
            <div>
              <div class="leading-relaxed text-gal-grey-darker">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_1_en : getLocalAbout.about_company_profile.paragraph_1">
                  </div>
                </div>
              </div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-6">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_2_en : getLocalAbout.about_company_profile.paragraph_2">
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-0">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_3_en : getLocalAbout.about_company_profile.paragraph_3">
                  </div>
                </div>
              </div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-6">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_4_en : getLocalAbout.about_company_profile.paragraph_4">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-8">
            <!-- belom dari api -->
            <img :src="getLocalAbout.about_company_profile.image_url" class="w-full gal-shadow" alt="img-profile">
          </div>
          <div class="grid grid-cols-1 gap-x-8 text-justify font-roboto text-sm font-[400] md:grid-cols-2 md:text-base">
            <div>
              <div class="leading-relaxed text-gal-grey-darker">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_5_en : getLocalAbout.about_company_profile.paragraph_5">
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-0">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_profile.paragraph_6_en : getLocalAbout.about_company_profile.paragraph_6">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-2" class="bg-gal-grey-light px-4 tab-container py-10 lg:py-20">
        <div class="">
          <div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div class="gal-title">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_historie.title_en : getLocalAbout.about_company_historie.title">
                  </div>
                </div>
              </div>
              <div class="mt-2 flex md:mt-10">
                <div class="relative-blockquote hidden before:bg-gal-blue-light md:block"></div>
                <div class="gal-description">
                  <div class="ql-editor" style="padding: 0;">
                    <div
                      v-html="getLocale == 'EN' ? getLocalAbout.about_company_historie.subtitle_en : getLocalAbout.about_company_historie.subtitle">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img :src="getLocalAbout.about_company_historie.image_url"
                class="aspect-video w-full object-cover object-center gal-shadow" alt="image-2">
            </div>
          </div>
          <div class="grid grid-cols-1 gap-x-8 text-justify font-roboto text-sm font-[400] md:grid-cols-2 md:text-base">
            <div>
              <div class="leading-relaxed text-gal-grey-darker">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_historie.paragraph_1_en : getLocalAbout.about_company_historie.paragraph_1">
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="mt-4 leading-relaxed text-gal-grey-darker md:mt-0">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_company_historie.paragraph_2_en : getLocalAbout.about_company_historie.paragraph_2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section v-if="active_tab === 'tab2'" id="tab2" class="px-4 tab-container py-10 lg:py-20">
      <div class="">
        <div class="gal-title mb-8">
          <div class="ql-editor" style="padding: 0;">
            <div
              v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.title_en : getLocalAbout.about_greeting.title">
            </div>
          </div>
        </div>
        <div class="mt- mb-8 lg:flex lg:flex-row gap-8">
          <div class="lg:w-1/3">
            <img :src="getLocalAbout.about_greeting.image_url" class="w-full object-top lg:object-center gal-shadow"
              alt="image-2">
          </div>
          <div class="lg:w-2/3 mt-5 lg:mt-[-3px] font-roboto text-sm font-[400] text-gal-grey-darker md:text-base">
            <div class="leading-relaxed text-justify">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_1_en : getLocalAbout.about_greeting.paragraph_1">
                </div>
              </div>
            </div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_2_en : getLocalAbout.about_greeting.paragraph_2">
                </div>
              </div>
            </div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_3_en : getLocalAbout.about_greeting.paragraph_3">
                </div>
              </div>
            </div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_4_en : getLocalAbout.about_greeting.paragraph_4">
                </div>
              </div>
            </div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_5_en : getLocalAbout.about_greeting.paragraph_5">
                </div>
              </div>
            </div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_6_en : getLocalAbout.about_greeting.paragraph_6">
                </div>
              </div>
            </div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.paragraph_7_en : getLocalAbout.about_greeting.paragraph_7">
                </div>
              </div>
            </div>
            <div class="mt-4 leading-relaxed text-justify md:mt-6">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.greeting_en : getLocalAbout.about_greeting.greeting"
                  style="display: inline;">
                </div>
              </div>
              <br />
              <!-- <br> 
              {{ getLocalAbout.about_greeting.messenger }}  -->
              <div class="ql-editor" style="padding: 0;">
                <div v-html="getLocalAbout.about_greeting.messenger" style="display: inline;">
                </div>
              </div>
              <!-- <br>  -->
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_greeting.job_title_en : getLocalAbout.about_greeting.job_title"
                  style="display: inline;">
                </div>
              </div>
              <!-- {{ getLocale == 'EN' ? getLocalAbout.about_greeting.job_title_en : getLocalAbout.about_greeting.job_title }} -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="active_tab === 'tab3'" id="tab3">
      <section class="relative">
        <img :src="getLocalAbout.about_visi_misi.visi.image_url_sm" class="block  w-screen object-cover object-center md:hidden" alt="img-vision-sm">
        <img :src="getLocalAbout.about_visi_misi.visi.image_url_md" class="hidden  w-screen object-cover object-center md:block lg:hidden"
          alt="img-vision-md">
        <img :src="getLocalAbout.about_visi_misi.visi.image_url_lg" class="hidden  w-screen object-cover object-center lg:block" alt="img-vision-lg">

        <div class="absolute inset-0 flex h-full w-full py-4  lg:p-0">
          <div class="px-4 py-10 tab-container md:py-10 lg:py-20">
            
            <div class="w-full md:w-2/3 lg:w-1/2">
              <div class="font-roboto text-3xl font-[900] text-primary lg:text-5xl">
                <div class="ql-editor  visi-title" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_visi_misi.visi.title_en : getLocalAbout.about_visi_misi.visi.title">
                  </div>
                </div>
              </div>
              <div class="mt-2 font-roboto text-base font-[400] text-gal-grey-darker lg:mt-6 lg:text-xl">
                <div class="text-left visi-desc" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_visi_misi.visi.description_en : getLocalAbout.about_visi_misi.visi.description">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative">
        <img :src="getLocalAbout.about_visi_misi.misi.image_url_sm" class="block  w-screen object-cover object-center md:hidden pt-[100px]" alt="">
        <img :src="getLocalAbout.about_visi_misi.misi.image_url_md" class="hidden  w-screen object-cover object-center md:block lg:hidden" alt="">
        <img :src="getLocalAbout.about_visi_misi.misi.image_url_lg" class="hidden  w-screen object-cover object-center lg:block" alt="">

        <!-- <div class="absolute left-0 top-0 hidden h-full w-3/4 bg-gradient-to-r from-white via-white md:block"></div> -->
        <div class="absolute inset-0 flex h-full w-full py-4 lg:p-0  lg:mt-0 sm:mt-0">
          <div class="px-4 py-10 tab-container md:py-10 lg:py-20">
            <div class="w-full md:w-2/3 lg:w-2/5">
              <div class="font-roboto text-3xl font-[900] text-primary lg:text-5xl">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_visi_misi.misi.title_en : getLocalAbout.about_visi_misi.misi.title">
                  </div>
                </div>
              </div>
              <div class="gal-subtitle">
                <div class="ql-editor" style="padding: 0;">
                  <div
                    v-html="getLocale == 'EN' ? getLocalAbout.about_visi_misi.misi.subtitle_en : getLocalAbout.about_visi_misi.misi.subtitle">
                  </div>
                </div>
              </div>
              <div class="mt-2 font-roboto text-base font-[400] text-justify text-gal-grey-darker lg:mt-6 lg:text-xl">
                <div>
                  <div class="text-left" style="padding: 0;">
                    <div
                      v-html="getLocale == 'EN' ? getLocalAbout.about_visi_misi.misi.description_en : getLocalAbout.about_visi_misi.misi.description">
                    </div>
                  </div>
                </div>
                <ol class="mt-4 ml-8 list-decimal" style="list-style-type: decimal;">
                  <li v-if="getLocale == 'EN'" v-for="item in getLocalAbout.about_visi_misi.misi.mission_item_en"  :class="item?.name?.trim() === '<p><br></p>'  || item?.name?.trim() === '<p></p>' ? 'hidden' : ''">
                    <div  class="ql-editor" style="padding: 0;overflow-y: initial;">
                      <div v-html="item.name">
                      </div>
                    </div>
                  </li>
              
                  <li v-else v-for="item in getLocalAbout.about_visi_misi.misi.mission_item"   :class="item?.name?.trim() === '<p><br></p>'  || item?.name?.trim() === '<p></p>' ? 'hidden' : ''">
                    <div  class="ql-editor" style="padding: 0;overflow-y: initial;">
                      <div v-html="item.name">
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section v-if="active_tab === 'tab4'" id="tab4" class="px-4 tab-container py-10 lg:py-20">
      <div class="">
        <div class="gal-title">
          <div class="ql-editor" style="padding: 0;">
            <div
              v-html="getLocale == 'EN' ? getLocalAbout.about_company_value.title_en : getLocalAbout.about_company_value.title">
            </div>
          </div>
        </div>
        <div class="gal-description mt-1 md:mt-3">
          <div class="ql-editor" style="padding: 0;">
            <div
              v-html="getLocale == 'EN' ? getLocalAbout.about_company_value.description_en : getLocalAbout.about_company_value.description">
            </div>
          </div>
        </div>
        <div
          class="mt-8 grid grid-flow-row grid-cols-1 gap-4 md:mt-12 md:grid-flow-col md:grid-cols-none md:grid-rows-4">
          <div v-for="(item, index) in getLocalAbout.about_company_value.list" :key="index"
            class="flex items-center gap-x-2 md:gap-x-4">
            <img :src="item.image_url" :alt="'icon-' + index" class="w-8 md:w-10 lg:w-14">
            <div class="font-roboto font-[400] text-sm text-gal-grey-darker md:text-base lg:text-lg">
              <div class="ql-editor" style="padding: 0;">
                <div v-html="getLocale == 'EN' ? item.title_en : item.title">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="active_tab === 'tab5'" id="tab5" class="px-4 tab-container py-10 lg:py-20">
      <div class="">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          <div>
            <div class="gal-title">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_certification.title_en : getLocalAbout.about_certification.title">
                </div>
              </div>
            </div>
            <div class="gal-description text-justify mt-1 md:mt-3">
              <div class="text-left" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_certification.description_en : getLocalAbout.about_certification.description">
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
            <div data-aos="fade-up" :data-aos-delay="`${(index * 150) + 500}`"
              v-for="(item, index) in getLocalAbout.about_certification.list" :key="item.id"
              class="grid aspect-square place-content-center border border-gal-blue-lighter p-4 md:border-2 md:p-6">
              <img :src="item.image_url" :alt="'image' + index" class="max-h-max object-cover object-center">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="active_tab === 'tab6'" id="tab6" class="px-4 tab-container py-10 lg:py-20">
      <div class="">
        <section>
          <div class="grid grid-cols-1 md:grid-cols-4">
            <div class="gal-title">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_office_factory.office.title_en : getLocalAbout.about_office_factory.office.title">
                </div>
              </div>
            </div>
            <div class="gal-description text-justify col-span-3 mt-1 md:mt-0">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_office_factory.office.description_en : getLocalAbout.about_office_factory.office.description">
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 grid grid-cols-2 md:grid-cols-3 place-items-stretch gap-3 md:mt-10 md:grid-cols-3 md:gap-5">
            <div for="expand_modal" class="bg-black-500/60" @click="getSelectedImage(index)"
              v-for="(item, index) in getLocalAbout.about_office_factory.office.list">
              <div>
                <label :for="`${getLocalAbout.about_office_factory.office.title + index}`"
                  class="group block aspect-square cursor-pointer overflow-hidden" data-aos="fade-up"
                  :data-aos-delay="`${(index * 150) + 500}`">
                  <img :src="item.image_url" :alt="'image-' + (index + 1)"
                    class="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-125">
                </label>
              </div>
              <!-- <OfficeCard :image_url="item.image_url" :index="index" :flag="getLocalAbout.about_office_factory.office.title"/> -->
            </div>
            <input type="checkbox" :id="`${getLocalAbout.about_office_factory.office.title + active_preview}`"
              class="modal-toggle" />
            <div id="expand_modal" class="modal modal-middle backdrop-opacity-60">
              <div class="flex items-center">
                <div class="w-14 h-14 py-12 grid justify-items-center">
                  <button @click="PrevProduct" class="content-center btn btn-circle btn-sm">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                  </button>
                </div>
                <div class="w-full py-12 grid justify-items-center">
                  <div class="modal-box rounded-none p-0 md:max-w-5xl overflow-hidden">
                    <img
                      :src="getLocalAbout.about_office_factory.office.list.length != 0 ? getLocalAbout.about_office_factory.office.list[active_preview].image_url : ''"
                      class="">
                    <label :for="`${getLocalAbout.about_office_factory.office.title + active_preview}`"
                      class="btn btn-circle btn-primary btn-sm absolute right-2 top-2 font-[900] leading-[100%] md:btn-md">âœ•</label>
                  </div>
                </div>
                <div class="w-14 h-14 py-12 grid justify-items-center">
                  <button @click="NextProduct" class="content-center btn btn-circle btn-sm">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                  </button>
                </div>
                <label class="modal-backdrop"
                  :for="`${getLocalAbout.about_office_factory.office.title + active_preview}`">Close</label>
              </div>
            </div>
          </div>
        </section>
        <section class="mt-10 md:mt-20">
          <div class="grid grid-cols-1 md:grid-cols-4">
            <div class="gal-title">
              <!-- {{ getLocale == 'EN' ? getLocalAbout.about_office_factory.factory.title_en : getLocalAbout.about_office_factory.factory.title }} -->
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_office_factory.factory.title_en : getLocalAbout.about_office_factory.factory.title">
                </div>
              </div>
            </div>
            <div class="gal-description text-justify col-span-3 mt-1 md:mt-0">
              <!-- {{ getLocale == 'EN' ? getLocalAbout.about_office_factory.factory.description_en : getLocalAbout.about_office_factory.factory.description }} -->
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_office_factory.factory.description_en : getLocalAbout.about_office_factory.factory.description">
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 grid grid-cols-2 md:grid-cols-3 place-items-stretch gap-3 md:mt-10 md:grid-cols-3 md:gap-5">
            <div for="expand_modal_f" class="bg-black-500/60" @click="getSelectedImageF(index)"
              v-for="(item, index) in getLocalAbout.about_office_factory.factory.list">
              <div>
                <label :for="`${getLocalAbout.about_office_factory.factory.title + index}`"
                  class="group block aspect-square cursor-pointer overflow-hidden" data-aos="fade-up"
                  :data-aos-delay="`${(index * 150) + 500}`">
                  <img :src="item.image_url" :alt="'image-' + (index + 1)"
                    class="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-125">
                </label>
              </div>
              <!-- <OfficeCard :image_url="item.image_url" :index="index" :flag="getLocalAbout.about_office_factory.factory.title"/> -->
            </div>
            <input type="checkbox" :id="`${getLocalAbout.about_office_factory.factory.title + active_preview_f}`"
              class="modal-toggle" />
            <div id="expand_modal_f" class="modal modal-middle backdrop-opacity-60">
              <div class="flex items-center">
                <div class="w-14 h-14 py-12 grid justify-items-center">
                  <button @click="PrevProductF" class="content-center btn btn-circle btn-sm">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                  </button>
                </div>
                <div class="w-full py-12 grid justify-items-center">
                  <div class="modal-box rounded-none p-0 md:max-w-5xl md:w-[70%] lg:w-[70%] overflow-hidden">
                    <img :src="getLocalAbout.about_office_factory.factory.list[active_preview_f].image_url" class="">
                    <label :for="`${getLocalAbout.about_office_factory.factory.title + active_preview_f}`"
                      class="btn btn-circle btn-primary btn-sm absolute right-2 top-2 font-[900] leading-[100%] md:btn-md">âœ•</label>
                  </div>
                </div>
                <div class="w-14 h-14 py-12 grid justify-items-center">
                  <button @click="NextProductF" class="content-center btn btn-circle btn-sm">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                  </button>
                </div>
                <label class="modal-backdrop"
                  :for="`${getLocalAbout.about_office_factory.factory.title + active_preview_f}`">Close</label>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section v-if="active_tab === 'tab7'" id="tab7" class="px-4 tab-container py-10 lg:py-20">
      <div class="">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          <div>
            <div class="gal-title">
              <div class="ql-editor" style="padding: 0;">
                <div v-html="getLocale == 'EN' ? getLocalAbout.about_award.title_en : getLocalAbout.about_award.title">
                </div>
              </div>
            </div>
            <div class="gal-description text-justify mt-1 md:mt-3">
              <div class="ql-editor" style="padding: 0;">
                <div
                  v-html="getLocale == 'EN' ? getLocalAbout.about_award.description_en : getLocalAbout.about_award.description">
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
            <div data-aos="fade-up" :data-aos-delay="`${(index * 150) + 500}`"
              v-for="(item, index) in getLocalAbout.about_award.list" :key="item.id"
              class="grid aspect-square place-content-center border border-gal-blue-lighter p-4 md:border-2 md:p-6">
              <img :src="item.image_url" :alt="'image-award' + (index + 1)"
                class="max-h-max object-cover object-center">
            </div>
          </div>
        </div>
      </div>
    </section>

    <div @click="onModalVideo" v-if="show_modal_video" id="modal_video_about"
      class="fixed left-0 top-0 z-[1001] flex h-screen w-full scale-100 items-center justify-center bg-black/75 transition-all ease-in">
      <div class="container aspect-video p-3 md:p-40">
        <iframe class="aspect-video w-full" :src="processedVideoUrl"></iframe>
      </div>
      <!-- <button @click="onModalVideo" class="btn-indigo btn absolute right-0 top-0 z-[1002] m-10 text-white">close</button> -->
    </div>
    <Footer />
    <FlyingButton />
  </div>
</template>

<script>
import router from '@/router/index.js'
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import OfficeCard from '@/components/card/OfficeCard.vue'
import FlyingButton from '@/components/flying_button/FlyingButton.vue';
import { mapState } from 'vuex'

export default {
  name: 'AboutView',
  components: { Navbar, Footer, OfficeCard, FlyingButton },

  data() {
    return {
      renderall: false,
      getLocale: 'ID',
      getLocalAbout: {},
      getApiAbout: {},
      show_modal_video: false,
      active_preview: 0,
      active_preview_f: 0,
      active_tab: 'tab1',
      current: {
        slide_glimpse: 1,
      },
      container: {
        slide_glimpse: 0,
      },
      active_class_tab: 'rounded-lg shadow bg-white text-primary font-[600] tracking-wide transition-all duration-300 ease-linear',
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
    about(obj) {
      if (obj) {
        this.getApiAbout = obj
      }
    },
  },

  methods: {
    getSelectedImage(index) {
      this.active_preview = index
    },
    NextProduct() {
      if (this.active_preview < this.getLocalAbout.about_office_factory.office.list.length - 1) {
        this.active_preview++
      } else {
        this.active_preview = 0
      }
    },
    PrevProduct() {
      if (this.active_preview > 0) {
        this.active_preview--
      } else {
        this.active_preview = this.getLocalAbout.about_office_factory.office.list.length - 1
      }
    },
    getSelectedImageF(index) {
      this.active_preview_f = index
    },
    NextProductF() {
      if (this.active_preview_f < this.getLocalAbout.about_office_factory.factory.list.length - 1) {
        this.active_preview_f++
      } else {
        this.active_preview_f = 0
      }
    },
    PrevProductF() {
      if (this.active_preview_f > 0) {
        this.active_preview_f--
      } else {
        this.active_preview_f = this.getLocalAbout.about_office_factory.factory.list.length - 1
      }
    },
    onModalVideo() {
      this.show_modal_video = !this.show_modal_video
      if (this.show_modal_video) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    goTotab(tab) {
      this.active_tab = tab;

      let scrollTop = document.documentElement.scrollTop;
      let targetScrollTop = 400;
      let easingFactor = 0.1; // Sesuaikan faktor easing sesuai kebutuhan

      function frame() {
        let distance = targetScrollTop - scrollTop;
        scrollTop += distance * easingFactor;

        document.documentElement.scrollTop = scrollTop;

        // Hentikan animasi jika sudah cukup dekat dengan target
        if (Math.abs(distance) < 1) {
          clearInterval(int);
        }
      }

      let int = setInterval(frame, 16); // Gunakan interval lebih tinggi untuk smoothing yang lebih baik
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
    getData() {
      if (localStorage.getItem('aboutlive')) {
        this.$store.dispatch('about/get', 'live').then(data => {
          localStorage.setItem('aboutlive', JSON.stringify(data))
          // this.getLocalAbout = data
        })
        this.getLocalAbout = JSON.parse(localStorage.getItem('aboutlive'))
        this.renderall = true
      } else {
        this.$store.dispatch('about/get', 'live').then(data => {
          localStorage.setItem('aboutlive', JSON.stringify(data))
          router.go(0)
        })
      }
    },
  },
  mounted() {
    if (this.$route.hash) {
      this.goTotab(this.$route.hash.replace("#", ''))
    }
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
    if (this.$route.hash) {
      this.goTotab(this.$route.hash.replace("#", ''))
    }
    this.getData()
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

<style>
.modal:not(dialog:not(.modal-open)),
.modal::backdrop {
  background-color: rgba(0, 0, 0, 0.7);
  animation: modal-pop 0.2s ease-out;
}
</style>