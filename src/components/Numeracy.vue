<template>
 <div class="mincontain">


  <div class="container">
        <!-- columns should be the immediate child of a .row -->

        <div class="row p4one">
          <div class="twelve columns headline"> <b>Numeracy</b></div>
        </div>

        <div class="row p4one">
          <div class="twelve columns subhead"> Interactive Data Visualization </div>
        </div>

        <div class="row">
          <div class="twelve columns">
            <div class="hero">
              <img src="../assets/img/numeracycolor.png" align="top"> 
            </div>
          </div>
        </div>

        <div class="row p10">
          <div class="four columns mb2 mr2 role">
           <b> Role: </b> Data Research, Data Visualization <br> 
           <b> Status: </b> Completed, Student Project Spring '18
          </div>

          <div class="seven columns">
              Numeracy is an interactive visualization that
              examines the American education system from a bird’s eye view in relation to other OECD
              countries worldwide. 
              By showcasing comparative data across several
              industry factors, we can clearly see the areas 
              of improvement that our own education system 
              could probably make.
          </div>
       </div>
      
       <div class="row p10 imgpadbot mt2">
        <div class="six columns csgoal">
        <b> Full Case Study Coming Soon! </b>
        </div>
    </div>

    <div class="footer mt2">
        <div class="footertext">
      <router-link to="Break" exact>  
        <img src="../assets/img/breakfooter.png"align="top"> </router-link>  
        <!-- <div class="footersubhead">Want more? </div>
        <div class="footerheadline">Want more? </div> -->
      </div>
    </div>

       <!-- <div class="row p10">
          <div class="six columns csgoal">
          <b> The Research Phase </b>
          </div>
      </div>

      <div class="row p10">
      <div class="four columns role mr2">
        <b> The Inspiration</b> <br>
        This was inspired by my
        experiences tutoring students in 
        math. I coudln’t understand that despite our
         wealth and advancements, Americans still can’t 
         hold a candle to other nations when it came to 
         overall comprehension in mathematics, or numeracy.
      </div>
    </div>


        <div class="row mb2">
          <div class="seven columns mb2">
           <img src="../assets/img/Numeracyresearch.png" align="top">
          </div>
          <div class="four columns role">
            <b> The Hard Numbers </b> <br>   
            This was inspired by my
              experiences tutoring students in 
             math. I couldn’t understand that despite our
             wealth and advancements, Americans still can’t 
            hold a candle to other nations when it came to 
            overall comprehension in mathematics, or numeracy.
        </div>
      </div>       

       <div class="row p4one mb2">
          <div class="four columns"> -->
             <!-- <b> The Hard Numbers </b> <br> 
             -->
          <div>

      </div>
        

          <!-- <div class="six columns cshypothesis">
         <!-- <i> Stress levels in teens are 
          higher than ever because of the quantity and quality of 
          time spent on their smartphones. </i> 
          </div> --> 
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
  margin-right: 1.3em;
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
