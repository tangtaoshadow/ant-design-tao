// /src/service/experiment_detail.js

/***
 * @Author              TangTao  https://www.promiselee.cn/tao
 * @Email               tangtao2099@outlook.com
 * @Copyright           西湖大学 propro Tangtao
 * @GitHub              https://github.com/tangtaoshadow
 * @Zhihu               https://www.zhihu.com/people/tang-tao-24-36/activities
 * @CreateTime          2019-10-11 16:40:59
 * @UpdateTime          2019-10-11 16:42:28
 * @Archive             实验列表详情数据
 */

import request from "../utils/request";
import tao from "../utils/common";

// 更新 token
export function get_experiment_detail(data = "") {
  // 读取最新的 token
  let token = tao.get_token();
  let { id = "" } = data;
  id += "";
  if (-1 == token || "" == id || 3 > id.length) {
    // 不存在 token
    return "error";
  }
  let body_data = "";

  body_data += "id" + "=" + id + "&";
  console.log(body_data);
  // 请求 实验数据 列表
  return request("/propro_server/experiment/detail", {
    headers: {
      // 'content-type': 'application/json',
      // "X-Requested-With": "XMLHttpRequest",
      token: token,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    method: "POST",
    //   发送查询实验数据列表的id  注意 数据未加密
    body: body_data
  });
}

// delete_experiment_detail

// 删除 experiment 数据 create by tangtao at 2019-10-13 02:30:59
// https://www.promiselee.cn/tao
export function delete_experiment_detail_list(data = "") {
  // 读取最新的 token
  let token = tao.get_token();
  let { id = "" } = data;
  id += "";
  if (-1 == token || "" == data || 3 >= id.length) {
    // 不存在 token
    return "error";
  }

  let body_data = "";

  body_data += "id" + "=" + id + "&";

  // 请求 irt 库列表
  return request("/propro_server/experiment/delete", {
    headers: {
      // 'content-type': 'application/json',
      // "X-Requested-With": "XMLHttpRequest",
      token: token,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    method: "POST",
    //   发送登录数据 注意 数据未加密
    body: body_data
  });
}
