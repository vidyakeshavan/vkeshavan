<template>
 <div class="mincontain">


  <div class="container">
        <!-- columns should be the immediate child of a .row -->

        <div class="row p4one">
          <div class="twelve columns headline"> <b>break</b></div>
        </div>

        <div class="row p4one">
          <div class="twelve columns subhead"> Product Design </div>
        </div>

        <div class="row">
          <div class="twelve columns">
            <div class="hero">
              <img src="../assets/img/breakcolor.png" align="top"> 
            </div>
          </div>
        </div>

        <div class="row p10 mb2 mr2">
          <div class="four columns mb2 role">
           <b> Role: </b> User Research, Product Design <br> 
           <b> Status: </b> Ongoing, Student Project Spring '18
          </div>

          <div class="eight columns role">
            break. is a mobile application I have been
            conceptualizing throughout my final semester at
            Parsons. This was conceived to help users monitor 
            their device use and encourage them break their 
            phone-related time management issues.
          </div>
       </div>

       <div class="row p10 imgpadbot mt2">
          <div class="six columns csgoal role">
          <b> Full Case Study Coming Soon! </b>
          </div>
      </div>


    <div class="footer mt2">
        <div class="footertext">
      <router-link to="minARal" exact>  
        <img src="../assets/img/minfooter.png"align="top"> </router-link>  
        <!-- <div class="footersubhead">Want more? </div>
        <div class="footerheadline">Want more? </div> -->
      </div>
    </div>

        </div> 
          
      </div>


      
          
  </div>
 </div> 
</template>

<style>
.title {
  color: red;
}

.mb2 {
  margin-bottom: 1.2em;
}

.mr2 {
  margin-right: 1.5em;
}

.p10 {
  padding-left: 10%;
  padding-right: 10%;
}

.p3 {
  padding-top: 4%;
  padding-bottom: 4%
}


</style>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>
