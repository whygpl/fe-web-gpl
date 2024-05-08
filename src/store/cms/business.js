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
  distributor: {
    items: [],
    columns: [
      {
        label: "No",
        field: "no",
        sortable: false,
      },
      {
        label: "Kesehatan/Resep",
        field: "typez",
      },
      {
        label: "Provinsi",
        field: "city_name",
      },
      {
        label: "Latitude",
        field: "latitude",
      },
      {
        label: "Longitude",
        field: "longitude",
      },
      {
        label: "Tanggal Update",
        field: "updated_at",
      },
      {
        label: "Aksi",
        field: "actions",
      },
    ],
    rows: [],
  },
});

// getters
const getters = {};

// actions
const actions = {
  getBusiness({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/business/business" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getDistributor({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/business/distributor?status=${params}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getDistributorId({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/business/detail?id=${id}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data[0]);
      });
    });
  },
  getMitra({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/business/mitra" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  formBusinessPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("subtitle", formData.subtitle);
      FormInput.set("subtitle_en", formData.subtitle_en);
      FormInput.set("paraghraph_1", formData.paraghraph_1);
      FormInput.set("paraghraph_2", formData.paraghraph_2);
      FormInput.set("paraghraph_3", formData.paraghraph_3);
      FormInput.set("paraghraph_1_en", formData.paraghraph_1_en);
      FormInput.set("paraghraph_2_en", formData.paraghraph_2_en);
      FormInput.set("paraghraph_3_en", formData.paraghraph_3_en);
      FormInput.set("contact", JSON.stringify(formData.contact));
      FormInput.set("contact_en", JSON.stringify(formData.contact_en));
      FormInput.set("h_title", formData.h_title);
      FormInput.set("h_title_en", formData.h_title_en);
      FormInput.set("h_subtitle", formData.h_subtitle);
      FormInput.set("h_subtitle_en", formData.h_subtitle_en);
      FormInput.set("h_paraghraph_1", formData.h_paraghraph_1);
      FormInput.set("h_paraghraph_2", formData.h_paraghraph_2);
      FormInput.set("h_paraghraph_3", formData.h_paraghraph_3);
      FormInput.set("h_paraghraph_1_en", formData.h_paraghraph_1_en);
      FormInput.set("h_paraghraph_2_en", formData.h_paraghraph_2_en);
      FormInput.set("h_paraghraph_3_en", formData.h_paraghraph_3_en);
      FormInput.set("par_list_2", JSON.stringify(formData.par_list_2));
      FormInput.set("par_list_3", JSON.stringify(formData.par_list_3));
      FormInput.set("par_list_2_en", JSON.stringify(formData.par_list_2_en));
      FormInput.set("par_list_3_en", JSON.stringify(formData.par_list_3_en));
      FormInput.set("manufacture_contact", JSON.stringify(formData.h_contact));
      FormInput.set(
        "manufacture_contact_en",
        JSON.stringify(formData.h_contact_en)
      );
      FormInput.set("save_as", formData.save_as);
      FormInput.set("h_img_url_id_1", formData.h_img_url_id_1);
      FormInput.set("img_url_id_1", formData.img_url_id_1);
      if (formData.setImage_1 === "upload") {
        FormInput.append("img_url_1", formData.img_url_1);
      } else {
        FormInput.set("img_url_1", formData.imageUrl_1);
      }
      if (formData.h_setImage === "upload") {
        FormInput.append("h_img_url", formData.h_img_url);
      } else {
        FormInput.set("h_img_url", formData.h_imageUrl);
      }
      if (formData.h_setImage_1 === "upload") {
        FormInput.append("h_img_url_1", formData.h_img_url_1);
      } else {
        FormInput.set("h_img_url_1", formData.h_imageUrl_1);
      }
      const param = { rawData: FormInput, url: "cms/Business/update", id: "" };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsBusinessEdit" });
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
  formDistributionPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("type", formData.type);
      FormInput.set("title", formData.title);
      FormInput.set("city_name", formData.city_name);
      FormInput.set("city_name_en", formData.city_name_en);
      FormInput.set("latitude", formData.latitude);
      FormInput.set("latitude_en", formData.latitude_en);
      FormInput.set("longitude", formData.longitude);
      FormInput.set("longitude_en", formData.longitude_en);
      FormInput.set("companies", JSON.stringify(formData.companies));
      FormInput.set("companies_en", JSON.stringify(formData.companies_en));
      FormInput.set("save_as", formData.save_as);
      const param = {
        rawData: FormInput,
        url: "cms/business/distribution/update",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          // router.push({ path: '/cms/business/distributor/edit/'+ response.data.data.id}).then(() => { router.go(0) })
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
  distributionDelete({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      const param = {
        rawData: FormInput,
        url: "cms/business/distribution/delete",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          router.push({ path: "/cms/business/distributor/list" });
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
  formMitraPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
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
      const param = {
        rawData: FormInput,
        url: "cms/business/mitra/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsBusinessMitraEdit" });
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
