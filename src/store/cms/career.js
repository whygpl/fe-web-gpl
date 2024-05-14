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
  },
  list: {
    items: [],
    columns: [
      {
        label: 'No',
         field: 'no', sortable: false,
      },
      {
        label: 'Posisi',
        field: 'career_categorys_name',
      },
      {
        label: 'Karir',
        field: 'title',
      },
      {
        label: 'Karir EN',
        field: 'title_en',
      },
      {
        label: 'Tenggat Waktu',
        field: 'deadline',
      },
      {
        label: 'Tanggal Update',
        field: 'updated_at',
      },
      {
        label: 'Aksi',
        field: 'actions',
      }
    ],
    rows: []
  },
  apply: {
    items: [],
    columns: [
      {
        label: 'No',
         field: 'id', sortable: false,
      },
      {
        label: 'Karir',
        field: 'join_name',
        html: true,
      },
      {
        label: 'Pelamar',
        field: 'name',
      },
      // {
      //   label: 'Jenis Kelamin',
      //   field: 'gender',
      // },
      // {
      //   label: 'Tempat Lahir',
      //   field: 'birth_date',
      // },
      // {
      //   label: 'Tanggal Lahir',
      //   field: 'birth_place',
      // },
      // {
      //   label: 'Agama',
      //   field: 'religion',
      // },
      // {
      //   label: 'Status Perkawinan',
      //   field: 'married',
      // },
      // {
      //   label: 'Pendidikan Terakhir',
      //   field: 'education',
      // },
      {
        label: 'Alamat',
        field: 'address',
      },
      // {
      //   label: 'Provinsi',
      //   field: 'province',
      // },
      // {
      //   label: 'Kota',
      //   field: 'regency',
      // },
      // {
      //   label: 'Kecamatan',
      //   field: 'district',
      // },
      // {
      //   label: 'Kelurahan',
      //   field: 'village',
      // },
      {
        label: 'Email',
        field: 'email',
      },
      {
        label: 'Nomor HP',
        field: 'mobile',
      },
      {
        label: 'Nomor HP 2',
        field: 'mobile_sec',
      },
      {
        label: 'Pengalaman Kerja',
        field: 'experience',
      },
      {
        label: 'Perusahaan Terakhir',
        field: 'last_company',
      },
      {
        label: 'Jabatan Terakhir',
        field: 'last_job',
      },
      {
        label: 'Gaji Terakhir',
        field: 'last_sallary',
      },
      {
        label: 'CV',
        field: 'cv',
        html: true,
      },
      {
        label: 'Foto',
        field: 'photo',
        html: true,
      },
    ],
    rows: []
  },
  category: {
    items: [],
    columns: [
      {
        label: 'No',
         field: 'no', sortable: false,
      },
      {
        label: 'Kategori/Posisi',
        field: 'title',
      },
      {
        label: 'Kategori/Posisi EN',
        field: 'title_en',
      },
      {
        label: 'Tanggal Update',
        field: 'updated_at',
      },
      {
        label: 'Aksi',
        field: 'actions',
      }
    ],
    rows: []
  }
})

// getters
const getters = {}

// actions
const actions = {
  getCareer ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/career/career'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getList ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/career/list'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getApply ({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = {status: `cms/career/apply?join_id=${id}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  getCareerId ({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = {status: `cms/career/detail?id=${id}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data[0])
      })
    })
  },
  getCategoryId ({ commit }, id) {
    return new Promise((resolve, reject) => {
      let param = {status: `cms/career/category?id=${id}`}
      useIPA.get(param).then(response => {
        resolve(response.data.data[0])
      })
    })
  },
  getCategory ({ commit }) {
    return new Promise((resolve, reject) => {
      let param = {status: 'cms/career/category'}
      useIPA.get(param).then(response => {
        resolve(response.data.data)
      })
    })
  },
  formCareerPostPut({ commit }, formData) {
		return new Promise((resolve, reject) => {
      console.log(formData)
      const FormInput = new FormData()
			FormInput.set('title', formData.title)
			FormInput.set('title_en', formData.title_en)
			FormInput.set('description', formData.description)
			FormInput.set('description_en', formData.description_en)
			FormInput.set('h_title', formData.h_title)
			FormInput.set('h_title_en', formData.h_title_en)
			FormInput.set('h_description', formData.h_description)
			FormInput.set('h_description_en', formData.h_description_en)
			FormInput.set('save_as', formData.save_as)
      if (formData.setImage_1 === 'upload') {
        FormInput.append('img_url_1', formData.img_url_1)
      } else {
        FormInput.set('img_url_1', formData.imageUrl_1)
      }
      if (formData.h_setImage_1 === 'upload') {
        FormInput.append('h_img_url_1', formData.h_img_url_1)
      } else {
        FormInput.set('h_img_url_1', formData.h_imageUrl_1)
      }
      const param = { rawData: FormInput, url: 'cms/career/update', id: '' }
      useIPA.postput(param)
			.then(response => {
        router.push({ name: 'CmsCareerEdit' })
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
  formJoinPostPut ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
			FormInput.set('career_category_id', formData.career_category_id)
			FormInput.set('deadline', formData.deadline)
			FormInput.set('title', formData.title)
			FormInput.set('title_en', formData.title_en)
			FormInput.set('deadline', formData.deadline)
      FormInput.set('deadline', formData.deadline)
      FormInput.set('subtitle', formData.subtitle)
      FormInput.set('subtitle_en', formData.subtitle_en) 
      FormInput.set('description', JSON.stringify(formData.description))
      FormInput.set('description_en', JSON.stringify(formData.description_en))  
      FormInput.set('requierement', JSON.stringify(formData.requierement))
      FormInput.set('requierement_en', JSON.stringify(formData.requierement_en)) 
			FormInput.set('save_as', formData.save_as)
      const param = { rawData: FormInput, url: 'cms/career/join/update', id: formData.id }
      useIPA.postid(param)
			.then(response => {
        // router.push({ path: '/cms/career/detail/edit/'+ response.data.data.id}).then(() => { router.go(0) })
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
  joinDelete ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
      const param = { rawData: FormInput, url: 'cms/career/join/delete', id: formData.id }
      useIPA.postid(param)
			.then(response => {
        router.push({ path: '/cms/career/list'})
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
  formCategoryPostPut ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
			FormInput.set('title', formData.title)
			FormInput.set('title_en', formData.title_en)
			FormInput.set('save_as', formData.save_as)
      const param = { rawData: FormInput, url: 'cms/career/category/update', id: formData.id }
      useIPA.postid(param)
			.then(response => {
        router.push({ path: '/cms/career/category/edit/'+ response.data.data.id}).then(() => { router.go(0) })
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
  categoryDelete ({ commit }, formData) {
		return new Promise((resolve, reject) => {
      const FormInput = new FormData()
      const param = { rawData: FormInput, url: 'cms/career/category/delete', id: formData.id }
      useIPA.postid(param)
			.then(response => {
        router.push({ path: '/cms/career/category/list'})
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
