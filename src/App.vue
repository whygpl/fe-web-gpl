<template>
  <div id="app">
  </div>
  <router-view />
</template>
<script>
import axios from 'axios'
import store from '@/store'
export default {
  name: 'App',
  beforeCreate() {
    // if (!localStorage.getItem('general')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/general`)
    //   .then(response => {
    //     localStorage.setItem('general', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('homelive')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/home/all?status=live`)
    //   .then(response => {
    //     localStorage.setItem('homelive', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('product_type_by_id')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/product/type?id=1`)
    //   .then(response => {
    //     localStorage.setItem('product_type_by_id', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('aboutlive')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/about/all?status=live`)
    //   .then(response => {
    //     localStorage.setItem('aboutlive', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('product_type')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/product/type`)
    //   .then(response => {
    //     localStorage.setItem('product_type', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('product_category')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/product/category?product_type_id=1`)
    //   .then(response => {
    //     localStorage.setItem('product_category', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('pdrugtypelive')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/product/type?id=2`)
    //   .then(response => {
    //     localStorage.setItem('pdrugtypelive', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('pcdruglive')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/product/category?product_type_id=2`)
    //   .then(response => {
    //     localStorage.setItem('pcdruglive', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('product_group')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/product/group`)
    //   .then(response => {
    //     localStorage.setItem('product_group', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('product_detail')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/product/detail`)
    //   .then(response => {
    //     localStorage.setItem('product_detail', JSON.stringify(response.data.data.content))
    //   })
    // }
    // if (!localStorage.getItem('businesslive')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/business/all?status=live`)
    //   .then(response => {
    //     localStorage.setItem('businesslive', JSON.stringify(response.data.data))
    //   })
    // }
    // if (!localStorage.getItem('businessmitralive')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/business/mitra?status=live`)
    //   .then(response => {
    //     localStorage.setItem('businessmitralive', JSON.stringify(response.data.data))
    //   })
    // }
    // if (!localStorage.getItem('newslive')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/news/all?status=live`)
    //   .then(response => {
    //     localStorage.setItem('newslive', JSON.stringify(response.data.data))
    //   })
    // }
    // if (!localStorage.getItem('careerlive')){
    //   axios
    //   .get(`${process.env.VUE_APP_ROOT_API}/website/career/all?status=live`)
    //   .then(response => {
    //     localStorage.setItem('careerlive', JSON.stringify(response.data.data))
    //   })
    // }
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', 'ID')
    }
  }
}
</script>