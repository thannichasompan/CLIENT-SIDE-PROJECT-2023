<script setup>
import ScreenC from "../components/ScreenC.vue";


</script>
 
<template>

<ScreenC>
    <template v-slot:screenC> 
      <div  class="rounded-xl p-32 " style="background-color:#9e546f;">
      <div class="flex">
        <div class="text-white text-8xl font-semibold font-sans mb-10">PACS</div>
          <svg style="color:#eb90b1;" class="m-2 " xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="currentColor" d="M14.7 2.2h1.5c1.1 0 2 .9 2 2v6.4l-3.5-8.4m5.4 1.6l1.3.6c1 .4 1.5 1.6 1.1 2.6l-2.4 5.9V3.8M18 15.5l-5-12c-.3-.8-1-1.2-1.8-1.2c-.3 0-.5.1-.8.2L3 5.5C2 5.9 1.5 7 2 8l5 12c.3.8 1 1.2 1.8 1.2c.3 0 .5 0 .8-.2l7.4-3c.8-.3 1.2-1 1.2-1.8c-.1-.2-.1-.5-.2-.7m-6.6-.5l-3.2-2.4l.4-4l3.2 2.4l-.4 4"/></svg> 
          <div class="text-white text-8xl font-semibold font-sans mb-10">GAME</div>
      </div>
      
    
     <router-link to="/ChooseUser"> 
      <button class="text-4xl ml-48 btn mt-5 buttonblack rounded-full " >START GAME</button>
     </router-link>
      
    
     </div>
   
  </template>
</ScreenC>
    

</template>
 
<style scoped>
.buttonblack{
    border: 2px solid #724963;
    background-color: #724963;
  color: rgb(255, 255, 255);  
}
.buttonblack:hover{
    
    border:3px solid #53a367;
    background-color: #53a367;
   color: rgb(255, 255, 255); 
}
</style>