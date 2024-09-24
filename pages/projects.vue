<template>
    <div class="relative min-h-screen bg-gray-900 text-gray-100">
      <!-- Animated Particle Background -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <div class="particles"></div>
      </div>
  
      <div class="container mx-auto p-6 z-10">
        <h1 class="text-4xl font-bold mb-6 text-center animate__animated animate__fadeIn">Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="project-card animate__animated animate__fadeInLeft animate__delay-0.2s">
            <img src="../assets/images/ecomm.png" alt="E-Commerce Platform" class="w-full h-40 object-contain rounded-t-lg" />
            <div class="p-4">
              <h3 class="text-2xl font-bold mb-2 text-blue-500">Secure E-Commerce Platform</h3>
              <p class="text-gray-300 mb-4">
                Developed a secure e-commerce platform using React, Node.js, Express.js, and MongoDB, with JWT-based authentication and bcrypt password encryption.
              </p>
              <a href="https://siddstore.vercel.app" class="text-green-400 hover:underline">Live Link</a>
            </div>
          </div>
          <div class="project-card animate__animated animate__fadeInLeft animate__delay-0.4s">
            <img src="../assets/images/loginn.jpeg" alt="User Authentication System" class="w-full h-40 object-contain rounded-t-lg" />
            <div class="p-4">
              <h3 class="text-2xl font-bold mb-2 text-blue-500">User Authentication System</h3>
              <p class="text-gray-300 mb-4">
                Built a user authentication system with Express.js, incorporating JWT for session management and Bcrypt for password encryption, along with a mobile-first design using Tailwind CSS.
              </p>
            </div>
          </div>
          <div class="project-card animate__animated animate__fadeInLeft animate__delay-0.6s">
            <img src="../assets/images/download.jpeg" alt="Heart Disease Detection Model" class="w-full h-40 object-contain rounded-t-lg" />
            <div class="p-4">
              <h3 class="text-2xl font-bold mb-2 text-blue-500">Heart Disease Detection Model</h3>
              <p class="text-gray-300 mb-4">
                Developed a heart disease prediction model using Random Forest, achieving 82% accuracy. Utilized Python, Scikit-learn, Pandas, and Numpy for data preprocessing and feature engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .relative {
    position: relative;
  }
  
  .particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 20%, rgba(0,0,0,0) 80%);
    animation: particles-animation 10s infinite linear;
  }
  
  @keyframes particles-animation {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  
  .project-card {
    background: linear-gradient(145deg, #2a2d34, #1f2937);
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    overflow: hidden;
    color: white;
    position: relative; /* For the pseudo-element */
  }
  
  .project-card:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    transition: opacity 0.3s;
    opacity: 0;
    z-index: 1;
  }
  
  .project-card:hover:before {
    opacity: 1; /* Adds a subtle overlay on hover */
  }
  
  .project-card:hover {
    transform: translateY(-5px) scale(1.03); /* Slight scale effect on hover */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  }
  
  .project-card h3 {
    position: relative;
    z-index: 2; /* Ensures text is above the overlay */
  }
  
  /* Hover animation */
  .project-card:hover {
    background: linear-gradient(145deg, #1f2937, #2a2d34);
  }
  
  @import "~animate.css/animate.min.css"; /* Ensure to install animate.css via npm or link in your project */
  </style>
  