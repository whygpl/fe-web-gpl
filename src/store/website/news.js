import useIPA from '@/auth/jwt/useJwt'
import router from '@/router/index.js'

// initial state
const state = () => ({
  items: [],
})

// getters
const getters = {}

// actions
const actions = {
  get ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/news/all?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getById ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/news/detail?id=${params.id}&status=${params.status}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getSearch ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/news/detail?title=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getAll ({ commit }, params) {
    let param = {status: `website/news/all?status=${params}`};

    useIPA.get(param).then(response => {
      const data = response.data.data
      // console.log(data)

      localStorage.setItem(`news${params}`, JSON.stringify(data))
      commit('setData', {...data})
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  }
}

// mutations
const mutations = {
  setData (state, newData) {
    // console.log(newData)
    state.items = newData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
