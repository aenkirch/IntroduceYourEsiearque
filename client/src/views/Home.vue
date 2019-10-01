<template>
  <div class="home">
    <h1>Welcome {{connectedUserName}}</h1>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'home',
  computed: mapState(['connectedUserName'])
}
</script>
