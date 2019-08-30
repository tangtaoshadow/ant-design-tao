// /src/service/library_list_id_detail.js

/***
 * @Author          TangTao https://www.promiselee.cn/tao
 * @CreateTime      2019-8-26 10:15:12
 * @UpdateTime      2019-8-30 10:54:51
 * @Copyright       西湖大学 propro http://www.proteomics.pro/
 * @Archive         查询指定id的库信息 重新统计 更新 删除
 *
 */

import request from "../utils/request";
import tao from "../utils/common";
import reqwest from "reqwest";

// 获取指定id的标准库资源详情列表 与公共标准库共用一个
export function get_library_list_id_detail(id = "") {
  // 读取最新的 token
  let token = tao.get_token();

  if (-1 == token) {
    // 不存在 token
    return "error";
  }
  let bodys = "";
  bodys += "id" + "=" + id + "&";

  return request("/propro_server/library/detail", {
    headers: {
      // 'content-type': 'application/json',
      // "X-Requested-With": "XMLHttpRequest",
      token: token,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    method: "POST",
    body: bodys
  });
}

export function aggregate(id = "") {
  // 检验id
  if (5 > id.length) {
    return "error";
  }
  // 读取最新的 token
  let token = tao.get_token();

  if (-1 == token) {
    // 不存在 token
    return "error";
  }

  // 发起查询
  let bodys = "";
  bodys += "id" + "=" + id + "&";

  return request("/propro_server/library/aggregate", {
    headers: {
      token: token,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: bodys,
    method: "POST"
  });
}

export async function generate(payload) {
  let { id = "", generator = "" } = payload;
  // 检验id
  if (5 > id.length || "" == generator) {
    return "error";
  }
  // 读取最新的 token
  let token = tao.get_token();

  if (-1 == token) {
    // 不存在 token
    return "error";
  }

  // 发起查询
  let body_data = new FormData();
  body_data.append("id", id);
  body_data.append("generator", generator);

  return await reqwest({
    url: "/propro_server/decoy/generate",
    method: "post",
    processData: false,
    data: body_data,
    type: "json",
    headers: {
      token: token
    },

    success: res => {
      //  返回 json
      return res;
    },
    error: () => {
      return "error";
    }
  });
}

export function delete_pseudopeptides(payload) {
  let { id = "" } = payload;
  // 检验id
  if (5 > id.length) {
    return "error";
  }
  // 读取最新的 token
  let token = tao.get_token();

  if (-1 == token) {
    // 不存在 token
    return "error";
  }

  // 发起查询
  let bodys = "";
  bodys += "id" + "=" + id + "&";

  return request("/propro_server/decoy/delete", {
    headers: {
      token: token,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: bodys,
    method: "POST"
  });
}

// 删除指定id的标准库
export function delete_public_library_by_id(payload) {
  let { id = "" } = payload;
  // 检验id
  if (5 > id.length) {
    return "error";
  }
  // 读取最新的 token
  let token = tao.get_token();

  if (-1 == token) {
    // 不存在 token
    return "error";
  }

  // 发起查询
  let bodys = "";
  bodys += "id" + "=" + id + "&";

  return request("/propro_server/library/delete", {
    headers: {
      token: token,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: bodys,
    method: "POST"
  });
}
