<template>
  <div class="about">
        <Card
        name="IREALITY"
        :showModal="showModal"
        bgcolor="#87baD7"
        :backgroundImage="require('../assets/projet_1.png')"
      />
  </div>
</template>
<script>
import Card from "@/components/Cv.vue";
import { log } from "util";
//import PopIn from "@/components/PopIn.vue";

export default {
  name: "cv",
  components: {
    //HelloWorld,
    Card,
  }
}
</script>
<style>

</style>
