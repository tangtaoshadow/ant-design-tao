export default {
    plugins: [
      ['umi-plugin-react', {
        antd: true,
        locale: {
          enable: true,
        },
        dva:  true,
      }],
    ],
    routes: [
      {
        path: '/login',
        component: '../layout/LoginLayout',
        routes:[
          {
            path: '/login',
            component: 'propro/login'
          },
        ]
      },
      {
      path: '/',
      component: '../layout/BasicLayout',
      routes: [
          {
            path: '/',
            component: 'propro/home'
          },
          {
            path: '/home',
            component: 'propro/home'
          },
          {
            path: '/login',
            component: 'propro/login'
          },
          // {
          //   path: '/locale',
          //   component: 'propro/locale'
          // },
          {
            path: '/test',
            component: 'propro/test'
          },
          {
            path: '/test1',
            component: 'propro/test1'
          },
          {
            path: '/puzzlecards',
            component: 'propro/puzzlecards'
          },
         

        ]
  }],
  theme: {
    "@primary-color": "#30b767",
  }
  }