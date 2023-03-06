<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Utilisez  l’élément <a> pour les liens.">
                        Les liens doivent toujours avoir un href attribut, même lorsqu'ils sont utilisés dans des applications à page unique. Sans href attribut, le lien ne sera pas correctement exposé à la technologie d'assistance. Un exemple de ceci serait un lien qui utilise un onclick événement, à la place d'un href attribut.
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que les liens sont reconnaissables en tant que liens">
                        La couleur seule n'est pas suffisante pour indiquer la présence d'un lien. Les soulignements sont un moyen populaire et communément compris de communiquer la présence d'un contenu de lien.
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que les contrôles ont des états focus.">
                        Les styles de focus visibles aident les utilisateurs à déterminer quel élément interactif a le focus clavier. Cela leur permet de savoir qu'ils peuvent effectuer des actions telles que l'activation d'un bouton ou la navigation vers la destination d'un lien.
                    </AccordionTab>
                    <AccordionTab header="Utilisez le button élément pour les boutons.">
                        Les boutons sont utilisés pour soumettre des données ou effectuer une action à l'écran qui ne modifie pas le focus du clavier. Vous pouvez ajouter type="button" à un button élément pour empêcher le navigateur de tenter de soumettre des informations de formulaire lorsqu'il est activé.
                    </AccordionTab>
                    <AccordionTab header="Fournissez skip link et assurez-vous qu'il est visible lorsqu'il est sélectionné.">
                        Un skip link peut être utilisé pour fournir un accès rapide au contenu principal d'une page ou d'une vue. Cela permet à une personne de contourner facilement le contenu répété à l'échelle mondiale, tel que la navigation principale d'un site Web ou un widget de recherche persistant.
                    </AccordionTab>
                    <AccordionTab header="Identifiez les liens qui s'ouvrent dans un nouvel onglet ou une nouvelle fenêtre. ">
                        Idéalement, évitez les liens qui s'ouvrent dans un nouvel onglet ou une nouvelle fenêtre. Si un lien le fait, assurez-vous que le comportement du lien sera communiqué de manière évidente pour tous les utilisateurs. Cela aidera les gens à comprendre ce qui se passera avant d'activer le lien. Bien que cette technique ne soit techniquement pas requise pour la conformité, il s'agit d'un domaine de frustration souvent cité par de nombreux types d'utilisateurs de technologies d'assistance.
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
