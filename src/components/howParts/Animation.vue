<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Assurez-vous que les animations sont subtiles et ne clignotent pas trop.">
                        Certains types d'animations stroboscopiques ou clignotantes déclencheront des crises. D'autres peuvent être distrayants et perturbateurs, en particulier pour certains types de troubles cognitifs tels que le TDAH.
                    </AccordionTab>
                    <AccordionTab header="Fournir un mécanisme pour mettre en pause la vidéo d'arrière-plan.">
                        La vidéo d'arrière-plan peut être distrayante, surtout si le contenu est placé dessus.
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que toutes les animations respectent la prefers-reduced-motion requête média.">
                        Supprimez les animations lorsque le paramètre "réduire le mouvement" est activé. Si une animation est nécessaire pour communiquer le sens d'un concept, ralentissez sa durée.
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
