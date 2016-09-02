<template>
  <div class="form-group has-feedback">
    <input class="form-control" v-model="date" v-date :options="options">
    <i class="glyphicon form-control-feedback glyphicon-calendar"></i>
  </div>
</template>
<style>
</style>
<script>
  import moment from 'moment'
  import Pikaday from 'pikaday'
  import 'pikaday/css/pikaday.css'

  export default {
    name: 'DatePicker',
    components: {
      moment
    },

    props: ['date'],

    data() {
      return {
        options: {
          format: 'MM/DD/YYYY'
        }
      }
    }
  }

</script>
