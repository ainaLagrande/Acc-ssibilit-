<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Utilisez l'élément <th>  pour les en-têtes de tableau (avec les scop attributs appropriés).">
                        <p>Selon la complexité de votre tableau , vous pouvez également envisager d'utiliser scope="col"pour les en-têtes de colonne et scope="row"pour les en-têtes de ligne. De nombreux types de technologies d'assistance utilisent encore le scop attribut pour les aider à comprendre et à décrire la structure d'un tableau.</p>
                        <img class="how-img" src="../../assets/images/how-page/tab.png" alt="lang code">

                    </AccordionTab>
                    <AccordionTab header="Utilisez le caption élément pour donner un titre au tableau.">
                        <p>Les tableaux caption doivent décrire le type d'informations qu'ils contiennent.</p>
                        <img class="how-img" src="../../assets/images/how-page/tabs.png" alt="lang code">
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>



</template>

<style lang="scss" scoped></style>
