<template>
  <div class="relative overflow-hidden bg-[#121212] rounded-xl shadow-2xl">
    <div class="absolute inset-0 z-0">
      <canvas id="particles"></canvas>
    </div>
    <div class="relative z-10 container mx-auto p-8 bg-[#1E1E1E] bg-opacity-95 rounded-xl">
      <h1 class="text-5xl font-bold text-[#BB86FC] mb-6 animate__animated animate__zoomIn">About Me</h1>
      
      <div class="prose prose-invert max-w-none">
        <p class="mt-4 text-xl text-gray-200 leading-relaxed animate__animated animate__fadeIn animate__delay-0.5s">
          I’m Siddharth Sahu, a passionate Full-Stack Developer with expertise in the MERN stack. I build secure and scalable web applications with a focus on user experience and performance. Currently pursuing a B.Tech in Computer Science and Engineering, I've developed various projects, from e-commerce platforms to machine learning models for heart disease detection.
        </p>

        <div class="mt-8">
          <h2 class="text-3xl font-semibold text-[#03DAC6] mb-4 animate__animated animate__fadeIn animate__delay-1s">Skills</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="skill in skills" :key="skill" 
                 class="p-4 bg-[#2D2D2D] rounded-lg transition-all duration-300 hover:bg-[#3D3D3D] hover:transform hover:scale-102 animate__animated animate__fadeIn animate__delay-1.5s">
              <span class="text-gray-200">{{ skill }}</span>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-3xl font-semibold text-[#03DAC6] mb-4 animate__animated animate__fadeIn animate__delay-2s">Projects</h2>
          <div class="p-4 bg-[#2D2D2D] rounded-lg">
            <p class="text-gray-200 animate__animated animate__fadeIn animate__delay-2.5s">
              I've worked on various projects, including secure e-commerce platforms and machine learning applications. 
              <nuxt-link to="/projects" class="text-[#BB86FC] hover:text-[#03DAC6] transition duration-300">
                Check out my work →
              </nuxt-link>
            </p>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-3xl font-semibold text-[#03DAC6] mb-4 animate__animated animate__fadeIn animate__delay-3s">LeetCode Profile</h2>
          <div class="p-4 bg-[#2D2D2D] rounded-lg">
            <p class="text-gray-200 animate__animated animate__fadeIn animate__delay-3.5s">
              Check out my coding challenges and contributions on 
              <a href="https://leetcode.com/u/siddharth_123456/" 
                 class="text-[#BB86FC] hover:text-[#03DAC6] transition duration-300" 
                 target="_blank">
                LeetCode →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      skills: [
        "MERN Stack Development",
        "JWT-based Authentication",
        "API Integrations",
        "Database Management",
        "Responsive Web Design"
      ]
    }
  },
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

/* Add Material Design elevation classes */
.shadow-elevation-1 {
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}

.shadow-elevation-2 {
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}

/* Add smooth transitions */
.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>
  