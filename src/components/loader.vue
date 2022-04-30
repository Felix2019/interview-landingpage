<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="w-10 h-10 border-4 border-t-transparent border-slate-800 border-solid rounded-full animate-spin"
    ></div>
  </div>
</template>

<script setup lang="ts">
// defineProps<{ msg: string }>()

const props = defineProps({
  width: String,
  height: String,
});
</script>
