import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import PostItemPage from '../pages/PostItemPage.vue'
import CreatePostPage from '../pages/CreatePostPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/posts/:id',
      name: 'PostItemPage',
      component: PostItemPage,
      props: true
    },
    {
      path: '/create-post',
      name: 'CreatePostPage',
      component: CreatePostPage,
    }
  ]
})

export default router
