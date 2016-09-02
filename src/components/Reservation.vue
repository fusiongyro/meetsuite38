<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1>Make a Reservation</h1>
    </div>
    <div class="panel-body">
      <dl>
        <dt>Who</dt>
        <dd><a class="editable" @click="openDialog">The NMT Mining Club</a> <i class="glyphicon glyphicon-pencil"></i></dd>

        <dt>When</dt>
        <dd><a class="editable">Saturday, August 4, 12:00–4:30</a> <i class="glyphicon glyphicon-pencil"></i></dd>

        <dt>Where</dt>
        <dd><a class="editable">The Tripp Room, Skeen Library</a> <i class="glyphicon glyphicon-pencil"></i></dd>
      </dl>
    </div>
  </div>

</template>
<style>
</style>
<script>
  export default{
    name: 'Reservation',
    data(){
    },
    components: {
    }
  }
</script>
