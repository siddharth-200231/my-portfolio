<template>
  <v-container fluid class="pa-0 min-h-screen">
    <!-- Animated Background with Particles -->
    <div class="animated-background">
      <div class="particles"></div>
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
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const currentText = ref('')
const isTyping = ref(true)
const currentIndex = ref(0)
const messageIndex = ref(0)

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
  
  // Typing animation
  while (currentIndex.value < message.length) {
    await new Promise(resolve => setTimeout(resolve, 50))
    currentText.value = message.slice(0, currentIndex.value + 1)
    currentIndex.value++
  }
  
  // Pause at the end of the message
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Backspace animation
  while (currentIndex.value > 0) {
    await new Promise(resolve => setTimeout(resolve, 30))
    currentIndex.value--
    currentText.value = message.slice(0, currentIndex.value)
  }
  
  // Move to next message
  messageIndex.value = (messageIndex.value + 1) % messages.length
  
  // Start next iteration
  typeText()
}

onMounted(() => {
  setTimeout(typeText, 500)
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
    radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.15) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: particleFloat 150s linear infinite;
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
    padding: 0.7rem;
    margin: auto;
    width: 95%;
  }

  .console-content {
    padding: 0.5rem;
    height: 50px;
  }

  .download-btn {
    padding: 0.5rem 1.5rem !important;
    font-size: 0.6rem !important;
  }
}

/* Small height screens */
@media (max-height: 700px) {
  .main-content {
    height: calc(100vh - 100px);
  }

  .glass-card {
    padding: 0.75rem;
    max-height: calc(100vh - 120px);
  }

  .avatar-container {
    margin-bottom: 0.5rem;
  }

  .console-container {
    margin: 0.25rem 0;
  }

  .intro-card {
    margin: 0.25rem 0;
    padding: 0.5rem;
  }
}

/* Hide scrollbar but keep functionality */
.glass-card::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
