<script setup lang="ts">
import JobCard from 'components/cards/JobCard/index.vue';
import JobCardLoading from 'components/cards/JobCard/loading.vue';
import { JobsApiTypes } from 'types/api-data/jobs';

defineProps<{ jobs: JobsApiTypes | null; isLoading: boolean }>();
const keys = [...Array(6).keys()];
</script>

<template>
  <div class="list-job-container">
    <div v-if="isLoading">
      <div v-for="key in keys" class="mb-6" :key="key">
        <JobCardLoading />
      </div>
    </div>
    <div v-else v-for="job in jobs?.jobs_results" :key="job.job_id">
      <JobCard
        :company-name="job.company_name"
        :jobs-name="job.title"
        :img-url="job.thumbnail || ''"
        :job-type="job.detected_extensions?.schedule_type"
        :country-name="job.location"
        :on-click="
          async () => {
            const company_name = job.company_name.toLowerCase();
            const title = [...job.title.split(' '), company_name].join('-').toLowerCase();

            await $router.push({
              path: `/job/${title}`,
              state: {
                company_name: job?.company_name,
                description: job?.description,
                job_id: job?.job_id,
                location: job?.location,
                title: job?.title,
                via: job?.via,
                job_type: job.detected_extensions?.schedule_type,
                date: job.detected_extensions?.posted_at || 'Time Unknown',
                thumbnail: job?.thumbnail,
              },
            });
          }
        "
        :recent-date="job.detected_extensions?.posted_at || 'Time Unknown'"
      />
    </div>
  </div>
</template>

<style scoped>
.list-job-container {
  display: grid;
  gap: 2rem;
}
</style>
