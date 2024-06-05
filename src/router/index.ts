import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import PostItem from '../pages/PostItem.vue'
import CreatePostPage from '../pages/CreatePostPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts/:id',
      name: 'PostItem',
      component: PostItem,
      props: true
    },
    {
      path: '/create-post',
      name: 'CreatePostPage',
      component: CreatePostPage,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../pages/AboutView.vue')
    // }
  ]
})

export default router
