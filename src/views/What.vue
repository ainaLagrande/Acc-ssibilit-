<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

const slides = [
// Slide 1
{ 
  id: '1', 
  img: 'inadequation.png', 
  imgAlt:'inadéquation permanante,temporaire,situationnelle',
  imgDesign: 'slide1.webp', 
  class: 'slide-first',
  title: 'Accessibilité', 
  content: "Handicap La première chose à laquelle on pense lorsqu'on entend le mot « accessibilité », c'est le handicap. Or, dans les faits, tout le monde rencontre des obstacles à l'accessibilité lorsque l'environnement ne répond pas à ses besoins.Nous parvenons mieux à supprimer certains obstacles que d'autres, non seulement au niveau technologique, mais aussi en termes de comportements associés. Par exemple, les lunettes sont un type de technologie d'assistance (TA). Bien que les personnes qui portent des lunettes en aient besoin pour se repérer dans le monde, elles se considèrent rarement comme atteintes d'un handicap. Cela est dû au fait qu'en plus d'être facilement accessibles.L'un des moyens d'appréhender le handicap, c'est de le considérer comme une inadéquation entre la personne et son environnement.Cette inadéquation peut être permanente, temporaire ou situationnelle." 
},
  
// Slide 2
{
  id: '2',
  img: 'principes.png',
  imgAlt:'quatres principes de l`accéssibilité',
  imgDesign: 's.webp',
  class: 'slide-second',
  title: 'Contenu Accéssible',
  content: "Un contenu inclusif tient compte de toute la diversité humaine en matière d'aptitudes physiques, de langue, de culture, de sexe, d'âge et de toute autre forme de différence.Pour créer du contenu accéssible à tous il y'a certaines exigeances il peut être difficile d'envisager tous les moyens différents dont les utilisateurs peuvent être amenés à interagir avec les sites webAfin d'aider les concepteurs à appréhender les éléments nécessaires pour rendre leurs sites plus accessibles, le World Wide Web Consortium (W3C) a élaboré les Règles pour l'accessibilité des contenus web (Web Content Accessibility Guidelines, ou WCAG)Au niveau supérieur, on trouve les quatre principes de l'accessibilité :-Perceptible-Utilisable-Compréhensible-Robuste" 
},
  
// Slide 3
{ 
id: '3', 
title: 'Règles Wcag', 
content: "Les règles WCAG sont articulées autour de 4 grands principes :un contenu perceptible peut être présenté dans différents modes : visuel, sonore et tactile ;un contenu utilisable peut faire l'objet de différents types d'interactions et ne se limite pas à des interactions avec la souris ou des gestes spécifiques ;un contenu compréhensible est prévisible, clair, et aide les utilisateurs lors des interactions ;un contenu robuste prend en charge une vaste représentation sur différents agents utilisateurs, ainsi que différents types de technologies d'assistance."
},
// Slide 4
{ id: '4', title: 'Chapitre 4', content: 'VueJS is Reactive' },
// Slide 5
{ id: '5', title: 'Chapitre 5', content: 'VueJS uses computed properties' },
]
</script>

<template>
    <div class="what-container">
      <Carousel>
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="carousel__item"  :class="slide.class">
            <h3 v-if="slide.title">{{ slide.title }}</h3>
            <p v-if="slide.content">{{ slide.content }}</p>
            <img v-if="slide.img" class="carousel-img" :src="`src/assets/images/${slide.img}`" :alt="`${slide.imgAlt}`" onclick="window.open(this.src)">
            <img v-if="slide.imgDesign" class="carousel-img-design" :src="`src/assets/images/${slide.imgDesign}`" alt="forme géometrique 3D décorative">
          </div>
        </Slide>

        <template #addons>
        <Navigation />
        <Pagination />
        </template>
     </Carousel> 
    </div>

</template>

<style lang="scss" scoped>

.what-container{
  height: 88vh;
}
.carousel__item {
  min-height: 200px;
  width: 80%;
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 20px;
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height: 45rem;
  padding: 2rem;
  position: relative;

  p{
    text-align: left;
    width: 80%;
    line-height:2.5rem;
  }
  .carousel-img{
    width: 45%;
    cursor:pointer;
    display: flex;
    justify-content: flex-start;
  }
  .carousel-img-design{
    position: absolute;
    bottom: 0%;
    right: -5%;
    overflow: hidden;
    width: 30%;
  }
}
// Slide 2 
.slide-second{
  .carousel-img-design{
    bottom: 0%;
    right: 0%;
  }
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid rgb(134, 11, 11);
}

</style>
