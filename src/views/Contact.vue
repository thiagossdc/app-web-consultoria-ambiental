<template>
  <div class="contact">
    <div class="contact-container">
      <div class="contact-card">
        <h1>Contato</h1>
        <form @submit.prevent="sendEmail">
          <div class="form-group">
            <label for="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              placeholder="Digite seu nome" 
              required 
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="Digite seu email" 
              required 
              :class="{ 'invalid': emailError }"
            />
            <span v-if="emailError" class="error-message">Por favor, insira um email válido.</span>
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              placeholder="Digite sua mensagem" 
              required
            ></textarea>
          </div>
          <button type="submit" :disabled="isSubmitting">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import emailjs from "@emailjs/browser";

// Definir os campos do formulário
const form = reactive({
  name: "",
  email: "",
  message: "",
});

// Definir variáveis para validação de email e status do envio
const emailError = ref(false);
const isSubmitting = ref(false);

// Função para validar o email
const validateEmail = (email: string) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

// Função para enviar o email
const sendEmail = async () => {
  // Valida o email
  if (!validateEmail(form.email)) {
    emailError.value = true;
    return;
  }

  emailError.value = false; // Limpa o erro do email se válido

  // Inicia o processo de envio
  isSubmitting.value = true;
  
  try {
    const serviceId = "service_gkiobd2";
    const templateId = "template_ta9r7d6";
    const userId = "y5c8ehbE1t_L64DOY0o5C";

    await emailjs.send(serviceId, templateId, form, userId);
    alert("Email enviado com sucesso!");
    
    // Limpar os campos do formulário após envio
    form.name = "";
    form.email = "";
    form.message = "";
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    alert("Ocorreu um erro ao enviar o email. Tente novamente.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background-color: #f4f4f4; 
  box-sizing: border-box;
  overflow: hidden; 
}

.contact-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 1200px;
}

.contact-card {
  background-color: #fafafa; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  height: auto;
  max-height: 80vh; 
  overflow-y: auto; 

.form-group {
  margin-bottom: 12px;
}

label {
  font-weight: bold;
  display: block;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  padding: 10px 20px;
  background-color: #1b4332;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #2d6a4f;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.invalid {
  border-color: red;
}
</style>
