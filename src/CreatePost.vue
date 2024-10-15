<template>
  <div>
    <h1>创建新博文</h1>
    <form @submit.prevent="createPost">
      <input v-model="title" placeholder="标题" required />
      <textarea v-model="content" placeholder="内容" required></textarea>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    createPost() {
      axios.post('http://localhost:3000/api/posts', {
        title: this.title,
        content: this.content
      })
          .then(() => {
            this.title = '';
            this.content = '';
            alert('博文创建成功！');
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
};
</script>
