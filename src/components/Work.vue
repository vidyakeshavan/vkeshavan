<template>
  <div class="HelloWorld">
    <!-- this is what i copied from codepen -->
   <div id="apps" :class="'item_'+(active+1)">
     <!--transition-group.items(name='slider', mode='out-in', tag='ul')-->
     <ul class="items">
       <li v-for="item, index in items" :class="{ active: index === active }"
        :key="index" @click="jump(index)" @mouseover="jump(index)"><router-link :to="items[active].rlink"> {{ item.title }} </router-link> </li>
          
     </ul>
     <div class="item_text">
       <h2> {{ items[active].subTitle }}</h2>
       <p>
          {{ items[active].text }}
       </p>
        <!-- <router-link :to="items[active].rlink"> </router-link> -->
     </div>
   </div>
   <div class="copyright">
      © Vidya Keshavan 2018
  </div>
  </div>
</template>

<script>

let items = [
  {
    title: "myPal",
    subTitle: "myPal, Website for Montefiore Medical Center",
    text: "Coming Soon: Web design prototype for ESL patients in need of Advanced Directives & end-of-life care. ",
    img: "",
    rlink: "Palcare",
  },

  {
    title: "break",
    subTitle: "Mobile Product Design",
    text: "break is an application that empowers users to break their phone-related wellness and time management issues.",
    img: "",
    rlink: "Break",
  },{
    title: "minARal",
    subTitle: "Experience Design for The Smithsonian",
    text: "MinARal is an augmented reality children's game concept rapidly prototyped for the National Museum of Natural History.",
    img: "",
    rlink: "minARal",
  },
  {
    title: "Unknown",
    subTitle: "360° Branding for a Conference",
    text: "UNKNOWN is a conference that explores the unknown implications technology will have on our future.",
    img: "",
    rlink: "Unknown",   
  }
  //   title: "Palliative Care Pilot",
  //   subTitle: "Rapidly Prototyped AR for The Smithsonian",
  //   text: "MinARal is an augmented reality children's game conceptualized in partnership with the NMNH.",
  //   img: "",
  //   rlink: "Palliativecare",
  // },
];

 
  export default {
  name: 'HelloWorld',
  data() {
    return {
      items: items,
      active: 0,
    };
  },
  methods: {
    jump(index) {
      this.active = index
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Comfortaa:300,400,700&subset=cyrillic");
* {
  margin: 0;
  padding: 30;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
    /* background-color: #F1E4E3; */
}

const StyledLink = styled(RouterLink) {
  color: palevioletred;
  font-size: 1em;
  text-decoration: none;
}

.items a {
color: white;
font-family: 'Londrina Solid', cursive;
text-decoration: none;
font-size: 1.2em;
letter-spacing: .05em;
}

/* #apps.item_1 a  {
color: black;
font-family: 'Londrina Solid', cursive;
text-decoration: none;
font-size: 1.2em;
} */

#apps.item_5 a  {
color: black;
font-family: 'Londrina Solid', cursive;
text-decoration: none;
font-size: 1.2em;
}

#apps {
  min-height: 90vh;
    /* margin-top: 5%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: top;
  color: #fff;
}
#apps >* {
  padding: 1.8em;
  max-width: 350px;
}

#apps .item_text {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;  
  text-align: left;
  /* align-items: ; */
}

item_4 {
  color:#000;
} 
#apps.item_1 {
  background: #000 url("../assets/img/webmock_mypal2.png") center/cover no-repeat;
  /* color:#000; */
}
#apps.item_2 {
    background: #000 url("  ../assets/img/breakcolor.png") center/cover no-repeat;  
}
#apps.item_3 {
  background: #000 url("../assets/img/collection.png") center/cover no-repeat;
}
#apps.item_4 {
  background: #000 url(" ../assets/img/tshirtman2.png") center/cover no-repeat;
}


/* #app.item_5 {
  background: #000 url("../assets/img/timedwellmock.png") center/cover no-repeat;
  color:#000;
} */


ul {
  font-family: 'acme', sans-serif;
}

.items {
  list-style: none;
  counter-reset: num;
  text-align: left;
}
.items:before {
  font-family: "Open Sans", sans-serif;
  color: ;
  content: "projects";
  display: block;
  margin-bottom: 1em;
  letter-spacing: 0.1em;
}
.items li {
  cursor: pointer;
  position: relative;-webkit
  padding-left: 0.8em;
  font-size: 1.4em;
  transition: -webkit-transform .8s .8s;
  transition: transform .8s .8s;
  transition: transform .8s .8s, -webkit-transform .8s .8s;
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;  
}
.items li:hover {
  /* -webkit-transform: scale(1.5);
          transform: scale(1.5); */
  /* margin: 0.5em 0;   */
  /* text-shadow: 0 0 1.5em pink; */
}
.items li.active:after {
  content: none;
}
.items li:before {
  position: absolute;
  left: 0.2em;
  /* counter-increment: num;
  content: '0' counter(num); */
  font-size: 0.5em;
}
.items li:after {
  content: '';
  display: block;
  border-bottom: 1px solid transparent;
  width: 0;
  transition: width 17s;
}
.items li:hover:after {
  width: 100%;
  /* border-bottom: 1px dotted #fff; */
}

@keyframes fade
  5%
    opacity: 0;
  100%
    opacity: 1;



</style>
