<template>
  <div id="app">
    <div class="navbar">
          <h1>Vidya<br /> Keshavan</h1>
          <div class="navlinks">
            <router-link to="/" class="workhover" exact>Work</router-link> &nbsp;&nbsp;&nbsp;
            <router-link to="/about" class="abouthover" exact>About</router-link>
          </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

.router-link-active {
  color: blue !important;
}

body {
  padding: 4%;
  font-family: 'Lato-Light';
}

h1 {
  font-family: 'acme', sans-serif;
}

.navbar {
  width: 100%;
  padding-left: 20px;
  position: relative;
  border-left: 0.025px solid #000;
  margin: 0 0 50px 0;
}

.navlinks {
  font-size: 30px;
  letter-spacing: 0.02px;
  position: absolute;
  bottom: 5px;
  right: 0;
}

.workhover {
  text-decoration: none;
  font-size: 25px;
  color: #000;
}

.abouthover {
  text-decoration: none;
  font-size: 25px;
  color: #000;
}

.workhover:hover {
  text-decoration: underline;
}

.abouthover:hover {
  text-decoration: underline;
}
</style>
