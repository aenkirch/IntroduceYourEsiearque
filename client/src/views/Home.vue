<template>
  <div class="mainDiv">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-col cols="6" style="margin: auto;">

          <h1>Welcome {{connectedUserName}}</h1>
          <v-text-field v-model="age" placeholder="Type your age"> </v-text-field>
          <v-text-field v-model="from" placeholder="What have you done before joining ESIEA Gradute School of Engineering ?"> </v-text-field>
          <v-btn color="normal" class="valider" v-on:click="this.checkForm">Valider</v-btn>

          <div style="margin-top: 10%;">
            <ul>
              <li v-for="item in usersData" :key="item.name + item.from">
                Nom: {{ item.name }} - Age: {{ item.age }} - From: {{ item.from }}
              </li>
            </ul>
          </div>
          
        </v-col>

      </v-container>
    </v-content>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  export default {
    name: 'home',
    computed: mapState(['connectedUserName', 'usersData']),
    data: function() {
      return {
        name: '',
        age: '',
        from: '',
        cards: []
      }
    },
    methods: {
      checkForm (e) {
        /* eslint-disable */
        e.preventDefault();
        this.cards.push({name: this.name, age: this.age, from: this.from});
        console.log(e.target);
        console.log(this.name);
        console.log(this.age);
        console.log(this.from);
        console.log(this.cards);
      }
    }
  }
</script>