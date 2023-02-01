<script setup>
import Global from './howParts/Global.vue';

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
      {label: 'Apparence/Design', id: 'p12' },
      {label: 'Animation', id: 'p13' },
      {label: 'Contraste des couleurs', id: 'p14' },
      {label: 'Mobile et tactile', id: 'p15' },
      {label: 'CSS', id: 'p16' },
      {label: 'Outils de développement', id: 'p17' },
    ];

</script>

<template>

    <div class="container" id="vue-app">
    <div class="row">
        <div class="col-2-sm">
        <nav class="nav flex-column">
            <a v-for="page in pages" class="nav-link" href="#" v-bind:class="{active:activePage == page.id}" v-on:click="activePage = page.id">{{ page.label }}</a>
        </nav>
        </div>
        <div class="col">
        <div v-if="activePage == 'p1'">
            <Global/>
        </div>
        <div v-if="activePage == 'p2'">
            <h3>Page 2</h3>
        </div>
        <div v-if="activePage == 'p3'">
            <h3>Page 3</h3>        
        </div>
        </div>
    </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
