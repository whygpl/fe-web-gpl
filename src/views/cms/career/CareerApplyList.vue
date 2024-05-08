<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out" :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="CR-CareerList" />
    </div>
    <!-- Main Content -->
    <div class="flex-1">
      <!-- Header Nav -->
      <div class="bg-white rounded-box m-4">
        <Navbar />
      </div>
      <!-- Content -->
      <div class="bg-white p-8 m-4 min-h-screen rounded-box place-items-center">
        <div class="flex flex-col w-full">
          <div class="mb-10">
            <button class="btn btn-primary" @click="exportExcel">Unduh Data</button>
          </div>
          <div class="w-full">
            <vue-good-table :columns="columns" :rows="rows" 
            :search-options="{
              enabled: true
            }"
             :sort-options="{
              enabled: false,
            }"
            :pagination-options="{
              enabled: true,
              mode: 'records',
              perPage: 10,
              position: 'top',
              perPageDropdown: [5, 10, 15],
              dropdownAllowAll: false,
              setCurrentPage: 1,
              jumpFirstOrLast : true,
              firstLabel : 'First Page',
              lastLabel : 'Last Page',
              nextLabel: 'next',
              prevLabel: 'prev',
              rowsPerPageLabel: 'Rows per page',
              ofLabel: 'of',
              pageLabel: 'page', // for 'pages' mode
              allLabel: 'All',
              infoFn: (params) => `Page ${params.firstRecordOnPage}`, 
            }">
              <template #table-row="props">
                <!-- <span v-if="props.column.field == 'actions'">
                  <router-link :to="{ path: '/cms/career/detail/edit/'+ props.row.id}"><button class="btn btn-sm btn-primary">Edit</button></router-link>
                  <router-link :to="{ path: '/cms/career/detail/apply/'+ props.row.id}"><button class="btn btn-sm btn-primary">Pelamar</button></router-link>
                  <router-link :to="{ path: '/cms/career/detail/delete/'+ props.row.id}"><button class="btn btn-sm btn-primary">Hapus</button></router-link>
                </span>
                <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span> -->
              </template>
            </vue-good-table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="flex flex-col w-full border-opacity-50">
    <Navbar />
    <Footer />
  </div> -->
</template>

<script>
import { ref } from 'vue'

import Navbar from '@/components/layout/cms/navbar/Navbar.vue'
import Menu from '@/components/layout/cms/menu/Menu.vue'
import Footer from '@/components/layout/cms/footer/Footer.vue'
import { mapState } from 'vuex'
const { toast, snackbar } = require('tailwind-toast')
import { VueGoodTable } from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import * as XLSX from 'xlsx'
const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}))
const _SheetJSFT = ['xlsx', 'xlsb', 'xlsm', 'xls', 'xml', 'csv', 'txt', 'ods', 'fods', 'uos', 'sylk', 'dif', 'dbf', 'prn', 'qpw', '123', 'wb*', 'wq*', 'html', 'htm'].map(function(x) { return '.' + x }).join(',')
export default {
  name: 'CareerList',
  components: { XLSX, Navbar, Menu, Footer, VueGoodTable },
  data () {
    return {
      form:{
        title:'',
        title_en:'',
        description:'',
        description_en:'',
        img_urlSM_1:'',setImageSM_1:'none',imageUrlSM_1:null,
        img_urlMD_2:'',setImageMD_2:'none',imageUrlMD_2:null,
        img_urlLG_3:'',setImageLG_3:'none',imageUrlLG_3:null,
        m_title:'',
        m_title_en:'',
        m_subtitle:'',
        m_subtitle_en:'',
        m_description:'',
        m_description_en:'',
        m_item:[],
        m_item_en:[],
        m_img_urlSM_1:'',m_setImageSM_1:'none',m_imageUrlSM_1:null,
        m_img_urlMD_2:'',m_setImageMD_2:'none',m_imageUrlMD_2:null,
        m_img_urlLG_3:'',m_setImageLG_3:'none',m_imageUrlLG_3:null,
        save_as:'preview',
      },
      rows:[],
      regData:[]
    }
  },
  computed: {
    ...mapState({ 
      items: state => state.careercms.apply.items,
      columns: state => state.careercms.apply.columns,
      rows: state => state.careercms.apply.rows,
    }),
  },
  methods: {
    notification (a,b,c,d,e) {
      toast().default(a,b).with({shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e}).show()
    },
    getData (id) {
      this.$store.dispatch('careercms/getApply',id).then(data => {
        this.rows = data
      })
    },
    exportExcel(evt) {
      const jsons = []
      for (let x = 0; x < this.rows.length; x++) {
        jsons[x] = {
          'Karir':this.rows[x].join_name,
          'name':this.rows[x].name,
          'gender':this.rows[x].gender,
          'birth_place':this.rows[x].birth_place,
          'birth_date':this.rows[x].birth_date,
          'religion':this.rows[x].religion,
          'married':this.rows[x].married,
          'education':this.rows[x].education,
          'address':this.rows[x].address,
          'province':this.rows[x].province,
          'regency':this.rows[x].regency,
          'district':this.rows[x].district,
          'village':this.rows[x].village,
          'email':this.rows[x].email,
          'mobile':this.rows[x].mobile,
          'mobile_sec':this.rows[x].mobile_sec,
          'experience':this.rows[x].experience,
          'last_company':this.rows[x].last_company,
          'last_job':this.rows[x].last_job,
          'last_sallary':this.rows[x].last_sallary,
          'photo':this.rows[x].photo,
          'cv':this.rows[x].cv,
          // 'datetime': moment(String(this.items[x].datetime)).format('DD-MM-YYYY HH:mm:ss')
        }
      }
      const data_json = XLSX.utils.json_to_sheet(jsons)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, data_json, 'data')
			XLSX.writeFile(wb, 'PELAMAR.xlsx')
		}
  },
  mounted () {
    if (this.$route.params.id) {
      this.getData(this.$route.params.id)
    }
  },
  created () {
    this.$store.dispatch('careercms/getList')
  },
  setup() { 
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>