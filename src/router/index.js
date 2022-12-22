import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BlogDetail from '@/components/BlogDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:id',
      name: 'BlogDetail',
      props: true,
      component: BlogDetail
    }
  ]
})