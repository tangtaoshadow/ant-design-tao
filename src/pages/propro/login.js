import styles from './style/login.less';
import  './style/login.css';
import prorpo_logo_hori from '../../assets/propro-logo-hori.png';
import guomics_logo from '../../assets/guomics-logo.png';
import Link from 'umi/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { connect } from 'dva';
import {FormattedHTMLMessage} from "react-intl";

// 引入 dva 
// import dva, { connect } from 'dva';

import {  Layout, Menu, Icon , 
  Switch,Breadcrumb,Row,Tag, 
  Col,Button,Dropdown,Select, Form,  Input, Checkbox    } from 'antd';

/***********  Login View 初始化   ***************/
/***********  Login View 初始化   ***************/


// state 发生改变 回调该函数 该函数返回新状态 直接导致页面刷新
const loginStateToProps = (state) => {
  // 先从 models 里读取 是否显示登录  当前语言
  const login_show = state['login'].login_show;
  const language = state['language'].language;
  return {
    login_show,language,
  };
};

// 语言改变触发器
const loginDispatchToProps = (dispatch) => {
  return {
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
  };
};

/***********  Login View 初始化 end  ***************/



@connect(loginStateToProps,loginDispatchToProps)
class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      locale:localStorage.getItem("locale"),
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  applyCount= e => {
    this.props.changeLogin({
      login: false,
    });
  }



  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{
        width:'350px',
        textAlign:'center',
        margin:'auto',
      }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <div style={{
              marginBottom:'20px',
              fontSize:'20px',
              fontWeight:'600',
              letterSpacing:'1px',
            }}>
              <FormattedHTMLMessage
                  id="propro.welcome_login" /> <span style={{
                letterSpacing:'0px',
              }}>PROPRO</span> 
            </div>

            
            <Form.Item>
              {getFieldDecorator('username1', {
                rules: [{ required: true, message: <FormattedHTMLMessage
                  id="propro.login_username_error" /> }],
              })(
                <div className="input-group " style={{
                  // borderBottom:'1px solid #ddd',
                  marginBottom:'0px',
                }}>
                    <div className="input-group-prepend" style={{
                            fontSize:'20px',
                            lineHeight:'30px',
                            height:'30px',
                          }} >
                          <span style={{
                            fontSize:'16px',
                            lineHeight:'20px',
                          }} ><Icon type="user" /></span>
                    </div>
                    <input type="text" maxLength='20' className={styles.input_login} placeholder={"zh"== this.props.language ? "用户名" : "Username"} />
                </div>,
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: <FormattedHTMLMessage
                  id="propro.login_password_error" />}],
              })(
                <div className="input-group" style={{
                  marginTop:'-5px',
                }}>
                    <div className="input-group-prepend" style={{
                            fontSize:'20px',
                            lineHeight:'30px',
                            height:'30px',
                          }} >
                          <span style={{
                            fontSize:'16px',
                            lineHeight:'20px',
                          }} ><Icon type="lock" /></span>
                    </div>
                    <input type="password" maxLength='30' className={styles.input_login} placeholder={"zh"== this.props.language ? "密码" : "Password"} />
                </div>,
              )}
            </Form.Item>

            <Form.Item style={{
              paddingTop:'30px',
              marginBottom:'10px',
            }}>

              <button type="button" className="btn btn-dark" style={{
                borderRadius:'23px',
                height:'46px',
                padding:'0px 30px',
                fontSize:'16px',
                minWidth:'120px',
                float:'left',
                marginLeft:'10px',
              }}
              onClick={this.handleSubmit}
              ><FormattedHTMLMessage
              id="prorpo.login" /></button>

              <button type="button" className="btn btn-outline-dark" style={{
                borderRadius:'23px',
                height:'46px',
                padding:'0px 30px',
                fontSize:'16px',
                minWidth:'120px',
                float:'right',
                marginRight:'10px',
              }}
              onClick={this.applyCount}
              ><FormattedHTMLMessage
              id="prorpo.apply_account" /></button>
            </Form.Item>


            <div style={{
              textAlign:'right',
              paddingRight:'10px',
            }}>

       
              <Link to='/login' style={{
                color:'#888',
              }}>
                <FormattedHTMLMessage
                id="prorpo.forget_password" />
              </Link>

            </div>
          </Form>
      </div>

    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

