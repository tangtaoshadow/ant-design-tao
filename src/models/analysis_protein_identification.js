// path : /src/models/analysis_protein_identification.js
/***
 * @Author          TangTao https://promiselee.cn/tao
 * @CreateTime      2019-9-29 14:29:11
 * @UpdateTime      2019-10-6 22:51:36
 * @Copyright       西湖大学 propro http://www.proteomics.pro/
 * @Archive         调用查询 删除 蛋白鉴定结果
 *
 */

import * as analysis_protein_identification_service from "../service/analysis_protein_identification";
console.log("init models analysis_protein_identification.js");

//  开始执行
/********************** analysis_protein_identification model  执行 **********************/
/********************** analysis_protein_identification model  执行 **********************/
/********************** analysis_protein_identification model  执行 **********************/

let model = {
  namespace: "analysis_protein_identification",
  state: {
    // 资源列表数据
    // 通过 time 来判断是否更新了数据 通过 status 来判断数据的状态
    // -1 表示没有数据 0 有数据 -2 出错 获取数据失败
    analysis_protein_identification_status: -1,
    // 最新获取数据的时间戳
    analysis_protein_identification_time: 0,
    // 返回的数据
    analysis_protein_identification_data: 0,
    analysis_protein_identification_delete_status: -1,
    // 删除数据的时间戳
    analysis_protein_identification_delete_time: 0,
    // 返回的数据
    analysis_protein_identification_delete_data: 0
  },

  effects: {
    // 获取资源列表 由用户切换到指定界面才会发起请求 节省资源
    *get_analysis_protein_identification({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        // 捕获异常
        result = yield call(
          analysis_protein_identification_service.get_analysis_protein_identification,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "get_analysis_protein_identification_result",
        payload: result
      });
      return 0;
    },

    *query_analysis_protein_identification({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        // 捕获异常
        result = yield call(
          analysis_protein_identification_service.query_analysis_protein_identification,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "get_analysis_protein_identification_result",
        payload: result
      });
      return 0;
    },
    *delete_analysis_protein_identification({ payload }, sagaEffects) {
      const { call, put } = sagaEffects;
      let result = "";
      try {
        // 捕获异常
        result = yield call(
          analysis_protein_identification_service.delete_analysis_protein_identification,
          payload
        );
      } catch (e) {
        result = "";
      }
      yield put({
        type: "delete_analysis_protein_identification_result",
        payload: result
      });
      return 0;
    }

    // ...
  },

  reducers: {
    // 设置指定的state key = value
    set_state_newvalue(state, { payload: result }) {
      let obj = {};
      for (let i in state) {
        obj[i] = state[i];
      }
      //
      try {
        obj[result.target] = result.value;
      } catch (e) {
        // pass
      }

      return obj;
    },
    get_analysis_protein_identification_result(state, { payload: result }) {
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
          // 尝试写入 data
          obj.analysis_protein_identification_data = result.data;
          // 如果提取到 status 那么就 把 status 返回
          res_status = "error_1" == status ? -1 : status;
        } catch (e) {
          // 转换出错
        }
      } else {
        // 这里本地出错 pass
      }

      obj.analysis_protein_identification_time = new Date().getTime();

      // 1 检查 返回数据状态
      if (-1 == res_status) {
        // 发生严重错误
        obj.analysis_protein_identification_status = res_status;
        return obj;
      }

      // 2 成功获取数据
      obj.analysis_protein_identification_status = res_status;

      return obj;
    },
    delete_analysis_protein_identification_result(state, { payload: result }) {
      // @AUTHOR:tangtao HDU https://www.promiselee.cn/tao
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
          // 尝试写入 data
          obj.analysis_protein_identification_delete_data = result.data;
          // 如果提取到 status 那么就 把 status 返回
          res_status = "error_1" == status ? -1 : status;
        } catch (e) {
          // 转换出错
        }
      } else {
        // 这里本地出错 pass
      }

      obj.analysis_protein_identification_delete_time = new Date().getTime();

      // 1 检查 返回数据状态
      if (-1 == res_status) {
        // 发生严重错误
        obj.analysis_protein_identification_delete_status = res_status;
        return obj;
      }

      // 2 成功获取数据
      obj.analysis_protein_identification_delete_status = res_status;

      return obj;
    }
  }
};
console.log("init models analysis_protein_identification.js end");

export default model;
