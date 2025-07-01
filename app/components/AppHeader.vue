<script lang="ts" setup>

</script>

<template>
  <header class="app-header">  
    <div class="container">
      <nav class="nav">
        <NuxtLink class="logo _link" to="/">
          <p>Designe</p>
          <p>it`s the</p>
          <p>Style for Life</p>
        </NuxtLink>
      </nav>
    </div>
    </header>
</template>

<style scoped lang="scss">
.app-header {
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
  box-shadow: 0 -4px 12px rgba(26, 25, 25, 0.05);
  background-color: rgba(31,31,31, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
</style>
