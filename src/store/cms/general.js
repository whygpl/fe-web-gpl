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
  getGeneral ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/general/general'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getPrivacy ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/general/privacy'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getFarma ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/general/farma'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getFaq ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/general/faq'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getTerms ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/general/terms'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getSmtp ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/general/smtp'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
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
  
  formGeneralPostPut ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
      FormInput.set('distributor_map_embed',formData.distributor_map_embed)
      FormInput.set('distributor_address',formData.distributor_address)
      FormInput.set('distributor_address_en',formData.distributor_address_en)
      FormInput.set('distributor_fax',formData.distributor_fax)
      FormInput.set('distributor_fax_en',formData.distributor_fax_en)
      FormInput.set('distributor_name',formData.distributor_name)
      FormInput.set('distributor_name_en',formData.distributor_name_en)
      FormInput.set('distributor_phone',formData.distributor_phone)
      FormInput.set('distributor_phone_en',formData.distributor_phone_en)
      FormInput.set('factory_address',formData.factory_address)
      FormInput.set('factory_address_en',formData.factory_address_en)
      FormInput.set('factory_fax',formData.factory_fax)
      FormInput.set('factory_fax_en',formData.factory_fax_en)
      FormInput.set('factory_map_embed',formData.factory_map_embed)
      FormInput.set('factory_name',formData.factory_name)
      FormInput.set('factory_name_en',formData.factory_name_en)
      FormInput.set('factory_phone',formData.factory_phone)
      FormInput.set('factory_phone_en',formData.factory_phone_en)
      FormInput.set('image_url_footer',formData.image_url_footer)
      FormInput.set('image_url_navbar',formData.image_url_navbar)
      FormInput.set('instagram_url',formData.instagram_url)
      FormInput.set('youtube_url',formData.youtube_url)
      FormInput.set('office_address',formData.office_address)
      FormInput.set('office_address_en',formData.office_address_en)
      FormInput.set('office_fax',formData.office_fax)
      FormInput.set('office_fax_en',formData.office_fax_en)
      FormInput.set('office_map_embed',formData.office_map_embed)
      FormInput.set('office_name',formData.office_name)
      FormInput.set('office_name_en',formData.office_name_en)
      FormInput.set('office_phone',formData.office_phone)
      FormInput.set('office_phone_en',formData.office_phone_en)
      FormInput.set('store_url',formData.store_url)
      FormInput.set('whatsapp_number',formData.whatsapp_number)
      FormInput.set('email',formData.email)
      FormInput.set('save_as', formData.save_as)
      const param = { rawData: FormInput, url: 'cms/general/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsGeneralEdit' })
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
  formPrivacyPostPut({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
      FormInput.set('contact', JSON.stringify(formData.contact)) 
      FormInput.set('page',formData.page) 
      FormInput.set('page_en',formData.page_en) 
      FormInput.set('save_as', formData.save_as)
      const param = { rawData: FormInput, url: 'cms/general/privacy/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsGeneralPrivacyEdit' })
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
  formTermsPostPut({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
      FormInput.set('contact', JSON.stringify(formData.contact)) 
      FormInput.set('page',formData.page) 
      FormInput.set('page_en',formData.page_en) 
      FormInput.set('save_as', formData.save_as)
      const param = { rawData: FormInput, url: 'cms/general/terms/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsGeneralTermsEdit' })
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
  formFarmaPostPut({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
      let contact = {
        paragraph_1:formData.paragraph_1,
        paragraph_en_1:formData.paragraph_en_1,
        paragraph_2:formData.paragraph_2,
        paragraph_en_2:formData.paragraph_en_2,
        paragraph_3:formData.paragraph_3,
        paragraph_en_3:formData.paragraph_en_3,
      }
      FormInput.set('contact', JSON.stringify(contact)) 
      FormInput.set('page',formData.page) 
      FormInput.set('page_en',formData.page_en) 
      FormInput.set('save_as', formData.save_as)
      const param = { rawData: FormInput, url: 'cms/general/farma/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsGeneralFarmaEdit' })
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
  formFAQPostPut({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
      FormInput.set('contact', JSON.stringify(formData.contact)) 
      FormInput.set('title',formData.title) 
      FormInput.set('title_en',formData.title_en) 
      FormInput.set('page',formData.page) 
      FormInput.set('page_en',formData.page_en) 
      FormInput.set('save_as', formData.save_as)
      const param = { rawData: FormInput, url: 'cms/general/faq/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsGeneralFAQEdit' })
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
  formSMTPPostPut({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
      FormInput.set('host', formData.host)
      FormInput.set('emailhost', formData.emailhost)
      FormInput.set('password', formData.password)
      FormInput.set('secure', formData.secure)
      FormInput.set('port', formData.port)
      FormInput.set('sendquestion', formData.sendquestion)
      FormInput.set('sendadvice', formData.sendadvice)
      FormInput.set('sendany', formData.sendany)
      FormInput.set('save_as', formData.save_as)
      const param = { rawData: FormInput, url: 'cms/general/smtp/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsSMTPEdit' })
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
	}
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
