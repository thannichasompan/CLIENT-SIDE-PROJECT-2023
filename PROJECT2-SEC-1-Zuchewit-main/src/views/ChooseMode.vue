<script setup>
import { useFetchOneUser }  from "../stores/FetchOneUser.js"
import { storeToRefs } from 'pinia'
const setOneUser = useFetchOneUser()
const {currentQueIndex, Ans ,currentQue ,Task , score } = storeToRefs(setOneUser)
const PlayBtn = () => {
  currentQue.value = Ans.value[(currentQueIndex.value = 0)]
  score.value = 30
  Task.value =  1
}
</script>

 <template>
<div class="bgPage   w-screen h-screen flex justify-center items-center flex-col">
       <div class="divcard flex justify-center items-center flex-col">
      <h1 class=" font-semibold font-sans text-4xl text-white  mb-4">MODE</h1>
      <div>
        <img
          class="w-40 h-40 object-cover "
          src="../assets/icons/games.svg"
          alt="gameIcon"
        />
      </div>

<div class="text-xl">
        <router-link
          :to="{ name: 'Easy' }"
          @click="PlayBtn"
          class="flex justify-center  rounded-full mt-6  mb-4 easy text-white font-bold py-4 px-44 "
          >Easy</router-link
        >
        <router-link
          :to="{ name: 'Medium' }"
          @click="PlayBtn"
          class="flex justify-center  rounded-full mb-4 medium text-white font-bold py-4 px-24 "
          >Medium</router-link
        >
        <router-link
          :to="{ name: 'Hard' }"
          @click="PlayBtn"
          class="flex justify-center  rounded-full hard text-white font-bold py-4 px-24 "
          >Hard</router-link
        >
      </div>


  </div>
</div> 
</template> 
<style scoped>
.bgPage {
  background-color: #b66884;
}
.divcard {
  background-color: #9e546f;
  padding: 80px  100px;
  border-radius: 0.5rem;
}

.easy {
  background-color: #3f9254;
}

.medium {
  background-color: #c69e4c;
}

.hard {
  background-color: #953f3f;
}
a:hover {
  color: #87206a;
  background-color: #ffffff;
}
.buttonblack{
    border: 2px solid #724963;
    background-color: #724963;
  color: rgb(255, 255, 255);  
}
.buttonblack:hover{
    border:3px solid #ffffff;
    background-color: #ffffff;
   color: rgb(83, 26, 76); 
}
</style>