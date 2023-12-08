<script setup lang="ts">
import Skeleton from 'components/core/Skeleton.vue';
</script>

<template>
  <main class="container grid-container">
    <aside>
      <Skeleton class="back-text-search-loading" :style="'border-radius:4px;'" />
      <div class="mt-6">
        <Skeleton class="mb-4" :style="'border-radius:4px;'" />
        <Skeleton class="mb-2" :style="'width: 80%; border-radius:4px;'" />
        <Skeleton class="mb-2" :style="'width: 40%; border-radius:4px;'" />
      </div>
    </aside>
    <div>
      <div class="mb-6">
        <Skeleton class="mb-2" :style="'width:50%; height: 28px; border-radius:4px;'" />
        <Skeleton :style="'width:30%; height: 14ox; border-radius:4px;'" />
      </div>
      <div class="head-info-container mb-6">
        <div class="image-container">
          <Skeleton class="image-loading" :style="'border-radius:4px;'" />
        </div>
        <div class="info-container ml-3" :style="'width:100%;'">
          <Skeleton class="mb-2" :style="'width: 10%; border-radius:4px;'" />
          <Skeleton :style="'width: 5%; border-radius:4px;'" />
        </div>
      </div>
      <div>
        <Skeleton class="mb-4" :style="'width: 80%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 40%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 30%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 20%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 40%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 60%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 40%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 70%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 60%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 40%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 50%; border-radius:4px;'" />
        <Skeleton class="mb-4" :style="'width: 30%; border-radius:4px;'" />
      </div>
    </div>
  </main>
</template>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
.grid-container {
  display: grid;
  grid-template-columns: 20% auto;
  gap: 32px;
}
@media screen and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: auto;
  }
}
.image-container {
  width: 50px;
  height: 50px;
  align-self: center;
}
.image-loading {
  width: 100%;
  height: 100%;
}

.flex-container {
  display: flex;
  align-items: center;
}
.head-info-container {
  display: flex;
  align-items: flex-start;
}
</style>
