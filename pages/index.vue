<template>
  <v-container fluid class="pa-0 min-h-screen">
    <!-- Cyberpunk-style Animated Background -->
    <div class="cyber-background">
      <div class="grid-lines"></div>
      <div class="holographic-overlay"></div>
      <canvas id="cyberParticles" class="particles"></canvas>
    </div>

    <!-- Main Content with Floating Effect -->
    <v-row no-gutters align="center" justify="center" class="main-content">
      <v-col cols="12" sm="10" md="8" lg="6" class="content-wrapper">
        <div class="cyber-card">
          <!-- Holographic Avatar -->
          <div class="avatar-hologram">
            <div class="hologram-effect"></div>
            <v-avatar
              :size="$vuetify.display.smAndDown ? 120 : 140"
              class="cyber-avatar"
            >
              <v-img
                :src="'/images/profile.jpeg'"
                alt="Profile"
                class="avatar-image"
                @error="handleImageError"
              />
            </v-avatar>
          </div>

          <!-- Neon Terminal -->
          <div class="neon-terminal my-8">
            <div class="terminal-glitch"></div>
            <div class="terminal-content">
              <span class="prompt">></span>
              <span class="terminal-text" :class="{ glitch: isGlitching }">{{
                currentText
              }}</span>
              <span class="cursor">_</span>
            </div>
          </div>

          <!-- Cyberpunk Introduction -->
          <div class="cyber-intro">
            <div class="scanline"></div>
            <p class="intro-text">
              <span class="keyword">>> FULL_STACK_ENGINEER</span><br />
              Specializing in <span class="highlight">React</span> •
              <span class="highlight">Node.js</span> •
              <span class="highlight">FULL_STACK_DEV</span><br />
              Building
              <span class="gradient-text">next-gen web ecosystems</span>
            </p>
          </div>

          <!-- Animated Download Button -->
          <div class="cyber-button-container">
            <button class="cyber-button" @click="handleDownload">
              <span class="cyber-button-text">DOWNLOAD_CV.ISO</span>
              <span class="cyber-button-glow"></span>
              <span class="cyber-button-border"></span>
            </button>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Floating Navigation Dots -->
    <div class="cyber-nav">
      <div class="nav-dot active"></div>
      <div class="nav-dot"></div>
      <div class="nav-dot"></div>
    </div>

    <!-- Animated Scroll Indicator -->
    <div class="cyber-scroll">
      <div class="scroll-line"></div>
      <div class="scroll-pulse"></div>
    </div>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";

const currentText = ref("");
const isTyping = ref(true);
const isGlitching = ref(false);
const currentIndex = ref(0);
const messageIndex = ref(0);

const messages = [
  "INITIALIZING SYSTEM...",
  "WELCOME TO THE MATRIX",
  "ACCESSING MAINFRAME...",
  "USER: SIDDHARTH_SAHU",
  "ROLE: FULL_STACK_DEV",
  "STATUS: READY_TO_HACK",
];

