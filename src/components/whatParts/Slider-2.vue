<script setup>
  import { ref } from 'vue';

  const slider = ref(null);
  const start = ref(true);
  const end = ref(false);

  const handleScroll = () => {
    if (!slider.value) return;
    start.value = slider.value.scrollLeft === 0;
    end.value = Math.abs((slider.value.scrollWidth - slider.value.offsetWidth) - slider.value.scrollLeft) < 5;
  };

  const scroll = (direction) => {
    if (!slider.value) return;
    const amount = slider.value.offsetWidth * direction;
    slider.value.scrollBy({ left: amount, behavior: 'smooth' });
  };
</script>

<template>
  <div class="container">
    <div class="slider">
      <div class="slider__content" ref="slider" @scroll="handleScroll">
        <div class="slider__item">
          <img class="slider__image" src="../../assets/images/what-page/avantages-1.jpg" alt="Image">
          <div class="slider__info">
            <h2>Augmentation de la portée et de la diversité des utilisateurs</h2>
          </div>
          <div class="slider__hover-text">Une conception inclusive permet d'atteindre un public plus large, notamment ceux qui sont souvent exclus en raison de leurs handicaps ou de leurs besoins spécifiques.</div>
        </div>
        <div class="slider__item">
          <img class="slider__image" src="../../assets/images/what-page/avantages-5.jpg" alt="Image">
          <div class="slider__info">
            <h2>Innovation</h2>
          </div>
          <div class="slider__hover-text">En cherchant à répondre aux besoins des utilisateurs ayant des exigences spécifiques, les concepteurs sont souvent amenés à innover, ce qui peut mener à la découverte de nouvelles solutions ou technologies.</div>
        </div>
        <div class="slider__item">
          <img class="slider__image" src="../../assets/images/what-page/avantages-3.jpg" alt="Image">
          <div class="slider__info">
            <h2>Effets bateau</h2>
          </div>
          <div class="slider__hover-text">En concevant de manière inclusive, nous créons souvent des effets bateau qui profitent à tous ! (Un effet bateau désigne une chose qui a été conçue à l'origine pour faciliter l'accessibilité, mais profite en définitive à tout le monde exemple: télécommande) Les utilisateurs ont recours à une grande variété de fonctionnalités de personnalisation et de technologies d'assistance (TA), pour interagir avec le contenu numérique conformément à leurs besoins.</div>
        </div>
        <div class="slider__item">
          <img class="slider__image" src="../../assets/images/what-page/avantages-4.jpg" alt="Image">
          <div class="slider__info">
            <h2>Responsabilité sociale</h2>
          </div>
          <div class="slider__hover-text">La conception inclusive renforce la réputation d'une entreprise ou d'une organisation comme étant socialement responsable, ce qui peut avoir des avantages en termes de fidélisation de la clientèle et d'attraction des talents.</div>
        </div>
        <div class="slider__item">
          <img class="slider__image" src="../../assets/images/what-page/avantages-2.jpg" alt="Image">
          <div class="slider__info">
            <h2>Rentabilité à long terme</h2>
          </div>
          <div class="slider__hover-text">Bien que la conception inclusive puisse nécessiter un investissement initial, elle peut entraîner des économies à long terme en évitant les coûts associés aux modifications ou aux mises à jour ultérieures pour améliorer l'accessibilité.</div>
        </div>

        <div class="slider__item">
          <img class="slider__image" src="../../assets/images/what-page/avantages-6.jpg" alt="Image">
          <div class="slider__info">
            <h2>Réduction des obstacles à l'apprentissage</h2>
          </div>
          <div class="slider__hover-text"> Pour les outils éducatifs, une conception inclusive peut aider à éliminer les barrières à l'apprentissage, permettant à plus de personnes d'accéder à l'éducation et de réaliser leur plein potentiel.</div>
        </div>

        <div class="slider__item">
          <img class="slider__image" src="../../assets/images/what-page/avantages-7.jpg" alt="Image">
          <div class="slider__info">
            <h2>Conformité légale</h2>
          </div>
          <div class="slider__hover-text">Dans de nombreux pays, l'accessibilité numérique est devenue une obligation légale. Une conception inclusive dès le départ permet d'éviter les éventuelles sanctions ou litiges.</div>
        </div>
      </div>
      <div class="slider__nav">
        <button class="slider__nav__button" :class="{ 'slider__nav__button--active': !start }" @click="scroll(-1)">Previous</button>
        <button class="slider__nav__button" :class="{ 'slider__nav__button--active': !end }" @click="scroll(1)">Next</button>
      </div>
    </div>
  </div>
</template>

  
<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.title {
  line-height: 1.1;
  font-weight: 300;
  margin: 4rem auto 1rem;
  width: 100%;
  max-width: 70%;
}

.slider {
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
}
.slider__content {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
  scrollbar-color: var(--scrollcolor) var(--scrollbackground);

  &::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 1rem;
    background: var(--scrollbackground);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: var(--scrollcolor);
  }
  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    background: var(--scrollbackground);
  }
}
.slider__item {
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 100%;
  width: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;
  &:hover .slider__hover-text {
    opacity: 1; 
  }
  .slider__hover-text {
    opacity: 0; 
    transition: opacity 0.3s ease; 
    position: absolute;
    color: white; 
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.6); 
    padding: 0.5rem;
    border-radius: 8px;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    font-family: system-ui;
    line-height: 1.1;
    font-weight: 300;
    font-size: 1.45rem;
    margin: 0;
    padding: 4rem 2rem 2rem;
  }

  @media (min-width: 460px) {
    aspect-ratio: 2/3;
    min-width: calc((100% / 2) - 2rem);
  }
  @media (min-width: 940px) {
    min-width: calc((100% / 2.9) - 4rem);
  }
}
.slider__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
.slider__info {
  position: relative;
  background: linear-gradient(to top, rgba(#000, 0.75), rgba(#203239, 0));
  h2 {
    color: #fff;
    font-family: system-ui;
    line-height: 1.1;
    font-weight: 300;
    font-size: 1.75rem;
    margin: 0;
    padding: 4rem 2rem 2rem;
  }
}
.slider__nav {
  margin: 1rem 0 4rem;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-content: center;
  align-items: center;
  pointer-events: none;

  @media (min-width: 460px) {
    justify-content: flex-end;
  }
}
.slider__nav__button {
  margin: 0;
  appearance: none;
  border: 0;
  border-radius: 2rem;
  background: #fff;
  color: #203239;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  line-height: 1;
  pointer-events: none;
  transition: 0.2s ease-out;
  opacity: 0.25;
  &--active {
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
  }
}
</style>