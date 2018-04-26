<template>


  <div class="HelloWorld">
   
    <h2>Product & <br> Communication Designer </h2>

     <div class="content">
       <div class="project c2">
         <router-link to="/minARal" class="proj-anchor">
           <img src="../assets/img/minaralhome.png" class="minaralhomeimage">
           <div class="proj-info"> 
             <div class="font1">MinARal
              <div class="font2">Experience Design for Smithsonian Museum </div>
             </div> 
          </div>
         </router-link>
       </div>

       <div class="project c1">
        <img src="../assets/img/breakhome.png" />
      </div>

        <div class="project c1">
          <img src="../assets/img/numeracyhome.png" />
        </div>

        <div class="project c2">
          <img src="../assets/img/slatehome.png" />
        </div> 
        
        <div class="project c2">
            <img src="../assets/img/timedwellhome.png" />
        </div>         

     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'myprorject',
      description: 'mydescription',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
