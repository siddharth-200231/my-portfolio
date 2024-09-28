<template>
   <div class="relative min-h-[70vh] flex flex-col items-center justify-center text-gray-100 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-95"></div>

    <div class="z-10 text-center">
      <!-- Profile Image -->
      <img
        class="rounded-full mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 object-cover border-4 border-purple-600"
        src="../assets/images/WhatsApp Image 2024-09-24 at 15.20.37.jpeg"
        alt="Profile Picture"
        style="object-fit: contain;"
      />

      <!-- Console Animation -->
      <div class="console-container mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <span id="text"></span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>

      <p class="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-neon-blue">
        A Full-Stack Developer specializing in the MERN stack and creating scalable web applications.
      </p>

      <nuxt-link
  to="/projects"
  class="bg-neon-green hover:bg-neon-dark-green text-sm sm:text-base py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 text-black hover:text-white"
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
    this.consoleText(['Hello', "I'm Siddharth Sahu"], 'text', ['#39FF14', '#00FFFF']); // Change colors to neon
    this.initParticles(); // Call to init particles
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

      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function () {
            const usedColor = colors.shift();
            colors.push(usedColor);
            const usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);

      window.setInterval(function () {
        if (visible === true) {
          con.className = 'console-underscore hidden';
          visible = false;
        } else {
          con.className = 'console-underscore';
          visible = true;
        }
      }, 400);
    },
    initParticles() {
      const canvas = document.getElementById("particles");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let particles = [];
      const particleCount = 50;
      const colors = [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(153, 102, 255, 0.7)",
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          velocity: {
            x: (Math.random() - 0.5) * 1.5,
            y: (Math.random() - 0.5) * 1.5,
          },
        });
      }

      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let particle of particles) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          particle.x += particle.velocity.x;
          particle.y += particle.velocity.y;

          if (particle.x > canvas.width || particle.x < 0) particle.velocity.x *= -1;
          if (particle.y > canvas.height || particle.y < 0) particle.velocity.y *= -1;
        }
        requestAnimationFrame(animateParticles);
      };

      animateParticles();
    },
  },
};
</script>

<style scoped>
body {
  background: #111; /* Dark background to blend with the theme */
}

/* Background gradient for index page */
.bg-dark-gradient {
  background: radial-gradient(circle, rgba(34, 34, 34, 1) 0%, rgba(12, 12, 12, 1) 50%, rgba(0, 0, 0, 1) 100%);
}

.console-container {
  font-family: 'Khula', sans-serif;
  font-size: 2em;
  text-align: center;
  max-width: 600px;
  margin: auto;
  text-shadow: 0 0 10px #00FFFF, 0 0 20px #39FF14; /* Neon glow effect */
}

.text-neon-blue {
  color: #1E90FF; /* Bright neon blue for description */
  text-shadow: 0 0 10px #1E90FF, 0 0 20px #00BFFF;
}

/* Explore button styles */
.bg-neon-gradient {
  background: linear-gradient(135deg, #39FF14, #00FF00);
  box-shadow: 0 0 15px #39FF14, 0 0 30px #00FF00, 0 0 45px #39FF14;
}

.bg-neon-dark-green:hover {
  background: linear-gradient(135deg, #228B22, #006400);
  box-shadow: 0 0 10px #228B22, 0 0 20px #006400;
}

.hidden {
  opacity: 0;
}

.console-container {
  font-family: 'Khula', sans-serif;
  font-size: 2em; /* Adjusted size for smaller screens */
  text-align: center;
  height: auto; /* Allow height to adjust */
  width: 100%; /* Full width */
  max-width: 600px; /* Limit max width */
  color: white; /* Change the base text color */
  margin: auto;
  text-shadow: 0 0 10px #00FFFF, 0 0 20px #39FF14; /* Neon glow effect */
}

.console-underscore {
  display: inline-block;
  position: relative;
  top: -0.14em;
  left: 10px;
  animation: blink 0.7s infinite; /* Blink effect for underscore */
}

.text-neon-blue {
  color: #1E90FF; /* Bright neon blue for the description text */
  text-shadow: 0 0 10px #1E90FF, 0 0 20px #00BFFF; /* Neon glow effect */
}

.bg-neon-green {
  background-color: #39FF14; /* Neon green for the button */
}

.bg-neon-dark-green {
  background-color: #32CD32; /* Darker neon green on hover */
}
.bg-neon-green {
  background-color: #39FF14; /* Neon green */
  box-shadow: 0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14; /* Neon glow effect */
}

.bg-neon-dark-green {
  background-color: #32CD32; /* Darker neon green */
  box-shadow: 0 0 15px #32CD32, 0 0 25px #32CD32, 0 0 35px #32CD32; /* More intense glow on hover */
}

.text-black {
  color: #000; /* Black text for better contrast on bright green button */
}

.text-white:hover {
  color: #fff; /* White text on hover */
}


#particles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
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
