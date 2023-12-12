<script setup lang="ts">
defineProps<{
  onPrevNavigation: () => void;
  pages: number[];
  activePage: number;
  onNextNavigation: () => void;
  // eslint-disable-next-line no-unused-vars
  onSelectedNavigation: (page: number) => void;
}>();
</script>

<template>
  <div class="pagination-container mt-6">
    <button type="button" class="pagination-button border-radius-100 p-3" @click="onPrevNavigation">
      <span class="material-symbols-outlined">navigate_before</span>
    </button>
    <button
      v-for="page in pages"
      :key="page"
      @click="() => onSelectedNavigation(page)"
      class="pagination-button border-radius-100 p-3"
      :class="{
        active: activePage === page,
      }"
    >
      <p class="pagination-text fs-400">{{ page }}</p>
    </button>
    <button type="button" class="pagination-button border-radius-100 p-3" @click="onNextNavigation">
      <span class="material-symbols-outlined">navigate_next</span>
    </button>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}
.pagination-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.pagination-button {
  border: 1px solid var(--neutral-50);
  color: var(--neutral-100);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  transition: 0.2s ease-in-out;
}
.pagination-button:hover {
  background-color: var(--secondary-600);
  color: white;
  border: 1px solid transparent;
}
.pagination-button:hover > p {
  color: white;
}
.active {
  background-color: transparent;
  color: var(--secondary-600);
  border: 1px solid var(--secondary-600);
}
.active > p {
  color: var(--secondary-600);
}
.pagination-text {
  color: var(--neutral-100);
  width: 24px;
  text-align: center;
}
</style>
