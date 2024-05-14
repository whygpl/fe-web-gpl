import useIPA from "@/auth/jwt/useJwt";
import router from "@/router/index.js";

// initial state
const state = () => ({
  type_items: [],
  type_items_by_id: [],
  options: {
    category: [],
    group: [],
  },
  category: {
    items: [],
    columns: [
      {
        label: "No",
        field: "no",
        field: "no",
        sortable: false,
      },
      {
        label: "Kategori",
        field: "title",
      },
      {
        label: "Deskripsi",
        field: "description",
      },
      {
        label: "Gambar",
        field: "image_url",
        html: true,
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
  group: {
    items: [],
    columns: [
      {
        label: "No",
        field: "no",
        field: "no",
        sortable: false,
      },
      {
        label: "Kategori",
        field: "product_category_name",
        html: true,
      },
      {
        label: "Grup",
        field: "title",
      },
      {
        label: "Gambar",
        field: "image_url",
        html: true,
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
  detail: {
    items: [],
    columns: [
      {
        label: "No",
        field: "no",
        sortable: true,
      },
      {
        label: "Nama",
        field: "name",
      },
      {
        label: "Deskripsi",
        field: "description",
      },
      {
        label: "Gambar",
        field: "image_url",
        html: true,
      },
      {
        label: "Tanggal Update",
        field: "updated_at",
      },
      {
        label: "Aksi",
        field: "actions",
        sortable: false,
      },
    ],
    rows: [],
  },
  search: {
    items: [],
    columns: [
      {
        label: "Nama",
        field: "name",
      },
      {
        label: "Deskripsi",
        field: "description",
      },
      {
        label: "Gambar",
        field: "image_urlz",
      },
    ],
    rows: [],
  },
});

// getters
const getters = {};

// actions
const actions = {
  getParamCategory({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {
        status: `cms/product/category?product_type_id=${params}&status=preview`,
      };
      useIPA.get(param).then((response) => {
        const Param = {
          rows: response.data.data,
        };
        commit("setParamCategory", { ...Param });
      });
    });
  },
  getParamCategoryGroup({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {
        status: `cms/product/category?product_type_id=${params}&product_type_id=1&status=preview`,
      };
      useIPA.get(param).then((response) => {
        const Param = {
          rows: response.data.data,
        };
        commit("setParamCategory", { ...Param });
      });
    });
  },
  getParamGroup({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {
        status: `cms/product/group?product_category_id=${params}&status=preview`,
      };
      useIPA.get(param).then((response) => {
        const Param = {
          rows: response.data.data,
        };
        commit("setParamGroup", { ...Param });
      });
    });
  },
  getCategoryId({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/product/category?id=${id}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data[0]);
      });
    });
  },
  getCategory({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/product/category?status=${params}` };
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
  getGroup({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/product/group?status=${params}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getProductId({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {
        status: `cms/product/detail?id=${params.id}&status=${params.status}`,
      };
      useIPA.get(param).then((response) => {
        resolve(response.data.data[0]);
      });
    });
  },
  getProduct({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/product/detail?status=${params}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getProductSearch({ commit }, search) {
    return new Promise((resolve, reject) => {
      let param = { status: `website/product/search?name=${search}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getAllType({ commit }) {
    let param = { status: `website/product/type?status=preview` };

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
  getType({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = { status: `website/product/type?status=${params}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data.content);
      });
    });
  },
  formTypePostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("title_1", formData.title_1);
      FormInput.set("title_en_1", formData.title_en_1);
      FormInput.set("sub_title_1", formData.sub_title_1);
      FormInput.set("sub_title_en_1", formData.sub_title_en_1);
      FormInput.set("title_2", formData.title_2);
      FormInput.set("title_en_2", formData.title_en_2);
      FormInput.set("sub_title_2", formData.sub_title_2);
      FormInput.set("sub_title_en_2", formData.sub_title_en_2);
      FormInput.set("title_head_1", formData.title_head_1);
      FormInput.set("title_head_en_1", formData.title_head_en_1);
      FormInput.set("sub_title_head_1", formData.sub_title_head_1);
      FormInput.set("sub_title_head_en_1", formData.sub_title_head_en_1);
      FormInput.set("title_head_2", formData.title_head_2);
      FormInput.set("title_head_en_2", formData.title_head_en_2);
      FormInput.set("sub_title_head_2", formData.sub_title_head_2);
      FormInput.set("sub_title_head_en_2", formData.sub_title_head_en_2);
      FormInput.set("description_1", formData.description_1);
      FormInput.set("description_en_1", formData.description_en_1);
      FormInput.set("description_2", formData.description_2);
      FormInput.set("description_en_2", formData.description_en_2);
      FormInput.set("sub_description_1", formData.sub_description_1);
      FormInput.set("sub_description_en_1", formData.sub_description_en_1);
      FormInput.set("sub_description_2", formData.sub_description_2);
      FormInput.set("sub_description_en_2", formData.sub_description_en_2);
      FormInput.set("navigation_1", formData.navigation_1);
      FormInput.set("navigation_en_1", formData.navigation_en_1);
      FormInput.set("navigation_2", formData.navigation_2);
      FormInput.set("navigation_en_2", formData.navigation_en_2);
      FormInput.set("save_as", formData.save_as);
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
      if (formData.setImageLG_bg === "upload") {
        FormInput.append("img_bg_lg_1", formData.img_url_lg_bg);
        FormInput.append("img_bg_lg_2", formData.img_url_lg_bg);
      } else {
        FormInput.set("img_bg_lg_1", formData.imageUrlLG_bg);
        FormInput.set("img_bg_lg_2", formData.imageUrlLG_bg);
      }
      if (formData.setImageMD_bg === "upload") {
        FormInput.append("img_bg_md_1", formData.img_url_md_bg);
        FormInput.append("img_bg_md_2", formData.img_url_md_bg);
      } else {
        FormInput.set("img_bg_md_1", formData.imageUrlMD_bg);
        FormInput.set("img_bg_md_2", formData.imageUrlMD_bg);
      }
      if (formData.setImageSM_bg === "upload") {
        FormInput.append("img_bg_sm_1", formData.img_url_sm_bg);
        FormInput.append("img_bg_sm_2", formData.img_url_sm_bg);
      } else {
        FormInput.set("img_bg_sm_1", formData.imageUrlSM_bg);
        FormInput.set("img_bg_sm_2", formData.imageUrlSM_bg);
      }
      const param = {
        rawData: FormInput,
        url: "cms/product/type/update",
        id: "",
      };
      useIPA.postput(param).then(
        (response) => {
          router.push({ name: "CmsProductTypeEdit" });
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
  formCategoryPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("product_type_id", formData.product_type_id);
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("description", formData.description);
      FormInput.set("description_en", formData.description_en);
      FormInput.set("save_as", formData.save_as);
      if (formData.setImage === "upload") {
        FormInput.append("img_url", formData.img_url);
      } else {
        FormInput.set("img_url", formData.imageUrl);
      }
      const param = {
        rawData: FormInput,
        url: "cms/product/category/update",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          router.push({
            path: "/cms/product/category/edit/" + response.data.data.id,
          });
          // .then(() => {
          //   router.go(0);
          // });
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
  categoryDelete({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      const param = {
        rawData: FormInput,
        url: "cms/product/category/delete",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          router.push({ path: "/cms/product/category/list" });
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
  formGroupPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      FormInput.set("product_category_id", formData.product_category_id);
      FormInput.set("title", formData.title);
      FormInput.set("title_en", formData.title_en);
      FormInput.set("save_as", formData.save_as);
      if (formData.setImage === "upload") {
        FormInput.append("img_url", formData.img_url);
      } else {
        FormInput.set("img_url", formData.imageUrl);
      }
      const param = {
        rawData: FormInput,
        url: "cms/product/group/update",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          router
            .push({ path: "/cms/product/group/edit/" + response.data.data.id })
            .then(() => {
              router.go(0);
            });
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
  groupDelete({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      const param = {
        rawData: FormInput,
        url: "cms/product/group/delete",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          router.push({ path: "/cms/product/group/list" });
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
      FormInput.set("product_category_id", formData.product_category_id);
      FormInput.set("product_group_id", formData.product_group_id);
      FormInput.set("name", formData.name);
      FormInput.set("name_en", formData.name_en);
      FormInput.set("description", formData.description);
      FormInput.set("description_en", formData.description_en);
      FormInput.set("compotition", formData.compotition);
      FormInput.set("compotition_en", formData.compotition_en);
      FormInput.set("microsite", formData.microsite);
      FormInput.set("micrositeurl", formData.micrositeurl);
      FormInput.set("gstore", formData.gstore);
      FormInput.set("gstoreurl", formData.gstoreurl);
      FormInput.set("chat", formData.chat);
      FormInput.set("email", formData.email);
      FormInput.set("chatvalue", formData.chatvalue);
      FormInput.set("emailvalue", formData.emailvalue);
      // FormInput.append("htu_in", JSON.stringify(formData.htu_in));
      // FormInput.append("htu_en", JSON.stringify(formData.htu_en));
      formData?.htu_in?.map((d, i) => {
        FormInput.append(`htu_in[][value]`, d?.value);
      });
      formData?.htu_en?.map((d, i) => {
        FormInput.append(`htu_en[][value]`, d?.value);
      });
      FormInput.set("attention", formData.attention);
      FormInput.set("attention_en", formData.attention_en);
      FormInput.set("save_as", formData.save_as);
      if (formData.setImage === "upload") {
        FormInput.append("img_url", formData.img_url);
      } else {
        FormInput.set("img_url", formData.imageUrl);
      }
      if (formData.item) {
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
      }
      const param = {
        rawData: FormInput,
        url: "cms/product/product/update",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          router.push({
            path: "/cms/product/detail/edit/" + response.data.data.id,
          });
          // .then(() => {
          //   router.go(0);
          // });
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
  productDelete({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      const param = {
        rawData: FormInput,
        url: "cms/product/product/delete",
        id: formData.id,
      };
      useIPA.postid(param).then(
        (response) => {
          router.push({ path: "/cms/product/list" });
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
  setParamCategory(state, data) {
    state.options.category = [];
    const option = [];
    for (let i = 0; i < data.rows.length; i++) {
      for (const key in data.rows[i]) {
        if (key === "id") {
          option["value"] = data.rows[i][key];
        } else if (key === "title") {
          option["title"] = data.rows[i][key]?.replace(/<[^>]*>/g, '')?.replace('&amp; ',"&");;
        } else if (key === "id") {
          option["oid"] = data.rows[i][key];
        }
      }
      state.options.category.push(Object.assign({}, option));
    }
  },
  setParamGroup(state, data) {
    state.options.group = [];
    const option = [];
    for (let i = 0; i < data.rows.length; i++) {
      for (const key in data.rows[i]) {
        if (key === "id") {
          option["value"] = data.rows[i][key];
        } else if (key === "title") {
          option["title"] = data.rows[i][key]?.replace(/<[^>]*>/g, '')?.replace('&amp; ',"&");;
        } else if (key === "id") {
          option["oid"] = data.rows[i][key];
        }
      }
      state.options.group.push(Object.assign({}, option));
    }
  },
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
