// path : /src/models/standard_library_id_detail.js
/***
 * @Author          TangTao https://www.promiselee.cn/tao
 * @CreateTime      2019-8-16 02:22:18
 * @UpdateTime      2019-8-26 12:41:57
 * @Copyright       西湖大学 propro http://www.proteomics.pro/
 * @Archive         查询指定id的库信息
 *
 */

import * as standard_library_id_detail_service from "../service/standard_library_id_detail";
console.log("init models standard_library.js");

//  开始执行
/********************** standard_library_id_detail model  执行 **********************/
/********************** standard_library_id_detail model  执行 **********************/
/********************** standard_library_id_detail model  执行 **********************/

let model = {
  namespace: "standard_library_id_detail",
  state: {
    // 资源列表数据
    // 通过 time 来判断是否更新了数据 通过 status 来判断数据的状态
    // -1 表示没有数据 0 有数据 -2 出错 获取数据失败
    standard_library_list_id_detail_status: -1,
    // 最新获取数据的时间戳
    standard_library_list_id_detail_time: 0,
    standard_library_id_detail_data: {},
    standard_library_id_aggregate_status: -1,
    standard_library_id_aggregate_time: 0,
    // 删除肽段
    standard_library_id_delete_pseudopeptides_status: -1,
    standard_library_id_delete_pseudopeptides_time: 0
  },

  effects: {
    // 获取资源列表 由用户切换到指定界面才会发起请求 节省资源
    *get_library_list_id_detail({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        result = yield call(
          standard_library_id_detail_service.get_library_list_id_detail,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "get_library_list_id_detail_result",
        payload: result
      });
      return 0;
    },
    *aggregate({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        result = yield call(
          standard_library_id_detail_service.aggregate,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "aggregate_result",
        payload: result
      });
      return 0;
    },
    *generate({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        result = yield call(
          standard_library_id_detail_service.generate,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "generate_result",
        payload: result
      });
      return 0;
    },
    *delete_pseudopeptides({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        result = yield call(
          standard_library_id_detail_service.delete_pseudopeptides,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "delete_pseudopeptides_result",
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
    get_library_list_id_detail_result(state, { payload: result }) {
      // 尝试提取返回结果
      let res_status = -1;
      let obj = {};
      if ("error" != result) {
        try {
          // 尝试提取 服务端返回数据 error_1 与 error 区分
          let { status = "error_1" } = result;

          (obj.standard_library_id_detail_data = result.data),
            // 如果提取到 status 那么就 把 status 返回
            (res_status = "error_1" == status ? -1 : status);
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
          standard_library_list_id_detail_status: -2,
          // 最新获取数据的时间戳
          standard_library_list_id_detail_time: new Date().getTime(),
          standard_library_id_aggregate_status: -1,
          standard_library_id_aggregate_time: 0,
          // 清空数据
          standard_library_id_detail_data: {}
        };

        return obj_err;
      }

      // 2 成功获取数据
      obj.standard_library_list_id_detail_status = res_status;
      obj.standard_library_list_id_detail_time = new Date().getTime();

      (obj.standard_library_id_aggregate_status =
        state.standard_library_id_aggregate_status),
        (obj.standard_library_id_aggregate_time =
          state.standard_library_id_aggregate_time);

      console.log(obj);
      return obj;
    },
    aggregate_result(state, { payload: result }) {
      console.log(result);
      let res_status = -1;
      // copy 状态
      let obj = {};
      for (let i in state) {
        obj[i] = state[i];
      }

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

      obj.standard_library_id_aggregate_time = new Date().getTime();

      // 1 检查 返回数据状态

      if (-1 == res_status) {
        // 发生严重错误
        obj.standard_library_id_aggregate_status = -2;
        return obj;
      }

      obj.standard_library_id_aggregate_status = res_status;

      return obj;
    },
    // 重新生成
    generate_result(state, { payload: result }) {
      console.log(result);
      let obj = {};
      for (let i in state) {
        obj[i] = state[i];
      }
      return obj;
    },
    delete_pseudopeptides_result(state, { payload: result }) {
      console.log(result);
      let obj = {};
      for (let i in state) {
        obj[i] = state[i];
      }

      let res_status = -1;

      // 校验结果
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

      if (-1 == res_status) {
        // 出错
        obj.standard_library_id_delete_pseudopeptides_time = new Date().getTime();
        // 严重错误
        obj.standard_library_id_delete_pseudopeptides_status = -1;
      } else {
        // 正常响应 虽然上面代码相同 但是处理逻辑不一样 不要搞混
        obj.standard_library_id_delete_pseudopeptides_time = new Date().getTime();
        obj.standard_library_id_delete_pseudopeptides_status = res_status;
      }

      return obj;
    }

    //
  }
};
console.log("init models standard_library_id_detail.js end");

export default model;
