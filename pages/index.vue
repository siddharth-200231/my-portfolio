<template>
  <v-container fluid class="pa-0 min-h-screen">
    <!-- Cyberpunk Matrix Background -->
    <div class="cyber-matrix">
      <div class="binary-rain"></div>
      <div class="hologram-grid"></div>
      <canvas id="cyberParticles" class="particles"></canvas>
      <div class="energy-pulse"></div>
    </div>

    <!-- Morphing Main Content -->
    <v-row no-gutters align="center" justify="center" class="main-content">
      <v-col
        cols="12"
        xs="11"
        sm="10"
        md="8"
        lg="6"
        xl="5"
        class="content-wrapper"
      >
        <div class="cyber-core">
          <!-- Nanotech Avatar -->
          <div class="nano-avatar" @mousemove="handleAvatarHover">
            <div class="nanites"></div>
            <div class="hologram-ring"></div>
            <v-avatar :size="avatarSize" class="quantum-avatar">
              <v-img
                :src="'/images/profile.jpeg'"
                alt="Profile"
                class="avatar-matrix"
                @error="handleImageError"
              />
            </v-avatar>
          </div>

          <!-- Neural Interface Terminal -->
          <div class="neural-terminal my-8">
            <div class="synapse-effect"></div>
            <div class="brainwave-pattern"></div>
            <div class="terminal-interface">
              <span class="neural-prompt">NEURAL_INTERFACE></span>
              <span class="synapse-text" :class="{ glitch: isGlitching }">{{
                currentText
              }}</span>
              <span class="neural-cursor">◈</span>
            </div>
          </div>

          <!-- CyberDNA Introduction -->
          <div class="cyber-dna">
            <div class="dna-strand"></div>
            <div class="genetic-pattern"></div>
            <p class="dna-sequence">
              <span class="cybercode neon-scan">>> CYBER_DEVELOPER_v4.2.0</span
              ><br />
              <span class="typeout-code">[Specialization] </span>
              <span class="nanotech rotating-tech"></span><br />
              <span class="typeout-code">[Mission] </span>
              <span class="quantum-text cyber-mutation"
                >Constructing_Digital_Realities</span
              >
            </p>
          </div>

          <!-- Quantum Download -->
          <div class="quantum-download">
            <button class="data-stream" @click="handleDownload">
              <span class="stream-text">DOWNLOAD_PROFILE.cyber</span>
              <div class="stream-flow"></div>
              <div class="quantum-glow"></div>
            </button>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Holographic Navigation -->
    <div class="holo-nav">
      <div
        v-for="n in 3"
        :key="n"
        class="holo-node"
        :class="{ active: n === 1 }"
        @click="scrollToSection(n)"
      >
        <div class="node-core"></div>
      </div>
    </div>

    <!-- Quantum Scroll -->
    <div class="quantum-scroll" @click="scrollToContent">
      <div class="quantum-ring"></div>
      <div class="quantum-dot"></div>
    </div>
  </v-container>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useDisplay } from "vuetify";

const currentText = ref("");
const isGlitching = ref(false);
const messageIndex = ref(0);
const techItems = ref(["React", "TensorFlow", "WebGL", "Rust", "Node.js"]);
const currentTech = ref(0);

const messages = [
  "INITIALIZING_QUANTUM_SYSTEM...",
  "ACCESSING_NEURAL_NETWORK...",
  "USER_IDENTIFIED: SIDDHARTH_SAHU",
  "CYBER_LEVEL: 99",
  "SYSTEM_STATUS: OMEGA",
  "CONNECTING_TO_METAVERSE...",
];

const avatarSize = computed(() => {
  const breakpoint = useDisplay();
  if (breakpoint.xs) return 100;
  if (breakpoint.sm) return 120;
  if (breakpoint.md) return 140;
  return 160;
});

