<template>
  <div
    class="h-screen flex flex-col p-8 overflow-x-hidden space-y-4 bg-background md:h-screen md:flex-row md:items-center md:space-y-0 md:p-16"
  >
    <!-- info container -->
    <div class="w-full flex flex-col space-y-8 md:basis-1/2 md:space-y-12">
      <!-- header text -->
      <div
        class="flex flex-col space-y-2 text-4xl font-bold uppercase md:text-8xl"
      >
        <span>the</span>
        <span class="text-primary">social</span>
        <span class="text-primary">questions</span>
        <span>app</span>
      </div>

      <!-- store buttons -->
      <div class="flex items-center space-x-6">
        <!-- app store badge -->
        <a target="blank" href="https://interview-app.com">
          <img
            src="../assets/app_store_badge_1.png"
            alt="Download Interview on the App Store"
            class="w-40"
          />
        </a>

        <!-- google play badge -->
        <a target="blank" href="https://interview-app.com"
          ><img
            alt="Get Interview on Google Play"
            src="../assets/google-play-badge.png"
            class="w-48"
        /></a>
      </div>
    </div>

    <!-- mockup image -->
    <img
      alt="App Mockup"
      src="../assets/mockup_2.png"
      class="h-96 scale-150 object-cover md:basis-1/2 md:scale-110 md:h-full"
    />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");

* {
  font-family: "Bungee Shade", cursive;
}
</style>
