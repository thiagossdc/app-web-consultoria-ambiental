<template>
    <nav class="floating-navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">Sobre</router-link></li>
        <li><router-link to="/services">Serviços</router-link></li>
        <li><router-link to="/contact">Contato</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .floating-navbar {
    position: top;
    top: 0;
    -ms-flex-align: center;
    background-color: #2c5f2d;
    padding: 10px;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .floating-navbar ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .floating-navbar li {
    color: white;
  }
  
  .floating-navbar li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .floating-navbar li a:hover {
    text-decoration: underline;
  }
  </style>
  