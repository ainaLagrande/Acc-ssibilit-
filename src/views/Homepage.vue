<script setup></script>
<template>
    <div class="home-container main-container">
        <img src="../assets/images/home-background-big.png" class="homepage-img card-img">
        <div class="home-box">
            <div class="home-txt">
                <p>Comment procéder à la visite de ce site ?<br>
                Si tu ne sais pas ce que c'est l’accessibilité, je te conseille de visiter la page <router-link to="/what" class="underline">Quoi</router-link>
                Puis la page <router-link to="/how" class="underline">Comment</router-link> ou tu trouveras les bonnes pratiques détaillées à suivre ,
                Une fois que tu as pris connaissance de ces pages la , tu peux procéder à la <router-link to="/checklist" class="underline">Check-list</router-link>
                Verifie que tous les critères sont respectés et fais vérifier ton site par <a href="https://achecker.achecks.ca/checker/index.php" target="_blank" class="underline">achecker</a> </p>
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
    // height: 90vh;
    display: flex;
    color: white;
    .home-box{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        position: absolute;
        top: 20%;
    }
    .home-txt{
        display: flex;
        align-items: center;
        width: 70%;
        margin-bottom: 15%;
        p{
            padding: 8rem;
            font-size: 2rem;
            line-height: 60px;
            @media screen and (min-width: 2767px) {
                width: 75%;
            }
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
