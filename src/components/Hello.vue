<template>
  <div class="jumbotron">

    <h1><img class="logo" src="../assets/logo.png">{{ msg }}</h1>
    <input id="tryme" type="text" name="tryme" v-model="tryme">
    <div>{{tryme}}</div>
  </div>
</template>

<script>
  import moment from 'moment'
  import Pikaday from 'pikaday'
  import 'pikaday/css/pikaday.css'

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      tryme: null
    }
  },

  ready() {
    console.log(Pikaday)
    this.picker = new Pikaday({ field: document.getElementById('tryme') })
    console.log(this.picker)
  }
}
</script>
