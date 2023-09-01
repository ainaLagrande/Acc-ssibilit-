<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('dark-mode', isDarkMode.value)
}

onMounted(() => {
  if (!isDarkMode.value) {
    // Définir des valeurs par défaut pour les variables CSS
    document.body.style.setProperty('--body-bg-color', '#ffffff');
    document.body.style.setProperty('--theme-bg-color', '#ffffff');
    document.body.style.setProperty('--border-color', '#000000');
    document.body.style.setProperty('--header-bg-color', '#ffffff');
    document.body.style.setProperty('--main-color', '#000000');
    document.body.style.setProperty('--body-color', '#000000');

  }

});

</script>


<template>
    <div class="how-container main-container">
        <div class="how-box">
        </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, et doloremque in vero harum ad commodi excepturi quae tempore atque obcaecati, beatae qui, amet earum repellat. Deleniti delectus dolore nemo?</p>

    <div class="dark-light" @click="toggleDarkMode">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
    </div>

</template>

<style lang="scss" scoped>
body {
    --body-font: "Arial, sans-serif"; // Assurez-vous d'avoir une police par défaut.
    --body-bg-color: #ffffff;
    --theme-bg-color: #ffffff;
    --border-color: #000000;
    --header-bg-color: #ffffff;
    --main-color: #000000;
    --body-color: #000000;

    font-family: var(--body-font);
    font-size: 15px;
    color: var(--body-color);
    background-color: var(--body-bg-color);
    margin: 0;
    font-weight: 600;
    min-height: 100vh; // Corrigé pour une meilleure compatibilité
}

.dark-mode {
    --body-bg-color: #1e222b;
    --theme-bg-color: #212835;
    --border-color: #393f50;
    --header-bg-color: #323a4b;
    --main-color: #fefffd;
    --body-color: #dddee0;
    background-color: red!important;
}

.dark-light {
 position: fixed;
 bottom: 30px;
 right: 30px;
 background-color: var(--header-bg-color);
 box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
 padding: 8px;
 border-radius: 50%;
 z-index: 3;
 svg {
  width: 28px;
 }
}

.dark-mode .dark-light svg {
    fill: #ffce45;
    stroke: #ffce45;
}
.dark-light svg {
    fill: transparent;
    transition: 0.5s;
}
</style>
