<template>
    <div class="relative min-h-screen bg-gray-900 text-gray-100">
      <!-- Animated Particle Background -->
      <div class="absolute inset-0 z-0">
        <canvas id="particles"></canvas>
      </div>
  
      <div class="container mx-auto p-6 z-10">
        <h1 class="text-4xl font-bold mb-6 text-center animate__animated animate__fadeIn">Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="project-card animate__animated animate__fadeInLeft animate__delay-0.2s">
            <div class="bg-animation"></div>
            <img src="../assets/images/ecomm.png" alt="E-Commerce Platform" class="w-full h-40 object-contain  rounded-t-lg transition-transform duration-300 transform hover:scale-105" />
            <div class="p-4">
              <h3 class="text-2xl font-bold mb-2 text-blue-500">Secure E-Commerce Platform</h3>
              <p class="text-gray-300 mb-4">
                Developed a secure e-commerce platform using React, Node.js, Express.js, and MongoDB, with JWT-based authentication and bcrypt password encryption.
              </p>
              <a :href="'https://siddstore.vercel.app'" class="text-green-400 hover:underline">Live Link</a>

            </div>
          </div>
          <div class="project-card animate__animated animate__fadeInUp animate__delay-0.4s">
            <div class="bg-animation"></div>
            <img src="../assets/images/loginn.jpeg" alt="User Authentication System" class="w-full h-40 object-contain rounded-t-lg transition-transform duration-300 transform hover:scale-105" />
            <div class="p-4">
              <h3 class="text-2xl font-bold mb-2 text-blue-500">User Authentication System</h3>
              <p class="text-gray-300 mb-4">
                Built a user authentication system with Express.js, incorporating JWT for session management and Bcrypt for password encryption, along with a mobile-first design using Tailwind CSS.
              </p>
            </div>
          </div>
          <div class="project-card animate__animated animate__fadeInRight animate__delay-0.6s">
            <div class="bg-animation"></div>
            <img src="../assets/images/download.jpeg" alt="Heart Disease Detection Model" class="w-full h-40 object-contain  rounded-t-lg transition-transform duration-300 transform hover:scale-105" />
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
  export default {
    mounted() {
      this.initParticles();
    },
    methods: {
      initParticles() {
        const canvas = document.getElementById("particles");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        let particles = [];
        const particleCount = 150; // Adjust number of particles here
  
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            velocity: {
              x: (Math.random() - 0.5) * 2,
              y: (Math.random() - 0.5) * 2,
            },
          });
        }
  
        const animateParticles = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let particle of particles) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
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
  #particles {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
  
  .project-card {
    position: relative;
    overflow: hidden;
    background: linear-gradient(145deg, #2a2d34, #1f2937);
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  }
  
  .bg-animation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    animation: pulse 3s infinite;
    z-index: 1;
  }
  
  .project-card img {
    transition: transform 0.3s ease;
    z-index: 2; /* Ensures the image is above the background animation */
  }
  
  .project-card:hover img {
    transform: scale(1.05);
  }
  
  h3 {
    position: relative;
    z-index: 2; /* Ensures text is above the overlay */
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 0.7;
    }
  }
  /* Neon Particle Background */
#particles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1));
}

/* Project Card Styles */
.project-card {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #1c1c1e, #2b2b2f);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 12px 24px rgba(255, 0, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.7);
}

/* Background Animation */
.bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  animation: pulse 3s infinite;
  z-index: 1;
}

/* Image Styles */
.project-card img {
  transition: transform 0.3s ease;
  z-index: 2; /* Ensures the image is above the background animation */
}

.project-card:hover img {
  transform: scale(1.05);
}

/* Heading Styles */
h3 {
  position: relative;
  z-index: 2; /* Ensures text is above the overlay */
  color: #00ffcc; /* Neon cyan color */
  text-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc, 0 0 20px #00ffcc;
}

/* Pulsating Animation */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

/* Live Link Styles */
a {
  color: #ff77ff; /* Neon magenta color */
  text-shadow: 0 0 5px #ff77ff, 0 0 10px #ff77ff, 0 0 20px #ff77ff;
  transition: color 0.3s ease;
}

a:hover {
  color: #ffffff; /* Change color on hover */
}

  
  @import "~animate.css/animate.min.css"; /* Ensure to install animate.css via npm or link in your project */
  </style>
  