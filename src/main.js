import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/main.css";
import "./assets/css/customize.css";
import vSelect from "vue-select";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueVideoPlayer from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import CKEditor from "@ckeditor/ckeditor5-vue";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import VueDOMPurifyHTML from "vue-dompurify-html";

const app = createApp(App);

import {
  faUserSecret,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faBars,
  faX,
  faArrowRightLong,
  faPlay,
  faShareNodes,
  faLocationDot,
  faPhone,
  faChevronUp,
  faEye,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faBell,
  faEnvelope,
  faClock,
  faPaperPlane,
  faClipboard,
} from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faYoutube,
  faWhatsapp,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faUserSecret,
  faUser,
  faBell,
  faChevronDown,
  faMagnifyingGlass,
  faChevronLeft,
  faChevronRight,
  faBars,
  faX,
  faArrowRightLong,
  faInstagram,
  faYoutube,
  faPlay,
  faWhatsapp,
  faEnvelope,
  faClock,
  faShareNodes,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faChevronUp,
  faEye,
  faUpRightAndDownLeftFromCenter,
  faClipboard,
  faFacebook,
  faTelegram
);

// importing AOS css style globally
import "aos/dist/aos.css";
import VueClientRecaptcha from "vue-client-recaptcha";

createApp(App)
  .use(store)
  .use(router)
  .use(CKEditor)
  .use(VueVideoPlayer)
  .use(VueDOMPurifyHTML, {
    default: {
      ADD_TAGS: ["iframe"], // this one whitelists Youtube
    },
  })
  .component("VueClientRecaptcha", VueClientRecaptcha)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("v-select", vSelect)
  .component("QuillEditor", QuillEditor)
  .mount("#app");
