// /src/service/protein_list.js

/***
 * @Author          TangTao https://www.promiselee.cn/tao
 * @CreateTime      2019-9-2 12:30:25
 * @UpdateTime      2019-9-2 12:41:58
 * @Copyright       西湖大学 propro TangTao http://www.proteomics.pro/
 * @Archive         查询蛋白质列表 根据库的id server
 *
 */

import request from "../utils/request";
import tao from "../utils/common";

// 更新 token
export function query_protein_list(data = "") {
  // 读取最新的 token
  let token = tao.get_token();
  let { id = "" } = data;
  if (-1 == token || "" == data || "" == id) {
    // 不存在 token
    return "error";
  }

  let body_data = "";
  body_data += "libraryId" + "=" + id + "&";

  return request("/propro_server/peptide/protein", {
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
