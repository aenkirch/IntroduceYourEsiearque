<template>
  <div class="signup">
      <h3>Sign up !</h3>
      <input type="text" v-model="pseudo" placeholder="Pseudo">  <br />
      <input type="password" v-model="password" placeholder="Password"> <br />
      <button>Sign up</button> <br />
      <span>or go back to <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>

export default {
  name: 'signup',
  data () {
    return {
      pseudo: '',
      password: ''
    }
  }
}
</script>

<style scoped>
    button {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
