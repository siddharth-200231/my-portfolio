<template>
  <v-app>
    <!-- Global Header -->
    <v-app-bar app color="grey-darker" dark elevate-on-scroll>
      <v-toolbar-title class="font-weight-bold text-truncate" style="max-width: 150px;">My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <!-- Mobile Hamburger Menu -->
      <v-btn icon @click="toggleMenu" class="d-sm-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      
      <!-- Desktop Navigation Links -->
      <v-row class="d-none d-sm-flex align-center justify-end">
        <v-btn v-for="link in links" :key="link.name" :to="link.path" text class="nav-link">
          {{ link.name }}
        </v-btn>
      </v-row>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="isOpen" app temporary>
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.name" :to="link.path" @click="closeMenu">
          {{ link.name }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="grey-darker" dark>
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col cols="12" class="text-center">
            <p class="footer-text mb-2">© 2024 Siddharth Sahu. All Rights Reserved.</p>
            <div class="social-buttons">
              <v-btn v-for="social in socials" 
                     :key="social.name" 
                     :href="social.link" 
                     icon 
                     class="social-btn mx-1">
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      isOpen: false,
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
      ],
      socials: [
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/siddharth-sahu-40aa57289/', icon: 'mdi-linkedin' },
        { name: 'GitHub', link: 'https://github.com/siddharth-200231', icon: 'mdi-github' },
        { name: 'LeetCode', link: 'https://leetcode.com/u/siddharth_123456/', icon: 'mdi-code-tags' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
/* General Body Background */
:deep(.v-application) {
  background: 
    linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%),
    repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.03) 0px,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px,
      transparent 10px
    ) !important;
  position: relative;
}

/* App Bar Styling */
:deep(.v-app-bar) {
  background: rgba(10, 10, 10, 0.95) !important;
  border-bottom: 2px solid rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

/* Title with Glitch Effect */
:deep(.v-toolbar-title) {
  font-family: 'Space Mono', monospace;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  
  &::before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: 2px 0 #0ff;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch 3s infinite linear alternate-reverse;
  }
}

/* Navigation Links */
.nav-link {
  position: relative;
  font-weight: 500;
  letter-spacing: 1px;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 255, 255, 0.3);
    background: rgba(0, 255, 255, 0.05);
    color: #0ff;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background: #0ff;
    transition: height 0.3s ease;
  }

  &:hover::before {
    height: 100%;
  }
}

/* Container Styling */
.v-container {
  background: transparent;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(0, 255, 255, 0.1);
  }
}

/* Social Buttons */
.social-btn {
  border: 1px solid rgba(0, 255, 255, 0.2);
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #0ff;
    transform: translateY(-2px);
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.2),
      0 0 40px rgba(0, 255, 255, 0.1);
  }

  .v-icon {
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.3s ease;
  }

  &:hover .v-icon {
    color: #0ff;
  }
}

/* Footer Styling */
:deep(.v-footer) {
  background: rgba(10, 10, 10, 0.95) !important;
  border-top: 2px solid rgba(0, 255, 255, 0.1);
}

.footer-text {
  font-family: 'Space Mono', monospace;
  color: rgba(255, 255, 255, 0.7);
}

/* Mobile Navigation */
:deep(.v-navigation-drawer) {
  background: rgba(10, 10, 10, 0.95) !important;
  border-right: 2px solid rgba(0, 255, 255, 0.1);
  
  .v-list-item {
    margin: 4px;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: rgba(0, 255, 255, 0.3);
      background: rgba(0, 255, 255, 0.05) !important;
      transform: translateX(4px);
    }
  }
}

/* Glitch Animation */
@keyframes glitch {
  0% {
    clip: rect(31px, 9999px, 94px, 0);
    transform: skew(0.85deg);
  }
  5% {
    clip: rect(70px, 9999px, 71px, 0);
    transform: skew(0.85deg);
  }
  10% {
    clip: rect(29px, 9999px, 92px, 0);
    transform: skew(-0.85deg);
  }
  /* ... continue pattern ... */
  100% {
    clip: rect(24px, 9999px, 36px, 0);
    transform: skew(0.85deg);
  }
}

/* Responsive Adjustments */
@media (max-width: 600px) {
  /* Reset all container paddings */
  :deep(.v-container) {
    padding: 0 8px !important;
    margin: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    height: calc(100vh - 112px) !important;
  }

  /* App bar specific styles */
  :deep(.v-app-bar) {
    .v-toolbar__content {
      padding: 0 8px !important;
    }
  }

  /* Main content area */
  :deep(.v-main) {
    padding-top: 56px !important;
    
    .v-container {
      padding: 0 8px !important;
    }
  }

  /* Footer adjustments */
  :deep(.v-footer) {
    .v-container {
      padding: 8px !important;
    }
  }

  /* Social buttons container */
  .social-buttons {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;
  }

  /* Individual social buttons */
  .social-btn {
    margin: 0 !important;
  }

  /* Mobile Navigation Drawer */
  .v-navigation-drawer {
    max-width: 300px !important;
    width: 100% !important;
  }
}

/* Improve tablet layout */
@media (min-width: 601px) and (max-width: 960px) {
  :deep(.v-container) {
    padding: 0 16px !important;
  }

  .nav-link {
    padding: 0 8px !important;
    font-size: 0.9rem;
  }
}

/* Extra small height screens */
@media (max-height: 600px) {
  :deep(.v-main) {
    .v-container {
      height: calc(100vh - 96px) !important;
    }
  }

  :deep(.v-app-bar) {
    height: 48px !important;
    .v-toolbar__content {
      min-height: 48px !important;
    }
  }
}
</style>
