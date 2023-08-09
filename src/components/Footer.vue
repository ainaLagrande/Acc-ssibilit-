<script setup></script>

<template>

<footer>
    <hr>
    <div class="footer-box">
        <img src="../assets/images/logo_CYIM_RVB 1.png" alt="logo cyim">
        <ul>
            <li>Made with<span class="ico ico--heart">♥</span>by Cyim</li>
        </ul>
    </div>
</footer>
</template>

<style lang="scss" scoped>
@import '../assets/styles/libs/global.scss';
footer{
    width: 100%;
    height: 5rem;    
    // border-width: 50%;
    margin-top: auto;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: var(--footer-bg,#000);
    color: var(--footer-color,#fff);
    font-size: 0.75rem;
    display: block;
    hr{
        margin: 0;
        width: 95%;
        background-color: black;
    }
    .ico--heart{
        font-family: "Material Design Icons";
        @include variable-icon-font(map-get($mdi-icons, minus));
    }
    img{
        padding-left: 2rem;
    }
    .footer-box{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            list-style-type: none;
        }
    }
}

</style>
