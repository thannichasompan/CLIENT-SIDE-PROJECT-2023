<script setup>
import { ref } from "vue"
import { ans } from "../answer.js"


const Ans = ref(ans) 
const Answer = ref("") 
const stage = ref(0) 
let Task = ref('1') 
let falsemessage = ref("") 
let currentQue = ref(null) 
let currentQueIndex = ref(0) 
let score = ref(30) 
const buttonarray = ref([]) 
const screenC ="w-screen h-screen font-mono w-full h-full flex justify-center items-center flex-col"
const center = "w-full h-full flex justify-center items-center flex-col"
const centerAns = "pt-1 pb-20 w-full h-full flex justify-center items-center flex text-xl font-semibold"
const head = "font-bold text-6xl mb-5 "
const box = "divbox  w-3/5 h-5/6 rounded-lg  justify-center flex items-center flex-col border-8"




const decrementScore = () => {
  if (score.value > 0) {
    score.value = score.value - 1
  }
  if (score.value===0) {
    stage.value = 4
  }
  return score 
}

const hidebutton = (event) => {
 event.target.style.visibility = 'hidden'
  // console.log(button.value) 
  buttonarray.value.push(event.target)
  // console.log(event.target) 
  // console.log(buttonarray.value)  
  
}

const showbutton = () => {
for (const i of buttonarray.value) {
  i.style.visibility = 'visible'
  
}
  
}


const Howto = () => {
  stage.value = 1
  currentQue.value = Ans.value[(currentQueIndex.value = 0)]
  Answer.value = ""
  score.value = 30
  falsemessage.value = ''
  Task.value='1'
}




const checkAnswer = () => {
 
  if (Answer.value === null || Answer.value.length === 0) {
    
    falsemessage.value = ` Please answer the question !!`
    
  } else {
      if (currentQue.value.answer.includes(Answer.value.toLowerCase()) ) {
       
        falsemessage.value = ` ${Answer.value.toString()} is correct !`
        // console.log(currentQueIndex.value)
        
        if (currentQueIndex.value === 9) {
           
          stage.value = 3
          return true
        }
        currentQue.value = Ans.value[++currentQueIndex.value] 
        // console.log(currentQue.value)
        // console.log(buttonarray.value)
        showbutton() 
        Task.value = currentQueIndex.value + 1
        // console.log(currentQueIndex.value)
        // console.log(Task.value)

        // console.log(button.value)
         button.value = true
        // console.log(button.value)

        Answer.value = "" 
        return true
      }

      falsemessage.value = ` ${Answer.value.toString()}  is not correct !`
      return false
  }

  Answer.value = ""
  return false
}

</script>

