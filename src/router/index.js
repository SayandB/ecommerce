import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
// import SignUpPage from '@/pages/SignUpPage'
import Login from '@/pages/Login'
// import ProductDetails from '@/pages/ProductDetails'
// import DetailsPage from '@/pages/DetailsPage'
// import CartPage from '@/pages/CartPage'
// import OrderHistory from '@/pages/OrderHistory'
// import About from '@/pages/About'
// import SamplePage from '@/pages/SamplePage'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage
    },
  //   {
  //     path: '/detailsPage',
  //     name: 'DetailsPage',
  //     component: DetailsPage
  //   },
     {
      path: '/login',
       name: 'Login',
      component: Login
    }
  //   {
  //     path: '/cartpage',
  //     name: 'CartPage',
  //     component: CartPage
  //   },
  //   {
  //     path: '/orderhistory',
  //     name: 'OrderHistory',
  //     component: OrderHistory
  //   },
  //   {
  //     path: '/about',
  //     name: 'About',
  //     component: About
  //   }

   ]
})
