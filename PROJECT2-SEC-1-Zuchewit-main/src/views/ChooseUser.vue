<script setup>
import ScreenC from "../components/ScreenC.vue";
import DivUser from "../components/DivUser.vue";
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
 
<template>
 <ScreenC>
    <template v-slot:screenC>  
    <DivUser>
      <template v-slot:DivUser>
      <img src="../assets/icons/userIcon.svg" width="170"/>

        <router-link to="/OldUser">
          <button class="text-4xl px-8 btn mt-5 mb-2 buttonblack rounded-full "  >Sign in</button>
        </router-link>  
        <div class="divider text-white">OR</div>
        <router-link to="/NewUser">
          <button class="text-4xl  px-8 btn mt-1 buttonblack rounded-full "  >Register</button>
        </router-link>
   
      </template>
    </DivUser>
    </template>
</ScreenC>
</template>
 
<style scoped>
.buttonblack{
  width: 250px;
    border: 2px solid #724963;
    background-color: #724963;
  color: rgb(255, 255, 255);  
}
.buttonblack:hover{
    
    border:3px solid #ffffff;
    background-color: #ffffff;
   color: #724963; 
}
</style>