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
    radial-gradient(circle at 25% 25%, rgba(100, 255, 218, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(100, 255, 218, 0.1) 1px, transparent 1px);
  background-size: 50px 50px, 50px 50px;
  animation: particleFloat 150s linear infinite;
  opacity: 0.5;
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
  background: linear-gradient(
    165deg,
    rgba(2, 12, 27, 0.95) 0%,
    rgba(10, 25, 47, 0.98) 50%,
    rgba(2, 12, 27, 0.95) 100%
  );
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(100, 255, 255, 0.1);
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.03),
    inset 0 0 30px rgba(0, 255, 255, 0.02);
  isolation: isolate;
  position: relative;
  overflow: hidden;
  width: calc(100% - 2rem);
  margin: 1rem auto;
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: clamp(24px, 3vw, 32px);
  min-height: 85vh;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.glass-card:hover {
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 
    0 0 70px rgba(0, 255, 255, 0.1),
    inset 0 0 70px rgba(0, 255, 255, 0.05),
    0 5px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-5px) scale(1.005);
}

.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(0, 255, 255, 0.03) 30%,
    rgba(0, 255, 255, 0.08) 50%,
    rgba(0, 255, 255, 0.03) 70%,
    transparent 100%
  );
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-100%) skewX(-15deg);
  filter: blur(5px);
}

.glass-card:hover::before {
  opacity: 1;
  transform: translateX(100%) skewX(-15deg);
}

.glass-card::after {
  content: '';
  position: absolute;
  inset: -100%;
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 255, 0.12) 0%,
    transparent 70%
  );
  opacity: 0;
  transform: translate(-100%, -100%) scale(0.5);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  filter: blur(10px);
}

.glass-card:hover::after {
  opacity: 0.7;
  transform: translate(0, 0) scale(1);
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
  background: rgba(2, 12, 27, 0.98);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 255, 0.15);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
  padding: 1rem;
  height: 70px;
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
  color: #64ffda;
  text-shadow: 0 0 8px rgba(100, 255, 255, 0.3);
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
  background: rgba(2, 12, 27, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1rem auto;
  max-width: 100%;
  border: 1px solid rgba(100, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
}

.intro-text {
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 0.3px;
}

.button-container {
  position: relative;
  display: inline-block;
}

.download-btn {
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(100, 255, 218, 0.2)) !important;
  border: 1px solid rgba(100, 255, 218, 0.3) !important;
  color: #64ffda !important;
  padding: 0.8rem 2rem !important;
  font-weight: 500 !important;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-size: 0.9rem !important;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease !important;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 255, 255, 0.2) !important;
  border-color: rgba(0, 255, 255, 0.5) !important;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(100, 255, 218, 0.3)) !important;
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

