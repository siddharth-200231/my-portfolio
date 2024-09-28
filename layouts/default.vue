<template>
  <div class="min-h-[80vh] sm:min-h-[85vh] md:min-h-screen flex flex-col bg-gray-900 text-gray-200 relative overflow-hidden">
    <!-- Global Header -->
    <header class="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 p-4 shadow-lg relative z-10 w-full animate__animated animate__fadeInDown">
      <nav class="container mx-auto flex justify-between items-center animate-nav-slide-down">
        <h1 class="text-3xl font-bold tracking-wider hover:text-purple-500 transition duration-300 animate-logo-glow">
          My Portfolio
        </h1>

        <!-- Hamburger Icon for Mobile -->
        <div class="sm:hidden">
          <button @click="toggleMenu" class="text-gray-200 focus:outline-none transition-transform transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Links for Desktop -->
        <ul class="hidden sm:flex space-x-6">
          <li>
            <nuxt-link to="/" @click="closeMenu" class="hover:text-purple-500 transition duration-300">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" @click="closeMenu" class="hover:text-purple-500 transition duration-300">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects" @click="closeMenu" class="hover:text-purple-500 transition duration-300">Projects</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" @click="closeMenu" class="hover:text-purple-500 transition duration-300">Contact</nuxt-link>
          </li>
        </ul>
      </nav>

      <!-- Dropdown Menu for Mobile -->
      <div v-if="isOpen" class="sm:hidden bg-gray-800 text-gray-200 shadow-md transform transition-all duration-300">
        <ul class="flex flex-col space-y-2 py-2">
          <li>
            <nuxt-link to="/" @click="closeMenu" class="block py-2 px-4 hover:text-purple-500 animate__animated animate__fadeIn">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" @click="closeMenu" class="block py-2 px-4 hover:text-purple-500 animate__animated animate__fadeIn">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects" @click="closeMenu" class="block py-2 px-4 hover:text-purple-500 animate__animated animate__fadeIn">Projects</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" @click="closeMenu" class="block py-2 px-4 hover:text-purple-500 animate__animated animate__fadeIn">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-4 relative z-10 w-full animate__animated animate__fadeIn animate__delay-0.2s">
      <NuxtPage />
    </main>

    <!-- Global Footer -->
    <footer class="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 p-4 text-center mt-4 relative z-10 animate__animated animate__fadeInUp transition-transform duration-300 transform hover:-translate-y-1">
      <p class="text-lg font-medium mb-2">© 2024 Siddharth Sahu. All Rights Reserved.</p>
      <div class="flex justify-center space-x-6 mt-2">
        <a href="https://www.linkedin.com/in/siddharth-sahu-40aa57289/" class="hover:text-purple-500 transition duration-300 transform hover:scale-110">LinkedIn</a>
        <a href="https://github.com/siddharth-200231" class="hover:text-purple-500 transition duration-300 transform hover:scale-110">GitHub</a>
        <a href="https://leetcode.com/u/siddharth_123456/" class="hover:text-purple-500 transition duration-300 transform hover:scale-110">LeetCode</a>
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
/* Elegant gradient background */
.bg-gradient-to-r {
  background: linear-gradient(to right, #1a1a1a, #2a2a2a);
}

/* Logo glow animation */
@keyframes logo-glow {
  0%,
  100% {
    text-shadow: 0 0 10px #d3b30d, 0 0 20px #d3b30d, 0 0 30px #d3b30d;
  }
  50% {
    text-shadow: 0 0 20px #d3b30d, 0 0 30px #d3b30d, 0 0 40px #d3b30d;
  }
}

.animate-logo-glow {
  animation: logo-glow 2s infinite ease-in-out;
}

/* Footer text and link styles */
footer p {
  font-size: 1.125rem;
}

footer a {
  font-size: 1rem;
  text-shadow: 0 0 10px #d3b30d, 0 0 20px #d3b30d;
}

@media (max-width: 640px) {
  footer p {
    font-size: 0.875rem;
  }

  footer a {
    font-size: 0.875rem;
  }
}
</style>
