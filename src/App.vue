<template>
  <header>
    <nav>
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">MeetSuite</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="#/">Home</a></li>
          <li><a href="#/hello">Hello</a></li>
          <li><a href="#/reservation">Make a Reservation</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script>
  export default {
    replace: false
  }
</script>
