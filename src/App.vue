<script setup>
import DocStudy from './components/docStudy.vue';
import WatchTest from './components/watchTest.vue';
import SwitchBtn from './components/switchBtn.vue';
import EventTry from './components/eventTry.vue';
import FoodList from './components/foodList.vue';

import { ref } from 'vue';

const themeActive = ref(false);
const onColorToggle = (btnActive) => {
  themeActive.value = btnActive ? true : false;
};
</script>

<template>
  <div id="app" :class="{ themeActive: themeActive }">
    <section>
      <DocStudy />
      <WatchTest />
      <SwitchBtn @colorToggle="onColorToggle" />
      <hr />
      <EventTry />
      <hr />
      <FoodList />
    </section>
  </div>
</template>

<style scoped>
.themeActive {
  background-color: #ffee99;
}
</style>
