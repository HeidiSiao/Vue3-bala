<!-- .prevent 讓你攔截了瀏覽器的表單提交行為，防止頁面刷新，
讓你能夠在後端發送請求並在前端處理結果，而不會重新載入頁面。 -->

<!-- 先有一個表單，這個按鈕送出需要綁定阻止提交的預設行為事件，
 使用者的輸入框需要進行雙向綁定 -->

<template>
  <h2>Try: 留言板 | API 回應 / 阻止提交頁面刷新</h2>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="title" placeholder="Enter a message title" />
    <textarea v-model="content" id="" placeholder="Leave a message"></textarea>
    <button type="submit">submit</button>
  </form>

  <!-- 方法1 <pre> 標籤本身會保留字串中的所有空格和換行 -->
  <!-- <p v-if="refMsg">
    <pre>{{ refMsg }}</pre>
</p> -->

  <p v-if="refMsg" class="break">{{ refMsg }}</p>

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

// 表單數據
const title = ref('');
const content = ref('');
// 回應數據
//如果變數需要保存物件或其他複雜資料，並且初始化時沒有資料，使用 null
const showMsg = ref(null);
const refMsg = ref('');
const url = 'https://jsonplaceholder.typicode.com/posts';

const handleSubmit = async () => {
  // 輸入驗證
  if (!title.value.trim() || !content.value.trim()) {
    refMsg.value = '請輸入文字！';
    console.log(`請勿輸入空格！`);
    return;
  }

  // 包裝資料 -> JSON.stringify(data)
  const data = {
    title: title.value,
    body: content.value,
    id: 1,
  };

  // 發送請求與處理回應
  try {
    const res = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.log(`不是伺服器請求失敗：${res.status} 原因：${res.statusText}`);
      return;
    }

    const resData = await res.json();
    console.log(`成功回應：${resData}`);
    refMsg.value = `Your message: "${resData.id}, ${resData.title}"
already submitted!`;
    // refMsg.value = `Your message: ID:${resData.id}, Title:${resData.title} \n already submitted!`;
    showMsg.value = resData;

    // 清空輸入框
    title.value = '';
    content.value = '';
  } catch (error) {
    console.log(error);
    refMsg.value = `Failed to submit!`;
  }
};
</script>

<style scoped>
/* 方法2 */
.break {
  white-space: pre-line;
}
</style>
