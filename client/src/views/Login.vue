<template>
  <div class="login">
      <h3>Sign in !</h3>
      <input type="text" v-model="pseudo" placeholder="Pseudo">  <br />
      <input type="password" v-model="password" placeholder="Password"> <br />
      <button @click="login">OK</button>
      <p>You don‘t have an account ? You can <router-link to="signup">create one</router-link></p>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      pseudo: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.axios.post('http://localhost:4000/api/login', {
        login: this.pseudo,
        password: this.password
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200)
          this.$router.replace('home')
      })
    }
  }
}
</script>

<style scoped>
    button {
        margin-top: 20px;
    }
</style>
