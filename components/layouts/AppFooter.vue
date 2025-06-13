<script lang="ts" setup>

</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__container">
      <div class="glass">
        <nav class="app-nav"> 
        <div class="app-nav__container">
          <NuxtLink class="_link" to="/about">About</NuxtLink>
          <NuxtLink class="_link" to="/contact">Contact</NuxtLink>
          <NuxtLink class="_link" to="/blog">Blog</NuxtLink>
        </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">


.glass {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 20px;
  z-index: 1;
  box-shadow: 0 -4px 12px rgba(26, 25, 25, 0.05);
  background-color: rgba(31,31,31, 0.2);
  backdrop-filter: blur(8px);
}
  .app-nav__container {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
</style>