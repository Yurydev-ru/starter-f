<script lang="ts" setup>
    
</script>

<template>
    <NuxtPwaManifest/>
    <div class="app-wrapper">
        <AppHeader/>
        <main class="app-main">
            <slot/>
        </main>
        <AppFooter/>
    </div>
</template>
