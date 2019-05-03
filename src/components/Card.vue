<template>
  <div class="hello">
  <!--  <div id="demo">
      <button v-on:click="show = !show">
        Permuter
      </button>
    </div> -->
    <!--<h1>{{ msg }}</h1>-->
    <transition name="fade">

      <div v-if="show" class="project__item project__item--lightblue"  style="visibility: visible;" v-bind:style="{ backgroundColor: bgColor}">
        <img class="project__cover" v-bind:style="{ backgroundImage: `url(${backgroundImage})`}">
        <div class="project__content">
          <p class="project__tags">
            Stage   .   Application  .  Vidéos  .  RA
          </p>
          <h3 class="project__title">{{ name }}</h3>
          <p class="project__summary">
            — Application de réalité augmentée pour la presse développée lors de mon stage universitaire.
            <br>
            <a href="https://sofianelakhneche.000webhostapp.com/images/ireality.mp4"
            target="_blank">
              Voir la vidéo de présentation</a>
          </p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      show: true,
    }
  },
  props: {
    name: String,
    bgColor: String,
    backgroundImage: String,
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project__item {
  width: 485px;
  height: 777px;
}
.project__item .project__cover {
  width: 485px;
  height: 360px;
  display: inline-block;
  background-size: 100%;
  background-repeat: no-repeat;
}
.project__item .project__content {
  padding: 20px;
}
/* MODIFIER */
.project__item--darkblue {
  background-color: #242e61;
  margin-top: 150px;
}
.project__item--lightblue {
  margin-top: 50px;
}
.project__item--pink {
  background-color: #f16c67;
  margin-top: 150px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.bonjour {
  color: white;
}
h3 {
  font-family: "PathwayGothicOne";
  font-size: 300%;
}
.project__summary {
  
}
</style>
