<template>
    <div class="container mx-auto p-6">
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
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* Your existing styles */
  </style>
  