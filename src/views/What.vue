<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect, nextTick } from 'vue';

const sections = ref([
  { title: 'Introduction', content: 'JavaScript is essential.' },
  { title: 'Body', content: 'Main content here.' },
  { title: 'Another Section', content: 'More details.' },
  { title: 'Yet Another', content: 'Even more details.' },
  { title: 'Conclusion', content: 'No JavaScript: no good.' },
  { title: 'References', content: 'References go here.' },
]);

const scrollContainer = ref(null);
let sectionWidth = 0;
let currentSection = 0;
let lastScrolled = 0; 

watchEffect(() => {
  if (scrollContainer.value && scrollContainer.value.firstElementChild) {
    sectionWidth = scrollContainer.value.firstElementChild.offsetWidth;
  }
});

const smoothScrollToSection = (sectionIndex) => {
  if (sectionIndex < 0 || sectionIndex >= sections.value.length) return;
  const target = sectionIndex * sectionWidth;
  currentSection = sectionIndex;
  localStorage.setItem('currentSection', currentSection); // Sauvegarder dans le localStorage

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

  if (event.deltaY > 0) {
    smoothScrollToSection(currentSection + 1);
  } else {
    smoothScrollToSection(currentSection - 1);
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
      <button v-for="(section, index) in sections" :key="index" @click="smoothScrollToSection(index)">
        <span class="dot"></span>
      </button>
    </div>
    <!-- Sections -->
    <div ref="scrollContainer" class="scroll-container">
      <div v-for="(section, index) in sections" :key="index" class="child">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
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
  overflow-x: scroll;
  gap: 16px;
  height: calc(100% - 50px); /* Réduction pour faire de la place à la pagination */
}

.child {
  flex: 0 0 auto;
  width: 100vw;
  height: 80%;
  border: 1px solid #ccc;
  padding: 16px;
  box-sizing: border-box;
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