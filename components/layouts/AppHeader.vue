<script lang="ts" setup>

</script>

<template>
  <header class="app-header">
    <div class="container app-header__container">
      <NuxtLink class="logo _link" to="/">
        <p>Designe</p>
        <p>it`s the</p>
        <p>Style for Life</p>
      </NuxtLink>
    </div>
    </header>
</template>

<style scoped lang="scss">
.app-header__container {
    z-index: 900;
    box-shadow: 0 4px 12px rgba(22, 22, 22, 0.736);
    background-color: rgba(31,31,31, 0.2);
    backdrop-filter: blur(8px);
}
</style>
