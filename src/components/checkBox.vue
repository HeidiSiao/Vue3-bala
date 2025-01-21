<template>
  <div>
    <input
      id="checked"
      class="checkbox"
      type="checkbox"
      v-model="isChecked"
      :true-value="showOn"
      :false-value="showOff"
    />
    <label for="checked">這裡有勾勾</label>
    <p>{{ isChecked }}</p>
  </div>

  <div style="border: 2px dotted burlywood; margin-block: 4px; padding-inline: 6px">
    <h3>Choose Your Language:</h3>
    <!-- 條件false，元素被隱藏（display: none），但仍存在。 -->
    <!-- 所以不行 {{ multiCheck.length === 0 ? '尚未選擇任何語言' : multiCheck.join(' ')}}  -->
    <!-- v-show適合頻繁更新，不用computed邏輯會拆在兩個p裡 -->
    <p v-show="!isSelected">尚未選擇任何語言</p>
    <p v-show="isSelected">
      {{ multiCheck.join(' ') }}
    </p>

    <input id="eg" v-model="multiCheck" value="English" type="checkbox" />
    <label for="eg">English</label>
    <input id="ch" v-model="multiCheck" value="Chinese" type="checkbox" />
    <label for="ch">Chinese</label>
    <input id="jp" v-model="multiCheck" value="Japanese" type="checkbox" />
    <label for="jp">Japanese</label>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const isChecked = ref('沒勾勾');
const showOn = ref('打勾勾');
const showOff = ref('不勾勾');

const multiCheck = ref([]);
const isSelected = computed(() => multiCheck.value.length > 0);
</script>

<style scoped>
/* .break {
  white-space: pre-line;
} */
</style>
