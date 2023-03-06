<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

</script>

<template>


    <div class="how-parts-contenu">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">

                    <AccordionTab header="Utilisez un langage simple et évitez les figures de style, les idiomes et les métaphores compliquées.">
                        Exemple: <br>
                        <span class="italic">“L'efficacité des traitements palliatifs en matière de maladies dégénératives demeure relativement limitée, ce qui soulève des préoccupations quant à l'amélioration de la qualité de vie des patients atteints de ces maladies.”</span><br>
                        Alors qu’en simplifié ça fait : <br>
                        <span class="italic">“Les traitements qui soulagent les symptômes des maladies qui affectent progressivement le corps sont limités dans leur efficacité. Cette situation inquiète quant à la capacité d'améliorer la qualité de vie des patients atteints de ces maladies.”</span>
                    </AccordionTab>

                    <AccordionTab header=" Assurez-vous que le contenu des éléments button, a et label est unique et descriptif.">
                        Des termes tels que « cliquez ici » et « en savoir plus » ne fournissent aucun contexte. Certaines personnes naviguent à l'aide d'une liste de tous les boutons ou liens d'une page ou d'une vue. Lorsque vous utilisez ce mode, les termes indiquent ce qui se passera en cas de navigation ou d'activation
                        <img class="how-img" src="../../assets/images/inputRechercher.png" alt="lang code">

                    </AccordionTab>

                    <AccordionTab header=" Alignez le texte à gauche ">
                        Utilisez du texte aligné à gauche pour les langues de gauche à droite et du texte aligné à droite pour les langues de droite à gauche 
                        Le texte centré ou justifié est difficile à lire,car ça peut entraîner l'affichage de grands espaces blancs entre les mots, ce qui ne facilite pas vraiment la lecture.
                        <img class="how-img" src="../../assets/images/txt-gauche.png" alt="lang code">
                    </AccordionTab>

                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>



</style>
