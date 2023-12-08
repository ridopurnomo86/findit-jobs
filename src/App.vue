<script setup lang="ts">
import Navbar from 'components/Navbar.vue';
import Footer from 'components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <Transition name="page-opacity" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <Footer />
</template>

<style>
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 600ms ease all;
}

.page-opacity-enter-from,
.page-opacity-enter-leave {
  opacity: 0;
}
</style>
