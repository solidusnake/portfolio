

<template>
  <div class="home">
    <!--   <img alt="Vue logo" src="../assets/logo.png" /> 
<HelloWorld name="Welcome to Your Vue.js App" /> -->
          
        <Intro
    />
    <div class="card__container"       type="button"
      @click="showModal" >
      
    <Card
      name="IREALITY"
      bgColor="#87baD7"
      :backgroundImage="require('../assets/projet_1.png')"
    />
    <hr>
    <Card
      name="PROJET NUANCE"
      bgColor="#f16c67"
      :backgroundImage="require('../assets/projet_2.png')"
    />
    
    <Skill
      name="— En programmation, je maîtrise HTML5, CSS3, JQuery, JSP,  ANGULARJS Je connais aussi le C#, JAVA, PHP, 
et j'ai de l'intérêt pour UNITY 3D
→ Voir mon CV complet"
    />
    <hr>
    <Card
      name="SONIC"
      bgColor="#242E61"
      :backgroundImage="require('../assets/projet_3.png')"
    />
    <Card
      name="MEMORY"
      bgColor="#87BAD7"
      :backgroundImage="require('../assets/projet_4.png')"
    />
    <hr>
        <Contact
      title="CONTACT"
      message="— Vous pouvez m’envoyer un message 
à lakhneche.sofiane@gmail.com Ou me retrouver par ici "
    />
    <Footer
      name="© Sofiane Lakhneche 2017"
    />
            <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Open Modal!
    </button>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Intro from "@/components/Introduction.vue";
import Card from "@/components/Card.vue";
import Skill from "@/components/Skill.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import modal from '@/components/PopIn.vue';
//import PopIn from "@/components/PopIn.vue";



export default {
  name: "home",
  components: {
    //HelloWorld,
    Card,
    Skill,
    Intro,
    Contact,
    Footer,
    //popin de type modal
    modal,
  },
      data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
};
</script>

<style>

.card__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  justify-content: space-around;
  
}
.home {
  margin: 0 auto;
  width: 1000px;
}
</style>
