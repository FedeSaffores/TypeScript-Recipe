
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue' ;
import createView from '../views/createView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/create',
      name: 'create',
     component: createView

      

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
   /*   component: () => import('../views/AboutView.vue')  */
    }
  ]
})

export default router
