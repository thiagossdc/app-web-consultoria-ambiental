<template>
    <div class="carousel">
      <div class="carousel-wrapper">
        <b-card>
        <div
          v-for="(item, index) in items"
          :key="index"
          style="width: 90%; margin-left:30px;"
          class="carousel-item"
          :class="{ active: currentIndex === index }"
        >
          <slot :item="item" />
        </div>
    </b-card>
      </div>
      <div class="carousel-controls">
        <button @click="prev" class="control prev">❮</button>
        <button @click="next" class="control next">❯</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const props = defineProps<{
    items: Array<any>;
  }>();
  
  const currentIndex = ref(0);
  
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.items.length;
  };
  
  const prev = () => {
    currentIndex.value =
      (currentIndex.value - 1 + props.items.length) % props.items.length;
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    background: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .carousel-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(calc(-100% * var(--current-index)));
  }
  
  .carousel-item {
    flex: 0 0 100%;
    display: none;
    padding: 20px;
  }
  
  .carousel-item.active {
    display: block;
  }
  
  .carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  
  .control {
    color: #414b47;
    background: none;
    border: none;
    font-size: 1.5rem;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 50%;
  }
  
  .control:hover {
    background: #617069;
  }
  </style>
  