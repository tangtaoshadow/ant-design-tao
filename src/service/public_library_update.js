// /src/service/public_library_update.js

/***
 * @Author          TangTao https://www.promiselee.cn/tao
 * @CreateTime      2019-8-20 16:38:18
 * @UpdateTime      2019-8-21 20:39:55
 * @Copyright       西湖大学 propro TangTao http://www.proteomics.pro/
 * @Archive         更新指定id的库信息
 *
 */

import request from "../utils/request";
import tao from "../utils/common";
import $ from "jquery";
import reqwest from "reqwest";

// 更新标准库
export async function update_library_list_id_detail(data) {
  // 读取最新的 token
  let token = tao.get_token();

  if (-1 == token) {
    // 不存在 token
    return "error";
  }

  console.log("=-=-=", data);
  let bodys = "";
  let body_data = new FormData();
  try {
    // 这里的命名采用 Java 命名方式
    body_data.append("id", data.id);
    body_data.append("name", data.name);
    body_data.append("libType", data.library_type);
    // body_data.append("only_target_peptides", data.only_target_peptides);
    body_data.append("description", data.detail_description);

    let s = 0;
    data.peptide_file_list.forEach(file => {
      // 注意 这里只上传第一个 但是写好多文件上传的代码
      if (0 == s) {
        body_data.append("prmFile", file);
        s++;
      }
    });

    s = 0;
    data.csv_library_file_list.forEach(file => {
      if (0 == s) {
        body_data.append("libFile", file);
        s++;
      }
    });
  } catch (e) {
    return "error";
  }

  // 注意 这里使用 reqwest 异步里面声明阻塞 切勿乱调用 支持文件上传

  return await reqwest({
    url: "/propro_server/library/update",
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

// 与 standard_library_update.js 使用同样的函数
// 像这种类似的接口有很多，只是为了今后开发扩展更灵活
export async function query_task_id(data = "") {
  // 读取最新的 token
  let token = tao.get_token();

  if (-1 == token || "" == data) {
    // 不存在 token
    return "error";
  }

  let body_data = new FormData();
  try {
    body_data.append("taskId", data.task_id);
  } catch (e) {
    return "error";
  }

  return await reqwest({
    url: "/propro_server/task/detail",
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
