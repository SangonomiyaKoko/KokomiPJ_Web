import { createRouter, createWebHistory } from 'vue-router'
import frame from '@/views/main/frame.vue'
import notFound from '@/views/main/NotFountView.vue'

import home from '@/views/main/HomeView.vue'
import design from '@/views/main/DesignView.vue'
import docs from '@/views/main/DocsView.vue'
import blog from '@/views/main/BlogView.vue'
import oaHome from '@/views/oaback/HomeView.vue'
import login from '@/views/login/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frame',
      component: frame
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/design',
      name: 'design',
      component: design
    },
    {
      path: '/docs',
      name: 'docs',
      component: docs
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/oa/home',
      name: 'oa-home',
      component: oaHome
    },
    {
      path: '/oa/login',
      name: 'login',
      component: login
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: notFound
    }
  ]
})

export default router
