<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect, nextTick } from 'vue';

const sections = ref([
  { title: 'Handicap', content: "La première chose à laquelle on pense lorsqu'on entend le mot « accessibilité », c'est le handicap. Or, dans les faits, tout le monde rencontre des obstacles à l'accessibilité lorsque l'environnement ne répond pas à ses besoins.Nous parvenons mieux à supprimer certains obstacles que d'autres, non seulement au niveau technologique, mais aussi en termes de comportements associés. Par exemple, les lunettes sont un type de technologie d'assistance (TA). Bien que les personnes qui portent des lunettes en aient besoin pour se repérer dans le monde, elles se considèrent rarement comme atteintes d'un handicap. Cela est dû au fait qu'en plus d'être facilement accessibles. L'accessibilité sur le web est un sujet crucial pour garantir l'égalité des chances et permettre à tous les individus, quels que soient leurs capacités, de naviguer et d'utiliser les ressources en ligne de manière efficace et sans obstacles.Cela signifie que les sites web et les applications doivent être conçus et développés demanière à ce qu'ils soient accessibles à tous les utilisateurs, y compris ceux ayant des déficiences visuelles, auditives, motrices, cognitives ou autres.Les normes d'accessibilité sur le web ont été établies pour aider les concepteurs et les développeurs à atteindre cet objectif, en fournissant des directives spécifiques sur la manière de créer des sites web et des applications accessibles.L'un des moyens d'appréhender le handicap, c'est de le considérer comme une inadéquation entre la personne et son environnement. Cette inadéquation peut être permanente, temporaire ou situationnelle." },
  { title: 'Body', content: `<h1>Je suis un titre h1</h1>` },
  { title: 'Another Section', content: 'More details.' },
  { title: 'Yet Another', content: 'Even more details.' },
  { title: 'Conclusion', content: 'No JavaScript: no good.' },
  { title: 'References', content: 'References go here.' },
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
  if (event.deltaY > 0) {
    smoothScrollToSection(currentSection.value + 1);
  } else {
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
        <p class="what-txt" v-html="section.content"></p>
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
  height: calc(100% - 50px);
}
.child {
  flex: 0 0 auto;
  width: 100vw;
  height: 80%;
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
.what-txt{
  font-family: Roboto;
}
</style>