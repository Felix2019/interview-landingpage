<template>
  <App_bar />
  <router-view></router-view>
  <Footer />
</template>

<script setup lang="ts">
import App_bar from "./components/app_bar.vue";
import Footer from "./components/footer.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap");

#app {
  font-family: "Assistant", sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-scrollbar: 0;
}

::-webkit-scrollbar {
  display: none !important;
}
</style>
