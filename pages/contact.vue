<template>
  <div class="container mx-auto p-6 bg-gray-800 rounded-lg shadow-lg relative overflow-hidden">
    <h1 class="text-3xl sm:text-2xl md:text-3xl font-bold text-indigo-300 text-center animate__animated animate__zoomIn faster-animation neon">Contact Me</h1>
    <div class="mt-4">
      <p class="text-gray-300 text-base sm:text-sm md:text-base text-center">
        If you have any questions or would like to get in touch, feel free to contact me through the following methods:
      </p>
      <div class="mt-4">
        <h2 class="text-2xl sm:text-lg md:text-2xl font-semibold text-green-400 neon">Email:</h2>
        <p class="text-gray-300 text-base sm:text-sm md:text-base">sahusidd715@gmail.com</p>
      </div>
      <div class="mt-4">
        <h2 class="text-2xl sm:text-lg md:text-2xl font-semibold text-green-400 neon">Phone:</h2>
        <p class="text-gray-300 text-base sm:text-sm md:text-base">+91 6371984608</p>
      </div>
      <div class="mt-4">
        <h2 class="text-2xl sm:text-lg md:text-2xl font-semibold text-green-400 neon">LinkedIn:</h2>
        <p class="text-gray-300 text-base sm:text-sm md:text-base">
          <a href="https://www.linkedin.com/in/siddharth-sahu-40aa57289/" class="hover:underline text-green-400">https://www.linkedin.com/in/siddharth-sahu-40aa57289/</a>
        </p>
      </div>
      <div class="mt-4">
        <h2 class="text-2xl sm:text-lg md:text-2xl font-semibold text-green-400 neon">GitHub:</h2>
        <p class="text-gray-300 text-base sm:text-sm md:text-base">
          <a href="https://github.com/siddharth-200231" class="hover:underline text-green-400">https://github.com/siddharth-200231</a>
        </p>
      </div>
      <div class="mt-4">
        <h2 class="text-2xl sm:text-lg md:text-2xl font-semibold text-green-400 neon">LeetCode:</h2>
        <p class="text-gray-300 text-base sm:text-sm md:text-base">
          <a href="https://leetcode.com/u/siddharth_123456/" class="hover:underline text-green-400">https://leetcode.com/u/siddharth_123456/</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
/* Add additional styles as needed */

.neon {
  text-shadow: 0 0 3px rgba(0, 255, 0, 0.7),
               0 0 6px rgba(0, 255, 0, 0.5),
               0 0 10px rgba(0, 255, 0, 0.3);
}

/* Faster animation */
.faster-animation {
  animation-duration: 0.5s; /* Adjust this duration for faster animations */
}

/* Import animations from Animate.css */
@import "~animate.css/animate.min.css"; /* Ensure to install animate.css via npm or link in your project */
</style>
