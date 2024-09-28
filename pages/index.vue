<template>
  <div class="relative min-h-[70vh] flex flex-col items-center justify-center text-gray-100 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-95"></div>

    <div class="z-10 text-center">
      <!-- Profile Image --> 
      <img
        class="rounded-full mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 object-cover border-4 border-neon-green"
        src="../assets/images/newpp.jpg"
        alt="Profile Picture"
        style="object-fit: contain;"
      />

      <!-- Console Animation -->
      <div class="console-container mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <span id="text" class="terminal-font"></span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>

      <p class="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-blue-500">  <!-- Changed to a blue color -->
        A Full-Stack Developer specializing in the MERN stack and creating scalable web applications.
      </p>

      <!-- Download CV Button -->
      <a
        href="../static/cv/siddcv.pdf"
        download
        class="mt-4 bg-dark-gold hover:bg-light-gold text-sm sm:text-base py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 text-white"
      >
        Download CV
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    this.consoleText(['Hello', "I'm Siddharth Sahu"], 'text', ['#00FF00']); // Bright Green
  },
  methods: {
    consoleText(words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      let visible = true;
      const con = document.getElementById('console');
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      const target = document.getElementById(id);
      target.setAttribute('style', 'color:' + colors[0]);

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
            target.setAttribute('style', 'color:' + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && !waiting) {
          waiting = true;
          window.setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1300);
        } else if (!waiting) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 150);

      window.setInterval(() => {
        if (visible) {
          con.className = 'console-underscore hidden';
          visible = false;
        } else {
          con.className = 'console-underscore';
          visible = true;
        }
      }, 500);
    },
  },
};
</script>

<style scoped>
body {
  background: #000; /* Background remains black */
}

.console-container {
  font-family: 'Courier New', monospace; /* Terminal-like font */
  font-size: 2em;
  text-align: center;
  max-width: 600px;
  margin: auto;
  text-shadow: 0 0 15px #00FF00, 0 0 30px #00FF00; /* Green glow */
}

.terminal-font {
  color: #00FF00; /* Bright green color */
  font-weight: bold; /* Make the text bold */
}

.text-neon-green {
  color: #00FF00; /* Bright Green color */
  text-shadow: 
    0 0 15px #00FF00, /* Green glow */
    0 0 25px #00FF00; /* Brighter Green glow */
}

/* New color for the About section */
.text-blue {
  color: #1DA1F2; /* Twitter Blue color */
}

/* Darker Button Styles */
.bg-dark-gold {
  background-color: #b8860b; /* Dark Gold */
  box-shadow: 0 0 10px #b8860b, 0 0 20px #b8860b; /* Dark Gold glow */
}

.bg-light-gold {
  background-color: #d1a154; /* Softer Light Gold */
}

.hover\:bg-light-gold:hover {
  background-color: #d1a154; /* Softer Light Gold */
}

.hidden {
  opacity: 0;
}

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
</style>