/* Mobile optimizations with reduced spacing */
@media (max-width: 600px) {
  .content-wrapper {
    padding: 0.25rem;
    padding-top: 0.5rem; /* Minimal top padding */
    min-height: 100vh;
    justify-content: flex-start;
  }

  .glass-card {
    width: 100%;
    margin: 0;
    padding: 0.75rem;
    max-height: 750px; /* Reduced max height */
    margin-top: -3rem; /* Moved up more */
    overflow-y: auto;
  }

  /* Tighter avatar spacing */
  .avatar-container {
    margin-bottom: 0.25rem;
  }

  .profile-avatar {
    margin: 0.25rem auto;
  }

  /* Reduced console height and margins */
  .console-container {
    margin: 0.25rem auto;
  }

  .console-content {
    height: 50px; /* Shorter console */
    padding: 0.5rem;
  }

  /* Compact intro card */
  .intro-card {
    margin: 0.25rem auto;
    padding: 0.75rem;
  }

  .intro-text {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* Adjusted button spacing */
  .button-container {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  /* Adjust floating menu position */
  .floating-menu {
    bottom: 1rem;
    right: 1rem;
  }

  /* Adjust scroll indicator */
  .scroll-indicator {
    bottom: 1rem;
  }

  /* Mobile optimizations for download button text */
  .download-btn {
    padding: 0.5rem 1.5rem !important;
    font-size: 0.65rem !important; /* Smaller font size */
    width: auto !important;
    min-width: 160px !important;
    max-width: 80% !important;
    letter-spacing: 0.5px;
  }

  .download-btn .v-icon {
    font-size: 0.9rem !important; /* Smaller icon to match text */
    margin-right: 0.4rem !important;
  }
}

/* Even tighter spacing for shorter screens */
@media (max-width: 600px) and (max-height: 700px) {
  .glass-card {
    margin-top: -3.5rem;
    max-height: 700px;
    padding: 0.5rem;
  }

  .console-content {
    height: 45px;
  }
}

/* Very small screens */
@media (max-width: 360px) {
  .glass-card {
    margin-top: -4rem;
    padding: 0.5rem;
  }

  /* Even smaller for very small screens */
  .download-btn {
    font-size: 0.6rem !important;
    min-width: 150px !important;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
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
  width: 16px;
  height: 16px;
  border-right: 2px solid #64ffda;
  border-bottom: 2px solid #64ffda;
  transform: rotate(45deg);
  animation: scrollBounce 2s infinite;
}

.scroll-text {
  margin-top: 1rem;
  color: #8892b0;
  font-size: 0.75rem;
  font-weight: 500;
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
  bottom: 2.5rem;
  right: 2.5rem;
  z-index: 1000;
}

.menu-toggle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #64ffda, #48c9b0);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);
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
  background: rgba(2, 12, 27, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.2);
}

.menu-items a:hover {
  background: rgba(2, 12, 27, 0.95);
  border-color: rgba(100, 255, 218, 0.4);
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

@keyframes borderAnimation {
  0% {
    border-image-source: linear-gradient(45deg, #00ffff, #00ccff);
  }
  50% {
    border-image-source: linear-gradient(135deg, #00ccff, #00ffff);
  }
  100% {
    border-image-source: linear-gradient(45deg, #00ffff, #00ccff);
  }
}

/* Height-based responsive adjustments */
.glass-card {
  min-height: clamp(500px, 80vh, 900px);
  max-height: 95vh;
  overflow-y: auto;
  margin: clamp(1rem, 2vh, 2rem) auto;
}

/* Tall screens */
@media (min-height: 1000px) {
  .glass-card {
    min-height: 70vh;
    margin: 3vh auto;
  }
}

/* Short screens */
@media (max-height: 700px) {
  .glass-card {
    min-height: 90vh;
    margin: 1rem auto;
    padding: 1.4rem;
  }

  .section-title {
    margin: 1rem 0;
    font-size: clamp(1.2rem, 3vw, 1.8rem);
  }

  .intro-text {
    margin: 0.8rem auto;
    line-height: 1.6;
  }

  .skills-grid {
    gap: 0.8rem;
    padding: 0.8rem;
  }
}

/* Very short screens (landscape mobile) */
@media (max-height: 500px) {
  .glass-card {
    min-height: auto;
    margin: 0.5rem auto;
    padding: 1rem;
  }

  .profile-avatar {
    width: 60px !important;
    height: 60px !important;
  }

  .console-container {
    margin: 0.8rem auto;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 0.6rem;
  }

  .skill-item {
    padding: 0.6rem;
  }
}

/* Combined height and width media queries for better precision */
@media (max-width: 400px) and (max-height: 700px) {
  .glass-card {
    width: 96%;
    padding: 1rem;
    margin: 0.5rem auto;
    min-height: calc(100vh - 2rem);
  }

  .content-wrapper {
    padding: 0.5rem;
  }
}

/* Ensure smooth scrolling */
.glass-card {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 255, 255, 0.3) transparent;
  -webkit-overflow-scrolling: touch;
}

.glass-card::-webkit-scrollbar {
  width: 8px;
}

.glass-card::-webkit-scrollbar-track {
  background: rgba(0, 255, 255, 0.05);
  border-radius: 4px;
}

.glass-card::-webkit-scrollbar-thumb {
  background: linear-gradient(
    to bottom,
    rgba(0, 255, 255, 0.2),
    rgba(0, 255, 255, 0.3)
  );
  border-radius: 4px;
  transition: background 0.3s ease;
}

.glass-card::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    to bottom,
    rgba(0, 255, 255, 0.3),
    rgba(0, 255, 255, 0.4)
  );
}

@keyframes borderGlow {
  0%, 100% {
    border-color: rgba(0, 255, 255, 0.15);
    box-shadow: 
      0 0 40px rgba(0, 255, 255, 0.05),
      inset 0 0 40px rgba(0, 255, 255, 0.02);
  }
  50% {
    border-color: rgba(0, 255, 255, 0.25);
    box-shadow: 
      0 0 50px rgba(0, 255, 255, 0.08),
      inset 0 0 50px rgba(0, 255, 255, 0.04);
  }
}

.glass-card {
  animation: borderGlow 4s ease-in-out infinite;
}

/* Premium hover effects */
.glass-card:hover {
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 
    0 0 70px rgba(0, 255, 255, 0.1),
    inset 0 0 70px rgba(0, 255, 255, 0.05),
    0 5px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-5px) scale(1.005);
}

/* Advanced gradient overlay */
.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(0, 255, 255, 0.03) 30%,
    rgba(0, 255, 255, 0.08) 50%,
    rgba(0, 255, 255, 0.03) 70%,
    transparent 100%
  );
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-100%) skewX(-15deg);
  filter: blur(5px);
}

