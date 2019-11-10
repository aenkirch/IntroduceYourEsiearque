<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="pseudo"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
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
          if (res.status === 200) {
            let connectedUserData = res.data[this.pseudo];

            delete res.data[this.pseudo];

            this.$store.commit('setUserName', this.pseudo)
            this.$store.commit('setUserData', connectedUserData);
            this.$store.commit('getUsersData', res.data);
            this.$router.replace('home')
          }
        })
    }
  }
}
</script>