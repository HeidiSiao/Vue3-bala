<script setup>
import { ref, computed } from 'vue';
// 用戶輸入
const inputMsg = ref('');
const prefixedMsg = computed(() => `使用v-text： ${inputMsg.value}`);

const guessNum = ref();
const minNum = ref(1);
const maxNum = ref(10);
let answer = Math.floor(Math.random() * 10) + 1;

//動態顯示遊戲結果
const guessResult = ref('');

// 監聽 guessNum 變化，並根據新的猜測更新結果
const guessRule = () => {
  // 空格會被轉換成 0、寬鬆比較避免NaN為false
  //v-model.lazy.number="guessNum"，將輸入的非數字字符轉換為 NaN。
  // isNaN 針對NaN狀況 因為NaN == 0 false

  if (guessNum.value == 0 || isNaN(guessNum.value)) {
    return (guessResult.value = `你沒有輸入任何數字!`);
  } else if (guessNum.value > answer) {
    maxNum.value = guessNum.value - 1;
    guessResult.value = `範圍：${minNum.value} ~ ${maxNum.value}`;
    guessNum.value = '';
  } else if (guessNum.value < answer) {
    minNum.value = guessNum.value + 1;
    guessResult.value = `範圍：${minNum.value} ~ ${maxNum.value}`;
    guessNum.value = '';
  } else {
    guessResult.value = '終於猜對了🤨';
    guessNum.value = '';
    answer = Math.floor(Math.random() * 10) + 1;
    minNum.value = 1;
    maxNum.value = 10;
  }
};
</script>

<template>
  <h2>Try: 雙向綁定這樣操</h2>
  <input type="text" v-model.lazy="inputMsg" placeholder="輸入完回車！" />
  <p>使用插值：{{ inputMsg }}</p>
  <p v-text="prefixedMsg"></p>
  <hr />

  <h2>Try: 猜猜數字 Start</h2>
  <input
    type="number"
    v-model.lazy.number="guessNum"
    placeholder="猜數字1~10"
    :min="minNum"
    :max="maxNum"
  />
  <button @click="guessRule" class="guessBtn">Check Answer</button>
  <p v-text="guessResult"></p>
  <hr />
</template>
