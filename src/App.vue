<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" style="padding-right: 270px;"
        >SOFIANE LAKHNECHE</router-link
      >
      <router-link to="/projets">PROJETS</router-link>
      <router-link to="/cv">CV</router-link>
      <router-link to="/about">CONTACT</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "PathwayGothicOne";
  src: url("../src/assets/fonts/PathwayGothicOne-Regular.ttf");
}
@font-face {
  font-family: "Chivo";
  src: url("../src/assets/fonts/Chivo-Regular.ttf");
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
  letter-spacing: 0.2rem;
}

#nav a {
  /*font-weight: bold;*/
  font-family: "Chivo";
  color: #ffffff;
  padding-right: 100px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #a7d0e7;
}
body {
  background-color: #111629;
}
h1 {
  font-family: "PathwayGothicOne";
  font-style: normal;
}
p {
  font-family: "Chivo";
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  body {
    background-color: red;
  }
  .home {
    margin: 0 auto;
    width: 500px;
  }
}
</style>
