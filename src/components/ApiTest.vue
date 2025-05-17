<template>
  <h2>當前總和: {{ sum }}，放大術: {{ maxSum }}</h2>
  <button @click="add">點我總和再++</button>

  <button @click="getDog">給我一隻小狗勾</button>
  <div class="frame-s">
    <img v-for="(dog, index) in dogGroup" :src="dog" :key="index" class="dog-img" />
  </div>
</template>

<script setup>
import { sum, add, maxSum } from '@/hooks/useSum';
import { dogGroup, getDog } from '@/hooks/useDog';
import { onMounted } from 'vue';

// DOM一掛上，就執行
onMounted(() => {
  add();
});
</script>

<style scoped>
.dog-img {
  border: 2px double rosybrown;
  width: 100%;
  height: 20vh;
  padding: 0.2rem;
  object-fit: contain;
}
.frame-s {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}
</style>
