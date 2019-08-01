import styles from './style/login.less';
import  './style/login.css';
import prorpo_logo_hori from '../../assets/propro-logo-hori.png';
import guomics_logo from '../../assets/guomics-logo.png';
import Link from 'umi/link';
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入 dva 
// import dva, { connect } from 'dva';

import {  Layout, Menu, Icon , 
  Switch,Breadcrumb,Row,Tag, 
  Col,Button,Dropdown,Select, Form,  Input,Checkbox    } from 'antd';



// // dva 1. Initialize
// const app = dva();


// // dva 2. Model
// app.model({
//   namespace: 'count',
//   state: 0,
//   reducers: {
//     add  (count) { return count + 1 },
//     minus(count) { return count - 1 },
//   },
// });

// class TestError extends React.Component {
//   componentDidCatch(e) {
//     alert(e.message);
//   }
//   componentDidMount() {
//     // throw new Error('a');
//   }
//   render() {
//     return <div>TestError</div>
//   }
// }

// // 3. View 连接
// const App = connect(({ count }) => ({
//   count
// }))(function(props) {
//   return (
//     <div>
//       <TestError />
//       <h2>{ props.count }</h2>
//       <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
//       <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
//     </div>
//   );
// });

// 4. Router
// app.router(() => <App />);

  // 5. Start
  // app.start("#root");
  
class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  ApplyCount= e => {
    console.log('1111111');
    this.setState({
      
    })
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
              欢迎来到 <span style={{
                letterSpacing:'0px',
              }}>PROPRO</span> 
            </div>

            
            <Form.Item>
              {getFieldDecorator('username1', {
                rules: [{ required: true, message: 'Please input your username11111111!' }],
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
                          }} ><Icon type="user" /></span>
                    </div>
                    <input type="text" maxLength='20' className={styles.input_login} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>,
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(
                <div className="input-group" style={{
                  marginTop:'0px',
                }}>
                    <div className="input-group-prepend" style={{
                            fontSize:'20px',
                            lineHeight:'30px',
                            height:'30px',
                          }} >
                          <span style={{
                            fontSize:'16px',
                          }} ><Icon type="lock" /></span>
                    </div>
                    <input type="password" maxLength='30' className={styles.input_login} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
              >登录</button>

              <button type="button" className="btn btn-outline-dark" style={{
                borderRadius:'23px',
                height:'46px',
                padding:'0px 30px',
                fontSize:'16px',
                minWidth:'120px',
                float:'right',
                marginRight:'10px',
              }}
              onClick={this.ApplyCount}
              >申请账号</button>
            </Form.Item>


            <div style={{
              textAlign:'right',
              paddingRight:'10px',
            }}>

       
              <Link to='/login' style={{
                color:'#888',
              }}>
                <span>
                忘记密码
                </span>
              </Link>

              <br/>
            </div>
          </Form>
      </div>

    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
  
class RegisterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

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
              fontSize:'22px',
              fontWeight:'600',
            }}>
              欢迎来到 <span >PROPRO</span> 
            </div>

            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item style={{
              paddingTop:'30px',
              marginBottom:'10px',
            }}>
            
              <Button type="primary" htmlType="submit" className="login-form-button" style={{
                float:'left',
                marginLeft:'10px',
                width:'130px',
                height:'35px',
                fontSize:'16px',
              }}>
                登录
              </Button>

              <Button type="danger" style={{
                marginRight:'10px',
                float:'right',
                width:'130px',
                height:'35px',
                lineHeight:'35px',
                fontSize:'16px',

              }}
              >申请账号</Button>
            </Form.Item>
            <div style={{
              textAlign:'right',
              paddingRight:'10px',
            }}>
            <a className="login-form-forgot" href=""
              style={{
                color:'#888',
              }}>
                11111
              </a>
              <br/>
            </div>
          </Form>
      </div>

    );
  }
}



const WrappedRegisterForm = Form.create({ name: 'normal_register' })(RegisterForm);





export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // 标记 是否显示登录
      login: true,
    };
  }

  render(){
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
              }}>
              Proteomics Analysis Platform
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
              {true==this.state.login? <WrappedLoginForm /> :<WrappedRegisterForm /> }
              
            </Col>
          </Row>
        
        </div>
      
      );
}

}



