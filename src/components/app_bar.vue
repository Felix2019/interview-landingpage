<template>
  <header
    class="sticky w-full top-0 h-14 z-10 flex items-center justify-between px-5 shadow bg-background"
  >
    <router-link to="/">
      <div class="flex items-center space-x-2.5">
        <img
          src="../assets/logo_transparent.png"
          alt="logo-image"
          class="h-6 w-6 rounded-full object-cover"
        />
        <span class="text-xl tracking-wide font-bold">Interview</span>
      </div>
    </router-link>

    <!-- <div class="flex flex-row space-x-4">
      <button
        name="share-button"
        aria-label="share-button"
        class="flex flex-row space-x-2.5"
      >
        <span class="text-lg font-bold">Projects</span>
      </button>

      <button
        name="share-button"
        aria-label="share-button"
        class="flex flex-row space-x-2.5"
      >
        <span class="text-lg font-bold">Contact</span>
      </button>
    </div> -->
  </header>
</template>
