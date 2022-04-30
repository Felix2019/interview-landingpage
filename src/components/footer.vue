<template>
  <footer
    class="w-full p-4 bg-background md:flex md:items-center md:justify-between md:p-6"
  >
    <span class="text-sm font-bold sm:text-center"
      >© 2022
      <a
        href="https://interview-app.com"
        class="hover:underline"
        target="_blank"
        >Interview</a
      >
    </span>

    <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
      <router-link v-for="(item, index) in footer" :key="index" :to="item.path">
        <li class="mr-4 text-sm text-gray-500 hover:underline md:mr-6">
          {{ item.title }}
        </li>
      </router-link>

      <!-- instagram link -->
      <li class="mr-4">
        <a href="https://www.instagram.com/interview_app" target="_blank">
          <Icon icon="akar-icons:instagram-fill" />
        </a>
      </li>

      <!-- tiktok link -->
      <li>
        <a href="https://www.instagram.com/interview_app" target="_blank">
          <Icon icon="bxl:tiktok" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const footer = [
  {
    title: "Imprint",
    path: "/imprint",
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
];
</script>
