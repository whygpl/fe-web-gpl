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
      let param = {status: `website/general?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data.content)
      })
    })
  },
  getExtra ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/general/page?id=${params.id}&status=${params.status}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  formSMTPPostPut ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
			FormInput.set('name', formData.name)
			FormInput.set('email', formData.email)
			FormInput.set('subject', formData.subject)
			FormInput.set('message', formData.message)
			FormInput.set('any', formData.any)
      const param = { rawData: FormInput, url: 'website/general/sendmail', id: '' }
      useIPA.postput(param)
			.then(response => {
        // router.push({ name: 'CmsNewsList' })
        if (response.data.hasErrors) {
          reject(response.data.message)
        } else {
          resolve(response.data)
        }
      },
      error => {
        if (error.response.data.hasOwnProperty('hasErrors')) {
          reject(error.response.data.message)
        } else {
          reject(error.message)
        }
      })
		})
	},
  getAll ({ commit }) {
    let param = {status: `website/general`};

    useIPA.get(param).then(response => {
      const data = response.data.data.content
      localStorage.setItem('general', JSON.stringify(data))
      commit('setData', {...data})
    })
  },
  formPostPut({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const FormInput = new FormData()
      FormInput.set('nama', formData.nama)
      FormInput.set('namaprak', formData.namaprak)
      
      const param = { rawData: FormInput, url: 'general/submitbpom', id: '' }
      useIPA.postput(param)
        .then(response => {
          if (response.data.hasErrors) {
            reject(response.data.message)
          } else {
            if (response.data) {
              router.push({ name: 'ProductTypeDrugView' })
            }
          }
        },
          error => {
            if (error.response.data.hasOwnProperty('hasErrors')) {
              reject(error.response.data.message)
            } else {
              reject(error.message)
            }
          })
    })
  },
}

// mutations
const mutations = {
  setData (state, data) {
    // console.log(data)
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
