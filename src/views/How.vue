<script setup>
import Global from '../components/howParts/Global.vue';
import Contenu from '../components/howParts/Contenu.vue';
import Modal from '../components/howParts/Modal.vue';
import Carrousel from '../components/howParts/Carrousel.vue';
import Clavier from '../components/howParts/Clavier.vue';
import Medias from '../components/howParts/Medias.vue';
import Titres from '../components/howParts/Titres.vue';
import Listes from '../components/howParts/Listes.vue';
import Controles from '../components/howParts/Controles.vue';
import Tableaux from '../components/howParts/Tableaux.vue';
import Formulaires from '../components/howParts/Formulaires.vue';
import Apparence from '../components/howParts/Apparence.vue';
import Animation from '../components/howParts/Animation.vue';
import ContrasteDesCouleurs from '../components/howParts/ContrasteDesCouleurs.vue';
import MobileEtTactile from '../components/howParts/MobileEtTactile.vue';
import Css from '../components/howParts/Css.vue';
import Outils from '../components/howParts/Outils.vue';





    let activePage = 'p1';
    let pages =  [
      {label: 'Global', id: 'p1' },
      {label: 'Contenu', id: 'p2' },
      {label: 'Modal', id: 'p3' },
      {label: 'Carrousel', id: 'p4' },
      {label: 'Clavier', id: 'p5' },
      {label: 'Médias', id: 'p6' },
      {label: 'Titres', id: 'p7' },
      {label: 'Listes', id: 'p8' },
      {label: 'Les contrôles ', id: 'p9' },
      {label: 'Les tableaux', id: 'p10' },
      {label: 'Formulaires', id: 'p11' },
      {label: 'Apparence', id: 'p12' },
      {label: 'Animation', id: 'p13' },
      {label: 'Contraste des couleurs', id: 'p14' },
      {label: 'Mobile et tactile', id: 'p15' },
      {label: 'CSS', id: 'p16' },
      {label: 'Outils de développement', id: 'p17' },
    ];

</script>

<template>
    <header class="how-header">
        <h3 class="how-header-title">Comment?</h3>
    </header>
    <div class="container ">
        <div class="row">
            <div class="col-2-sm">
                <nav class="how-sidebar">
                    <a v-for="page in pages" class="nav-link" href="#" v-bind:class="{active:activePage == page.id}" v-on:click="activePage = page.id">{{ page.label }}</a>
                </nav>
            </div>
            <div class="col how-page-content">

                <div v-if="activePage == 'p1'">
                    <Global/>
                </div>
                <div v-if="activePage == 'p2'">
                    <Contenu/>
                </div>
                <div v-if="activePage == 'p3'">
                    <Modal/>
                </div>
                <div v-if="activePage == 'p4'">
                    <Carrousel/>
                </div>
                <div v-if="activePage == 'p5'">
                    <Clavier/>
                </div>
                <div v-if="activePage == 'p6'">
                    <Medias/>
                </div>
                <div v-if="activePage == 'p7'">
                    <Titres/>
                </div>
                <div v-if="activePage == 'p8'">
                    <Listes/>
                </div>
                <div v-if="activePage == 'p9'">
                    <Controles/>
                </div>
                <div v-if="activePage == 'p10'">
                    <Tableaux/>
                </div>
                <div v-if="activePage == 'p11'">
                    <Formulaires/>
                </div>
                <div v-if="activePage == 'p12'">
                    <Apparence/>
                </div>
                <div v-if="activePage == 'p13'">
                    <Animation/>
                </div>
                <div v-if="activePage == 'p14'">
                    <ContrasteDesCouleurs/>
                </div>
                <div v-if="activePage == 'p15'">
                    <MobileEtTactile/>
                </div>
                <div v-if="activePage == 'p16'">
                    <Css/>
                </div>
                <div v-if="activePage == 'p17'">
                    <Outils/>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>


</style>
