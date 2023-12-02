<script setup lang="ts">
defineProps({
  imgUrl: { type: String, required: true },
  companyName: { type: String, required: true },
  jobsName: { type: String, required: true },
  jobType: { type: String, required: true },
});
</script>

<template>
  <article class="job-card-container p-3 border-radius-100">
    <div class="flex-container">
      <img class="company-image border-radius-100" :src="imgUrl" :alt="`picture ${companyName}`" />
      <div class="info-container ml-4">
        <p class="company-text text-bold fs-300 mb-2">{{ companyName }}</p>
        <p class="job-text text-regular fs-600 mb-2">{{ jobsName }}</p>
        <div class="flex-container">
          <span class="tag border-radius-100 px-2 py-1">
            <p class="job-type-text text-bold fs-300">{{ jobType }}</p>
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<style>
.job-card-container {
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px #0000000d;
}

.company-image {
  aspect-ratio: 1;
  max-width: 90px;
}

.flex-container {
  display: flex;
}

.company-text,
.job-type-text {
  color: var(--primary-600);
}

.job-text {
  color: var(--primary-600);
}

.tag {
  border: 1px solid var(--primary-600);
}
</style>
