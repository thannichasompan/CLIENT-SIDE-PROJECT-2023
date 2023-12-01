<script setup>
import { computed, ref } from 'vue'
import { useRouter} from 'vue-router'

const emits = defineEmits(['currentQueIndex','incrementScore', 'task', 'score'])
const props = defineProps({
  currentQue: Object,
  currentQueIndex: Number,
  task: Number,
  buttonarray: Object,
})
const router = useRouter()

const inputAnswer = ref('')
const falsemessage = ref('')

const currentQueIndex = ref(props.currentQueIndex)
const task = ref(props.task)
const buttonarray = ref(props.buttonarray)
const currentQue = computed(() => props.currentQue)
const incrementScore = computed(() => props.incrementScore)

console.log(incrementScore.value)

const showbutton = () => {
for (const i of buttonarray.value) {
    i.style.visibility = 'visible'
    } 
}

const checkAnswer = () => { 
 if (inputAnswer.value === null || inputAnswer.value.length === 0) {
   falsemessage.value = ` Please answer the question !!`
 } else {
     if (currentQue.value.answer.includes(inputAnswer.value.toLowerCase()) ) {
       falsemessage.value = ` ${inputAnswer.value.toString()} is correct !`
       if (currentQueIndex.value === 9) {
        inputAnswer.value = "" 
        emits('incrementScore')
        router.push({name: 'WinLose'})
        return true
       }
       inputAnswer.value = "" 
       showbutton()
       currentQueIndex.value += 1 
       emits('currentQueIndex', currentQueIndex.value)
       task.value += 1 
       emits('task', task.value)
       emits('incrementScore')
       return true
     }
     falsemessage.value = ` ${inputAnswer.value.toString()}  is not correct !`
     inputAnswer.value = "" 
     return false
 }
 inputAnswer.value = ""
 return false
}

</script>
<template>

<div class="w-full h-5 flex items-center flex-col">
    <span class="text-white flex mt-2" v-if="falsemessage.length!==0">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 8.3q-.125 0-.263-.075T18.55 8l-.8-1.75l-1.75-.8q-.15-.05-.225-.187T15.7 5q0-.125.075-.262T16 4.55l1.75-.8l.8-1.75q.05-.15.188-.225T19 1.7q.125 0 .263.075T19.45 2l.8 1.75l1.75.8q.15.05.225.188T22.3 5q0 .125-.075.263T22 5.45l-1.75.8l-.8 1.75q-.05.15-.188.225T19 8.3Zm0 14q-.125 0-.263-.075T18.55 22l-.8-1.75l-1.75-.8q-.15-.05-.225-.188T15.7 19q0-.125.075-.263T16 18.55l1.75-.8l.8-1.75q.05-.15.188-.225T19 15.7q.125 0 .263.075t.187.225l.8 1.75l1.75.8q.15.05.225.188T22.3 19q0 .125-.075.263T22 19.45l-1.75.8l-.8 1.75q-.05.15-.188.225T19 22.3ZM9 18.575q-.275 0-.525-.15T8.1 18l-1.6-3.5L3 12.9q-.275-.125-.425-.375T2.425 12q0-.275.15-.525T3 11.1l3.5-1.6L8.1 6q.125-.275.375-.425T9 5.425q.275 0 .525.15T9.9 6l1.6 3.5l3.5 1.6q.275.125.425.375t.15.525q0 .275-.15.525T15 12.9l-3.5 1.6L9.9 18q-.125.275-.375.425t-.525.15Z"/></svg>
        {{ falsemessage }}
    </span>
</div>


<div class="pt-1 flex justify-center items-center">   
  <span>ANSWER</span>
    <input
      class="input input-bordered w-80 max-w-xs m-5"
      type="text"
      v-model.trim="inputAnswer"
      @keyup.enter="checkAnswer"/>
    <button 
      class="btn buttonblack rounded-lg" 
      @click="checkAnswer"
      >
      Check
    </button>
</div>
</template>
<style scoped>
.buttonblack{
    border: 2px solid #724963;
    background-color: #724963;
  color: rgb(255, 255, 255);  
}
.buttonblack:hover{
    border: 2px solid #53a367;
    background-color: #53a367;
   color: rgb(255, 255, 255); 
}
</style>