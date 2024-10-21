<!-- 首页Footer组件 -->

<template>
  <footer class="w-full text-gray-600 bg-gray-50 h dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
    <div class="container mx-auto">
      <div class="flex flex-col justify-center items-center">
        <p class="mb-2 text-sm">Released under the MIT License</p>
        <p class="text-sm">Copyright © 2022-{{ currentYear }} Maoyu</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
footer {
  transition: background-color 0.3s ease;
}

footer:hover {
  background-color: #f9fafb;
}

.dark footer:hover {
  background-color: #1f2937;
}
</style>
