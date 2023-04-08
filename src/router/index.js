import { createRouter, createWebHistory } from 'vue-router';

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
      component: () => import('../views/PromptTemplate.vue')
    },
    {
      path: '/few-shot-prompt-template',
      name: 'FewShotPromptTemplate',
      component: () => import('../views/FewShotPromptTemplate.vue')
    },
    {
      path: '/agent',
      name: 'Agent',
      component: () => import('../views/Agent.vue')
    }
  ]
});

export default router;
