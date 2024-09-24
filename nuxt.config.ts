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

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
          integrity: 'sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMl/c5I65n5YlH5V5fgg79HbZ8t/2Xr29F3I6',
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  compatibilityDate: '2024-09-24', // Compatibility date for your project.
});
