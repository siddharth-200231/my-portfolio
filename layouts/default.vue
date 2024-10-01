<template>
  <div class="min-h-[80vh] sm:min-h-[85vh] md:min-h-screen flex flex-col bg-gray-900 text-gray-200 relative overflow-hidden">
    <!-- Global Header -->
    <header class="bg-gradient-to-r from-gray-800 to-black text-gray-200 p-3 sm:p-4 shadow-lg relative z-10 w-full animate__animated animate__fadeInDown">
      <nav class="container mx-auto flex justify-between items-center animate-nav-slide-down">
        <h1 class="text-2xl sm:text-3xl font-bold tracking-wider hover:text-neon-green transition duration-300 animate-logo-glow">
          My Portfolio
        </h1>

        <!-- Hamburger Icon for Mobile -->
        <div class="sm:hidden">
          <button @click="toggleMenu" class="text-gray-200 focus:outline-none transition-transform transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Links for Desktop -->
        <ul class="hidden sm:flex space-x-4">
          <li v-for="link in links" :key="link.name">
            <nuxt-link :to="link.path" @click="closeMenu" class="hover:text-neon-green transition-all duration-300 hover:scale-105">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <!-- Dropdown Menu for Mobile -->
      <transition name="dropdown">
        <div v-if="isOpen" class="sm:hidden bg-gray-800 text-gray-200 shadow-md transition-all duration-500 ease-in-out transform">
          <ul class="flex flex-col space-y-2 py-2">
            <li v-for="link in links" :key="link.name">
              <nuxt-link :to="link.path" @click="closeMenu" class="block py-2 px-4 hover:text-neon-green">
                {{ link.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </transition>
    </header>

    <!-- Background before main -->
    <div class="absolute inset-0 bg-gradient-to-r-for-main from-dark-green to-black opacity-80 z-0"></div>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-4 relative z-10 w-full animate__animated animate__fadeIn animate__delay-0.2s">
      <NuxtPage />
    </main>

    <!-- Global Footer -->
    <footer class="bg-gradient-to-r from-gray-800 to-black text-gray-200 p-4 sm:p-3 text-center mt-4 relative z-10 animate__animated animate__fadeInUp transition-transform duration-300 transform hover:-translate-y-1">
      <p class="text-xs sm:text-sm font-medium mb-2">© 2024 Siddharth Sahu. All Rights Reserved.</p>
      <div class="flex justify-center space-x-4 sm:space-x-6 mt-2">
        <a v-for="social in socials" :key="social.name" :href="social.link" class="hover:text-neon-green transition-all duration-300 transform hover:scale-110">
          {{ social.name }}
        </a>
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
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
      ],
      socials: [
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/siddharth-sahu-40aa57289/' },
        { name: 'GitHub', link: 'https://github.com/siddharth-200231' },
        { name: 'LeetCode', link: 'https://leetcode.com/u/siddharth_123456/' }
      ]
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
/* Enhanced gradient background */
.bg-gradient-to-r {
  background: linear-gradient(to right, #000, #1f1f1f, #141414); /* Consistent dark theme */
}

/* Dark greenish gradient background */
.bg-gradient-to-r-for-main {
  background: linear-gradient(to right, #022002, #072107); /* Dark greenish tint */
}

/* Neon green hover */
.text-neon-green {
  color: #00ff00;
  text-shadow: 0 0 8px #00ff00, 0 0 16px #00ff00;
}

/* Logo glow effect */
@keyframes logo-glow {
  0%, 100% {
    text-shadow: 0 0 15px #00ff00, 0 0 30px #00ff00, 0 0 45px #00ff00;
  }
  50% {
    text-shadow: 0 0 30px #00ff00, 0 0 45px #00ff00, 0 0 60px #00ff00;
  }
}

.animate-logo-glow {
  animation: logo-glow 2.5s infinite ease-in-out;
}

/* Dropdown animation */
@keyframes fadeSlideDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Footer styles */
footer p {
  font-size: 1rem;
  color: #00ff00;
}

footer a {
  font-size: 0.875rem;
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
}

footer a:hover {
  text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00;
}

/* Responsive styling for smaller screens */
@media (max-width: 640px) {
  header {
    padding: 0.75rem;
  }

  header h1 {
    font-size: 1.5rem;
  }

  footer {
    padding: 0.75rem;
  }

  footer p {
    font-size: 0.75rem;
  }

  footer a {
    font-size: 0.75rem;
  }
}
</style>
