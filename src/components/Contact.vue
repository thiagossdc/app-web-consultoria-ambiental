<template>
    <form @submit.prevent="sendEmail">
      <h2>Entre em contato</h2>
      <input type="text" v-model="name" placeholder="Seu nome" required />
      <input type="email" v-model="email" placeholder="Seu e-mail" required />
      <textarea v-model="message" placeholder="Sua mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import emailjs from '@emailjs/browser';
  import { ref } from 'vue';
  
  // Estados reativos para os campos do formulário
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  // Função para enviar e-mail usando EmailJS
  const sendEmail = () => {
    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
  
    emailjs
      .send(
        'service_6ex10nd', // Substitua pelo ID do seu serviço no EmailJS
        'template_s5vpljc', // Substitua pelo ID do template
        templateParams,
        'WHEXmFQGa9YVd8Y0r' // Substitua pelo seu ID público do EmailJS
      )
      .then(() => {
        alert('E-mail enviado com sucesso!');
        // Limpar os campos do formulário
        name.value = '';
        email.value = '';
        message.value = '';
      })
      .catch((error) => {
        alert('Erro ao enviar o e-mail. Tente novamente.');
        console.error(error);
      });
  };
  </script>
  
  <style scoped>
  form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  form input, form textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    background-color: #2c5f2d;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
  }
  button:hover {
    background-color: #3b8f3a;
  }
  </style>
  