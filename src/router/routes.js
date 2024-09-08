export default [
    {
      name: "Master",
      path: "/",
      component: () => import('../pages/layout/Master.vue'),
      redirect: "/dashboard",
      children: [
        {
          name: "Dashboard",
          path: 'dashboard',  
          component: () => import('../pages/Dashboard.vue'),
        },
        {
          name: "User",
          path: 'user',  
          component: () => import('../pages/User.vue'),
        },
        {
          name: "Product",
          path: 'product',  
          component: () => import('../pages/Product.vue'),
        }
      ]
    },
    {
      path: '/auth',
      component: () => import('../pages/layout/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/auth/Login.vue')
        },
        {
          path: 'register',
          component: () => import('../pages/auth/Register.vue')
        },
        {
          path: 'forgot-password',
          component: () => import('../pages/auth/ForgotPassword.vue')
        }
      ]
    }
  ]
  