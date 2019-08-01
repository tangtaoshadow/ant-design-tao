
import { Component } from 'react';


import { 
  Layout, Menu, Icon , 
  Switch,Breadcrumb,Row, Card,
  Col,Button,Dropdown,Select,Badge,Tag    
} from 'antd';

import Link from 'umi/link';

// import {Slider_menu} from './sider';
import 'antd/dist/antd.less';
import styles from './LoginLayout.less'; 
// import logo from'../assets/propro-logo-hori.png'
import './LoginLayout.css';
import './Common.css';
import prorpo_logo from '../assets/propro-logo-vertical.png';

import  { connect } from 'dva';

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

let consolelog=function(){
  let len=arguments.length;
    for(let i=0;i<len;i++){
        console.log(arguments[i]);
    }
}

consolelog(messages_zh);
// 开发模式
let dev_consolelog=function(){
  let len=arguments.length;
    for(let i=0;i<len;i++){
        console.log(arguments[i]);
    }
}



const namespace = 'language';

// state 发生改变 触发该函数 该函数返回新状态 直接导致页面刷新
const mapStateToProps = (state) => {
  // 先从 models 里读取
  const language = state[namespace].language;
  console.log('mapStateToProps 1',language);
  return {
    language,
  };
};

// 熟悉触发器
const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (language) => {
        console.log('onClickAdd 1',language);
      const action = {
        //  触发类型
        type: `${namespace}/changeLanguage`,
        // 数据 payload 传入新的语言
        payload: language,
      };
      // 触发
      dispatch(action);
    },
  };
};

const { Header, Footer, Content , Sider } = Layout;

const {SubMenu} = Menu; 

//  select 复选框
const { Option } = Select;


// 登录
@connect(mapStateToProps, mapDispatchToProps)
export default class LoginLayout extends React.Component  {
  

  // state = {
  //   theme: 'dark',
  //   current: '1',
  // };

  // changeTheme = value => {
  //   this.setState({
  //     theme: value ? 'dark' : 'light',
  //   });
  // };



  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // };

  constructor(props){
    super(props);
    dev_consolelog('Initializing Login ...');

    // navigator.language.split(/[-_]/)  zh-CN
    // 默认从浏览器头读 但是只支持 中文 和 英语 没有读取成功 显示中文
    let local_language=localStorage.getItem("locale");
    // 第二次尝试从浏览器头取
    let language0=  ('zh'==local_language || 'en'==local_language) ? local_language : navigator.language.split(/[-_]/)[0] ;
    let language= ('zh'==language0 || 'en'==language0) ? language0 : 'zh' ;
    // 把值添加到 localStorage 解决刷新问题
    localStorage.locale = language;
    this.state = {
      locale: language,
      current: 'header_home',
    };

    dev_consolelog('Initialization Login successful .');

  }

  //  切换语言 触发
  changeLanguage= e=>{
    dev_consolelog(`change language ${e}`);
    // this.setState({
    //   locale:e,
    // });
    this.props.changeLanguage({
      language: e,
    });


    // 将值添加到 localStorage
    localStorage.locale = e;
  }
  

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };


  state = {
    // current: 'mail',
    collapsed: false,
  };


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  

  render() {
    // 提取目标语言 从 model 中获取
    const language=this.props.language;
    return (
      
      <IntlProvider locale={language} messages={messages[language]} >
      <Layout style={{ minHeight: '120vh' ,minWidth:'1150px',}}>
        <Layout>
          <Content
            style={{
              margin: '0px',
              padding: 0,
              background: '#fff',
              minHeight: 280,
              // borderRadius:'5px',
            }}
          >

          <div style={{
            background: '#FFFFFF',
          }}>
              <Row style={{
                // minHeight:'900px',
                color:'#333',
              }} >
                  <Col span={24} style={{
                    borderBottom:'1px solid #ddd',
                    height:'60px',
                    lineHeight:'50px',
                    padding:'5px 10px 0px',
                    fontSize:'18px',
                  }}>
                      <Col span={6} style={{
                      }} >
                          <Link to="/home" >
                              <img src={prorpo_logo} style={{
                                maxHeight:'40px',
                              }} />
                              <span
                              style={{
                                fontSize:'20px',
                                fontWeight:600,
                                cursor:'pointer',
                              }}
                              className={styles.myfont}
                              >&nbsp;PROPRO</span>
                          </Link>
                        
                      </Col>

                      <Col span={6} offset={12}
                      style={{
                          textAlign:'right',
                      }}
                      >
                          <Select defaultValue={language} style={{ 
                              padding:'5px 5px',
                              // marginLeft:'3px',
                              // height:'55px',
                            }} onChange={this.changeLanguage}>
                              <Option value="zh"  >中文</Option>
                              <Option value="en">English</Option>
                          </Select>
                

                          <Button type="primary"  style={{
                            padding:'0px 10px',
                            marginLeft:'8px',
                            height:'32px',
                            lineHeight:'32px',
                          }} >
                            <Link to="/home"
                            style={{
                              color:'#fff',
                              letterSpacing:'1px',
                            }}>
                              
                              <span>&nbsp;
                              <FormattedHTMLMessage
                              id="prorpo.home" />
                              </span>
                            </Link>
                          </Button>
                      </Col>
                  </Col>


              </Row>
          </div>
          

            <div  style={{ minHeight:'100vh', padding: 0,margin:0,background:'rgba(255,255,255,0.1)',   }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>

      </IntlProvider>
    );
  }
}





