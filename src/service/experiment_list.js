// /src/service/experiment_list.js

/***
 * @Author              TangTao  https://www.promiselee.cn/tao
 * @Email               tangtao2099@outlook.com
 * @Copyright           西湖大学 propro Tangtao
 * @GitHub              https://github.com/tangtaoshadow
 * @Zhihu               https://www.zhihu.com/people/tang-tao-24-36/activities
 * @CreateTime          2019-10-7 23:58:30
 * @UpdateTime          2019-10-11 13:03:32
 * @Archive
 */

import request from "../utils/request";
import tao from "../utils/common";

// 更新 token
export function get_experiment_list(data = "") {
  // 读取最新的 token
  let token = tao.get_token();
  let { project_name = "", type = "" } = data;

  if (-1 == token) {
    // 不存在 token
    return "error";
  }

  let body_data = "";

  if ("" != project_name && 0 < project_name.length) {
    body_data += "projectName" + "=" + project_name + "&";
  }

  if ("" != type && 0 < type.length) {
    body_data += "type" + "=" + type + "&";
  }

  // 请求 实验数据 列表
  return request("/propro_server/experiment/list", {
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

// delete_experiment_list

// 删除 experiment 数据 create by tangtao at 2019-10-7 23:58:45
// https://www.promiselee.cn/tao
export function delete_experiment_list(data = "") {
  // 读取最新的 token
  let token = tao.get_token();

  let { id = "" } = data;
  id += "";
  if (-1 == token || "" == data || 0 >= id.length) {
    // 不存在 token
    return "error";
  }

  let body_data = "";

  body_data += "id" + "=" + id + "&";

  // 请求 irt 库列表
  return request("/propro_server/analyse/delete", {
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
