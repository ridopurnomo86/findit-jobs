<script setup lang="ts">
defineProps({
  companyName: { required: true, type: String },
});
</script>

<template>
  <div class="empty-image-container">
    <p class="initial-text text-semibold fs-600">
      {{ companyName.split('')[0].toUpperCase() }}
    </p>
  </div>
</template>

<style scoped>
.empty-image-container {
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.initial-text {
  color: #bdbdbd;
}
</style>
