import Router from 'vue-router'

// Admin Page
import Admin from '@/components/Admin/Admin'

// Home
import Home from '@/components/Home/Home'

// User
import Users from '@/components/User/Users'
import NewUser from '@/components/User/NewUser'
import EditUser from '@/components/User/EditUser'

// Another Third-Party's component

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/newUser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/users/:id',
      name: 'EditUser',
      component: EditUser
    }
  ]
})
