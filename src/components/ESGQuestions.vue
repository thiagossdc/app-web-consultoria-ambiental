<template>
  <div class="esg-question">
    <h2>Tire suas dúvidas </h2>
    <textarea v-model="question" placeholder="O que gostaria de saber?" rows="5"></textarea>

    <div v-if="response" class="response">
      <p><strong>Resposta:</strong> {{ response }}</p>
    </div>

    <div v-if="error" class="error">
      <p><strong>Erro:</strong> A pergunta deve ser relacionada a ESG. Por favor, pergunte algo sobre práticas ambientais, sociais ou de governança.</p>
    </div>
  </div>
  <div>
    <button @click="submitQuestion">Enviar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const question = ref("");
const response = ref("");
const error = ref(false);

// Função para validar a pergunta
const isValidESGQuestion = (question: string) => {
  const esgKeywords = ["esg", "ambiental", "social", "governança", "sustentabilidade"];
  return esgKeywords.some(keyword => question.toLowerCase().includes(keyword));
};

const submitQuestion = async () => {
  if (!isValidESGQuestion(question.value)) {
    error.value = true;
    response.value = "";
    return;
  }

  error.value = false;

  try {
    // Requisição para a API do OpenAI (ou GPT-3)
    const result = await axios.post("http://localhost:5000/gpt", { question: question.value });

    // Exibe a resposta do GPT
    response.value = result.data.answer;
  } catch (err) {
    console.error("Erro ao obter resposta:", err);
    response.value = "Desculpe, ocorreu um erro ao buscar a resposta.";
  }
};
</script>

<style scoped>
.esg-question {
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  margin-left: -10px;
  display: flex;
  flex-direction: column;
  
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-left: -10px;
}

button {
  background-color: #1b4332;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2d6a4f;
}

.response {
  margin-top: 20px;
  padding: 10px;
  background-color: #e8f5e9;
  border: 1px solid #c8e6c9;
  border-radius: 5px;
}

.error {
  margin-top: 20px;
  padding: 10px;
  background-color: #ffebee;
  border: 1px solid #f44336;
  border-radius: 5px;
  color: #f44336;
}
</style>
