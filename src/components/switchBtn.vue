<template>
  <h2>Try: 動態綁定屬性 | 按鈕切換色</h2>
  <!-- 普通按鈕 注意綁定不可用v-model -->
  <button @click="colorToggle" :class="{ btnActive: btnActive }">點我變漂亮</button>
  <!-- 滑動造型按鈕 -->
  <div>
    <label for="">
      <input type="checkbox" id="checkboxCtrl" v-model="btnActive" hidden />
      <div class="bar">
        <div class="controlBtn" @click="colorToggle"></div>
      </div>
    </label>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

// 不想把邏輯寫在computed 但想要切換屬性 >按鈕切換顏色
// 按鈕切換背景

const btnActive = ref(false);
// 定義可以發送的事件名稱，這裡是 'colorToggle'
const emit = defineEmits(['colorToggle']);

const colorToggle = () => {
  btnActive.value = !btnActive.value;
  emit('colorToggle', btnActive.value);
  // 發送 btnActive 的狀態給父組件
};
</script>

<style scoped>
.btnActive {
  background-color: lavender;
  border: 1px solid thistle;
  font-size: 14px;
  font-weight: 500;
  color: indigo;
}

.bar {
  height: 20px; /* 較為常見的開關高度 */
  width: 48px;
  display: inline-block;
  border-radius: 10px;
  background-color: #ff7e57;

  transition: background-color 0.3s;
}
.controlBtn {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #192d2e;
  border: 1px solid #a49375;
  transition: 0.5s;
}

input[type='checkbox']:checked + .bar .controlBtn {
  margin-left: 30px;
  background: white;
}
</style>
