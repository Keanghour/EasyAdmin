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
        }
      ]
    }
  ]
  