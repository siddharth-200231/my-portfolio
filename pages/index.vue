<template>
  <div class="relative min-h-[70vh] flex flex-col items-center justify-center text-gray-100 overflow-hidden">
    <!-- Updated Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-95"></div>

    <!-- Particle Background -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <canvas id="particles" class="absolute inset-0"></canvas>
    </div>

    <!-- Content Section -->
    <div class="z-10 text-center">
      <!-- Responsive Image -->
      <img
        class="rounded-full mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 object-cover border-4 border-purple-600 transform transition-transform duration-500 hover:scale-110 animate__animated animate__fadeIn"
        src="../assets/images/WhatsApp Image 2024-09-24 at 15.20.37.jpeg"
        alt="Profile Picture"
        style="object-fit: contain;"
      />
      <!-- Text size adjusted for smaller screens -->
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-indigo-300 animate-text-glow animate__animated animate__slideInUp animate__delay-0.5s">
        Hi, I'm Siddharth Sahu
      </h1>

      <p
        class="text-base sm:text-lg md:text-xl mb-8 text-gray-200 animate-text-glow animate__animated animate__slideInUp animate__delay-0.7s">
        A Full-Stack Developer specializing in the MERN stack and creating scalable web applications.
      </p>

      <!-- Button adjusted for smaller screens -->
      <nuxt-link
        to="/projects"
        class="bg-green-600 hover:bg-green-500 text-sm sm:text-base py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 animate__animated animate__pulse animate__delay-0.9s">
        Explore My Work
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      const canvas = document.getElementById("particles");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let particles = [];
      const particleCount = 120; // Reduced number of particles for better performance
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
          radius: Math.random() * 4 + 2, // Size of the particles
          color: colors[Math.floor(Math.random() * colors.length)],
          velocity: {
            x: (Math.random() - 0.5) * 3, // Increased velocity for faster movement
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
/* Canvas for particles */
#particles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

/* Glow Animation for Text */
@keyframes text-glow {
  0%,
  100% {
    text-shadow: 0 0 7px #4c51bf, 0 0 12px #4c51bf, 0 0 20px #4c51bf;
  }

  50% {
    text-shadow: 0 0 14px #4c51bf, 0 0 28px #4c51bf, 0 0 36px #4c51bf;
  }
}

.animate-text-glow {
  animation: text-glow 1.5s infinite ease-in-out; /* Shorter duration for faster glow */
}

/* Add animations from Animate.css */
@import "~animate.css/animate.min.css";
</style>
