<script setup>
import { ref,computed,onUpdated,onMounted } from "vue"
const emits = defineEmits(['checkSurrender', 'color'])
const props = defineProps({
  task : Number,
  score: Number,
})

const task = computed(() => props.task)
const score = computed(() => props.score)



onMounted(()=>{
  setColor()
})


onUpdated(()=>{
  setColor()
})

const color = ref('rgb(119, 224, 98)')
const setColor = () => {
  if(score.value >15 && score.value <= 30){
  color.value="rgb(119, 224, 98)"
  console.log(color.value)
}
    else if (score.value >10 && score.value <= 15) {
    color.value="rgb(255, 241, 117)"
    console.log(color.value)
  }
      else {
        color.value="rgb(242, 63, 63)"
        console.log(color.value)
      }
}

</script>
<template>
  <div class="navbar bg-base-100 bgNarbar font-semibold font-sans text-2xl h-20 ">
   
      <div class="text-white text-lg  navbar-start ml-4">TASK : &nbsp;
        <span class="text-amber-200 text-lg "> {{ task }} / 10</span>
      </div>

     
      
      <div class="w-2/5 text-white navbar-center "> SCORE :
        <progress class="progress ml-24 text-lg " :value ="score"  max="30"></progress>
      </div>

     
      <div class="w-2/5 text-white navbar-end">
        <button
        class=" spaceleft btn btn-outline btnGiveUp text-lg mr-10"
        @click="$emit('checkSurrender')">
          Surrender
        </button>
      </div>

  </div>
</template>

 
<style scoped>

.bgNarbar{
  background-color: #724963;
  margin-bottom: 50px;
}


progress {
   position: absolute;
   height: 40px;
   width: 20%;
   border: 3px solid #724963;
   
}
progress::before {
   content:  attr(value)" / 30" ;
   position: absolute;
   width: 100%;
   text-align:center;
   font-size: 18px;
   color: #724963;
}
progress::-webkit-progress-bar {
   background-color:#c9a0ba;
}
progress::-webkit-progress-value {
   background-color: v-bind(color);
}
.btnGiveUp{
    border: 1px solid #c53e3e;
    background-color: #c53e3e;
  color: rgb(255, 255, 255);  
}
.btnGiveUp:hover{
   
    border:3px solid #a20d0d;
    background-color: #a20d0d;
   color: rgb(255, 255, 255); 
}

</style>