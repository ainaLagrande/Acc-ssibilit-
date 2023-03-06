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


    let activePage = localStorage.getItem('activePage') || 'p1';

    function setActivePage(id) {
        activePage = id;
        localStorage.setItem('activePage', id);
    }

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
                    <a v-for="page in pages" :key="page.id" class="nav-link" :href="'#' + page.id"
                        :class="{ active: activePage === page.id }" @click="setActivePage(page.id),
                        activePage = page.id"
                    > {{ page.label }} </a>
                </nav>
            </div>
            <div class="col how-page-content">
                <component :is="
                activePage === 'p1' ? Global :
                activePage === 'p2' ? Contenu :
                activePage === 'p3' ? Modal :
                activePage === 'p4' ? Carrousel :
                activePage === 'p5' ? Clavier :
                activePage === 'p6' ? Medias :
                activePage === 'p7' ? Titres :
                activePage === 'p8' ? Listes :
                activePage === 'p9' ? Controles :
                activePage === 'p10' ? Tableaux :
                activePage === 'p11' ? Formulaires :
                activePage === 'p12' ? Apparence :
                activePage === 'p13' ? Animation :
                activePage === 'p14' ? ContrasteDesCouleurs :
                activePage === 'p15' ? MobileEtTactile :
                activePage === 'p16' ? Css :
                activePage === 'p17' ? Outils :
                null" />
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>


</style>
