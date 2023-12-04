<script setup lang="ts">
defineProps({
  companyName: { required: true, type: String },
});
</script>

<template>
  <div class="empty-image-container">
    <p class="initial-text text-semibold fs-700">
      {{ companyName.split('')[0].toUpperCase() }}
    </p>
  </div>
</template>

<style scoped>
.empty-image-container {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.initial-text {
  color: #bdbdbd;
}
</style>
