import useIPA from '@/auth/jwt/useJwt'
import router from '@/router/index.js'

// initial state
const state = () => ({
  type_items: [],
  type_items_by_id: [],
  category_items: [],
  category_items_by_product_type_id: [],
  group_items: [],
  detail_items: [],
})

// getters
const getters = {}

// actions
const actions = {
  // TYPE
  getType ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/product/type?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  getTypeById ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/product/type?id=${params.id}&status=${params.status}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  getCategory ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/product/category?product_type_id=${params.id}&status=${params.status}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  getGroup ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/product/group?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  getDetail ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/product/detail`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  getDetailHealths ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/product/detailhealth?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  getDetailDrugs ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/product/detaildrug?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  
  getCategoryByProduct_type_id ({ commit }, id) {
    let param = {status: `website/product/category?product_type_id=${id}`}

    useIPA.get(param).then(response => {
      const data = response.data.data.content
      localStorage.setItem('category_by_product_type_id', JSON.stringify(data))
      commit('setCategoryByTypeId', {...data})
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  },

  getAllDetailResolve ({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/product/search?name=${id}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },

  getById ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/product/detail?id=${params.id}&status=${params.status}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  }
}

// mutations
const mutations = {
  setTypeData (state, newData) {
    state.type_items = newData
  },
  setTypeByIdData (state, newData) {
    state.type_items_by_id = newData
  },

  setCategory (state, newData) {
    state.category_items = newData
  },
  setCategoryByTypeId (state, newData) {
    state.category_items_by_product_type_id = newData
  },

  setGroup (state, newData) {
    state.group_items = newData
  },

  setDetail (state, newData) {
    state.detail_items = newData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
