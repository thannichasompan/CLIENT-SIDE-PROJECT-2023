import { defineStore,acceptHMRUpdate } from "pinia";
import { ref,computed} from "vue";


const useFetchOneUser = defineStore('OneUser',()=>{
    
      const Id = ref() 
      const historys = computed(()=> historyArray)
      const OneUserData = computed(()=>oneUser.value) 
      const oneUser = ref('')
      let Task = ref(1)
      let score = ref(30)
      let mode = ref('')
      const buttonarray = ref([])
      const Ans = ref([])
      let currentQue = ref({})
      let currentQueIndex = ref(0)


const historyArray =ref([])
const getUser = ()=>{
  return oneUser.value
}
const setFetch= async() =>{
  try {
    const res = await fetch(`http://localhost:5000/users/${Id.value}`) 
    oneUser.value = await res.json()
    const historys = oneUser.value.historys
    historys.forEach(onehistory =>{
      historyArray.value.push(onehistory)      
      }) 
  } 
  catch (error) {
    console.log('error:', error)
  }
}
      const setUserId = async(id)=>{
        historyArray.value=[]
        Id.value=id
        oneUser.value=undefined
        await setFetch()
        console.log(oneUser.value);
      
        return Id.value

      }
      
      return{
        Id,
        historys,
        OneUserData,
        setFetch,
        getUser,
        setUserId,
        buttonarray: buttonarray,
        currentQueIndex: currentQueIndex,
        Ans: Ans,
        currentQue: currentQue,
        Task: Task,
        mode: mode,
        score: score
      }
})

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useFetchOneUser,import.meta.hot))
}
export{useFetchOneUser}

