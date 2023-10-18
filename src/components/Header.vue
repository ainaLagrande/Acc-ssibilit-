<script setup>
import { ref } from 'vue';

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <header>
    <button @click="toggleMenu" class="menu-button">Menu</button>
    
    <transition name="fade">
      <div class="overlay" v-if="showMenu" @click="toggleMenu"></div>
    </transition>

    <transition name="slide-fade">
      <div class="menu-mobile" v-if="showMenu">
        <button @click="toggleMenu" class="close-button">×</button>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/what">Quoi</router-link></li>
          <li><router-link to="/how">Comment</router-link></li>
          <li><router-link to="/checklist">Checklist</router-link></li>
          <li><router-link to="/demo">Démo</router-link></li>
        </ul>
      </div>
    </transition>

    <nav class="nav-primary">
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/what">Quoi</router-link></li>
            <li><router-link to="/how">Comment</router-link></li>
            <li><router-link to="/checklist">Checklist</router-link></li>
            <li><router-link to="/demo">Démo</router-link></li>
        </ul>
        
        <h1 class="moon"><router-link to="/"><img src="../assets/images/🦆 icon _moon_.png" alt="lune"></router-link></h1>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  @import "@/assets/styles/libs/header.scss";
</style>
