<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Ajoutez un titre au carrousel">
                        Un carrousel sera souvent structuré autour d’une thématique commune.
                        <img class="how-img" src="../../assets/images/carrousel.png" alt="lang code">
                    </AccordionTab>
                    <AccordionTab header="Gérez les contrôles et l’état des éléments">
                        Avant de commencer, voici un bref rappel sur l’utilisation d’un carrousel :
                        <ul>
                            <li>Vous pouvez le laisser défiler automatiquement ;</li>
                            <li>Vous pouvez décider de le contrôler avec la souris, en cliquant sur les flèches “suivante” et “précédente” ;</li>
                            <li>Vous pouvez enfin utiliser les flèches du clavier “droite” et “gauche” pour le parcourir</li>
                        </ul>
                        <img class="how-img" src="../../assets/images/carrouselKey.png" alt="lang code">
                        Notez que les contrôles  sont visuellement masqués, mais sont affichés pour les technologies d’assistances.Il est important d’ajouter les attributs  aria-hidden   avec les valeurs  true  ou  false  , selon que le contenu a été lu ou non.
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
