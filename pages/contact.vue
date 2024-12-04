<template>
  <v-container fluid class="pa-0 min-h-screen">
    <!-- Animated Background -->
    <div class="animated-background">
      <div class="particles"></div>
    </div>

    <!-- Main Content -->
    <v-row no-gutters align="center" justify="center" class="main-content">
      <v-col cols="12" sm="10" md="8" lg="6">
        <div class="glass-card">
          <h1 class="text-center text-h3 mb-6 gradient-text">Contact Me</h1>
          
          <!-- Contact Methods List -->
          <v-list class="contact-list">
            <v-list-item
              v-for="(item, index) in contactMethods"
              :key="index"
              :href="item.link"
              :target="item.link ? '_blank' : ''"
              class="contact-item mb-4"
            >
              <template v-slot:prepend>
                <v-icon :color="item.color" size="large" class="contact-icon">
                  {{ item.icon }}
                </v-icon>
              </template>

              <v-list-item-title class="title-text">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="subtitle-text">
                {{ item.value }}
              </v-list-item-subtitle>

              <template v-slot:append>
                <v-icon v-if="item.link" color="grey" class="link-icon">
                  mdi-open-in-new
                </v-icon>
              </template>
            </v-list-item>
          </v-list>

          <!-- Social Links -->
          <v-divider class="my-6"></v-divider>
          <div class="social-links">
            <v-btn
              v-for="social in socialButtons"
              :key="social.icon"
              :href="social.link"
              target="_blank"
              class="social-btn mx-2"
              :color="social.color"
              variant="outlined"
              size="large"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const contactMethods = ref([
  { 
    title: "Email",
    value: "sahusidd715@gmail.com",
    icon: "mdi-email",
    color: "blue-lighten-2"
  },
  { 
    title: "Phone",
    value: "+91 6371984608",
    icon: "mdi-phone",
    color: "green-lighten-2"
  },
  { 
    title: "LinkedIn",
    value: "Connect with me on LinkedIn",
    link: "https://www.linkedin.com/in/siddharth-sahu-40aa57289/",
    icon: "mdi-linkedin",
    color: "blue"
  },
  { 
    title: "GitHub",
    value: "Check out my projects",
    link: "https://github.com/siddharth-200231",
    icon: "mdi-github",
    color: "grey-lighten-2"
  },
  { 
    title: "LeetCode",
    value: "View my problem-solving skills",
    link: "https://leetcode.com/u/siddharth_123456/",
    icon: "mdi-code-tags",
    color: "orange"
  },
]);

const socialButtons = ref([
  { 
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/in/siddharth-sahu-40aa57289/',
    color: 'blue'
  },
  { 
    icon: 'mdi-github',
    link: 'https://github.com/siddharth-200231',
    color: 'grey-lighten-2'
  },
  { 
    icon: 'mdi-code-tags',
    link: 'https://leetcode.com/u/siddharth_123456/',
    color: 'orange'
  },
]);
</script>

<style scoped>
.animated-background {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  z-index: 1;
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

.main-content {
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 64px);
}

.glass-card {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 255, 0.2);
  padding: clamp(1.5rem, 5vw, 2.5rem);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
}

.gradient-text {
  background: linear-gradient(45deg, #00ffff, #00ccff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.contact-list {
  background: transparent !important;
}

.contact-item {
  background: rgba(0, 255, 255, 0.05);
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 255, 255, 0.1);
}

.contact-item:hover {
  transform: translateX(8px);
  background: rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.3);
}

.contact-icon {
  font-size: 24px;
  margin-right: 16px;
}

.title-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.subtitle-text {
  color: rgba(255, 255, 255, 0.7);
}

.social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 255, 255, 0.2);
}

@keyframes particleFloat {
  from { background-position: 0 0; }
  to { background-position: 1000px 1000px; }
}

/* Mobile Responsiveness */
@media (max-width: 600px) {
  .glass-card {
    margin: 1rem;
    padding: 1rem;
  }

  .gradient-text {
    font-size: 2rem;
  }

  .contact-item {
    padding: 12px;
  }

  .title-text {
    font-size: 1rem;
  }

  .subtitle-text {
    font-size: 0.875rem;
  }

  .social-btn {
    margin: 4px !important;
  }
}
</style>
