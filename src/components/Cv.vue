<template>
  <div class="hello">
    <header>
      <div class="container">
        <h1>Sofiane Lakhneche</h1>
      </div>
    </header>

    <div class="container">
      <h2>Experience</h2>
      <div class="rule"></div>
      <div class="item">
        <h3>Stage - Developpeur Réalité Augmentée &nbsp;&nbsp;</h3>
        <h4>Evolutis</h4>
        <h5>2018.</h5>
      </div>
      <div class="item">
        <h3>Stage - Developpeur web et mobie&nbsp;&nbsp;</h3>
        <h4>Inaya Medias</h4>
        <h5>2016—2017. Courbevoie.</h5>
      </div>
      <div class="item">
        <h3>Application ANDROID : NUANCE&nbsp;&nbsp;</h3>
        <h4>Projet universitaire</h4>
        <h5>2016. Université Paris 13</h5>
      </div>

      <h2>Formations</h2>
      <div class="rule"></div>
      <div class="item">
        <h3>Licence pro&nbsp;&nbsp;</h3>
        <h4>Developpeur web et mobile</h4>
        <h5>2017 - 2018. Université Paris 13</h5>
      </div>
      <div class="item">
        <h3>DUT&nbsp;&nbsp;</h3>
        <h4>Metiers du multimedia et de l'internet</h4>
        <h5>Université paris 13</h5>
      </div>
      <div class="item">
        <h3>Baccalauréat&nbsp;&nbsp;</h3>
        <h4>Communication visuelle</h4>
        <h5>Lycee Alfred costes</h5>
      </div>

      <h2>Compétences</h2>
      <div class="rule"></div>
      <div class="item">
        <h3>Design&nbsp;&nbsp;</h3>
        <h4>
          <ul>
            <li>Sketch 3</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>InDesign</li>
          </ul>
        </h4>
        <h3>Code&nbsp;&nbsp;</h3>
        <h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </h4>
      </div>

      <button class="btn btn-primary pl-5 pr-5" @click="download">Download PDF</button>
    </div>

    <footer>
      <div class="container">
        <h3>Contact: &nbsp;&nbsp;</h3>
        <a href="mailto:lakhneche.sofiane@gmail.com">
          <h4>lakhneche.sofiane@gmail.com</h4>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import jsPDF from "jspdf";
export default {
  name: "home",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    download() {
      let pdfName = "Cv Lakhneche Sofiane";
      var doc = new jsPDF();
      var elementHandler = {
        "#ignorePDF": function(element, renderer) {
          return true;
        }
      };
      var source = window.document.getElementsByClassName("container")[1];
      doc.fromHTML(source, 15, 15, {
        width: 180,
        elementHandlers: elementHandler
      });

      doc.output("dataurlnewwindow");
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i");

h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
  font-family: "PathwayGothicOne", serif;
  font-size: 16px;
  font-weight: 300;
  color: #bfbfbf;
  line-height: 50px;
}

header {
  color: #fff;
  background: #87bbd8;
  font-weight: 700;
  font-size: 24px;
}

.container {
  padding: 20px;
}

.item {
  margin: 20px 0;
}

h2 {
  color: #87bbd8;
  font-weight: 700;
  border-bottom: 5px solid #87bbd8;
  display: inline-block;
  line-height: 40px;
  margin-top: 28px;
}

.rule {
  box-sizing: border-box;
  height: 1px;
  background: #87bbd8;
}

h3 {
  color: #979797;
  font-weight: 700;
  margin-top: 20px;
}

.of {
  font-weight: 300;
  font-style: italic;
}

h4 {
}

h4 ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h3,
h4 {
  line-height: 28px;
}

h5 {
  font-size: 10px;
  color: #87bbd8;
  margin-top: 0;
  line-height: 32px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

footer {
  background: #87bbd8;
  color: #fff;
  margin-top: 60px;
}

footer h3 {
  color: #fff;
}

footer h4 {
  color: #eee;
}

@media (min-width: 645px) {
  body,
  h1,
  h2,
  h3,
  h4 {
    font-size: 24px;
  }

  header {
    padding: 30px 0;
    margin-bottom: 16px;
    font-size: 32px;
  }

  .container {
    width: 85%;
    margin: 0 auto;
  }

  h5 {
    font-size: 12px;
  }

  h3,
  h4 {
    display: inline-block;
    vertical-align: top;
    margin-top: 20px;
  }

  h4 ul {
    margin-right: 48px;
  }

  h4 li {
    padding: 0 0 12px 0;
  }

  footer {
    padding: 30px 0 40px;
  }
}

@media (min-width: 820px) {
  .container {
    width: 820px;
    margin: 0 auto;
  }
}
</style>
