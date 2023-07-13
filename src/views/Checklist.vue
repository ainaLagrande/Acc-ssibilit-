<script setup>
  import { ref, watch, computed, onMounted } from 'vue';
  
  const checklists = ref({
    global: [
        { label: "Fournir un titre unique pour chaque page ou vue", checked: false }
    ],
    contenu: [
        { label: "Utiliser un langage simple", checked: false },
        { label: "Le contenu des button, links et label est unique", checked: false },
        { label: "Aligner le texte à gauche ", checked: false }
    ]
  });

  const progressBars = ref({
    global: null,
    contenu: null,
    general: null,
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
			<button class="reset-button" @click="resetCheckboxes">Reset</button>


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
