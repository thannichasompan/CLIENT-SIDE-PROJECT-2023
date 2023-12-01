<script setup>
import {ref,onMounted} from "vue"
import { useRouter } from 'vue-router'
import { useFetchOneUser } from "../stores/FetchOneUser";
import ScreenC from "../components/ScreenC.vue";

const router = useRouter()
  const User =  useFetchOneUser()
const {Id,historys,OneUserData,getUser} = User

const hover = ref(true)
const hovers = ref(true)
const head = "font-bold text-6xl mb-5 "

console.log(Id.value)
console.log(Id)

console.log(historys)
console.log(historys.value)
const oneUser = ref()
onMounted(async()=>{
  oneUser.value = getUser()
 
})
const valueText =ref(true)
const text = ref('')

const changebtn =()=>{
  valueText.value = !valueText.value
    if (valueText.value === false) {
      text.value = 'Cancle'
    }else {
      text.value = ''
    }
}

const list = historys.value
const deleteHistory = async(round)=>{
  const newSetHistory = ref(list.filter((eachround) =>eachround.round !=round ))
  let result = confirm('Do you want to delete this history round?')
  if(result){
    try{
          const res = await fetch(`http://localhost:5000/users/${Id}`,{
              method :'PUT',
              headers:{'content-type':'application/json'},
              body :JSON.stringify({
                id: Id,
                username: OneUserData?.username,
                pin:OneUserData?.pin,
                historys: newSetHistory.value
              })
          })
          if (res.status===200) {
              const foundIndex =historys.value.findIndex((history)=>history.round ===round)
              historys.value.splice(foundIndex,1)  
          }
      }
      catch(error){
          console.log('error : ',error)
      }
  }    
}

const DeleteUser = async (id) => {
  let result = confirm('Do you want to delete this account')
  if(result){
  try {
    
    const res = await fetch(`http://localhost:5000/users/${Id}`, {
      method: 'DELETE'
    })
    if (res.status === 200) {
    router.push('/')
    }
  } catch (error) {
    console.log('error:', error)
  }
}
}
console.log(oneUser)
</script>
 
