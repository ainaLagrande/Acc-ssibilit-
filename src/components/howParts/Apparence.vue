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
                        1.Utilisez un lecteur d'écran : installez un lecteur d'écran tel que NVDA (NonVisual Desktop Access) ou JAWS (Job Access With Speech) sur votre ordinateur. Ces outils permettent aux utilisateurs ayant une déficience visuelle d'interagir avec votre contenu en utilisant uniquement le clavier et la voix.<br>
                        2.Testez la navigation au clavier : utilisez le clavier pour naviguer dans votre contenu. Assurez-vous que tous les éléments interactifs tels que les boutons, les liens et les formulaires peuvent être facilement accessibles à l'aide du clavier. Utilisez la touche Tab pour naviguer entre les éléments et Shift + Tab pour revenir en arrière.<br>
                        3.Vérifiez les descriptions textuelles alternatives : assurez-vous que toutes les images, les graphiques et les éléments non textuels ont des descriptions textuelles alternatives. Les lecteurs d'écran utilisent ces descriptions pour fournir des informations aux utilisateurs ayant une déficience visuelle.<br>
                        4.Testez les couleurs et les contrastes : utilisez un outil de vérification de contraste de couleurs pour vérifier si les couleurs de votre contenu respectent les normes d'accessibilité. Assurez-vous que les contrastes sont suffisamment élevés pour être facilement visibles par les utilisateurs ayant une déficience visuelle.
                        Une couleur écrite sur une autre couleur doit être minutieusement choisie.
                        <a class="underline" href="https://coolors.co/contrast-checker"> ce site est super pratique pour ça </a>
                        5. Activez des modes tels que Windows Contraste élevé ou Couleurs inversées . Votre contenu est-il toujours lisible ? Vos icônes, bordures, liens, champs de formulaire et autres contenus sont-ils toujours présents ? Pouvez-vous distinguer le contenu de premier plan de l'arrière-plan ? 

                    </AccordionTab>
                    <AccordionTab header="Augmentez la taille du texte à 200 %.">
                        Le contenu est-il toujours lisible ? L'augmentation de la taille du texte entraîne-t-elle un chevauchement du contenu ?
                    </AccordionTab>
                    <AccordionTab header="Revérifiez qu'une bonne proximité entre les contenus est maintenue.">
                        Utilisez le test de la paille pour vous assurer que les personnes qui dépendent du logiciel de zoom d'écran peuvent toujours découvrir facilement tout le contenu.
                        C'est  est un test simple qui permet de vérifier l'accessibilité d'un site Web ou d'une application en simulant une utilisation par une personne ayant une déficience visuelle.
                        Le test consiste à utiliser une paille pour masquer une partie de l'écran de l'ordinateur et naviguer sur le site Web ou l'application en utilisant uniquement le clavier. 
                        Cela simule la vision tunnel d'une personne ayant une déficience visuelle et vérifie si le site Web ou l'application peut être utilisé facilement avec un lecteur d'écran et une navigation au clavier.
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
