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
                        <p>Le site n'autorise-t-il que l'orientation portrait ?<br>
                            1.Ouvrez le site web que vous souhaitez vérifier sur votre appareil mobile.<br>
                            2.Essayez de tourner votre appareil en mode portrait (vertical) ou en mode paysage (horizontal). Si le site web peut être tourné dans les deux modes sans problème, cela indique que le site est compatible avec les deux orientations.<br>
                            3.Vérifiez que tous les éléments du site, tels que les images, le texte et les boutons, sont bien visibles dans les deux orientations. Assurez-vous que les éléments ne se chevauchent pas et ne sont pas coupés ou tronqués.<br>
                            4.Essayez de naviguer sur le site dans les deux orientations pour vous assurer que toutes les fonctionnalités du site sont accessibles dans les deux modes. Assurez-vous que les menus, les liens et les boutons fonctionnent correctement dans les deux orientations.<br></p>
                    </AccordionTab>
                    <AccordionTab header="Supprimer le défilement horizontal">
                        <p>Exiger que quelqu'un fasse défiler horizontalement peut être difficile pour certains, irritant pour tous.</p>
                        <img class="how-img" src="../../assets/images/how-page/hidden.png" alt="inputTypeRange code">
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que les icônes de bouton et de lien peuvent être activées facilement.">
                       <p> Il est bon de s'assurer que des éléments tels que les menus hamburger, les icônes sociales, les visionneuses de galerie et d'autres commandes tactiles sont utilisables par une large gamme de tailles de mains et de stylets.<br>
                        1.Assurez-vous que les icônes de bouton et de lien ont une taille suffisante pour être facilement activées avec un doigt. Les icônes doivent être assez grandes pour être activées avec précision sans erreur.<br>
                        2.Assurez-vous que les icônes de bouton et de lien ont une zone de clic suffisamment grande pour être activées facilement. Les icônes doivent avoir une zone de clic clairement définie et suffisamment grande pour éviter les erreurs de clic.<br>
                        3.Utilisez des couleurs et des formes cohérentes pour les icônes de bouton et de lien. Les couleurs et les formes doivent être cohérentes avec les conventions de l'interface utilisateur pour aider les utilisateurs à comprendre l'action associée à l'icône.<br>
                        4.Utilisez des libellés textuels clairs pour les icônes de bouton et de lien. Les libellés textuels doivent être pertinents et descriptifs pour aider les utilisateurs à comprendre l'action associée à l'icône.<br>
                        5.Évitez de placer des icônes de bouton et de lien trop près les unes des autres pour éviter les erreurs de clic. Les icônes doivent être suffisamment espacées pour éviter les erreurs de clic accidentelles.<br>
                        6.Testez régulièrement les icônes de bouton et de lien pour vous assurer qu'ils fonctionnent correctement. Les icônes doivent être cliquables et réagir rapidement pour fournir un retour visuel à l'utilisateur.</p>
                    </AccordionTab>
                    <AccordionTab header="Prévoyez un espace suffisant entre les éléments interactifs afin de fournir une zone de défilement.">
                        <p>Certaines personnes qui éprouvent des problèmes de contrôle moteur tels que des tremblements des mains peuvent avoir beaucoup de difficulté à faire défiler les éléments interactifs qui présentent un espacement nul.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
