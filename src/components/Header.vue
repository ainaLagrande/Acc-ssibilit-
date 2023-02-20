<script setup></script>

<template>
  <header>
    <nav class="nav-primary">
        <ul>
            <li><router-link to="/what">Quoi</router-link></li>
            <li><router-link to="/how">Comment</router-link></li>
            <li><router-link to="/checklist">Checklist</router-link></li>
        </ul>
        <h1 class="moon"><router-link to="/"><img src="../assets/images/🦆 icon _moon_.png" alt="lune"></router-link></h1>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

header{
    width: 100%;
    height: 10rem;
    border-bottom: 1px solid black;
    .nav-primary{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        text-transform: uppercase;

        ul{
            display: flex;
            justify-content: space-between;
            width: 30%;
            margin: auto;
            li{
                list-style-type: none;
                font-size: 2rem;
                cursor: pointer;
            }
        }
        .moon{
            font-size: 2rem;
            display: flex;
            align-items: center;
            margin-right: 5%;
        }
        .router-link-active{
            color: #AB2DFF;
        }
    }
}
</style>
