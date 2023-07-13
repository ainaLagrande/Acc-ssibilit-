<script setup>
  import { ref, watch, computed, onMounted } from 'vue';
  
  const globalCheckChecklistItems = ref([
	{ label: "Fournir un titre unique pour chaque page ou vue", checked: false },
  ]);
  
  const contenuChecklistItems = ref([
	{ label: "Utiliser un langage simple", checked: false },
	{ label: "Le contenu des button, links et label est unique", checked: false },
	{ label: "Aligner le texte à gauche ", checked: false },

  ]);
  
  const globalChecklistProgressBar = ref(null);
  const contenuProgressBar = ref(null);
  const globalProgressBar = ref(null);
  
  function generateId(label) {
	return label.replace(/\s+/g, "").toLowerCase();
  }
  
  function updateCheckbox(item) {
	item.checked = !item.checked;
	saveChecklistToLocalStorage();
	countChecked();
  }
  
  function saveChecklistToLocalStorage() {
	const serializedChecklist = JSON.stringify([...globalCheckChecklistItems.value, ...contenuChecklistItems.value]);
	localStorage.setItem('checklist', serializedChecklist);
  }
  
  function loadChecklistFromLocalStorage() {
	const checklistFromLocalStorage = localStorage.getItem('checklist');
	if (checklistFromLocalStorage) {
	  const parsedChecklist = JSON.parse(checklistFromLocalStorage);
	  globalCheckChecklistItems.value = parsedChecklist.slice(0, globalCheckChecklistItems.value.length);
	  contenuChecklistItems.value = parsedChecklist.slice(globalCheckChecklistItems.value.length);
	}
  }
  
  // Watch for changes in checklistItems and save to localStorage
  watch([globalCheckChecklistItems, contenuChecklistItems], () => {
	saveChecklistToLocalStorage();
	countChecked();
  }, { deep: true });
  
  // Load checklist from localStorage on component mount
  loadChecklistFromLocalStorage();
  
  // Computed property to count the number of checked items for Global Checklist section
  const globalChecklistCheckedCount = computed(() => {
	return globalCheckChecklistItems.value.filter(item => item.checked).length;
  });
  
  // Computed property for the total number of items in Global Checklist section
  const globalChecklistTotalItems = computed(() => {
	return globalCheckChecklistItems.value.length;
  });
  
  // Computed property to count the number of checked items for Contenu section
  const contenuCheckedCount = computed(() => {
	return contenuChecklistItems.value.filter(item => item.checked).length;
  });
  
  // Computed property for the total number of items in Contenu section
  const contenuTotalItems = computed(() => {
	return contenuChecklistItems.value.length;
  });
  
  // Computed property for the total number of checked items
  const globalCheckedCount = computed(() => {
	return globalChecklistCheckedCount.value + contenuCheckedCount.value;
  });
  
  // Computed property for the total number of items
  const globalTotalItems = computed(() => {
	return globalChecklistTotalItems.value + contenuTotalItems.value;
  });
  
  // Call the countChecked function on component mount
  onMounted(() => {
	countChecked();
  });
  
  // Function to update the progress bar and counter
  function countChecked() {
	const flobalChecklistCheckbox = globalChecklistProgressBar.value;
	const contenuCheckbox = contenuProgressBar.value;
	const globalCheckbox = globalProgressBar.value;
  
	const globalChecklistCheckedRatio = globalChecklistCheckedCount.value / globalChecklistTotalItems.value;
	const contenuCheckedRatio = contenuCheckedCount.value / contenuTotalItems.value;
	const globalCheckedRatio = globalCheckedCount.value / globalTotalItems.value;
  
	flobalChecklistCheckbox.style.transform = `scaleX(${globalChecklistCheckedRatio})`;
	contenuCheckbox.style.transform = `scaleX(${contenuCheckedRatio})`;
	globalCheckbox.style.transform = `scaleX(${globalCheckedRatio})`;
	
  }

	// Function to reset all checkboxes
	function resetCheckboxes() {
		globalCheckChecklistItems.value.forEach(item => {
			item.checked = false;
		});

		contenuChecklistItems.value.forEach(item => {
			item.checked = false;
		});

		countChecked();
	}
</script>



<template>
	<header class="checklist-header">
        <h3 class="checklist-header-title">ton site est-il accessible ?</h3>
    </header>

	<div class="checklist-gloabal-container">
		<!-- Global Progress Bar -->
		<div class="progress-bar-global" ref="globalProgressBar"></div>
			<!-- Reset btn  -->
			<div class="container-box">
				<button class="reset-button" @click="resetCheckboxes">Reset</button>

				<div class="container-items">
					<!-- Global Checklist -->
					<section class="checklist">
						<h2 class="checklist__title">Global</h2>
						<div class="checklist__title-border"></div>
						<div class="checklist__percentage-border" ref="globalChecklistProgressBar"></div>
				
						<ul class="checklist-container">
						<li v-for="(item, index) in globalCheckChecklistItems" :key="index" class="checklist-item">
							<input :id="generateId(item.label)" type="checkbox" :checked="item.checked" @change="updateCheckbox(item)" />
							<label :for="generateId(item.label)" class="checkbox"></label>
							<span class="checklist-item__title">{{ item.label }}</span>
						</li>
						</ul>
					</section>
		
					<!-- Contenu -->
					<section class="checklist">
						<h2 class="checklist__title">Contenu</h2>
						<div class="checklist__title-border"></div>
						<div class="checklist__percentage-border" ref="contenuProgressBar"></div>
				
						<ul class="checklist-container">
						<li v-for="(item, index) in contenuChecklistItems" :key="index" class="checklist-item">
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
  



<style lang="scss" scoped>


</style>