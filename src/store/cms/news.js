import useIPA from "@/auth/jwt/useJwt";
import router from "@/router/index.js";

// initial state
const state = () => ({
  type_items: [],
  type_items_by_id: [],
  category: {
    items: [],
    columns: [
      {
        label: "No",
        field: "no",
        sortable: false,
      },
      {
        label: "Category",
        field: "title",
      },
      {
        label: "Description",
        field: "description",
      },
      {
        label: "Image",
        field: "image_url",
      },
      {
        label: "Date Update",
        field: "updated_at",
      },
      {
        label: "Action",
        field: "actions",
      },
    ],
    rows: [],
  },
  group: {
    items: [],
    columns: [
      {
        label: "No",
        field: "no",
        sortable: false,
      },
      {
        label: "Category",
        field: "product_category_name",
      },
      {
        label: "Group",
        field: "title",
      },
      {
        label: "Image",
        field: "image_url",
      },
      {
        label: "Date Update",
        field: "updated_at",
      },
      {
        label: "Action",
        field: "actions",
      },
    ],
    rows: [],
  },
  detail: {
    items: [],
    columns: [
      {
        label: "No",
        field: "no",
        sortable: false,
      },
      {
        label: "Judul",
        field: "title",
      },
      {
        label: "Deskripsi",
        field: "desc",
      },
      /*{
        label: "Gambar",
        field: "image_url",
      },*/
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
  formPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("category_id", formData.category_id);
      FormInput.set("date", formData.date);
      FormInput.set("desc", formData.desc);
      FormInput.set("desc_en", formData.desc_en);
      FormInput.set("description", formData.description);
      FormInput.set("description_en", formData.description_en);
      FormInput.set("img_url", formData.img_url);
      FormInput.set("save_as", formData.save_as);
      if (formData.setImage === "upload") {
        FormInput.append("img_url", formData.img_url);
      } else {
        FormInput.set("img_url", formData.imageUrl);
      }
      const param = {
        rawData: FormInput,
        url: "cms/news/news/update",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          router.push({ path: "/cms/news/edit/" + response.data.data.id });
          // .then(() => { router.go(0) })
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
  newsDelete({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      const param = {
        rawData: FormInput,
        url: "cms/news/news/delete",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          router.push({ path: "/cms/news/list" });
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
  getId({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/news/detail?id=${id}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data[0]);
      });
    });
  },
  getCategory({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/product/category" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getGroupId({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/product/group?id=${id}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data[0]);
      });
    });
  },
  getGroup({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/product/group" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getProductId({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/product/detail?id=${id}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data[0]);
      });
    });
  },
  getNews({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: "cms/news/detail" };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getAllType({ commit }) {
    let param = { status: `website/product/type` };

    useIPA
      .get(param)
      .then((response) => {
        const data = response.data.data.content;
        // console.log(data)

        localStorage.setItem("product_type", JSON.stringify(data));
        commit("setTypeData", { ...data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  getTypeById({ commit }, id) {
    let param = { status: `website/product/type?id=${id}` };

    useIPA
      .get(param)
      .then((response) => {
        const data = response.data.data.content;
        // console.log(data)

        localStorage.setItem("product_type_by_id", JSON.stringify(data));
        commit("setTypeByIdData", { ...data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};

// mutations
const mutations = {
  setTypeData(state, newData) {
    // console.log(newData)
    state.type_items = newData;
  },
  setTypeByIdData(state, newData) {
    // console.log(newData)
    state.type_items_by_id = newData;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
