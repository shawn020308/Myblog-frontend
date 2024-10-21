<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import axios from '../http.js' // 确保路径正确
import { useRouter } from 'vue-router'


const form = reactive({
  user_email: '',
  user_password: '',
})
const rules = reactive({
  user_email: [
    { required: true, message: '需要一个邮件地址', trigger: 'blur' },
    { type: 'email', message: '请输入有效的邮件地址', trigger: ['blur', 'change'] }
  ],
  user_password: [
    { required: true, message: '需要一个密码', trigger: 'blur' },
    { min: 6, message: '密码至少为6个字符', trigger: 'blur' }
  ],
})

const loginForm = ref(null)
const router = useRouter()

const onSubmit = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      // 输出表单数据
      console.log('提交表单数据:', form);

      axios.loginUser(form) // 将调用API的部分修改为登录功能
          .then(res => {
            ElMessage.success('登录成功！');
            console.log('响应数据:', res.data);
            // 登录成功后可能需要跳转到首页或其他页面
            router.push({ name: 'home' });
          })
          .catch(err => {
            const errorMessage = err.response?.data?.msg || '登录失败，请重试'; // 如果后端返回了msg，就使用它
            ElMessage.error(errorMessage);
            console.error('登录错误:', err);
          });
    } else {
      ElMessage.error('请填写完整并修正表单中的错误');
      return false;
    }
  });
}


</script>

<template>
  <div class="login">
    <h1 class="login-title">博客后台管理系统</h1>
    <el-form :model="form" :rules="rules" label-width="auto" ref="loginForm">
      <el-form-item label="邮件地址" prop="user_email">
        <el-input v-model="form.user_email" placeholder="请输入邮件地址"/>
      </el-form-item>
      <el-form-item label="密码" prop="user_password">
        <el-input v-model="form.user_password" type="password" placeholder="请输入密码"/>
      </el-form-item>
      <el-form-item :style="{ justifyContent: 'center' }">
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <div class="tips-area">
        <p>还没有账号？现在<router-link to="/register">注册</router-link>一个吧</p>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
:deep(.el-form-item__content) {
  display: flex !important;
  justify-content: center !important;
  margin-left: 0 !important;
}

.login {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 0 26px 2px #eee;
}

.login-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  font-weight: 700;
}

.tips-area{
  padding: 10px 0 0 0;
  text-align: end;
}

@media (min-width: 1024px) {
  .login-title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .login {
    padding: 40px 50px;
  }
}
</style>
