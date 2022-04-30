<template>
  <div
    class="flex flex-col p-8 space-y-20 bg-background md:h-screen md:flex-row md:items-center md:space-y-0 md:p-16"
  >
    <!-- info container -->
    <div class="w-full flex flex-col space-y-12 md:basis-1/2">
      <!-- header text -->
      <div
        class="flex flex-col space-y-2 text-6xl font-bold uppercase md:text-8xl"
      >
        <span>the</span>
        <span class="text-primary">social</span>
        <span class="text-primary">questions</span>
        <span>app</span>
      </div>

      <!-- store buttons -->
      <div class="flex items-center space-x-6">
        <!-- app store badge -->
        <a
          target="blank"
          href="https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically&gl=DE&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <img
            src="../assets/app_store_badge_1.png"
            alt="Download Interview on the App Store"
            class="w-40"
          />
        </a>

        <!-- google play badge -->
        <a
          target="blank"
          href="https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically&gl=DE&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
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
      class="h-full object-contain md:basis-1/2"
    />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");

* {
  font-family: "Bungee Shade", cursive;
}
</style>
