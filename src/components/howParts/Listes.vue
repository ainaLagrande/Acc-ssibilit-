<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Utilisez les éléments de liste ( ol, ul et d'éléments) pour le contenu de la liste.">
                        <p>Cela peut inclure des sections de contenu connexe, des éléments affichés visuellement dans une mise en page de type grille ou des éléments frères.</p>
                        <img class="how-img" src="../../assets/images/ul.png" alt="lang code">
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>




</template>

<style lang="scss" scoped></style>
