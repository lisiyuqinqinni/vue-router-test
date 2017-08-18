import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/home'
import Login from '@/components/login'
import Layout from '@/components/layout'
import Project from '@/components/project'
import Workbench from '@/components/workbench'
import Doc from '@/components/doc'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/management',
      name: 'Management',
      component: Layout,
      children: [
        {
          path: '/project',
          name: 'Project',
          meta: {
            login: true
          },
          component: Project
        },
        {
          path: '/workbench',
          name: 'Workbench',
          meta: {
            login: true
          },
          component: Workbench
        },
        {
          path: '/doc',
          name: 'Doc',
          meta: {
            login: false
          },
          component: Doc
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: (to) => {
        console.log(to)
        return '/'
      }
    }
  ]
})

router.beforeEach((to, form, next) => {
  if (to.matched.some((item) => item.meta.login)) {
    if (router.app.$local.fetch('lsy').login) {
      next()
    } else {
      router.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1)
        }
      })
    }
  } else {
    next()
  }
})

export default router
