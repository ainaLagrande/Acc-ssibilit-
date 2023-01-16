<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';


const slides = [
  { id: '1', img: 'inadequation.png' ,imgDesign: 'slide1.webp' , title: 'Accessibilité', content: "Handicap La première chose à laquelle on pense lorsqu'on entend le mot « accessibilité », c'est le handicap. Or, dans les faits, tout le monde rencontre des obstacles à l'accessibilité lorsque l'environnement ne répond pas à ses besoins.Nous parvenons mieux à supprimer certains obstacles que d'autres, non seulement au niveau technologique, mais aussi en termes de comportements associés. Par exemple, les lunettes sont un type de technologie d'assistance (TA). Bien que les personnes qui portent des lunettes en aient besoin pour se repérer dans le monde, elles se considèrent rarement comme atteintes d'un handicap. Cela est dû au fait qu'en plus d'être facilement accessibles.L'un des moyens d'appréhender le handicap, c'est de le considérer comme une inadéquation entre la personne et son environnement.Cette inadéquation peut être permanente, temporaire ou situationnelle." },
  { id: '2', title: 'Chapitre 2', content: 'Know the components' },
  { id: '3', title: 'Chapitre 3', content: 'Rendering Conditionally' },
  { id: '4', title: 'Chapitre 4', content: 'VueJS is Reactive' },
  { id: '5', title: 'Chapitre 5', content: 'VueJS uses computed properties' },
]

</script>

<template>
    <div class="what-container">
      <Carousel>
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="carousel__item">
            <h3 v-if="slide.title">{{ slide.title }}</h3>
            <p v-if="slide.content">{{ slide.content }}</p>
            <img v-if="slide.img" class="carousel-img" :src="`src/assets/images/${slide.img}`" alt="inadéquation permanante,temporaire,situationnelle" onclick="window.open(this.src)">
            <img v-if="slide.imgDesign" class="carousel-img-design" :src="`src/assets/images/${slide.imgDesign}`" alt="forme géometrique décorative">
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

  .carousel{
    height: 100%;
    display: grid;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
    // justify-content: flex-start;
    // display: flex;
    cursor:pointer;
  }
  .carousel-img-design{
    position: absolute;
    bottom: 0%;
    right: -5%;
    overflow: hidden;
    width: 30%;
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
