<script setup>
import { ref } from 'vue';
import arrayContentDemo from '@/utils/arrayContentDemo.js'
import arrayFilter from '@/utils/arrayFilter.js'

const showFilter = ref(false);
const arrayElement = ref([]);


function choiseElement(el) {
    if (arrayElement.value.includes(el)) {
        const index = arrayElement.value.indexOf(el);
        if (index > -1) {
            arrayElement.value.splice(index, 1);
        }
    } else {
        arrayElement.value.push(el);
    }
}
</script>

<template>
    <div class="filter-demo">
        <button @click="showFilter = !showFilter" :class="{'open-filter': showFilter, 'close-filter': !showFilter}">Filtres</button>
        <div v-if="showFilter" class="block-filter">
            <div v-for="(item, index) in arrayFilter()">
                <span>{{ item.patho }}</span>
                <input :id="'filter-patho'+index" type="checkbox" @click="choiseElement(item.class)"/>
                <label :for="'filter-patho'+index" />
            </div>
        </div>
    </div>
    <div class="demo" v-for="item in arrayContentDemo()" :class="arrayElement">
        <h1>{{ item.title }}</h1>
        <div v-html="item.element"></div>
    </div>

</template>


<style lang="scss">
  @import "@/assets/styles/demo.scss";
</style>