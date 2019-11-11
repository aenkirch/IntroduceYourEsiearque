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

            <div v-else>
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
                  <v-btn
                    icon
                    @click="showEdit = !showEdit"
                  >
                    <v-icon>{{ showEdit ? 'mdi-pencil-outline' : 'mdi-pencil' }}</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    @click="deleteUserCard"
                  >
                    <v-icon>{{ 'mdi-delete' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="showEdit">
                    <v-divider></v-divider>

                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </div>

            <h1 style="margin-top: 10%; margin-bottom: 5%;">Here are ESIEA students you can meet :</h1>

            <div>
              <ul>
                <li v-for="item in usersData" :key="item.name + item.from">
                  <other-student-card :name="item.name" :age="item.age" :from="item.from"></other-student-card>
                </li>
              </ul>
            </div>

            <div v-if="successfulOperation">
              <v-alert type="success" style="position: fixed; bottom: 0;">
                Successful operation !
              </v-alert>
            </div>
            
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import OtherStudentCard from '../components/OtherStudentCard'

  export default {
    name: 'home',
    computed: mapState(['connectedUserName', 'connectedUserData', 'usersData']),
    components: {
      "other-student-card": OtherStudentCard
    },
    data: function() {
      return {
        name: '',
        age: '',
        from: '',
        cards: [],
        showEdit: false,
        successfulOperation: false
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
      },
      deleteUserCard (e) {
        this.axios.post('http://localhost:4000/api/deleteUserData', { // tester la requete vers le deleteUserCard
          login: this.connectedUserName
        })
        .then((res) => {
          this.successfulOperation = true;
          this.$store.commit('setUserData', );
          setTimeout(() => { this.successfulOperation = false } , 3000);
        })
      }
    }
  }
</script>

<style scoped>
  li {
    list-style-type: none;
  }
</style>