<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Assurez-vous qu'il existe un style de focus visible pour les éléments interactifs accessibles via la saisie au clavier.">
                        Une personne qui navigue avec un clavier, un interrupteur , une commande vocale ou un lecteur d'écran peut-elle voir où elle se trouve actuellement sur la page ?                        
                    </AccordionTab>
                    <AccordionTab header="Vérifiez que l'ordre de focus du clavier correspond à la disposition visuelle.">
                        Une personne naviguant avec un clavier ou un lecteur d'écran peut-elle se déplacer sur la page de manière prévisible ?
                    </AccordionTab>
                    <AccordionTab header="Supprimez les éléments focalisables invisibles.">
                        Supprimez la possibilité de se concentrer sur des éléments qui ne sont actuellement pas censés être détectables. Cela inclut des éléments tels que les menus déroulants inactifs, les navigations hors écran ou les modaux.                    
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
