<template>
    <div>
        <div class="flex h-full flex-col justify-between rounded bg-white p-6 font-roboto">
            <div>
                <div class="text-lg font-bold text-gal-grey-darker">
                    <div class="ql-editor" style="padding: 0;">
                        <div v-html="getLocale == 'EN' ? (obj_data.title_en ?? '') : obj_data.title" />
                    </div>
                </div>
                <div class="gal-items mt-1 line-clamp-3 tracking-wide">
                    <div class="ql-editor" style="padding: 0;">
                        <div v-html="getLocale == 'EN' ? (obj_data.title_en ?? '') : obj_data.title" />
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <div class="text-xs font-[500] text-gal-grey-darker md:text-sm md:font-[700]">{{ getLocale == 'EN' ?
                            'Application Deadline' : 'Batas Lamar' }} : {{ obj_data.deadline }}</div>
                <div class="mt-2 flex flex-wrap gap-4 md:mt-4">
                    <label :for="'modal_career_' + `${index}`" class="btn-outline-secondary btn">
                        <span>{{ getLocale == 'EN' ? 'Detail' : 'Detil' }}</span>
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                    </label>
                    <router-link :to="{ path: 'career/join/' + obj_data.id }">
                        <button class="btn btn-primary">
                            <span>{{ getLocale == 'EN' ? 'Apply' : 'Lamar' }}</span>
                            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <input type="checkbox" :id="'modal_career_' + `${index}`" class="modal-toggle" />
        <div class="modal modal-bottom md:modal-middle">
            <div class="modal-box md:max-w-5xl md:rounded-none">
                <h2 class="text-lg font-bold text-gal-grey-darker md:text-2xl">
                    <div class="ql-editor" style="padding: 0;">
                        <div v-html="getLocale == 'EN' ? (obj_data.title_en ?? '') : obj_data.title" />
                    </div>
                </h2>
                <section class="py-4">
                    <div class="flex flex-col justify-between gap-4 md:flex-row">
                        <div class="text-sm text-gal-grey-darker">
                            <div class="flex gap-4">
                                <div>
                                    <!-- {{ obj_data.education }} -->
                                    <div class="ql-editor" style="padding: 0;">
                                        <div v-html="obj_data.education" />
                                    </div>
                                </div>
                                <div class="flex items-center gap-1 font-[800] md:gap-2">
                                    <font-awesome-icon icon="fa-regular fa-clock" />
                                    <div>{{ getLocale == 'EN' ? 'Application Deadline' : 'Batas Lamar' }} : {{
                            obj_data.deadline }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <div>
                                <label :for="'modal_share_career_' + `${index}`"
                                    class="btn-outline-secondary btn btn-sm flex-none py-2">
                                    <div class="flex items-center justify-center">
                                        <font-awesome-icon icon="fa-solid fa-share-nodes" class="mr-3" />
                                        <span>{{ getLocale == 'EN' ? 'Share' : 'Bagikan' }}</span>
                                    </div>
                                </label>
                                <input type="checkbox" :id="'modal_share_career_' + `${index}`" class="modal-toggle" />
                                <!-- modal share news -->
                                <div class="modal modal-bottom w-full md:modal-middle">
                                    <div class="modal-box max-w-5xl">
                                        <div class="divider">{{ getLocale == 'EN' ? 'Share Career' : 'Bagikan Lamaran'
                                            }}</div>
                                        <div class="mt-8 flex w-full flex-wrap gap-2">
                                            <a @click.prevent="share('whatsapp')"
                                                class="btn btn-success btn-sm text-white">
                                                <font-awesome-icon icon="fa-brands fa-whatsapp" /> Whatsapp
                                            </a>
                                            <a @click.prevent="share('telegram')"
                                                class="btn btn-info btn-sm text-white">
                                                <font-awesome-icon icon="fa-brands fa-telegram" /> Telegram
                                            </a>
                                            <a @click.prevent="share('facebook')" class="btn btn-primary btn-sm">
                                                <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
                                            </a>
                                            <a @click.prevent="share('copy')" class="btn btn-sm">
                                                <font-awesome-icon icon="fa-regular fa-clipboard" /> {{ isCopied ?
                            'Copied' : 'Copy' }}
                                            </a>
                                        </div>
                                        <label :for="'modal_share_career_' + `${index}`"
                                            class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 font-[900] leading-[100%]">✕</label>
                                    </div>
                                    <label class="modal-backdrop"
                                        :for="'modal_share_career_' + `${index}`">Close</label>
                                </div>
                            </div>
                            <!-- <div>
                                <button class="btn-outline-secondary btn btn-sm flex-none py-2">
                                    <font-awesome-icon icon="fa-brands fa-whatsapp"/>
                                    <span>{{ getLocale == 'EN' ? 'Chat US' : 'Chat Kami'}}</span>
                                </button>
                            </div> -->
                            <div>
                                <router-link :to="{ path: 'career/join/' + obj_data.id }">
                                    <button class="btn btn-primary btn-sm flex-none py-2">
                                        <span>{{ getLocale == 'EN' ? 'Apply' : 'Lamar' }}</span>
                                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="grid grid-cols-1 gap-4 text-gal-grey-darker md:grid-cols-2 md:gap-10">
                        <div>
                            <div class="font-[800]">{{ getLocale == 'EN' ? 'Description' : 'Deskripsi' }}</div>
                            <ul class="ml-8 list-disc">
                                <li v-for="list in getLocale == 'EN' ? obj_data.description_en : obj_data.description">
                                    <div class="ql-editor" style="padding: 0;">
                                        <div v-html="list.name" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="font-[800]">{{ getLocale == 'EN' ? 'Requirement' : 'Persyaratan' }}</div>
                            <ul class="ml-8 list-disc">
                                <li
                                    v-for="list in getLocale == 'EN' ? obj_data.requierement_en : obj_data.requierement">
                                    <div class="ql-editor" style="padding: 0;">
                                        <div v-html="list.name" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- closed button -->
                <label :for="'modal_career_' + `${index}`"
                    class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 md:btn-md">✕</label>
            </div>
            <label class="modal-backdrop" :for="'modal_career_' + `${index}`">Close</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        obj_data: {
            type: Object,
            default: () => ({
                id: 1,
                title: 'Lorem Ipsum',
                subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                deadline: '01-12-2023',
                category: 'Marketing',
                education: 'Lulusan Mahasiswa',
                phone_number: '08123456789',
                description: [
                    'Lorem Ipsum is simplyxt of the printing and typesetting industry',
                    'Lorem Ipsum is simply dummy text and typesetting industry',
                    'Lorem Ipsum is y dummy text of the printing industry',
                ],
                requirement: [
                    'Lorem Ipsum is simply dummy text ',
                    'Lorem Ipsum is simply dummy text of the printing and typese dustry',
                    'Lorem Ipsum is simply dummy text of the printing ',
                    'Lorem Ipsum is simxt of the printing and typesetting industry',
                    'Lorem Ipsum is simply dummy text of the printing and typesetting istry',
                    'Lorem Ipsum is simply dummy text of the printing and typey',
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                    'Lorem Ipsum is of the printing and typesetting industry',
                    'Lorem Ipsum is simply dummy text of td typesetting industry',
                ]
            })
        },
        index: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            isCopied: false,
            isModalActive: false,
            getLocale: 'ID',
        }
    },
    methods: {
        share(platform) {
            switch (platform) {
                case "whatsapp":
                    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(this.title)} ${encodeURIComponent(window.location.href)}`);
                    break;
                case "telegram":
                    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(this.title)}`);
                    break;
                case "facebook":
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(this.title)}`);
                    break;
                case "copy":
                    this.copyToClipboard(window.location.href);
                    break;
            }
        },
        copyToClipboard(text) {
            const elem = document.createElement('textarea');
            elem.value = text;
            document.body.appendChild(elem);
            elem.select();
            document.execCommand('copy');
            document.body.removeChild(elem);
            this.aftercopy()
        },
        aftercopy() {
            this.isCopied = true;
            setTimeout(() => {
                this.isCopied = false;
            }, 2000);
        },
        toggleModal() {
            this.isModalActive = !this.isModalActive
        }
    },
    created() {
        if (localStorage.getItem('locale')) {
            this.getLocale = localStorage.getItem('locale')
        } else {
            this.getLocale = 'ID'
        }
    },
}
</script>
<!-- <style>
.modal-box {
  width: 100%;
}
@media (min-width: 640px){
  .modal-box {
      max-width: 100%;
  }
}
</style> -->