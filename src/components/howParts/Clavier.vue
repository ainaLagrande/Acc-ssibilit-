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
                        <p>Une personne qui navigue avec un clavier, un interrupteur , une commande vocale ou un lecteur d'écran peut-elle voir où elle se trouve actuellement sur la page ?</p>                        
                        <img class="how-img" src="../../assets/images/how-page/focus.png" alt="lang code">
                    </AccordionTab>
                    <AccordionTab header="Vérifiez que l'ordre de focus du clavier correspond à la disposition visuelle.">
                        <p>Une personne naviguant avec un clavier ou un lecteur d'écran peut-elle se déplacer sur la page de manière prévisible ?<br>
                            Voici comment vous pouvez vérifier que l'ordre de focus du clavier correspond à la disposition visuelle :<br>
                            1.Ouvrez votre page web dans un navigateur web.<br>
                            2.Appuyez sur la touche "Tab" de votre clavier pour naviguer d'un élément à l'autre.<br>
                            3.Regardez attentivement chaque élément qui reçoit le focus du clavier et assurez-vous que l'ordre de tabulation correspond à l'ordre visuel des éléments sur la page.<br>
                            4.Si vous constatez que l'ordre de tabulation est incorrect, vous pouvez corriger l'ordre en modifiant l'attribut tabindex des éléments HTML. Par exemple, vous pouvez ajouter l'attribut tabindex="1" pour spécifier que l'élément doit être le premier élément à recevoir le focus, ou tabindex="2" pour le deuxième élément, et ainsi de suite.<br>
                            5.Après avoir modifié l'ordre de tabulation, vérifiez à nouveau la disposition en appuyant sur la touche "Tab" de votre clavier pour vous assurer que l'ordre de focus correspond à la disposition visuelle.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Supprimez les éléments focalisables invisibles.">
                        <p>Supprimez la possibilité de se concentrer sur des éléments qui ne sont actuellement pas censés être détectables. Cela inclut des éléments tels que les menus déroulants inactifs, les navigations hors écran ou les modaux.          <br>          
                        1.Identifiez les éléments focalisables invisibles sur votre site web. Vous pouvez le faire en utilisant les outils de développement de votre navigateur web pour inspecter les éléments HTML.<br>

                        2.Pour chaque élément focalisable invisible, supprimez l'attribut tabindex s'il est présent.<br>

                        3.Si l'élément est nécessaire pour la fonctionnalité de votre site web, remplacez-le par un élément visible. Par exemple, si vous avez un bouton qui n'est pas visible mais qui est nécessaire pour déclencher une action, vous pouvez remplacer ce bouton par un bouton visible avec une étiquette descriptive.<br>

                        4.Vérifiez à nouveau votre site web pour vous assurer que tous les éléments focalisables sont visibles.
                    </p>                     
                    </AccordionTab>
               </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
