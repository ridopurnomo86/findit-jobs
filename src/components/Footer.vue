<template>
  <footer class="footer-container mt-4 py-6">
    <p class="footer-text fs-300 text-medium">
      created by
      <a href="https://github.com/ridopurnomo86" target="_blank">
        <span class="text-bold">ridopurnomo86</span>
      </a>
      - devChallenges.io
    </p>
  </footer>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--neutral-100);
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.footer-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-text {
  color: var(--neutral-100);
}
</style>
