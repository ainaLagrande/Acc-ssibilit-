<script setup></script>

<template>
  <header>
    <nav class="nav-primary">
        <ul>
            <li><router-link to="/what">Quoi</router-link></li>
            <li><router-link to="/how">Comment</router-link></li>
            <li><router-link to="/checklist">Checklist</router-link></li>
        </ul>
        <h1><router-link to="/">Accéssibilité</router-link></h1>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

header{
    width: 100%;
    border-bottom: 1px solid black;
    .nav-primary{
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-transform: uppercase;

        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 30%;

            li{
                list-style-type: none;
                font-size: 2rem;
                cursor: pointer;
            }
        }
        h1{
            font-size: 2rem;
        }
    }
}
</style>
