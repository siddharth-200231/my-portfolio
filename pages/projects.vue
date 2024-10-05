<template>
  <div class="relative min-h-screen bg-gray-900 text-gray-100">
    <!-- Animated Particle Background -->
    <div class="absolute inset-0 z-0">
      <canvas id="particles"></canvas>
    </div>

    <div class="container mx-auto p-6 z-10">
      <h1 class="text-4xl font-bold mb-6 text-center animate__animated animate__fadeIn">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="project-card animate__animated animate__fadeInLeft animate__delay-0.2s">
          <div class="bg-animation"></div>
          <img src="../assets/images/ecomm.png" alt="E-Commerce Platform" class="project-image" />
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2 text-blue-500">Secure E-Commerce Platform</h3>
            <p class="text-gray-300 mb-4">
              Developed a secure e-commerce platform using React, Node.js, Express.js, and MongoDB, with JWT-based authentication and bcrypt password encryption.
            </p>
            <a href="https://siddstore.vercel.app" class="text-green-400 hover:underline hover:text-green-500">Live Link</a>
          </div>
        </div>
        <!-- Add more project cards similarly -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const initParticles = () => {
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
      radius: Math.random() * 3 + 1,
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
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.fill();

      particle.x += particle.velocity.x;
      particle.y += particle.velocity.y;

      if (particle.x > canvas.width || particle.x < 0) particle.velocity.x *= -1;
      if (particle.y > canvas.height || particle.y < 0) particle.velocity.y *= -1;
    }
    requestAnimationFrame(animateParticles);
  };

  animateParticles();
};

const onResize = () => {
  const canvas = document.getElementById("particles");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

onMounted(() => {
  initParticles();
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
#particles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
}

.project-card {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #2a2d34, #1f2937);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
}

.bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  animation: pulse 3s infinite;
  z-index: 1;
}

.project-image {
  width: 100%;
  height: 40%;
  object-contain;
  transition: transform 0.3s ease;
  z-index: 2; /* Ensures the image is above the background animation */
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

h3 {
  position: relative;
  z-index: 2; /* Ensures text is above the overlay */
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

@import "~animate.css/animate.min.css"; /* Ensure to install animate.css via npm or link in your project */
</style>
