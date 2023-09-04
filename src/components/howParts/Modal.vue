<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-modal">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">

                    <AccordionTab header="Assurez-vous que le contenu des éléments button, a et label est unique et descriptif.">
                        <p>
                            <ul>
                                <li>Il est important de masquer le reste de la page HTML aux technologies d'assistance.Il vous faudra ajouter un attribut  aria-hidden</li>
                                <li>Vous devez ajouter un attribut rôle à votre modale (  role=”dialog” ) ;</li>
                                <li>Certains types d’utilisateurs se servent uniquement du clavier pour parcourir les sites. Vous devez donc être en mesure de fermer la modale avec la touche “échap” ;</li>
                                <li>Il est important de mettre le focus sur votre modale une fois cette dernière ouverte ;</li>
                                <li>Il est important de cacher la modale quand cette dernière n’est pas ouverte.</li>
                            </ul>
                        </p>
                        <img class="how-img" src="../../assets/images/how-page/modal.png" alt="lang code">
                    </AccordionTab>

                    <AccordionTab header="Décrivez le contenu de votre modale">
                        <p>Grâce à l’attribut  aria-describedby , vous allez pouvoir indiquer le sens de cette dernière. Par exemple, si c’est une fenêtre modale dédiée à l’inscription.
                        </p>
                        <img class="how-img" src="../../assets/images/how-page/modalContent.png" alt="lang code">
                    </AccordionTab>

                    <AccordionTab header="Fermer la modale">
                        <p>Enfin, pour fermer votre fenêtre modale, il vous faut penser à intégrer un bouton prévu à cet effet. 
                            Un bouton classique ne prend pas en compte une partie des utilisateurs : 
                            ceux qui utilisent uniquement le navigateur.
                            Pour eux, nous allons avoir recours au JavaScript pour gérer :
                            <ul>
                                <li>le focus sur le bouton d’ouverture ou de fermeture de la modale ;</li>
                                <li>la gestion des touches clavier, et notamment la touche “Esc”.</li>
                            </ul>
                        </p>
                        <img class="how-img" src="../../assets/images/how-page/modalContentOpen.png" alt="lang code">
                        <p>Quand la modale s’ouvre, en plus de mettre à jour les attributs `aria-hidden`, nous mettons le focus sur le bouton de fermeture de la modale (ce qui permet de la fermer avec la barre “espace”.) Ici, via le JavaScript, nous écoutons les touches du clavier pour pouvoir fermer la modale quand la touche Escape  est pressée.
                        </p>
                        <img class="how-img" src="../../assets/images/how-page/modalEscape.png" alt="lang code">
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
