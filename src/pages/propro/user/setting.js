// /src/pages/propro/user/setting.js
import { connect } from "dva";
import Link from "umi/link";
import { FormattedHTMLMessage } from "react-intl";
//   引入自定义的语言文件 js 格式
import messages_zh from "../../../locale/zh_CN";
import messages_en from "../../../locale/en_US";

const Languages = {
  zh: messages_zh,
  en: messages_en
};


import "bootstrap/dist/css/bootstrap.min.css";

import {
  Layout,
  Menu,
  Icon,
  Switch,
  Breadcrumb,
  Row,
  Col,
  Button,
  Dropdown,
  Select,
  Popconfirm,
  message,
  Tabs,
  Input,
  Modal
} from "antd";

import styles from "../style/user/setting.less";

const { TabPane } = Tabs;
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
    email = "",
    telephone = "",
    nick = "",
    organization = "",
    roles = ""
  } = state["login"];

  obj.login_status = login_status;
  obj.username = username;
  obj.email = email;
  obj.telephone = telephone;
  obj.nick = nick;
  obj.organization = organization;
  obj.roles = roles;

  return obj;
};

const userSettingDispatchToProps = dispatch => {
  return {
    // 登录触发器
    doLogin: login => {
      const action = {
        //  触发类型
        type: "login/doLogin",
        // 数据 payload 传入新的语言
        payload: login
      };
      // 触发
      dispatch(action);
    }
  };
};

/***********  UserSetting View 初始化 end  ***************/

