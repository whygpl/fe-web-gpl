import useIPA from "@/auth/jwt/useJwt";
import router from "@/router/index.js";

// initial state
const state = () => ({
  items: [],
  usersList: {
    items: [],
    columns: [
      {
        label: "No",
        field: "no",
        sortable: false,
      },
      {
        label: "Full Name",
        field: "fullname",
      },
      {
        label: "Email",
        field: "email",
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
  getUsers({ commit }) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/users/all` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  getUsersId({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = { status: `cms/users/detail/${id}` };
      useIPA.get(param).then((response) => {
        resolve(response.data.data);
      });
    });
  },
  formUsersPost({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const param = {
        rawData: {
          fullname: formData.full_name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        },
        url: "cms/users/create",
        id: formData.id,
      };
      useIPA.postput(param).then(
        (response) => {
          // router.push({ path: '/cms/users/distributor/edit/'+ response.data.data.id}).then(() => { router.go(0) })
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
  formUsersPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const param = {
        rawData: {
          fullname: formData.full_name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        },
        url: "cms/users/update",
        id: formData.id,
      };
      useIPA.postput(param).then(
        (response) => {
          // router.push({ path: '/cms/users/distributor/edit/'+ response.data.data.id}).then(() => { router.go(0) })
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
  usersDelete({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData();
      const param = {
        rawData: FormInput,
        url: "cms/users/destroy",
        id: formData.id,
      };
      useIPA.delete(param).then(
        (response) => {
          // router.push({ path: "/cms/users/distributor/list" });
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
