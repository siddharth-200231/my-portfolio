<template>
  <div class="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
    <!-- Animated Particle Background -->
    <div class="absolute inset-0 z-0">
      <canvas id="particles"></canvas>
    </div>

    <div class="container mx-auto px-4 py-12 relative z-10">
      <h1 class="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate__animated animate__fadeIn">
        Featured Projects
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card 1 -->
        <div class="project-card group">
          <div class="card-content">
            <div class="relative overflow-hidden rounded-t-xl h-48">
              <img 
                src="../assets/images/ecomm.png" 
                alt="E-Commerce Platform" 
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <div class="p-6 bg-gray-800/90 rounded-b-xl">
              <h3 class="text-2xl font-bold mb-3 text-purple-400">Secure E-Commerce Platform</h3>
              <p class="text-gray-300 mb-4 line-clamp-3">
                Developed a secure e-commerce platform using React, Node.js, Express.js, and MongoDB, with JWT-based authentication and bcrypt password encryption.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="tech-badge">React</span>
                <span class="tech-badge">Node.js</span>
                <span class="tech-badge">MongoDB</span>
                <span class="tech-badge">JWT</span>
              </div>

              <a 
                href="https://siddstore.vercel.app" 
                target="_blank"
                class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>View Project</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Add similar structure for other project cards -->
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
.project-card {
  @apply transform transition-all duration-300 hover:-translate-y-2;
  perspective: 1000px;
}

.card-content {
  @apply bg-gray-800/90 rounded-xl overflow-hidden shadow-xl;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.project-card:hover .card-content {
  @apply shadow-2xl;
  border-color: rgba(167, 139, 250, 0.3);
}

.tech-badge {
  @apply px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-300 border border-purple-700/50;
}

#particles {
  @apply absolute inset-0;
  background: transparent;
}

/* Add animation keyframes */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.project-card {
  animation: float 6s ease-in-out infinite;
  animation-delay: calc(var(--animation-order) * 0.1s);
}
</style>
