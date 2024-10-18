<template>
  <div class="register">
    <h1 class="register-title">Blog Management System</h1>
    <el-form :model="form" label-width="auto">
      <el-form-item label="Your Name" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Your Email Address" prop="email">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Your Password" prop="password">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create Your Account</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>


.register {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 20px;
}
.register-title{
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
}
</style>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>


<script>
export default {
  name: 'register',
  components: {},
}
</script>/

