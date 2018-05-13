<template>
  <div class="HelloWorld">
    <!-- this is what i copied from codepen -->
   <div id="app" :class="'item_'+(active+1)">
     <!--transition-group.items(name='slider', mode='out-in', tag='ul')-->
     <ul class="items">
       <li v-for="item, index in items" :class="{ active: index === active }" :key="index" @click="jump(index)">{{item.title}}</li>
     </ul>
     <div class="item_text">
       <h2> {{ items[active].subTitle }}</h2>
       <p>
         <!--sup {{ active+1 }} -->{{ items[active].text }}
       </p>
        <router-link :to="items[active].rlink">See more </router-link>
     </div>
   </div>
  </div>
</template>

<script>

let items = [
  {
    title: "break",
    subTitle: "Product Design",
    text: "break is an application that empowers users to break their phone-related wellness and time management issues.",
    img: "",
    rlink: "",
  },{
    title: "minARal",
    subTitle: "Rapidly Prototyped AR for The Smithsonian",
    text: "MinARal is an augmented reality children's game conceptualized in partnership with the NMNH.",
    img: "",
    rlink: "minARal",
  },
  {
    title: "UNKNOWN",
    subTitle: "Brand Identity",
    text: "UNKNOWN is a conference that explores the unknown implications technology will have on our future.",
    img: "",
    rlink: "",   
  },{
    title: "Numeracy",
    subTitle: "Interactive Data Visualization",
    text: "Numeracy is a data visualization that examines the American education system from a bird eye's view.",
    img: "",
  },
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
  font-family: 'lato-light', sans-serif;
    /* background-color: #F1E4E3; */
}

#app {
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: top;
  color: #fff;
}
#app >* {
  padding: 1.8em;
  max-width: 350px;
}

#app .item_text {
  font-family: "lato-light", sans-serif;
  font-size: 18px;
  /* align-items: ; */
}

#app .item_rlink {
  color: pink;
}

#app.item_1 {
  color: #fff;
}
#app.item_4 {
  color:#000;
}
#app.item_1 {
  border-left: 4px solid #000;
  background: #000 url("  ../assets/img/breakmock.png") center/cover no-repeat;  
}
#app.item_2 {
  background: #000 url("../assets/img/smithsonianexp.png") center/cover no-repeat;
}
#app.item_3 {
  background: #000 url(" ../assets/img/unknown_tshirt_black_back.png") center/cover no-repeat;
}
#app.item_4 {
  background: #000 url("../assets/img/numeracymock.png") center/cover no-repeat;
}



.items {
  list-style: none;
  counter-reset: num;
}
.items:before {
  font-family: "lato-light", sans-serif;
  color: ;
  content: "check it out, don't be shy";
  display: block;
  margin-bottom: 1em;
  letter-spacing: 0.1em;
}
.items li {
  cursor: pointer;
  position: relative;
  padding-left: 0.8em;
  font-size: 1.2em;
  transition: -webkit-transform 0.3s 0.2s;
  transition: transform 0.3s 0.2s;
  transition: transform 0.3s 0.2s, -webkit-transform 0.3s 0.2s;
  margin-bottom: 10px;
  font-family: "lato-light", sans-serif;  
}
.items li:hover {
  -webkit-transform: scale(1.4);
          transform: scale(1.4);
  margin: 0.1em 0;  
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
  transition: width 0.3s;
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
