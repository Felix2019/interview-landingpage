<template>
  <div>
    <AppBar />

    <!-- body -->
    <div
      class="flex flex-col p-6 space-y-20 bg-background overflow-hidden md:p-12 lg:flex-row lg:h-screen"
    >
      <!-- info container -->
      <div class="w-full flex flex-col space-y-12">
        <!-- header text -->
        <div
          class="flex flex-col space-y-1.5 text-4xl font-bold uppercase md:text-8xl"
        >
          <span>the</span>
          <span class="text-primary">social</span>
          <span class="text-primary">questions</span>
          <span>app</span>
        </div>

        <!-- store buttons -->
        <div class="flex flex-row items-center space-x-5">
          <!-- app store badge -->
          <a href="https://interview-app.com" target="_blank">
            <img
              src="../assets/app_store_badge_1.png"
              alt="Download Interview on the App Store"
              class="w-40"
            />
          </a>

          <!-- <a href="https://www.qries.com/">
            <img
              alt="Qries"
              src="https://www.qries.com/images/banner_logo.png"
              height="70"
            />
          </a> -->

          <!-- google play badge -->
          <a href="https://interview-app.com" target="_blank"
            ><img
              alt="Get Interview on Google Play"
              src="../assets/google-play-badge.png"
              class="w-48"
            />
          </a>
        </div>
      </div>

      <!-- mockup image -->
      <img
        alt="App Mockup"
        src="../assets/mockup_2.png"
        class="scale-150 object-cover lg:h-96"
      />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import AppBar from "../components/app_bar.vue";
import Footer from "../components/footer.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");

span {
  font-family: "Bungee Shade", cursive;
}
</style>