.glass-card:hover::before {
  opacity: 1;
  transform: translateX(100%) skewX(-15deg);
}

/* Enhanced light beam effect */
.glass-card::after {
  content: '';
  position: absolute;
  inset: -100%;
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 255, 0.12) 0%,
    transparent 70%
  );
  opacity: 0;
  transform: translate(-100%, -100%) scale(0.5);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  filter: blur(10px);
}

.glass-card:hover::after {
  opacity: 0.7;
  transform: translate(0, 0) scale(1);
}

/* Premium border animation */
@keyframes borderGlow {
  0%, 100% {
    border-color: rgba(0, 255, 255, 0.15);
    box-shadow: 
      0 0 50px rgba(0, 255, 255, 0.07),
      inset 0 0 50px rgba(0, 255, 255, 0.03);
  }
  50% {
    border-color: rgba(0, 255, 255, 0.3);
    box-shadow: 
      0 0 70px rgba(0, 255, 255, 0.1),
      inset 0 0 70px rgba(0, 255, 255, 0.05);
  }
}

/* Ambient light animation */
@keyframes ambientLight {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
}

.glass-card {
  animation: 
    borderGlow 4s ease-in-out infinite,
    ambientLight 15s ease-in-out infinite;
  background-size: 200% 200%;
}

/* Premium scrollbar */
.glass-card::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.glass-card::-webkit-scrollbar-track {
  background: rgba(0, 255, 255, 0.03);
  border-radius: 5px;
  margin: 5px;
}

.glass-card::-webkit-scrollbar-thumb {
  background: linear-gradient(
    45deg,
    rgba(0, 255, 255, 0.2),
    rgba(0, 255, 255, 0.3)
  );
  border-radius: 5px;
  border: 2px solid transparent;
  background-clip: padding-box;
  transition: all 0.3s ease;
}

.glass-card::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    45deg,
    rgba(0, 255, 255, 0.3),
    rgba(0, 255, 255, 0.4)
  );
  border: 1px solid rgba(0, 255, 255, 0.1);
}

/* Premium mobile experience */
@media (max-width: 600px) {
  .glass-card {
    width: calc(100% - 1.5rem);
    margin: 0.75rem auto;
    padding: 1.75rem;
    min-height: 75vh;
    border-radius: 20px;
    background: linear-gradient(
      165deg,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(10, 25, 47, 0.95) 100%
    );
  }
}

/* Add depth to content */
.glass-card-content {
  position: relative;
  z-index: 1;
  transform: translateZ(20px);
  transition: transform 0.3s ease;
}

.glass-card:hover .glass-card-content {
  transform: translateZ(30px);
}

/* Ambient background particles */
@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(0, 255, 255, 0.2);
  border-radius: 50%;
  pointer-events: none;
  animation: particleFloat 10s infinite;
}
</style>
