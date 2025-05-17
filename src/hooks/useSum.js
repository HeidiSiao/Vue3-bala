import { ref, computed } from 'vue';
//  具名 export
export let sum = ref(1);
export const add = () => {
  sum.value += 5;
};

export const maxSum = computed(() => sum.value * 10);
