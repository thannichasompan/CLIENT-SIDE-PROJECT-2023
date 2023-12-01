<script setup>
import { ref, onMounted } from "vue"
import { useFetchOneUser }  from "../stores/FetchOneUser.js"
import { storeToRefs } from 'pinia'
import { useRouter} from 'vue-router'

import Narbar from "../components/narbar.vue"
import CheckAnswer from "../components/CheckAnswer.vue"

const emits = defineEmits(["currentQueIndex","checkSurrender", "task", "score",'incrementScore', 'color'])

const router = useRouter()
const setOneUser = useFetchOneUser()
const { buttonarray,  currentQueIndex, Ans ,currentQue ,Task , score , mode } = storeToRefs(setOneUser)

mode.value = 'Medium'

const decrementScore = () => {
  if (score.value > 0) {
    score.value -= 2
    console.log(score.value)
  }
  if (score.value === 0) {
    router.push({name: 'WinLose'})
  }
}

const incrementScore = () => {
        score.value += 4
        if(score.value>30){
          score.value = 30
        }
        console.log(score.value)
}

onMounted(async () => {
  await getAnswer()
})

const setCurrentQueIndex = async (num) => {
  currentQueIndex.value = num
  await getAnswer()
}

const setTask = async (num) => {
  Task.value = num
}

const checkSurrender = () => {
  console.log(score.value)
  score.value = 0
  router.push({name:'WinLose'})
} 
const getAnswer = async () => {
  try {
    const data = await fetch("http://localhost:5000/ansM/")
    if (data.status === 200) {
      Ans.value = await data.json()
      currentQue.value = Ans.value[currentQueIndex.value]
    }
  } catch (error) {
    console.log("error: ", error)
  }
};


const hidebutton = (event) => {
  event.target.style.visibility = "hidden"
  buttonarray.value.push(event.target)
}

</script>
<template>
  <div
    class="bgPage w-screen h-screen flex justify-center items-center flex-col"
  >
 
    <Narbar :task="Task" :score="score" 
    @checkSurrender="checkSurrender" 
    />

   
    <div class="w-full h-full flex justify-center items-center flex-col">
      <div class="divcard">
        <div
          class="bg-cover bg-center grid grid-cols-4 grid-rows-4"
          :style="{ 'background-image': `url(${currentQue?.picture})` }"
        >
          <button
            v-for="button in 16"
            :key="button"
            class="bth h-20 w-20 p-2 border-2"
            @click="
              decrementScore();
              hidebutton($event);
            "
            :disabled="score === 0"
          >
            {{ button }}
          </button>
        </div>
      </div>

      
      <CheckAnswer
        :currentQue="currentQue"
        :currentQueIndex="currentQueIndex"
        :task="Task"
        :buttonarray="buttonarray"
        @incrementScore="incrementScore"
        @currentQueIndex="setCurrentQueIndex"
        @task="setTask"
      />

    </div>
  </div>
</template>
<style scoped>
.bgPage {
  background-color: #b66884;
}
.divcard {
  background-color: #9e546f;
  padding: 40px;
  border-radius: 0.5rem;
}
.bth {
  color: #ffffff;
  background-color: #724963;
}
</style>
