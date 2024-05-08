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
      let param = {status: `website/business/all?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getMitra ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/business/mitra?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getAll ({ commit }, params) {
    let param = {status: `website/business/all?status=${params}`};

    useIPA.get(param).then(response => {
      const data = response.data.data
      // console.log(data)

      localStorage.setItem(`business${params}`, JSON.stringify(data))
      commit('setData', {...data})
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  },
  getAllMitra ({ commit }, params) {
    let param = {status: `website/business/mitra?status=${params}`};

    useIPA.get(param).then(response => {
      const data = response.data.data
      // console.log(data)

      localStorage.setItem(`businessmitra${params}`, JSON.stringify(data))
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
