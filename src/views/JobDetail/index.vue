<script setup lang="ts">
import Image from 'components/core/Image.vue';
import { useFetch } from 'composable/index';
import { onMounted } from 'vue';
import JobDetailLoading from './loading.vue';

const job = window.history.state;

const {
  data: jobDetail,
  request,
  isLoading,
} = useFetch({
  path: '/search.json',
  query: {
    engine: 'google_jobs_listing',
    q: job.job_id,
  },
});

onMounted(async () => {
  await request({});
});
</script>

<template>
  <div v-if="isLoading">
    <JobDetailLoading />
  </div>
  <main v-else class="container grid-container">
    <aside>
      <a @click="$router.go(-1)" class="flex-container back-search-text fs-300 text-medium">
        <span class="material-symbols-outlined back-search-text icon mr-2">keyboard_backspace</span>
        Back to search
      </a>
      <div class="mt-6">
        <h1 class="text-bold title-text mb-4">HOW TO APPLY</h1>
        <p class="fs-300 text-medium apply-text">
          Please email a copy of your resume and online portfolio to view
          <a
            v-for="(applyOption, idx) in jobDetail.apply_options"
            target="_blank"
            :href="applyOption.link"
            :key="idx"
          >
            <span class="recipient-text">
              {{ applyOption.title
              }}{{ idx + 1 === jobDetail.apply_options.length ? '.' : ',' }}&nbsp;
            </span>
          </a>
        </p>
      </div>
    </aside>
    <div>
      <div class="flex-container mb-2">
        <h1 class="company-text fs-600 text-bold">{{ job.title }}</h1>
        <span class="tag border-radius-100 px-2 py-1 ml-4">
          <p class="job-type-text text-bold fs-300">{{ job.job_type }}</p>
        </span>
      </div>
      <div class="flex-container mb-6">
        <span class="material-symbols-outlined icon mr-2">schedule</span>
        <p class="recent-date-text text-medium no-wrap fs-300">{{ job.date }}</p>
      </div>
      <div class="head-info-container mb-6">
        <div class="image-container">
          <img
            v-if="job.thumbnail"
            class="company-image border-radius-100"
            :src="job.thumbnail"
            :alt="`picture ${job.company_name}`"
          />
          <Image v-else class="company-image border-radius-100" :company-name="job.company_name" />
        </div>
        <div class="info-container ml-3">
          <p class="company-text text-bold fs-500 mb-1">{{ job.company_name }}</p>
          <div class="flex-container items-center mr-4">
            <span class="material-symbols-outlined icon mr-2">public</span>
            <p class="country-text text-medium no-wrap fs-300">{{ job.location }}</p>
          </div>
        </div>
      </div>
      <div v-html="job.description" class="text-description"></div>
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
.back-search-text {
  color: var(--secondary-600);
}
.back-search-text > .icon {
  color: var(--secondary-600);
}
.recipient-text {
  color: var(--secondary-600);
}
.title-text {
  color: var(--neutral-100);
}
.apply-text {
  color: var(--primary-600);
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
.tag {
  border: 1px solid var(--primary-600);
}
.icon {
  font-size: 15px;
  color: var(--neutral-100);
}
.company-text {
  color: var(--primary-600);
}
.job-type-text {
  color: var(--primary-600);
}
.country-text {
  color: var(--neutral-100);
}
.recent-date-text {
  color: var(--neutral-100);
}
.flex-container {
  display: flex;
  align-items: center;
}
.tag {
  border: 1px solid var(--primary-600);
}
.head-info-container {
  display: flex;
  align-items: flex-start;
}
.text-description {
  color: var(--primary-600);
  white-space: pre-wrap;
}
</style>
