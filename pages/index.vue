<template>
  <div class="relative min-h-[68vh] flex flex-col items-center justify-center text-gray-100 overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800 opacity-95 animate-bg"></div>

    <div class="z-10 text-center px-4 animate-fade-in">
      <!-- Profile Image with Hover Glow Effect -->
      <img
        class="rounded-full mx-auto w-32 sm:w-40 md:w-44 lg:w-52 xl:w-60 mb-6 object-cover border-4 border-neon-green shadow-elegant-glow hover:shadow-elegant-hover transition duration-300 transform hover:scale-110"
        src="../assets/images/WhatsApp Image 2024-09-24 at 15.20.37.jpeg"
        alt="Profile Picture of Siddharth Sahu"
        loading="lazy"
      />

      <!-- Console Animation -->
      <div class="console-container mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-4">
        <span id="text" class="terminal-font"></span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>

      <!-- Introduction Text -->
      <p class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-3xl mx-auto mb-6 text-intro shadow-text">
        A Full-Stack Developer specializing in the MERN stack and creating scalable web applications.
      </p>

      <!-- Download CV Button with Enhanced Glow and Animation -->
      <a
        href="/siddCv.pdf"
        download="siddharthCv"
        class="mt-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 hover:from-purple-700 hover:via-indigo-600 hover:to-blue-700 text-xs sm:text-sm md:text-base lg:text-lg py-2 px-6 rounded-full shadow-elegant-button hover:shadow-elegant-hover transform transition-transform duration-300 hover:scale-110 hover:rotate-1 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green"
        aria-label="Download Siddharth Sahu's CV"
        role="button"
      >
        Download CV
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const consoleText = (words, id, colors) => {
  if (colors === undefined) colors = ["#fff"];
  let visible = true;
  const con = document.getElementById("console");
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);

  window.setInterval(() => {
    if (letterCount === 0 && !waiting) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(() => {
        const usedColor = colors.shift();
        colors.push(usedColor);
        const usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 500);
    } else if (letterCount === words[0].length + 1 && !waiting) {
      waiting = true;
      window.setTimeout(() => {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 800);
    } else if (!waiting) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 100);

  window.setInterval(() => {
    if (visible) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";
      visible = true;
    }
  }, 400);
};

onMounted(() => {
  consoleText(
    [
      "Hello",
      "I'm Siddharth Sahu",
      "A React and Next.js developer",
      "Feel free to explore my projects and contact me",
    ],
    "text",
    ["#00FF00"]
  );
});
</script>

<style scoped>
/* Background Gradient Animation */
@keyframes bgAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.animate-bg {
  animation: bgAnimation 10s ease infinite;
  background-size: 400% 400%;
}

/* Neon green color for text and image borders */
.text-neon-green {
  color: #00ff00;
}

/* Elegant glow effect for profile image */
.shadow-elegant-glow {
  box-shadow: 0 0 10px #00ff00, 0 0 20px rgba(0, 255, 0, 0.6);
}

.shadow-elegant-hover {
  box-shadow: 0 0 15px #00ff00, 0 0 30px rgba(0, 255, 0, 0.8);
}

/* Smooth fade-in animation */
.animate-fade-in {
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Console container styling */
.console-container {
  font-family: 'Fira Code', monospace;
  font-size: 1.4em; /* Default font size for console text */
  text-align: center;
  max-width: 600px;
  margin: auto;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
  white-space: normal;
}

/* Terminal font styling */
.terminal-font {
  color: #00FF00;
  font-weight: bold;
}

/* Console underscore animation */
.console-underscore {
  display: inline-block;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.hidden {
  opacity: 0;
}

/* Button shadow and elegant glow */
.shadow-elegant-button {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 255, 255, 0.5);
}

.shadow-elegant-hover {
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.6), 0 0 18px rgba(0, 255, 255, 0.7);
}

/* Responsive console font sizing */
@media (max-width: 640px) {
  .console-container {
    font-size: 1.2em; /* Reduced font size for smaller screens */
    white-space: pre-wrap;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .console-container {
    font-size: 1.5em; /* Slightly larger for mid-sized screens */
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .console-container {
    font-size: 1.8em; /* Adjust for tablets and small laptops */
  }
}

@media (min-width: 1025px) {
  .console-container {
    font-size: 1.6em; /* Slightly smaller for larger screens */
  }
}

/* Responsive introduction text sizing */
@media (max-width: 640px) {
  .text-intro {
    font-size: 1em; /* Smaller text for mobile */
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .text-intro {
    font-size: 1.2em; /* Slightly larger for mid-sized screens */
  }
}

@media (min-width: 769px) {
  .text-intro {
    font-size: 1.4em; /* Slightly smaller for larger screens */
  }
}

/* Subtle text introduction animation */
.text-intro {
  animation: textAppear 2s ease-in-out 1s forwards;
  opacity: 0;
}

@keyframes textAppear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
