<template>
    <table>
  <!-- { title: 'Handicap', content: `La première chose à laquelle on pense lorsqu'on entend le mot « accessibilité », c'est le handicap. Or, dans les faits, tout le monde rencontre des <span class="bold-txt">obstacles à l'accessibilité</span> lorsque <span class="bold-txt">l'environnement ne répond pas à ses besoins</span>.Nous parvenons mieux à supprimer certains obstacles que d'autres, non seulement au niveau technologique, mais aussi en termes de <span class="bold-txt"> comportements associés.</span> Par exemple, les lunettes sont un type de <span class="bold-txt"> technologie d'assistance </span>(TA) . Bien que les personnes qui portent des lunettes en aient besoin pour se repérer dans le monde, elles se considèrent rarement comme atteintes d'un handicap. Cela est dû au fait qu'en plus d'être facilement accessibles. L'accessibilité sur le web est un sujet crucial pour garantir l'égalité des chances et permettre à tous les individus, quels que soient leurs capacités, de naviguer et d'utiliser les ressources en ligne de manière efficace et sans obstacles.Cela signifie que les sites web et les applications doivent être conçus et développés demanière à ce qu'ils soient accessibles à tous les utilisateurs, y compris ceux ayant des déficiences visuelles, auditives, motrices, cognitives ou autres.Les normes d'accessibilité sur le web ont été établies pour aider les concepteurs et les développeurs à atteindre cet objectif, en fournissant des directives spécifiques sur la manière de créer des sites web et des applications accessibles.L'un des moyens d'appréhender le handicap, c'est de le considérer comme une  <span class="bold-txt">inadéquation entre la personne et son environnement.</span> Cette inadéquation peut être  <span class="bold-txt"> permanente, temporaire ou situationnelle.</span>` }, -->

      <thead>
        <tr>
          <th>Colonne 1</th>
          <th>Colonne 2</th>
          <th>Colonne 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td>{{ row.col1 }}</td>
          <td>{{ row.col2 }}</td>
          <td>{{ row.col3 }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const tableData = ref([
    { col1: 'Ligne 1, Colonne 1', col2: 'Ligne 1, Colonne 2', col3: 'Ligne 1, Colonne 3' },
    { col1: 'Ligne 2, Colonne 1', col2: 'Ligne 2, Colonne 2', col3: 'Ligne 2, Colonne 3' },
    { col1: 'Ligne 3, Colonne 1', col2: 'Ligne 3, Colonne 2', col3: 'Ligne 3, Colonne 3' },
    { col1: 'Ligne 4, Colonne 1', col2: 'Ligne 4, Colonne 2', col3: 'Ligne 4, Colonne 3' },
  ]);
  </script>
  
  <style>
  /* Vous pouvez ajouter ici du style pour rendre le tableau plus beau */
  </style>
  