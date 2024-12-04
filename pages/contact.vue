<template>
  <v-container class="py-8">
    <v-card
      class="mx-auto pa-6"
      max-width="800"
      elevation="10"
      theme="dark"
      :style="{ background: 'linear-gradient(145deg, #1a237e, #283593)' }"
    >
      <v-card-title class="text-center mb-6">
        <h1 class="text-h3 font-weight-bold text-indigo-lighten-3">
          <v-icon size="x-large" class="mr-2">mdi-contact-mail</v-icon>
          Contact Me
        </h1>
      </v-card-title>

      <v-card-text>
        <p class="text-body-1 text-center mb-8 text-grey-lighten-2">
          I'm always open to new opportunities and collaborations. Feel free to reach out through any of these channels:
        </p>

        <v-row justify="center">
          <v-col cols="12" sm="10" md="8">
            <v-list>
              <v-list-item
                v-for="(item, index) in contactMethods"
                :key="index"
                :href="item.link"
                :target="item.link ? '_blank' : ''"
                class="mb-4"
              >
                <template v-slot:prepend>
                  <v-icon :color="item.color" size="large">{{ item.icon }}</v-icon>
                </template>

                <v-list-item-title class="text-h6 font-weight-medium">
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-1">
                  {{ item.value }}
                </v-list-item-subtitle>

                <template v-slot:append>
                  <v-icon v-if="item.link" color="grey">mdi-open-in-new</v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <v-divider class="my-6"></v-divider>

        <v-row justify="center">
          <v-col cols="auto">
            <v-btn
              v-for="social in socialButtons"
              :key="social.icon"
              :href="social.link"
              target="_blank"
              class="mx-2"
              :color="social.color"
              variant="elevated"
              size="large"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
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
.v-list {
  background: transparent !important;
}

.v-list-item {
  border-radius: 8px;
  transition: all 0.3s ease;
}

.v-list-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
}
</style>
