<template>
  <!--<div class="hello">-->
    <!--<h1>{{ msg }}</h1>-->
      <div class="project__skill">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
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
