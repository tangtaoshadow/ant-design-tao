export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        locale: {
          enable: true
        },
        dva: true
      }
    ]
  ],

  routes: [
    {
      path: "/login",
      component: "../layout/LoginLayout",
      routes: [
        {
          path: "/login",
          component: "propro/login"
        }
      ]
    },
    {
      path: "/",
      component: "../layout/BasicLayout",
      routes: [
        {
          path: "/",
          component: "propro/dashboard/home"
        },
        {
          path: "/home",
          component: "propro/dashboard/home"
        },

        {
          path: "/login",
          component: "propro/login"
        },
        {
          path: "/user/setting",
          component: "propro/user/setting"
        },
        {
          path: "/error/login",
          component: "propro/error/login"
        },
        // {
        //   path: '/locale',
        //   component: 'propro/locale'
        // },
        {
          path: "/test",
          component: "propro/test"
        },
        {
          path: "/test1",
          component: "propro/test1"
        },
        {
          path: "/puzzlecards",
          component: "propro/puzzlecards"
        }
      ]
    }
  ],
  // 设置转发
  proxy: {
    "/login_propro": {
      target: "http://192.168.36.1:803/",
      changeOrigin: true
    },
    "/user_propro": {
      target: "http://192.168.36.1:803/",
      changeOrigin: true
    }
  },

  // 配置主题
  theme: {
    // "@primary-color": "#30b767",
    "@primary-color": "#47bac1",
    "@layout-body-background": "#f5f9fc"
  }
};
