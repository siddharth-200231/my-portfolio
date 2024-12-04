<template>
  <v-container fluid class="pa-0 min-h-screen">
    <!-- Animated Background with Particles -->
    <div class="animated-background">
      <canvas id="particleNetwork" class="particles"></canvas>
    </div>

    <!-- Main Content -->
    <v-row no-gutters align="center" justify="center" class="main-content">
      <v-col cols="12" sm="10" md="8" lg="6" class="content-wrapper">
        <div class="glass-card">
          <!-- Profile Section -->
          <div class="text-center">
            <!-- Avatar with Glow Effect -->
            <div class="avatar-container">
              <v-avatar :size="$vuetify.display.smAndDown ? 80 : 100" class="profile-avatar">
                <v-img
                  src="/images/profile.jpeg"
                  alt="Profile"
                  cover
                  class="avatar-image"
                />
              </v-avatar>
              <div class="glow-effect"></div>
            </div>

            <!-- Animated Console Text -->
            <div class="console-container my-4">
              <div class="console-header">
                <div class="console-buttons">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="console-title">terminal</div>
              </div>
              <div class="console-content">
                <span class="prompt">$ </span>
                <span class="terminal-font" :class="{ 'typing': isTyping }">{{ currentText }}</span>
              </div>
            </div>

            <!-- Introduction with Animated Border -->
            <div class="intro-card my-3">
              <p class="intro-text">
                Passionate Full-Stack Developer crafting elegant solutions with MERN stack.
                Specialized in building scalable, user-centric web applications.
              </p>
            </div>

            <!-- Enhanced Download Button -->
            <div class="button-container">
              <v-btn
                href="/siddharthCv.pdf"
                download="Siddharth_Sahu_CV"
                class="download-btn"
                elevation="0"
              >
                <v-icon start class="mr-2">mdi-download</v-icon>
                Download Resume
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
      <div class="scroll-text">Scroll for more</div>
    </div>

    <!-- Floating Menu -->
    <div class="floating-menu">
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <v-icon>{{ isMenuOpen ? 'mdi-close' : 'mdi-plus' }}</v-icon>
      </button>
      <div class="menu-items" :class="{ 'open': isMenuOpen }">
        <a href="#" title="Projects">
          <v-icon>mdi-folder-multiple</v-icon>
        </a>
        <a href="#" title="Contact">
          <v-icon>mdi-email</v-icon>
        </a>
        <a href="#" title="Blog">
          <v-icon>mdi-post</v-icon>
        </a>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const currentText = ref('')
const isTyping = ref(true)
const currentIndex = ref(0)
const messageIndex = ref(0)
const isMenuOpen = ref(false)

const messages = [
  'Hello World! 👋',
  "I'm Siddharth Sahu 🤠",
  'Full Stack Developer 💻',
  'MERN Stack Specialist 🚀',
  'Problem Solver 🧩',
  "Let's Build Something Amazing 🌐",
]

const typeText = async () => {
  const message = messages[messageIndex.value]
  const typingSpeed = 50 // Base typing speed
  
  // Typing animation with variable speed
  while (currentIndex.value < message.length) {
    // Randomize typing speed slightly for more natural effect
    const speed = typingSpeed + Math.random() * 30 - 15
    await new Promise(resolve => setTimeout(resolve, speed))
    currentText.value = message.slice(0, currentIndex.value + 1)
    currentIndex.value++
  }
  
  // Longer pause at the end of sentences
  await new Promise(resolve => setTimeout(resolve, 2500))
  
  // Faster backspace animation with acceleration
  let deleteSpeed = 40
  while (currentIndex.value > 0) {
    deleteSpeed = Math.max(10, deleteSpeed * 0.95) // Accelerate deletion
    await new Promise(resolve => setTimeout(resolve, deleteSpeed))
    currentIndex.value--
    currentText.value = message.slice(0, currentIndex.value)
  }
  
  // Short pause before next message
  await new Promise(resolve => setTimeout(resolve, 500))
  messageIndex.value = (messageIndex.value + 1) % messages.length
  typeText()
}

onMounted(() => {
  setTimeout(typeText, 500)

  const canvas = document.getElementById('particleNetwork');
  const ctx = canvas.getContext('2d');
  
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 30) + 1;
      this.color = `rgba(0, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance;
      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;

      if (distance < mouse.radius) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          let dx = this.x - this.baseX;
          this.x -= dx/10;
        }
        if (this.y !== this.baseY) {
          let dy = this.y - this.baseY;
          this.y -= dy/10;
        }
      }
    }
  }

  const init = () => {
    particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.draw();
      particle.update();
    });
    connectParticles();
    requestAnimationFrame(animate);
  };

  const connectParticles = () => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance/100})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
  });

  init();
  animate();

  const card = document.querySelector('.glass-card');
  
  card.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    const rotateX = 10 * (y - 0.5);
    const rotateY = 10 * (x - 0.5);
    
    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.05, 1.05, 1.05)
    `;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
  });
})
</script>

<style scoped>
.animated-background {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  z-index: 1;
  overflow: hidden;
}

