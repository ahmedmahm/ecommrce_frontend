import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signin from '../views/signin.vue'
import account from '../views/account.vue'
import register from '../views/register.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
