<template>
	<div class="container">

		<!-- Global Progress Bar -->
		<div class="progress-bar-global" ref="globalProgressBar"></div>
	  	<!-- <div class="counter">Checked: {{ globalCheckedCount }} / {{ globalTotalItems }}</div> -->
	  <!-- Performance -->
	  <section class="checklist">
		<h2 class="checklist__title">Performance</h2>
		<div class="checklist__title-border"></div>
		<div class="checklist__percentage-border" ref="performanceProgressBar"></div>
  
		<div class="counter">Checked: {{ performanceCheckedCount }} / {{ performanceTotalItems }}</div>
		<ul class="checklist-container">
		  <li v-for="(item, index) in performanceChecklistItems" :key="index" class="checklist-item">
			<input :id="generateId(item.label)" type="checkbox" :checked="item.checked" @change="updateCheckbox(item)" />
			<label :for="generateId(item.label)" class="checkbox"></label>
			<span class="checklist-item__title">{{ item.label }}</span>
			<!-- Rest of the code -->
		  </li>
		</ul>
	  </section>
  
	  <!-- SEO -->
	  <section class="checklist">
		<h2 class="checklist__title">SEO</h2>
		<div class="checklist__title-border"></div>
		<div class="checklist__percentage-border" ref="seoProgressBar"></div>
  
		<div class="counter">Checked: {{ seoCheckedCount }} / {{ seoTotalItems }}</div>
		<ul class="checklist-container">
		  <li v-for="(item, index) in seoChecklistItems" :key="index" class="checklist-item">
			<input :id="generateId(item.label)" type="checkbox" :checked="item.checked" @change="updateCheckbox(item)" />
			<label :for="generateId(item.label)" class="checkbox"></label>
			<span class="checklist-item__title">{{ item.label }}</span>
			<!-- Rest of the code -->
		  </li>
		</ul>
	  </section>
  

	</div>
  </template>
  
  <script setup>
  import { ref, watch, computed, onMounted } from 'vue';
  
  const performanceChecklistItems = ref([
	{ label: "Made Compatible with Browsers & Platforms", checked: false },
	{ label: "Responsive Analysis Done", checked: false },
	// Add more performance checklist items as needed
  ]);
  
  const seoChecklistItems = ref([
	{ label: "SEO Checklist Item 1", checked: false },
	{ label: "SEO Checklist Item 2", checked: false },
	// Add more SEO checklist items as needed
  ]);
  
  const performanceProgressBar = ref(null);
  const seoProgressBar = ref(null);
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
	const serializedChecklist = JSON.stringify([...performanceChecklistItems.value, ...seoChecklistItems.value]);
	localStorage.setItem('checklist', serializedChecklist);
  }
  
  function loadChecklistFromLocalStorage() {
	const checklistFromLocalStorage = localStorage.getItem('checklist');
	if (checklistFromLocalStorage) {
	  const parsedChecklist = JSON.parse(checklistFromLocalStorage);
	  performanceChecklistItems.value = parsedChecklist.slice(0, performanceChecklistItems.value.length);
	  seoChecklistItems.value = parsedChecklist.slice(performanceChecklistItems.value.length);
	}
  }
  
  // Watch for changes in checklistItems and save to localStorage
  watch([performanceChecklistItems, seoChecklistItems], () => {
	saveChecklistToLocalStorage();
	countChecked();
  }, { deep: true });
  
  // Load checklist from localStorage on component mount
  loadChecklistFromLocalStorage();
  
  // Computed property to count the number of checked items for Performance section
  const performanceCheckedCount = computed(() => {
	return performanceChecklistItems.value.filter(item => item.checked).length;
  });
  
  // Computed property for the total number of items in Performance section
  const performanceTotalItems = computed(() => {
	return performanceChecklistItems.value.length;
  });
  
  // Computed property to count the number of checked items for SEO section
  const seoCheckedCount = computed(() => {
	return seoChecklistItems.value.filter(item => item.checked).length;
  });
  
  // Computed property for the total number of items in SEO section
  const seoTotalItems = computed(() => {
	return seoChecklistItems.value.length;
  });
  
  // Computed property for the total number of checked items
  const globalCheckedCount = computed(() => {
	return performanceCheckedCount.value + seoCheckedCount.value;
  });
  
  // Computed property for the total number of items
  const globalTotalItems = computed(() => {
	return performanceTotalItems.value + seoTotalItems.value;
  });
  
  // Call the countChecked function on component mount
  onMounted(() => {
	countChecked();
  });
  
  // Function to update the progress bar and counter
  function countChecked() {
	const performanceCheckbox = performanceProgressBar.value;
	const seoCheckbox = seoProgressBar.value;
	const globalCheckbox = globalProgressBar.value;
  
	const performanceCheckedRatio = performanceCheckedCount.value / performanceTotalItems.value;
	const seoCheckedRatio = seoCheckedCount.value / seoTotalItems.value;
	const globalCheckedRatio = globalCheckedCount.value / globalTotalItems.value;
  
	performanceCheckbox.style.transform = `scaleX(${performanceCheckedRatio})`;
	seoCheckbox.style.transform = `scaleX(${seoCheckedRatio})`;
	globalCheckbox.style.transform = `scaleX(${globalCheckedRatio})`;
  
	const performanceCounter = document.querySelectorAll('.checklist .counter')[0];
	const seoCounter = document.querySelectorAll('.checklist .counter')[1];
	const globalCounter = document.querySelector('.progress-bar-global + .counter');
  
	performanceCounter.innerText = `Checked: ${performanceCheckedCount.value} / ${performanceTotalItems.value}`;
	seoCounter.innerText = `Checked: ${seoCheckedCount.value} / ${seoTotalItems.value}`;
	globalCounter.innerText = `Checked: ${globalCheckedCount.value} / ${globalTotalItems.value}`;
  
	updateStorage();
  }
  </script>
  