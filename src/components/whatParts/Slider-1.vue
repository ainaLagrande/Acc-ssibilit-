<script setup>
  import { ref } from 'vue';
  
  const tableData = ref([
    { col1: 'Une main', col2: 'Blessure de la main', col3: 'Parent avec un enfant' },
    { col1: 'Aveugle', col2: 'Cataracte', col3: 'Conducteur distrait' },
    { col1: 'Sourd', col2: "Infection de l'oreille", col3: 'Barman' },
    { col1: 'Muet', col2: 'Laryngite', col3: 'Fort accent' },
  ]);
</script>

<template>
  <div class="container">
    <p class="what-txt highlight">La première chose à laquelle on pense lorsqu'on entend le mot « accessibilité », 
      c'est le handicap. Or, dans les faits, tout le monde rencontre des <span class="bold-txt">obstacles à l'accessibilité</span>
      lorsque <span class="bold-txt">l'environnement ne répond pas à ses besoins.</span> Nous parvenons mieux à supprimer 
      certains obstacles que d'autres, non seulement au niveau technologique, mais aussi en termes de <span class="bold-txt"> 
      comportements associés.</span> Par exemple, les lunettes sont un type de <span class="bold-txt"> 
      technologie d'assistance </span>(TA) . Bien que les personnes qui portent des lunettes en aient besoin pour se 
      repérer dans le monde, elles se considèrent rarement comme atteintes d'un handicap. Cela est dû au fait qu'en plus
      d'être facilement accessibles. L'accessibilité sur le web est un sujet crucial pour garantir l'égalité des chances 
      et permettre à tous les individus, quels que soient leurs capacités, de naviguer et d'utiliser les ressources en 
      ligne de manière efficace et sans obstacles.Cela signifie que les sites web et les applications doivent être conçus
      et développés demanière à ce qu'ils soient accessibles à tous les utilisateurs, y compris ceux ayant des 
      déficiences visuelles, auditives, motrices, cognitives ou autres.Les normes d'accessibilité sur le web ont 
      été établies pour aider les concepteurs et les développeurs à atteindre cet objectif, en fournissant des 
      directives spécifiques sur la manière de créer des sites web et des applications accessibles. L'un des moyens 
      d'appréhender le handicap, c'est de le considérer comme une  <span class="bold-txt">inadéquation entre la 
      personne et son environnement.</span> Cette inadéquation peut être  <span class="bold-txt"> permanente, 
      temporaire ou situationnelle.</span></p>
      <div class="table-box">
        <table class="mt-5">
          <tbody>
            <tr>
              <td class="row-empty"></td>
              <th class="row-title"><img src="../../assets/images/what-page/main.webp" alt="main"></th>
              <th class="row-title"><img src="../../assets/images/what-page/oeil.webp" alt="main"></th>
              <th class="row-title"><img src="../../assets/images/what-page/oreille.webp" alt="main"></th>
              <th class="row-title"><img src="../../assets/images/what-page/bouche.webp" alt="main"></th>
            </tr>
            <tr>
              <th class="col-title">Permanent</th>
              <td class="col-row-elements" v-for="(row, index) in tableData" :key="'col1-' + index">{{ row.col1 }}</td>
            </tr>
            <tr>
              <th class="col-title">Temporaire</th>
              <td class="col-row-elements" v-for="(row, index) in tableData" :key="'col2-' + index">{{ row.col2 }}</td>
            </tr>
            <tr>
              <th class="col-title">Situationnel</th>
              <td class="col-row-elements" v-for="(row, index) in tableData" :key="'col3-' + index">{{ row.col3 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>
  
<style lang="scss" scoped>
.container {
  padding-bottom: 5rem;
}
.highlight {
  border: 1px solid #ddd;
  background-color: #ddd;
  padding: 20px 20px;
  border-radius: 5px;
}
@media (max-width: 767.98px) { 
  .table-box{
    overflow-y: scroll;
  }
  /* Pour les navigateurs WebKit (Chrome, Safari) */
  .table-box::-webkit-scrollbar {
    width: 6px;
    height: 13px;
  }
  .table-box::-webkit-scrollbar-track {
    background: #D2D2D2;
    border-radius: 10px;
  }

  .table-box::-webkit-scrollbar-thumb {
    background: #3D0437;
    border-radius: 10px;
  }
  /* Pour Firefox */
  .table-box {
    scrollbar-width: thin;
    scrollbar-color: #3D0437 #D2D2D2;
  }
  table {
    margin-bottom: 20px;
  }
}
table {
  border-collapse: separate;
  border-spacing: 10px 10px;
  margin: 20px 0;
  font-size: 18px;
  margin: auto;
  height: 100%;
}
th, td {
  padding: 8px 12px;
  border: 1px solid #e1e1e1;
  text-align: left;
}
td {
  background-color: #ffffff;
}
.col-row-elements {
  background-color: #f7f7f7;
  font-weight: 400;
  text-align: center;
  @media (max-width: 1199.98px) { 
    min-width: 7rem;
    height: 7rem;
  }
}
.col-title {
  width: 15%;
  max-width: 20rem;
  min-width: 10rem;
  height: 8rem; 
  font-weight: 500;

  @media (max-width: 1199.98px) { 
    min-width: 7rem;
    height: 7rem;
  }

}
.row-title {
  width: 10%;
  max-width: 15rem;
  min-width: 8rem;
  height: 8rem;

  @media (max-width: 1199.98px) { 
    max-width: 6rem;
    min-width: 6rem;
    height: 6rem;
  }

  img {
    max-width: 60%;
    height: auto;
    margin: auto;
    display: block;
  }
}
.row-empty{
  border: none;
  box-shadow: none;
}
.what-txt{
  font-family: Roboto;
  font-size: 1.2rem;
  line-height: 2rem;
  
}

</style>
