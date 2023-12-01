<script setup>
import { onMounted, onUpdated, ref } from "vue"
import { useRouter } from "vue-router"
import { useFetchOneUser } from "../stores/FetchOneUser.js";



const FetchOneUser = useFetchOneUser()
const username = ref("")
const pin = ref("")
const error = ref("")
const router = useRouter()

const props = defineProps({
  type: { type: Number, required: true, default: 1 },
})

const clean = () => {
  username.value = ""
  pin.value = ""
}

const getUser = async () => {
  try {
    const user = await fetch("http://localhost:5000/users")
  
    if (user.ok) {
      const users = await user.json()
      return users
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

const createUser = async () => {
  const users = await getUser()
  const pinValue = Number(pin.value)

  if (
    (username.value.length === 0 && pin.value.length === 0) ||
    pin.value.length === 0 ||
    username.value.length === 0
  ) {
    popuphandle()
    return (error.value = "PLEASE ENTER USERNAME AND PIN")
  }

  if (isNaN(pinValue)) {
    popuphandle()
    clean()
    return (error.value = "INVALID PIN")
  } else {
    if (users.find((user) => user.username == username.value)) {
      popuphandle()
      clean()
      return (error.value = "USERNAME ALREADY EXISTS")

    } else {
      try {
        const res = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: username.value,
            pin: pin.value,
            historys:[]
          }),
        })
        if (res.status === 201) {
         
          const created = await res.json()  
            await FetchOneUser.setUserId(created.id)  
            await router.push({ name: "HomeHistory", params: { id: created.id } })
          return created
        } else {
          return {}
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
}
const checkUser = async () => {
  const users = await getUser()
  const pinValue = Number(pin.value)

  if (
    (username.value.length === 0 && pin.value.length === 0) ||
    pin.value.length === 0 ||
    username.value.length === 0
  ) {
    popuphandle()
    return (error.value = "PLEASE LOGIN")
  }

  if (isNaN(pinValue)) {
    popuphandle()
    clean()
    return (error.value = "INVALID PIN")
  }
 
  const checkuser = users.find((user) => {
    if (user.username === username.value && user.pin == pin.value) {
      return user.username && user.pin
    }
  })

  if (checkuser !== undefined) {
    await FetchOneUser.setUserId(checkuser.id)  
    await router.push({ name: "HomeHistory", params: { id: checkuser.id } })

  } else {
    const checkuserName = users.find((users) => {
      if (users.username === username.value) {
        return true
      }
    })
    if (checkuserName === undefined) {
      popuphandle()
      clean()
      return (error.value = "USERNAME ALREADY EXISTS")
    } else {
      popuphandle()
      clean()
      return (error.value = "PIN IS INCORRECT")
    }
  }
  console.log(error.value)
}
const showPopup = ref(false)
const closePopup = async () => (showPopup.value = false)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const popuphandle = async () => {
  showPopup.value = await true
  await delay(2000)
  await closePopup()
}
</script>

<template>
  <div
    v-show="showPopup"
    class="flex justify-center absolute mt-10 p-20 rounded-2xl text-5xl font-semibold text-red-500"
    style="background-color: #b492ae"
  >
    <img src="../assets/icons/warning.svg" alt="warning"/>

    {{ error }}
  </div>

  <form onsubmit="return false">
    <div>
     
      <div class="mb-2">
        <div>
          <span class="text-xl">USERNAME:</span>
          <input
            class="input input-bordered w-full max-w-sm m-1"
            type="text"
            name="input"
            v-model.trim="username"
          />
        </div>
        <div>
          <span class="text-xl">PIN:</span>
          <input
            placeholder="only number 4-6 charactor"
            class="input input-bordered w-full max-w-sm m-1"
            type="text"
            pattern="[0-9]+"
            maxlength="6"
            minlength="4"
            name="input"
            title="number only!!"
            v-model.trim="pin"
          />
        </div>
      </div>

      <div class="flex flow-row justify-center items-center">
        <div>
          <div class="text-2xl btn my-2 buttonblack rounded-full mr-14">
            <button type="submit" @click="checkUser" v-if="type == 2">
              SIGN IN
            </button>

            <button type="submit" @click="createUser" v-if="type == 1">
              REGISTER
            </button>
          </div>
        </div>
        <router-link to="/ChooseUser">
          <button class="text-2xl btn my-4 buttonblack rounded-full">
            Back
          </button>
        </router-link>
      </div>
    </div>
  </form>
</template>

<style scoped>
.buttonblack {
  border: 1px solid #724963;
  background-color: #724963;
  color: rgb(255, 255, 255);
}
.buttonblack:hover {
  border: 2px solid #53a367;
  background-color: #53a367;
  color: rgb(255, 255, 255);
}

</style>
