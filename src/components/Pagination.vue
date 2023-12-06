<template>
  <div class="pagination-container mt-6">
    <a href="#" class="pagination-button border-radius-100 p-3">
      <span class="material-symbols-outlined">navigate_before</span>
    </a>
    <a href="#" class="pagination-button border-radius-100 p-3">
      <p class="pagination-text fs-400">1</p>
    </a>
    <a href="#" class="pagination-button border-radius-100 p-3">
      <p class="pagination-text fs-400">2</p>
    </a>
    <a href="#" class="pagination-button border-radius-100 p-3">
      <p class="pagination-text fs-400">3</p>
    </a>
    <a href="#" class="pagination-button border-radius-100 p-3">
      <span class="material-symbols-outlined">navigate_next</span>
    </a>
  </div>
</template>

<style scoped>
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
