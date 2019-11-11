<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    style="margin-bottom: 1%;"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{name}}</v-list-item-title>
        <v-list-item-subtitle>{{age}} | {{from}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
 export default {
  props: {
   name: {
    type: String,
    required: true
   },
   age: {
     type: Number,
     required: true
   },
   from: {
     type: String,
     required: true
   }
  }
 }
</script>