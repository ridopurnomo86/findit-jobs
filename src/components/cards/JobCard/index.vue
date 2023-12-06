<script setup lang="ts">
import Image from 'components/core/Image.vue';

defineProps({
  imgUrl: { type: String, required: true },
  companyName: { type: String, required: true },
  jobsName: { type: String, required: true },
  jobType: { type: String, required: true },
  recentDate: { type: String, required: true },
  countryName: { type: String, required: true },
});
</script>

<template>
  <article class="job-card-container p-3 border-radius-100">
    <div class="space-between-container">
      <div class="flex-container">
        <div class="image-container">
          <img
            v-if="imgUrl"
            class="company-image border-radius-100"
            :src="imgUrl"
            :alt="`picture ${companyName}`"
          />
          <Image v-else class="company-image border-radius-100" :company-name="companyName" />
        </div>
        <div class="info-container ml-4">
          <p class="company-text text-bold fs-300 mb-2">
            {{ companyName }}
          </p>
          <p class="job-text text-regular fs-500 mb-2">
            {{ jobsName }}
          </p>
          <div class="flex-container">
            <span class="tag border-radius-100 px-2 py-1">
              <p class="job-type-text text-bold fs-300">{{ jobType }}</p>
            </span>
          </div>
        </div>
      </div>
      <div class="flex-container align-self">
        <div class="flex-container items-center mr-4">
          <span class="material-symbols-outlined icon mr-2">public</span>
          <p class="country-text text-medium no-wrap fs-300">
            {{ countryName }}
          </p>
        </div>
        <div class="flex-container items-center">
          <span class="material-symbols-outlined icon mr-2">schedule</span>
          <p class="recent-date-text text-medium no-wrap fs-300">
            {{ recentDate }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.icon {
  color: var(--neutral-100);
}

.no-wrap {
  white-space: nowrap;
}

.items-center {
  align-items: center;
}

.align-self {
  align-self: flex-end;
}

.space-between-container {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 700px) {
  .space-between-container {
    flex-direction: column;
  }

  .align-self {
    margin-top: 16px;
  }
}

.job-card-container {
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px #0000000d;
}

.image-container {
  width: 50px;
  height: 50px;
  align-self: center;
}

.company-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
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

.recent-date-text {
  color: var(--neutral-50);
}

.country-text {
  color: var(--neutral-100);
}

.tag {
  border: 1px solid var(--primary-600);
}
</style>
