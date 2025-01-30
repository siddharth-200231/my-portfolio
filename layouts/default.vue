<template>
  <v-app>
    <!-- Global Header with Cyberpunk Effects -->
    <v-app-bar
      app
      color="grey-darker"
      dark
      elevate-on-scroll
      class="cyber-header"
    >
      <v-toolbar-title class="cyber-title">
        <span class="glitch-text" data-text="SIDDHARTH_SAHU"
          >SIDDHARTH_SAHU</span
        >
      </v-toolbar-title>

      <!-- Animated Navigation Links -->
      <v-spacer></v-spacer>

      <!-- Desktop Navigation -->
      <div class="d-none d-md-flex nav-container">
        <v-btn
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          class="cyber-nav-btn"
          variant="text"
        >
          <span class="btn-content">{{ link.name }}</span>
          <span class="btn-glow"></span>
        </v-btn>
      </div>

      <!-- Mobile Menu with Holographic Effect -->
      <v-menu class="d-md-none" transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon class="cyber-menu-btn">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list class="cyber-menu-list">
          <v-list-item
            v-for="link in links"
            :key="link.name"
            :to="link.path"
            class="cyber-menu-item"
          >
            <span class="menu-text">{{ link.name }}</span>
            <div class="menu-line"></div>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Main Content with Responsive Handling -->
    <v-main class="cyber-main">
      <v-container class="cyber-container">
        <NuxtPage class="page-content" />
      </v-container>
    </v-main>

    <!-- Animated Footer -->
    <v-footer app color="grey-darker" dark class="cyber-footer">
      <v-container class="footer-content">
        <v-row justify="center" no-gutters>
          <v-col cols="12" class="text-center">
            <!-- Social Links with Hover Effects -->
            <div class="social-container">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.link"
                class="social-link"
                target="_blank"
                rel="noopener"
              >
                <v-icon class="social-icon">{{ social.icon }}</v-icon>
                <div class="social-hover"></div>
              </a>
            </div>

            <!-- Copyright Text with Scanning Effect -->
            <p class="copyright-text">
              <span class="scanline"></span>
              © 2024 CYBER_DEV_V4.2.0 • ALL SYSTEMS_OPERATIONAL
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "CyberLayout",
  data() {
    return {
      links: [
        { name: "HOME", path: "/" },
        { name: "BIO", path: "/about" },
        { name: "PROJECTS", path: "/projects" },
        { name: "CONTACT", path: "/contact" },
      ],
      socials: [
        {
          name: "LinkedIn",
          link: "https://linkedin.com",
          icon: "mdi-linkedin",
        },
        { name: "GitHub", link: "https://github.com", icon: "mdi-github" },
        {
          name: "LeetCode",
          link: "https://leetcode.com",
          icon: "mdi-code-tags",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Cyberpunk Theme Variables */
:root {
  --neon-cyan: #0ff;
  --neon-pink: #f0f;
  --cyber-black: #00051d;
  --cyber-gray: #1a1a2e;
  --hologram-blue: #00f3ff;
}

/* Global Styles */
:deep(.v-application) {
  background: radial-gradient(
      ellipse at center,
      var(--cyber-black) 0%,
      #000 150%
    ),
    repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.03) 0px,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px,
      transparent 10px
    ) !important;
  font-family: "Oxanium", sans-serif;
}

/* Header Styles */
.cyber-header {
  background: rgba(10, 10, 30, 0.98) !important;
  border-bottom: 1px solid var(--neon-cyan);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.cyber-title {
  font-family: "Space Mono", monospace;
  letter-spacing: 3px;
  position: relative;
  overflow: visible;
}

.glitch-text {
  position: relative;
  color: var(--neon-cyan);

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  &::before {
    color: var(--neon-pink);
    animation: glitch-1 2s infinite linear alternate-reverse;
  }

  &::after {
    color: var(--hologram-blue);
    animation: glitch-2 2s infinite linear alternate-reverse;
  }
}

/* Navigation Buttons */
.cyber-nav-btn {
  position: relative;
  margin: 0 1rem !important;
  padding: 0.5rem 1.5rem !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .btn-content {
    position: relative;
    z-index: 2;
    color: var(--neon-cyan);
  }

  .btn-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(0, 255, 255, 0.3) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);

    .btn-glow {
      opacity: 1;
    }
  }
}

/* Mobile Menu */
.cyber-menu-list {
  background: rgba(10, 10, 30, 0.98) !important;
  border: 1px solid var(--neon-cyan);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
}

.cyber-menu-item {
  position: relative;
  padding: 1rem 2rem !important;
  transition: all 0.3s ease;

  .menu-text {
    color: var(--neon-cyan);
    position: relative;
    z-index: 2;
  }

  .menu-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--neon-cyan);
    transition: width 0.3s ease;
  }

  &:hover {
    background: rgba(0, 255, 255, 0.05) !important;

    .menu-line {
      width: 100%;
    }
  }
}

/* Main Content Area */
.cyber-main {
  padding-top: 64px !important;
}

.cyber-container {
  max-width: 1440px !important;
  padding: 2rem !important;
  background: rgba(15, 15, 30, 0.7) !important;
  border: 1px solid rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}

/* Footer Styles */
.cyber-footer {
  border-top: 1px solid var(--neon-cyan) !important;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1) !important;
}

.social-link {
  position: relative;
  display: inline-flex;
  margin: 0 1rem;
  padding: 0.5rem;
  transition: all 0.3s ease;

  .social-icon {
    color: var(--neon-cyan);
    z-index: 2;
  }

  .social-hover {
    position: absolute;
    inset: 0;
    border: 1px solid var(--neon-cyan);
    opacity: 0;
    animation: socialGlow 1.5s infinite;
  }

  &:hover {
    transform: translateY(-3px);

    .social-hover {
      opacity: 1;
    }
  }
}

.copyright-text {
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  padding: 1rem 0;
  margin-top: 2rem;

  .scanline {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 255, 255, 0.1) 50%,
      transparent 100%
    );
    animation: scan 5s linear infinite;
  }
}

/* Animations */
@keyframes glitch-1 {
  0% {
    transform: translate(2px, 0);
  }
  100% {
    transform: translate(-2px, 0);
  }
}

@keyframes glitch-2 {
  0% {
    transform: translate(-2px, 0);
  }
  100% {
    transform: translate(2px, 0);
  }
}

@keyframes socialGlow {
  0%,
  100% {
    box-shadow: 0 0 10px var(--neon-cyan);
  }
  50% {
    box-shadow: 0 0 20px var(--neon-cyan);
  }
}

@keyframes scan {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

/* Responsive Breakpoints */
@media (max-width: 960px) {
  .cyber-container {
    padding: 1.5rem !important;
  }

  .cyber-nav-btn {
    margin: 0 0.5rem !important;
    padding: 0.5rem 1rem !important;
  }
}

@media (max-width: 600px) {
  .cyber-title {
    font-size: 1.25rem !important;
  }

  .cyber-container {
    padding: 1rem !important;
    margin: 0 !important;
    border: none !important;
  }

  .cyber-main {
    padding-top: 56px !important;
  }

  .social-link {
    margin: 0 0.5rem;
    padding: 0.25rem;
  }
}

@media (min-width: 1920px) {
  .cyber-container {
    max-width: 1600px !important;
  }
}
</style>