const typeText = async () => {
  const message = messages[messageIndex.value];
  let currentIndex = 0;

  while (currentIndex < message.length) {
    isGlitching.value = Math.random() < 0.2;
    await new Promise((resolve) =>
      setTimeout(resolve, 30 + Math.random() * 40)
    );
    currentText.value = message.slice(0, currentIndex + 1);
    currentIndex++;
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  while (currentIndex > 0) {
    await new Promise((resolve) => setTimeout(resolve, 20));
    currentIndex--;
    currentText.value = message.slice(0, currentIndex);
  }

  messageIndex.value = (messageIndex.value + 1) % messages.length;
  typeText();
};

const rotateTech = () => {
  currentTech.value = (currentTech.value + 1) % techItems.value.length;
  document.querySelector(".rotating-tech").textContent =
    techItems.value[currentTech.value];
  setTimeout(rotateTech, 1500);
};

const handleAvatarHover = (e) => {
  const avatar = e.currentTarget;
  const rect = avatar.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  avatar.style.setProperty("--nanite-x", `${x}%`);
  avatar.style.setProperty("--nanite-y", `${y}%`);
};

onMounted(() => {
  typeText();
  rotateTech();
  initParticles();
  initCyberEffects();
});

const initCyberEffects = () => {
  const core = document.querySelector(".cyber-core");
  core.addEventListener("mousemove", (e) => {
    const rect = core.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    core.style.transform = `
      perspective(1000px)
      rotateX(${y}deg)
      rotateY(${-x}deg)
      scale(1.02)
    `;
    core.style.filter = `
      drop-shadow(${-x}px ${y}px 15px rgba(0, 255, 255, 0.3))
      drop-shadow(${x}px ${-y}px 15px rgba(255, 0, 255, 0.3))
    `;
  });

  core.addEventListener("mouseleave", () => {
    core.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    core.style.filter = "none";
  });
};

const initParticles = () => {
  const canvas = document.getElementById("cyberParticles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let hue = 0;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  class QuantumParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = initial ? Math.random() * canvas.width : -50;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 3 + 1;
      this.speedY = (Math.random() - 0.5) * 2;
      this.color = `hsl(${hue}, 100%, 70%)`;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width + 50) this.reset();
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Create particle matrix
  for (let i = 0; i < 150; i++) particles.push(new QuantumParticle());

  const animate = () => {
    ctx.fillStyle = "rgba(0, 0, 20, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    hue += 0.5;
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    // Create binary rain effect
    ctx.fillStyle = "rgba(0, 255, 127, 0.1)";
    ctx.font = "14px monospace";
    for (let i = 0; i < 50; i++) {
      ctx.fillText(
        Math.random().toString(2).substr(2, 8),
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
    }

    requestAnimationFrame(animate);
  };

  animate();
};
</script>

<style scoped>
/* Cybernetic Matrix Styles */
.cyber-matrix {
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at center, #000a1f 0%, #000 150%);
  z-index: 1;
  overflow: hidden;
}

.binary-rain {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    to bottom,
    transparent 95%,
    rgba(0, 255, 127, 0.1) 100%
  );
  animation: matrixRain 60s linear infinite;
  opacity: 0.2;
}

@keyframes matrixRain {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 100%;
  }
}

.energy-pulse {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--pulse-x, 50%) var(--pulse-y, 50%),
    rgba(0, 255, 255, 0.2) 0%,
    transparent 70%
  );
  animation: pulseWave 8s infinite;
}

@keyframes pulseWave {
  0%,
  100% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.5);
  }
}

.content-wrapper {
  position: relative;
  z-index: 2;
  padding: 1rem;
}

.cyber-core {
  background: rgba(0, 5, 30, 0.98);
  border: 2px solid #00ffff;
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(40px);
  box-shadow: 0 0 80px rgba(0, 255, 255, 0.3),
    inset 0 0 30px rgba(0, 255, 255, 0.1),
    0 0 120px rgba(255, 0, 255, 0.2) inset;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

@media (max-width: 960px) {
  .cyber-core {
    padding: 1.5rem;
    margin: 1rem;
    border-width: 1px;
  }
}

.nano-avatar {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  cursor: crosshair;
}

.nanites {
  position: absolute;
  inset: -20px;
  background: radial-gradient(
    circle at var(--nanite-x, 50%) var(--nanite-y, 50%),
    rgba(0, 255, 255, 0.3) 0%,
    transparent 70%
  );
  transition: all 0.3s ease;
}

.hologram-ring {
  position: absolute;
  inset: -15px;
  border: 2px solid #ff00ff;
  border-radius: 50%;
  animation: hologramOrbit 4s linear infinite;
}

@keyframes hologramOrbit {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: rotate(180deg) scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 0.8;
  }
}

