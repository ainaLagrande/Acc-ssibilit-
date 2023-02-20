<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Homepage from './views/Homepage.vue'
import What from './views/What.vue'
import  './assets/styles/style.scss'


</script>

<template>
  <Header></Header>
  <router-view/>
  <main></main>
  <Footer></Footer>
</template>

<style scoped>

</style>
