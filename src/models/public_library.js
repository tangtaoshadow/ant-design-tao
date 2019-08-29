// path : /src/models/console.js
/***
 * @Author          TangTao
 * @CreateTime      2019-8-12 18:00:12
 * @UpdateTime      2019-8-14 20:26:25
 * @Copyright       西湖大学 propro http://www.proteomics.pro/
 * @Archive         调用发送注册 登录 的业务逻辑
 *                  保存和维护的 token 信息 ，所有需要获取登录状态的界面都要从这里来获取
 *                  用户申请账户状态,申请完成后自动销毁
 *
 */

import * as public_library_service from "../service/public_library";
console.log("init models public_library.js");

//  开始执行
/********************** public_library model  执行 **********************/
/********************** public_library model  执行 **********************/
/********************** public_library model  执行 **********************/

let model = {
  namespace: "public_library",
  state: {
    // 资源列表数据
    // 通过 time 来判断是否更新了数据 通过 status 来判断数据的状态
    // -1 表示没有数据 0 有数据 -2 出错 获取数据失败
    public_library_list_status: -1,
    // 最新获取数据的时间戳
    public_library_list_time: 0,
    current_page: -1,
    total_page: -1,
    library_list: []
  },

  effects: {
    // 获取资源列表 由用户切换到指定界面才会发起请求 节省资源
    *get_public_library_list({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        // 捕获异常
        result = yield call(
          public_library_service.get_public_library_list,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "get_public_library_list_result",
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
    get_public_library_list_result(state, { payload: result }) {
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
          public_library_list_status: -2,
          // 最新获取数据的时间戳
          public_library_list_time: new Date().getTime(),
          current_page: -1,
          total_page: -1,
          library_list: []
        };

        return obj_err;
      }

      // 2 成功获取数据
      obj.public_library_list_status = res_status;
      obj.public_library_list_time = new Date().getTime();

      console.log(obj);
      return obj;
    }

    //
  }
};
console.log("init models public_library.js end");

export default model;
