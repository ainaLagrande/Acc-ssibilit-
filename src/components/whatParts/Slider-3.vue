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
        { text: 'Langue de la page', tooltip: ' La langue du contenu de la page doit être identifiable dans le code.' },
        { text: 'Contrôle du focus', tooltip: "Le focus ne doit pas causer de changement de contexte inattendu lorsqu'il est déplacé." },
        { text: 'Étiquettes ou instructions', tooltip: "Fournir des étiquettes ou des instructions pour toutes les interactions de l'utilisateur qui requièrent des informations." },
    ],
    niveauAA: [
        { text: 'Lisibilité', tooltip: 'Le texte doit être lisible et compréhensible, généralement en utilisant un langage simple.' },
        { text: 'Navigation cohérente', tooltip: 'Utiliser une navigation cohérente sur les différentes pages.' },
        { text: 'Identification cohérente', tooltip: 'Utiliser des icônes et des boutons cohérents dans différentes parties du site.' },
        { text: 'Erreurs et corrections', tooltip: "Si l'utilisateur commet une erreur lors de la saisie, fournir des suggestions de correction." },
    ],
    niveauAAA: [
        { text: 'Langue de passages ou de phrases', tooltip: 'Indiquer le changement de langue pour des passages ou des phrases spécifiques dans le contenu.' },
        { text: 'Techniques et jargons', tooltip: 'Expliquer ou définir les termes techniques ou le jargon.' },
        { text: 'Erreurs et suggestions', tooltip: 'Si une erreur est automatiquement détectée, des suggestions de correction sont fournies chaque fois que possible.' },
        { text: 'Aide contextuelle', tooltip: 'Fournir une aide contextuelle pour les interactions complexes ou les formulaires.' },
    ],
  },
  {
      order: 4,
      title: 'Robustre',
      content: 'Contenu de la diapositive Planifier',
      niveauA: [
        { text: 'Analyse syntaxique', tooltip: "Le code doit suivre les règles et les normes standards (comme le HTML correct) pour que différents logiciels, y compris les lecteurs d'écran et les autres technologies d'assistance, puissent le comprendre." },
    ],
    niveauAA: [
        { text: 'Compatibilité', tooltip: "S'assurer que le site ou l'application web fonctionne bien avec les technologies d'assistance actuelles et futures." },

    ],
    niveauAAA: [
        { text: 'Améliorations technologiques', tooltip: "Le contenu doit être conçu de manière à être compatible avec les futurs outils et technologies autant que possible. En d'autres termes, le site doit être 'à l'épreuve du futur'." },
    ],
  },
];

const activeOrder = ref(1);  // Supposons que la première diapositive est active par défaut

function activateSlide(order) {
  activeOrder.value = order;
}
// Tooltip 
const showTooltips = ref({});
const stickyTooltip = ref(null);

const handleMouseOver = (text) => {
  if (stickyTooltip.value !== text) {
    showTooltips.value[text] = true;
  }
};

const handleMouseLeave = (text) => {
  if (stickyTooltip.value !== text) {
    showTooltips.value[text] = false;
  }
};

const handleClick = (text) => {
  stickyTooltip.value = text;
  for (const key in showTooltips.value) {
    showTooltips.value[key] = false;
  }
  showTooltips.value[text] = true;
};

</script>

<template>


<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

    <div class="slider-wrapper">
        <div class="slider">
            <div class="slides-container">
                <div class="slide-wrapper ">
                    <div v-for="slide in slides" :key="slide.order" class="slide" :class="{ 'active-slide': activeOrder === slide.order }">
                        <div class="slide-item">
                            <h4 class="niveau-title">Niveau A</h4>
                            <ul v-if="slide.niveauA.length">
                                <li v-for="item in slide.niveauA" :key="item.text"
                                    @mouseover="handleMouseOver(item.text)"
                                    @mouseleave="handleMouseLeave(item.text)"
                                    @click="handleClick(item.text)"
                                    :class="{ 'active': stickyTooltip === item.text }">
                                    {{ item.text }}
                                    <div v-if="showTooltips[item.text]" class="tooltip-content">
                                        <p>{{ item.tooltip }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="slide-item">
                            <h4 class="niveau-title">Niveau AA</h4>
                            <ul v-if="slide.niveauAA.length">
                                <li v-for="item in slide.niveauAA" :key="item.text"
                                    @mouseover="handleMouseOver(item.text)"
                                    @mouseleave="handleMouseLeave(item.text)"
                                    @click="handleClick(item.text)"
                                    :class="{ 'active': stickyTooltip === item.text }">
                                    {{ item.text }}
                                    <div v-if="showTooltips[item.text]" class="tooltip-content">
                                        <p>{{ item.tooltip }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="slide-item">
                            <h4 class="niveau-title">Niveau AAA</h4>
                            <ul v-if="slide.niveauAAA.length">
                                <li v-for="item in slide.niveauAAA" :key="item.text"
                                    @mouseover="handleMouseOver(item.text)"
                                    @mouseleave="handleMouseLeave(item.text)"
                                    @click="handleClick(item.text)"
                                    :class="{ 'active': stickyTooltip === item.text }">
                                    {{ item.text }}
                                    <div v-if="showTooltips[item.text]" class="tooltip-content">
                                        <p>{{ item.tooltip }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div class="slide-navigation__txt">
                <ul>
                    <li v-for="slide in slides" :key="slide.order">
                        <span  :data-order="slide.order"  @click="activateSlide(slide.order)" :class="{ active: activeOrder === slide.order }"> {{ slide.title }} </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.niveau-title{
    color: #AB2DFF;

}
.slide-item{
    li{
        list-style-type: none;
        cursor: pointer;
    }
    li.active{
        color: #AB2DFF;
    }
    ul{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
}
.slide-wrapper .slide {
  display: none;
}
.slide-wrapper .active-slide {
  display: flex;
}
.active-slide{
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 5rem;
}
.slider-wrapper {
  position: relative;
  max-width: 80%;
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
//   position: relative;
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

  li {
    text-transform:uppercase;
    letter-spacing:0.2rem;
    margin: 0 1.2rem;
    position:relative;
    float:left;
    font-size:1.2rem;
    font-weight:600;
    color:#A1A5B8;
    span {
        cursor:pointer;
        transition: all 0.5s ease;
        display:block;
        &.active{
        transform: scale(1.1, 1.1);
        color: #3E018B;
        }
    }
    }
}
.tooltip-content {
    position: absolute;
    z-index: 1;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    width: 80%;
    bottom: 0;
    left: 0;
    left: 50%; 
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;

    p{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: initial;
    }
}

</style>
  