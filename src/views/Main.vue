<script setup lang="ts">
import JobCard from 'components/cards/JobCard.vue';
import useFetch from 'composable/useFetch';

const { data } = useFetch({
  path: '/search.json',
});

console.log(data);
</script>

<template>
  <main class="container">
    <div class="banner-search-container">
      <div class="input-container border-radius-100 mx-6">
        <span class="material-symbols-outlined icon">work</span>
        <input
          type="text"
          placeholder="Title, companies, expertise, or benefits"
          class="input-search fs-300 w-full border-radius-100"
        />
        <button type="submit" class="input-button-search py-3 px-6 fs-300 border-radius-100">
          Search
        </button>
      </div>
    </div>
    <div class="job-container mt-7 mb-6">
      <div>
        <div class="flex-container mb-6">
          <input type="checkbox" name="full-time" id="full-time" class="checkbox" />
          <label for="full-time" class="text-medium ml-3 checkbox-text">Full Time</label>
        </div>
        <div class="mb-5">
          <label for="" class="text-bold label-text">Location</label>
          <div class="input-container border-radius-100 mt-4">
            <span class="material-symbols-outlined icon">globe</span>
            <input
              type="text"
              placeholder="City, state, zip code or country"
              class="input-search fs-300 w-full border-radius-100 shadow"
            />
          </div>
        </div>
        <div>
          <ul>
            <li>
              <div class="flex-container mb-4">
                <input type="radio" name="london" id="london" class="checkbox rounded-full" />
                <label for="london" class="text-medium ml-3 checkbox-text">London</label>
              </div>
            </li>
            <li>
              <div class="flex-container mb-4">
                <input type="radio" name="amsterdam" id="amsterdam" class="checkbox rounded-full" />
                <label for="amsterdam" class="text-medium ml-3 checkbox-text">Amsterdam</label>
              </div>
            </li>
            <li>
              <div class="flex-container mb-4">
                <input type="radio" name="newyork" id="newyork" class="checkbox rounded-full" />
                <label for="newyork" class="text-medium ml-3 checkbox-text">New York</label>
              </div>
            </li>
            <li>
              <div class="flex-container mb-4">
                <input type="radio" name="berlin" id="berlin" class="checkbox rounded-full" />
                <label for="berlin" class="text-medium ml-3 checkbox-text">Berlin</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="list-job-container">
        <JobCard
          :company-name="'Rusting'"
          :img-url="'https://static.devitjobs.uk/logo-images/referment-logo.jpg'"
          :jobs-name="'Front-End Software Engineer'"
          :job-type="'Full Time'"
        />
        <JobCard
          :company-name="'Rusting'"
          :img-url="'https://static.devitjobs.uk/logo-images/referment-logo.jpg'"
          :jobs-name="'Front-End Software Engineer'"
          :job-type="'Full Time'"
        />
        <JobCard
          :company-name="'Rusting'"
          :img-url="'https://static.devitjobs.uk/logo-images/referment-logo.jpg'"
          :jobs-name="'Front-End Software Engineer'"
          :job-type="'Full Time'"
        />
      </div>
    </div>
  </main>
</template>

<style>
.shadow {
  box-shadow: 0px 2px 4px 0px #0000000d;
}

.flex-container {
  display: flex;
  align-items: center;
}

.image-background {
  object-fit: cover;
  aspect-ratio: 6;
  border-radius: 8px;
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

.list-job-container {
  display: grid;
  gap: 2rem;
}

@media screen and (max-width: 600px) {
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
