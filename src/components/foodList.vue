<!-- 有綁定key沒key->重新渲染(v-if)和原地響應(單純替換子元素)的不同 -->
<!-- 圖片在 v-for 內部使用動態路徑時，需要考慮到 base 路徑(gh-pages)的影響 -->
<template>
  <h1 :key="title">{{ title }}</h1>
  <div class="menu">
    <div v-for="menuItem in menuItems" :key="menuItem.name" class="img-wrap">
      <img :src="`/Vue3-bala/food/${menuItem.img}`" :alt="menuItem.name" class="menu-img" />
      <ul class="option">
        <li>Dish: {{ menuItem.name }}</li>
        <li>Category: {{ menuItem.type }}</li>
        <li>Price: NT${{ formatPrice(menuItem.price) }}</li>
      </ul>
      <button>Add Item</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const title = ref('開張大吉');
const formatPrice = (price) => price.toLocaleString();

//img 相對於 public 資料夾的路徑
const menuItems = reactive([
  { name: 'Steak', price: 2680, type: 'Mains', img: 'steak.jpg' },
  { name: 'Lobster', price: 3200, type: 'Mains', img: 'lobster.jpg' },
  { name: 'Duck', price: 2280, type: 'Mains', img: 'duck.jpg' },
  { name: 'Salmon', price: 1380, type: 'Mains', img: 'salmon.jpg' },
  { name: 'Pasta', price: 1280, type: 'Mains', img: 'pasta.jpg' },
  { name: 'Cake', price: 480, type: 'dessert', img: 'dessert.jpg' },
]);

setTimeout(() => {
  title.value = '請點餐';
}, 1500);
</script>

<style scoped>
.menu {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.img-wrap {
  width: 250px;
  padding: 8px;
  border: 3px double goldenrod;
}

.menu-img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
}

.option {
  font-size: 14px;
  color: #a23419;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  color: #6e1e12;
  text-align: center;

  animation: openIn 1s ease-in-out;
  /* forwards 屬性，這樣動畫結束後元素的最終狀態會被保留 */
}

@keyframes openIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
