<script setup>
import { ref } from 'vue';

const slides = [
  {
      order: 1,
      title: 'Perceptible',
      content: 'Contenu de la diapositive Découvrir',
      niveauA: ['Texte alternatif', 'Médias synchronisés', 'Adaptabilité','Distinguable'],
      niveauAA: ['Audio Control', 'Contraste','Redimensionnement du texte','Images de texte','Réponse','Navigation'],
      niveauAAA: ['Contraste (Amélioré)', 'Taille du texte','Images de texte (Aucune exception)','Volume','Pas de contenu audio automatique'],
  },
  {
      order: 2,
      title: 'Utilisable',
      content: 'Contenu de la diapositive À faire',
      niveauA: ['Point 1', 'Point 2'],
      niveauAA: [],
      niveauAAA: [],
  },
  {
      order: 3,
      title: 'Compréhesible',
      content: 'Contenu de la diapositive Planifier',
      niveauA: ['Point 1', 'Point 2'],
      niveauAA: [],
      niveauAAA: [],
  },
  {
      order: 4,
      title: 'Robustre',
      content: 'Contenu de la diapositive Planifier',
      niveauA: ['Point 1', 'Point 2'],
      niveauAA: [],
      niveauAAA: [],
  },
];

const activeOrder = ref(1);  // Supposons que la première diapositive est active par défaut

function activateSlide(order) {
  activeOrder.value = order;
}
</script>

<template>
    <div class="slider-wrapper">
        <div class="slider">
            <div class="slide-navigation__squares">
                <div class="squares-wrapper">
                    <div class="squares-slider">
                        <span class="square"></span>
                        <span class="square"></span>
                        <span class="square red"></span>
                        <span class="square"></span>
                        <span class="square"></span>
                    </div>
                </div>

                <div class="slides-container">
                    <div class="slide-wrapper">
                        <div v-for="slide in slides" :key="slide.order" class="slide" :class="{ 'active-slide': activeOrder === slide.order }">
                            <!-- <p>{{ slide.content }}</p> -->

                            <!-- Pour niveauA -->
                            <h4 class="">Niveau A</h4>
                            <ul v-if="slide.niveauA.length">
                                <li v-for="item in slide.niveauA" :key="item">{{ item }}</li>
                            </ul>
                            <h4 class="">Niveau AA</h4>
                            <ul v-if="slide.niveauAA.length">
                                <li v-for="item in slide.niveauAA" :key="item">{{ item }}</li>
                            </ul>
                            <h4 class="">Niveau AAA</h4>
                            <ul v-if="slide.niveauAAA.length">
                                <li v-for="item in slide.niveauAAA" :key="item">{{ item }}</li>
                            </ul>
                        </div>
                        <a href="#" title="Ceci est une info-bulle">Survolez-moi</a>

                    </div>
                </div>
  
                <div class="slide-navigation__txt">
                    <ul>
                        <li v-for="slide in slides" :key="slide.order">
                            <button :data-order="slide.order" @click="activateSlide(slide.order)">{{ slide.title }}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.slide-wrapper .slide {
  display: none;
}

.slide-wrapper .active-slide {
  display: block;
}

.slider-wrapper {
  position: relative;
  max-width: 90rem;
  min-width: 480px;
  background: #fff;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 0 35px 20px #DDE5EE;
}

.slider {
  position: relative;
  height: 65rem;
  padding: 5rem 0;
}
.slide-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.slide-navigation__txt ul {
  margin: 0;
  list-style: none;
  padding: 0;
  position: absolute;
  width: 30rem;
  transform: rotate(90deg);
  transform-origin: 0;
  margin-left: calc(98% - 0.14rem);
  display: flex;
  justify-content: space-between;
  top: 0;
}
</style>
  