<script setup lang="ts">
import Skeleton from 'components/core/Skeleton.vue';
</script>

<template>
  <div class="job-card-container p-3 border-radius-100">
    <div class="flex-container">
      <div class="image-container">
        <Skeleton class="image-loading" />
      </div>
      <div class="info-container ml-4">
        <Skeleton class="company-text-loading mt-1 mb-2" />
        <Skeleton class="job-text-loading mb-3" />
        <Skeleton class="tag-text-loading mb-2" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.job-card-container {
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px #0000000d;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-container {
  width: 90px;
  height: 90px;
}

.image-loading {
  width: 90px;
  height: 90px;
}

.company-text-loading {
  width: 40%;
  height: 13px;
  border-radius: 4px;
}

.job-text-loading {
  width: 20%;
  height: 13px;
  border-radius: 4px;
}

.tag-text-loading {
  width: 63px;
  height: 26px;
  border-radius: 4px;
}

.info-container {
  width: 100%;
}
</style>
