<script setup>
import { ref, computed } from "vue"
import { useRouter } from 'vue-router'
import { useFetchOneUser } from "../stores/FetchOneUser";
import ScreenC from "../components/ScreenC.vue";
import { storeToRefs } from 'pinia'
const head = "font-bold text-6xl mb-5 "
const router = useRouter()
const setOneUser = useFetchOneUser()
const { Id, historys, OneUserData } = setOneUser
const { mode, score } = storeToRefs(setOneUser)


const box = "divbox  w-3/5 h-5/6 rounded-lg  justify-center flex items-center flex-col border-8"

const historyAdd = ref(historys)
const UpdateHistory = async (Id, score, mode) => {
  if (historyAdd.value.length == 0) {
    historyAdd.value.push({ round: 1, score: score, mode: mode })
  } else {
    const Lastround = computed(() => historyAdd.value[historyAdd.value.length - 1].round + 1)
    historyAdd.value.push({ round: Lastround.value, score: score, mode: mode })
  }

  try {
    const res = await fetch(`http://localhost:5000/users/${Id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        id: Id,
        username: OneUserData.username,
        pin: OneUserData.pin,
        historys: historyAdd.value
      })
    })
    if (res.status === 200) {
      router.push(`/HomeHistory/:${Id}`)
    }
  }
  catch (error) {
    console.log('error : ', error)
  }
}
console.log(mode)
console.log(mode.value)
console.log(typeof (mode.value))

const type = ref(1)

if (score.value > 0) {
  type.value = 1
} else {
  type.value = 2
}

const textMode = ref('')
if (mode.value === 'Easy') {
  textMode.value = 'text-lime-500'
}
else if (mode.value === 'Medium') {
  textMode.value = 'text-orange-500';
}
else if (mode.value === 'Hard') {
  textMode.value = 'text-red-500';
}



</script>
 
<template>
  <ScreenC>
    <template v-slot:screenC>

      <div class="rounded-xl p-10 flex flex-col items-center justify-center" style="background-color:#9e546f">
        <div class="bg p-20 rounded-lg">
          <div class="flex flex-col text-white" v-if="type == 1">
            <div class="flex font-semibold font-sans text-white">
              <h1 :class="head">YOU WIN</h1>
              <svg class="mt-1 ml-3" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                  <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                  <path stroke-linecap="round"
                    d="M31 31s-2 4-7 4s-7-4-7-4m4-10s-1-4-4-4s-4 4-4 4m22 0s-1-4-4-4s-4 4-4 4" />
                </g>
              </svg>
            </div>
            
            <div class="text-white rounded-xl p-8 text-3xl mt-6" style="background-color: #9e546f">
              <div style="text-align: center">
                <div class="flex flex-col font-semibold font-sans ">
                Good Job!! <br />
                </div>
                Mode : <span :class="textMode">{{ mode }}</span> <br />
                <p style=" text-align: center">
                  Your Score: <span class="green-text">{{ score }}</span>
                </p>
              </div>

              <div class="flex">
                
                  <button class="text-xl mr-5 ml-5 mt-5 h-12 pl-5 pr-5 font-semibold font-sans buttongreen rounded-full "
                    @click="UpdateHistory(Id, score, mode)">Restart</button>
                

                <router-link to="/Answer">
                  <button class="text-xl  mt-5 h-12 pl-5 pr-5 font-semibold font-sans buttonblack rounded-full">Answer</button>
                </router-link>
              </div>
            </div>
          </div>


          <div class="flex flex-col text-white" v-if="type == 2">
            <div class="flex font-semibold font-sans text-white">
            <h1 :class="head">YOU LOSE</h1>
            <svg class="mt-1 ml-3" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><g fill="currentColor">
            <path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM9.757 15.654a1 1 0 1 1-1.514-1.308c.81-.937 2.04-1.592 3.757-1.592c1.716 0 2.947.655 3.757 1.592a1 1 0 1 1-1.514 1.308c-.419-.485-1.091-.9-2.243-.9s-1.824.415-2.243.9zM8 10a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1zm7-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H15z"/></g></svg>
            </div>
              <div class="text-white font-semibold font-sans rounded-xl p-8 text-3xl mt-6" style="background-color: #9e546f">
                <div style="text-align: center">
                  Try Again.. <br />
                  Mode : <span :class="textMode">{{ mode }}</span> <br />
                  <p style="text-align: center">
                    Your Score: <span class="green-text">{{ score }}</span>
                  </p>
                </div>


                
                  <button class="text-xl mr-5 mt-5 h-12 ml-5 pl-5 font-semibold font-sans pr-5 buttongreen rounded-full "
                    @click="UpdateHistory(Id, score, mode)">Restart</button>
               

                <router-link to="/Answer">
                  <button class="text-xl mr-5 mt-5 h-12 pl-5 pr-5 font-semibold font-sans buttonblack rounded-full  ">Answer</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>

      
    </template>
  </ScreenC>
</template>
 
<style scoped>
.buttonblack {
  border: 2px solid #724963;
  background-color: #724963;
  color: rgb(255, 255, 255);
}

.buttonblack {
  border: 2px solid #bb4343;
  background-color: #bb4343;
  color: rgb(255, 255, 255);
}

.buttonblack:hover {

  border: 3px solid #ffffff;
  background-color: #ffffff;
  color: rgb(154, 0, 97);
}

.buttongreen {
  border: 2px solid #059669;
  background-color: #059669;
  color: rgb(255, 255, 255);
}
.buttongreen:hover {
  border: 2px solid #ffffff;
  background-color: #ffffff;
  color: rgb(154, 0, 97);
}

.bg {
  background-color: #b66884;
}

.green-text {
  color: rgb(8, 120, 85);
}</style>