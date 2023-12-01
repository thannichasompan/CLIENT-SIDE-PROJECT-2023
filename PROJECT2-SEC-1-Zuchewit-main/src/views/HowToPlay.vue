<script setup>
import ScreenC from '../components/ScreenC.vue';
import { useFetchOneUser } from '../stores/FetchOneUser.js';
import { storeToRefs } from 'pinia';

const setOneUser = useFetchOneUser()
const { Id } = storeToRefs(setOneUser)


const head = 'font-bold text-white  ';
</script>

<template>
   <ScreenC>
    <template v-slot:screenC>

  <div
  class="bgPage  flex justify-center items-center flex-col"
  >
    <div >
      <div
        :class="head"
        class="flex justify-center text-6xl mt-5 mb-10 items-center mb-15 textHowTo"
      >
        How to play?
      </div>

      <div
        class="text-white rounded-xl mr-10 ml-10 p-10 flex-col"
        style="background-color: #604154"
      >
        <p class="text-xl space">
          <p>เกมนี้เป็นเกมเปิดแผ่นป้ายทายภาพเราจะมีรูปให้คุณ
          แต่จะถูกผิดด้วยแผ่นป้าย คุณจะต้องเลือกเปิดแผ่นป้ายและทายว่าเป็นรูปอะไร</p>
          <p>โดยจะมีทั้งหมด 3 โหมด easy medium และ hard
          ซึ่งในแต่ละโหมดเราจะมีรูปให้คุณทั้งหมด 10 รูป</p>
          แต่มีจำนวนแผ่นป้ายและการหักคะแนนจะต่างกัน
        </p>
        <br />
        <div>
          <p
            class="textHowTo rule text-xl justify-self-start flex font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 mt-1"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <mask id="ipSCorrect0">
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z"
                  clip-rule="evenodd"
                />
              </mask>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSCorrect0)"
              />
            </svg>
            กติกาที่สำคัญ
          </p>
        </div>

        <div class="flex justify-center">
          <table class="border divide-y">
            <thead>
              <tr>
                <th class="border px-4 py-2">Mode</th>
                <th class="border px-4 py-2">จำนวนแผ่นภาพ</th>
                <th class="border px-4 py-2">เมื่อตอบถูก 1 ข้อ</th>
                <th class="border px-4 py-2">เมื่อตอบผิด</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">Easy</td>
                <td class="border px-4 py-2">3 * 3 (9)</td>
                <td class="border px-4 py-2">+2</td>
                <td class="border px-4 py-2">-1</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Medium</td>
                <td class="border px-4 py-2">4 * 4 (16)</td>
                <td class="border px-4 py-2">+4</td>
                <td class="border px-4 py-2">-2</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Hard</td>
                <td class="border px-4 py-2">5 * 5 (25)</td>
                <td class="border px-4 py-2">+9</td>
                <td class="border px-4 py-2">-3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />
        <p class="space text-xl">
          <span class="font-semibold"><u>คำเตือน</u>! :</span>
          ถ้าคะแนนคุณหมดก่อนถึงรูปที่ 5 หรือ ไม่จบ ข้อ 5 game over ทันที
        </p>
      </div>

      <div class="flex justify-first">
        
         <router-link :to="{ name: 'HomeHistory', params: { id: Id } }">
          <button
            class="mr-40 text-xl text-white ml-12 mt-10  buttonblack rounded-full btn font-semibold"
            style="background-color: #604154"
          >
            Back
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
  </ScreenC>
</template>

<style scoped>

.bgPage {
  background-color: #b66884;
}</style>
