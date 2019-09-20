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
          path: "/public_standard_library/list",
          component: "propro/public_standard_library/list"
        },
        {
          path: "/public_standard_library/detail/*",
          component: "propro/public_standard_library/detail"
        },
        {
          // 显示标准库 指定id的 详情 * id
          path: "/standard_library/detail/*",
          component: "propro/standard_library/detail"
        },
        {
          // 更新IRT标准库 指定id的 详情 * id_name
          path: "/irt_standard_library/update/*",
          component: "propro/irt_standard_library/update"
        },
        {
          path: "/public_irt_standard_library/list",
          component: "propro/public_irt_standard_library/list"
        },
        {
          path: "/public_irt_standard_library/detail/*",
          component: "propro/public_irt_standard_library/detail"
        },
        {
          path: "/public_irt_standard_library/update/*",
          component: "propro/public_irt_standard_library/update"
        },
        {
          // 更新公共标准库 指定id * id_name
          path: "/public_standard_library/update/*",
          component: "propro/public_standard_library/update"
        },
        {
          // 更新标准库 指定id * id_name
          path: "/standard_library/update/*",
          component: "propro/standard_library/update"
        },
        {
          path: "/standard_library_create",
          component: "propro/library/standard_library_create"
        },
        {
          // 肽段列表 指定id * id
          path: "/peptide/list/*",
          component: "propro/peptide/list"
        },
        {
          // 肽段列表详情 id 第一个* 肽段列表的id 第二个* 肽段列表里面的详情的id
          path: "/peptide/detail/*/*",
          component: "propro/peptide/detail"
        },
        {
          // 蛋白质列表 指定库的id * id
          path: "/protein/list/*",
          component: "propro/protein/list"
        },
        {
          // 肽段列表详情 id 第一个* 肽段列表的id 第二个* 肽段列表里面的详情的id
          path: "/protein/detail/*/*",
          component: "propro/protein/detail"
        },
        // {
        //   path: '/locale',
        //   component: 'propro/locale'
        // },
        {
          // irt 标准库 列表
          path: "/irt_standard_library/list",
          component: "propro/irt_standard_library/list"
        },
        {
          // irt 标准库 列表
          path: "/irt_standard_library/detail/*",
          component: "propro/irt_standard_library/detail"
        },
        {
          // 标准库 列表
          path: "/standard_library/list",
          component: "propro/standard_library/list"
        },
        {
          // 任务 列表
          path: "/task/list",
          component: "propro/task/list"
        },

        {
          // 分析 列表
          path: "/analysis/list",
          component: "propro/analysis/list"
        },
        {
          // 分析 详情
          path: "/analysis/detail/*",
          component: "propro/analysis/detail"
        },

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
