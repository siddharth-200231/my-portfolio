<template>
    <div class="min-h-[80vh] sm:min-h-[85vh] md:min-h-screen flex flex-col bg-gray-900 text-gray-200 relative overflow-hidden">
      <!-- Global Header -->
      <header class="bg-gray-900 text-gray-300 p-2 shadow-lg relative z-10 w-full animate__animated animate__fadeInDown">
        <nav class="container mx-auto flex justify-between items-center animate-nav-slide-down">
          <h1 class="text-2xl font-extrabold hover:text-green-400 transition duration-500 animate-logo-glow">
            My Portfolio
          </h1>
  
          <!-- Hamburger Icon for Mobile -->
          <div class="sm:hidden">
            <button @click="toggleMenu" class="text-gray-300 focus:outline-none transition-transform transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
  
          <!-- Links for Desktop -->
          <ul class="hidden sm:flex space-x-4">
            <li>
              <nuxt-link to="/" @click="closeMenu" class="hover:text-green-400 transition duration-300 animate__animated animate__fadeInLeft">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" @click="closeMenu" class="hover:text-green-400 transition duration-300 animate__animated animate__fadeInLeft">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects" @click="closeMenu" class="hover:text-green-400 transition duration-300 animate__animated animate__fadeInLeft">Projects</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" @click="closeMenu" class="hover:text-green-400 transition duration-300 animate__animated animate__fadeInLeft">Contact</nuxt-link>
            </li>
          </ul>
        </nav>
  
        <!-- Dropdown Menu for Mobile -->
        <div v-if="isOpen" class="sm:hidden bg-gray-800 text-gray-300 shadow-md transform transition-all duration-300">
          <ul class="flex flex-col space-y-2 py-2">
            <li>
              <nuxt-link to="/" @click="closeMenu" class="block py-2 px-4 hover:text-green-400 animate__animated animate__fadeIn">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" @click="closeMenu" class="block py-2 px-4 hover:text-green-400 animate__animated animate__fadeIn">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects" @click="closeMenu" class="block py-2 px-4 hover:text-green-400 animate__animated animate__fadeIn">Projects</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" @click="closeMenu" class="block py-2 px-4 hover:text-green-400 animate__animated animate__fadeIn">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="flex-grow container mx-auto p-2 sm:p-4 relative z-10 w-full animate__animated animate__fadeIn animate__delay-0.2s">
        <NuxtPage />
      </main>
  
      <!-- Global Footer -->
      <footer class="bg-gray-900 text-gray-300 p-4 text-center mt-4 relative z-10 animate__animated animate__fadeInUp transition-transform duration-300 transform hover:-translate-y-1">
        <p class="text-lg font-medium mb-2">© 2024 Siddharth Sahu. All Rights Reserved.</p>
        <div class="flex justify-center space-x-6 mt-2">
          <a href="https://www.linkedin.com/in/siddharth-sahu-40aa57289/" class="hover:text-green-400 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn">LinkedIn</a>
          <a href="https://github.com/siddharth-200231" class="hover:text-green-400 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn">GitHub</a>
          <a href="https://leetcode.com/u/siddharth_123456/" class="hover:text-green-400 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn">LeetCode</a>
        </div>
      </footer>
  
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
    0%,
    100% {
      text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
    }
    50% {
      text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00;
    }
  }
  
  .animate-logo-glow {
    animation: logo-glow 2s infinite ease-in-out;
  }
  
  /* Fade-In Animation for Links */
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate__fadeIn {
    animation: fadeIn 0.5s ease-in-out forwards;
  }
  
  /* Footer Slide-Up Animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate__fadeInUp {
    animation: fadeInUp 0.5s ease-in-out forwards;
  }
  
  /* Unique Footer Styles */
  footer p {
    font-size: 1rem; /* Default text size */
  }
  
  footer a {
    font-size: 1rem; /* Default link size */
  }
  
  @media (max-width: 640px) {
    footer p {
      font-size: 0.875rem; /* Smaller text size on small screens */
    }
  
    footer a {
      font-size: 0.875rem; /* Smaller link size on small screens */
    }
  }
  </style>
  