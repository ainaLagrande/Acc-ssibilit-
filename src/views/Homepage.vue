<script setup></script>
<template>
    <div class="home-container main-container ">
        <!-- <img src="../assets/images/home-background-big.png" class="homepage-img card-img"> -->
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

    background-image: url(../assets/images/home-background-big.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    color: white;
    position: relative;

    @media (max-width: 1199.98px) {
        background-size: cover;
    }

    .home-box{
        display: flex;
        align-items: center;
        width: 100%;
        @media (max-width: 1199.98px) {
            align-items: flex-start;
        }
    }
    .home-txt{
        display: flex;
        align-items: center;
        width: 70%;
        @media (max-width: 1199.98px) {
            width: 100%;
            align-items: flex-start;
        }
        p{
            padding: 8rem;
            font-size: 2rem;
            line-height: 60px;
            @media (max-width: 1199.98px) {
                padding: 4rem;
                font-size: 1.8rem;
                line-height: inherit;
            }
        }
    }

    .home-img{
        img{
            width: 25%;
            position: absolute;
            bottom: 0;
            right: 0;
            @media (max-width: 1199.98px) {
                width: 60%;
            }
        }
    }
}
</style>

