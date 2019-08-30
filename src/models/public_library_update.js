// path : /src/models/public_library_update.js
/***
 * @Author          TangTao https://www.promiselee.cn/tao
 * @CreateTime      2019-8-20 16:25:38
 * @UpdateTime      2019-8-30 10:02:50
 * @Copyright       西湖大学 propro http://www.proteomics.pro/
 * @Archive         查询指定id的库信息
 *
 */

import * as public_library_update_service from "../service/public_library_update";
console.log("init models public_library_update.js");

//  开始执行
/********************** public_library_update model  执行 **********************/
/********************** public_library_update model  执行 **********************/
/********************** public_library_update model  执行 **********************/

let model = {
  namespace: "public_library_update",
  state: {
    // 资源列表数据
    // 通过 time 来判断是否更新了数据 通过 status 来判断数据的状态
    // -1 表示没有数据 0 有数据 -2 出错 获取数据失败
    public_library_update_status: -1,
    // 最新获取数据的时间戳
    public_library_update_time: 0,
    public_library_update_task_id: null,
    // 任务状态标记
    public_library_query_task_data: {},
    public_library_query_task_status: -1,
    public_library_query_task_time: 0
  },

  effects: {
    // 更新
    *update_library_list_id_detail({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        result = yield call(
          public_library_update_service.update_library_list_id_detail,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "update_library_list_id_detail_result",
        payload: result
      });
      return 0;
    },
    *query_task_id({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";

      try {
        result = yield call(
          public_library_update_service.query_task_id,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "query_task_id_result",
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
    update_library_list_id_detail_result(state, { payload: result }) {
      // 尝试提取返回结果
      let res_status = -1;
      let obj = {};
      for (let i in state) {
        obj[i] = state[i];
      }
      if ("error" != result) {
        try {
          // 尝试提取 服务端返回数据 error_1 与 error 区分
          let { status = "error_1" } = result;

          (obj.public_library_update_task_id = result.taskId),
            // 如果提取到 status 那么就 把 status 返回
            (res_status = "error_1" == status ? -1 : status);
        } catch (e) {
          // 转换出错
        }
      } else {
        // 这里本地出错
      }

      obj.public_library_update_time = new Date().getTime();

      // 1 检查 返回数据状态

      if (-1 == res_status) {
        // 发生严重错误
        (obj.public_library_update_status = -2),
          (obj.public_library_update_task_id = null);
        //
        return obj;
      }

      // 2 成功获取数据
      obj.public_library_update_status = res_status;

      return obj;
    },
    query_task_id_result(state, { payload: result }) {
      let res_status = -1;
      let obj = {};
      for (let i in state) {
        obj[i] = state[i];
      }
      //
      if ("error" != result) {
        try {
          // 尝试提取 服务端返回数据 error_1 与 error 区分
          let { status = "error_1" } = result;

          // 如果提取到 status 那么就 把 status 返回
          res_status = "error_1" == status ? -1 : status;
        } catch (e) {
          // 转换出错
        }
      } else {
        // 这里本地出错
      }

      obj.public_library_query_task_time = new Date().getTime();

      if (-1 == res_status) {
        //  数据获取失败
        obj.public_library_query_task_status = -1;
      }

      if (0 == res_status) {
        // 只有成功才写入
        obj.public_library_query_task_data = result.task;
      }
      obj.public_library_query_task_status = res_status;

      return obj;
    }

    //
  }
};
console.log("init models public_library_update.js end");

export default model;
