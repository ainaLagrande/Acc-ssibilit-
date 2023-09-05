<script setup>
import { ref } from 'vue';

const slides = [
  {
      order: 1,
      title: 'Perceptible',
      content: 'Contenu de la diapositive Découvrir',
    niveauA: [
        { text: 'Texte alternatif', tooltip: 'Fournir un texte alternatif pour tout le contenu non-textuel.' },
        { text: 'Médias synchronisés', tooltip: 'Fournir des transcriptions pour les médias basés sur le temps (p. ex. vidéos).' },
        { text: 'Adaptabilité', tooltip: "Créer un contenu qui peut être présenté de différentes manières sans perdre d'information." },
        { text: 'Distinguable', tooltip: ' Rendre plus facile la perception du contenu audio et visuel pour les utilisateurs.' },
    ],
    niveauAA: [
        { text: 'Audio Control', tooltip: "Donner le contrôle à l'utilisateur pour arrêter ou réduire le volume d'arrière-plan." },
        { text: 'Contraste', tooltip: "Assurer un contraste suffisant entre le texte et l'arrière-plan." },
        { text: 'Redimensionnement du texte', tooltip: ' Le texte doit être redimensionnable à 200 % sans perte de contenu ou de fonctionnalité.' },
        { text: 'Images de texte', tooltip: "Éviter d'utiliser des images de texte sauf si nécessaire." },
        { text: 'Réponse', tooltip: "Éviter les designs qui provoquent des crises d'épilepsie." },
        { text: 'Navigation', tooltip: 'Offrir plusieurs façons de trouver des pages, comme une barre de navigation.' },
    ],
    niveauAAA: [
        { text: 'Contraste (Amélioré)', tooltip: "Assurer un contraste plus élevé entre le texte et l'arrière-plan que ce qui est exigé au niveau AA." },
        { text: 'Taille du texte', tooltip: 'La majorité du texte doit avoir une taille de police facile à lire.' },
        { text: 'Images de texte (Aucune exception)', tooltip: 'Les images de texte ne doivent être utilisées que pour les logos.' },
        { text: 'Volume', tooltip: 'Les utilisateurs doivent pouvoir régler le volume des médias audio indépendamment de la globalité du système.' },
        { text: 'Pas de contenu audio automatique', tooltip: "Éviter les sons automatiques ou donner le contrôle à l'utilisateur pour les désactiver." },
    ],
  },
  {
      order: 2,
      title: 'Utilisable',
      content: 'Contenu de la diapositive À faire',
      niveauA: [
        { text: 'Fonctionnalité au clavier', tooltip: 'Tout doit être utilisable uniquement au clavier, sans nécessiter de souris.' },
        { text: 'Temps suffisant', tooltip: 'Donner aux utilisateurs suffisamment de temps pour lire et utiliser le contenu.' },
        { text: 'Pas de contenu susceptible de provoquer des crises', tooltip: "Éviter les contenus clignotants ou scintillants qui pourraient provoquer des crises d'épilepsie." },
        { text: 'Liens lisibles', tooltip: 'Les liens doivent être compréhensibles même hors contexte, et indiquer clairement leur destination ou leur fonction.' },
    ],
    niveauAA: [
        { text: 'Pas de piège au clavier ', tooltip: "Si l'utilisateur peut accéder à un élément en utilisant le clavier, il doit également pouvoir en sortir." },
        { text: 'Contrôles de la lecture', tooltip: "Si un contenu se met à jouer automatiquement, l'utilisateur doit avoir des moyens pour le contrôler." },
        { text: 'Navigation claire', tooltip: 'Le site doit offrir différents moyens de navigation, comme une barre de recherche, et le focus visuel doit être clairement visible pendant la navigation au clavier.' },
    ],
    niveauAAA: [
        { text: 'Pas de gestes', tooltip: 'Éviter de dépendre des mouvements ou des gestes pour utiliser le contenu.' },
        { text: 'Séquences temporisées ajustables', tooltip: "Si un contenu exige que l'utilisateur réagisse dans un délai précis, celui-ci doit être ajustable." },
        { text: 'Contexte de la navigation', tooltip: "Fournir suffisamment d'informations pour que les utilisateurs puissent comprendre leur position sur le site." },
    ],
  },
  {
      order: 3,
      title: 'Compréhesible',
      content: 'Contenu de la diapositive Planifier',
      niveauA: [
        { text: 'Texte', tooltip: 'Explication' },
        { text: 'Médias', tooltip: 'Explication' },
        { text: 'Adaptabilité', tooltip: 'Explication' },
        { text: 'Distinguable', tooltip: 'Explication' },
    ],
    niveauAA: [
        { text: 'Texte', tooltip: 'Explication' },
        { text: 'Médias', tooltip: 'Explication' },
        { text: 'Adaptabilité', tooltip: 'Explication' },
        { text: 'Distinguable', tooltip: 'Explication' },
    ],
    niveauAAA: [
        { text: 'Texte', tooltip: 'Explication' },
        { text: 'Médias', tooltip: 'Explication' },
        { text: 'Adaptabilité', tooltip: 'Explication' },
        { text: 'Distinguable', tooltip: 'Explication' },
    ],
  },
  {
      order: 4,
      title: 'Robustre',
      content: 'Contenu de la diapositive Planifier',
      niveauA: [
        { text: 'Texte', tooltip: 'Explication' },
        { text: 'Médias', tooltip: 'Explication' },
        { text: 'Adaptabilité', tooltip: 'Explication' },
        { text: 'Distinguable', tooltip: 'Explication' },
    ],
    niveauAA: [
        { text: 'Texte', tooltip: 'Explication' },
        { text: 'Médias', tooltip: 'Explication' },
        { text: 'Adaptabilité', tooltip: 'Explication' },
        { text: 'Distinguable', tooltip: 'Explication' },
    ],
    niveauAAA: [
        { text: 'Texte', tooltip: 'Explication' },
        { text: 'Médias', tooltip: 'Explication' },
        { text: 'Adaptabilité', tooltip: 'Explication' },
        { text: 'Distinguable', tooltip: 'Explication' },
    ],
  },
];

