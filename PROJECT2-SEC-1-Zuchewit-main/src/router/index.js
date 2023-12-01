import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import ChooseUser from '../views/ChooseUser.vue'
import NewUser from '../views/NewUser.vue'
import OldUser from '../views/OldUser.vue'
import HomeHistory from '../views/HomeHistory.vue'
import HowToPlay from '../views/HowToPlay.vue'
import WinLose from '../views/WinLose.vue'
import Answer from '../views/Answer.vue'
import ChooseMode from '../views/ChooseMode.vue'
import ModeEasy from '../views/ModeEasy.vue'
import ModeMedium from '../views/ModeMedium.vue'
import ModeHard from '../views/ModeHard.vue'


const history = createWebHistory()
const routes = [
  
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/ChooseUser',
    name: 'ChooseUser',
    component: ChooseUser
  },
  {
    path: '/NewUser',
    name: 'NewUser',
    component: NewUser
  },
  {
    path: '/OldUser',
    name: 'OldUser',
    component: OldUser
  },
  {
    path: '/HomeHistory/:id',
    name: 'HomeHistory',
    component: HomeHistory
  },
  {
    path: '/HowToPlay',
    name: 'HowToPlay',
    component: HowToPlay
  },
  {
    path: '/ChooseMode',
    name: 'ChooseMode',
    component: ChooseMode
  },
  {
    path: '/Easy',
    name: 'Easy',
    component: ModeEasy
  },
  {
    path: '/Medium',
    name: 'Medium',
    component: ModeMedium
  },
  {
    path: '/Hard',
    name: 'Hard',
    component: ModeHard
  },
  {
    path: '/WinLose',
    name: 'WinLose',
    component: WinLose
  },
  {
    path: '/Answer',
    name: 'Answer',
    component: Answer
  }
]
const router = createRouter({
  history,
  routes,
  linkActiveClass: 'text-purple-500'
})
export default router