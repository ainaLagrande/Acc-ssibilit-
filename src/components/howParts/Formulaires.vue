<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>
    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Toutes les entrées d'un formulaire sont associées à un label élément correspondant.">
                        <p>Utilisez un couplage for/ id pour garantir le plus haut niveau de prise en charge du navigateur/de la technologie d'assistance.
                        </p>
                        <img class="how-img" src="../../assets/images/how-page/form-label.png" alt="lang code">
                    </AccordionTab>
                    <AccordionTab header="Utilisez fieldset et legend éléments le cas échéant.">
                        <p>Votre formulaire contient-il plusieurs sections d'entrées associées ? Utilisez le  fieldset pour les regrouper et legend pour fournir une étiquette indiquant à quoi sert cette section.
                        </p>
                        <img class="how-img" src="../../assets/images/how-page/form-field.png" alt="lang code">
                    </AccordionTab>
                    <AccordionTab header="Les entrées sont utilisées en autocomplete">
                        <p>
                            Fournir un mécanisme pour aider les gens à remplir plus rapidement, facilement et avec précision les champs de formulaire qui demandent des informations courantes (par exemple, nom, adresse, numéro de téléphone).<br>
                            Voici quelques exemples de valeurs d'attribut autocomplete couramment utilisées :<br>
                            on : active la fonction de complétion automatique pour le champ de formulaire<br>
                            off : désactive la fonction de complétion automatique pour le champ de formulaire<br>
                            name : utilise le nom du champ de formulaire comme clé de stockage pour la complétion automatique<br>
                            email : utilise l'adresse e-mail comme clé de stockage pour la complétion automatique<br>
                            address-line1, address-line2, postal-code, country : utilise ces noms de champs pour stocker les informations d'adresse
                        </p>
                        
                        <img class="how-img" src="../../assets/images/how-page/form_auto.png" alt="lang code">
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que les erreurs de saisie du formulaire sont affichées dans la liste au-dessus du formulaire après la soumission.">
                        <p>Cela permet aux utilisateurs de technologies d'assistance d'avoir rapidement une compréhension de haut niveau des problèmes présents dans le formulaire. Ceci est particulièrement important pour les formulaires plus grands avec de nombreuses entrées. Assurez-vous que chaque erreur signalée comporte également un lien vers le champ correspondant avec une entrée non valide.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Associez la messagerie d'erreur d'entrée à l'entrée à laquelle elle correspond.">
                        <p>Des techniques telles que l'utilisation aria-describedby permettent aux personnes qui utilisent une technologie d'assistance de comprendre plus facilement la différence entre l'entrée et le message d'erreur qui lui est associé.
                        </p>
                        <img class="how-img" src="../../assets/images/how-page/form-error.png" alt="lang code">
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que les états d'erreur, d'avertissement et de réussite ne sont pas communiqués visuellement uniquement par la couleur.">
                        <p>Les personnes daltoniennes, qui ont d'autres conditions de basse vision ou des compréhensions culturelles différentes de la couleur peuvent ne pas voir l'état changer ou comprendre quel type de rétroaction l'état représente si la couleur est le seul indicateur.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
