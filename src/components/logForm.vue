<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="username"
                 placeholder="请输入用户名">
        </div>
        <span class="g-form-error" v-if="userErrors.status">{{ userErrors.text }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="password"
                 placeholder="请输入密码">
        </div>
        <span class="g-form-error" v-if="passwordErrors.status">{{ passwordErrors.text }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="login">登录</a>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>
<script>
  export default{
    data (){
      return {
        username : '',
        password : ''
      }
    },
    methods : {
      login(){
        this.$http.get('/api/login')
          .then( (res) => {
            this.$emit('set-user', res.data.username)
          },function (err) {
            console.log(err)
          })
      }
    },
    computed : {
      userErrors (){
        let status = false, text = ''
        if(! /@/g.test(this.username)){
          status = true
          text = "不包含@符号"
        }
        return {
          status,
          text
        }
      },
      passwordErrors(){
        let status = false, text = ''
        if(! /^\w{6,12}$/g.test(this.password)){
          status = true
          text = "长度不合适"
        }
        return {
          status,
          text
        }
      }
    }
  }
</script>
