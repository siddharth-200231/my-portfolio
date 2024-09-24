<template>
    <div class="relative overflow-hidden bg-gray-900 rounded-lg shadow-lg">
      <div class="absolute inset-0 z-0">
        <canvas id="particles"></canvas>
      </div>
      <div class="relative z-10 container mx-auto p-6 bg-gray-800 bg-opacity-90 rounded-lg">
        <h1 class="text-4xl font-bold text-white mb-4 animate__animated animate__zoomIn">About Me</h1>
        <p class="mt-4 text-lg text-gray-300 leading-relaxed animate__animated animate__fadeIn animate__delay-0.5s">
          I’m Siddharth Sahu, a passionate Full-Stack Developer with expertise in the MERN stack. I build secure and scalable web applications with a focus on user experience and performance. Currently pursuing a B.Tech in Computer Science and Engineering, I've developed various projects, from e-commerce platforms to machine learning models for heart disease detection.
        </p>
        <div class="mt-6">
          <h2 class="text-2xl font-semibold text-green-400 mb-2 animate__animated animate__fadeIn animate__delay-1s">Skills</h2>
          <ul class="list-disc list-inside mt-2 text-gray-300">
            <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">MERN Stack Development</li>
            <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">JWT-based Authentication</li>
            <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">API Integrations</li>
            <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">Database Management</li>
            <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">Responsive Web Design</li>
          </ul>
        </div>
        <div class="mt-6">
          <h2 class="text-2xl font-semibold text-green-400 mb-2 animate__animated animate__fadeIn animate__delay-2s">Projects</h2>
          <p class="mt-2 text-gray-300 animate__animated animate__fadeIn animate__delay-2.5s">
            I've worked on various projects, including secure e-commerce platforms and machine learning applications. Check out my work in the <nuxt-link to="/projects" class="text-green-400 underline hover:text-green-300 transition duration-300">Projects</nuxt-link> section.
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
  
  /* Import animations from Animate.css */
  @import "~animate.css/animate.min.css"; /* Ensure to install animate.css via npm or link in your project */
  </style>
  