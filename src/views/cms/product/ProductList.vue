<template>
  <!-- <Menu /> -->
  <div class="bg-base-300 flex min-h-screen">
    <!-- Sidebar Menu -->
    <div class="bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out" :class="{ 'relative translate-x-0': showMenu }">
      <Menu selectedMenu="HProduct-PProduct" />
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
            <router-link :to="{ name: 'CmsProductAdd' }"><button class="btn btn-sm btn-primary">+ Add Data</button></router-link>
          </div>
          <div class="w-full">
            <vue-good-table :columns="columns" :rows="rows" 
            :search-options="{
              enabled: true,
              searchFn: searchFn,
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
                <span v-if="props.column.field == 'actions'">
                  <router-link :to="{ path: '/cms/product/detail/edit/'+ props.row.id}"><button class="btn btn-sm btn-primary">Edit</button></router-link>
                  <button @click="modalDelete(props.row.id)" class="btn btn-sm bg-error btn-primary">Hapus</button>
                </span>
                <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <dialog :class="{ 'modal-open': showModal }" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Info</h3>
      <p class="py-4">Apakah anda yakin menghapus data?</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button @click="deleteRows()" class="bg-error btn btn-sm mr-3">Hapus</button>
          <button @click="modalClose()" class="btn btn-sm">Batal</button>
        </form>
      </div>
    </div>
  </dialog>
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
export default {
  name: 'ProductTypeEdit',
  components: { Navbar, Menu, Footer, VueGoodTable },
  data () {
    return {
      showModal:false,
      deleteId:'',
      rows:[],
      regData:[]
    }
  },
  computed: {
    ...mapState({ 
      items: state => state.productcms.detail.items,
      columns: state => state.productcms.detail.columns,
      rows: state => state.productcms.detail.rows,
    }),
  },
  methods: {
    notification (a,b,c,d,e) {
      toast().default(a,b).with({shape: 'square', duration: 4000, speed: 1000, positionX: 'end', positionY: 'top', color: c, fontColor: d, fontTone: e}).show()
    },
    modalDelete (id) {
      this.showModal = true
      this.deleteId = id
    },
    modalClose () {
      this.showModal = false
      this.deleteId = ''
    },
    deleteRows () {
      this.$store.dispatch('productcms/productDelete', {id: this.deleteId})
      .then(res => {
        this.getData()
        this.showModal = false
        this.notification('Success :','You have successfully Delete','bg-green-500','white','50')
        if (localStorage.getItem('product_detaillive')) {
          this.$store.dispatch('product/getDetailHealths', 'live').then(data => {
            localStorage.setItem('product_detaillive', JSON.stringify(data))
          })
        } else {
          this.$store.dispatch('product/getDetailHealths', 'live').then(data => {
            localStorage.setItem('product_detaillive', JSON.stringify(data))
          })
        }
        if (localStorage.getItem('product_detailpreview')) {
          this.$store.dispatch('product/getDetailHealths', 'preview').then(data => {
            localStorage.setItem('product_detailpreview', JSON.stringify(data))
          })
        } else {
          this.$store.dispatch('product/getDetailHealths', 'preview').then(data => {
            localStorage.setItem('product_detailpreview', JSON.stringify(data))
          })
        }
      }, 
      err => {
        this.notification('Failed :','You have unsuccessful','bg-red-500','white','50')
      })
    },
    getData () {
      this.$store.dispatch('productcms/getProduct','preview').then(data => {
        this.rows = data
        this.rows.forEach(function (element,index) {
          //element.no = parseInt(index+1)
          console.log(element);
        })
      })
    },
    searchFn (row, col, cellValue, searchTerm) {
      if (col.field === "name") {
        return cellValue.toLowerCase().startsWith(searchTerm.toLowerCase())
      }
    }
  },
  mounted () {
    this.getData()
  },
  setup() { 
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
}
</script>