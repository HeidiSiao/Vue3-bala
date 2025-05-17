<script setup>
import DocStudy from './components/docStudy.vue';
import WatchTest from './components/watchTest.vue';
import SwitchBtn from './components/switchBtn.vue';
import EventTry from './components/eventTry.vue';
import FoodList from './components/foodList.vue';
import CheckBox from './components/checkBox.vue';
import ApiTest from './components/apiTest.vue';
import { ref } from 'vue';

const isThemeActive = ref(false);
const onColorToggle = (isBtnActive) => {
  // themeActive.value = isBtnActive ? true : false;多餘寫法
  isThemeActive.value = isBtnActive;
};
</script>

<template>
  <div id="app" :class="{ themeClass: isThemeActive }">
    <section>
      <DocStudy />
      <WatchTest />
      <SwitchBtn @colorToggle="onColorToggle" />
      <hr />
      <EventTry />
      <CheckBox />
      <hr />
      <FoodList />
      <hr />
      <ApiTest />
    </section>
  </div>
</template>

<style scoped>
.themeClass {
  background-color: #ffee99;
}
</style>
