<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import JobCardList from 'components/data-display/JobCardList.vue';
import Pagination from 'components/Pagination.vue';
import { useFetch } from 'composable/index';

const FILTER_LOCATION: {
  id: number;
  name: string;
  value: string;
  isChecked?: boolean;
  location_requested: string;
}[] = [
  {
    id: 1,
    name: 'London',
    value: 'london',
    isChecked: true,
    location_requested: 'London, England, United Kingdom',
  },
  {
    id: 2,
    name: 'Amsterdam',
    value: 'amsterdam',
    location_requested: 'Amsterdam, North Holland, Netherlands',
  },
  {
    id: 3,
    name: 'New York',
    value: 'newyork',
    location_requested: 'New York, New York, United States',
  },
  {
    id: 4,
    name: 'Berlin',
    value: 'berlin',
    location_requested: 'Berlin, Germany',
  },
];

const currentLocation = ref<string>('london');
const choosedLocation = ref<string>(FILTER_LOCATION[0].location_requested);

const locationSearch = ref<string>('');
const jobSearch = ref<string>('');

const handleChooseLocation = (
  e: Event,
  item: { id: number; name: string; value: string; isChecked?: boolean; location_requested: string }
) => {
  currentLocation.value = (e.target as HTMLInputElement).value;
  choosedLocation.value = item.location_requested;
};

const handleSearchJob = async () => {
  await request({
    optionalQuery: {
      q: jobSearch.value,
    },
  });

  jobSearch.value = '';
  choosedLocation.value = '';
  currentLocation.value = '';
};

const {
  data: jobs,
  request,
  isLoading,
} = useFetch({
  path: '/search.json',
  query: {
    q: 'Engineer',
    engine: 'google_jobs',
  },
});

onMounted(async () => {
  await request({
    optionalQuery: {
      location: choosedLocation.value,
    },
  });
});

watch(
  choosedLocation,
  async (after) => {
    if (after)
      await request({
        optionalQuery: {
          location: choosedLocation.value,
        },
      });
  },
  {
    deep: true,
  }
);
</script>

<template>
  <main class="container">
    <div class="banner-search-container">
      <div class="input-container border-radius-100 mx-6">
        <span class="material-symbols-outlined icon">work</span>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Title, companies, expertise, or benefits"
          class="input-search fs-300 w-full border-radius-100"
          v-model="jobSearch"
        />
        <button
          @click="handleSearchJob"
          type="button"
          class="input-button-search py-3 px-6 fs-300 border-radius-100"
        >
          Search
        </button>
      </div>
    </div>
    <div class="job-container mt-7 mb-6">
      <div>
        <div class="flex-container mb-6">
          <input type="checkbox" name="full-time" id="full-time" class="checkbox" checked />
          <label for="full-time" class="text-medium ml-3 checkbox-text">Full Time</label>
        </div>
        <div class="mb-5">
          <label for="location" class="text-bold label-text">Location</label>
          <div class="input-container border-radius-100 mt-4">
            <span class="material-symbols-outlined icon">globe</span>
            <input
              type="text"
              id="location"
              placeholder="City, state, zip code or country"
              name="location"
              v-model="locationSearch"
              class="input-search fs-300 w-full border-radius-100 shadow"
            />
          </div>
        </div>
        <div>
          <ul>
            <li v-for="location in FILTER_LOCATION" :key="location.id">
              <div class="flex-container mb-4">
                <input
                  type="radio"
                  :name="location.value"
                  :id="location.value"
                  :value="location.value"
                  class="checkbox rounded-full"
                  :checked="location.isChecked"
                  v-model="currentLocation"
                  @input="(e: Event) => handleChooseLocation(e, location)"
                />
                <label :for="location.value" class="text-medium ml-3 checkbox-text">
                  {{ location.name }}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <JobCardList :jobs="jobs" :is-loading="isLoading" />
        <Pagination />
      </div>
    </div>
  </main>
</template>

<style scoped>
.shadow {
  box-shadow: 0px 2px 4px 0px #0000000d;
}

.flex-container {
  display: flex;
  align-items: center;
}

.banner-search-container {
  position: relative;
  background-image: url('../assets/backgroundImg.png');
  min-height: 180px;
  object-fit: cover;
  border-radius: 8px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label-text {
  color: var(--neutral-100);
}

.input-container {
  position: relative;
  width: 100%;
}

.input-container > .icon {
  position: absolute;
  background-color: transparent;
  top: 16px;
  color: var(--neutral-100);
  left: 16px;
}

.input-search {
  background-color: #ffffff;
  outline: none;
  border: none;
  padding: 20px 48px;
}

.input-button-search {
  background-color: var(--secondary-600);
  border: none;
  outline: none;
  color: #ffffff;
  position: absolute;
  top: 8px;
  right: 16px;
  cursor: pointer;
}

.job-container {
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  gap: var(--size-600);
}

@media screen and (max-width: 830px) {
  .job-container {
    grid-template-columns: auto;
  }
}

.checkbox {
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid var(--neutral-100);
  width: 18px;
  height: 18px;
}

.checkbox-text {
  color: var(--primary-600);
}
</style>
