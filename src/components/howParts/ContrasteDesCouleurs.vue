<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Vérifiez le contraste pour tout le texte de taille normale.">
                        <p>La conformité au niveau AA nécessite un rapport de contraste de 4,5:1.</p>                       
                    </AccordionTab>
                    <AccordionTab header="Vérifiez le contraste pour tous les textes de grande taille.">
                        <p>La conformité au niveau AA nécessite un rapport de contraste de 3:1.</p>                        
                    </AccordionTab>
                    <AccordionTab header="Vérifiez le contraste de toutes les icônes.">
                        <p>La conformité au niveau AA nécessite un rapport de contraste de 3,0:1.</p>
                    </AccordionTab>
                    <AccordionTab header="Vérifiez le contraste des bordures des éléments de saisie (saisie de texte, boutons radio, cases à cocher, etc.).">
                        <p>La conformité au niveau AA nécessite un rapport de contraste de 3,0:1.</p>
                    </AccordionTab>
                    <AccordionTab header="Vérifiez le texte qui chevauche les images ou la vidéo.">
                        <p>Le texte est-il toujours lisible ?</p>
                    </AccordionTab>
                    <AccordionTab header="Vérifiez les sélections couleurs personnalisées.">
                        <p>Le contraste des couleurs que vous avez défini dans votre ::sélection déclaration CSS est -il suffisant ? Sinon, quelqu'un pourrait ne pas être en mesure de le lire s'il le surligne.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
