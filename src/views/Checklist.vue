<script setup>
  import { ref, watch, computed, onMounted } from 'vue';
  
  const checklists = ref({
    global: [
		{ label: "Utilisez un lang attribut sur l'html élément.", checked: false },
        { label: "Fournir un titre unique pour chaque page ou vue", checked: false },
        { label: "Assurez-vous que le zoom de la fenêtre n'est pas désactivé.", checked: false },
        { label: "Utilisez des balises sémantiques", checked: false },
		{ label: "Utilisez des éléments de repère", checked: false },
        { label: "Évitez d'utiliser l' autofocus attribut.", checked: false },
        { label: "Autoriser l'extension des délais d'expiration des sessions", checked: false },
        { label: "Supprimer title et les tooltips d'attribut.", checked: false }

    ],
    contenu: [
        { label: "Utiliser un langage simple", checked: false },
        { label: "Le contenu des button, links et label est unique", checked: false },
        { label: "Aligner le texte à gauche ", checked: false }
    ],
	modal: [
        { label: "Le contenu des éléments button,links et label est unique", checked: false },
        { label: "Décrire le contenu de votre modale", checked: false },
        { label: "Fermer la modale", checked: false }
    ],
	carrousel: [
        { label: "Ajouter un titre au carrousel", checked: false },
        { label: "Gérer les contrôles et l’état des éléments", checked: false }
    ],
	clavier: [
        { label: "Il existe un style de focus visible pour les éléments interactifs accessibles via la saisie au clavier.", checked: false },
        { label: "Vérifier que l'ordre de focus du clavier correspond à la disposition visuelle.", checked: false },
        { label: "Supprimer les éléments focalisables invisibles.", checked: false }
    ],
	medias: [
        { label: "Toutes les images ont un alt attribut.", checked: false },
        { label: "Les images décoratives ont l'attribut alt nulle", checked: false },
        { label: "Fournir l'alt pour les images complexes", checked: false },
		{ label: "Les images contenant du texte, la description alternative inclut le texte de l'image.", checked: false },
        { label: "Les médias ne sont pas en lecture automatique.", checked: false },
        { label: "Les contrôles multimédias utilisent le balisage approprié.", checked: false },
		{ label: "Vérifier que tous les médias peuvent être mis en pause.", checked: false },
		{ label: "Confirmer la présence de légendes.", checked: false },
        { label: "Supprimer les déclencheurs de crise.", checked: false },
        { label: "Les transcriptions sont disponibles. ", checked: false }
    ],
	titres: [
        { label: "Utiliser des éléments de titre pour introduire le contenu.", checked: false },
        { label: "Utiliser un seul h1 élément par page ou vue.", checked: false },
        { label: "Les éléments de titre sont écrits dans un ordre logique.", checked: false },
        { label: "Les niveaux de titre sont respectés.", checked: false }
    ],
	listes: [
        { label: "Les éléments de liste sont utilisés pour le contenu de la liste.", checked: false }
    ],
	controles: [
        { label: "L’élément <a> est utilisé pour les liens.", checked: false },
        { label: "Les liens sont reconnaissables en tant que liens", checked: false },
        { label: "Les contrôles ont des états focus.", checked: false },
		{ label: "Le button est utilisé pour les boutons.", checked: false },
        { label: "Fournir skip link visible lorsqu'il est sélectionné.", checked: false },
        { label: "Identifier les liens qui s'ouvrent dans un nouvel onglet/nouvelle fenêtre. ", checked: false }
    ],
	tableaux: [
        { label: "Utiliser l'élément <th>  pour les en-têtes de tableau", checked: false },
        { label: "Utiliser le caption élément pour donner un titre au tableau.", checked: false }
    ],
	formulaires: [
        { label: "Toutes les entrées d'un formulaire sont associées à un label", checked: false },
        { label: "Utiliser fieldset et legend éléments le cas échéant.", checked: false },
        { label: "Les entrées sont utilisées en autocomplete", checked: false },
		{ label: "Les erreurs de saisie du formulaire sont affichées dans la liste au-dessus du formulaire après la soumission.", checked: false },
        { label: "La messagerie d'erreur d'entrée est associé à l'entrée à laquelle elle correspond.", checked: false },
        { label: "Les états d'erreur, d'avertissement et de réussite ne sont pas communiqués visuellement uniquement par la couleur.", checked: false }
    ],
	apparence: [
        { label: "Votre contenu est verifié dans des modes de navigation spécialisés.", checked: false },
        { label: "Augmenter la taille du texte à 200 %.", checked: false },
        { label: "Une bonne proximité entre les contenus est maintenue.", checked: false },
		{ label: "La couleur n'est pas le seul moyen de transmettre l'information.", checked: false },
        { label: "Les instructions ne sont pas visuelles ou uniquement audio.", checked: false },
        { label: "Utiliser une mise en page simple, directe et cohérente.", checked: false }
    ],
	animation: [
        { label: "Les animations sont subtiles et ne clignotent pas trop.", checked: false },
        { label: "Les animations ne depassent pas 15-20 clignotements par seconde", checked: false },
        { label: "Fournir un mécanisme pour mettre en pause la vidéo d'arrière-plan.", checked: false },
        { label: "Toutes les animations respectent la prefers-reduced-motion requête média.", checked: false }
    ],
	contraste: [
        { label: "Le contraste pour tout le texte est de taille normale.", checked: false },
        { label: "Le contraste pour tous les textes est de grande taille.", checked: false },
        { label: "Le contraste de toutes les icônes est conforme.", checked: false },
		{ label: "Le contraste des bordures des éléments de saisie est conforme", checked: false },
        { label: "Le texte qui chevauche les images ou la vidéo est lisible", checked: false },
        { label: "Les sélections couleurs personnalisées est siffisant", checked: false }
    ],
	mobile: [
        { label: "Le site peut être tourné dans n'importe quelle orientation.", checked: false },
        { label: "Le défilement horizontal est supprimé", checked: false },
        { label: "Les icônes de bouton et de lien peuvent être activées facilement.", checked: false },
        { label: "Un espace suffisant entre les éléments interactifs est prévu", checked: false }
    ],
	css: [
        { label: "Le contenu est masqué de manière conforme", checked: false }
    ],
    design: [
        { label: "Faciliter la compréhension rapide d'une page", checked: false },
        { label: "Nommer les liens explicitement", checked: false },
        { label: "Construire une hiérarchie des titres pertinente", checked: false },
        { label: "Les termes utilisés sont familier et prévisible", checked: false },
        { label: "Contraster les textes", checked: false },
        { label: "Contraster les éléments d'interfaces", checked: false },
        { label: "L’information n'est pas véhiculée uniquement par la couleur", checked: false },
        { label: "Nommer chaque champ de formulaire", checked: false },
        { label: "Aider à la correction des erreurs", checked: false },
        { label: "les pages sont prédictibles", checked: false },
        { label: "Indiquer les champs obligatoires", checked: false },
        { label: "Éviter les distractions visuelles", checked: false },

        { label: "Les informations ne dependent pas de la couleur, du son, de la forme, de la taille ou de l'emplacement visuel", checked: false },
        { label: "La couleur du texte et de l'arrière-plan doit avoir un contraste suffisant", checked: false },
        { label: "Limitez ou supprimez les éléments clignotants", checked: false },
        { label: "Offrir plusieurs façons de trouver des pages sur votre site Web", checked: false },
        { label: "Des étiquettes d'entrée sont compréhensibles", checked: false },
        { label: "Les liens sont descriptifs et fournissent une intention", checked: false },
        { label: "Rendre les données disponibles pour les graphiques, les diagrammes, les cartes, les SVG, etc. grâce à la technologie d'assistance", checked: false },
    ],
  });

  const progressBars = ref({
	general: null,
    global: null,
    contenu: null,
    modal: null,
    carrousel: null,
    clavier: null,
    medias: null,
    titres: null,
    listes: null,
    controles: null,
    tableaux: null,
    formulaires: null,
    apparence: null,
    animation: null,
    contraste: null,
    mobile: null,
    css: null,
    design: null,

    

  });
  
  function generateId(label) {
	return label.replace(/\s+/g, "").toLowerCase();
  }
  
  function updateCheckbox(item) {
	item.checked = !item.checked;
	saveChecklistToLocalStorage();
	countChecked();
  }
  
  function saveChecklistToLocalStorage() {
	const serializedChecklist = JSON.stringify(checklists.value);
	localStorage.setItem('checklist', serializedChecklist);
  }
  
  function loadChecklistFromLocalStorage() {
	const checklistFromLocalStorage = localStorage.getItem('checklist');
	if (checklistFromLocalStorage) {
	  const parsedChecklist = JSON.parse(checklistFromLocalStorage);
	  checklists.value = parsedChecklist;
	}
  }
  
  // Watch for changes in checklistItems and save to localStorage
  watch(checklists, () => {
	saveChecklistToLocalStorage();
	countChecked();
  }, { deep: true });
  
  // Load checklist from localStorage on component mount
  onMounted(loadChecklistFromLocalStorage);
  
  // Call the countChecked function on component mount
  onMounted(countChecked);
  
  // Function to update the progress bar and counter
  function countChecked() {
    for (const key in checklists.value) {
        const checklist = checklists.value[key];
        const progressBar = progressBars.value[key];
        const checkedCount = checklist.filter(item => item.checked).length;
        const totalCount = checklist.length;
        const checkedRatio = checkedCount / totalCount;
        progressBar.style.transform = `scaleX(${checkedRatio})`;
    }

	
	// Calculer la progression générale
	const totalChecklistItems = Object.values(checklists.value).flat();
	const totalCheckedCount = totalChecklistItems.filter(item => item.checked).length;
	const totalItemCount = totalChecklistItems.length;
	const totalCheckedRatio = totalCheckedCount / totalItemCount;
	const generalProgressBar = progressBars.value.general;
	generalProgressBar.style.transform = `scaleX(${totalCheckedRatio})`;
  }
  
  // Function to reset all checkboxes
  function resetCheckboxes() {
    for (const key in checklists.value) {
        const checklist = checklists.value[key];
        checklist.forEach(item => {
            item.checked = false;
        });
    }
    countChecked();
  }
</script>

<template>
	<header class="checklist-header">
        <h3 class="checklist-header-title">ton site est-il accessible ?</h3>
    </header>

	<div class="checklist-gloabal-container">
		<!-- Global Progress Bar -->
		<div class="progress-bar-global" :ref="el => { progressBars.general = el }"></div>

		<!-- Reset btn  -->
		<div class="container-box">
			<button class="reset-button" @click="resetCheckboxes">Réinitialiser</button>


			<div class="container-items">
				<!-- Checklist Section -->
				<section class="checklist" v-for="(checklist, name) in checklists" :key="name">
					<h2 class="checklist__title">{{ name }}</h2>
					<div class="checklist__title-border"></div>
					<div class="checklist__percentage-border" :ref="el => { progressBars[name] = el }"></div>
                        <ul class="checklist-container">
                            <li v-for="(item, i) in checklist" :key="i" class="checklist-item">
                                <input :id="generateId(item.label)" type="checkbox" :checked="item.checked" @change="updateCheckbox(item)" />
                                <label :for="generateId(item.label)" class="checkbox"></label>
                                <span class="checklist-item__title">{{ item.label }}</span>
                            </li>
                        </ul>
				</section>
			</div>
		</div>
	</div>
</template>