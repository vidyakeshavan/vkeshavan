<template>
  <div id="hi">
    <link href="http://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Londrina+Outline|Londrina+Shadow|Londrina+Solid" rel="stylesheet">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="p4 headbar">
      <div class="navbar navbarclass">
        <router-link to="/" class="workhover" exact> <h1>Vidya<br /> Keshavan </h1>  </router-link>
            <div class="navlinks">
              <router-link to="/" class="workhover" exact>Work</router-link> &nbsp;&nbsp;&nbsp;
              <router-link to="/about" class="abouthover" exact>About</router-link>
            </div>
      </div>
    </div>

    <router-view/>
    
      <!-- <div class="footer">
          <div class="footertext">
          <div class="footersubhead">Hey, you! </div>
            <div class="buttons"> 
              <a href="https://www.linkedin.com/in/vidyakeshavan" class="fa fa-linkedin"></a>
              <a href="mailto:vidyakeshavan91@gmail.com" class="fa fa-envelope"></a>
              <a href="https://medium.com/@vidyakeshavan" class="fa fa-medium"></a>
              <a href="https://www.instagram.com/vidskesh/" class="fa fa-instagram"></a>
              <a href="../assets/img/VidyaKeshavanResume.pdf" download class="fa fa-file"></a>
          </div>
        </div>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>

.router-link {
  text-decoration: none;
}

.router-link-active {
  text-decoration: underline;
}

.back-top {
  position: fixed;
}

body {
  font-family: 'Open Sans', sans-serif;
  background: white;
  }

.p4 {
  padding: 4%;
}

.imgpadtop {
  padding-top: 2%;
}

.imgpadbot {
  padding-bottom: 2%;
}

.p4one {
  padding-left: 4%; 
  padding-right: 4%;
  padding-top: 1%;
  vertical-align: text-top;

}

.background1 {
  background:#F8F4F4;
}

.background2 {
  background:blue;
}

/* .p4two {
  padding-left: 4%; 
  padding-right: 4%;
  padding-top: 1.5%;
} */

h1 {
  font-family: 'Londrina Shadow', cursive;
}

h2{
  font-family: 'Open Sans', sans-serif;
}

.border {
  border-top: lightgray solid .02px;
}

iframe {
  margin-top: 2%;
  margin-bottom:5%;
}

.buttons {
  font-size: 22px;
  letter-spacing: .85em;
  margin-top: 1%;
}

img.ipad {
  width:40%;
}

.hi {
  background-color: blue;
}

.p4.headbar {
  /* background-color: white; */
}

.navbarfull {
  /* background-color: white; */
}

.navbar {
  width: 88%;
  /* padding-left: 20px; */
  position: fixed;
  /* background-color: white; */
  /* border-bottom: 0.02px solid #000; */ */
  margin: 0 0 0 0; 
}


/* .headbar {
  background-color: white;
} */

.navlinks {
  font-size: 30px;
  letter-spacing: 0.02px;
  position: absolute;
  bottom: 0px;
  right: 0;
}

.embed-container { 
  position: relative; 
  padding-bottom: 56.25%; 
  height: 0; 
  overflow: hidden; 
  max-width: 100%; 
  height: auto; 
} 

.embed-container iframe, 
.embed-container object, 
.embed-container embed { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
}


.workhover {
  text-decoration: none;
  font-size: 20px;
  color: #000;
}

.abouthover {
  text-decoration: none;
  font-size: 20px;
  color: #000;
}

.abouttext {
  font-size: 16px;
}

.workhover:hover {
  /* text-decoration: underline; */
}

.abouthover:hover {
  /* text-decoration: underline; */
}

.content {
  font-size: 0;
}

.persona {
  margin-top: 5%;
}

.project {
  background: #fff;
  margin: 0 0 0 0;
  font-size: 36px;
  line-height: 40px;
}

.c1 {
  width: 50%;
  display: inline-block;
}

.minaralhomeimage.hover {
  background: #F9F2F2;
}

.c2 {
  width: 100%;
}

img {
  width: 100%;
}

.device {
  box-shadow: 5px 5px 2.5px lightgray;
}

.footer {
  width: 100%;
  filter: opacity(90%);
  background: whitesmoke;
  text-decoration: none;
  /* position: fixed; */
}

.footertext {
  /* padding-bottom: 2%; */
  margin-left: 10%;
  color: black;
  padding-top: 4%;
  text-decoration: none;
}

.footersubhead {
  font-family: 'Open Sans', sans-serif;
  color: #000000;
  font-size: 1.1em;
  margin-left: 10%;
  /* margin-top: 1.1%; */
}

