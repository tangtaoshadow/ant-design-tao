// path : /src/models/login.js
/***
 * @Author          TangTao
 * @CreateTime      2019-8-3 14:35:56
 * @UpdateTime      2019-8-4 00:20:45
 * @Copyright       西湖大学 propro http://www.proteomics.pro/
 * @Archive         调用发送注册 登录 的业务逻辑
 * 
 */

import * as loginService from '../service/login';


const delay = (millisecond) => {
    return new Promise((resolve) => {
      setTimeout(resolve, millisecond);
    });
  };

// 从本地 读取 token 考虑到可能向多台服务器发起 token 所以这里附带 propro 使得代码结构清晰
// 强转 字符串
let token=''+localStorage.getItem("propro_token");
let {length}=token;
// 长度不足 置空
if(15>length){
  token='';
}



let login={
    namespace: 'login',
    state: {
      // 注册切换 默认显示 login
      login_show:true,
      // === 登录状态 ===
      // 处理时间 通过监控它 从而促使 react 更新状态
      login_time:0,
      // 登录的 token
      login_token:token,
      // 登录的 状态  未登录 <0 (默认-1 -1 也是服务端检测用户名或密码不存在的返回值) , 登录 = 0 ,严重错误 error
      login_status: ''==token ? -1 : 0,

      // === 注册状态 ===


    },
    effects: {
        *doLogin( {payload} , sagaEffects) {
          const { call, put } = sagaEffects;
          let result='';
          try{
            // 捕获异常
            result = yield call(loginService.login,payload);
          }catch(e){
            result='';
          }
          yield put({ type: 'doLogin_result', payload: result });
        }
    },
    reducers: {
        changeLogin(state, { payload: login }){
            return {
                // 更新语言配置
                login_show: login.login,
            };
        },
        // 处理返回结果
        doLogin_result(state, { payload: result }){

            // 处理逻辑
            let error=-1;
            let obj={};

            try{
              // 尝试提取 服务端返回数据
              let {status='',token=''}=result;
              if(''!=status){
                  error=0;
              }
              obj.status=status;
              obj.token=token;
            }catch(e){
              // 转换出错
              error=-1;
            }

            // 1 检查 result 是否为空 服务器未响应
            if(''==result){
              // 发生网络错误 比如 网络不可达
              let obj={
                login_status:   'error',
                login_show:     login.state.login_show,
                login_time:     new Date().getTime(),
              }
              return obj;
            }

            // 2 再检查是否转换出错 服务器返回了数据
            if(-1==error){
              // 转换异常 严重错误 输出错误信息
              let obj={
                login_status: 'error',
                login_show:   login.state.login_show,
                login_time:   new Date().getTime(),
              }
              return obj;
            }

            
            // 3 登录返回结果处理

            // 保存 token
            localStorage.token= (0==obj.status) ? obj.token : '';
            return {
                login_status: obj.status,
                login_token:  obj.token,
                login_show:   login.state.login_show,
                login_time:   new Date().getTime(),
            };
        },
    },
}

export default login;