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
            Cela est dû au fait qu'en plus d'être facilement accessibles.
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
              <li>Perceptible</li>
              <li>Utilisable</li>
              <li>Compréhensible</li>
              <li>Robuste</li>
            </ul>
          </p>
        </div>
      </section>
      <div class="inter-section">
        <img src="../assets/images/principes.png" alt="explication de l'inédequation">
      </div>

      <!-- Fourth section  -->
      <section class="fourth-section">
        <div class="txt">
          <h3 class="section-title">Règles Wcag</h3> 
          <p>Les <span class="bold-txt">règles <span class="uppercase">WCAG</span></span> sont articulées autour de <span class="bold-txt">4 grands principes :</span><br>
            un contenu <span class="bold-txt">perceptible</span> peut être présenté dans différents modes : <span class="bold-txt">visuel, sonore et tactile</span> ;<br>
            un contenu <span class="bold-txt">utilisable</span> peut faire l'objet de différents types <span class="bold-txt">d'interactions </span>et ne se limite pas à des interactions avec la souris ou des gestes spécifiques ;<br>
            un contenu <span class="bold-txt">compréhensible</span> est <span class="bold-txt">prévisible, clair, et aide les utilisateurs</span> lors des interactions ;<br>
            un contenu <span class="bold-txt">robuste</span> prend en charge une <span class="bold-txt">vaste représentation</span> sur différents agents utilisateurs, ainsi que différents types de technologies d'assistance.
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