// 注册表单
@connect(loginStateToProps,loginDispatchToProps)
class RegisterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  switchLogin= e => {
    this.props.changeLogin({
      login: true,
    });
  }

  render() {

    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{
        width:'350px',
        textAlign:'center',
        margin:'auto',
      }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <div style={{
              marginBottom:'20px',
              fontSize:'20px',
              fontWeight:'600',
              letterSpacing:'1px',
            }}>
              <FormattedHTMLMessage
                  id="propro.welcome_register" /> <span style={{
                letterSpacing:'0px',
              }}>PROPRO</span> 
            </div>

            <Form.Item>
              {getFieldDecorator('username1', {
                rules: [{ required: true, message: <FormattedHTMLMessage
                  id="propro.login_username_error" /> }],
              })(
                <div className="input-group " style={{
                  // borderBottom:'1px solid #ddd',
                  marginBottom:'0px',
                }}>
                    <div className="input-group-prepend" style={{
                            fontSize:'20px',
                            lineHeight:'30px',
                            height:'30px',
                          }} >
                          <span style={{
                            fontSize:'16px',
                            lineHeight:'20px',
                          }} ><Icon type="user" /></span>
                    </div>
                    <input type="text" maxLength='20' className={styles.input_login} placeholder={"zh"== this.props.language ? "用户名" : "Username"} />
                </div>,
              )}
            </Form.Item>


            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: <FormattedHTMLMessage
                  id="propro.login_password_error" />}],
              })(
                <div className="input-group" style={{
                  marginTop:'-5px',
                }}>
                    <div className="input-group-prepend" style={{
                            fontSize:'20px',
                            lineHeight:'30px',
                            height:'30px',
                          }} >
                          <span style={{
                            fontSize:'16px',
                            lineHeight:'20px',
                          }} ><Icon type="lock" /></span>
                    </div>
                    <input type="password" maxLength='30' className={styles.input_login} placeholder={
                    "zh"== this.props.language ? "密码" : "Password"} />
                </div>,
              )}
            </Form.Item>


            <Form.Item>
              {getFieldDecorator('telephone', {
                rules: [{ required: true, message: <FormattedHTMLMessage
                  id="propro.register_telephone_error" />}],
              })(
                <div className="input-group" style={{
                  marginTop:'-5px',
                }}>
                    <div className="input-group-prepend" style={{
                            fontSize:'20px',
                            lineHeight:'30px',
                            height:'30px',
                          }} >
                          <span style={{
                            fontSize:'16px',
                            lineHeight:'20px',
                          }} ><Icon type="phone" /></span>
                    </div>
                    <input type="text" maxLength='30' className={styles.input_login} placeholder={"zh"== this.props.language ? "联系电话" : "Telephone number"} />
                </div>,
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('dingtalk_id', {
                rules: [{ required: false, }],
              })(
                <div className="input-group" style={{
                  marginTop:'-5px',
                }}>
                    <div className="input-group-prepend" style={{
                            fontSize:'20px',
                            lineHeight:'30px',
                            height:'30px',
                          }} >
                          <span style={{
                            fontSize:'16px',
                            lineHeight:'20px',
                          }} ><Icon type="dingding" /></span>
                    </div>
                    <input type="text" maxLength='30' className={styles.input_login} placeholder={"zh"== this.props.language ? "钉钉 ID" : "DingTalk ID"} />
                </div>,
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('organization', {
                rules: [{ required: false, }],
              })(
                <div className="input-group" style={{
                  marginTop:'-5px',
                }}>
                    <div className="input-group-prepend" style={{
                            fontSize:'20px',
                            lineHeight:'30px',
                            height:'30px',
                          }} >
                          <span style={{
                            fontSize:'16px',
                            lineHeight:'20px',
                          }} ><Icon type="team" /></span>
                    </div>
                    <input type="text" maxLength='30' className={styles.input_login} placeholder={"zh"== this.props.language ? "组织" : "Organization"} />
                </div>,
              )}
            </Form.Item>




            <Form.Item style={{
              paddingTop:'30px',
              marginBottom:'10px',
            }}>

              <button type="button" className="btn btn-dark" style={{
                borderRadius:'23px',
                height:'46px',
                padding:'0px 30px',
                fontSize:'16px',
                minWidth:'120px',
                float:'left',
                marginLeft:'10px',
              }}
              onClick={this.handleSubmit}
              ><FormattedHTMLMessage
              id="prorpo.apply_account_confirm" /></button>

              <button type="button" className="btn btn-outline-dark" style={{
                borderRadius:'23px',
                height:'46px',
                padding:'0px 30px',
                fontSize:'16px',
                minWidth:'120px',
                float:'right',
                marginRight:'10px',
              }}
              onClick={this.switchLogin}
              ><FormattedHTMLMessage
              id="prorpo.apply_account_cancel" /></button>
            </Form.Item>


          </Form>
      </div>

    );
  }
}



