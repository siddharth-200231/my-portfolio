<template>
  <div class="relative overflow-hidden bg-gray-900 rounded-lg shadow-lg">
    <div class="absolute inset-0 z-0">
      <canvas id="particles"></canvas>
    </div>
    <div class="relative z-10 container mx-auto p-6 bg-gray-800 bg-opacity-90 rounded-lg">
      <h1 class="text-4xl font-bold text-cyan-300 mb-4 animate__animated animate__zoomIn faster-animation neon">About Me</h1>
      <p class="mt-4 text-lg text-gray-300 leading-relaxed animate__animated animate__fadeIn animate__delay-0.1s">
        I’m Siddharth Sahu, a passionate Full-Stack Developer with expertise in the MERN stack. I build secure and scalable web applications with a focus on user experience and performance. Currently pursuing a B.Tech in Computer Science and Engineering, I've developed various projects, from e-commerce platforms to machine learning models for heart disease detection.
      </p>
      <div class="mt-6">
        <h2 class="text-2xl font-semibold text-pink-400 mb-2 animate__animated animate__fadeIn animate__delay-0.3s faster-animation neon">Skills</h2>
        <ul class="list-disc list-inside mt-2 text-gray-300">
          <li class="transition-transform transform hover:scale-105 hover:text-pink-400 animate__animated animate__fadeIn animate__delay-0.5s faster-animation neon">MERN Stack Development</li>
          <li class="transition-transform transform hover:scale-105 hover:text-pink-400 animate__animated animate__fadeIn animate__delay-0.5s faster-animation neon">JWT-based Authentication</li>
          <li class="transition-transform transform hover:scale-105 hover:text-pink-400 animate__animated animate__fadeIn animate__delay-0.5s faster-animation neon">API Integrations</li>
          <li class="transition-transform transform hover:scale-105 hover:text-pink-400 animate__animated animate__fadeIn animate__delay-0.5s faster-animation neon">Database Management</li>
          <li class="transition-transform transform hover:scale-105 hover:text-pink-400 animate__animated animate__fadeIn animate__delay-0.5s faster-animation neon">Responsive Web Design</li>
        </ul>
      </div>
      <div class="mt-6">
        <h2 class="text-2xl font-semibold text-pink-400 mb-2 animate__animated animate__fadeIn animate__delay-0.7s faster-animation neon">Projects</h2>
        <p class="mt-2 text-gray-300 animate__animated animate__fadeIn animate__delay-0.9s">
          I've worked on various projects, including secure e-commerce platforms and machine learning applications. Check out my work in the <nuxt-link to="/projects" class="text-pink-400 underline hover:text-pink-300 transition duration-300">Projects</nuxt-link> section.
        </p>
      </div>
      <div class="mt-6">
        <h2 class="text-2xl font-semibold text-pink-400 mb-2 animate__animated animate__fadeIn animate__delay-1.1s faster-animation neon">LeetCode Profile</h2>
        <p class="mt-2 text-gray-300 animate__animated animate__fadeIn animate__delay-1.3s">
          Check out my coding challenges and contributions on <a href="https://leetcode.com/u/siddharth_123456/" class="text-pink-400 underline hover:text-pink-300 transition duration-300" target="_blank">LeetCode</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
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
      const particleCount = 100; // Number of particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 6 + 4, // Increased radius for larger particles
          color: "rgba(0, 255, 255, 0.7)", // Neon cyan color for particles
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
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
/* Add styles specific to the about page here */

.container {
  position: relative;
  z-index: 1;
}

#particles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

/* Neon text styles */
.neon {
  text-shadow: 0 0 3px rgba(0, 255, 255, 0.8),
               0 0 6px rgba(0, 255, 255, 0.6),
               0 0 10px rgba(0, 255, 255, 0.4);
}

/* Faster animation */
.faster-animation {
  animation-duration: 0.5s; /* Adjust this duration for faster animations */
}

/* Import animations from Animate.css */
@import "~animate.css/animate.min.css"; /* Ensure to install animate.css via npm or link in your project */
</style>