.footerheadline {
  font-family: 'Londrina Outline', cursive;
  color: #000000;
  font-size: 2.2em;
  margin-left: 10%;
  /* margin-bottom: 4%; */
  text-decoration: none;
  padding-bottom: 4%;
}

.copyright {
  text-align: center;
  font-size: 12px;
  /* background-color: ; */
}

.fa {
    /* font-size: 1.6em; */
    /* width: 30px; */
    /* text-align: center; */
    /* text-decoration:none ;
    margin-bottom: 1.1%; 
    color: #7D7F87; */
}

/* .fa:hover {
  transform: scale(1.8);
  color: #B4BDE7;
} */

.profilepic {
  filter: grayscale(100%);
}

.mr2 {
  margin-right: 1%;
}

.mr1 {
  margin-right: .9%;
}

.mb2 {
  margin-bottom: 5%;
} 

.mt2 {
  margin-top: 10%;
}

.mt5 {
  margin-top: 5%;
}

.mb4 {
  margin-bottom: 10%;
}

figcaption {
  font-family: 'Lato';
  font-style: italic;
  font-size: 1.2vw;
}

.proj-anchor {
  display: block;
  position: relative;
}

.test {
  font-size: 100px;
  color: black;
  font-weight: bold;
  position: relative;
  left: -75px;
  opacity: .07;
  border-left: 2px solid red;
  padding-left: 10px;
}

.proj-info {
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F9F2F2;
  filter: opacity(96%);
  display: none;
}

.proj-anchor:hover .proj-info  {
  display: block;
}

a {
  color: black;
  text-decoration: none;  
}

a:hover {
  color:#91A8D0;
  text-decoration: none;
}

.navbarclass {
  text-decoration: none;
}

.routerlinkclass {
  text-decoration: none;
}

.font1 {
  font-size: 50px;
  font-family: 'Londrina Solid', cursive;
  margin-bottom:1%;
  line-height: 1.1em;
}

.font2 {
  font-size: 2.5vw;
  font-family: 'Lato', sans-serif;
}

.container {
  width: 100%;
  /* margin: 0 auto; */
  /* margin-top: 10%; */
  /* padding: 0 20px; */
}
.column,
.columns {
  width: 100%;
  display: inline-block;
  box-sizing: border-box; }

  @media (min-width: 0px) and (max-width:720px) {
  .container {
    width: 100%;
    padding: 0;
    margin-top: 50%; }
    .aboutpage {
    width: 100%;
    margin-top: 30%; }
    #apps {
    width: 100%;
    margin-top: 30%; }
    .mobile-hide {
      display:none !important;
    }
}

@media (min-width: 400px) {
  .container {
    width: 100%;
    padding: 0;
    margin-top: 35%; }
    .aboutpage {
    width: 100%;
    margin-top: 30%; }
    #apps {
    width: 100%;
    margin-top: 30%; }
}

@media (min-width: 550px) {
  .container {
    width: 100%;
    margin-top: 5%; }
    .aboutpage {
    width: 100%;
    margin-top: 5%; }
    #apps {
    width: 100%;
    margin-top: 5%; }
  .column,
  .columns {
    margin-left: 1%; }
  .column:first-child,
  .columns:first-child {
    margin-left: 0; } 

  .one.column,
  .one.columns                    { width: 4.66666666667%; }
  .two.columns                    { width: 13.3333333333%; }
  .three.columns                  { width: 22%;            }
  .four.columns                   { width: 30.6666666667%; }
  .five.columns                   { width: 39.3333333333%; }
  .six.columns                    { width: 48%;            }
  .seven.columns                  { width: 56.6666666667%; }
  .eight.columns                  { width: 65.3333333333%; }
  .nine.columns                   { width: 74.0%;          }
  .ten.columns                    { width: 82.6666666667%; }
  .eleven.columns                 { width: 91.3333333333%; }
  .twelve.columns                 { width: 100%; margin-left: 0; }

  .one-third.column               { width: 30.6666666667%; }
  .two-thirds.column              { width: 65.3333333333%; }

  .one-half.column                { width: 48%; }

  .offset-by-one.column,
  .offset-by-one.columns          { margin-left: 8.66666666667%; }
  .offset-by-two.column,
  .offset-by-two.columns          { margin-left: 17.3333333333%; }
  .offset-by-three.column,
  .offset-by-three.columns        { margin-left: 26%;            }
  .offset-by-four.column,
  .offset-by-four.columns         { margin-left: 34.6666666667%; }
  .offset-by-five.column,
  .offset-by-five.columns         { margin-left: 43.3333333333%; }
  .offset-by-six.column,
  .offset-by-six.columns          { margin-left: 52%;            }
  .offset-by-seven.column,
  .offset-by-seven.columns        { margin-left: 60.6666666667%; }
  .offset-by-eight.column,
  .offset-by-eight.columns        { margin-left: 69.3333333333%; }
  .offset-by-nine.column,
  .offset-by-nine.columns         { margin-left: 78.0%;          }
  .offset-by-ten.column,
  .offset-by-ten.columns          { margin-left: 86.6666666667%; }
  .offset-by-eleven.column,
  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }

  .offset-by-one-third.column,
  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }
  .offset-by-two-thirds.column,
  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }

  .offset-by-one-half.column,
  .offset-by-one-half.columns     { margin-left: 52%; }

}

