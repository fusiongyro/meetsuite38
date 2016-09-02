<template>
  <form>
    <h1>Make a Reservation</h1>
    <date-picker :date="tryme"></date-picker>
  </form>
</template>

<script>
  import DatePicker from './DatePicker.vue'

  export default {
    name: 'Hello',

    components: {
      DatePicker
    },

    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!',
        tryme: null
      }
    }
  }
</script>
