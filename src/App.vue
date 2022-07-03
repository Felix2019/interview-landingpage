<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap");

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-scrollbar: 0;
  background-color: #f8fafc;
}

::-webkit-scrollbar {
  display: none !important;
}
</style>

/* firebase deploy --only hosting:interview-app-9 */
