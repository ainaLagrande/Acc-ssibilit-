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

    <!-- <div class="dark-light" @click="toggleDarkMode">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
    </div> -->

</template>

<script setup>
import { ref, onMounted } from 'vue';
import arrayContentDemo from '@/utils/arrayContentDemo.js'
import arrayFilter from '@/utils/arrayFilter.js'

const isDarkMode = ref(false);
const showFilter = ref(false);
const arrayElement = ref([]);

// const toggleDarkMode = () => {
//   isDarkMode.value = !isDarkMode.value
//   document.body.classList.toggle('dark-mode', isDarkMode.value)
// }


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

// onMounted(() => {
//   if (!isDarkMode.value) {
//     // Définir des valeurs par défaut pour les variables CSS
//     document.body.style.setProperty('--body-bg-color', '#ffffff');
//     document.body.style.setProperty('--theme-bg-color', '#ffffff');
//     document.body.style.setProperty('--border-color', '#000000');
//     document.body.style.setProperty('--header-bg-color', '#ffffff');
//     document.body.style.setProperty('--main-color', '#000000');
//     document.body.style.setProperty('--body-color', '#000000');

//   }

// });

</script>

<style lang="scss">
  @import "@/assets/styles/demo.scss";

// .dark-mode {
//     --body-bg-color: #1e222b;
//     --theme-bg-color: #212835;
//     --border-color: #393f50;
//     --header-bg-color: #323a4b;
//     --main-color: #fefffd;
//     --body-color: #dddee0;
//     background-color: red!important;
// }

// .dark-light {
//  position: fixed;
//  bottom: 30px;
//  right: 30px;
//  background-color: var(--header-bg-color);
//  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
//  padding: 8px;
//  border-radius: 50%;
//  z-index: 3;
//  svg {
//   width: 28px;
//  }
// }

// .dark-mode .dark-light svg {
//     fill: #ffce45;
//     stroke: #ffce45;
// }
// .dark-light svg {
//     fill: transparent;
//     transition: 0.5s;
// }
</style>
