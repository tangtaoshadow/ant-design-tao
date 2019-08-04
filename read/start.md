 Author：[杭州电子科技大学](http://www.hdu.edu.cn/)  2016级管理学院 工商管理 唐涛 16011324@hdu.edu.cn

 CreateTime：2019-7-25 22:00:25

 UpdateTime：

 Copyright:  唐涛 [home](https://www.woaihdu.top/) 2019 ©  西湖大学 [propro](http://www.proteomics.pro/)

 Email：[tangtao2099@outlook.com](mailto:propro@westlake.edu.cn)



# propro-server 系统设计细节



西湖大学 [PROPRO](http://www.proteomics.pro/)  server的官网设计规范

设计规范作者：[TangTao](https://www.woaihdu.top/)  杭州电子科技大学 2016级 管理学院 工商管理

基于ant-design，react，umi，dva，bootstrp等框架开发，

创建时间：

`2019-8-4 16:39:14`

修改时间：

`2019-8-4 16:08:47`






# Contribution

## TANGTAO：



### Technology：

##### ant-design  

##### redux  

##### dva 

##### react 

##### umi

##### less





# DVA

```bash
npm install dva-cli -g

PS F:\java\antd-2\ant-tao1-0725\0725\0725-2121> dva -v
dva-cli version 0.10.1
    dva version 2.6.0-beta.6
```

*为什么要使用 `dva` ？*（[`TangTao`](https://www.woaihdu.top)）*2019-8-2 04:32:08*

比如：为什么不通过 `state` 来改变语言，因为这里引入了不同的布局文件，不同布局文件之间通过 `localStorage` 不能很方便的设置语言，比如，一个页面选中 English ，切换另一个页面，另一个页面会重新初始化一次，把之前读取语言的流程全部重新再来一遍，整个代码要夹杂在该页面，重复性高，增加了代码量。`dva`  在这些页面直接起到了一个沟通桥梁的作用，脱离了子父组件之间数据传递的复杂流程，切换界面时也不用考虑记录状态，因为 `render()` 时不需要设置 `state`，而是直接从 `models` 读取，尤其是集成了 `UMI` 之后，`dva` 使用更加方便。`models` 只有在整个页面代码全部重新初始化时（刷新），才会重新执行，赋初值。





### Login

登录界面 实现 登录和注册 ，国际化





页面

**BasicLayout.jsx**

`Layout style={{ minHeight: '100vh' ,minWidth:'1100px',}`

这里要限制住宽度，宽度1100px 保持最小极限宽度，否则页面会显示出错。





# 国际化

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-4 21:09:10`

**修改**：`2019-8-4 21:13:13`

国际化支持18国语言，代码里已经编写了好了两套语言（简体中文和英语），添加其他语言只需了解整个语言控制逻辑，可以添加自己的语言。

*安装方式*

```json
npm install --save react-intl
```





# 运行

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-3 14:40:56`

**修改**：`2019-8-3 14:00:38`

```bash
yarn install
npm run dev
```





# 文档说明

2019-8-4 15:55:46

- 作者：TangTao 杭州电子科技大学 工商管理 2016级
- 邮箱：[tangtao2099@outlook.com](mailto:tangtao2099@outlook.com)
- [GitHub](https://github.com/tangtaoshadow)   [知乎](https://www.zhihu.com/people/tang-tao-24-36/activities)  [Gitee](https://gitee.com/tangtao2099)  [首页](https://www.woaihdu.top/)

此文档会在1分钟内自动保存，主要用于适应平时代码，工作文档排版，基于word，宏开发。加快书写文档效率，规范了word书写格式（字体，间距，行间距，颜色等等），解决平时使用word的不良习惯。书写完成可导出pdf，html，md等格式，需要word相应的插件支持。一键自动生成定义好的目录，定义了许多平时常用的样式的快捷键。

***转载请声明作者***



# 代码样式

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-4 21:00:23`

**修改**：`2019-8-4 21:07:11`

前端的大部分代码遵循 `eslint` 规范，能遵守的尽量都按照他的规范来写，虽然这并不是强制要求，但是统一样式的代码是区分程序员的关键的因素，变量命名习惯结合下划线和驼峰命名法，

遵循统一的代码编码风格的好处：

- 使编程更简单
- 避免许多编程的雷区
- 继承了前人优秀的编码习惯。
- 方便业界的工程师阅读





# 代码布局

作者：[TangTao](https://www.woaihdu.top/)

`2019-8-4 16:11:50`



```bash
├─config
├─public
├─read
└─src
    ├─assets
    ├─components
    ├─layout
    ├─locale
    ├─models
    ├─pages
    │  ├─.umi
    │  └─propro
    │      └─style
    ├─service
    └─utils
```



| 目录                    | 作用                            |
| ----------------------- | ------------------------------- |
| /config                 | 配置文件                        |
| /public                 | 公共资源文件夹，存放ico等资源   |
| /read                   | 说明文件夹                      |
| /src                    | 代码存放                        |
| /src/assets             | 静态资源存放                    |
| /src/components         | react组件 共用                  |
| /src/layout             | 页面排版布局文件                |
| /src/locale             | 国际化配置                      |
| /src/models             | dva数据存放，修改位置           |
| /src/pages              | 存放所有页面                    |
| /src/pages/propro       | 存放propro-server的页面         |
| /src/pages/propro/style | 存放propro-server的页面样式文件 |
| /service                | 负责与服务端交互的业务逻辑      |
| /utils                  | 自定义的工具类                  |
|                         |                                 |
|                         |                                 |











# 登录页面

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-3 14:06:48`

**修改**：`2019-8-3 14:00:38`



![propro](http://cdn.promiselee.cn/share_static/propro-login-20190803140517.png)





# 多国语言切换模块-1(state)

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-7-30 23:52:34`

**修改**：`2019-7-30 23:52:35`



### 国际化配置

```jsx

/***********  国际化配置   ***************/
/***********  国际化配置   ***************/
//  1 引入组件
import {IntlProvider,addLocaleData,
  FormattedMessage, FormattedHTMLMessage} from "react-intl";

//  2 引入语言包支持
import locale_en from 'react-intl/locale-data/en';
import locale_zh from 'react-intl/locale-data/zh';

//  3 引入自定义的语言文件 json 格式
import messages_zh from "../locale/zh_CN";
import messages_en from "../locale/en_US";

const messages = {
    'zh': messages_zh,
    'en': messages_en
};

//  4 设置语言支持
addLocaleData([...locale_en, ...locale_zh]);
/***********  国际化配置 end  ***************/

```



### 语言结构

```jsx
// src/locale/zh_CN.js
let language_ch={
    "prorpo.login":'登录',
    "prorpo.home":'首页'
    
}

export default language_ch;
```

```jsx
// src/locale/en_US.js
let language_en={
    'prorpo.login':'Login',
    'prorpo.home':'Home'
}

export default language_en;

```



### 默认语言

```jsx
  constructor(props){
    super(props);
    dev_consolelog('Initializing ...');

    // navigator.language.split(/[-_]/)  zh-CN
    // 默认从浏览器头读 但是只支持 中文 和 英语 没有读取成功 显示中文
    let local_language=localStorage.getItem("locale");
    let language0=  ('zh'==local_language || 'en'==local_language) ? local_language : navigator.language.split(/[-_]/)[0] ;
    let language= ('zh'==language0 || 'en'==language0) ? language0 : 'zh' ;
    // 把值添加到 localStorage 解决刷新问题
    localStorage.locale = language;
    this.state = {
      locale: language,
    };

    dev_consolelog('Initialization successful .');

  }
```



### 设置默认语言

```jsx
// 提取语言
    const language=this.state.locale;
    return (
    <IntlProvider locale={language} messages={messages[language]} >
    </IntlProvider>
	);
```



### 设置切换语言

```jsx
<Select defaultValue="中文" style={{ 
                    // padding:'5px 10px',
                    marginLeft:'8px',
                    height:'35px',
                  }} onChange={this.changeLanguage}>
                    <Option value="ch" >中文</Option>
                    <Option value="en">English</Option>
                </Select>
```



### 切换过程

**创建时间**：`2019-7-31 00:19:34`

**思路**：通过 `onChange()` 事件触发 `changeLanguage()` ,从 `changeLanguage()`  中读取 `value` ，将`value`作为新值赋值给 `this.state.locale` 从而实现语言切换。

```jsx
  //  切换语言 触发
  changeLanguage= e=>{
    dev_consolelog(`change language ${e}`);
    this.setState({
      locale:e,
    });
    // 将值添加到 localStorage
    localStorage.locale = e;
  }
```



# 多国语言切换模块-2(DVA)

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-2 03:50:43`

**修改**：`2019-8-2 04:07:43`



### 国际化配置

```jsx
/***********  国际化配置   ***************/
/***********  国际化配置   ***************/
//  1 引入组件
import {IntlProvider,addLocaleData,
  FormattedMessage, FormattedHTMLMessage} from "react-intl";

//  2 引入语言包支持
import locale_en from 'react-intl/locale-data/en';
import locale_zh from 'react-intl/locale-data/zh';

//  3 引入自定义的语言文件 json 格式
import messages_zh from "../locale/zh_CN";
import messages_en from "../locale/en_US";

const messages = {
    'zh': messages_zh,
    'en': messages_en
};

//  4 设置语言支持
addLocaleData([...locale_en, ...locale_zh]);
/***********  国际化配置 end  ***************/

```



### 语言结构

```jsx
// src/locale/zh_CN.js
let language_ch={
    "prorpo.login":'登录',
    "prorpo.home":'首页'
    
}

export default language_ch;
```

```jsx
// src/locale/en_US.js
let language_en={
    'prorpo.login':'Login',
    'prorpo.home':'Home'
}

export default language_en;

```



### 默认语言

```jsx
  constructor(props){
    super(props);
    dev_consolelog('Initializing ...');

    // navigator.language.split(/[-_]/)  zh-CN
    // 默认从浏览器头读 但是只支持 中文 和 英语 没有读取成功 显示中文
    let local_language=localStorage.getItem("locale");
    let language0=  ('zh'==local_language || 'en'==local_language) ? local_language : navigator.language.split(/[-_]/)[0] ;
    let language= ('zh'==language0 || 'en'==language0) ? language0 : 'zh' ;
    // 把值添加到 localStorage 解决刷新问题
    localStorage.locale = language;
    this.state = {
      locale: language,
    };

    dev_consolelog('Initialization successful .');

  }
```



###### `src/models/language.js`

```jsx
// 语言配置 所有页面共用   这个配置留给 language 专用 用于后续扩展开发
// navigator.language.split(/[-_]/)  zh-CN
// 默认从浏览器头读 但是只支持 中文 和 英语 没有读取成功 显示中文
// 先从本地数据库读
let local_language=localStorage.getItem("locale");
// 第二次尝试从浏览器头取
let language0=  ( 'zh' == local_language || 'en' == local_language) ? local_language : navigator.language.split(/[-_]/)[0] ;
// 第三次 设置默认值
let language= ('zh'==language0 || 'en'==language0) ? language0 : 'zh' ;
// 把值添加到 localStorage 解决刷新问题
localStorage.locale = language;

export default {
    namespace: 'language',
    state: {
      // 设置 语言
      language:localStorage.locale,
    },
    reducers: {
      changeLanguage(state, { payload: new_language }){
            return {
              // 更新语言配置
                language: new_language.language,
            };
      }
    },
  };
```

###### `src/layout/LoginLayout.js`

```jsx
// state 发生改变 回调该函数 该函数返回新状态 直接导致页面刷新
const languageStateToProps = (state) => {
  // 先从 models 里读取
  const language = state['language'].language;
  return {
    language,
  };
};

// 语言改变触发器
const languageDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (language) => {
      const action = {
        //  触发类型
        type: 'language/changeLanguage',
        // 数据 payload 传入新的语言
        payload: language,
      };
      // 触发
      dispatch(action);
    },
  };
};

/***********  语言初始化 end  ***************/
```



### 连接

```jsx
// 登录
@connect(languageStateToProps, languageDispatchToProps)
export default class LoginLayout extends React.Component  {
...
```



### 获取

```jsx
// 提取目标语言 从 model 中获取
    const language=this.props.language;
```



### 设置默认语言

```jsx
// 提取语言
    const language=this.state.locale;
    return (
    <IntlProvider locale={language} messages={messages[language]} >
    </IntlProvider>
	);
```



### 设置切换语言

```jsx
<Select defaultValue="中文" style={{ 
                    // padding:'5px 10px',
                    marginLeft:'8px',
                    height:'35px',
                  }} onChange={this.changeLanguage}>
                    <Option value="ch" >中文</Option>
                    <Option value="en">English</Option>
                </Select>
```



### 切换过程

`2019-8-2 04:00:52`

```jsx
//  切换语言 触发
  changeLanguage= e=>{
    dev_consolelog(`change language ${e}`);
    this.props.changeLanguage({
      language: e,
    });
    // 将值添加到 localStorage
    localStorage.locale = e;
  }
  
```

*实现思路*（[`TangTao`](https://www.woaihdu.top)）*2019-8-2 04:32:17*

`this.props.changeLanguage`  会去触发 `languageDispatchToProps`  中定义的 `changeLanguage` ，它再去通过 `dispatch(action);` 去触发 `language/changeLanguage`  ,再有它去设置 `language: new_language.language`  ，达到改变语言状态的目的。最后状态改变会回调 `languageStateToProps`  ，最后再触发 `render`，达到更换界面语言的目的。













# 安装bootstrap

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-2 04:08:53`

**修改**：`2019-8-2 04:10:59`

```bash
 npm install bootstrap
 tyarn add bootstrap
```







# 登录过程

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-3 14:21:38`

**修改**：`2019-8-4 00:52:22`



需要先熟悉 `dva`  `fetch` `http` ，明白了登录过程，自然就理解了注册过程。

*实现登录状态的基本要求*

能够自动处理登录过程中遇到的任何错误，不会使用户察觉到，并提供最简单的方式让用户知道登录出错。



## 登录初始化

**创建**：`2019-8-3 14:21:55`

**修改**：`2019-8-4 00:29:33`

*/src/pages/propro/login.js*

```jsx
/***********  Login View 初始化   ***************/
/***********  Login View 初始化   ***************/

// state 发生改变 回调该函数 该函数返回新状态 直接导致页面刷新
const loginStateToProps = (state) => {
  // 先从 models 里读取 是否显示登录  当前语言
  const language = state['language'].language;
  const {login_status,login_show,login_time}=state['login'];

  // 发送的对象
  let obj={};
  

  if('undefined'!=typeof(login_show)){
        obj.login_show=login_show;
  }

  if('undefined'!=typeof(language)){
    obj.language=language;
  }

  obj.login_status=login_status;
  // 先原样取出
  obj.login_time=login_time;

  // 再让 login_time 置 0 
  // 这样设计的巧妙之处在于 发生给 render 的是原值 但是这里处理就变成 0 
  // 这样就不需要再多次处理返回结果 只有点击登录时 login_time 才会更新
  if(login_time>((new Date().getTime())-500)){
      // 这里 强制 置0 使得不用再判断
      state['login'].login_time=0;
  }

  return obj;
};


const loginDispatchToProps = (dispatch) => {
  return {
    // 语言改变触发器
    changeLogin: (login) => {
      const action = {
        //  触发类型
        type: 'login/changeLogin',
        // 数据 payload 传入新的语言
        payload: login,
      };
      // 触发
      dispatch(action);
    },
    // 登录触发器
    doLogin: (login) => {
      const action = {
        //  触发类型
        type: 'login/doLogin',
        // 数据 payload 传入新的语言
        payload: login,
      };
      // 触发
      dispatch(action);
    },
  };
};

/***********  Login View 初始化 end  ***************/

```



## 点击登录

```jsx
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 执行登录
        this.props.doLogin({
          login: values,
        });
      }
    });
  };
```



## `model` 层接收

*path : /src/models/login.js*

```jsx
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
```



## 调用 `server` 层

修改**：`2019-8-4 00:33:20`

```jsx
export function login(data) {
    let params=data.login;
    let bodys='';
    Object.keys(params).forEach((key) => {
        bodys+=key+'='+params[key]+'&';
    });
    
    bodys = bodys.substr(0, bodys.length-1);
    console.log('send bodys',bodys);
    return request('/login_propro/test',{
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
```



## `models` 处理服务端返回数据

**修改**：`2019-8-4 00:32:36`

```jsx
// 处理返回结果
doLogin_result(state, { payload: result }){

    // 处理逻辑
    let error=-1;
    let obj={};

    try{
        // 尝试提取 服务端返回数据
        let {status,token=''}=result;
        obj.status=status;
        obj.token=token;
        error=0;
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
```



## 触发 `view`

**修改**：`2019-8-4 00:35:44`

```jsx
  // state 发生改变 回调该函数 该函数返回新状态 直接导致页面刷新
  const loginStateToProps = (state) => {
  // 先从 models 里读取 是否显示登录  当前语言
  const language = state['language'].language;
  const {login_status,login_show,login_time}=state['login'];

  // 发送的对象
  let obj={};
  

  if('undefined'!=typeof(login_show)){
        obj.login_show=login_show;
  }

  if('undefined'!=typeof(language)){
    obj.language=language;
  }

  obj.login_status=login_status;
  // 先原样取出
  obj.login_time=login_time;

  // 再让 login_time 置 0 
  // 这样设计的巧妙之处在于 发生给 render 的是原值 但是这里处理就变成 0 
  // 这样就不需要再多次处理返回结果 只有点击登录时 login_time 才会更新
  if(login_time>((new Date().getTime())-500)){
      // 这里 强制 置0 使得不用再判断
      state['login'].login_time=0;
  }

  return obj;
};
```



## 触发 `render`

**修改**：`2019-8-4 00:35:44`

```jsx

  // 登录结果前端处理
  login_handle=(login_status,language)=>{
    let login_result = '' ;
     // // 需要处理 登录结果
    if('error'==login_status||-1==login_status){
      // 提示登录失败
      login_result=Languages[language]["propro.login_error"];
      message.error(login_result,3);
    }else if(0==login_status){
      // 登录成功
      login_result=Languages[language]["propro.login_success"];
      // 这个关闭时间延长 使得它跳转到控制台时 它仍然存在 增强过渡效果
      message.success(login_result,5);
      setTimeout(()=>{
        message.loading(Languages[language]["propro.loading"],2,()=>{
          // 跳转
          this.props.history.push('/home');
        });
      },1000);
    }else if(-2==login_status||-3==login_status){
      // -2 用户名不存在  -3 密码错误
      // 统一提示用户名或密码错误
      login_result=Languages[language]["propro.login_false"];
      message.warn(login_result,3);
    }
  }
```

登录时会保存两个关键变量，`propro_token` 和 `propro_token_time`  用户可以通过注入这两个变量，就可以读取他人的信息。为什么要把他们放在本地数据库中，因为用户可能关闭界面，可能刷新界面，所以为了使他们不消失，就保存在本地，当用户退出时或者 `token` 超时时，系统会自动对齐销毁。







# 进入系统

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-4 16:40:12`

**修改**：`2019-8-4 00:52:22`











# 页面刷新

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-4 00:37:57`

**修改**：`2019-8-4 00:42:22`

*为什么？*

防止页面出现过多数据，即使页面没有bug，尽管 `react` 很高效，`react` 自动帮我们处理了很多事情，但是页面使用越久，会使得很多变量，数据冗余，选择一个恰当的时机刷新页面是个不错的方式，一是回收掉许多不必要的内存，而是不会使得页面过于复杂，影响 `react`  `JavaScript` 的效率。

*处理思路*

再页面中附加一个时间戳保存在本地，通过读取它，每隔一段时间，促使页面重新刷新一次。









# 安全隐患(漏洞)

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-7-30 23:52:34`

**修改**：`2019-7-30 23:52:35`

1. `token` 没有加密
2. `http` 明文传输





# 附件

 

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-4 16:58:24`

**修改**：`2019-8-4 16:58:59`



- 此页面的框架在不是十分熟悉的前提下，不要轻易改动，否则会造成代码紊乱，很多代码逻辑考虑到了今后开发过程中需要的扩展，本套系统的代码参考了很多框架，java的设计思想，代码编程的格式规范等等。

 

 

 









