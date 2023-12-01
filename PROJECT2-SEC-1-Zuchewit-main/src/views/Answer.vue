<script setup>
import ScreenC from "../components/ScreenC.vue";
import { useFetchOneUser } from "../stores/FetchOneUser.js"
import { storeToRefs } from 'pinia'


const setOneUser = useFetchOneUser()
const { currentQueIndex, Ans } = storeToRefs(setOneUser)

const head = "font-bold text-6xl mb-5 "


let arrayAnswer = Ans.value.slice(0, currentQueIndex.value + 1)
console.log(arrayAnswer)  

</script>
<template>
  <ScreenC>
    <template v-slot:screenC>
      <div>
        
        
       
          
        <div class="้ border-4 rounded-xl text-5xl " style="background-color: #724963">

        
        <div class=" text-white grid grid-cols-5 m-5 ">
          <div v-for="oneObject in arrayAnswer" :key="oneObject.number" 
          class="rounded-xl mb-5 flex text-black text-l ">
            <h1 class="text-white text-3xl mr-3 ml-2">{{ oneObject.number }}</h1>
            
            <div class="flex flex-col  ">
              <img class="bg-cover bg-center rounded-lg w-40 h-40" :src="oneObject.picture">
              <h1 class="text-white flex justify-center text-base mt-2"> " {{ oneObject.answer[0] }} " </h1>
            </div>
          </div>
        </div>
        
          <router-link to="/WinLose">
            <button class="text-xl   buttonblack rounded-full">Back</button>
          </router-link>
      </div>

      
      </div>

    </template>
  </ScreenC>
</template>
 
<style scoped>
.buttonblack {
  width: 150px;
  height: 50px;
  margin-left: 80%;
  margin-bottom: 3%;
  background-color: #9a1d1d;
  color: rgb(255, 255, 255);
}

.buttonblack:hover {
  background-color: #ffffff;
  color: rgb(161, 0, 0);
}</style>
