<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

</script>

<template>


    <div class="how-parts-global">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">

                    <AccordionTab header="Utilisez un lang attribut sur l' html élément.">
                        Cela aide les technologies d'assistance telles que les lecteurs d'écran à prononcer correctement le contenu .
                        <img class="how-img" src="../../assets/images/lang.png" alt="lang code">
                    </AccordionTab>

                    <AccordionTab header="Fournir un unique title pour chaque page ou vue.">
                        Cet élément du document est souvent la première information annoncée par la technologie d'assistance. Cela aide à dire aux gens quelle page ou vue ils vont commencer à naviguer.
                    </AccordionTab>

                    <AccordionTab header="Assurez-vous que le zoom de la fenêtre n'est pas désactivé.">
                        Certaines personnes ont besoin d'augmenter la taille du texte jusqu'à ce qu'elles puissent le lire. Ne les empêchez pas de le faire, même pour les applications Web avec une expérience de type application native. Même les applications natives doivent respecter les paramètres du système d'exploitation pour redimensionner le texte.
                    </AccordionTab>

                    <AccordionTab header="Utilisez des balises sémantiques pour indiquer les régions de contenu importantes">
                        Utilisez le nav élément pour envelopper la navigation d'un site et le main élément pour contenir le contenu principal d'une page. Le lecteur d'écran lit à voix haute chaque élément au fur et à mesure que vous progressez dans le contenu, vous notifiant ce qui est un paragraphe, ce qui est un titre, etc. Si le balisage non sémantique est requis dans le développement, utilisez  des éléments de repère.
                    </AccordionTab>

                    <AccordionTab header="Utilisez des éléments de repère (aria attributs) pour indiquer les régions de contenu importantes.">
                        Les régions repères aident à communiquer la mise en page et les zones importantes d'une page ou d'une vue, et peuvent permettre un accès rapide à ces régions. 
                        Apprenez en plus dans <a href="https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6964643-aidez-vos-utilisateurs-a-naviguer-sur-votre-site">ce chapitre </a>                     
                        <img class="how-img" src="../../assets/images/aria.png" alt="lang code">

                    </AccordionTab>

                    <AccordionTab header="Évitez d'utiliser l' autofocus attribut.">
                        Les personnes aveugles ou malvoyantes peuvent être désorientées lorsque la mise au point est déplacée sans leur permission. De plus, l'autofocus peut être problématique pour les personnes ayant une déficience motrice, car cela peut leur créer un travail supplémentaire pour naviguer hors de la zone de mise au point automatique et vers d'autres emplacements sur la page/vue.
                    </AccordionTab>

                    <AccordionTab header="Autoriser l'extension des délais d'expiration des sessions">
                        Si vous ne pouvez pas supprimer complètement les délais d'expiration de session, laissez la personne qui utilise votre site facilement éteindre, ajuster ou prolonger sa session bien avant qu'elle ne se termine.                    
                    </AccordionTab>

                    <AccordionTab header="Supprimer title et les tooltips d'attribut.">
                        Le title attribut présente de nombreux problèmes et ne doit pas être utilisé si les informations fournies sont importantes pour que tout le monde y ait accès. Une utilisation acceptable de l' title attribut consisterait à étiqueter un iframe élément pour indiquer le contenu qu'il contient.                   
                    </AccordionTab>

                </Accordion>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.p-accordion-header-action{

    
}

</style>
