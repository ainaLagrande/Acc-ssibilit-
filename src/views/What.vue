<script setup>
import { ref } from 'vue';
import Slider1 from '../components/whatParts/Slider-1.vue';
import Slider2 from '../components/whatParts/Slider-2.vue';
import Slider3 from '../components/whatParts/Slider-3.vue';

const sections = ref([
  { title: 'Handicap' },
  { title: 'Prenez conscience des avantages de l’inclusif'},
  { title: 'Contenu Accessible'},
]);

</script>

<template>
  <div v-for="(section, index) in sections" :key="index" class="child">
    <h2 class="what-title">{{ section.title }}</h2>
    <Slider1 v-if="section.title === 'Handicap'" />
    <Slider2 v-else-if="section.title === 'Prenez conscience des avantages de l’inclusif'" />
    <Slider3 v-else-if="section.title === 'Contenu Accessible'" />
  </div>
</template>


<style lang="scss" scoped>
.what-title{
  width: fit-content;
  margin: auto;
  padding: 2rem;
}
#what-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  overflow: hidden;
}
.scroll-container {
  display: flex;
  overflow-y: scroll;
  height: calc(100% - 50px);
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
}

.child {
  flex: 0 0 auto;
  width: 100vw;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: auto; 
}
.pagination {
  z-index: 1000;
  bottom: 0;
  margin: 0;
  position: absolute;
  width: 10rem;
  transform: rotate(90deg);
  transform-origin: 0;
  margin-left: calc(2% - 0.14rem);
  top: 0;
  z-index: 0;
  
  button {
    background: transparent;
    border: none;
    margin: 0 8px;
    &.active .dot{
      background-color: red; 
    }
    .dot {
      height: 12px;
      width: 12px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
    }
  }
}
</style>