<script setup>
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

// const props = defineProps({
//     dataChapitreId: {
//       type: String,
//       required: true
//     }
// })

// let elements = document.querySelectorAll('.test');

// elements.forEach(element => {
//   element.addEventListener('click', function() {
//     // let chapitreId = element.getAttribute('dataChapitreId');
//     // localStorage.setItem('chapitreId', 1);
//     console.log("dlk");

//   });
// });

const accordionTabs = document.querySelectorAll('test');

accordionTabs.forEach(accordionTab => {
  accordionTab.addEventListener('click', maFonction);
});

function maFonction() {
  console.log("dlk");
  // Votre code à exécuter lorsque l'utilisateur clique sur l'élément
}


</script>

<template>
  <div class="how-parts-global">
    <div class="how-parts-box">
      <div class="how-parts-item">
        <Accordion >
          <div id="test" class="test" dataChapitreId="1">
            <AccordionTab  :header="'Fournir un titre unique pour chaque page ou vue.'" >
              <p>Cet élément du document est souvent la première information annoncée par la technologie d'assistance. Cela aide à dire aux gens quelle page ou vue ils vont commencer à naviguer.</p>
              <img class="how-img" src="../../assets/images/title.png" alt="lang code">
            </AccordionTab>
          </div>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
