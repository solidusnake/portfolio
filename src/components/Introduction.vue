<template>
  <!--<div class="hello">-->
    <!--<h1>{{ msg }}</h1>-->
      <div class="project__skill">
        <h1>HELLO !</h1>
        <p>— Je suis Sofiane, je suis développeur et j’étudie en deuxième année en DUT Métiers du Multimédia & de l’Internet, à l’IUT de Bobigny.</p>
        </div>
<!-- </div>-->
</template>

<script>
export default {
  name: "Introduction",
  props: {
    name: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project__skill {
  width: 500px;
}
h1 {
  font-family: "PathwayGothicOne";
  font-size: 800%;
}
p {
  font-size: 150%;
  line-height: 2em;
}
</style>
