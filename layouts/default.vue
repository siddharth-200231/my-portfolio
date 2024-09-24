<template>
    <div class="min-h-screen flex flex-col bg-gray-900 text-gray-200 relative overflow-hidden">
      <!-- Global Header -->
      <header class="bg-gray-900 text-gray-300 p-4 shadow-lg relative z-10 w-full">
        <nav class="container mx-auto flex justify-between items-center animate-nav-slide-down">
          <h1 class="text-2xl font-bold hover:text-green-400 transition duration-500 animate-logo-glow">
            My Portfolio
          </h1>
  
          <!-- Hamburger Icon for Mobile -->
          <div class="sm:hidden">
            <button @click="toggleMenu" class="text-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
  
          <!-- Links for Desktop -->
          <ul class="hidden sm:flex space-x-4">
            <li>
              <nuxt-link to="/" @click="closeMenu" class="hover:text-green-400 transition duration-300">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" @click="closeMenu" class="hover:text-green-400 transition duration-300">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects" @click="closeMenu" class="hover:text-green-400 transition duration-300">Projects</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" @click="closeMenu" class="hover:text-green-400 transition duration-300">Contact</nuxt-link>
            </li>
          </ul>
        </nav>
  
        <!-- Dropdown Menu for Mobile -->
        <div v-if="isOpen" class="sm:hidden bg-gray-800 text-gray-300 shadow-md">
          <ul class="flex flex-col space-y-2 py-4">
            <li>
              <nuxt-link to="/" @click="closeMenu" class="block py-2 px-4 hover:text-green-400">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" @click="closeMenu" class="block py-2 px-4 hover:text-green-400">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects" @click="closeMenu" class="block py-2 px-4 hover:text-green-400">Projects</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" @click="closeMenu" class="block py-2 px-4 hover:text-green-400">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="flex-grow container mx-auto p-4 sm:p-6 relative z-10 w-full">
        <NuxtPage />
      </main>
  
      <!-- Global Footer -->
      
    </div>
  </template>
  
  <script>
  export default {
    name: "DefaultLayout",
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      closeMenu() {
        this.isOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Slide Down Animation for Navbar */
  @keyframes nav-slide-down {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-nav-slide-down {
    animation: nav-slide-down 1s ease-in-out;
  }
  
  /* Glow Animation for Logo */
  @keyframes logo-glow {
    0%, 100% {
      text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
    }
    50% {
      text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00;
    }
  }
  
  .animate-logo-glow {
    animation: logo-glow 2s infinite ease-in-out;
  }
  </style>
  