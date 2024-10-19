<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

// 自定义验证函数，确保两次输入的密码一致
const validatePasswordConfirm = (rule, value, callback) => {
  if (value !== form.password) {
    callback(new Error('两次输入的密码不一致'))
  } else {
    callback()
  }
}

const form = reactive({
  name: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

const rules = reactive({
  name: [
    { required: true, message: '需要用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名必须在3到10个字符之间', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '需要一个邮件地址', trigger: 'blur' },
    { type: 'email', message: '请输入有效的邮件地址', trigger: ['blur', 'change'] }
  ],
  password: [
    { required: true, message: '需要一个密码', trigger: 'blur' },
    { min: 6, message: '密码至少为6个字符', trigger: 'blur' }
  ],
  passwordConfirm: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { min: 6, message: '密码至少为6个字符', trigger: 'blur' },
    { validator: validatePasswordConfirm, trigger: 'blur' }
  ]
})

const registerForm = ref(null)

const onSubmit = () => {
  registerForm.value.validate((valid) => {
    if (valid) {
      ElMessage.success('表单验证通过！')
      console.log('提交表单:', form)
    } else {
      ElMessage.error('请填写完整并修正表单中的错误')
      return false
    }
  })
}
</script>


<template>
  <div class="register">
    <h1 class="register-title">博客后台管理系统</h1>
    <el-form :model="form" :rules="rules" label-width="auto" ref="registerForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="邮件地址" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮件地址"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"/>
      </el-form-item>
      <el-form-item label="确认密码" prop="passwordConfirm">
        <el-input v-model="form.passwordConfirm" type="password" placeholder="请确认密码"/>
      </el-form-item>
      <el-form-item :style="{ justifyContent: 'center' }">
        <el-button type="primary" @click="onSubmit">创建账户</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
:deep(.el-form-item__content) {
  display: flex !important;
  justify-content: center !important;
  margin-left: 0 !important;
}

.register {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 20px;
}

.register-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  font-weight: 700;
}

@media (min-width: 1024px) {
  .register-title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .register {
    padding: 40px 50px;
  }
}
</style>



<script>
export default {
  name: 'register',
}
</script>
