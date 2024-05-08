import useIPA from "@/auth/jwt/useJwt";
import router from "@/router/index.js";

// initial state
const state = () => ({
  items: [],
  products: {
    columns: [
      {
        label: "Title",
        field: "title",
      },
      {
        label: "Title EN",
        field: "title_en",
      },
    ],
    rows: [],
  },
});

// getters
const getters = {};

// actions
const actions = {
  getAbout({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/about/head" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getCompany({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/about/company" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getPresident({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/about/president" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getVision({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/about/vision" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getValue({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/about/value" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getCertification({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/about/certification" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getAward({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/about/award" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getOffice({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/about/office" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getProduct({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/home/product" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getQuality({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/home/quality" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  formAboutPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("page_title", formData.page_title);
      FormInput.set("page_title_en", formData.page_title_en);
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("youtube_url", formData.youtube_url);
      FormInput.set("save_as", formData.save_as);
      const param = {
        rawData: FormInput,
        url: "cms/about/head/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsAboutAboutheadEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
  formCompanyPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("h_title", formData.h_title);
      FormInput.set("h_title_en", formData.h_title_en);
      FormInput.set("subtitle", formData.subtitle);
      FormInput.set("subtitle_en", formData.subtitle_en);
      FormInput.set("h_subtitle", formData.h_subtitle);
      FormInput.set("h_subtitle_en", formData.h_subtitle_en);
      FormInput.set("paragraph_1", formData.paragraph_1);
      FormInput.set("paragraph_2", formData.paragraph_2);
      FormInput.set("paragraph_3", formData.paragraph_3);
      FormInput.set("paragraph_4", formData.paragraph_4);
      FormInput.set("paragraph_5", formData.paragraph_5);
      FormInput.set("paragraph_6", formData.paragraph_6);
      FormInput.set("paragraph_1_en", formData.paragraph_1_en);
      FormInput.set("paragraph_2_en", formData.paragraph_2_en);
      FormInput.set("paragraph_3_en", formData.paragraph_3_en);
      FormInput.set("paragraph_4_en", formData.paragraph_4_en);
      FormInput.set("paragraph_5_en", formData.paragraph_5_en);
      FormInput.set("paragraph_6_en", formData.paragraph_6_en);
      FormInput.set("h_paragraph_1", formData.h_paragraph_1);
      FormInput.set("h_paragraph_2", formData.h_paragraph_2);
      FormInput.set("h_paragraph_1_en", formData.h_paragraph_1_en);
      FormInput.set("h_paragraph_2_en", formData.h_paragraph_2_en);
      FormInput.set("img_url_id_1", formData.img_url_id_1);
      FormInput.set("img_url_id_2", formData.img_url_id_2);
      FormInput.set("img_url_id_3", formData.img_url_id_3);
      FormInput.set("save_as", formData.save_as);
      if (formData.setImage === "upload") {
        FormInput.append("img_url", formData.img_url);
      } else {
        FormInput.set("img_url", formData.imageUrl);
      }
      if (formData.setImage_h === "upload") {
        FormInput.append("img_url_h", formData.img_url_h);
      } else {
        FormInput.set("img_url_h", formData.imageUrl_h);
      }
      if (formData.setImage_1 === "upload") {
        FormInput.append("img_url_1", formData.img_url_1);
      } else {
        FormInput.set("img_url_1", formData.imageUrl_1);
      }
      if (formData.setImage_2 === "upload") {
        FormInput.append("img_url_2", formData.img_url_2);
      } else {
        FormInput.set("img_url_2", formData.imageUrl_2);
      }
      if (formData.setImage_3 === "upload") {
        FormInput.append("img_url_3", formData.img_url_3);
      } else {
        FormInput.set("img_url_3", formData.imageUrl_3);
      }
      console.log("api", formData);
      const param = {
        rawData: FormInput,
        url: "cms/about/company/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsAboutCompanyEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
  formPresidentPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      console.log(formData);
      const FormInput = new FormData();
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("paragraph_1", formData.paragraph_1);
      FormInput.set("paragraph_2", formData.paragraph_2);
      FormInput.set("paragraph_3", formData.paragraph_3);
      FormInput.set("paragraph_4", formData.paragraph_4);
      FormInput.set("paragraph_5", formData.paragraph_5);
      FormInput.set("paragraph_6", formData.paragraph_6);
      FormInput.set("paragraph_7", formData.paragraph_7);
      FormInput.set("paragraph_1_en", formData.paragraph_1_en);
      FormInput.set("paragraph_2_en", formData.paragraph_2_en);
      FormInput.set("paragraph_3_en", formData.paragraph_3_en);
      FormInput.set("paragraph_4_en", formData.paragraph_4_en);
      FormInput.set("paragraph_5_en", formData.paragraph_5_en);
      FormInput.set("paragraph_6_en", formData.paragraph_6_en);
      FormInput.set("paragraph_7_en", formData.paragraph_7_en);
      FormInput.set("greeting", formData.greeting);
      FormInput.set("greeting_en", formData.greeting_en);
      FormInput.set("messenger", formData.messenger);
      FormInput.set("messenger_en", formData.messenger_en);
      FormInput.set("job_title", formData.job_title);
      FormInput.set("job_title_en", formData.job_title_en);
      FormInput.set("save_as", formData.save_as);
      if (formData.setImage === "upload") {
        FormInput.append("img_url", formData.img_url);
      } else {
        FormInput.set("img_url", formData.imageUrl);
      }
      const param = {
        rawData: FormInput,
        url: "cms/about/president/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsAboutPresidentEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
  formVisionPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      console.log(formData);
      const FormInput = new FormData();
      FormInput.set("v_title", formData.v_title);
      FormInput.set("v_title_en", formData.v_title_en);
      FormInput.set("v_description", formData.v_description);
      FormInput.set("v_description_en", formData.v_description_en);
      FormInput.set("m_title", formData.m_title);
      FormInput.set("m_title_en", formData.m_title_en);
      FormInput.set("m_subtitle", formData.m_subtitle);
      FormInput.set("m_subtitle_en", formData.m_subtitle_en);
      FormInput.set("m_description", formData.m_description);
      FormInput.set("m_description_en", formData.m_description_en);
      FormInput.set("m_item", JSON.stringify(formData.m_item));
      FormInput.set("m_item_en", JSON.stringify(formData.m_item_en));
      FormInput.set("save_as", formData.save_as);
      if (formData.v_setImageSM === "upload") {
        FormInput.append("v_img_urlSM", formData.v_img_urlSM);
      } else {
        FormInput.set("v_img_urlSM", formData.v_imageUrlSM);
      }
      if (formData.v_setImageMD === "upload") {
        FormInput.append("v_img_urlMD", formData.v_img_urlMD);
      } else {
        FormInput.set("v_img_urlMD", formData.v_imageUrlMD);
      }
      if (formData.v_setImageLG === "upload") {
        FormInput.append("v_img_urlLG", formData.v_img_urlLG);
      } else {
        FormInput.set("v_img_urlLG", formData.v_imageUrlLG);
      }
      if (formData.m_setImageSM === "upload") {
        FormInput.append("m_img_urlSM", formData.m_img_urlSM);
      } else {
        FormInput.set("m_img_urlSM", formData.m_imageUrlSM);
      }
      if (formData.m_setImageMD === "upload") {
        FormInput.append("m_img_urlMD", formData.m_img_urlMD);
      } else {
        FormInput.set("m_img_urlMD", formData.m_imageUrlMD);
      }
      if (formData.m_setImageLG === "upload") {
        FormInput.append("m_img_urlLG", formData.m_img_urlLG);
      } else {
        FormInput.set("m_img_urlLG", formData.m_imageUrlLG);
      }
      const param = { rawData: FormInput, url: "cms/about/vm/update", id: "" };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsAboutVisionEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
  formValuePostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      console.log(formData);
      const FormInput = new FormData();
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("description", formData.description);
      FormInput.set("description_en", formData.description_en);
      FormInput.set("save_as", formData.save_as);
      console.log(formData);
      for (let index = 0; index < formData.item.length; index++) {
        FormInput.set("count_item", formData.item.length);
        if (
          formData.item[index].id !== "" &&
          formData.item[index].setImage &&
          formData.item[index].title !== ""
        ) {
          FormInput.set(
            `id_${formData.item[index].id}`,
            formData.item[index].id
          );
          FormInput.set(
            `title_${formData.item[index].id}`,
            formData.item[index].title
          );
          FormInput.set(
            `title_en_${formData.item[index].id}`,
            formData.item[index].title_en
          );
          FormInput.append(
            `img_url_${formData.item[index].id}`,
            formData.item[index].img_url
          );
        } else if (formData.item[index].id === "") {
          if (formData.item[index].title !== "") {
            FormInput.set(`id_new_${index}`, formData.item[index].id);
            FormInput.set(`title_new_${index}`, formData.item[index].title);
            FormInput.set(
              `title_en_new_${index}`,
              formData.item[index].title_en
            );
            FormInput.append(
              `img_url_new_${index}`,
              formData.item[index].img_url
            );
          }
        } else {
          if (formData.item[index].title !== "") {
            FormInput.set(
              `id_${formData.item[index].id}`,
              formData.item[index].id
            );
            FormInput.set(
              `title_${formData.item[index].id}`,
              formData.item[index].title
            );
            FormInput.set(
              `title_en_${formData.item[index].id}`,
              formData.item[index].title_en
            );
            FormInput.set(
              `img_url_${formData.item[index].id}`,
              formData.item[index].image_url
            );
          } else {
            FormInput.set(
              `id_${formData.item[index].id}`,
              formData.item[index].id
            );
            FormInput.set(
              `title_${formData.item[index].id}`,
              formData.item[index].title
            );
            FormInput.set(
              `title_en_${formData.item[index].id}`,
              formData.item[index].title_en
            );
            FormInput.set(
              `img_url_${formData.item[index].id}`,
              formData.item[index].image_url
            );
          }
        }
      }
      // if (formData.v_setImageSM === 'upload') {
      //   FormInput.append('v_img_urlSM', formData.v_img_urlSM)
      // } else {
      //   FormInput.set('v_img_urlSM', formData.v_imageUrlSM)
      // }
      const param = {
        rawData: FormInput,
        url: "cms/about/value/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsAboutCompanyvalueEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
  formCertificationPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("description", formData.description);
      FormInput.set("description_en", formData.description_en);
      FormInput.set("save_as", formData.save_as);
      for (let index = 0; index < formData.item.length; index++) {
        FormInput.set("count_item", formData.item.length);
        if (formData.item[index].id !== "" && formData.item[index].setImage) {
          FormInput.set(
            `id_${formData.item[index].id}`,
            formData.item[index].id
          );
          FormInput.append(
            `img_url_${formData.item[index].id}`,
            formData.item[index].img_url
          );
        } else if (formData.item[index].id === "") {
          FormInput.set(`id_new_${index}`, formData.item[index].id);
          FormInput.append(
            `img_url_new_${index}`,
            formData.item[index].img_url
          );
        } else {
          FormInput.set(
            `id_${formData.item[index].id}`,
            formData.item[index].id
          );
          FormInput.set(
            `img_url_${formData.item[index].id}`,
            formData.item[index].image_url
          );
        }
      }
      // if (formData.v_setImageSM === 'upload') {
      //   FormInput.append('v_img_urlSM', formData.v_img_urlSM)
      // } else {
      //   FormInput.set('v_img_urlSM', formData.v_imageUrlSM)
      // }
      const param = {
        rawData: FormInput,
        url: "cms/about/certification/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsAboutCertificationEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
  formOfficePostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      let FormInput = new FormData();
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("description", formData.description);
      FormInput.set("description_en", formData.description_en);
      FormInput.set("f_title", formData.f_title);
      FormInput.set("f_title_en", formData.f_title_en);
      FormInput.set("f_description", formData.f_description);
      FormInput.set("f_description_en", formData.f_description_en);
      FormInput.set("save_as", formData.save_as);
      for (let index = 0; index < formData.image_urls.length; index++) {
        FormInput.set("count_item", formData.image_urls.length);
        if (
          formData.image_urls[index].id !== "" &&
          formData.image_urls[index].setImage
        ) {
          FormInput.set(
            `id_${formData.image_urls[index].id}`,
            formData.image_urls[index].id
          );
          FormInput.append(
            `img_url_${formData.image_urls[index].id}`,
            formData.image_urls[index].img_url
          );
        } else if (formData.image_urls[index].id === "") {
          FormInput.set(`id_new_${index}`, formData.image_urls[index].id);
          FormInput.append(
            `img_url_new_${index}`,
            formData.image_urls[index].img_url
          );
        } else {
          FormInput.set(
            `id_${formData.image_urls[index].id}`,
            formData.image_urls[index].id
          );
          FormInput.set(
            `img_url_${formData.image_urls[index].id}`,
            formData.image_urls[index].image_url
          );
        }
      }
      for (let index = 0; index < formData.f_image_urls.length; index++) {
        FormInput.set("f_count_item", formData.f_image_urls.length);
        if (
          formData.f_image_urls[index].id !== "" &&
          formData.f_image_urls[index].setImage
        ) {
          FormInput.set(
            `id_${formData.f_image_urls[index].id}`,
            formData.f_image_urls[index].id
          );
          FormInput.append(
            `img_url_${formData.f_image_urls[index].id}`,
            formData.f_image_urls[index].img_url
          );
        } else if (formData.f_image_urls[index].id === "") {
          FormInput.set(`id_new_${index}`, formData.f_image_urls[index].id);
          FormInput.append(
            `img_url_new_${index}`,
            formData.f_image_urls[index].img_url
          );
        } else {
          FormInput.set(
            `id_${formData.f_image_urls[index].id}`,
            formData.f_image_urls[index].id
          );
          FormInput.set(
            `img_url_${formData.f_image_urls[index].id}`,
            formData.f_image_urls[index].image_url
          );
        }
      }

      // if (formData.v_setImageSM === 'upload') {
      //   FormInput.append('v_img_urlSM', formData.v_img_urlSM)
      // } else {
      //   FormInput.set('v_img_urlSM', formData.v_imageUrlSM)
      // }
      const param = {
        rawData: FormInput,
        url: "cms/about/office/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsAboutOfficeEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
  formAwardPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("description", formData.description);
      FormInput.set("description_en", formData.description_en);
      FormInput.set("save_as", formData.save_as);
      console.log(formData);
      for (let index = 0; index < formData.item.length; index++) {
        FormInput.set("count_item", formData.item.length);
        if (formData.item[index].id !== "" && formData.item[index].setImage) {
          FormInput.set(
            `id_${formData.item[index].id}`,
            formData.item[index].id
          );
          FormInput.append(
            `img_url_${formData.item[index].id}`,
            formData.item[index].img_url
          );
        } else if (formData.item[index].id === "") {
          FormInput.set(`id_new_${index}`, formData.item[index].id);
          FormInput.append(
            `img_url_new_${index}`,
            formData.item[index].img_url
          );
        } else {
          FormInput.set(
            `id_${formData.item[index].id}`,
            formData.item[index].id
          );
          FormInput.set(
            `img_url_${formData.item[index].id}`,
            formData.item[index].image_url
          );
        }
      }
      // if (formData.v_setImageSM === 'upload') {
      //   FormInput.append('v_img_urlSM', formData.v_img_urlSM)
      // } else {
      //   FormInput.set('v_img_urlSM', formData.v_imageUrlSM)
      // }
      const param = {
        rawData: FormInput,
        url: "cms/about/award/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsAboutAwardsEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
  formHeroPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("colour_1", formData.colour_1);
      FormInput.set("title_1", formData.title_1);
      FormInput.set("title_en_1", formData.title_en_1);
      FormInput.set("colour_2", formData.colour_2);
      FormInput.set("title_2", formData.title_2);
      FormInput.set("title_en_2", formData.title_en_2);
      FormInput.set("colour_3", formData.colour_3);
      FormInput.set("title_3", formData.title_3);
      FormInput.set("title_en_3", formData.title_en_3);
      FormInput.set("description_1", formData.description_1);
      FormInput.set("description_en_1", formData.description_en_1);
      FormInput.set("description_2", formData.description_2);
      FormInput.set("description_en_2", formData.description_en_2);
      FormInput.set("description_3", formData.description_3);
      FormInput.set("description_en_3", formData.description_en_3);
      FormInput.set("save_as", formData.save_as);
      if (formData.setImageLG_1 === "upload") {
        FormInput.append("img_url_lg_1", formData.img_url_lg_1);
      } else {
        FormInput.set("img_url_lg_1", formData.imageUrlLG_1);
      }
      if (formData.setImageLG_2 === "upload") {
        FormInput.append("img_url_lg_2", formData.img_url_lg_2);
      } else {
        FormInput.set("img_url_lg_2", formData.imageUrlLG_2);
      }
      if (formData.setImageLG_3 === "upload") {
        FormInput.append("img_url_lg_3", formData.img_url_lg_3);
      } else {
        FormInput.set("img_url_lg_3", formData.imageUrlLG_3);
      }
      //MD
      if (formData.setImageMD_1 === "upload") {
        FormInput.append("img_url_md_1", formData.img_url_md_1);
      } else {
        FormInput.set("img_url_md_1", formData.imageUrlMD_1);
      }
      if (formData.setImageMD_2 === "upload") {
        FormInput.append("img_url_md_2", formData.img_url_md_2);
      } else {
        FormInput.set("img_url_md_2", formData.imageUrlMD_2);
      }
      if (formData.setImageMD_3 === "upload") {
        FormInput.append("img_url_md_3", formData.img_url_md_3);
      } else {
        FormInput.set("img_url_md_3", formData.imageUrlMD_3);
      }
      //SM
      if (formData.setImageSM_1 === "upload") {
        FormInput.append("img_url_sm_1", formData.img_url_sm_1);
      } else {
        FormInput.set("img_url_sm_1", formData.imageUrlSM_1);
      }
      if (formData.setImageSM_2 === "upload") {
        FormInput.append("img_url_sm_2", formData.img_url_sm_2);
      } else {
        FormInput.set("img_url_sm_2", formData.imageUrlSM_2);
      }
      if (formData.setImageSM_3 === "upload") {
        FormInput.append("img_url_sm_3", formData.img_url_sm_3);
      } else {
        FormInput.set("img_url_sm_3", formData.imageUrlSM_3);
      }
      const param = { rawData: FormInput, url: "cms/home/update", id: "" };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsHomeSliderEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
  formProductPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("category_1", formData.category_1);
      FormInput.set("category_en_1", formData.category_en_1);
      FormInput.set("product_type_1", formData.product_type_1);
      FormInput.set("product_type_en_1", formData.product_type_en_1);
      FormInput.set("title_1", formData.title_1);
      FormInput.set("title_en_1", formData.title_en_1);
      FormInput.set("category_2", formData.category_2);
      FormInput.set("category_en_2", formData.category_en_2);
      FormInput.set("product_type_2", formData.product_type_2);
      FormInput.set("product_type_en_2", formData.product_type_en_2);
      FormInput.set("title_2", formData.title_2);
      FormInput.set("title_en_2", formData.title_en_2);
      FormInput.set("description_1", formData.description_1);
      FormInput.set("description_en_1", formData.description_en_1);
      FormInput.set("description_2", formData.description_2);
      FormInput.set("description_en_2", formData.description_en_2);
      FormInput.set("save_as", formData.save_as);
      if (formData.setImageLG_1 === "upload") {
        FormInput.append("img_url_lg_1", formData.img_url_lg_1);
      } else {
        FormInput.set("img_url_lg_1", formData.imageUrlLG_1);
      }
      if (formData.setImageLG_2 === "upload") {
        FormInput.append("img_url_lg_2", formData.img_url_lg_2);
      } else {
        FormInput.set("img_url_lg_2", formData.imageUrlLG_2);
      }
      //MD
      if (formData.setImageMD_1 === "upload") {
        FormInput.append("img_url_md_1", formData.img_url_md_1);
      } else {
        FormInput.set("img_url_md_1", formData.imageUrlMD_1);
      }
      if (formData.setImageMD_2 === "upload") {
        FormInput.append("img_url_md_2", formData.img_url_md_2);
      } else {
        FormInput.set("img_url_md_2", formData.imageUrlMD_2);
      }
      //SM
      if (formData.setImageSM_1 === "upload") {
        FormInput.append("img_url_sm_1", formData.img_url_sm_1);
      } else {
        FormInput.set("img_url_sm_1", formData.imageUrlSM_1);
      }
      if (formData.setImageSM_2 === "upload") {
        FormInput.append("img_url_sm_2", formData.img_url_sm_2);
      } else {
        FormInput.set("img_url_sm_2", formData.imageUrlSM_2);
      }
      const param = {
        rawData: FormInput,
        url: "cms/home/product/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsHomeProductEdit" });
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        },
        (error) => {
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        }
      );
    });
  },
};

// mutations
const mutations = {
  setData(state, data) {
    state.products.rows = [data];
    // console.log(state.products.columns)
    // console.log(state.products.rows)
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
