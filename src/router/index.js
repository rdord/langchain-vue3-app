import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BasicPrompt',
      component: () => import('../views/BasicPrompt.vue')
    },
    {
      path: '/prompt-template',
      name: 'PromptTemplate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PromptTemplate.vue')
    }
  ]
})

export default router
