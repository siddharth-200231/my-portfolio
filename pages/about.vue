<template>
    <div class="container mx-auto p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
      <h1 class="text-4xl font-bold text-green-400 mb-4 animate__animated animate__zoomIn">About Me</h1>
      <p class="mt-4 text-lg text-gray-300 leading-relaxed animate__animated animate__fadeIn animate__delay-0.5s">
        I’m Siddharth Sahu, a passionate and detail-oriented Full-Stack Developer with a solid foundation in the MERN stack. I specialize in building secure and scalable web applications with a focus on both front-end and back-end development. With hands-on experience in implementing JWT-based authentication, API integrations, and database management, I aim to create responsive and optimized user experiences. Currently pursuing a B.Tech in Computer Science and Engineering, I have worked on various projects, from secure e-commerce platforms to machine learning models for heart disease detection.
      </p>
      <div class="mt-6">
        <h2 class="text-2xl font-semibold text-green-400 mb-2 animate__animated animate__fadeIn animate__delay-1s">Skills</h2>
        <ul class="list-disc list-inside mt-2 text-gray-300">
          <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">MERN Stack Development</li>
          <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">JWT-based Authentication</li>
          <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">API Integrations</li>
          <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">Database Management</li>
          <li class="transition-transform transform hover:scale-105 hover:text-green-400 animate__animated animate__fadeIn animate__delay-1.5s">Responsive Web Design</li>
        </ul>
      </div>
      <div class="mt-6">
        <h2 class="text-2xl font-semibold text-green-400 mb-2 animate__animated animate__fadeIn animate__delay-2s">Projects</h2>
        <p class="mt-2 text-gray-300 animate__animated animate__fadeIn animate__delay-2.5s">
          I've worked on several projects, including secure e-commerce platforms and machine learning applications for heart disease detection. Feel free to check out my work in the <nuxt-link to="/projects" class="text-green-400 underline hover:text-green-300 transition duration-300">Projects</nuxt-link> section.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  /* Add styles specific to the about page here */
  
  .container {
    background: rgba(31, 41, 55, 0.9); /* Dark background with some transparency */
  }
  
  /* Import animations from Animate.css */
  @import "~animate.css/animate.min.css"; /* Ensure to install animate.css via npm or link in your project */
  </style>
  