<script lang="ts" setup>
    
</script>

<template>
  <NuxtPwaManifest/>
  <div class="app-wrapper">
    <Header/>
    <main class="app-main">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>
