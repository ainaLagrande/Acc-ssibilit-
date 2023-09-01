<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';



</script>

<template>
    <header class="how-header">
      <h3 class="how-header-title">QUOI?</h3>
    </header>

      <div class="how-container what-container">
        <div class="container">
          <div class="content-wrapper">
            <div class="child">
              <h1>CSS-only horizontal scroll tentative</h1>
              <p>The idea is to create an horizontal scroll layout and to allow the user to scroll up/down the mouse to scroll left/right.</p>
              <p>So… please scroll <strong>down</strong> with your mouse.</p>
            </div>

            <div class="child">
              <h2>The trick</h2>
              <p>Rotate -90deg the container, and 90deg its children blocks.</p>
              <p>You have to fix container and children dimensions. :(</p>
              <p>See CSS for rather correct positioning.</p>
            </div>

            <div class="child">
              <h2>Desktop browsers</h2>
              <p>Vertical scroll… scrolls. :)</p>
              <p>But horizontal scroll (e.g. with a trackpad) doesn’t. :(</p>
            </div>

            <div class="child">
              <h2>Mobile browsers</h2>
              <p>Only horizontal touchmove works on Chrome. :)</p>
              <p>Only vertical touchmove works on Safari and Firefox. :(</p>
            </div>
            <div class="child">
              <h2>Conclusion</h2>
              <p>Without JavaScript: no good idea.</p>
            </div>
          </div>
        </div>
      </div>
</template>

<style lang="scss" scoped>

.what-container{
  position: relative;
}
.container {
  position: relative;
  top: -160px; 
  // top: 0;
  left: 0;
  width: 100vh;
  height: calc(100vw);

  overflow: scroll;
  transform: rotate(-90deg);
  transform-origin: center calc(50vh);
}
/* Pour cacher la scrollbar pour tous les navigateurs */
.container {
  -ms-overflow-style: none;  /* pour IE et Edge */
  scrollbar-width: none;  /* pour Firefox */
}

/* Pour cacher la scrollbar pour Chrome, Safari et Opera */
.container::-webkit-scrollbar {
  display: none;
}


.child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1em auto;
  padding: 2em;
  width: 500px;
  height: 500px;

  transform: rotate(90deg);

  border: 1px solid #333;
  box-shadow: 3px 3px 6px rgba(#333, .3);

  text-align: center;
  
  p {
    line-height: 1.5;
  }
}
</style>
