<script setup>
import { ref } from 'vue';
import arrayContentDemo from '@/utils/arrayContentDemo.js'
import arrayFilter from '@/utils/arrayFilter.js'

const showFilter = ref(false);
const arrayElement = ref([]);

function choiseElement(el, desc) {
    const existing = arrayElement.value.find(item => item.class === el);
    if (existing) {
        arrayElement.value = arrayElement.value.filter(item => item.class !== el);
    } else {
        arrayElement.value.push({ class: el, description: desc });
    }
}
</script>

<template>
  <div class="filter-demo">
    <button @click="showFilter = !showFilter" :class="{'open-filter': showFilter, 'close-filter': !showFilter}">Filtres</button>
    <div v-if="showFilter" class="block-filter">
      <div class="filter-box" v-for="(item, index) in arrayFilter()">
        <div class="d-flex">
            <span>{{ item.patho }}</span>
            <input :id="'filter-patho'+index" type="checkbox" @click="choiseElement(item.class, item.description)"/>
            <label :for="'filter-patho'+index" />
        </div>

        <span class="txt-roboto" v-if="arrayElement.some(e => e.class === item.class && e.description === item.description)">{{ item.description }}</span>
      </div>
    </div>
  </div>
  <div class="demo" v-for="item in arrayContentDemo()" :class="arrayElement.map(e => e.class)">
    <h1>{{ item.title }}</h1>
    <div v-html="item.element"></div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/styles/demo.scss";
</style>
