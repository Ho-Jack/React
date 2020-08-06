import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
 
  routes: [
    {
      exact: true,
      path: '/',
      component: '@/layouts/index',
      routes: [
        // {
        //   path: 'list',
        //   component: '@/pages/List',
        // }, {
        //   path: 'admin',
        //   component: '@/pages/Admin',
        // },
        {
          path: '/',
          component: 'tabsDemo', 
        },
        {
          path: '/dashboard',
        
      //    component: 'Dashboard/Analysis' ,
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
          ]
        },
      ]
    },
    {
      path: '/tabsDemo',
      component: 'tabsDemo', 
    },
    {
      path:'/app',
      component:'App'
    }
  ],
  
});
