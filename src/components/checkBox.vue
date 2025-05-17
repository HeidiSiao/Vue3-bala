<template>
  <div style="border: 2px dotted burlywood; margin-block: 4px; padding-inline: 6px">
    <h3>Choose Your Language:</h3>
    <!-- 條件false，元素被隱藏（display: none），但仍存在。 -->
    <!-- 所以不行 {{ multiCheck.length === 0 ? '尚未選擇任何語言' : multiCheck.join(' ')}}  -->
    <!-- v-show適合頻繁更新，不用computed邏輯會拆在兩個p裡 -->
    <p v-show="!isSelected">尚未選擇任何語言</p>
    <p v-show="isSelected">
      {{ multiCheck.join(' ') }}
    </p>
    <!-- 但當表單提交時，假設複選框未選中，瀏覽器根本不會提交該複選框，
     因為複選框未選中時，瀏覽器不會包含它的值。用radio替代一定會有值被提交 
     如果需要在「選中」和「未選中」兩種情況下都提交值，使用單選按鈕更適合。
     文件建議的核心是：表單提交時，單選按鈕比複選框更能確保提交結果的完整性 -->
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

const multiCheck = ref([]);
const isSelected = computed(() => multiCheck.value.length > 0);
</script>

<style scoped>
/* .break {
  white-space: pre-line;
} */
</style>
