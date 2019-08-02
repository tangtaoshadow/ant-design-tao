 Author：[杭州电子科技大学](http://www.hdu.edu.cn/)  2016级管理学院 工商管理 唐涛 16011324@hdu.edu.cn

 CreateTime：2019-7-25 22:00:25

 UpdateTime：

 Copyright:  唐涛 [home](https://www.woaihdu.top/) 2019 ©  西湖大学 [propro](http://www.proteomics.pro/)

 Email：[tangtao2099@outlook.com](mailto:propro@westlake.edu.cn)






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



### Login

登录界面 实现 登录和注册 ，国际化





页面

**BasicLayout.jsx**

`Layout style={{ minHeight: '100vh' ,minWidth:'1100px',}`

这里要限制住宽度，宽度1100px 保持最小极限宽度，否则页面会显示出错。





### *添加国际化*

```json
npm install --save react-intl

```



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



*为什么要使用 `dva` ？*（[`TangTao`](https://www.woaihdu.top)）*2019-8-2 04:32:08*

比如：为什么不通过 `state` 来改变语言，因为这里引入了不同的布局文件，不同布局文件之间通过 `localStorage` 不能很方便的设置语言，比如，一个页面选中 English ，切换另一个页面，另一个页面会重新初始化一次，把之前读取语言的流程全部重新再来一遍，整个代码要夹杂在该页面，重复性高，增加了代码量。`dva`  在这些页面直接起到了一个沟通桥梁的作用，脱离了子父组件之间数据传递的复杂流程，切换界面时也不用考虑记录状态，因为 `render()` 时不需要设置 `state`，而是直接从 `models` 读取，尤其是集成了 `UMI` 之后，`dva` 使用更加方便。`models` 只有在整个页面代码全部重新初始化时（刷新），才会重新执行，赋初值。











# 安装bootstrap

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-2 04:08:53`

**修改**：`2019-8-2 04:10:59`

```bash
 npm install bootstrap
 tyarn add bootstrap
```



# 向服务器请求数据过程

**作者**：[`唐涛`](https://www.woaihdu.top)

**创建**：`2019-8-3 01:02:56`

**修改**：`2019-8-3 02:15:01`

























