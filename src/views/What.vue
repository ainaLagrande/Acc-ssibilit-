<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';



</script>

<template>
    <header class="how-header">
      <h3 class="how-header-title">QUOI?</h3>
    </header>

    <div class="what-container ">
      <!-- First section  -->
      <section class="first-section">
        <div class="txt">
          <h3 class="section-title">Handicap</h3> 
          <p>La première chose à laquelle on pense lorsqu'on entend le mot « accessibilité », c'est le handicap.<br>
            Or, dans les faits, tout le monde rencontre des <span class="bold-txt">obstacles à l'accessibilité</span> lorsque <span class="bold-txt">l'environnement ne répond pas à ses besoins.</span><br>
            Nous parvenons mieux à supprimer certains obstacles que d'autres, non seulement au niveau technologique, mais aussi en termes de <span class="bold-txt"></span>comportements associés. <br>
            Par exemple, les lunettes sont un type de <span class="bold-txt">technologie d'assistance (TA).</span> <br>
            Bien que les personnes qui portent des lunettes en aient besoin pour se repérer dans le monde, elles se considèrent rarement comme atteintes d'un handicap. <br>
            Cela est dû au fait qu'en plus d'être facilement accessibles. <br>
            L'accessibilité sur le web est un sujet crucial pour garantir <span class="bold-txt">l'égalité des chances </span>et permettre à tous les individus, quels que soient leurs capacités, de naviguer et d'utiliser les ressources en ligne de manière efficace et sans obstacles.
            Cela signifie que les sites web et les applications doivent être conçus et développés de manière à ce qu'ils soient accessibles à tous les utilisateurs, y compris ceux ayant des déficiences <span class="bold-txt">visuelles, auditives, motrices, cognitives ou autres.</span>  <br>
            Les normes d'accessibilité sur le web ont été établies pour aider les concepteurs et les développeurs à atteindre cet objectif, en fournissant des directives spécifiques sur la manière de créer des sites web et des applications accessibles.
            

            L'un des moyens d'appréhender le handicap, c'est de le considérer comme une <span class="bold-txt">inadéquation entre la personne et son environnement</span>.<br>
            Cette inadéquation peut être <span class="bold-txt">permanente, temporaire ou situationnelle.</span>

          </p>
        </div>
        <div class="media">
          <img src="../assets/images/first-section.png">
        </div>
      </section>
      <div class="inter-section">
        <img src="../assets/images/inadequation.png" alt="explication de l'inédequation">
      </div>
      <!-- Second section  -->
      <section class="second-section">
        <div class="media">
          <img src="../assets/images/second-section.png">
        </div>
        <div class="txt">
          <h3 class="section-title">Avantages qui profitent à tous</h3> 
          <p>Prenez conscience des avantages de l’inclusif<br>
            Le design inclusif est un design qui tient compte de toute la diversité humaine en matière d'aptitudes physiques, de langue, de culture, de sexe, d'âge et de toute autre forme de différence.<br>
            En concevant de manière inclusive, nous créons souvent des effets bateau qui profitent à tous ! (Un effet bateau désigne une chose qui a été conçue à l'origine pour faciliter l'accessibilité, 
            mais profite en définitive à tout le monde)<br>
            Les utilisateurs ont recours à une grande variété de fonctionnalités de personnalisation et de technologies d'assistance (TA), pour interagir avec le contenu numérique conformément à leurs besoins.<br>
            La saisie alternative et l'affichage alternatif sont deux catégories générales de fonctionnalités et de TA importantes pour l'accessibilité numérique.
            L'accessibilité sur le web n'est pas seulement importante pour les personnes ayant des déficiences, mais elle est également bénéfique pour tous les utilisateurs.
            Par exemple, une navigation claire et une structure de page bien organisée peuvent faciliter l'utilisation du site pour tout utilisateur, qu'il s'agisse d'une personne âgée, d'une personne qui n'a pas l'expérience de la navigation sur le web, ou d'une personne utilisant un appareil mobile.
            En fin de compte, un contenu inclusif ne doit pas seulement être accessible à tous les utilisateurs, mais doit également refléter et célébrer la diversité humaine dans toute sa richesse et sa complexité.
          </p>
        </div>
      </section>

      <!-- Third section  -->
      <section class="third-section">
        <div class="txt">
          <h3 class="section-title">Contenu Accéssible</h3> 
          <p>
            Un contenu inclusif tient compte de toute la diversité humaine en matière d'aptitudes physiques,<br>
            de langue, de culture, de sexe, d'âge et de toute autre forme de différence.<br>
            Pour <span class="bold-txt">créer du contenu accéssible</span> à tous il y'a certaines exigeances <br>
            il peut être difficile d'envisager tous les moyens différents dont les utilisateurs peuvent être amenés à interagir avec les sites web<br>
            Afin d'aider les concepteurs à appréhender les éléments nécessaires pour rendre leurs sites plus accessibles, le World Wide Web Consortium (W3C) 
            a élaboré les Règles pour l'accessibilité des contenus web (Web Content Accessibility Guidelines, ou WCAG)<br>
            Au niveau supérieur, on trouve les quatre principes de l'accessibilité :<br>
            <ul>
              <li> Perceptible</li>
              <li> Utilisable</li>
              <li> Compréhensible</li>
              <li> Robuste</li>
            </ul>
          </p>
        </div>
      </section>
      <div class="third-section-inter-section inter-section">
        <img src="../assets/images/principes.png" alt="explication de l'inédequation">
      </div>

      <!-- Fourth section  -->
      <section class="fourth-section">
        <div class="txt">
          <h3 class="section-title">Règles Wcag</h3> 
          <p>Les <span class="bold-txt">règles <span class="uppercase">WCAG</span></span>  (Web Content Accessibility Guidelines) sont un ensemble de directives qui visent à rendre le contenu web accessible à tous les utilisateurs, en particulier ceux qui ont des besoins spécifiques en matière d'accessibilité.<br>
            Elles sont articulées autour de <span class="bold-txt">4 grands principes :</span><br>
            un contenu <span class="bold-txt">perceptible</span> peut être présenté dans différents modes : <span class="bold-txt">visuel, sonore et tactile</span> ;<br>
            un contenu <span class="bold-txt">utilisable</span> peut faire l'objet de différents types <span class="bold-txt">d'interactions </span>et ne se limite pas à des interactions avec la souris ou des gestes spécifiques ;<br>
            un contenu <span class="bold-txt">compréhensible</span> est <span class="bold-txt">prévisible, clair, et aide les utilisateurs</span> lors des interactions ;<br>
            un contenu <span class="bold-txt">robuste</span> prend en charge une <span class="bold-txt">vaste représentation</span> sur différents agents utilisateurs, ainsi que différents types de technologies d'assistance.<br>
            Chacun de ces principes est associé à des critères de conformité qui permettent de <span class="bold-txt">vérifier</span> si un site web est accessible ou non.<br>
            <span class="bold-txt">Le principe de la percevabilité</span> se concentre sur la manière dont les utilisateurs peuvent percevoir le contenu web, en particulier ceux qui ont des handicaps visuels ou auditifs. Les critères de conformité de ce principe comprennent la mise à disposition de textes alternatifs pour les images, la possibilité d'augmenter la taille du texte, ou encore l'utilisation de couleurs contrastées pour améliorer la lisibilité.<br>
            <span class="bold-txt">Le principe de l'utilisabilité</span> se concentre sur la manière dont les utilisateurs peuvent interagir avec le contenu web, en particulier ceux qui ont des troubles moteurs ou cognitifs. Les critères de conformité de ce principe comprennent la possibilité de naviguer sur le site web sans utiliser la souris, la simplification des menus et la cohérence de la mise en page.<br>
            <span class="bold-txt">Le principe de la compréhensibilité</span> se concentre sur la manière dont les utilisateurs peuvent comprendre le contenu web, en particulier ceux qui ont des troubles de la lecture ou de la compréhension. Les critères de conformité de ce principe comprennent l'utilisation de langage clair et simple, la mise en évidence des acronymes et des abréviations, ou encore l'organisation logique du contenu.<br>
            Enfin, <span class="bold-txt">le principe de la robustesse</span> se concentre sur la manière dont les utilisateurs peuvent accéder au contenu web à partir de différents appareils et navigateurs. Les critères de conformité de ce principe comprennent l'utilisation de normes web ouvertes et la validation du code HTML et CSS.
          </p>
        </div>
        <div class="media">
          <img src="../assets/images/fourth-section.png">
        </div>
      </section>


    </div>

</template>

<style lang="scss" scoped>


</style>
