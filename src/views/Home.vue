<template>
  <div class="home">
    <Carousel :items="articles">
      <template #default="{ item }">
        <article>
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </article>
      </template>
    </Carousel>
    <b-row>
      <ESGQuestions />
    </b-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from '../components/Carousel.vue';
import ESGQuestions from '../components/ESGQuestions.vue';

const articles = [
  {
    title: "O que é ESG?",
    content:
      "ESG é a sigla para 'Environmental, Social, and Governance' (Ambiental, Social e Governança). Representa práticas que as empresas adotam para gerenciar seus impactos ambientais, sociais e de governança de maneira sustentável.",
  },
  {
    title: "A importância do ESG",
    content:
      "A adoção de práticas ESG ajuda as empresas a atenderem às demandas sociais e ambientais enquanto promovem transparência e responsabilidade em sua gestão.",
  },
  {
    title: "A importância dos relatórios de sustentabilidade",
    content:
      "Os relatórios de sustentabilidade são ferramentas cruciais para comunicar o desempenho ESG da empresa e seu compromisso com a sustentabilidade.",
  },
];
</script>

<style scoped>
.home {
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #2c5f2d;
}
</style>