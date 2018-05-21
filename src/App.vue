<template>
  <div id="hi">
    <link href="https://fonts.googleapis.com/css?family=Acme|Lato" rel="stylesheet">
    <div class="p4">
      <div class="navbar">
            <h1>Vidya<br /> Keshavan</h1 >
            <div class="navlinks">
              <router-link to="/" class="workhover" exact>Work</router-link> &nbsp;&nbsp;&nbsp;
              <router-link to="/about" class="abouthover" exact>About</router-link>
            </div>
      </div> 
    </div>

    <router-view/>
      <!-- <div class="footer">
      <br>  <a href="mailto:vidyakeshavan91@gmail.com" class="footersubhead">Hey, you! </a> <br>
      <a href="mailto:vidyakeshavan91@gmail.com" class="footerheadline"> Don't be a stranger.</a>
      <button class="btn"> <i class="fa-fa-medium">hello</i> </button>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>

.router-link-active {
  text-decoration: underline;
}

body {
  font-family: 'Lato-light', sans-serif;
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
  font-family: "acme", sans-serif;
}

h2{
  font-family: 'lato', sans-serif;
}


iframe {
  margin-top: 2%;
  margin-bottom:5%;
}

img.ipad {
  width:40%;
}

.navbar {
  width: 100%;
  padding-left: 20px;
  position: relative;
  border-left: 0.025px solid #000;
  margin: 0 0 50px 0;
}

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

.workhover:hover {
  text-decoration: underline;
}

.abouthover:hover {
  text-decoration: underline;
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

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 15%;
  background-color: #F9F2F2;
  filter: opacity(90%);
  color: white;
}

.footersubhead {
  font-family: 'Lato';
  font-weight: bolder;
  color: #000000;
  padding-left: 4%;
  margin-bottom:0px;
  margin-top: -10px;
  font-size: 1.1em;
  text-decoration: none;
}

.footerheadline {
  font-family: 'acme', sans-serif;
  color: #000000;
  padding-left: 4%;
  font-size: 2em;
  margin-top: 0;
  text-decoration: none;
}

.fa-fa-medium {
  color: #000;
  float: right;
  display: inline-block;
}

.btn {
  float: right;
}
.profilepic {
  filter: grayscale(100%);
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
}

.font1 {
  font-size: 5.5vw;
  font-family: 'acme', sans-serif;
  margin-top: 35%;
  margin-bottom:0%;
  margin-left: 8%;
}

.font2 {
  font-size: 2.5vw;
  font-family: 'Lato', sans-serif;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
.column,
.columns {
  width: 100%;
  display: inline-block;
  box-sizing: border-box; }

@media (min-width: 400px) {
  .container {
    width: 100%;
    padding: 0; }
}

@media (min-width: 550px) {
  .container {
    width: 100%; }
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
  font-weight: 400;
  color: #000; 
  background: #fff}

h1, h2 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300; }
h1 { font-size: 2.9rem; line-height: 1.2;  letter-spacing: -.1rem;}
h2 { font-size: 2.2rem; line-height: 1.25; letter-spacing: -.1rem; }


@media (min-width: 550px) {
  h1 { font-size: 3.8.0rem; }
  h2 { font-size: 3.0rem; }

}

p {
  margin-top: 0; }

.p10 {
  padding-left: 15%;
  padding-right: 15%;
}

.p3 {
  padding-top: 4%;
  padding-bottom: 4%
}

.headline {
  font-family: 'acme', sans-serif;
  font-size: 10vw;
  line-height: 0%;
  margin-bottom: 0;
  line-height: 1em;
}

.subhead {
  font-family: 'Lato-light',sans-serif;
  font-size: 3.75vw;
  line-height: 0%;
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
  font-family: "lato-light", sans-serif;
  line-height: 30px;
}

.csintrobody {
  font-size: 18px;
  font-family: "lato-light", sans-serif;
  line-height: 30px;
  text-align: left;
}

.csgoal {
  font-size: 4rem;
    margin-top: 8%;
    font-family: 'lato-light', sans-serif;
}

.cshypothesis {
  vertical-align: top;
  font-size: 50px;
}

.csgoalimg {
  /* margin-top: 20%; */
}

.csgoaltext {
  font-family: "lato-light", sans-serif;
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
  font-family: "lato-light", sans-serif;
}

.csprocess {
  font-family: 'lato-light',sans-serif;
  font-size: 18px;
}



</style>