html {
  font-size: 45.5%; }

body {
  font-size: 18px;
  /* line-height: 1.6; */
  color: #000; 
  background: #fff}

h1, h2 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300; }
h1 { font-size: 4.9rem; line-height: 1.2;  letter-spacing: -.1rem;}
h2 { font-size: 2.2rem; line-height: 1.25; letter-spacing: -.1rem; }


@media (min-width: 550px) {
  h1 { font-size: 3.8.0rem; }
  h2 { font-size: 3.0rem; }

}

p {

  margin-top: 0; }

.btn-to-top .fa-chevron-up {
    color: grey; 
    font-size: 16px;     
  }

.buttontop {
  color: blue;
}


.demoback {
  background-color: pink;
}

.p10 {
  padding-left: 25%;
  padding-right: 25%;
}

.p10about {
  padding-left: 15%;
  padding-right: 15%;
}

.challenge {
  background: #f4f5f9;
}

.p3 {
  padding-top: 4%;
  padding-bottom: 4%
}

.headline {
  font-family:'Londrina Solid', cursive;
  font-size: 70px;  
  margin-bottom: 0;
  line-height: .5em;
  letter-spacing: -.0009em;
}


.headlinepal {
  font-family: 'Londrina Solid', cursive;
  font-size: 70px;
  margin-bottom: 0;
  line-height: .3em;
  letter-spacing: -.009em;
}

.subhead {
  font-family: 'Open Sans',sans-serif;
  font-size: 30px;
  margin-bottom: -3%;
  line-height: .5em;
} 

.subheadpal {
  font-family: 'Open Sans',sans-serif;
  font-size: 25px;
  margin-bottom: -3%;
  line-height: .9em;
} 

.hero {
  width: 120%;
  position: relative;
  left: -10.25%;
  z-index: -2;
  top: 2vw;
  margin-bottom: 6%;
  margin-top: -6%;
}

#app {
  min-height: 10vh;
  float: right;
  font-size: 18px;
  /* margin-bottom: 1%; */
  text-color: black;
  margin-right: 4%;
}





.herounknown {
  width: 120%;
  position: relative;
  /* left: -10.25%; */
  top: 2vw;
  z-index: -2;
  margin-bottom: 6%;
  margin-top: -6%;
}


.heroabout {
  width: 120%;
  position: relative;
  z-index: -2;
  padding-left: 2%;
}

.heroregular {
  width:100%;
  position: relative;
  /* z-index: -2; */
  top: 2vw;
  margin-bottom: 6%;
  margin-top: -6%;
}

.left {
  transform: rotate(180);
}

.darkhead {
  top: 3vw;
  font-family: 'acme', sans-serif;
  font-size: 30px;
  line-height: 100%;
  color: #000;
  background: #F9F2F2;
}

.darkheadtext {
  margin: 20px;
}

.role {
  vertical-align: top;
}

.csintro {
  /* margin-top: 10%; */
}

.csintrotitles {
  font-family: "Open Sans", sans-serif;
  line-height: 30px;
}

.csintrobody {
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  line-height: 30px;
  text-align: left;
}

.csgoal {
  font-size: 40px;
    /* margin-top: 8%; */
    letter-spacing: -.01em;
    line-height: 1em;
    font-family: 'Londrina Solid', cursive;
}


.cshypothesis {
  vertical-align: top;
  font-size: 50px;
}

.csgoalimg {
  /* margin-top: 20%; */
}

.csgoaltext {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 30px;
}

.pullquote {
  padding-left: 20px;
  position: relative;
  border-left: 15px solid #F9F2F2;
  border-top-left-radius: 2%;
  border-bottom-left-radius: 2%;
  margin: 0 0 50px 0;
}

.quote {
  font-family: "acme", sans-serif;
  font-size: 25px;
}

.sig {
  font-style: italic;
  font-family: "Open Sans", sans-serif;
}

.csprocess {
  font-family: 'Open Sans',sans-serif;
  font-size: 18px;
}



</style>
