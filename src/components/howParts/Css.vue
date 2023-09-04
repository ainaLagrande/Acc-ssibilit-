<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Bien masquer votre contenu">
                        <p>Il est important d’apprendre à bien masquer votre contenu. Une mauvaise utilisation du CSS peut le masquer à l’ensemble de vos utilisateurs.
                        Privilégiez les unités relatives aux unités fixes. Elles vous permettront de garder la consistance de votre design si la taille de la police est augmentée.
                        Évitez les mauvaises pratiques
                        Dans l’exemple ci-dessous, ce texte va être affiché à l’écran, sera lisible mais n'apparaîtra pas côté HTML. Autrement dit, les technologies d'assistance n’ont aucun moyen de savoir que ce texte existe.</p>
                        
                        <img class="how-img" src="../../assets/images/how-page/css.png" alt="lang code">
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
