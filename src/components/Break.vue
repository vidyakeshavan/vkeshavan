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
           <b> Status: </b> Completed, Solo Student Project Spring '18
          </div>

          <div class="eight columns role">
            break. is a mobile application I have been
            conceptualizing throughout my final semester at
            Parsons. This was conceived to help users monitor 
            their device use and encourage them break their 
            phone-related time management issues.
          </div>
       </div>

       <div class="row p10 challenge ">
          <div class="six columns imgpadbot imgpadtop mt2">
              <b> THE INSPIRATION </b>
          </div>
  </div>  

     <div class="row p10 challenge">
        <div class="eight columns imgpadbot csgoal">
        Are We Tech Addicts? 
        </div>
    </div>  

    <div class="row p10 challenge">
        <div class="twelve columns">
            <img src="../assets/img/breakinspiration1.png" align="top"> </div>
      </div>

      <div class="row p10 imgpadtop challenge">
          <div class="twelve columns role mb4 ">
           When I began this project in early 2018, I became increasingly aware of 
           the massive, media-fueled concern that our society is totally tech addicted. 
           Industry experts and parents alike made the case that if adults 
           feel this way about themselves, what does it mean for the teens and children who've never known 
           life without a device? <br> <br>  I began to investigate. What does addiction mean, really? What are the implications?
           How can teenagers
           strike a better balance with their devices  - do the even <i>want</i> to?
             </div>
       </div> 

       <div class="row p10 ">
          <div class="six columns imgpadbot imgpadtop mt2">
              <b> RESEARCH </b>
          </div>
        </div>  

       <div class="row p10">
        <div class="eight columns imgpadbot csgoal">
        Examining the Root Problem 
        </div>
      </div>  


       <div class="row p10 imgpadtop imgpadbot">
          <div class="four columns role mr2">
            <img src="../assets/img/demo1.png" align="top">
          </div>
          <div class="four columns role">
              <img src="../assets/img/demo2.png" align="top">
            </div>
            <div class="four columns role">
                <img src="../assets/img/demo4.png" align="top">
              </div>
        </div>
        

        <div class="row p10 imgpadtop imgpadbot">
            <div class="twelve columns role mr2">
              <img src="../assets/img/animationsbreakfeatures.gif" align="top">
            </div>
          </div>



    <div class="footer">
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
