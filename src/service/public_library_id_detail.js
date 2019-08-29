// /src/service/library_list_id_detail.js

/***
 * @Author          TangTao https://www.promiselee.cn/tao
 * @CreateTime      2019-8-26 10:15:12
 * @UpdateTime      2019-8-16 17:08:34
 * @Copyright       西湖大学 propro http://www.proteomics.pro/
 * @Archive         查询指定id的库信息
 *
 */

import request from "../utils/request";
import tao from "../utils/common";

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
