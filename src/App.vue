<template>
  <div class="app-container">
    <img src="./assets/Images/logo.png" alt="Logo" class="logo" />
    <FloatingNavar />
    <main class="content">
      <router-view />
    </main>
    <b-row>
      <Footer />
    </b-row>
  </div>
</template>

<script setup>
import FloatingNavar from './components/FloatingNavar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilo do logo */
.logo {
  width: 100%;
  margin-right: 20px;
}

/* Navbar flutuante */
header>.floating-navbar {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}

/* Conteúdo principal */
.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

/* Ajustes gerais para evitar espaços indesejados */
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  background-color: #f5f7fa;
}

/* Melhorias de acessibilidade e interação */
header:hover {
  background-color: #f3f4f6;
}

.logo:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}
</style>
