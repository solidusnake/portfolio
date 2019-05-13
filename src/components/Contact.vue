<template>
  <!--<div class="hello">-->
    <!--<h1>{{ msg }}</h1>-->
      <div class="project__skill">
        <h1>{{ title }}</h1>
        <p>— — Vous pouvez m’envoyer un message<br> à <span class="cv"><a href="mailto:lakhneche.sofiane@gmail.com">lakhneche.sofiane@gmail.com</a></span> Ou me retrouver par ici →</p>
            <ul class="icons"><a href="http://github.com/solidusnake/" class="fa fa-github"></a> <a href="mailto:lakhneche.sofiane@gmail.com" class="fa fa-envelope"></a></ul>
        
        </div>
<!-- </div>-->
</template>

<script>
export default {
  name: "Contact",
  props: {
    title: String,
    message: String,
    twitter: String,
    Github: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project__skill {
  width: 485px;
  height: 360px;
  padding-top: 100px;
}
p {
  font-size: 150%;
  line-height: 2em;

}
h1 {
  font-family: "PathwayGothicOne";
  font-size: 400%;
}

</style>
