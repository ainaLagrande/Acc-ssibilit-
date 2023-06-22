<script setup>
import { ref, onMounted, defineComponent } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';


const handleClick = () => {
  console.log('hello');
  emit('customEvent');

}



// TODO: factoring des fonctions, ajouter un href sur les section ? , mettre les fonctions sur toutes les img 


  
</script> 

<template>
  <div class="how-parts-global">
    <div class="how-parts-box">
      <div class="how-parts-item">
        <Accordion>
              <AccordionTab :header="'Fournir un titre unique pour chaque page ou vue.'" @click="handleClick" >
              <p >
                Cet élément du document est souvent la première information annoncée par la technologie d'assistance. Cela aide à dire aux gens quelle page ou vue ils vont commencer à naviguer.
              </p>

            </AccordionTab>
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
