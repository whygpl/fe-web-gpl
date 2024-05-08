import useIPA from '@/auth/jwt/useJwt'
import router from '@/router/index.js'

// initial state
const state = () => ({
  items: [],
  // start: 20,
  // totalRows: 1,
  // fields: [
  //   { key: 'fullname', label: 'Nama Lengkap', sortable: true },
  //   { key: 'health_facility_name', label: 'Fasilitas Kesehatan', sortable: true },
  //   { key: 'position_name', label: 'Jabatan', sortable: true },
  //   { key: 'sex_name', label: 'Kelamin', sortable: true },
  //   { key: 'birth_date', label: 'Tanggal Lahir', sortable: true },
  //   { key: 'address', label: 'Alamat', sortable: true },
  //   { key: 'is_delete', label: 'Status', sortable: true },
  //   { key: 'action', label: 'Aksi'},
  // ],
  // pageOptions: [20, 50, 100],
  // sortOptions: [],
  // options:{
  //   employee:[]
  // }
})

// getters
const getters = {}

// actions
const actions = {
  // getParam({ commit }, params) {
  //   return new Promise((resolve, reject) => {
  //     let param = {
  //       status: `hr/employee/doctor_detail?health_facility_item_id=${params}`
  //     }
  //     useIPA.get(param).then((response) => {
  //       const Param = {
  //         rows: response.data.data
  //       }
  //       commit('setParamEmployee', { ...Param })
  //     })
  //   })
  // },
  getAll ({ commit }) {
    let param = {status: `home/hero`};

    useIPA.get(param).then(response => {
      const data = {
        rows : response.data.data
      }
      commit('setData', {...data})
    })
  },
  // getAll ({ commit }, params) {
  //   let queryParams = [];
  
  //   if (params.offset) {
  //     queryParams.push(`offset=${params.offset}`);
  //   } else if (params.offset === 0) {
  //     queryParams.push(`offset=${params.offset}`);
  //   }
  
  //   if (params.limit) {
  //     queryParams.push(`limit=${params.limit}`);
  //   }
  
  //   if (params.health_facility_id) {
  //     queryParams.push(`health_facility_id=${params.health_facility_id}`);
  //   }
  
  //   if (params.position_id) {
  //     queryParams.push(`position_id=${params.position_id}`);
  //   }
    
  //   let paramsall = queryParams.join('&');
  
  //   let param = {status: `home/hero${paramsall}`};

  //   useIPA.get(param).then(response => {
  //     const data = {
  //       rows : response.data.data
  //     }
  //     commit('setData', {...data})
  //   })
  // },
  // getById ({ commit }, id) {
	// 	return new Promise((resolve, reject) => {
  //     let param = {status: 'master/bank/' + id}
  //     useIPA.get(param).then(response => {
  //         resolve(response.data.data)
  //     })
  //   })
  // },
  // formPostPut ({ commit }, formData) {
	// 	return new Promise((resolve, reject) => {
  //     const rawData = {
  //       f_title: formData.f_title,
  //       name: formData.name,
  //       fullname: formData.fullname,
  //       b_title: formData.b_title,
  //       birth_date: formData.birth_date,
  //       sex: formData.sex,
  //       address: formData.address,
  //       position_id: formData.position_id,
  //       date_expired: formData.date_expired
	// 		}
  //     let url = 'hr/employee/create'
  //     if (formData.id) {
  //       url = 'hr/employee/update'
  //     }
  //     const param = { rawData: rawData, url: url, id: formData.id }
  //     useIPA.postput(param)
	// 		.then(response => {
  //       if (response.data.hasErrors) {
  //         reject(response.data.message)
  //       } else {
  //         resolve(response.data)
  //       }
  //     },
  //     error => {
  //       if (error.response.data.hasOwnProperty('hasErrors')) {
  //         reject(error.response.data.message)
  //       } else {
  //         reject(error.message)
  //       }
  //     })
	// 	})
	// },
  // remove ({ commit }, id) {
	// 	return new Promise((resolve, reject) => {
  //     const rawData = {
  //       is_delete: 1,
	// 		}
  //     const param = { rawData: rawData, url: 'hr/employee/delete', id: id }
  //     useIPA.delete(param)
	// 		.then(response => {
  //       if (response.data.hasErrors) {
  //         reject(response.data.message)
  //       } else {
  //         resolve(response.data)
  //       }
  //     },
  //     error => {
  //       if (error.response.data.hasOwnProperty('hasErrors')) {
  //         reject(error.response.data.message)
  //       } else {
  //         reject(error.message)
  //       }
  //     })
	// 	})
	// }
}

// mutations
const mutations = {
  setData (state, data) {
    console.log(data)
    state.items = data.rows.rows
    // state.totalRows = data.rows.iTotal
    // state.start = data.rows.start
  },
  // setParamEmployee (state, data) {
  //   state.options.employee = []
  //   for (let i = 0; i < data.rows.length; i++) {
  //     const option = []
  //     for (const key in data.rows[i]) {
  //       if (key === 'id') { option['value'] = data.rows[i][key] } else if (key === 'fullname') { option['title'] = data.rows[i][key] } else if (key === 'id') { option['oid'] = data.rows[i][key] }
  //     }
  //     state.options.employee.push(Object.assign({}, option))
  //   }
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
