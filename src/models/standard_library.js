// path : /src/models/console.js
/***
 * @Author          TangTao https://promiselee.cn/tao
 * @CreateTime      2019-8-25 18:28:54
 * @UpdateTime      2019-8-14 20:26:25
 * @Copyright       西湖大学 propro http://www.proteomics.pro/
 * @Archive         调用查询 标准库 的业务逻辑
 *
 */

import * as standard_library_service from "../service/standard_library";
console.log("init models standard_library.js");

//  开始执行
/********************** standard_library model  执行 **********************/
/********************** standard_library model  执行 **********************/
/********************** standard_library model  执行 **********************/

let model = {
  namespace: "standard_library",
  state: {
    // 资源列表数据
    // 通过 time 来判断是否更新了数据 通过 status 来判断数据的状态
    // -1 表示没有数据 0 有数据 -2 出错 获取数据失败
    standard_library_list_status: -1,
    // 最新获取数据的时间戳
    standard_library_list_time: 0,
    current_page: -1,
    total_page: -1,
    library_list: []
  },

  effects: {
    // 获取资源列表 由用户切换到指定界面才会发起请求 节省资源
    *get_standard_library_list({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        // 捕获异常
        result = yield call(
          standard_library_service.get_standard_library_list,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "get_standard_library_list_result",
        payload: result
      });
      return 0;
    }
    // 更新 token
    // ...
  },

  reducers: {
    // 设置指定的state key = value
    set_state_newvalue(state, { payload: result }) {
      let obj = {};
      for (let i in state) {
        obj[i] = state[i];
      }
      try {
        obj[result.target] = result.value;
      } catch (e) {
        // pass
      }
      return obj;
    },
    get_standard_library_list_result(state, { payload: result }) {
      // 尝试提取返回结果
      let res_status = -1;
      let obj = {};
      if ("error" != result) {
        try {
          // 尝试提取 服务端返回数据 error_1 与 error 区分
          let { status = "error_1" } = result;

          (obj.current_page = result.currentPage),
            (obj.total_page = result.totalPage),
            (obj.library_list = result.libraryList);

          // 如果提取到 status 那么就 把 status 返回
          res_status = "error_1" == status ? -1 : status;
        } catch (e) {
          // 转换出错
        }
      } else {
        // 这里本地出错
      }

      // 1 检查 返回数据状态

      if (-1 == res_status) {
        // 发生严重错误
        let obj_err = {
          standard_library_list_status: -2,
          // 最新获取数据的时间戳
          standard_library_list_time: new Date().getTime(),
          current_page: -1,
          total_page: -1,
          library_list: []
        };

        return obj_err;
      }

      // 2 成功获取数据
      obj.standard_library_list_status = res_status;
      obj.standard_library_list_time = new Date().getTime();

      return obj;
    }

    //
  }
};
console.log("init models standard_library.js end");

export default model;
