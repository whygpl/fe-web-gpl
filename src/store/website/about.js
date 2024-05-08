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
      let param = {status: `website/about/all?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  getAll ({ commit }, params) {
    let param = {status: `website/about/all?status=${params}`};
    useIPA.get(param).then(response => {
      const data = response.data.data.content
      localStorage.setItem(`about${params}`, JSON.stringify(data))
      commit('setData', {...data})
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  },
}

// mutations
const mutations = {
  setData (state, newData) {
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
