<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Users</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <router-view/>
    </div>
    <footer class="footer bg-light">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Code with &hearts; by Dian Pratama.</span>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  text-align: center;
  font-size: .8em;
}
.footer span {
  margin: 0 .35em;
}
.footer a {
  color: #eaeaea;
}
</style>
