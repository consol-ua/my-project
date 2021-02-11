<template>
    <form class="login" >
      <input type="text" placeholder="User name" v-model="login">
      <input type="text" placeholder="Password" v-model="password" v-show="isShowPass">
      <input type="password" placeholder="Password" v-model="password" v-show="!isShowPass">
      <div class="showPass">
          <input type="checkbox" name="showpassord" id="showpassord" @change="changePass">
          <label for="showpassord">Show Password</label>
      </div>
      <button @click.prevent="clickLogin">LOGIN</button>
      <router-link to="/login">Forgot password?</router-link>
    </form>
    <form class="login">
      <input type="text" placeholder="User name" v-model="login">
      <button @click.prevent="clickLogout">LOG OUT</button>
    </form>
    <div class="invalid" v-if="invalidData">
      invalid login or password
    </div>
    <div>
      {{login}}
      {{password}}
      {{ isLogin }}
    </div>
</template>

<script>
const user = {
  login : 'Admin',
  password :'12345',
  isLogin: localStorage.login
  }

export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
      isShowPass: false,
      invalidData: false,
      isLogin: false
    }
  },
  mounted() {
    if (localStorage.login){
      this.isLogin = localStorage.login
      }
  },
  methods: {
    changePass(event) {
      this.isShowPass = event.target.checked
    },
    clickLogin() {
      if(this.login === user.login && this.password === user.password) {
          this.$router.push({ name: 'Home' });
          localStorage.login = true;
          this.isLogin = localStorage.login
        } else { 
          this.invalidData = true
          }
    },
    clickLogout() {
      localStorage.login = false
      this.isLogin = localStorage.login
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  min-width: 300px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  }
  input {
    padding: 10px;
    margin: 5px;
  }
  button {
    padding: 10px;
    margin: 5px;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background: rgb(150, 150, 150);
  }
  .invalid {
    color: red;
    margin: 10px;
    }
</style>