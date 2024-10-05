<template>
  <div class="container mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
    <h1 class="text-3xl sm:text-2xl md:text-3xl font-bold text-indigo-300 text-center">Contact Me</h1>
    <div class="mt-4">
      <p class="text-gray-300 text-base sm:text-sm md:text-base text-center">
        If you have any questions or would like to get in touch, feel free to contact me through the following methods:
      </p>
      <div class="mt-4" v-for="(item, index) in contactMethods" :key="index">
        <h2 class="text-2xl sm:text-lg md:text-2xl font-semibold text-green-400">{{ item.title }}</h2>
        <p class="text-gray-300 text-base sm:text-sm md:text-base">
          <a v-if="item.link" :href="item.link" class="hover:underline">{{ item.value }}</a>
          <span v-else>{{ item.value }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contactMethods = ref([
  { title: "Email:", value: "sahusidd715@gmail.com" },
  { title: "Phone:", value: "+91 6371984608" },
  { title: "LinkedIn:", value: "https://www.linkedin.com/in/siddharth-sahu-40aa57289/", link: true },
  { title: "GitHub:", value: "https://github.com/siddharth-200231", link: true },
  { title: "LeetCode:", value: "https://leetcode.com/u/siddharth_123456/", link: true },
]);
</script>

<style scoped>
/* Add additional styles as needed */
</style>