const WrappedRegisterForm = Form.create({ name: 'normal_register' })(RegisterForm);




@connect(loginStateToProps,loginDispatchToProps)
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // 标记 是否显示登录
      // login: true,
    };
  }




  render(){
    const {login_show}=this.props;
      return (
        <div className={styles.main} >
          <Row>
            <Col span={13}
            style={{
              fontSize:'22px',
              textAlign:'center',
              // background:'#eee111',
            }}
            >
              
              <div style={{
                fontWeight:'500',
                fontSize:'50px',
                letterSpacing :'1px',
              }}>
              <FormattedHTMLMessage id="propro.line1" />
              </div>
              <div style={{
                fontWeight:'900',
                fontSize:'70px',
              }}>
                    <span style={{
                      color:'#212529',
                    }}>
                      Propro 
                      &nbsp;
                    </span>

                <span style={{
                  fontSize:'10px',
                  fontWeight:'500',
                  // fontStyle:'italic',
                }}>
                1.1.1-Release
                </span>
              </div>
 

              <div style={{
                // fontWeight:'500',
                fontSize:'28px',
                paddingTop:'10px',
              }}>
                Focus on
                  <span style={{
                    fontWeight:'900',
                  }}>
                  &nbsp;DIA/SWATH &amp; PRM&nbsp;
                  </span>
                analysis
              </div>

              <div style={{
                paddingTop:'0px',
              }}>
                  <Tag 
                    style={{
                      cursor:'pointer',
                    }}
                    color="#716aca">
                      <a href='https://www.java.com/' target='_blank'>
                          Java OpenJDK
                      </a>
                  </Tag>
                  
                  <Tag 
                  style={{
                    cursor:'pointer',
                  }}
                  color="#36a3f7">
                    <a href='https://spring.io/projects/spring-boot/' target='_blank'>
                          SpringBoot
                    </a>
                  </Tag>
                  <Tag 
                  style={{
                    cursor:'pointer',
                  }}
                  color="#5867dd">
                      <a href='https://github.com/Propro-Studio/propro-server' target='_blank'>
                              GitHub
                      </a>
                  </Tag>
                  <Tag 
                  style={{
                    cursor:'pointer',
                  }}
                  color="#00c5dc">
                      <a href='https://gitee.com/lums/propro' target='_blank'>
                              Gitee
                      </a>
                  </Tag>
                  <Tag 
                  style={{
                    cursor:'pointer',
                  }}
                  color="#ffb822">
                      <a href='https://www.apache.org/licenses/LICENSE-2.0.html' target='_blank'>
                            Apache License 2.0
                      </a>
                  </Tag>

                  <Tag 
                  style={{
                    cursor:'pointer',
                  }}
                  color="#f4516c">
                      <a href='https://www.yuque.com/proteomicspro/documentation' target='_blank'>
                              Documents
                      </a>
                  </Tag>
              </div>
              

              <div style={{
                    paddingTop:'100px',
              }}>

                <a href='http://www.proteomics.pro/' target='_blank'>
                    <img src={prorpo_logo_hori} style={{
                      maxHeight:'80px',
                      cursor:'pointer',
                    }} />
                </a>

                <a href='http://www.guomics.com/' target='_blank'>
                    <img src={guomics_logo} style={{
                      marginLeft:'80px',
                      maxHeight:'100px',
                      cursor:'pointer',
                    }} />
                </a>
                
              </div>


            </Col>
            {/* 登录 注册 */}
            <Col span={11} style={{
              paddingLeft:'10px',
              margin:'auto',
              textAlign:'center',
            }} >
              {/* 判断是否需要渲染 登录 */}
              {true == login_show ? <WrappedLoginForm /> :<WrappedRegisterForm /> }
              
            </Col>
          </Row>
        </div>
      
      );
}

}



