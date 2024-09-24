<template>
    <div class="relative min-h-screen flex flex-col items-center justify-center text-gray-100 overflow-hidden">
      <!-- Updated Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-95"></div>
  
      <!-- Animated Floating Elements with New Shapes -->
      <div class="absolute inset-0 z-0">
        <div class="w-96 h-96 bg-indigo-600 opacity-30 rounded-full absolute top-1/4 left-1/5 transform scale-125 animate-float"></div>
        <div class="w-80 h-80 bg-green-500 opacity-30 rounded-full absolute bottom-10 right-1/4 animate-float-reverse"></div>
        <div class="w-60 h-60 bg-orange-400 opacity-20 rounded-full absolute top-1/3 right-1/4 animate-float"></div>
        <div class="w-72 h-72 bg-purple-700 opacity-25 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float-alt"></div>
      </div>
  
      <!-- Content Section -->
      <div class="z-10 text-center">
        <img
          class="rounded-full mx-auto w-40 h-40 mb-6 object-cover border-4 border-purple-600 transform hover:scale-110 transition-all duration-700 animate__animated animate__bounceIn"
          src="/assets/images/profile.jpeg"
          alt="Profile Picture"
        />
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-indigo-300 animate__animated animate__fadeInDown">Hi, I'm Siddharth Sahu</h1>
        <p class="text-base sm:text-lg md:text-xl mb-8 text-gray-200 animate__animated animate__fadeIn animate__delay-1s">
          A Full-Stack Developer specializing in the MERN stack and creating scalable web applications.
        </p>
        <nuxt-link
          to="/projects"
          class="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 animate__animated animate__pulse"
        >
          Explore My Work
        </nuxt-link>
      </div>
  
      <!-- Footer -->
      <footer class="z-10 mt-20 text-center text-gray-400 animate__animated animate__fadeInUp">
        © 2024 Siddharth Sahu - All Rights Reserved
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  /* Updated Floating Animations */
  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1.1);
    }
    50% {
      transform: translateY(-25px) scale(1.2);
    }
  }
  
  @keyframes float-reverse {
    0%, 100% {
      transform: translateY(0) scale(1.1);
    }
    50% {
      transform: translateY(25px) scale(1.2);
    }
  }
  
  @keyframes float-alt {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-30px) scale(1.1);
    }
  }
  
  .animate-float {
    animation: float 10s infinite ease-in-out;
  }
  
  .animate-float-reverse {
    animation: float-reverse 10s infinite ease-in-out;
  }
  
  .animate-float-alt {
    animation: float-alt 10s infinite ease-in-out;
  }
  </style>
  