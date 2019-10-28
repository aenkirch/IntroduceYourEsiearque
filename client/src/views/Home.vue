<template>
  <div class="mainDiv">
    <h1>Welcome {{connectedUserName}}</h1>
    <input v-model="age" placeholder="Type your age">
    <input v-model="from" placeholder="What have you done before joining ESIEA Gradute School of Engineering ?">
    <button class="valider" v-on:click="this.checkForm">Valider</button>

    <div>
      <ul>
        <li v-for="item in usersData" :key="item.name + item.from">
          Nom: {{ item.name }} - Age: {{ item.age }} - From: {{ item.from }}
        </li>
      </ul>
    </div>
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
