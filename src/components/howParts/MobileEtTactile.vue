<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Vérifiez que le site peut être tourné dans n'importe quelle orientation.">
                        Le site n'autorise-t-il que l'orientation portrait ?
                    </AccordionTab>
                    <AccordionTab header="Supprimer le défilement horizontal">
                        Exiger que quelqu'un fasse défiler horizontalement peut être difficile pour certains, irritant pour tous.
                    </AccordionTab>
                    <AccordionTab header=" Assurez-vous que les icônes de bouton et de lien peuvent être activées facilement.">
                        Il est bon de s'assurer que des éléments tels que les menus hamburger, les icônes sociales, les visionneuses de galerie et d'autres commandes tactiles sont utilisables par une large gamme de tailles de mains et de stylets.
                    </AccordionTab>
                    <AccordionTab header="Prévoyez un espace suffisant entre les éléments interactifs afin de fournir une zone de défilement.">
                        Certaines personnes qui éprouvent des problèmes de contrôle moteur tels que des tremblements des mains peuvent avoir beaucoup de difficulté à faire défiler les éléments interactifs qui présentent un espacement nul.
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
