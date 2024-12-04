// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    // other modules...
    'vuetify-nuxt-module',
  ],

  css: [
    'animate.css/animate.min.css',
    '~/assets/css/main.css',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {}, // Include Tailwind CSS.
      autoprefixer: {}, // Include Autoprefixer for vendor prefixes.
    },
  },

  // Compatibility date for your project.
  compatibilityDate: '2024-09-24',
  plugins: [],
  vuetify: {
    moduleOptions: {
      styles: true, // Enable Vuetify styles
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            dark: true,
            colors: {
              primary: '#39ff14',
              secondary: '#424242',
              background: '#121212',
            }
          }
        }
      },
      icons: {
        defaultSet: 'mdi',
      },
    },
  },
});