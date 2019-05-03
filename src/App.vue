<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">SOFIANE LAKHNECHE</router-link>
      <router-link to="/about">PROJETS</router-link>
      <router-link to="/about">CV</router-link>
      <router-link to="/about">CONTACT</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@font-face {
	font-family: "PathwayGothicOne";
	src: url('../src/assets/fonts/PathwayGothicOne-Regular.ttf');
}
@font-face {
	font-family: "Chivo";
	src: url('../src/assets/fonts/Chivo-Regular.ttf');
}
#app {
  /*font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;*/
  color: #ffffff;
}
#nav {
  padding: 30px;
  margin: 0 auto;
  width: 1000px;
  letter-spacing: .2rem;
}

#nav a {
  /*font-weight: bold;*/
  font-family: "Chivo";
  color: #ffffff;
  padding-right: 100px;
}

#nav a.router-link-exact-active {
  color: #A7D0E7;
}
body {
    background-color: #111629;  
}
h1 {
  font-family: "PathwayGothicOne";
  font-style:normal;
}
p {
  font-family: "Chivo";
}
</style>
