<script setup></script>
<template>
    <div class="home-container">
        <div class="home-box">
            <div class="home-txt">
                <p>Comment procéder à la visite de ce site ?<br>
                Si tu ne sais pas ce que c'est l’accéssibilité , je te conseille de visiter la page <router-link to="/what" class="underline">Quoi</router-link>
                Puis la page <router-link to="/how" class="underline">Comment</router-link> ou vous trouverez les bonnes pratiques detailéé à suivre avec des exemples
                Une fois que tu as pris connaissance de ces pages la , tu peux procédér à la <router-link to="/checklist" class="underline">Checklist</router-link>
                Verifie que tous les criteres sont respectés et fais vérifier ton site par achecker</p>
            </div>
            <div class="home-img">
                <img src="../assets/images/s (1).webp" alt="image 3D personne sur le fauteil roulant">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.home-container{
    width: 100%;
    height: 80vh;
    display: flex;
    // position: absolute; 
    // top: 50%; left: 50%;
    // transform: translate(-50%, -50%);
    .home-box{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
    }
    .home-txt{
        display: flex;
        align-items: center;
        width: 70%;
        margin-bottom: 15%;
        p{
            font-size: 2rem;
            line-height: 60px;
        }
        .underline{
            // text-decoration: underline;
            cursor: pointer;
            color: red;
        }
    }
    .home-img{
        display: flex;
        justify-content: flex-end;
        img{
            width: 70%;
            height: 100%;
        }
    }
}
</style>
