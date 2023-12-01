<script setup>
import ScreenC from "../components/ScreenC.vue";
import BoxUser from "../components/BoxUser.vue"
const head = "font-bold text-6xl mb-5 "

</script>
 
<template>

  <ScreenC>
    <template v-slot:screenC>
      <div  class="rounded-xl p-32 flex flex-col items-center justify-center" style="background-color:#9e546f;">
        <div  class="container">
      <img src="../assets/icons/userIcon.svg" alt="userIcon"/>
    </div>  
        <div :class="head" class="items-center my-2">REGISTER</div>
         
          <BoxUser :type="1" />
        
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
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    }
</style>