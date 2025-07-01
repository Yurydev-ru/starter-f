<script lang="ts" setup>

</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nemo.</p>
    </div>
    <!-- <div class="app-footer__container">
      <div class="glass">
        <nav class="app-nav"> 
        <div class="app-nav__container">
          <p>weeee</p>
        </div>
        </nav>
      </div>
    </div> -->
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  width: 100%;
  min-height: 90px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  box-shadow: 0 -4px 12px rgba(26, 25, 25, 0.05);
  background-color: rgba(31,31,31, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.app-footer .container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
// .glass {
//   width: 100%;
//   position: absolute;
//   left: 0;
//   bottom: 20px;
//   z-index: 1;
//   box-shadow: 0 -4px 12px rgba(26, 25, 25, 0.05);
//   background-color: rgba(31,31,31, 0.2);
//   backdrop-filter: blur(8px);
// }
  // .app-nav__container {
  //   display: flex;
  //   justify-content: space-between;
  //   padding: 20px 0;
  // }
</style>