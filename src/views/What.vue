<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect, nextTick } from 'vue';
import Slider1 from '../components/whatParts/Slider-1.vue';
import Slider2 from '../components/whatParts/Slider-2.vue';
import Slider3 from '../components/whatParts/Slider-3.vue';


const sections = ref([
  { title: 'Handicap' },
  { title: 'Prenez conscience des avantages de l’inclusif'},
  { title: 'Contenu Accéssible'},
]);

const scrollContainer = ref(null);
let sectionWidth = 0;
let currentSection = ref(0);
let lastScrolled = 0; 

watchEffect(() => {
  if (scrollContainer.value && scrollContainer.value.firstElementChild) {
    sectionWidth = scrollContainer.value.firstElementChild.offsetWidth;
  }
});

const smoothScrollToSection = (sectionIndex) => {
  if (sectionIndex < 0 || sectionIndex >= sections.value.length) return;
  const target = sectionIndex * sectionWidth;
  currentSection.value = sectionIndex;
  localStorage.setItem('currentSection', currentSection.value);

  scrollContainer.value.scrollTo({
    left: target,
    behavior: 'smooth'
  });
};

const handleWheel = (event) => {
  const now = Date.now();
  if (now - lastScrolled < 300) {
    return;
  }
  lastScrolled = now;
  
  const currentChild = scrollContainer.value.children[currentSection.value];
  const atBottomEnd = currentChild.scrollTop + currentChild.offsetHeight >= currentChild.scrollHeight;
  const atTopEnd = currentChild.scrollTop === 0;
  
  if (event.deltaY > 0 && atBottomEnd) {
    smoothScrollToSection(currentSection.value + 1);
  } else if (event.deltaY < 0 && atTopEnd && currentSection.value !== 0) {
    smoothScrollToSection(currentSection.value - 1);
  }
};


onMounted(() => {
  setTimeout(() => {
    const appElement = document.getElementById('app');
    if (appElement) {
      appElement.style.overflow = 'hidden';
    }
  }, 0);

  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('wheel', handleWheel, { passive: true });
  }
  // Utilisation de nextTick pour s'assurer que tous les éléments sont montés
  nextTick(() => {
    const savedSection = localStorage.getItem('currentSection');
    if (savedSection !== null) {
      smoothScrollToSection(Number(savedSection));
    }
  });
});
onBeforeUnmount(() => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.style.overflow = '';
  } 
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('wheel', handleWheel);
  }
});
</script>


<template>
  <div id="what-container">
    <!-- Pagination -->
    <div class="pagination">
      <button 
        v-for="(section, index) in sections" 
        :key="index" 
        @click="smoothScrollToSection(index)"
        :class="{ 'active': currentSection === index }" >
        <span class="dot"></span>
      </button>
    </div>

    <!-- Sections -->
    <div ref="scrollContainer" class="scroll-container">
      <div v-for="(section, index) in sections" :key="index" class="child">
        <h2>{{ section.title }}</h2>
        <!-- Afficher le composants -->
        <Slider1 v-if="section.title === 'Handicap'" />
        <Slider2 v-if="section.title === 'Prenez conscience des avantages de l’inclusif'" />
        <Slider3 v-if="section.title === 'Contenu Accéssible'" />

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>


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
  margin: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  width: 100%;
  
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