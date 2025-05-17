import { reactive } from 'vue';
import axios from 'axios';

// 一個邏輯、單一函式 export default async function getDog() { ... }

export const dogGroup = reactive([
  'https://images.dog.ceo/breeds/bulldog-french/n02108915_720.jpg',
]);

// method
export const getDog = async () => {
  try {
    const url = 'https://dog.ceo/api/breed/bulldog/french/images/random';
    const result = await axios.get(url);
    dogGroup.push(result.data.message);
  } catch (error) {
    alert(error);
  }
};
