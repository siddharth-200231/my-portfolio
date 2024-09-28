<template>
  <div class="relative min-h-[70vh] flex flex-col items-center justify-center text-gray-100 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-95"></div>

    <div class="z-10 text-center">
      <!-- Profile Image -->
      <img
        class="rounded-full mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 object-cover border-4 border-neon-blue"
        src="../assets/images/newpp.jpg"
        alt="Profile Picture"
        style="object-fit: contain;"
      />

      <!-- Console Animation -->
      <div class="console-container mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <span id="text"></span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>

      <p class="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-neon-white">
        A Full-Stack Developer specializing in the MERN stack and creating scalable web applications.
      </p>

      <nuxt-link
        to="/projects"
        class="bg-neon-blue hover:bg-neon-aqua text-sm sm:text-base py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 text-black hover:text-white"
      >
        Explore My Work
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    this.consoleText(['Hello', "I'm Siddharth Sahu"], 'text', ['#00CED1', '#00BFFF']); // Neon Aqua and Neon Light Blue
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
          }, 1100); // Increased wait time for better readability
        } else if (letterCount === words[0].length + 1 && !waiting) {
          waiting = true;
          window.setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1300); // Increased wait time
        } else if (!waiting) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 150); // Slower typing effect

      window.setInterval(() => {
        if (visible) {
          con.className = 'console-underscore hidden';
          visible = false;
        } else {
          con.className = 'console-underscore';
          visible = true;
        }
      }, 500); // Slower blink for better visibility
    },
  },
};
</script>

<style scoped>
body {
  background: #000; /* Change to pure black for a darker background */
}

.console-container {
  font-family: 'Khula', sans-serif;
  font-size: 2em;
  text-align: center;
  max-width: 600px;
  margin: auto;
  text-shadow: 0 0 15px #00CED1, 0 0 30px #00BFFF; /* Neon Aqua and Neon Light Blue glow */
}

.text-neon-white {
  color: #FFFFFF; /* White color */
  text-shadow: 
    0 0 15px #FFFFFF,    /* White glow */
    0 0 25px #FFFFFF,    /* Brighter white glow */
    0 0 30px #00BFFF,    /* Light Blue glow */
    0 0 40px #00BFFF;     /* Brighter light blue glow */
}

.bg-neon-blue {
  background-color: #1E90FF; /* Neon Blue */
  box-shadow: 0 0 20px #1E90FF, 0 0 40px #00CED1; /* Neon Aqua glow */
}

.bg-neon-aqua {
  background-color: #00CED1; /* Neon Aqua */
}

.bg-neon-dark-blue:hover {
  background-color: #00BFFF; /* Hover to Neon Light Blue */
  box-shadow: 0 0 15px #00CED1, 0 0 30px #1E90FF; /* Neon Aqua glow on hover */
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
