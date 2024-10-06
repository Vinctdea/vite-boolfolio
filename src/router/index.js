import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Job from '../pages/Job.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass : 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/miei-lavori',
      name: 'job',
      component: Job
    },
  ]

  
  
})

export default router
