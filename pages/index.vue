<template>
  <div class="relative min-h-[70vh] flex flex-col items-center justify-center text-gray-100 overflow-hidden">
    <!-- Inherit Background from Default -->
    <div class="absolute inset-0 opacity-95"></div>

    <!-- Content Section -->
    <div class="z-10 text-center">
      <!-- Responsive Image -->
      <img
        class="rounded-full mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 object-cover border-4 border-neon-pink transform transition-transform duration-500 hover:scale-110 animate__animated animate__fadeIn"
        src="../assets/images/2151136786.jpg"
        alt="Profile Picture"
      />
      <!-- Text size adjusted for smaller screens -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-neon-pink animate-text-glow animate__animated animate__slideInUp animate__delay-0.5s">
        Hi, I'm Siddharth Sahu
      </h1>

      <p class="text-base sm:text-lg md:text-xl mb-8 text-neon-blue animate__animated animate__slideInUp animate__delay-0.7s">
        A Full-Stack Developer specializing in the MERN stack and creating scalable web applications.
      </p>

      <!-- Button adjusted for smaller screens -->
      <nuxt-link
  to="/projects"
  class="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-sm sm:text-base py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 animate__animated animate__pulse animate__delay-0.9s neon-text">
  Explore My Work
</nuxt-link>


    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Canvas for particles (optional, can be re-added if desired) */

/* Cyberpunk Colors */
.text-neon-pink {
  color: #ff007f;
  text-shadow: 0 0 8px #ff007f, 0 0 16px #ff007f, 0 0 24px #ff007f;
}

.text-neon-blue {
  color: #00c8ff;
  text-shadow: 0 0 8px #00c8ff, 0 0 16px #00c8ff, 0 0 24px #00c8ff;
}

.bg-neon-green {
  background-color: #00ff40;
}

.bg-neon-green-dark {
  background-color: #00cc33;
}

.border-neon-pink {
  border-color: #ff007f;
}

/* Glow Animation for Text */
@keyframes text-glow {
  0%, 100% {
    text-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 30px #ff007f;
  }

  50% {
    text-shadow: 0 0 20px #ff007f, 0 0 40px #ff007f, 0 0 60px #ff007f;
  }
}

.animate-text-glow {
  animation: text-glow 1.5s infinite ease-in-out;
}
/* Neon Colors */
.neon-blue {
  color: #00ffff; /* Cyan */
  text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #0000ff;
}

.neon-purple {
  color: #ff00ff; /* Magenta */
  text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #800080;
}

/* Gradient Background */
.bg-gradient-to-r {
  background: linear-gradient(90deg, rgba(0, 255, 255, 0.8), rgba(255, 0, 255, 0.8));
}

/* Darker hover effect */
.hover\:from-neon-purple:hover {
  background: linear-gradient(90deg, rgba(255, 0, 255, 0.8), rgba(0, 255, 255, 0.8));
}


@import "~animate.css/animate.min.css";
</style>
