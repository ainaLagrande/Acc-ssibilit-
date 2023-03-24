<script setup>
import { ref,onMounted } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
// import { openModal, closeModal} from "../../composables/modal";


// TODO: factoring des fonctions, ajouter un href sur les section ? , mettre les fonctions sur toutes les img 
const accordionTabs = ref(null);
const showModal = ref(false);
const modalImage = ref('');


  function openModal(image) {
    showModal.value = true;
    modalImage.value = image;
  }

  function closeModal() {
    showModal.value = false;
  }

  onMounted(() => {
    if (accordionTabs.value) {
      accordionTabs.value.querySelectorAll('.how-img-container').forEach((accordionTab) => {
        accordionTab.addEventListener('click', () => openModal(accordionTab.querySelector('img').src));
      });
    }
  });
</script> 

<template>
  <div class="how-parts-global">
    <div class="how-parts-box">
      <div class="how-parts-item">
        <Accordion>
          <div id="test" class="test" dataChapitreId="1" ref="accordionTabs">
            <AccordionTab :header="'Fournir un titre unique pour chaque page ou vue.'">
              <p>
                Cet élément du document est souvent la première information annoncée par la technologie d'assistance. Cela aide à dire aux gens quelle page ou vue ils vont commencer à naviguer.
              </p>
              <div class="how-img-container" @click="openModal('../../../src/assets/images/title.png')">
                <img class="how-img" src="../../../src/assets/images/title.png" alt="lang code" />
              </div>
              <div class="how-img-container" @click="openModal('../../../src/assets/images/ul.png')">
                <img class="how-img" src="../../../src/assets/images/ul.png" alt="lang code" />
              </div>
            </AccordionTab>
          </div>
        </Accordion>
      </div>
    </div>

    <div v-if="showModal" class="modal" @click="closeModal">
      <img class="modal-content" :src="modalImage" />
    </div>
  </div>
</template>



<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  img{
  &:hover{
    cursor:inherit;
  }
}
}
img{
  &:hover{
    cursor: -webkit-zoom-in;
  }
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}
</style>