const activeOrder = ref(1);  // Supposons que la première diapositive est active par défaut

function activateSlide(order) {
  activeOrder.value = order;
}
const showTooltips = ref({});

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

                            <h4 class="niveau-title">Niveau A</h4>
                            <ul v-if="slide.niveauA.length">
                                <li  v-for="item in slide.niveauA" :key="item.text"
                                    @mouseover="showTooltips[item.text] = true"
                                    @mouseleave="showTooltips[item.text] = false" >
                                    {{ item.text }}
                                    <div v-if="showTooltips[item.text]" class="tooltip-content">
                                    <p>{{ item.tooltip }}</p>
                                    </div>
                                </li>
                            </ul>
                            <h4 class="niveau-title">Niveau AA</h4>
                            <ul v-if="slide.niveauAA.length">
                                <li  v-for="item in slide.niveauAA" :key="item.text"
                                    @mouseover="showTooltips[item.text] = true"
                                    @mouseleave="showTooltips[item.text] = false" >
                                    {{ item.text }}
                                    <div v-if="showTooltips[item.text]" class="tooltip-content">
                                    <p>{{ item.tooltip }}</p>
                                    </div>
                                </li>
                            </ul>

                            <h4 class="niveau-title">Niveau AAA</h4>
                            <ul v-if="slide.niveauAAA.length">
                                <li  v-for="item in slide.niveauAAA" :key="item.text"
                                    @mouseover="showTooltips[item.text] = true"
                                    @mouseleave="showTooltips[item.text] = false" >
                                    {{ item.text }}
                                    <div v-if="showTooltips[item.text]" class="tooltip-content">
                                    <p>{{ item.tooltip }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
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
  