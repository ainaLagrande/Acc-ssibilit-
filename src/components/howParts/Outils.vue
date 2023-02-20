<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Découvrez les validateurs et les checklists">
                        Un validateur est un outil en ligne dans lequel vous allez pouvoir insérer votre code ou la page de votre site. Le site va alors parcourir le code et vous fournir un rapport détaillé sur ce qui peut être amélioré. Un des validateurs les + connu et + performant reste Achecker https://achecker.achecks.ca/checker/index.php qui permet de vérifier que votre code HTML respecte les conventions et n’a pas d’erreurs.
                    </AccordionTab>
                    <AccordionTab header="Outils de formation ">
                        Une des formations ou j’ai puisé le plus de ressources pour ce site est Openclassroom , ils proposent des formations en lignes 100% gratuites.C’est une bonne plateforme ou l’on peut apprendre et exercer https://openclassrooms.com/fr/search?page=1&query=Accessibilit%C3%A9
                    </AccordionTab>
                    <AccordionTab header="Automatic Alternative Text">
                        Le module Automatic Alternative Text génère des textes alternatifs pour décrire les images à l'aide de l' API Microsoft Azure Cognitive Services .
                        https://www.drupal.org/project/auto_alter
                    </AccordionTab>
                    <AccordionTab header="Vérificateur d'accessibilité CKEditor">
                        Il est important que vous rendiez votre contenu accessible dans les pratiques d'édition quotidiennes. Le module CKEditor Accessibility Checker inspecte le contenu créé dans l'éditeur de contenu Drupal et résout immédiatement les problèmes détectés. Le module pourrait bientôt faire partie du noyau Drupal.
                        https://www.drupal.org/project/ckeditor_a11ychecker
                    </AccordionTab>
                    <AccordionTab header="Block ARIA Landmark Roles">
                        L'utilisation de WAI-ARIA dans le balisage de votre site devient plus avancée avec le module Drupal Block ARIA Landmark Roles . Chaque bloc de la mise en page de votre site peut se voir attribuer un rôle de point de repère ARIA et/ou des étiquettes ARIA directement dans le formulaire de configuration de bloc.
                        https://www.drupal.org/project/block_aria_landmark_roles
                    </AccordionTab>
                    <AccordionTab header="High contrast">
                        Le module Contraste élevé permet aux utilisateurs de basculer entre le thème actif sur votre site Drupal et une version à contraste élevé du thème. Cela rendra votre site Web plus accessible aux utilisateurs ayant des problèmes de vue.
                        https://www.drupal.org/project/high_contrast
                    </AccordionTab>
                    <AccordionTab header="Text Resize">
                        Étant donné que la taille du texte ajustable est l'une des conditions requises pour rendre votre site Web accessible, le module de redimensionnement du texte est très utile. Il fournit aux visiteurs du site Web un bloc doté de deux boutons pour agrandir ou réduire la taille de la police.
                        https://www.drupal.org/project/text_resize
                    </AccordionTab>
                    <AccordionTab header="Text Size (Drupal 7 uniquement)">
                        Le module Taille du texte remplit une mission similaire. Il fournit un changeur de taille de texte réglable ou une fonction de zoom. Bien que ses capacités de zoom soient similaires au zoom de texte dans Firefox, le module peut également fonctionner avec des objets multimédias variables, des images pixelisées et des images vectorielles.
                        https://www.drupal.org/project/textsize
                    </AccordionTab>
                    <AccordionTab header="htmLawed">
                        Le balisage HTML approprié est essentiel pour rendre votre site Web accessible. Le module htmLawed Drupal vous donne un contrôle hautement personnalisable de votre code HTML. Il utilise la bibliothèque PHP htmLawed pour restreindre et purifier le code.
                        https://www.drupal.org/project/htmlawed
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
