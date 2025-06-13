<script lang="ts" setup>

</script>

<template>
  <footer class="app-footer">
    <nav class="app-nav">
      <div class="container app-nav__container">
        <NuxtLink class="_link" to="/about">About</NuxtLink>
        <NuxtLink class="_link" to="/contact">Contact</NuxtLink>
        <NuxtLink class="_link" to="/blog">Blog</NuxtLink>
      </div>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
  .app-nav__container {
    background-color: rgba(31,31,31, 0.2);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
</style>