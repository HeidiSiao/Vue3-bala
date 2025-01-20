/* .prevent 讓你攔截了瀏覽器的表單提交行為，防止頁面刷新，
讓你能夠在後端發送請求並在前端處理結果，而不會重新載入頁面。*/

<template>
  <h2>Try: 留言板 | API 回應 / 阻止提交頁面刷新</h2>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="title" placeholder="Enter a message title" />
    <textarea v-model="content" id="" placeholder="Leave a message"></textarea>
    <button type="submit">submit</button>
  </form>

  <p v-if="refMsg">{{ refMsg }}</p>

  <div v-if="showMsg">
    <h3>【Message Data】</h3>
    <p>
      編號：{{ showMsg.id }} <br />
      標題：{{ showMsg.title }}
    </p>
    <p>訊息：{{ showMsg.body }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const title = ref('');
const content = ref('');
//如果變數需要保存物件或其他複雜資料，並且初始化時沒有資料，使用 null
const showMsg = ref(null);
const refMsg = ref('');
const url = 'https://jsonplaceholder.typicode.com/posts';

const handleSubmit = async () => {
  if (!title.value.trim() || !content.value.trim()) {
    console.log(`請勿輸入空格！`);
    return;
  }

  // 發送請求
  try {
    const res = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        body: content.value,
        id: 1,
      }),
    });

    if (!res.ok) {
      console.log(`不是伺服器請求失敗：${res.status} 原因：${res.statusText}`);
      return;
    }

    const data = await res.json();
    console.log(`成功回應：${data}`);
    // 換行會失敗！refMsg.value = `Your message: "${data.id}, ${data.title}" \n already submitted!`;
    refMsg.value = `Your message: ID:${data.id}, Title:${data.title} \n already submitted!`;
    showMsg.value = data;

    title.value = '';
    content.value = '';
  } catch (error) {
    console.log(error);
    refMsg.value = `Failed to submit!`;
  }
};
</script>
