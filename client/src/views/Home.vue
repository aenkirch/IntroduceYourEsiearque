<template>
  <div class="mainDiv">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="2" style="margin: auto;">

            <h1 style="margin-bottom: 5%;">Welcome {{connectedUserName}}</h1>

            <div v-if="!connectedUserData">
              <v-text-field v-model="age" placeholder="Type your age"> </v-text-field>
              <v-text-field v-model="from" placeholder="What have you done before joining ESIEA Gradute School of Engineering ?"> </v-text-field>
              <v-btn color="normal" class="valider" v-on:click="this.checkForm">Valider</v-btn>
            </div>

            <div v-else> <!--FAIRE UNE CARTE AVEC LA DATA DE L‘USER CONNECTE OU IL POURRA CRUD-->
              <v-card
                class="mx-auto"
                max-width="344"
                outlined
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">{{connectedUserName}}</v-list-item-title>
                    <v-list-item-subtitle>I am {{connectedUserData.age}} and I come from {{connectedUserData.from}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                  <v-btn text>Edit</v-btn>
                  <v-btn text @click="d">Delete</v-btn>
                </v-card-actions>
              </v-card>
            </div>

            <h1 style="margin-top: 10%; margin-bottom: 5%;">Here are ESIEA students you can meet :</h1>

            <div>
              <ul>
                <li v-for="item in usersData" :key="item.name + item.from">
                  <v-card
                    class="mx-auto"
                    max-width="344"
                    outlined
                    style="margin-bottom: 1%;"
                  >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{item.age}} | {{item.from}}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </li>
              </ul>
            </div>
            
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  export default {
    name: 'home',
    computed: mapState(['connectedUserName', 'connectedUserData', 'usersData']),
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

<style scoped>
  li {
    list-style-type: none;
  }
</style>