<template>

 
    <body style="background-color:#B66884;">

  <div v-if="stage == 0">
    <div :class="screenC" >
      <div  class="rounded-xl p-32 " style="background-color:#9e546f;">
      <div class="flex">
        <div class="text-white text-8xl font-semibold font-sans mb-10">PACS</div>
          <svg style="color:#eb90b1;" class="m-2 " xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="currentColor" d="M14.7 2.2h1.5c1.1 0 2 .9 2 2v6.4l-3.5-8.4m5.4 1.6l1.3.6c1 .4 1.5 1.6 1.1 2.6l-2.4 5.9V3.8M18 15.5l-5-12c-.3-.8-1-1.2-1.8-1.2c-.3 0-.5.1-.8.2L3 5.5C2 5.9 1.5 7 2 8l5 12c.3.8 1 1.2 1.8 1.2c.3 0 .5 0 .8-.2l7.4-3c.8-.3 1.2-1 1.2-1.8c-.1-.2-.1-.5-.2-.7m-6.6-.5l-3.2-2.4l.4-4l3.2 2.4l-.4 4"/></svg> 
          <div class="text-white text-8xl font-semibold font-sans mb-10">GAME</div>
       
      </div>
      <button class="text-3xl ml-48 btn mt-5 buttonblack rounded-full " @click="Howto" >
        START GAME
      </button>
     
      </div>
    </div>
  </div>


  <div v-if="stage == 1" class="flex">
    <div :class="screenC">
    
      <div :class="box" class="divHowTo">
        <div :class="head" class=" items-center mb-12 textHowTo ">How to play?</div>
        <p class=" text-xl space ">เกมนี้เป็นเกมเปิดแผ่นป้ายทายภาพ เราจะมีรูปให้คุณทั้งหมด 10 รูป โดยแต่ละรูปจะถูกปิดด้วยแผ่นป้ายทั้ง 16 แผ่น คุณจะต้องเปิดแผ่นป้ายนั้นและทายว่าเป็นรูปอะไร</p>
          <br>
        <div>
          <p class=" textHowTo rule text-xl justify-self-start flex font-semibold ">
            <svg xmlns="http://www.w3.org/2000/svg" class=" mr-2 mt-1" width="20" height="20" viewBox="0 0 48 48"><mask id="ipSCorrect0"><path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCorrect0)"/></svg>
            กติกาที่สำคัญ 
          <ul>
            <li class=" spaceRule text-xl ">- เราจะมีคะแนนเริ่มต้นให้คุณทั้งหมด 30 คะแนน</li> 
            <li class=" ml-4 text-xl">- ถ้าคุณเปิดแผ่นป้าย 1 แผ่น ก็จะโดนลบไป 1 คะแนน </li> 
          </ul>
          </p>
        </div><br>
      <p class=" space text-xl"><span class="font-semibold text-red-800"><u>คำเตือน</u>! :</span> ถ้าคะแนนของคุณหมดก่อนถึงรูปที่ 10 จะ Game over ทันที</p>  
       <button @click="stage = 2" class="text-xl  mt-14 w-2/6  buttonblack rounded-full btn m-2 p-2 font-semibold">
          PLAY
        </button>
      </div>
      
      
    </div>
  </div>
 

  <div v-if="stage == 2">
    <div :class="screenC" >
   
    <div class=" navbar bgNarbar py-5 font-bold text-2xl  ">
      <div class=" text-white navbar-start ml-2">TASK : &nbsp;
        <span class=" text-amber-200 "> {{ Task }} / 10</span>
      </div>

      <div class="w-2/5 text-white  navbar-center">SCORE :
        <progress class="progress ml-24 " :value ="score"  max="30"></progress>
      </div>

      <div class="w-1/3 text-white navbar-end">
        <button class=" spaceleft btn btn-outline btnGiveUp text-lg" @click="stage = 4">
          Surrender
        </button>
      </div>
    </div>

      <div :class="center" >
        <div class="divcard rounded-lg">
          <div
            class="bg-cover bg-center h-80 w-80"
            :style="{ 'background-image': `url(${currentQue?.picture})` }"
          >
                <button 
                  v-for="button in 16"
                  :key="button" 
                  class="bth h-20 w-20 p-2 border-2"
                  @click="decrementScore(); hidebutton($event)"
                  :disabled="score === 0"
                >
                
                  {{ button }}
                </button>
          </div>
        </div>
          <span class="text-white flex mt-2" v-if="falsemessage.length!==0">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 8.3q-.125 0-.263-.075T18.55 8l-.8-1.75l-1.75-.8q-.15-.05-.225-.187T15.7 5q0-.125.075-.262T16 4.55l1.75-.8l.8-1.75q.05-.15.188-.225T19 1.7q.125 0 .263.075T19.45 2l.8 1.75l1.75.8q.15.05.225.188T22.3 5q0 .125-.075.263T22 5.45l-1.75.8l-.8 1.75q-.05.15-.188.225T19 8.3Zm0 14q-.125 0-.263-.075T18.55 22l-.8-1.75l-1.75-.8q-.15-.05-.225-.188T15.7 19q0-.125.075-.263T16 18.55l1.75-.8l.8-1.75q.05-.15.188-.225T19 15.7q.125 0 .263.075t.187.225l.8 1.75l1.75.8q.15.05.225.188T22.3 19q0 .125-.075.263T22 19.45l-1.75.8l-.8 1.75q-.05.15-.188.225T19 22.3ZM9 18.575q-.275 0-.525-.15T8.1 18l-1.6-3.5L3 12.9q-.275-.125-.425-.375T2.425 12q0-.275.15-.525T3 11.1l3.5-1.6L8.1 6q.125-.275.375-.425T9 5.425q.275 0 .525.15T9.9 6l1.6 3.5l3.5 1.6q.275.125.425.375t.15.525q0 .275-.15.525T15 12.9l-3.5 1.6L9.9 18q-.125.275-.375.425t-.525.15Z"/></svg>
            {{ falsemessage }}
          </span>
      </div>
      
    <br>
      
      <div :class="centerAns">   
        <span class="mr-2 textHowTo">ANSWER</span>
        <input
          class="input input-bordered w-full max-w-xs m-2"
          type="text"
          name="input"
          v-model.trim="Answer"
          @keyup.enter="checkAnswer"/>
        <button class="text-lg pl-5 pr-5 buttonblack rounded-lg btn m-2 p-2 font-semibold"  @click="checkAnswer">Check</button>
      </div>
    </div>
  </div>
  
  <div v-if="stage == 3">
    <div :class="screenC">
      <div :class="box" class="h-3/5">
        <div class="flex text-white">
          <h1 :class="head">YOU WIN</h1>
          <svg class="mt-1 ml-3" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M31 31s-2 4-7 4s-7-4-7-4m4-10s-1-4-4-4s-4 4-4 4m22 0s-1-4-4-4s-4 4-4 4"/></g></svg>
        </div>
        <div class="border-2 pl-5 pr-5 pt-2 pb-2 ">
          <span class="font-semibold text-2xl text-white">Score : </span>
          <span class="text-emerald-400 text-xl ">{{ score }}</span><br />
        </div>
        <button class="text-xl  mt-5 h-12 pl-5 pr-5 buttonblack rounded-full  buttonblack" @click="stage = 0">
          Restart
        </button>
      </div>
    </div>
  </div>

 
  <div v-if="stage == 4">
    <div :class="screenC">
      <div :class="box" class="h-3/5">
        <div class="flex text-white">
          <h1 :class="head">Game Over</h1>
          <svg class="mt-1 ml-3" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><g fill="currentColor"><path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM9.757 15.654a1 1 0 1 1-1.514-1.308c.81-.937 2.04-1.592 3.757-1.592c1.716 0 2.947.655 3.757 1.592a1 1 0 1 1-1.514 1.308c-.419-.485-1.091-.9-2.243-.9s-1.824.415-2.243.9zM8 10a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1zm7-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H15z"/></g></svg>
        </div>
        <button class="text-xl  mt-5 h-12 pl-5 pr-5 buttonblack rounded-full  buttonblack" @click="stage = 0">
          Restart
        </button>
      </div>
    </div>
  </div>
</body>

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


.space{
  padding-left: 10%;
  padding-right :10%;
}
.spaceRule{
  padding-left: 4%;
}
.rule{
  padding-left: 35%;
  margin-bottom: 10px;
}
.divbox{
 margin-top: 4%;
 margin-bottom: 5%;
 margin-left: 9%;
 margin-right:5%;
}
.divHowTo{
  color: #ffffff;
  background-color: #B66884;
}
.textHowTo {
  color: #59304a;
}

.bgNarbar{
  background-color: #724963;
  margin-bottom: 50px;
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
.bth{
  color: #ffffff;
  background-color:#724963;
}
.divcard{
  background-color: #9e546f;
  padding: 40px;
  
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
   background-color: rgb(190, 119, 128);
}
progress::-webkit-progress-value {
   background-color: rgb(218, 206, 103);
}

</style>
