<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Utilisez des éléments de titre pour introduire le contenu.">
                        <p>Les éléments d'en-tête construisent un plan de document et ne doivent pas être utilisés pour une conception purement visuelle</p>
                        <img class="how-img" src="../../assets/images/how-page/titre-claire.png" alt="lang code">
                    
                    </AccordionTab>
                    <AccordionTab header="Utilisez un seul h1 élément par page ou vue.">
                        <p>L' h1 élément doit être utilisé pour communiquer l'objectif général de la page ou de la vue. N'utilisez pas l' h1 élément pour un titre qui ne change pas entre les pages ou les vues (par exemple, le nom du site).</p>
                    </AccordionTab>
                    <AccordionTab header="Les éléments de titre doivent être écrits dans un ordre logique.">
                        <p>L'ordre des éléments de titre doit être décroissant, en fonction de la profondeur du contenu. Par exemple, un h4 élément ne doit pas apparaître sur une page avant la première h3 déclaration d'élément. Un outil tel que Headers Map peut vous aider à évaluer cela.</p>
                    </AccordionTab>
                    <AccordionTab header="Ne sautez pas les niveaux de titre.">
                        <p>Par exemple, ne sautez pas de a h2à a h4 en sautant un h3 élément. Si les niveaux de titre sont ignorés pour un traitement visuel spécifique, utilisez plutôt les classes CSS.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

    

</template>

<style lang="scss" scoped></style>
