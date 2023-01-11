<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

const slides = [
  { id: '1', title: 'Chapitre 1', content: 'VueJS is a library' },
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
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.content }}</p>
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
  height: 40rem;
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
