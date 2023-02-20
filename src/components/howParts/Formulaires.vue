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
                        Utilisez un couplage for/ id pour garantir le plus haut niveau de prise en charge du navigateur/de la technologie d'assistance.
                    </AccordionTab>
                    <AccordionTab header="Utilisez fieldset et legend éléments le cas échéant.">
                        Votre formulaire contient-il plusieurs sections d'entrées associées ? Utilisez le  fieldset pour les regrouper et legend pour fournir une étiquette indiquant à quoi sert cette section.
                    </AccordionTab>
                    <AccordionTab header="Les entrées sont utilisées en autocomplete le cas échéant.">
                        Fournir un mécanisme pour aider les gens à remplir plus rapidement, facilement et avec précision les champs de formulaire qui demandent des informations courantes (par exemple, nom, adresse, numéro de téléphone).
                    </AccordionTab>
                    <AccordionTab header=" Assurez-vous que les erreurs de saisie du formulaire sont affichées dans la liste au-dessus du formulaire après la soumission.">
                        Cela permet aux utilisateurs de technologies d'assistance d'avoir rapidement une compréhension de haut niveau des problèmes présents dans le formulaire. Ceci est particulièrement important pour les formulaires plus grands avec de nombreuses entrées. Assurez-vous que chaque erreur signalée comporte également un lien vers le champ correspondant avec une entrée non valide.
                    </AccordionTab>
                    <AccordionTab header="Associez la messagerie d'erreur d'entrée à l'entrée à laquelle elle correspond.">
                        Des techniques telles que l'utilisation aria-describedby permettent aux personnes qui utilisent une technologie d'assistance de comprendre plus facilement la différence entre l'entrée et le message d'erreur qui lui est associé.
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que les états d'erreur, d'avertissement et de réussite ne sont pas communiqués visuellement uniquement par la couleur.">
                        Les personnes daltoniennes, qui ont d'autres conditions de basse vision ou des compréhensions culturelles différentes de la couleur peuvent ne pas voir l'état changer ou comprendre quel type de rétroaction l'état représente si la couleur est le seul indicateur.
                    </AccordionTab>

                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>
