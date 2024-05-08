import useIPA from '@/auth/jwt/useJwt'
import router from '@/router/index.js'

// initial state
const state = () => ({
  items: [],
  options: {
    province: [],
    regency: [],
    district: [],
    village: []
  }
})

// getters
const getters = {}

// actions
const actions = {
  get ({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/career/all?status=${params}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  formPostPut ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
			FormInput.set('join_id', formData.career_join_id)
			FormInput.set('name', formData.name)
			FormInput.set('gender', formData.gender)
			FormInput.set('birth_place', formData.birth_place)
			FormInput.set('birth_date', formData.birth_date)
			FormInput.set('religion', formData.religion)
			FormInput.set('married', formData.married)
			FormInput.set('education', formData.education)
			FormInput.set('address', formData.address)
			FormInput.set('province', formData.province)
			FormInput.set('regency', formData.regency)
			FormInput.set('district', formData.district)
			FormInput.set('village', formData.village)
			FormInput.set('email', formData.email)
			FormInput.set('mobile', formData.mobile)
			FormInput.set('mobile_sec', formData.mobile_sec)
			FormInput.set('experience', formData.experience)
			FormInput.set('last_company', formData.last_company)
			FormInput.set('last_job', formData.last_position)
			FormInput.set('last_sallary', formData.last_salary)
      FormInput.append('img_url', formData.photo)
      FormInput.append('cv_url', formData.cv)
      const param = { rawData: FormInput, url: 'website/career/submit', id: '' }
      useIPA.postput(param)
			.then(response => {
        if (response.data.hasErrors) {
          reject(response.data.message)
        } else {
          if (response.data) {
            router.push({ name: 'CareerSuccessView' })
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
  getAll ({ commit }, params) {
    let param = {status: `website/career/all?status=${params}`};

    useIPA.get(param).then(response => {
      const data = response.data.data
      // console.log(data)

      localStorage.setItem(`career${params}`, JSON.stringify(data))
      commit('setData', {...data})
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  },

  getById ({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = {status: `website/career/detail?id=${id}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data[0])
      })
    })
  },

  getParamProvince({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {
        status: `website/province/detail?flag_active=1`
      }
      useIPA.get(param).then((response) => {
        const Param = {
          rows: response.data.data
        }
        if (params === 'province') {
          commit('setParamProvince', { ...Param })
        }
      })
    })
  },
  getParamRegency({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {
        status: `website/regency/detail?id_province=${params}`
      }
      useIPA.get(param).then((response) => {
        const Param = {
          rows: response.data.data
        }
        commit('setParamRegency', { ...Param })
      })
    })
  },
  getParamDistrict({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {
        status: `website/district/detail?id_regency=${params}`
      }
      useIPA.get(param).then((response) => {
        const Param = {
          rows: response.data.data
        }
        commit('setParamDistrict', { ...Param })
      })
    })
  },
  getParamVillage({ commit }, params) {
    return new Promise((resolve, reject) => {
      let param = {
        status: `website/village/detail?id_district=${params}`
      }
      useIPA.get(param).then((response) => {
        const Param = {
          rows: response.data.data
        }
        commit('setParamVillage', { ...Param })
      })
    })
  },
}

// mutations
const mutations = {
  setData (state, newData) {
    // console.log(newData)
    state.items = newData
  },
  setParamProvince(state, data) {
    state.options.province = []
    const option = []
    for (let i = 0; i < data.rows.length; i++) {
      for (const key in data.rows[i]) {
        if (key === 'id_province') { option['value'] = data.rows[i][key] } else if (key === 'nm_province') { option['title'] = data.rows[i][key] } else if (key === 'id_province') { option['oid'] = data.rows[i][key] }
      }
      state.options.province.push(Object.assign({}, option))
    }
  },
  setParamRegency(state, data) {
    state.options.regency = []
    const option = []
    for (let i = 0; i < data.rows.length; i++) {
      for (const key in data.rows[i]) {
        if (key === 'id_regency') { option['value'] = data.rows[i][key] } else if (key === 'nm_regency') { option['title'] = data.rows[i][key] } else if (key === 'id_regency') { option['oid'] = data.rows[i][key] }
      }
      state.options.regency.push(Object.assign({}, option))
    }
  },
  setParamDistrict(state, data) {
    state.options.district = []
    const option = []
    for (let i = 0; i < data.rows.length; i++) {
      for (const key in data.rows[i]) {
        if (key === 'id_district') { option['value'] = data.rows[i][key] } else if (key === 'nm_district') { option['title'] = data.rows[i][key] } else if (key === 'id_district') { option['oid'] = data.rows[i][key] }
      }
      state.options.district.push(Object.assign({}, option))
    }
  },
  setParamVillage(state, data) {
    state.options.village = []
    const option = []
    for (let i = 0; i < data.rows.length; i++) {
      for (const key in data.rows[i]) {
        if (key === 'id_village') { option['value'] = data.rows[i][key] } else if (key === 'nm_village') { option['title'] = data.rows[i][key] } else if (key === 'id_village') { option['oid'] = data.rows[i][key] }
      }
      state.options.village.push(Object.assign({}, option))
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
