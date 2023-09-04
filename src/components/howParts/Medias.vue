<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>


    <div class="how-parts-carrousel">
        <div class="how-parts-box">
            <div class="how-parts-item">
                <Accordion :multiple="true">
                    <AccordionTab header="Assurez-vous que tous les img éléments ont un alt attribut.">
                        <p>Les alt attributs (texte alternatif) donnent une description d'une image pour les personnes qui ne peuvent peut-être pas la voir. Lorsqu'un alt attribut n'est pas présent sur une image, un lecteur d'écran peut annoncer le nom de fichier et le chemin de l'image à la place. Cela ne parvient pas à communiquer le contenu de l'image.</p>                    
                        <img class="how-img" src="../../assets/images/how-page/alt.png" alt="inputTypeRange code">
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que les images décoratives utilisent alt des valeurs d'attribut nulles (vides).">
                        <p>Les attributs nuls alt sont aussi parfois appelés alt attributs vides. Ils sont créés en n'incluant aucune information entre les guillemets ouvrants et fermants d'un alt attribut. Les images décoratives ne communiquent pas les informations nécessaires à la compréhension du sens général du site. Historiquement, ils étaient utilisés pour les fioritures et les images de gif d'espacement , mais ont tendance à être moins pertinents pour les sites Web et les applications Web modernes.</p>                    
                    </AccordionTab>
                    <AccordionTab header="Fournir une alternative textuelle pour les images complexes telles que les tableaux, les graphiques et les cartes.">
                        <p>Existe-t-il un texte brut répertoriant des points sur la carte ou des sections d'un organigramme ? Décrivez toutes les informations visibles. Cela inclut les axes du graphique, les points de données et les étiquettes, ainsi que le point global que le graphique communiquée.           <br>         
                        Exemple:<br>
                        alt="Tableau présentant les ventes par mois. Le tableau contient 5 colonnes et 12 lignes, représentant chaque mois de l'année. Les données sont présentées en milliers de dollars.</p>
                    </AccordionTab>
                    <AccordionTab header="Pour les images contenant du texte, assurez-vous que la description alternative inclut le texte de l'image.">
                        <p>Par exemple, le logo FedEx doit avoir une valeur alternative de "FedEx".</p>
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que le média n'est pas en lecture automatique.">
                        <p>Une vidéo et un son inattendus peuvent être gênants et perturbants, en particulier pour certains types de troubles cognitifs tels que le TDAH. Certains types de vidéos et d'animations en lecture automatique peuvent déclencher des troubles vestibulaires et épileptiques.
                        </p>
                        <img class="how-img" src="../../assets/images/how-page/video.png" alt="inputTypeRange code">
                    </AccordionTab>
                    <AccordionTab header="Assurez-vous que les contrôles multimédias utilisent le balisage approprié.">
                        <p>Par exemple, assurez-vous qu'un bouton de sourdine audio à un état de bascule enfoncé lorsqu'il est actif, ou qu'un curseur de volume utilisé .</p>
                        <img class="how-img" src="../../assets/images/how-page/inputTypeRange.png" alt="inputTypeRange code">
                    </AccordionTab>
                    <AccordionTab header="Vérifiez que tous les médias peuvent être mis en pause.">
                        <p>Fournir une fonction de pause globale sur n'importe quel élément multimédia. Si l'appareil dispose d'un clavier, assurez-vous que le fait d'appuyer sur la Space Touche peut interrompre la lecture. Assurez-vous également de ne pas interférer avec la capacité de la clé Space à faire défiler la page/la vue lorsque vous ne vous concentrez pas sur un contrôle de formulaire.
                        Pour éviter ça, vous pouvez ajouter l'attribut tabindex="-1" à tous les éléments de formulaire qui ne sont pas des contrôles interactifs. Cela permettra à l'utilisateur de naviguer dans les éléments de formulaire avec la touche de tabulation, mais empêchera ces éléments de recevoir le focus par défaut, ce qui signifie que l'utilisateur pourra continuer à utiliser la touche d'espacement pour faire défiler la page.</p>
                        <img class="how-img" src="../../assets/images/how-page/space.png" alt="inputTypeRange code">
                    </AccordionTab>
                    <AccordionTab header="Confirmez la présence de légendes.">
                        <p>Les sous-titres permettent à une personne qui ne peut pas entendre le contenu audio d'une vidéo de comprendre son contenu.</p>                      
                    </AccordionTab>
                    <AccordionTab header="Supprimez les déclencheurs de crise.">
                        <p>Certains types d'animations stroboscopiques ou clignotantes déclencheront des crises.</p>
                    </AccordionTab>
                    <AccordionTab header="Confirmez que les transcriptions sont disponibles. ">
                        <p>Les transcriptions permettent aux personnes qui ne peuvent pas entendre de comprendre le contenu audio. Cela permet également aux utilisateurs de digérer le contenu audio à un rythme qui leur convient.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>
    

</template>

<style lang="scss" scoped></style>
