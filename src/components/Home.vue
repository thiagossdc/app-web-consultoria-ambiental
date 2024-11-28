<template>
  <div class="home">
    <div class="contents">
      <Carousel :items="articles">
        <template #default="{ item }">
          <article>
            <h1>{{ item.title }}</h1>
            <p>{{ item.content }}</p>
          </article>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from './Carousel.vue';

const articles = [
  {
    title: "O que é ESG?",
    content:
      "ESG é a sigla para 'Environmental, Social, and Governance' (Ambiental, Social e Governança)...",
  },
  {
    title: "A importância do ESG",
    content:
      "A adoção de práticas ESG ajuda as empresas a atenderem às demandas sociais e ambientais...",
  },
  {
    title: "A importância dos relatórios de sustentabilidade",
    content:
      "Os relatórios de sustentabilidade são ferramentas cruciais para comunicar o desempenho...",
  },
];
</script>

<style scoped>
.home {
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  color: #2c5f2d;
}

.contents {
  display: flex;
  flex-direction: column;
  gap: 20px; 
}

article {
  margin: 20px 0; 
  padding: 20px;
  border: 1px solid #d1e7dd;
  border-radius: 10px;
  background-color: #ffffff;
}

article h1 {
  margin-bottom: 15px;
  font-size: 1.8rem;
}

article p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
