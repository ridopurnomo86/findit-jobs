<script setup lang="ts">
defineProps({
  style: { type: String, required: false },
});
</script>

<template>
  <span class="skeleton" :style="style">&zwnj;</span>
</template>

<style>
.skeleton {
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 8px;
  display: block;
  line-height: 1;
  width: 100%;
  animation: skeleton-animation 1.5s ease-in-out infinite;
}

@keyframes skeleton-animation {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}
</style>
