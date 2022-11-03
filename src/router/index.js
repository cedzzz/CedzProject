import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import Home from '../views/Home.vue'
import AboutIt from '../views/AboutIt.vue'
import AboutTip from '../views/AboutTip.vue'
import PersonalLife from '../views/PersonalLife.vue'
import ProgrammingSkills from '../views/ProgrammingSkills.vue'
import AxiosAPI from '../views/AxiosAPI.vue'
import QuizApp from '../views/QuizApp.vue'
import AnimeTracker from '../views/AnimeTracker.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
    path: '/aboutIt',
    name: 'aboutIt',
    component: AboutIt
    },
    {
    path: '/aboutTip',
    name: 'aboutTip',
    component: AboutTip
    },
    {
    path: '/aboutMe',
    name: 'aboutMe',
    component: PersonalLife
    },
    {
    path: '/programmingSkills',
    name: 'programmingSkills',
    component: ProgrammingSkills
    },
    {
      path: '/axiosApi',
      name: 'axiosApi',
      component: AxiosAPI
      },
    {
      path: '/quizApp',
      name: 'quizApp',
      component: QuizApp
      },
    {
      path: '/animeTracker',
      name: 'animeTracker',
      component: AnimeTracker
      },
            


  ]
})

export default router
