<script setup>
import { ref, onMounted } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

const accordionTabs = ref(null);

function maFonction() {
  console.log("dlk");
  // Votre code à exécuter lorsque l'utilisateur clique sur l'élément
}

onMounted(() => {
  if (accordionTabs.value) {
    accordionTabs.value.querySelectorAll('.how-img').forEach((accordionTab) => {
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
              <div class="how-img" @click="maFonction">
                <img  src="../../assets/images/title.png" alt="lang code">
              </div>

              <div class="how-img" @click="maFonction">
                <img  src="../../assets/images/title.png" alt="lang code">
              </div>

            </AccordionTab>
          </div>
        </Accordion>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
</style>
