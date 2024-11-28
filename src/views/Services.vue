<template>
  <div class="services">
    <h1>Serviços</h1>
    <div class="services-container">
      <!-- Card que contém o menu e o conteúdo -->
      <div class="card">
        <!-- Menu lateral dentro do card -->
        <ul class="menu">
          <li
            v-for="(service, index) in services"
            :key="index"
            @click="selectService(index)"
            :class="{ active: selectedService === index }"
          >
            {{ service.title }}
          </li>
        </ul>
        <!-- Conteúdo dinâmico -->
        <div class="details">
          <h2>{{ services[selectedService].title }}</h2>
          <p>{{ services[selectedService].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Lista de serviços
const services = [
  {
    title: 'Consultoria em ESG',
    description:
      'Oferecemos consultoria personalizada para ajudar empresas a implementar práticas de ESG e alcançar maior sustentabilidade em seus processos.',
  },
  {
    title: 'Relatórios de Sustentabilidade',
    description:
      'Criamos relatórios de sustentabilidade claros e detalhados, alinhados com os padrões internacionais, para demonstrar os impactos socioambientais positivos da sua empresa.',
  },
  {
    title: 'Análises Ambientais',
    description:
      'Realizamos análises ambientais completas para identificar oportunidades de redução de impactos e otimização dos recursos naturais.',
  },
  {
    title: 'Gestão de Recursos Naturais',
    description:
      'Auxiliamos na gestão eficiente de recursos naturais, promovendo o equilíbrio entre o desenvolvimento econômico e a preservação ambiental.',
  },
];

// Estado do item selecionado (inicia com o primeiro serviço)
const selectedService = ref(0);

// Função para selecionar o serviço
const selectService = (index: number) => {
  selectedService.value = index;
};
</script>

<style scoped>

.services {
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #2c5f2d;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1b4332;
}

.services-container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

.card {
  display: flex;
  width: 100%;
  border: 1px solid #d1e7dd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff; 
}

.menu {
  width: 30%; 
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa; 
  border-right: 1px solid #d1e7dd;
}

.menu li {
  padding: 15px 20px;
  cursor: pointer;
  color: #2c5f2d;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s;
}

.menu li:hover {
  background-color: #d1e7dd;
  color: #1b4332;
}

.menu li.active {
  background-color: #2c5f2d;
  color: #ffffff;
  font-weight: 600;
}

.details {
  width: 70%; 
  padding: 20px;
  color: #495057;
}

.details h2 {
  margin-top: 0;
  color: #2c5f2d;
  font-size: 1.5rem;
}

.details p {
  margin: 10px 0 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
  }

  .menu {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #d1e7dd;
  }

  .details {
    width: 100%;
  }
}
</style>
