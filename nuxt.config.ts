// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, // Enables Nuxt.js development tools in the browser.
  
  css: [
    '~/assets/css/main.css', // Custom main CSS file.
    'animate.css/animate.min.css', // Animate.css for animations.
  ],

  postcss: {
    plugins: {
      tailwindcss: {}, // Include Tailwind CSS.
      autoprefixer: {}, // Include Autoprefixer for vendor prefixes.
    },
  },

  compatibilityDate: '2024-09-24', // Compatibility date for your project.
});
