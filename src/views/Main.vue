<script setup lang="ts">
import JobCard from 'components/cards/JobCard.vue';
</script>

<template>
  <main class="container">
    <div class="banner-search-container">
      <div class="input-search-container border-radius-100 mx-6">
        <span class="material-symbols-outlined search-icon">work</span>
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
    <div class="job-container mt-7">
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

.input-search-container {
  position: relative;
  width: 100%;
}

.input-search-container > .search-icon {
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

.list-job-container {
  display: grid;
  gap: 2rem;
}
</style>
