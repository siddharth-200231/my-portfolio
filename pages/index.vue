<template>
  <div class="relative min-h-[66vh] flex flex-col items-center justify-center text-gray-100 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-800 via-black to-gray-900 opacity-90"></div>

    <div class="z-10 text-center px-4">
      <!-- Profile Image -->
      <img
        class="rounded-full mx-auto w-40 h-40 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 mb-6 object-cover border-4 border-neon-green shadow-neon-glow"
        src="../assets/images/hacker.jpg"
        alt="Profile Picture"
      />

      <!-- Console Animation -->
      <div class="console-container mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <span id="text" class="terminal-font"></span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>

      <p class="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 px-2 md:px-4 lg:px-6 xl:px-8">
        A Full-Stack Developer specializing in the MERN stack and creating scalable web applications.
      </p>

      <!-- Download CV Button -->
      <a
        href="../static/cv/siddcv.pdf"
        download
        class="mt-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 hover:from-purple-700 hover:via-indigo-600 hover:to-blue-700 text-xs sm:text-sm md:text-base lg:text-lg py-2 px-4 sm:px-6 rounded-full shadow-button-glow transition-all duration-300 transform hover:scale-105 text-white font-semibold"
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
    this.consoleText(["Hello", "I'm Siddharth Sahu", "And a React and Next.js developer" ,"Feel free to explore my projects and contact me "], 'text', ['#00FF00']);
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

      // Adjusted interval and delay times for faster transition between words
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
          }, 500); // Reduced delay for transition between words
        } else if (letterCount === words[0].length + 1 && !waiting) {
          waiting = true;
          window.setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 800); // Reduced waiting time before text deletes
        } else if (!waiting) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 100); // Smoother and faster typing speed

      window.setInterval(() => {
        if (visible) {
          con.className = 'console-underscore hidden';
          visible = false;
        } else {
          con.className = 'console-underscore';
          visible = true;
        }
      }, 400); // Smoother blinking animation
    },
  },
};
</script>

<style scoped>
/* Gradient background */
.bg-gradient-to-b {
  background: linear-gradient(to bottom, #1a1a1a, #000000, #1a1a1a);
}

/* Neon green color */
.text-neon-green {
  color: #00ff00;
}

/* Neon glow effect for profile image */
.shadow-neon-glow {
  box-shadow: 0 0 15px #00ff00, 0 0 30px #00ff00;
}

/* Console container styling */
.console-container {
  font-family: 'Courier New', monospace;
  font-size: 1.6em;
  text-align: center;
  max-width: 600px;
  margin: auto;
  text-shadow: 0 0 15px #00FF00, 0 0 30px #00FF00;
  word-wrap: break-word;
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
  animation: blink 0.5s infinite; /* Faster blinking animation */
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

/* Button shadow and glow */
.shadow-button-glow {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 255, 0.5);
}

/* Hover effects for console and button */
a:hover {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.7);
}

/* Responsiveness improvements */
@media (max-width: 640px) {
  .console-container {
    font-size: 1.7em; /* Slightly bigger font for smaller screens */
    white-space: pre-wrap;
  }
}

@media (min-width: 640px) {
  .console-container {
    font-size: 2em;
  }
}

@media (min-width: 768px) {
  .console-container {
    font-size: 2.2em;
  }
}

@media (min-width: 1024px) {
  .console-container {
    font-size: 2.5em;
  }
}
</style>
