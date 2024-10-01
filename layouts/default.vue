<template>
  <div class="min-h-[85vh] md:min-h-screen flex flex-col bg-dark-gray text-gray-200 relative overflow-hidden">
    <!-- Global Header -->
    <header class="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 py-2 md:py-4 shadow-lg relative z-10 w-full">
      <nav class="container mx-auto flex justify-between items-center">
        <!-- Logo or Branding -->
        <h1 class="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-widest text-neon-green hover:text-neon-blue transition duration-500 ease-in-out">
          My Portfolio
        </h1>

        <!-- Hamburger Icon for Mobile -->
        <div class="sm:hidden">
          <button @click="toggleMenu" class="text-gray-200 focus:outline-none hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Links for Desktop -->
        <ul class="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8">
          <li v-for="link in links" :key="link.name">
            <nuxt-link :to="link.path" @click="closeMenu" class="hover:text-neon-green transition duration-500 text-sm md:text-base lg:text-lg font-semibold tracking-wide">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <!-- Dropdown Menu for Mobile -->
      <transition name="fadeSlideDown">
        <div v-if="isOpen" class="sm:hidden bg-gray-800 text-gray-100 shadow-md transition-all duration-700 ease-in-out">
          <ul class="flex flex-col space-y-3 py-3">
            <li v-for="link in links" :key="link.name">
              <nuxt-link :to="link.path" @click="closeMenu" class="block py-2 px-5 hover:text-neon-green">
                {{ link.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </transition>
    </header>

    <!-- Background before main -->
    <div class="absolute inset-0 bg-dynamic-gradient opacity-90 z-0"></div>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-4 sm:p-6 relative z-10 w-full">
      <NuxtPage />
    </main>

    <!-- Global Footer -->
    <footer class="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 p-3 sm:p-4 text-center mt-4 relative z-10 transition-transform duration-500 transform hover:-translate-y-1">
      <p class="text-xs sm:text-sm md:text-md font-light mb-3">© 2024 Siddharth Sahu. All Rights Reserved.</p>
      <div class="flex justify-center space-x-4 sm:space-x-6 mt-3">
        <a v-for="social in socials" :key="social.name" :href="social.link" class="hover:text-neon-green transition-all duration-500 transform hover:scale-105">
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
/* General background improvements */
.bg-dark-gray {
  background: #141414;
}

/* Enhanced neon green hover effect */
.text-neon-green {
  color: #39ff14;
  text-shadow: 0 0 6px #39ff14, 0 0 12px #39ff14;
}

.text-neon-blue {
  color: #00e7ff;
  text-shadow: 0 0 6px #00e7ff, 0 0 12px #00e7ff;
}

/* Smoother dropdown animation */
@keyframes fadeSlideDown {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeSlideDown-enter-active,
.fadeSlideDown-leave-active {
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fadeSlideDown-enter,
.fadeSlideDown-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

/* Button and hover effects */
button:hover, .hover:text-neon-green {
  transform: scale(1.05);
}

button {
  background-color: #141414;
  color: #ffffff;
  border: 2px solid #00ff00;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
  transition: background-color 0.3s, box-shadow 0.3s;
}

button:hover {
  background-color: #00ff00;
  color: #141414;
  box-shadow: 0 0 15px rgba(0, 255, 0, 1);
}

/* Responsive improvements */
@media (max-width: 640px) {
  header h1 {
    font-size: 1.25rem; /* Smaller logo for mobile screens */
    padding: 0.25rem;   /* Reduced padding for the header */
  }

  header {
    padding: 0.5rem; /* Reduced overall padding for smaller screens */
  }

  footer p {
    font-size: 0.65rem;
  }

  footer a {
    font-size: 0.65rem;
  }

  nav ul {
    flex-direction: column;
    text-align: center;
  }
}

/* Dynamic radial gradient background */
.bg-dynamic-gradient {
  background: radial-gradient(circle at center, rgba(57, 255, 20, 0.6), rgba(0, 0, 0, 0.95));
}

footer a {
  font-size: 0.875rem;
  color: #39ff14;
  text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
}

footer a:hover {
  text-shadow: 0 0 20px #39ff14, 0 0 30px #39ff14;
}

footer p {
  font-size: 1rem;
  color: #00ff00;
}

</style>