.quantum-avatar {
  border: 2px solid #00ffff;
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.3),
    0 0 40px rgba(255, 0, 255, 0.3) inset;
  background: rgba(0, 0, 30, 0.9);
}

.neural-terminal {
  background: linear-gradient(
    145deg,
    rgba(0, 10, 50, 0.9),
    rgba(20, 0, 50, 0.9)
  );
  border: 1px solid #00ffff;
  padding: 1.5rem;
  margin: 2rem 0;
  position: relative;
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% 100%,
    20px 100%,
    0 calc(100% - 20px)
  );
}

.synapse-effect {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent 0%,
    rgba(0, 255, 255, 0.1) 2%,
    transparent 4%
  );
  animation: synapseFlow 20s linear infinite;
}

@keyframes synapseFlow {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}

.terminal-interface {
  font-family: "Source Code Pro", monospace;
  color: #00ff9d;
  font-size: 1.1rem;
  line-height: 1.4;
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.3);
}

.neural-cursor {
  animation: neuralPulse 0.8s ease infinite;
}

@keyframes neuralPulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.cyber-dna {
  position: relative;
  padding: 2rem;
  margin: 2rem 0;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 255, 255, 0.05) 50%,
    transparent 100%
  );
}

.dna-strand {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #00ffff 0%, #ff00ff 50%, #00ffff 100%);
  animation: dnaFlow 4s linear infinite;
}

@keyframes dnaFlow {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}

.quantum-download {
  position: relative;
  margin-top: 2rem;
}

.data-stream {
  position: relative;
  background: #00051d;
  border: none;
  padding: 1.2rem 2.5rem;
  color: #00ffff;
  font-family: "Oxanium", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 2px;
  clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 15px,
    100% 100%,
    15px 100%,
    0 calc(100% - 15px)
  );
  transition: all 0.3s ease;
}

.stream-flow {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 255, 255, 0.3) 50%,
    transparent 100%
  );
  opacity: 0;
  animation: streamFlow 2s infinite;
}

@keyframes streamFlow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.data-stream:hover {
  background: #00103d;
  transform: translateY(-2px);

  .stream-flow {
    opacity: 1;
  }
}

@media (max-width: 600px) {
  .terminal-interface {
    font-size: 0.9rem;
  }

  .data-stream {
    padding: 1rem 2rem;
    font-size: 0.9rem;
  }

  .cyber-dna {
    padding: 1rem;
  }
}

/* Quantum Glitch Effects */
.glitch {
  position: relative;
  animation: quantumGlitch 2s infinite;
}

@keyframes quantumGlitch {
  0% {
    text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff;
    transform: skew(0deg);
  }
  20% {
    text-shadow: 3px -2px #ff00ff, -3px 2px #00ffff;
    transform: skew(5deg);
  }
  40% {
    text-shadow: -2px 3px #ff00ff, 2px -3px #00ffff;
    transform: skew(-5deg);
  }
  60% {
    text-shadow: 4px -1px #ff00ff, -4px 1px #00ffff;
    transform: skew(3deg);
  }
  80% {
    text-shadow: -1px 4px #ff00ff, 1px -4px #00ffff;
    transform: skew(-3deg);
  }
  100% {
    text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff;
    transform: skew(0deg);
  }
}

.holo-nav {
  position: fixed;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.holo-node {
  width: 20px;
  height: 20px;
  border: 2px solid #00ffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.holo-node.active {
  border-color: #ff00ff;

  .node-core {
    background: #ff00ff;
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
  }
}

.node-core {
  width: 8px;
  height: 8px;
  background: #00ffff;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.quantum-scroll {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: quantumFloat 2s ease-in-out infinite;
}

@keyframes quantumFloat {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -20px);
  }
}
</style>
