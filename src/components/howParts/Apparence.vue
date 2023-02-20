<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Vérifiez votre contenu dans des modes de navigation spécialisés.">
                        Activez des modes tels que Windows Contraste élevé ou Couleurs inversées . Votre contenu est-il toujours lisible ? Vos icônes, bordures, liens, champs de formulaire et autres contenus sont-ils toujours présents ? Pouvez-vous distinguer le contenu de premier plan de l'arrière-plan ? 
                        Une couleur écrite sur une autre couleur doit être minutieusement choisie.
                        Ce site est super pratique : https://coolors.co/contrast-checker…
                    </AccordionTab>
                    <AccordionTab header="Augmentez la taille du texte à 200 %.">
                        Le contenu est-il toujours lisible ? L'augmentation de la taille du texte entraîne-t-elle un chevauchement du contenu ?
                    </AccordionTab>
                    <AccordionTab header="Revérifiez qu'une bonne proximité entre les contenus est maintenue.">
                        Utilisez le test de la paille pour vous assurer que les personnes qui dépendent du logiciel de zoom d'écran peuvent toujours découvrir facilement tout le contenu.
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que la couleur n'est pas le seul moyen de transmettre l'information.">
                        Il faut penser tes design en noir et blanc, les couleurs ne doivent pas être l'information.
                        Il faut faire attention de rendre les couleurs optionnelles, comme ici en ajoutant une icon
                        Pouvez-vous toujours voir où se trouvent les liens parmi le contenu du corps si tout est en niveaux de gris ?
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que les instructions ne sont pas visuelles ou uniquement audio.">
                        Utilisez une combinaison de caractéristiques pour écrire des repères, en particulier les noms réels des sections et des éléments, plutôt que de simples descriptions comme l'emplacement ("à droite") ou l'audio ("après la tonalité").
                    </AccordionTab>
                    <AccordionTab header="Utilisez une mise en page simple, directe et cohérente.">
                        Une mise en page compliquée peut être difficile à comprendre et à utiliser.
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