<template>
  <ScreenC>
    <template v-slot:screenC >

    <div class="w-screen h-screen font-mono flex justify-center items-center " >
   

       
        <div  class="rounded-xl p-10  flex flex-col  items-center "  >
          <img src="../assets/icons/userIcon.svg" width="170"/>
          <h1 class="text-white font-bold text-5xl mb-3 flex justify-center drop-shadow-md"> Username: {{OneUserData?.username}}</h1>
          
          <div class="rounded-xl p-10  flex flex-col items-center mt-10">
            <router-link to="/ChooseMode">
            <button class="text-3xl btn mt-5 buttongreen w-full  rounded-full " >start</button>
          </router-link> 
          <router-link to="/HowToPlay">
            <button class="text-3xl btn mt-5 buttonHowto w-full rounded-full "  >How to play</button>
          </router-link> 
          <router-link to="/">
            <button @click="" class="text-3xl btn mt-5 buttonredout  rounded-full w-80" >Log Out</button>
          </router-link> 
            
          </div>

        </div>

      
      <div class="rounded-xl p-10 flex flex-col " style="background-color:#D683A1;">
        <span  class="text-white font-bold text-4xl mb-3 flex justify-center drop-shadow-md">Your History</span>

        
        <div class="flex font-bold text-xl mb-2 text-slate-700">
          <h1 class="mr-32 ml-6">Round</h1>
          <h1 class="mr-32 ml-5">Score</h1>
          <h1 class="ml-">Mode</h1>
        </div>

        
        <div class=" scrollable rounded-xl flex flex-col p-5 " style="background-color:#B66884;">     
          <div v-for="round in historys" :key="historys.round" class="  rounded-xl mb-5 w-full flex text-white text-l" >
            <div class="overflow-y-auto rounded-xl mb-5 w-full flex text-white text-l" style="background-color:#9E546E">
              <h1 class="mr-32 p-2 pl-7">{{ round.round}}</h1>
              <h1 class="mr-32  ml-9 p-2">{{ round.score}}</h1>
              <h1 class="p-2 pr-6 pl-3">{{ round.mode}}</h1>
            </div>
            <svg @click="deleteHistory(round.round)" v-show="valueText===false" class="text-white rounded-full bg-red-500 ml-2 pl-1 hover:text-red-500 hover:bg-white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 2 27 22"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81c-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5m4.5-5l-.5 5"/><path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6"/></g></svg>
          </div>
        
        

        
      </div>    
      <div class=" flex ">
          <button @click="DeleteUser" @mouseover="hovers = false" @mouseleave="hovers = true" class=" buttonDelete2 text-x  btn mt-5 rounded-full   " >
            <div class=" text-white hover:text-red-500 w-16 text-x ">  
              <span  class=" text-x font-semibold " :class="[hovers?'hidden':'visible']">Delete Account</span>
              <svg :class="[hovers?'visible':'hidden']" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M17 11q-.425 0-.713-.288T16 10q0-.425.288-.713T17 9h4q.425 0 .713.288T22 10q0 .425-.288.713T21 11h-4Zm-8 1q-1.65 0-2.825-1.175T5 8q0-1.65 1.175-2.825T9 4q1.65 0 2.825 1.175T13 8q0 1.65-1.175 2.825T9 12Zm-7 8q-.425 0-.713-.288T1 19v-1.8q0-.85.438-1.563T2.6 14.55q1.55-.775 3.15-1.163T9 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V19q0 .425-.288.713T16 20H2Z"/></svg>
            </div>
          </button>  
         
          <button @mouseover="hover = false" @mouseleave="hover = true" class=" buttonDelete text-x  btn mt-5 rounded-full   " @click="changebtn">
            <div class="text-white hover:text-red-500 w-16 text-x ">{{text}}    
              <span v-show="valueText===true" class=" text-x font-semibold " :class="[hover?'hidden':'visible']">Delete History</span>
              <svg v-show="valueText===true" :class="[hover?'visible':'hidden']" class="" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 1 25 22"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81c-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5m4.5-5l-.5 5"/><path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6"/></g></svg>
            </div>
          </button>
        </div> 
        
      </div>
    </div>
  

</template>
</ScreenC>
</template>
 
<style scoped>
.buttonblack{
  width: 300px;
    border: 2px solid #724963;
    background-color: #724963;
  color: rgb(255, 255, 255);  
}
.buttonblack:hover{
  width: 300px;
  border:6px solid #941262;
  background-color: #941262;
   color: rgb(255, 255, 255); 
}  

.buttongreen{
  width: 300px;
    border: 2px solid #4b996d;
    background-color: #4b996d;
  color: rgb(255, 255, 255);  
}
.buttongreen:hover{
  width: 300px;
  border:6px solid #ffffff;
  background-color: #ffffff;
   color: #941262; 
}
.buttonDelete{
  margin-left:3%;
  width: 70px;
    border: 2px solid #c83f3f;
    background-color: #c83f3f;
  color: rgb(255, 255, 255);  
}
.buttonDelete:hover{
    
     
  width: 70px;
  border:4px solid #ffffff;
  background-color: #ffffff;
   color: #a50000; 
   }
   .buttonDelete2{
  margin-left: 65%;
  width: 70px;
    border: 2px solid #c83f3f;
    background-color: #c83f3f;
  color: rgb(255, 255, 255);  
}
.buttonDelete2:hover{
    
     
  width: 70px;
  border:4px solid #ffffff;
  background-color: #ffffff;
   color: #a50000; 
   }    
.buttonredout{
  width: 300px;
    border: 2px solid #c83f3f;
    background-color: #c83f3f;
  color: rgb(255, 255, 255);  
}
.buttonredout:hover{
    
  width: 300px;
  border:6px solid #ffffff;
  background-color: #ffffff;
   color: #941262; 
   }
.buttonHowto{
  width: 300px;
    border: 2px solid #724963;
    background-color: #724963;
  color: rgb(255, 255, 255);  
}
.buttonHowto:hover{
    
  width: 300px;
  border:6px solid #ffffff;
  background-color: #ffffff;
   color: #941262; 
   }
   .scrollable {
  overflow-y: scroll;
  height: 300px;
}

</style>
