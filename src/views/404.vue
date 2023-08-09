<script setup></script>

<template>
    <div class="how-container main-container">
        <div class="how-box">
            <div class="hit-the-floor">404</div>
            <h1>You are so lost baby, just <router-link to="/" class="underline">go home</router-link></h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hit-the-floor {
  color: #fff;
  font-size: 35rem;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow: 
    0 1px 0 #c47cfe, 
    0 2px 0 #ca8dff, 
    0 3px 0 #cf9eff, 
    0 4px 0 #d5b0ff, 
    0 5px 0 #bf6bfe,
    0 6px 1px rgba(191,107,254, .1), 
    0 0 5px rgba(191,107,254, .1), 
    0 1px 3px rgba(191,107,254, .3), 
    0 3px 5px rgba(191,107,254, .2), 
    0 5px 10px rgba(191,107,254, .25), 
    0 10px 10px rgba(191,107,254, .2), 
    0 20px 20px rgba(191,107,254, .15);
}

.hit-the-floor {
  text-align: center;
}
h1{
    text-align: center;   
}



</style>