@connect(
  userSettingStateToProps,
  userSettingDispatchToProps
)
// 用户设置  每个人都有权限
class UserSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      email: this.props.email,
      telephone: this.props.telephone,
      organization: this.props.organization,
      nick: this.props.nick,
      current_password: "",
      new_password: "",
      verify_password: ""
    };
  }

  error_login = e => {
    this.props.history.push("/error/login");
  };

  // 设置
  set_info = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { name } = e.target;
    let obj = {};
    if ("account" == name) {
      // 更新 account
      (obj.username = this.state.username),
        (obj.email = this.state.email),
        (obj.telephone = this.state.telephone),
        (obj.organization = this.state.organization),
        (obj.nick = this.state.nick);
      // 如果存在 空 弹出 警告 需要用户确认
      if ("" == obj.username) {
        // 这是错误 不存在的 不理睬
        Modal.error({
          title: "This is an error ",
          content: "What are you doing ?"
        });
        return -5;
      }

      let res = "";
      if ("" == obj.nick) {
        res += "昵称为空";
      }

      if ("" == obj.email) {
        res += "邮箱为空";
      }

      if ("" == obj.telephone) {
        res += "联系电话为空";
      }

      if ("" == obj.organization) {
        res += "组织名称为空";
      }

      if ("" != res) {
        // 弹出警告 通过警告调用另个一个更新函数

        return -4;
      }
    } else if ("password" == name) {
      // 先读取
      (obj.current_password = this.state.current_password),
        (obj.new_password = this.state.new_password),
        (obj.verify_password = this.state.verify_password);

      // 校验 当前密码
      if ("" == obj.current_password) {
        // 请输入当前密码
        return -3;
      }

      // 校验 新密码
      if (
        obj.new_password == obj.verify_password &&
        6 < obj.verify_password.toString().length
      ) {
        // 新密码初次校验通过
      } else {
        // 密码不符合条件
        // 弹出错误
        return -2;
      }
    } else {
      // 不存在的情况  除非注入
      return -1;
    }
    console.log(obj);
  };
  // let res = '';

  render() {
    //   检测是否已经登录 没有登录 弹出先登录 因为页面有可能过期 刷新时弹出
    if (0 != this.props.login_status) {
      // 未登录
      this.error_login();
      return -1;
    }

    const language = this.props.language;

    return (
      <div>
        <div
          style={{
            fontSize: "20px",
            marginBottom: "20px"
          }}
        >
          <FormattedHTMLMessage id="propro.user_setting" />
        </div>
        <Row>
          <Col lg={24} xl={20} xxl={16}>
            <Tabs
              tabPosition="top"
              className={styles.dark_color}
              style={{
                background: "#fff",
                padding: "0px 20px 20px",
                border: "1px solid #e5e9f2"
              }}
            >
              <TabPane
                // tab={Languages[language]["propro.user_account"]}
                tab={<FormattedHTMLMessage id="propro.user_account" />}
                key="2019-8-6 20:49:54"
                style={{
                  padding: "20px 0px"
                }}
              >
                <div
                  className="input-group-sm mb-3"
                  style={{
                    maxWidth: "350px"
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "10px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.user_username" />
                  </div>
                  <Input
                    value={this.state.username}
                    name="username"
                    disabled={false}
                    // 默认不开启编辑
                    // onChange={this.set_info}
                    key="2019-8-6 20:40:03"
                    maxLength={30}
                  />
                </div>

                <div
                  className="input-group-sm mb-3"
                  style={{
                    maxWidth: "350px"
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "10px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.nick" />
                  </div>
                  <Input
                    value={this.state.nick}
                    name="nick"
                    onChange={this.set_info}
                    key="2019-8-6 20:33:49"
                    maxLength={30}
                  />
                </div>

                <div
                  className="input-group-sm mb-3"
                  style={{
                    maxWidth: "350px"
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "10px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.email" />
                  </div>
                  <Input
                    value={this.state.email}
                    name="email"
                    onChange={this.set_info}
                    key="2019-8-6 20:33:43"
                    maxLength={30}
                  />
                </div>

                <div
                  className="input-group-sm mb-3"
                  style={{
                    maxWidth: "350px"
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "10px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.telephone" />
                  </div>
                  <Input
                    value={this.state.telephone}
                    name="telephone"
                    onChange={this.set_info}
                    key="2019-8-6 20:33:39"
                    maxLength={30}
                  />
                </div>

                <div
                  className="input-group-sm mb-3"
                  style={{
                    maxWidth: "350px"
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "10px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.organization" />
                  </div>
                  <Input
                    value={this.state.organization}
                    name="organization"
                    onChange={this.set_info}
                    key="2019-8-6 20:33:34"
                    maxLength={30}
                  />
                </div>

                <div
                  style={{
                    marginTop: "40px"
                  }}
                >
                  <Button
                    type="primary"
                    style={{
                      padding: "0px 15px",
                      height: "32px",
                      lineHeight: "32px"
                    }}
                    name="account"
                    onClick={this.handleSubmit}
                  >
                    <span>
                      &nbsp;
                      <FormattedHTMLMessage id="propro.user_saveinfo" />
                    </span>
                  </Button>
                </div>
              </TabPane>

              <TabPane
                tab={<FormattedHTMLMessage id="propro.user_password" />}
                key="2019-8-6 20:33:54"
                style={{
                  padding: "20px 0px"
                }}
              >
                <div
                  className="input-group-sm mb-3"
                  style={{
                    maxWidth: "350px"
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "10px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.user_current_password" />
                  </div>
                  <Input
                    type={"password"}
                    value={this.state.current_password}
                    name="current_password"
                    onChange={this.set_info}
                    key="2019-8-6 21:03:02"
                    maxLength={30}
                  />
                  <div
                    style={{
                      fontSize: "10px"
                    }}
                  >
                    <Link to="/login" className={styles.user_forgot_password}>
                      <FormattedHTMLMessage id="propro.forgot_password" />
                    </Link>
                  </div>
                </div>

                <div
                  className="input-group-sm mb-3"
                  style={{
                    maxWidth: "350px"
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "10px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.user_new_password" />
                  </div>
                  <Input
                    type={"password"}
                    value={this.state.new_password}
                    name="new_password"
                    onChange={this.set_info}
                    key="2019-8-6 21:04:59"
                    maxLength={30}
                  />
                </div>

                <div
                  className="input-group-sm mb-3"
                  style={{
                    maxWidth: "350px"
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "10px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.user_verify_password" />
                  </div>
                  <Input
                    type={"password"}
                    value={this.state.verify_password}
                    name="verify_password"
                    onChange={this.set_info}
                    key="2019-8-6 21:03:12"
                    maxLength={30}
                  />
                </div>

                <div
                  style={{
                    marginTop: "40px"
                  }}
                >
                  <Button
                    type="primary"
                    style={{
                      padding: "0px 15px",
                      height: "32px",
                      lineHeight: "32px"
                    }}
                    name="password"
                    onClick={this.handleSubmit}
                  >
                    <span>
                      &nbsp;
                      <FormattedHTMLMessage id="propro.user_saveinfo" />
                    </span>
                  </Button>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserSetting;
