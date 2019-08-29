// /src/service/login.js

import request from '../utils/request';


// json 对象转 formdata
// const formData = new FormData();
// Object.keys(params).forEach((key) => {
// formData.append(key, params[key]);
// });

 

// formData转JSON，代码如下：

// var jsonData = {};
// formData.forEach((value, key) => jsonData[key] = value);

let json2formdata=function(params){
    let formData = new FormData();
    Object.keys(params).forEach((key) => {
    formData.append(key, params[key]);
    });
    return formData;
}



export function login(data) {
    let params=data.login;
    let bodys='';
    Object.keys(params).forEach((key) => {
        bodys+=key+'='+params[key]+'&';
    });
    
    bodys = bodys.substr(0, bodys.length-1);
    console.log('send bodys',bodys);
    return request('/login_propro/login',{
        headers: {
            // 'content-type': 'application/json',
            // "X-Requested-With": "XMLHttpRequest",
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          method: 'POST',
          //   发送登录数据 注意 数据未加密
          body: bodys,
    });
}