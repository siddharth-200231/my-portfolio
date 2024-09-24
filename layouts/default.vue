<template>
  <div class="min-h-[80vh] sm:min-h-[85vh] md:min-h-screen flex flex-col bg-gray-900 text-gray-200 relative overflow-hidden">
    <!-- Particle Background -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <canvas id="particles" class="absolute inset-0"></canvas>
    </div>

    <!-- Global Header -->
    <header class="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 p-2 shadow-lg relative z-10 w-full animate__animated animate__fadeInDown">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-extrabold neon-text transition duration-500 animate-logo-glow">
          Cyber Portfolio
        </h1>

        <!-- Hamburger Icon for Mobile -->
        <div class="sm:hidden">
          <button @click="toggleMenu" class="text-cyan-500 focus:outline-none transition-transform transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Links for Desktop -->
        <ul class="hidden sm:flex space-x-8 text-cyan-400 neon-text">
          <li>
            <nuxt-link to="/" @click="closeMenu" class="nav-link">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" @click="closeMenu" class="nav-link">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects" @click="closeMenu" class="nav-link">Projects</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" @click="closeMenu" class="nav-link">Contact</nuxt-link>
          </li>
        </ul>
      </nav>

      <!-- Dropdown Menu for Mobile -->
      <div v-if="isOpen" class="sm:hidden bg-gradient-to-b from-gray-800 to-gray-900 text-cyan-400 neon-text shadow-md transform transition-all duration-300">
        <ul class="flex flex-col space-y-2 py-2">
          <li>
            <nuxt-link to="/" @click="closeMenu" class="dropdown-link">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" @click="closeMenu" class="dropdown-link">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects" @click="closeMenu" class="dropdown-link">Projects</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" @click="closeMenu" class="dropdown-link">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-2 sm:p-4 relative z-10 w-full animate__animated animate__fadeIn animate__delay-0.2s">
      <NuxtPage />
    </main>

    <!-- Global Footer -->
    <footer class="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 p-4 text-center mt-4 relative z-10 animate__animated animate__fadeInUp transition-transform duration-300 transform hover:-translate-y-1">
      <p class="text-lg font-medium mb-2 neon-text">© 2024 Siddharth Sahu. All Rights Reserved.</p>
      <div class="flex justify-center space-x-6 mt-2">
        <a href="https://www.linkedin.com/in/siddharth-sahu-40aa57289/" class="social-link">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/siddharth-200231" class="social-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://leetcode.com/u/siddharth_123456/" class="social-link">
          <i class="fab fa-leetcode"></i> LeetCode
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
    };
  },
  mounted() {
    this.initParticles();
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    initParticles() {
      const canvas = document.getElementById("particles");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let particles = [];
      const particleCount = 80; // Adjust particle count for performance
      const colors = [
        "rgba(255, 99, 132, 0.7)", // Red
        "rgba(54, 162, 235, 0.7)", // Blue
        "rgba(255, 206, 86, 0.7)", // Yellow
        "rgba(75, 192, 192, 0.7)", // Teal
        "rgba(153, 102, 255, 0.7)", // Purple
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          velocity: {
            x: (Math.random() - 0.5) * 3,
            y: (Math.random() - 0.5) * 3,
          },
        });
      }

      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let particle of particles) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          particle.x += particle.velocity.x;
          particle.y += particle.velocity.y;

          // Bounce particles off the walls
          if (particle.x > canvas.width || particle.x < 0) particle.velocity.x *= -1;
          if (particle.y > canvas.height || particle.y < 0) particle.velocity.y *= -1;
        }
        requestAnimationFrame(animateParticles);
      };

      animateParticles();
    },
  },
};
</script>

<style scoped>
/* Cyberpunk Colors */
body {
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
}

/* Neon Effect */
.neon-text {
  color: #0ff;
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #00f, 0 0 30px #0f0, 0 0 40px #0f0, 0 0 50px #0ff, 0 0 75px #00f;
}

/* Animation */
@keyframes logo-glow {
  0% {
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #00f;
  }
  50% {
    text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #00f;
  }
  100% {
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #00f;
  }
}

.animate-logo-glow {
  animation: logo-glow 1.5s infinite alternate;
}

/* Navbar Links */
.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ff2e63;
}

.dropdown-link {
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.dropdown-link:hover {
  color: #ff2e63;
}

/* Footer Links */
.social-link {
  color: #0ff;
  transition: transform 0.3s, color 0.3s;
}

.social-link:hover {
  color: #ff2e63;
  transform: scale(1.1);
}

/* Slide down animation for nav links */
@keyframes nav-slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-slide {
  animation: nav-slide-down 0.5s forwards;
}

/* Add styles for footer */
footer {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
}
</style>
