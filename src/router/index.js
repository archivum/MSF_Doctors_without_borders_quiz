import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Quiz from '@/components/Quiz'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Start
    }
  ]
})
