import useIPA from '@/auth/jwt/useJwt'
import router from '@/router/index.js'

// initial state
const state = () => ({
  items: [],
  products: {
    columns: [
      {
        label: 'Title',
        field: 'title',
      },
      {
        label: 'Title EN',
        field: 'title_en',
      }
    ],
    rows: []
  }
})

// getters
const getters = {}

// actions
const actions = {
  getHero ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/home/hero'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getAbout ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/home/about'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getProduct ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/home/product'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getQuality ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/home/quality'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  formHeroPostPut ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
			FormInput.set('colour_1', formData.colour_1)
			FormInput.set('title_1', formData.title_1)
			FormInput.set('title_en_1', formData.title_en_1)
			FormInput.set('colour_2', formData.colour_2)
			FormInput.set('title_2', formData.title_2)
			FormInput.set('title_en_2', formData.title_en_2)
			FormInput.set('colour_3', formData.colour_3)
			FormInput.set('title_3', formData.title_3)
			FormInput.set('title_en_3', formData.title_en_3)
			FormInput.set('description_1', formData.description_1)
			FormInput.set('description_en_1', formData.description_en_1)
			FormInput.set('description_2', formData.description_2)
			FormInput.set('description_en_2', formData.description_en_2)
			FormInput.set('description_3', formData.description_3)
			FormInput.set('description_en_3', formData.description_en_3)
			FormInput.set('save_as', formData.save_as)
      if (formData.setImageLG_1 === 'upload') {
        FormInput.append('img_url_lg_1', formData.img_url_lg_1)
      } else {
        FormInput.set('img_url_lg_1', formData.imageUrlLG_1)
      }
      if (formData.setImageLG_2 === 'upload') {
        FormInput.append('img_url_lg_2', formData.img_url_lg_2)
      } else {
        FormInput.set('img_url_lg_2', formData.imageUrlLG_2)
      }
      if (formData.setImageLG_3 === 'upload') {
        FormInput.append('img_url_lg_3', formData.img_url_lg_3)
      } else {
        FormInput.set('img_url_lg_3', formData.imageUrlLG_3)
      }
      //MD
      if (formData.setImageMD_1 === 'upload') {
        FormInput.append('img_url_md_1', formData.img_url_md_1)
      } else {
        FormInput.set('img_url_md_1', formData.imageUrlMD_1)
      }
      if (formData.setImageMD_2 === 'upload') {
        FormInput.append('img_url_md_2', formData.img_url_md_2)
      } else {
        FormInput.set('img_url_md_2', formData.imageUrlMD_2)
      }
      if (formData.setImageMD_3 === 'upload') {
        FormInput.append('img_url_md_3', formData.img_url_md_3)
      } else {
        FormInput.set('img_url_md_3', formData.imageUrlMD_3)
      }
      //SM
      if (formData.setImageSM_1 === 'upload') {
        FormInput.append('img_url_sm_1', formData.img_url_sm_1)
      } else {
        FormInput.set('img_url_sm_1', formData.imageUrlSM_1)
      }
      if (formData.setImageSM_2 === 'upload') {
        FormInput.append('img_url_sm_2', formData.img_url_sm_2)
      } else {
        FormInput.set('img_url_sm_2', formData.imageUrlSM_2)
      }
      if (formData.setImageSM_3 === 'upload') {
        FormInput.append('img_url_sm_3', formData.img_url_sm_3)
      } else {
        FormInput.set('img_url_sm_3', formData.imageUrlSM_3)
      }
      const param = { rawData: FormInput, url: 'cms/home/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsHomeSliderEdit' })
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
  formAboutPostPut ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
			FormInput.set('page_title', formData.page_title)
			FormInput.set('page_title_en', formData.page_title_en)
			FormInput.set('title', formData.title)
			FormInput.set('title_en', formData.title_en)
			FormInput.set('description', formData.description)
			FormInput.set('description_en', formData.description_en)
			FormInput.set('img_url_id_1', formData.img_url_id_1)
			FormInput.set('img_url_id_2', formData.img_url_id_2)
			FormInput.set('img_url_id_3', formData.img_url_id_3)
			FormInput.set('save_as', formData.save_as)
      if (formData.setImage_1 === 'upload') {
        FormInput.append('img_url_1', formData.img_url_1)
      } else {
        FormInput.set('img_url_1', formData.imageUrl_1)
      }
      if (formData.setImage_2 === 'upload') {
        FormInput.append('img_url_2', formData.img_url_2)
      } else {
        FormInput.set('img_url_2', formData.imageUrl_2)
      }
      if (formData.setImage_3 === 'upload') {
        FormInput.append('img_url_3', formData.img_url_3)
      } else {
        FormInput.set('img_url_3', formData.imageUrl_3)
      }
      const param = { rawData: FormInput, url: 'cms/home/about/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsHomeAboutUsEdit' })
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
  formProductPostPut ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
			FormInput.set('category_1', formData.category_1)
			FormInput.set('category_en_1', formData.category_en_1)
			FormInput.set('product_type_1', formData.product_type_1)
			FormInput.set('product_type_en_1', formData.product_type_en_1)
			FormInput.set('title_1', formData.title_1)
			FormInput.set('title_en_1', formData.title_en_1)
			FormInput.set('category_2', formData.category_2)
			FormInput.set('category_en_2', formData.category_en_2)
			FormInput.set('product_type_2', formData.product_type_2)
			FormInput.set('product_type_en_2', formData.product_type_en_2)
			FormInput.set('title_2', formData.title_2)
			FormInput.set('title_en_2', formData.title_en_2)
			FormInput.set('description_1', formData.description_1)
			FormInput.set('description_en_1', formData.description_en_1)
			FormInput.set('description_2', formData.description_2)
			FormInput.set('description_en_2', formData.description_en_2)
			FormInput.set('save_as', formData.save_as)
      if (formData.setImageLG_1 === 'upload') {
        FormInput.append('img_url_lg_1', formData.img_url_lg_1)
      } else {
        FormInput.set('img_url_lg_1', formData.imageUrlLG_1)
      }
      if (formData.setImageLG_2 === 'upload') {
        FormInput.append('img_url_lg_2', formData.img_url_lg_2)
      } else {
        FormInput.set('img_url_lg_2', formData.imageUrlLG_2)
      }
      //MD
      if (formData.setImageMD_1 === 'upload') {
        FormInput.append('img_url_md_1', formData.img_url_md_1)
      } else {
        FormInput.set('img_url_md_1', formData.imageUrlMD_1)
      }
      if (formData.setImageMD_2 === 'upload') {
        FormInput.append('img_url_md_2', formData.img_url_md_2)
      } else {
        FormInput.set('img_url_md_2', formData.imageUrlMD_2)
      }
      //SM
      if (formData.setImageSM_1 === 'upload') {
        FormInput.append('img_url_sm_1', formData.img_url_sm_1)
      } else {
        FormInput.set('img_url_sm_1', formData.imageUrlSM_1)
      }
      if (formData.setImageSM_2 === 'upload') {
        FormInput.append('img_url_sm_2', formData.img_url_sm_2)
      } else {
        FormInput.set('img_url_sm_2', formData.imageUrlSM_2)
      }
      const param = { rawData: FormInput, url: 'cms/home/product/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsHomeProductEdit' })
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
  formAQPostPut ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
			FormInput.set('name_1', formData.name_1)
			FormInput.set('name_en_1', formData.name_en_1)
			FormInput.set('name_2', formData.name_2)
			FormInput.set('name_en_2', formData.name_en_2)
			FormInput.set('name_3', formData.name_3)
			FormInput.set('name_en_3', formData.name_en_3)
			FormInput.set('img_url_id_1', formData.img_url_id_1)
			FormInput.set('img_url_id_2', formData.img_url_id_2)
			FormInput.set('img_url_id_3', formData.img_url_id_3)
			FormInput.set('img_url_id_c_1', formData.img_url_id_c_1)
			FormInput.set('img_url_id_c_2', formData.img_url_id_c_2)
			FormInput.set('img_url_id_c_3', formData.img_url_id_c_3)
			FormInput.set('img_url_id_c_4', formData.img_url_id_c_4)
      FormInput.set('img_url_id_c_5', formData.img_url_id_c_5)
			FormInput.set('save_as', formData.save_as)
      if (formData.setImage_1 === 'upload') {
        FormInput.append('img_url_1', formData.img_url_1)
      } else {
        FormInput.set('img_url_1', formData.imageUrl_1)
      }
      if (formData.setImage_2 === 'upload') {
        FormInput.append('img_url_2', formData.img_url_2)
      } else {
        FormInput.set('img_url_2', formData.imageUrl_2)
      }
      if (formData.setImage_3 === 'upload') {
        FormInput.append('img_url_3', formData.img_url_3)
      } else {
        FormInput.set('img_url_3', formData.imageUrl_3)
      }
      if (formData.setImage_c_1 === 'upload') {
        FormInput.append('img_url_c_1', formData.img_url_c_1)
      } else {
        FormInput.set('img_url_c_1', formData.imageUrl_c_1)
      }
      if (formData.setImage_c_2 === 'upload') {
        FormInput.append('img_url_c_2', formData.img_url_c_2)
      } else {
        FormInput.set('img_url_c_2', formData.imageUrl_c_2)
      }
      if (formData.setImage_c_3 === 'upload') {
        FormInput.append('img_url_c_3', formData.img_url_c_3)
      } else {
        FormInput.set('img_url_c_3', formData.imageUrl_c_3)
      }
      if (formData.setImage_c_4 === 'upload') {
        FormInput.append('img_url_c_4', formData.img_url_c_4)
      } else {
        FormInput.set('img_url_c_4', formData.imageUrl_c_4)
      }
      if (formData.setImage_c_5 === 'upload') {
        FormInput.append('img_url_c_5', formData.img_url_c_5)
      } else {
        FormInput.set('img_url_c_5', formData.imageUrl_c_5)
      }
      const param = { rawData: FormInput, url: 'cms/home/aq/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsHomeQualityEdit' })
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
    state.products.rows = [data]
    // console.log(state.products.columns)
    // console.log(state.products.rows)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