.particles {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.15) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.15) 1px, transparent 1px),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px, 50px 50px, 25px 25px;
  animation: particleFloat 150s linear infinite;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.particles:hover {
  opacity: 1;
}

.content-wrapper {
  position: relative;
  z-index: 2;
  padding: clamp(0.5rem, 3vw, 1.5rem);
  max-height: 100%;
  display: flex;
  align-items: center;
}

.glass-card {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 255, 0.2);
  padding: clamp(1rem, 3vw, 1.5rem);
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.1),
    inset 0 0 20px rgba(0, 255, 255, 0.05);
  max-height: calc(100vh - 140px);
  overflow: auto;
  margin: auto;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.5s ease;
}

.glass-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.glass-card:hover .glass-card-inner {
  transform: translateZ(20px) rotateX(5deg) rotateY(5deg);
}

.avatar-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.profile-avatar {
  border: 3px solid rgba(0, 255, 255, 0.4);
  position: relative;
  z-index: 2;
}

.glow-effect {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle at center, rgba(0, 255, 255, 0.2), transparent 70%);
  border-radius: 50%;
  animation: glowPulse 3s ease-in-out infinite;
}

.console-container {
  background: rgba(0, 0, 0, 0.95);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
  margin: 1rem auto;
  max-width: 100%;
}

.console-header {
  background: rgba(0, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}

.console-buttons {
  display: flex;
  gap: 8px;
}

.console-buttons span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.console-buttons span:nth-child(1) { background: #ff5f56; }
.console-buttons span:nth-child(2) { background: #ffbd2e; }
.console-buttons span:nth-child(3) { background: #27c93f; }

.console-title {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  margin-left: 1rem;
}

.console-content {
  padding: 0.75rem;
  height: 60px;
  display: flex;
  align-items: center;
}

.prompt {
  color: #00ffff;
  margin-right: 0.5rem;
}

.terminal-font {
  font-family: 'Fira Code', monospace;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  position: relative;
  display: inline-block;
  white-space: pre;
}

.terminal-font::after {
  content: '|';
  position: absolute;
  right: -4px;
  animation: cursor 0.8s ease-in-out infinite;
  color: #00ffff;
}

@keyframes cursor {
  0%, 100% { 
    opacity: 1;
    transform: translateY(0);
  }
  50% { 
    opacity: 0;
    transform: translateY(1px);
  }
}

.typing {
  border-right: none;
  animation: typing 0.5s steps(1) infinite;
}

@keyframes typing {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.intro-card {
  background: rgba(0, 255, 255, 0.05);
  border-radius: 10px;
  padding: clamp(0.75rem, 2vw, 1rem);
  margin: 1rem auto;
  max-width: 100%;
  border: 1px solid rgba(0, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
}

.intro-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  line-height: 1.6;
}

.button-container {
  position: relative;
  display: inline-block;
}

.download-btn {
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0.2)) !important;
  border: 1px solid rgba(0, 255, 255, 0.3) !important;
  color: #00ffff !important;
  padding: 0.8rem 2rem !important;
  font-weight: 600 !important;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease !important;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 255, 255, 0.2) !important;
  border-color: rgba(0, 255, 255, 0.5) !important;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(0, 255, 255, 0.3)) !important;
}

@keyframes glowPulse {
  0%, 100% { 
    transform: scale(1); 
    opacity: 0.5;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  }
  50% { 
    transform: scale(1.1); 
    opacity: 0.8;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
  }
}

@keyframes particleFloat {
  from { background-position: 0 0; }
  to { background-position: 1000px 1000px; }
}

/* Mobile optimizations */
@media (max-width: 600px) {
  .glass-card {
    padding: 1.2rem;
    margin: 0.7rem auto;
    width: 100%;
    min-height: 85vh;
  }

  .content-wrapper {
    padding: 1.3rem;
    display: flex;
    align-items: center;
    min-height: 70vh;
  }

  .console-content {
    padding: 0.6rem;
    height: 55px;
  }

  .download-btn {
    padding: 0.5rem 1.5rem !important;
    font-size: 0.6rem !important;
  }
}

/* Small height screens */
@media (max-height: 700px) {
  .glass-card {
    padding: 1.4rem;
    max-height: calc(100vh - 100px);
  }
}

/* Hide scrollbar but keep functionality */
.glass-card::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid #00ffff;
  border-bottom: 2px solid #00ffff;
  transform: rotate(45deg);
  animation: scrollBounce 2s infinite;
}

.scroll-text {
  margin-top: 1rem;
  color: #00ffff;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

@keyframes scrollBounce {
  0%, 100% {
    transform: rotate(45deg) translate(-5px, -5px);
  }
  50% {
    transform: rotate(45deg) translate(0, 0);
  }
}

#particleNetwork {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-menu {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.menu-toggle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00ffff, #00ccff);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.menu-toggle:hover {
  transform: scale(1.1);
}

.menu-items {
  position: absolute;
  bottom: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.menu-items.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.menu-items a {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ffff;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.menu-items a:hover {
  background: rgba(0, 255, 255, 0.3);
  transform: scale(1.1);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
