 Author：[杭州电子科技大学](http://www.hdu.edu.cn/)  2016级管理学院 工商管理 唐涛 [16011324@hdu.edu.cn](mailto:16011324@hdu.edu.cn)

 CreateTime：2019-7-25 22:00:25

 UpdateTime：

 Copyright:  唐涛 [home](https://www.promiselee.cn/tao) 2019 ©  西湖大学 [propro](http://www.proteomics.pro/)

 Email：[tangtao2099@outlook.com](mailto:propro@westlake.edu.cn)



# propro-server 系统设计细节



西湖大学 [PROPRO](http://www.proteomics.pro/)  server的官网设计细节

**设计 `propro-server` 前端作者**：[`TangTao`](https://www.promiselee.cn/tao)   `杭州电子科技大学`  2016级 管理学院 工商管理

基于`ant-design`，`react`，`umi`，`dva`，`bootstrap`  `less` 等框架开发，

**创建时间**：

`2019-8-4 16:39:14`

**修改时间**：

`2019-8-6 16:15:19`

***谨慎公开***

此篇文档建议供 `propro` 开发人员参考，因为前端的代码是加密的，不法分子很难通过前端分析出执行逻辑。即使源代码公开，不是对整套前端熟悉的，很难弄明白为什么系统会设计成这样。但是对于开发人员来说，看明白了这篇文档，大大的减轻了开发负担，因为这套前端系统集成了许多的框架，业务流程复杂，编码也有统一的规范，理解起来有较大的难度。尽管这篇文档篇幅有限，但是还是留下来很多必要的逻辑，如果没有此篇文档，对 `propro` 的运行逻辑就很难理解。



***开发人员***

首先感谢你看到此篇文档，在你开发之前，请熟悉一下知识

- `react`
- `redux`
- `react-intl`
- `webpack`
- `umi`
- `JavaScript`
- `ES6`
- `dva`
- `bootstrap`
- `less`
- `ant-design-pro`
- `nodejs`
- [阿里巴巴`java`规范](http://cdn.promiselee.cn/share_static/Alibaba-java-1.4.0.pdf)
- [JavaScript权威指南](http://cdn.promiselee.cn/share_static/JavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97(%E7%AC%AC6%E7%89%88)(%E4%B8%AD%E6%96%87%E7%89%88).pdf)

熟悉以上知识，对你理解 `propro-server` 将有很大的帮助，如果你还没有熟悉以上知识，看这篇文章也有助于你理解其中的逻辑，如果你很熟悉这些知识，你也可以尝试直接读代码，不够最好还是看一下此篇文档。




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

*为什么要使用 `dva` ？*（[`TangTao`](https://www.promiselee.cn/tao)）*`2019-8-8 17:23:11`*

比如：为什么不通过 `state` 来改变语言，因为这里引入了不同的布局文件，不同布局文件之间通过 `localStorage` 不能很方便的设置语言，比如，一个页面选中 English ，切换另一个页面，另一个页面会重新初始化一次，把之前读取语言的流程全部重新再来一遍，整个代码要夹杂在该页面，重复性高，增加了代码量。`dva`  在这些页面直接起到了一个沟通桥梁的作用，脱离了子父组件之间数据传递的复杂流程，切换界面时也不用考虑记录状态，因为 `render()` 时不需要设置 `state`，而是直接从 `models` 读取，尤其是集成了 `UMI` 之后，`dva` 使用更加方便。`models` 只有在整个页面代码全部重新初始化时（刷新），才会重新执行，赋初值。`dva` 和观察者模式类似（`Subject`，`Observer`，`ConcreteObserver`），但也有一些区别。





### Login

登录界面 实现 登录和注册 ，国际化





页面

**BasicLayout.jsx**

`Layout style={{ minHeight: '100vh' ,minWidth:'1100px',}`

这里要限制住宽度，宽度1100px 保持最小极限宽度，否则页面会显示出错。



# 文档说明

创建：`2019-8-4 15:55:46`

更新：`2019-8-4 23:25:22`

- 作者：[`TangTao`](https://www.promiselee.cn/tao/)   `杭州电子科技大学`  2016级 管理学院 工商管理
- 邮箱：[tangtao2099@outlook.com](mailto:tangtao2099@outlook.com)
- [GitHub](https://github.com/tangtaoshadow)   [知乎](https://www.zhihu.com/people/tang-tao-24-36/activities)  [Gitee](https://gitee.com/tangtao2099)  [首页](https://www.promiselee.cn/tao/)

- 西湖大学  [PROPRO](http://www.proteomics.pro/)    官网开发

***转载请声明作者***

此篇文档便于理解整套 `propro-server` ，对于今后维护和开发有很大的作用，一是防止自己开发一段时间后忘记当初系统为什么要这样设计或者不知道原来的代码是什么逻辑，二是便于开发和维护。其中详细介绍了 `propro-server` 的开发过程，此套前端框架是由 [作者](https://www.promiselee.cn/tao/) 本人从零开始搭建，结合了网上各个框架的优势，集合框架众多，模块也比较复杂，虽然是基于 `ant-design-pro` ，但是很多设计方式和 `ant-design-pro` 有较大的出入，因为这套系统主要针对于 `propro-server` 开发，在代码的针对性强，通用性不高，不太适合再将此框架用于其他（后台管理，电子商城，毕业设计）开发，但是可以借鉴此套框架的设计方式重新开发一套。





# 国际化

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-4 21:09:10`

**修改**：`2019-8-4 21:13:13`

国际化支持18国语言，代码里已经编写了好了两套语言（简体中文和英语），添加其他语言只需了解整个语言控制逻辑，可以添加自己的语言。这里不使用 `ant-design` 的国际化方式，因为这套框架更灵活，调用方式各种各样，具体参考源代码。

*安装方式*

```json
npm install --save react-intl
```





# 运行

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-3 14:40:56`

**修改**：`2019-8-3 14:00:38`

```bash
yarn install
npm run dev
```



# 安装react-highlight-words

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-9 13:33:24`

**修改**：`2019-8-3 14:00:38`

```bash
 yarn add react-highlight-words
```

# 安装jquery

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-21 18:44:52`

**修改**：`2019-8-21 19:25:23`

```bash
yarn add jquery
```

使用

```js
import $ from 'jquery';
```





# 代码样式

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-4 21:00:23`

**修改**：`2019-8-5 01:54:55`

前端的大部分代码遵循业界大部分代码规范，吸收了 `c`，`JavaScript`，`php`，`java`，`go`  等语言编程风格，能遵守的尽量都按照规范来写，虽然这并不是强制要求，但是统一样式的代码是区分工程师的关键因素，变量命名习惯结合下划线，驼峰，匈牙利等命名方式，

遵循统一的代码编码风格的好处：

- 使编程更简单
- 避免许多编程的雷区
- 继承了前人优秀的编码习惯。
- 方便业界开发工程师阅读

缺点：

- 对于不了解这种编程风格的人来说，看懂代码有一定的困难
- 很多代码阅读起来需要一定的功底，有些代码的确不是方便阅读

## 变量命名

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-7 15:23:00`

**修改**：`2019-8-7 15:23:05`

这里只简单描述变量命名规范，参考了很多命名风格，结合了各自的优点，

例子 ： **一般情况下**函数由**操作, 对象,具体信息**组成，`handleModalCancel` 这个变量表示 `handle`，`modal`，`cancle`，结合起来就表示*处理取消对话框*，`update_my_account`  由 `update`  `my`  `account` 三个词组成，表示*更新我的账号信息*，

## 代码排版

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-7 15:23:00`

**修改**：`2019-8-7 15:33:45`

空格，换行，`Tab` 有遵循一定的规范，这里建议取消 `Tab`，下面是一些排版风格：

```jsx

  update_my_account = e => {
    let obj = {};
    (obj.username = this.state.username),
      (obj.email = this.state.email),
      (obj.telephone = this.state.telephone),
      (obj.organization = this.state.organization),
      (obj.nick = this.state.nick);
    this.setState({
      modal_confirmLoading: true
    });
    // 延时 close
    setTimeout(() => {
      // 不需要再次检查显示状态
      // 因为为true 需要关闭 为 false 也是关闭
      this.setState({
        modal_visible: false,
        modal_confirmLoading: false
      });
    }, 1300);
  };


let modal_account_content = () => {
      return (
        <div>
          <b>
            <FormattedHTMLMessage id="propro.user_username" />
            :&nbsp;
          </b>
          {"" != modal_text.username ? (
            modal_text.username
          ) : (
            <span className={styles.danger_color}>NULL</span>
          )}
          <br />
          <b>
            <FormattedHTMLMessage id="propro.nick" />
            :&nbsp;
          </b>
          {"" != modal_text.nick ? (
            modal_text.nick
          ) : (
            <span className={styles.danger_color}>NULL</span>
          )}
          <br />
          <b>
            <FormattedHTMLMessage id="propro.email" />
            :&nbsp;
          </b>
          {"" != modal_text.email ? (
            modal_text.email
          ) : (
            <span className={styles.danger_color}>NULL</span>
          )}
          <br />
          <b>
            <FormattedHTMLMessage id="propro.telephone" />
            :&nbsp;
          </b>
          {"" != modal_text.telephone ? (
            modal_text.telephone
          ) : (
            <span className={styles.danger_color}>NULL</span>
          )}
          <br />
          <b>
            <FormattedHTMLMessage id="propro.organization" />
            :&nbsp;
          </b>
          {"" != modal_text.organization ? (
            modal_text.organization
          ) : (
            <span className={styles.danger_color}>NULL</span>
          )}
          <br />
        </div>
      );  


const userSettingStateToProps = state => {
  // 发送的对象
  let obj = {};

  // 先从 models 里读取 是否显示登录  当前语言
  const language = state["language"].language;
  if ("undefined" != typeof language) {
    obj.language = language;
  }

  let { login_status = "", username = "", roles = "" } = state["login"];

  // 自动剔除 null
  let email = "null" == state["login"].email ? "" : state["login"].email;
  let nick = "null" == state["login"].nick ? "" : state["login"].nick;
  let telephone =
    "null" == state["login"].telephone ? "" : state["login"].telephone;
  let organization =
    "null" == state["login"].organization ? "" : state["login"].organization;

  obj.login_status = login_status;
  obj.username = username;
  obj.email = email;
  obj.telephone = telephone;
  obj.nick = nick;
  obj.organization = organization;
  obj.roles = roles;

  return obj;
};

```







# 代码布局

作者：[TangTao](https://www.promiselee.cn/tao/)

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





# 界面排版

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-5 02:16:51`

**修改**：`2019-8-5 02:20:35`

```jsx
<Layout style={{ minHeight: "120vh", minWidth: "1150px" }}>
```

此处严格限制了最低排版标准，切勿改动（变大变小），因为改动一时看不出来页面排版有没有问题，但是这里在整套框架内部考虑了各种可能出现的情况，比如缩进区间，表格的最大长度等等，只有当用户真正看到的时候才会发现页面排版出现问题，所以此处切勿调整，否则界面存在显示异常，手机端也做了考虑，不够建议使用 `pc` 模式，就可以显示出更好的效果。整个页面的排版都是基于它为标准，切勿扩大或者缩小组件高度，宽度。否则不同设备打开界面千奇百怪，改一处而动全体。



界面排版参考了 [ant-design](https://ant.design/components/grid/) ，遵循了[BootStrap 3 的规则](https://getbootstrap.com/docs/3.3/css/#responsive-utilities-classes) ，虽然这种排版有缺陷，但是针对的是 `pc` 端 ，影响不大。

![](http://cdn.promiselee.cn/share_static/propro-layout-20190812000623.png)



## 头部

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**更新**：`2019-8-3 14:06:48`

头部最左边控制侧边栏展开缩进，中间是propro的导航，propro的主要功能通过中间导航条快速切换，次导航条根据不同设备的宽度，自动设置显示的链接数目，如果设备宽度过窄，就会出现 `…` ，剩余的链接通过它可以继续展开，最右边负责切换语言和用户控制。



## 侧边栏

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**更新**：`2019-8-3 14:06:48`

侧边栏负责一些常用功能的快速切换，比如用户，propro











# 登录页面

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-3 14:06:48`

**修改**：`2019-8-3 14:00:38`



![propro](http://cdn.promiselee.cn/share_static/propro-login-20190803140517.png)





# 多国语言切换模块-1(state)

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

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

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-2 03:50:43`

**修改**：`2019-8-4 23:08:17`



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
// path : /src/pages/propro/language.js

// 语言配置 所有页面共用   这个配置留给 language 专用 用于后续扩展开发
// navigator.language.split(/[-_]/)  zh-CN
// 默认从浏览器头读 但是只支持 中文 和 英语 没有读取成功 显示中文
// 先从本地数据库读
let local_language = localStorage.getItem("locale");
// 第二次尝试从浏览器头取
let language0 =
  "zh" == local_language || "en" == local_language
    ? local_language
    : navigator.language.split(/[-_]/)[0];
// 第三次 设置默认值
let language = "zh" == language0 || "en" == language0 ? language0 : "zh";
// 把值添加到 localStorage 解决刷新问题
localStorage.locale = language;

export default {
  namespace: "language",
  state: {
    // 设置 语言
    language: localStorage.locale
  },
  reducers: {
    changeLanguage(state, { payload: new_language }) {
      // 写入 localStorage
      localStorage.locale = new_language.language;
      return {
        // 更新语言配置
        language: new_language.language
      };
    }
  }
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



### 注入

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
  changeLanguage = e => {
    dev_consolelog(`change language ${e}`);
    this.props.changeLanguage({
      language: e
    });
  };
  
```

*实现思路*（[`TangTao`](https://www.promiselee.cn/tao)）*2019-8-2 04:32:17*

`this.props.changeLanguage`  会去触发 `languageDispatchToProps`  中定义的 `changeLanguage` ，它再去通过 `dispatch(action);` 去触发 `language/changeLanguage`  ,再有它去设置 `language: new_language.language`  ，达到改变语言状态的目的。最后状态改变会回调 `languageStateToProps`  ，最后再触发 `render`，达到更换界面语言的目的。





# 安装bootstrap

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-2 04:08:53`

**修改**：`2019-8-2 04:10:59`

```bash
 npm install bootstrap
 tyarn add bootstrap
```







# 登录过程

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

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

**修改**：`2019-8-4 22:36:52`

```jsx
 // 处理返回结果
    doLogin_result(state, { payload: result }) {
      // 处理逻辑
      let error = -1;
      // 登录不出错返回对象
      let obj = {};
      console.log("res", result);

      // 1 检查 result 是否为空 服务器未响应
      if ("" == result) {
        // 发生网络错误 比如 网络不可达
        let obj_err = {
          login_status: "error",
          login_show: login.state.login_show,
          login_time: new Date().getTime()
        };
        return obj_err;
      }

      try {
        // 尝试提取 服务端返回数据 error_1 与 error 区分
        let { status = "error_1", token = "" } = result;
        error = "error_1" == status ? -1 : 0;
        obj.status = status;
        obj.token = token;
      } catch (e) {
        // 转换出错
        error = -1;
      }

      // 2 再检查是否转换出错 服务器返回了数据
      if (-1 == error) {
        // 转换异常 严重错误 输出错误信息
        let obj_err = {
          login_status: "error",
          login_show: login.state.login_show,
          login_time: new Date().getTime()
        };
        return obj_err;
      }

      // 3 登录返回结果处理
      if (0 == obj.status) {
        let {
          username = "",
          email = "",
          telephone = "",
          nick = "",
          organization = "",
          roles = ""
        } = result;

        // 判断是否为 ''
        email = "" != email && null != email ? email : "null";
        telephone = "" != telephone && null != telephone ? telephone : "null";
        nick = "" != nick && null != nick ? nick : "null";
        organization =
          "" != organization && null != organization ? organization : "null";
        roles = "" != roles && null != roles ? roles : "null";

        // 登录成功 额外工作 保存 token 到本地
        localStorage.propro_token = obj.token;
        localStorage.propro_token_time = new Date().getTime();
        localStorage.username = username;
        localStorage.email = email;
        localStorage.telephone = telephone;
        localStorage.nick = nick;
        localStorage.organization = organization;
        localStorage.roles = roles;

        // 注册 登录成功  调用成功初始化
        login_success_initialization();

        // 返回登录成功的结果
        return {
          login_status: obj.status,
          login_token: obj.token,
          login_show: login.state.login_show,
          login_time: new Date().getTime(),
          username: username,
          email: email,
          telephone: telephone,
          nick: nick,
          organization: organization,
          roles: roles
        };
      } else {
        // 返回登录失败的结果
        return {
          login_status: obj.status,
          login_token: obj.token,
          login_show: login.state.login_show,
          login_time: new Date().getTime()
        };
      }
    },
```



## 登录成功初始化

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-6 16:43:00`

**修改**：`2019-8-6 16:43:38`

```jsx

// login_success_initialization
let login_success_initialization = e => {
  /********************** token 定时器  **********************/
  /********************** token 定时器  **********************/

  // 1 检查是否开启 token 定时器
  if (
    "undefined" != typeof window.TOKEN_CLOCK &&
    null != typeof window.TOKEN_CLOCK
  ) {
    // 存在定时器 取消
    try {
      clearInterval(window.TOKEN_CLOCK);
    } catch (e) {
      // 发生错误 不需要处理
    }
  }

  // 2 注册定时器
  window.TOKEN_CLOCK = setInterval(function() {
    update_token();
  }, 1200);

  /********************** token 定时器 end **********************/

  // 页面监控定时器  监控用户是否在操作界面
};
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



# 保存用户信息

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：2019-8-4 22:51:41`

**修改**：`2019-8-4 22:55:45`

```jsx
// 3 登录返回结果处理
      if (0 == obj.status) {
        let {
          username = "",
          email = "",
          telephone = "",
          nick = "",
          organization = "",
          roles = ""
        } = result;
        // 登录成功 额外工作 保存 token 到本地
        localStorage.propro_token = obj.token;
        localStorage.propro_token_time = new Date().getTime();
        localStorage.username = username;
        localStorage.email = email;
        localStorage.telephone = telephone;
        localStorage.nick = nick;
        localStorage.organization = organization;
        localStorage.roles = roles;
        // 返回登录成功的结果
        return {
          login_status: obj.status,
          login_token: obj.token,
          login_show: login.state.login_show,
          login_time: new Date().getTime(),
          username: username,
          email: email,
          telephone: telephone,
          nick: nick,
          organization: organization,
          roles: roles
        };
```

为什么要把用户信息保存在 `localStorage` ，因为 `token` 保存在这里，别人拿到了 token ，也就意味着拿到了全部，所以没有必要在编写一段去获取用户信息的代码，因为这样会更危险，如果有一堆 `token` ，我连密码都不需要了，直接跳过接口获取用户信息。



# 销毁用户信息

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-4 22:52:11`

**修改**：`2019-8-6 16:46:23`

在初始化时和在用户主动退出时都会去触发,销毁关键函数 `clear_user_info`

```jsx
// path : /src/models/login.js

// token 真正过期时间
const live_token = 4 * 3600;

// 清空用户数据
let clear_user_info = e => {
  // 销毁 关键数据
  // 保存系统必要的数据
  let { locale } = window.localStorage;
  window.localStorage.clear();

  // 重新写入
  window.localStorage.locale = locale;
  token = "";

  // 清空定时器
  // 存在定时器 取消

  try {
    clearInterval(window.TOKEN_CLOCK);
  } catch (e) {
    // 发生错误 不需要处理
  }
};

```





# 进入系统

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-4 16:40:12`

**修改**：`2019-8-4 00:52:22`



 **`/src/layout/BasicLayout.jsx`**

获取登录状态

```jsx
// state 更新
const basicStateToProps = state => {
  // 先从 models 里读取
  const language = state["language"].language;

  // 获取登录状态
  const { login_status } = state["login"];

  // 读取token
  return {
    language,login_status
  };
};
```









# 页面刷新

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-4 00:37:57`

**修改**：`2019-8-4 00:42:22`

*为什么？*

防止页面出现过多数据，即使页面没有bug，尽管 `react` 很高效，`react` 自动帮我们处理了很多事情，但是页面使用越久，会使得很多变量，数据冗余，选择一个恰当的时机刷新页面是个不错的方式，一是回收掉许多不必要的内存，而是不会使得页面过于复杂，影响 `react`  `JavaScript` 的效率。

*处理思路*

再页面中附加一个时间戳保存在本地，通过读取它，每隔一段时间，促使页面重新刷新一次。



# 控制台资源列表执行逻辑

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-15 01:11:33`

**修改**：`2019-8-18 23:10:47`

前端大部分资源获取方式与这段执行逻辑雷同，理解了这段执行逻辑，其他的也就触类旁通。

## 构造函数

```js
constructor(props) {
    super(props);
    this.state = {
      query_resource_list_times: 0,
      resource_list_data: [],
      // 默认没有数据 状态为 -1
      resource_list_status: -1,
      language: this.props.language
    };

    // 默认没有数据  主动触发
    this.query_resource_list();
  }
```

## 进入查询执行逻辑

```js

  query_resource_list = () => {
    // 防止过度更新数据 也有可能存在死循环  设置一个 阈值
    // 阈值主要在调试开发过程中有用 发布时保留不会有坏处
    // 不了解整个流程情况下不能删除该阈值 否则会有其他错误
    if (50 > this.state.query_resource_list_times) {
      // 尝试提取数据
      // 注意 这里不先从 model 中 获取  不存在就直接重新从网络获取
      // 因为 model 相当于缓存 并不是最新数据 所以主动重新发起查询
      if (0 != this.state.resource_list_status) {
        // 发起查询
        this.props.get_console_resource_list();
      }
    }
  };
```

## 向服务端获取

```js

// 获取控制台资源列表
export function get_console_resource_list(data = "") {
  // 读取最新的 token
  let token = tao.get_token();

  if (-1 == token) {
    // 不存在 token
    return "error";
  }

  return request("/propro_server/console/resourceList", {
    headers: {
      // 'content-type': 'application/json',
      // "X-Requested-With": "XMLHttpRequest",
      token: token,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    method: "POST"
  });
}

```

## 服务端返回

```js
{
    "taskRunningCount": 0, 
    "projectCount": 8, 
    "publicIrtCount": 4, 
    "libCount": 9, 
    "overviewCount": 15, 
    "publicLibCount": 7, 
    "iRtLibCount": 15, 
    "expSwathCount": 185, 
    "expPRMCount": 0, 
    "status": 0
}
```

## 处理数据

```jsx
 // 检查状态
    if (0 == this.props.resource_list_status) {
      // 数据获取成功
      setTimeout(() => {
        // 调用 添加更新数据函数
        this.change_resource_list_data(this.props);
        // 添加服务端数据
        this.setState({
          // 标记 成功
          resource_list_status: 0
        });
      }, 200);
    } else {
      // 数据获取失败
      setTimeout(() => {
        this.setState({
          resource_list_status: -1
        });
      }, 220);
      Modal.error({
        title: "False",
        content: Languages[this.props.language]["propro.network_error"],
        okText: Languages[this.props.language]["propro.user_modal_know"]
      });
      return -1;
    }
```

## 触发 `react` 渲染

如果没有加载成功，将会在渲染的前一步返回加载界面，注意，顺序不能弄反，要在处理完更新状态数据等逻辑完成之后才判断是否显示加载中，否则会一直在显示加载中，而没有去处理返回的数据，

```jsx
if (0 != this.state.public_library_list_status) {
      return (
        <Fragment>
          <Row>
            <Col
              span={24}
              style={{
                textAlign: "center",
                marginTop: "30px"
              }}
            >
              <img src={preloader_svg} />
            </Col>
          </Row>
        </Fragment>
      );
    }
```

渲染列表

```jsx
return (
      <div>
        <div
          style={{
            fontSize: "20px",
            marginBottom: "20px",
            fontWeight: "600",
            letterSpacing: "1px"
          }}
        >
          <Tooltip
            placement="topLeft"
            title={<FormattedHTMLMessage id="propro.console" />}
          >
            <Link to="/console">
              <img
                src={return_svg}
                style={{
                  height: "30px",
                  cursor: "pointer"
                }}
              />
            </Link>
          </Tooltip>
          <FormattedHTMLMessage id="propro.public_lib_title" />
        </div>
        <div
          style={{
            background: "#FFFFFF",
            padding: "5px",
            border: "1px solid #e5e9f2",
            overflow: "auto"
          }}
        >
          <Table
            size={"middle"}
            columns={columns}
            dataSource={this.state.public_library_list_data}
          />
        </div>
      </div>
    );
```





# 用户设置

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-4 00:37:57`

**修改**：`2019-8-8 00:52:23`



## 路由配置

```js
 {
          path: "/user/setting",
          component: "propro/user/setting"
        },
```



## 初始化

###  `View` 初始化

```js

/***********  UserSetting View 初始化   ***************/
/***********  UserSetting View 初始化   ***************/

// state 发生改变 回调该函数 该函数返回新状态 直接导致页面刷新
const userSettingStateToProps = state => {
  // 发送的对象
  let obj = {};

  // 先从 models 里读取 是否显示登录  当前语言
  const language = state["language"].language;
  if ("undefined" != typeof language) {
    obj.language = language;
  }

  let {
    login_status = "",
    username = "",
    roles = "",
    update_info_time = 0,
    update_info_status = -1,
    update_passwd_time = 0,
    update_passwd_status = -1
  } = state["login"];

  // 自动剔除 null
  let email = "null" == state["login"].email ? "" : state["login"].email;
  let nick = "null" == state["login"].nick ? "" : state["login"].nick;
  let telephone =
    "null" == state["login"].telephone ? "" : state["login"].telephone;
  let organization =
    "null" == state["login"].organization ? "" : state["login"].organization;

  obj.login_status = login_status;
  obj.username = username;
  obj.email = email;
  obj.telephone = telephone;
  obj.nick = nick;
  obj.organization = organization;
  obj.roles = roles;
  obj.update_info_time = update_info_time;
  obj.update_info_status = update_info_status;
  obj.update_passwd_time = update_passwd_time;
  obj.update_passwd_status = update_passwd_status;


  return obj;
};

const userSettingDispatchToProps = dispatch => {
  return {
    // 更新触发器
    updateMyAccount: userInfo => {
      const action = {
        //  触发类型
        type: "login/updateMyAccount",
        // 数据 payload 传入新的语言
        payload: userInfo
      };
      // 触发
      dispatch(action);
    },
    updateAccountPassword: userPasswd => {
      const action = {
        //  触发类型
        type: "login/updateAccountPassword",
        // 数据 payload 传入新的语言
        payload: userPasswd
      };
      // 触发
      dispatch(action);
    },
    set_state_newvalue: (data) => {
      const action = {
        //  触发类型
        type: "login/set_state_newvalue",
        // 数据 payload 传入新的语言
        payload: data
      };
      // 触发
      dispatch(action);
    }
  };
};

/***********  UserSetting View 初始化 end  ***************/

```

### 检查是否登录

```js
    //   检测是否已经登录 没有登录 弹出先登录 因为页面有可能过期 刷新时弹出
    if (0 != this.props.login_status) {
      // 未登录
      this.error_login();
      return -1;
    }

  // 显示需要 登录 界面
  error_login = e => {
    this.props.history.push("/error/login");
  };
```

### 渲染界面



## 更新用户信息（更新密码类似）

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-7 23:58:05`

**修改**：`2019-8-8 01:03:51`



### 触发

```js
<Button
                    type="primary"
                    style={{
                      padding: "0px 15px",
                      height: "32px",
                      lineHeight: "32px"
                    }}
                    name="account"
                    onClick={this.handle_submit}
                  >
```



### 处理填写的用户信息

```jsx
 // 处理提交 form
  handle_submit = e => {
    const { language } = this.props;
    const { name } = e.target;
    let obj = this.state;
    if ("account" == name) {
      // 更新 account

      // 如果存在 空 弹出 警告 需要用户确认
      if ("" == obj.username) {
        // impossible 这是错误 不存在的 不理睬
        Modal.error({
          title: "This is an error ",
          // 小鬼 你想干啥 ??
          content:
            "What are you doing ? Please contact Tang Tao(tangtao2099@outlook.com)"
        });
        return -5;
      }

      let res = new Array();

      //  增强可读性
      res.username = obj.username;
      res.nick = obj.nick;
      res.email = obj.email;
      res.organization = obj.organization;
      res.telephone = obj.telephone;

      // 弹出提示 通过提示调用另个一个更新函数
      this.setState({
        modal_visible: true,
        modal_text: res
      });
      return 0;
    } else if ("password" == name) {
      // 先读取
      (obj.current_password = this.state.current_password),
        (obj.new_password = this.state.new_password),
        (obj.verify_password = this.state.verify_password);

      // 校验 新密码
      if (
        obj.new_password == obj.verify_password &&
        5 < obj.verify_password.toString().length &&
        "" != obj.current_password
      ) {
        // 三个 condition 新旧密码相同 新密码长度大于 5 输入原密码
        // 新密码初次校验通过
        // 调用更新密码
        this.update_account_password();
      } else {
        // 密码不符合条件
        // 弹出错误
        Modal.warning({
          title: Languages[language]["propro.user_modal_warning"],
          content: Languages[language]["propro.user_modal_password_warning"],
          maskClosable: false,
          okText: Languages[language]["propro.user_modal_know"]
        });
        return -2;
      }
    } else {
      // 不存在的情况  除非注入
      return -1;
    }
  };
```



### 执行更新

```jsx
  update_account_password = e => {
    let obj = {};
    obj.current_password = this.state.current_password;
    obj.new_password = this.state.new_password;
    this.props.updateAccountPassword({ account_password: obj });
  };
```



### 更新结果处理

```jsx
// 提取更新 状态
    // 这里通过 判断它大于一个比较大的数 而不是通过等于0 因为可能存在 负数或者 undefined
    if (1000000< this.props.update_info_time) {
      // 更新 处理更新结果
      if (0 != this.props.update_info_status) {
        // 失败
        setTimeout(() => {
          message.error(
            Languages[language]["propro.user_update_account_failed"],
            2
          );
        }, 800);
      } else {
        // 成功
        setTimeout(() => {
          message.success(
            Languages[language]["propro.user_update_account_success"],
            1
          );
        }, 800);
      }
      this.props.set_state_newvalue({ target: 'update_info_time', value: 0 });

    }

```

实际处理比这个复杂的多，执行细节需要看源代码。



# `service` 层

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-8 00:35:45`

**修改**：`2019-8-6 16:47:28`

## 获取 `token` 

```jsx
let get_token = () => {
  // token 真正过期时间
  const live_token = 4 * 3600 * 1000;
  // 获取 token
  let time = "" + localStorage.getItem("propro_token_time");

  let token = "" + window.localStorage.getItem("propro_token");
  if (15 < token.length) {
    if (parseInt(time) + live_token > new Date().getTime()) {
      return token;
    }
  }

  return -1;
};
```

这里注意：需要从 `localStorage` 获取 `token` ，但是它可能过期了，也可能为空，所以需要判断，但是为了防止取到空值，转换为字符串，再转换为 `int` ，只有 `token` 存在且它的存活时间没有过期，这就允许返回 `token` 。

## 发起请求

以更新密码为例：

```jsx

export function update_account_password(data) {
  let params = data.account_password;
  let bodys = "";
  Object.keys(params).forEach(key => {
    bodys += key + "=" + params[key] + "&";
  });

  bodys = bodys.substr(0, bodys.length - 1);
  console.log("send bodys", bodys);
  // 读取最新的 token
  let token = get_token();

  if (-1 == token) {
    // 不存在 token
    return "error";
  }
  return request("/user_propro/updatePassword", {
    headers: {
      // 'content-type': 'application/json',
      // "X-Requested-With": "XMLHttpRequest",
      token: token,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    method: "POST",
    //   发送登录数据 注意 数据未加密
    body: bodys
  });
}

```

这是一个 post 请求，设置了 `token`  `Content-Type` ，把数据转换成 post 格式，发送出去。这就是 `server` 要做的工作，秉承各自负责各自的数据，各司其职。

## 返回数据格式

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-12 02:01:40`

**修改**：`2019-8-8 02:10:33`

`json` 格式，变量遵循 `java` 命名规则。

必须参数 `status`

```json
// 成功
status=0
// 一般错误
status=-1
// token 异常
status =-2
```







# `utils` 层

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-8 01:51:29`

**修改**：`2019-8-8 02:10:33`

以 `common.js` 为例

```jsx
let tao = {};
/***
 * 计算字符串存储长度
 */
tao.strlen = function(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
};

// 截取字符串指定的不超出的存储长度
tao.substr = function(str, num) {
  let str1 = "";
  let len = 0;
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      // 单字节加1
      j = 1;
    } else {
      // 双字节
      j = 2;
    }

    //   当且仅当 加上这个字符的长度小于指定的长度 才会添加
    if (len + j <= num) {
      str1 += str[i];
      len += j;
    } else {
      break;
    }
  }
  return str1;
};

export default tao;

```

这里主要负责处理自定义或者包装的方法，工具，这个文件夹主要负责针对 `propro-server` 开发自定义的工具。



# `token` 更新

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-8 11:03:40`

**修改**：`2019-8-8 15:49:29`

为了避免逻辑代码混乱，所以这里定义一个专门处理 `token` 的函数，它会在 token 的存活期内至少发起3次请求，如果3次多失败，那么就断定用户注销了。

## 注册

```jsx
  window.TOKEN_CLOCK = setInterval(function() {
    update_token();
  }, 1200);
```

### 执行更新

```jsx
/*********************  更新 token  *****************************/
/*********************  更新 token  *****************************/
let update_token = e => {
  // 检查是否允许更新标记
  // 0 成功
  // -1 默默退出系统
  // -2 不更新
  let res = -1;

  // 检查过去 15 min 内用户有没有操作界面

  // 执行更新
  const token = "" + window.localStorage.getItem("propro_token");
  const time = "" + window.localStorage.getItem("propro_token_time");
  const { username } = window.localStorage;
  if (15 < token.length) {
    if (parseInt(time) + live_token > new Date().getTime()) {
      // 正常  注意 这里一定要写成上面这种条件判断 因为要考虑到 time 异常
      // 判断是否已经登录
      if ("" != username) {
        // 到这里 总共经过了 token 长度验证 , token 存活期验证 , 用户名验证
        // 前端允许执行登录初始化
        res = 0;
      }
      // pass
    }
  }

  // 更新条件判断
  if (-1 == res) {
    // 退出系统 用户可能察觉不到
    clear_user_info();
    return -1;
  } else if (-1 > res) {
    // 不更新
    return -2;
  } else if (0 == res) {
    // 执行更新
  } else {
    // impossible
    // 这里 else 实际上是一个非运算 除了上面的情况之外所有的情况
    return "error";
  }

  // 更新

  let result = loginService.update_token();

  //  解析返回结果
  result.then(function(value) {
    let obj = {};
    let error = -1;
    // 尝试解析
    try {
      // 尝试提取 服务端返回数据 error_1 与 error 区分
      let { status = "error_1", token = "" } = value;
      // status 提取失败
      error = "error_1" == status ? -1 : 0;
      obj.status = status;
      obj.token = "" + token;
    } catch (e) {
      //  不需要处理
      return -1;
    }

    if (0 == error && 0 == obj.status && 15 < obj.token.length) {
      // 正常情况 可以更新 token
      window.localStorage.propro_token = obj.token;
      window.localStorage.propro_token_time = new Date().getTime();
      // 成功更新 token
    } else {
      // token 更新异常
      return -1;
    }
  });

  return 0;
};

/*********************  更新 token end  *****************************/

```

注意：这里校验`token`方式比较简单，没有去比较真正`token`的正确性，而只是通过长度判断`token`是否存在



# 细节

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-14 20:59:45`

**修改**：`2019-8-6 16:47:28`

## `models`层更新key

```js
// 设置指定的state key = value
    set_state_newvalue(state, { payload: result }) {
      let obj = {};
      for (let i in state) {
        obj[i] = state[i];
      }
      try {
        obj[result.target] = result.value;
      } catch (e) {
        // pass
      }
      return obj;
    },
```

这里不能直接采取更新 `state` ，应该重新返回一个对象，否则不会触发 `view` 层更新。



# 安全隐患(漏洞--非公开)

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-7-30 23:52:34`

**修改**：`2019-8-6 16:47:28`

个人在开发过程中总结了系统存在的安全缺陷，

1. `token` 加密程度并不是不可破，至于怎么破这里不说
2. `token` 虽然更新了，但但是之前的 `token` 只要不过期，都是可以用的 
3. 明文传输
4. 用户可以通过注入 `token` ，从而获取到他们信息，前提是能够获取到有效的 `token` 
5. 可以通过 `CROS` 获取用户信息
6. 用户的信息保存在本地，用户可以手动修改从而进入管理员界面





# 附件

 

**作者**：[`唐涛`](https://www.promiselee.cn/tao)

**创建**：`2019-8-4 16:58:24`

**修改**：`2019-8-8 01:07:40`



- 此页面的框架在不是十分熟悉的前提下，不要轻易改动，否则会造成代码紊乱，很多代码逻辑考虑到了今后开发过程中需要的扩展，本套系统的代码参考了很多框架，java的设计思想，代码编程的格式规范等等。
- 扩展开发尽量遵守编程规范，因为编程风格继承了业界优秀的经验，空格，换行, TabSize等都有严格的规范，这样做也是为了使得整套代码变得易于维护和开发，减少工作量，一套逻辑紊乱的代码即使能解决当前的问题，在项目终止后或者后续开发中就没有存在的意义，风格不一的代码也不易于团队开发。
- 此套框架针对 `propro-server` 开发，不太适合做其他用途。
- 此套框架的鲁棒性很强，可以针对各自错误，包括 `JavaScript` 注入，所以很多问题考虑的比较周到，更改代码时如果出现隐藏的 `bug` 就会比较难发现。



 

 

 









