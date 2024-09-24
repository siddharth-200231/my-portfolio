<template>
    <div class="relative min-h-screen flex flex-col items-center justify-center text-gray-100 overflow-hidden">
      <!-- Updated Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-95"></div>
  
      <!-- Particle Background -->
      <canvas id="particles" class="absolute inset-0 z-0"></canvas>
  
      <!-- Content Section -->
      <div class="z-10 text-center animate__animated animate__fadeInUp animate__delay-0.3s">
        <img
          class="rounded-full mx-auto w-40 h-40 mb-6 object-cover border-4 border-purple-600 transform transition-transform duration-500 hover:scale-110"
          src="/assets/images/profile.jpeg"
          alt="Profile Picture"
        />
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-indigo-300 animate__animated animate__fadeInDown animate__delay-0.5s">Hi, I'm Siddharth Sahu</h1>
        <p class="text-base sm:text-lg md:text-xl mb-8 text-gray-200 animate__animated animate__fadeIn animate__delay-0.7s">
          A Full-Stack Developer specializing in the MERN stack and creating scalable web applications.
        </p>
        <nuxt-link
          to="/projects"
          class="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 animate__animated animate__bounce animate__delay-0.9s"
        >
          Explore My Work
        </nuxt-link>
      </div>
  
      <!-- Footer -->
      <footer class="z-10 mt-20 text-center text-gray-400 animate__animated animate__fadeInUp animate__delay-1.1s">
        © 2024 Siddharth Sahu - All Rights Reserved
      </footer>
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
        const particleCount = 150; // Adjust number of particles here
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 4 + 2, // Size of the particles
            color: "rgba(255, 255, 255, 0.7)",
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
  /* Canvas for particles */
  #particles {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  
  /* Add animations from Animate.css */
  @import "~animate.css/animate.min.css"; /* Ensure to install animate.css via npm or link in your project */
  </style>
  