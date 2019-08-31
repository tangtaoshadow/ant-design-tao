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
        // 首页默认切换到控制台 首页还没有制作
        {
          path: "/",
          component: "propro/dashboard/console"
        },
        {
          path: "/console",
          component: "propro/dashboard/console"
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
        {
          path: "/library/public_library",
          component: "propro/library/public_library"
        },
        {
          path: "/library/standard_library",
          component: "propro/library/standard_library"
        },
        {
          // 显示标准库 指定id的 详情 * id
          path: "/library/standard_library/detail/*",
          component: "propro/library/standard_library_id_detail"
        },
        {
          // 显示公共标准库 指定id的 详情 * id
          path: "/library/public_library/detail/*",
          component: "propro/library/public_library_id_detail"
        },
        {
          // 更新公共标准库 指定id * id_name
          path: "/library/public_library/update/*",
          component: "propro/library/public_library_update"
        },
        {
          // 更新标准库 指定id * id_name
          path: "/library/standard_library/update/*",
          component: "propro/library/standard_library_update"
        },
        {
          path: "/library/standard_library_create",
          component: "propro/library/standard_library_create"
        },
        {
          // 肽段列表 指定id * id
          path: "/library/peptide/list/*",
          component: "propro/peptide/list"
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
    "/propro_server": {
      target: "http://localhost:805/",
      // 去掉头部
      pathRewrite: { "^/propro_server": "" },
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
