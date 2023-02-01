<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

</script>

<template>


    <div class="how-parts-global">
        <div class="how-parts-box">
            <!-- Firts item  -->
            <div class="how-parts-item">

                <Accordion :multiple="true">
                    <AccordionTab header="Utilisez un lang attribut sur l' html élément.">
                        Cela aide les technologies d'assistance telles que les lecteurs d'écran à prononcer correctement le contenu .
                    </AccordionTab>
                    <AccordionTab header="Fournir un unique title pour chaque page ou vue.">
                        Cet élément du document est souvent la première information annoncée par la technologie d'assistance. Cela aide à dire aux gens quelle page ou vue ils vont commencer à naviguer.
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que le zoom de la fenêtre n'est pas désactivé.">
                        Certaines personnes ont besoin d'augmenter la taille du texte jusqu'à ce qu'elles puissent le lire. Ne les empêchez pas de le faire, même pour les applications Web avec une expérience de type application native. Même les applications natives doivent respecter les paramètres du système d'exploitation pour redimensionner le texte.
                    </AccordionTab>
                </Accordion>
            </div>

            <!-- Second item  -->

        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
