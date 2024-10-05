// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enables Nuxt.js development tools in the browser.
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    // other modules...
  ],

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

  // Compatibility date for your project.
  compatibilityDate: '2024-09-24',

  modules: ['@nuxt/image']
});