<script setup>
import { ref, onMounted } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
const accordionTabs = ref(null);


function maFonction() {
  let images = document.querySelectorAll('.how-img-container');
  
  images.forEach((image) => {
    image.addEventListener('click', () => {
      if (image.classList.contains('zoomed')) {
        image.classList.remove('zoomed');
      } else {
        image.classList.add('zoomed');
      }
    });
  });
  
}
onMounted(() => {
  if (accordionTabs.value) {
    accordionTabs.value.querySelectorAll('.how-img-container').forEach((accordionTab) => {
      accordionTab.addEventListener('click', maFonction);
    });
  }
});
</script>
<template>
  <div class="how-parts-global">
    <div class="how-parts-box">
      <div class="how-parts-item">
        <Accordion >
          <div id="test" class="test" dataChapitreId="1" ref="accordionTabs">
            <AccordionTab  :header="'Fournir un titre unique pour chaque page ou vue.'" >
              <p>Cet élément du document est souvent la première information annoncée par la technologie d'assistance. Cela aide à dire aux gens quelle page ou vue ils vont commencer à naviguer.</p>
              <div class="how-img-container" @click="maFonction">
                <img class="how-img" src="../../assets/images/title.png" alt="lang code">
              </div>

              <div class="how-img-container" @click="maFonction">
                <img class="how-img"  src="../../assets/images/title.png" alt="lang code">
              </div>

            </AccordionTab>
          </div>
        </Accordion>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

.zoomed {
  transform: scale(2); /* ajuster la valeur de zoom selon vos besoins */
}
</style>