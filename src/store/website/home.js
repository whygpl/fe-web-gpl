import useIPA from '@/auth/jwt/useJwt'
import router from '@/router/index.js'

// initial state
const state = () => ({
  items: []
})

// getters
const getters = {}

// actions
const actions = {
  get ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/home/all?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  getAll ({ commit }, params) {
    let param = {status: `website/home/all?status=${params}`};
    useIPA.get(param).then(response => {
      const data = response.data.data.content
      localStorage.setItem(`home${params}`, JSON.stringify(data))
      commit('setData', {...data})
    })
    // return new Promise((resolve, reject) => {
    //     let param = {status: `website/home/all?status=${params}`};
    //     useIPA.get(param).then(response => {
    //         resolve(response.data.data.content)
    //     })
    // })
  }
}

// mutations
const mutations = {
  setData (state, data) {
    state.items = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
