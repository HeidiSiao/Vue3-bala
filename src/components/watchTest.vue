<template>
  <h2>Try: 動態綁定屬性 | 輸入字變化</h2>
  <input type="text" :style="dynamicStyle" v-model="text" />
</template>

<script setup>
import { ref, reactive, watch } from 'vue';

// 用 watch + ref 動態調整屬性 > 輸入字變化
const text = ref(''); //watch 需要有一個響應式的值
const dynamicStyle = reactive({
  color: 'maroon',
  fontSize: '20px',
  transition: 'ease-in 0.3s',
});
watch(text, (newText) => {
  if (newText.length % 2 === 0) {
    dynamicStyle.color = 'lightskyblue';
    dynamicStyle.fontSize = '12px';
  } else {
    dynamicStyle.color = 'maroon';
    dynamicStyle.fontSize = '20px';
  }
});
</script>
