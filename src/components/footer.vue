<template>
  <footer
    class="w-full p-4 bg-background space-y-2 md:flex md:flex-row md:items-center md:justify-between md:space-y-0 md:p-6"
  >
    <span class="flex flex-row text-sm font-semibold space-x-2">
      <p>© 2022</p>
      <a
        href="https://interview-app.com"
        class="hover:underline"
        target="_blank"
        >Interview</a
      >
    </span>

    <!-- links -->
    <ul class="flex flex-wrap items-center space-x-4">
      <router-link v-for="(item, index) in footer" :key="index" :to="item.path">
        <li class="text-sm text-gray-500 hover:underline">
          {{ item.title }}
        </li>
      </router-link>

      <!-- imprint link -->
      <li>
        <a href="https://felixguenthner.com/imprint" target="_blank">
          <span class="text-sm text-gray-500 hover:underline"> Imprint</span>
        </a>
      </li>

      <!-- instagram link -->
      <li>
        <a href="https://www.instagram.com/interview_app" target="_blank">
          <Icon icon="akar-icons:instagram-fill" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const footer = [
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
];
</script>