const typeText = async () => {
  const message = messages[messageIndex.value];
  const typingSpeed = 50;

  while (currentIndex.value < message.length) {
    isGlitching.value = Math.random() < 0.1;
    await new Promise((resolve) => setTimeout(resolve, typingSpeed));
    currentText.value = message.slice(0, currentIndex.value + 1);
    currentIndex.value++;
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  let deleteSpeed = 30;
  while (currentIndex.value > 0) {
    deleteSpeed = Math.max(10, deleteSpeed * 0.9);
    await new Promise((resolve) => setTimeout(resolve, deleteSpeed));
    currentIndex.value--;
    currentText.value = message.slice(0, currentIndex.value);
  }

  messageIndex.value = (messageIndex.value + 1) % messages.length;
  typeText();
};

onMounted(() => {
  setTimeout(typeText, 1000);

  // Enhanced Particle System
  const canvas = document.getElementById("cyberParticles");
  const ctx = canvas.getContext("2d");
  let particles = [];

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
      this.baseHue = Math.random() * 360;
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.size = Math.random() * 2 + 1;
      this.life = 1;
      this.decay = 0.001 + Math.random() * 0.02;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= this.decay;

      if (this.life <= 0) this.reset();
    }

    draw() {
      ctx.fillStyle = `hsla(${this.baseHue}, 100%, 70%, ${this.life})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Create particle array
  for (let i = 0; i < 200; i++) particles.push(new Particle());

  const animate = () => {
    ctx.fillStyle = "rgba(0, 0, 20, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    requestAnimationFrame(animate);
  };

  animate();

  // Parallax effect on card
  const card = document.querySelector(".cyber-card");
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    card.style.setProperty("--x", x);
    card.style.setProperty("--y", y);
  });
});
const handleDownload = () => {
  // Replace with your CV file path
  const cvPath = '/siddharthCv.pdf';
  
  // Create an anchor element
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'CV.pdf'; // Name for the downloaded file
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
.cyber-background {
  position: fixed;
  inset: 0;
  background: linear-gradient(45deg, #000318, #0a0a2e);
  z-index: 1;
  overflow: hidden;
}

.grid-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      to right,
      rgba(0, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: gridScroll 100s linear infinite;
}

.holographic-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(100, 255, 218, 0.1) 0%,
    transparent 60%
  );
  animation: hologramPulse 8s infinite;
}

.particles {
  position: absolute;
  inset: 0;
  mix-blend-mode: screen;
}

@keyframes gridScroll {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 600px 600px;
  }
}

@keyframes hologramPulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.02);
  }
}

.content-wrapper {
  position: relative;
  z-index: 2;
  padding: 2rem;
}

.cyber-card {
  --x: 0.5;
  --y: 0.5;

  background: rgba(0, 3, 24, 0.95);
  border: 2px solid #00ffff;
  border-radius: 16px;
  padding: 3rem 2rem;
  backdrop-filter: blur(20px);
  position: relative;
  transform: perspective(1000px) rotateX(calc((var(--y) - 0.5) * 8deg))
    rotateY(calc((var(--x) - 0.5) * -8deg));
  box-shadow: 0 0 50px rgba(0, 255, 255, 0.2),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
  transition: transform 0.3s ease-out;
}

.avatar-hologram {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.hologram-effect {
  position: absolute;
  inset: -20px;
  background: conic-gradient(from 45deg, #00ffff, #ff00ff, #00ffff);
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.4;
  animation: hologramSpin 6s linear infinite;
}

.cyber-avatar {
  border: 3px solid #00ffff;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  background: rgba(0, 0, 20, 0.9);
  position: relative;
}

@keyframes hologramSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.neon-terminal {
  background: rgba(0, 0, 30, 0.9);
  border: 1px solid #00ffff;
  padding: 1.5rem;
  position: relative;
  margin: 2rem 0;
}

.terminal-glitch {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    0deg,
    transparent 45%,
    rgba(255, 0, 0, 0.1) 50%,
    transparent 55%
  );
  animation: glitchScan 3s infinite;
}

.terminal-content {
  font-family: "Courier New", monospace;
  color: #00ffff;
  font-size: 1.2rem;
  position: relative;
}

.cursor {
  animation: cursorBlink 1s infinite;
}

@keyframes cursorBlink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes glitchScan {
  0% {
    top: -100%;
  }
  100% {
    top: 100%;
  }
}

.cyber-intro {
  position: relative;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 3px solid #00ffff;
}

.scanline {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 255, 255, 0.6) 50%,
    transparent 100%
  );
  animation: scanline 8s linear infinite;
}

.intro-text {
  color: #a0f0ff;
  font-size: 1.1rem;
  line-height: 1.8;
}

.keyword {
  color: #ff00ff;
  font-weight: bold;
}

.highlight {
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

.gradient-text {
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cyber-button-container {
  position: relative;
  margin-top: 2rem;
}

.cyber-button {
  position: relative;
  background: #000318;
  border: none;
  padding: 1.5rem 3rem;
  color: #00ffff;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cyber-button-border {
  position: absolute;
  inset: 0;
  border: 2px solid #00ffff;
  clip-path: polygon(
    0 0,
    calc(100% - 8px) 0,
    100% 8px,
    100% 100%,
    8px 100%,
    0 calc(100% - 8px)
  );
}

.cyber-button-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(0, 255, 255, 0.3) 50%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cyber-button:hover {
  background: #000a2e;

  .cyber-button-glow {
    opacity: 1;
    animation: buttonGlow 1.5s infinite;
  }
}

@keyframes buttonGlow {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.cyber-nav {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border: 2px solid #00ffff;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.nav-dot.active {
  background: #00ffff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.cyber-scroll {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  width: 2px;
  height: 40px;
  background: #00ffff;
  animation: scrollLine 2s infinite;
}

.scroll-pulse {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #00ffff;
  border-radius: 50%;
  animation: scrollPulse 2s infinite;
}

@keyframes scrollLine {
  0% {
    height: 0;
    opacity: 0;
  }
  30% {
    height: 40px;
    opacity: 1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
}

@keyframes scrollPulse {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(40px);
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .cyber-card {
    padding: 2rem 1rem;
    margin: 1rem;
  }

  .terminal-content {
    font-size: 1rem;
  }

  .cyber-button {
    padding: 1rem 2rem;
    font-size: 0.9rem;
  }
}
</style>
