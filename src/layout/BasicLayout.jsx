// path: /src/layout/BasicLayout.jsx
// 存放控制台界面的布局

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
  Select
} from "antd";

import Link from "umi/link";
import { connect } from "dva";

// import {Slider_menu} from './sider';
import "antd/dist/antd.less";
import styles from "./BasicLayout.less";
import "./Common.css";

// import logo from'../assets/propro-logo-hori.png'
import "./BasicLayout.css";
import prorpo_logo from "../assets/propro-logo-vertical.png";

/***********  国际化配置   ***************/
/***********  国际化配置   ***************/
//  1 引入组件
import {
  IntlProvider,
  addLocaleData,
  FormattedMessage,
  FormattedHTMLMessage
} from "react-intl";

//  2 引入语言包支持
import locale_en from "react-intl/locale-data/en";
import locale_zh from "react-intl/locale-data/zh";

//  3 引入自定义的语言文件 json 格式
import messages_zh from "../locale/zh_CN";
import messages_en from "../locale/en_US";

const messages = {
  zh: messages_zh,
  en: messages_en
};

//  4 设置语言支持
addLocaleData([...locale_en, ...locale_zh]);

/***********  国际化配置 end  ***************/

let consolelog = function() {
  let len = arguments.length;
  for (let i = 0; i < len; i++) {
    console.log(arguments[i]);
  }
};

consolelog(messages_zh);
// 开发模式
let dev_consolelog = function() {
  let len = arguments.length;
  for (let i = 0; i < len; i++) {
    console.log(arguments[i]);
  }
};

const { Header, Footer, Content, Sider } = Layout;

const { SubMenu } = Menu;

//  select 复选框
const { Option } = Select;

/***********  语言初始化   ***************/
/***********  语言初始化   ***************/

// state 发生改变 回调该函数 该函数返回新状态 直接导致页面刷新
const basicStateToProps = state => {
  // 先从 models 里读取
  const language = state["language"].language;
  // 读取token
  return {
    language
  };
};

// 语言改变触发器
const basicDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      const action = {
        //  触发类型
        type: "language/changeLanguage",
        // 数据 payload 传入新的语言
        payload: language
      };
      // 触发
      dispatch(action);
    }
  };
};

/***********  语言初始化 end  ***************/

@connect(
  basicStateToProps,
  basicDispatchToProps
)
export default class BasicLayout extends React.Component {
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

  constructor(props) {
    super(props);
    dev_consolelog("Initializing ...");

    // navigator.language.split(/[-_]/)  zh-CN
    // 默认从浏览器头读 但是只支持 中文 和 英语 没有读取成功 显示中文
    let local_language = localStorage.getItem("locale");
    let language0 =
      "zh" == local_language || "en" == local_language
        ? local_language
        : navigator.language.split(/[-_]/)[0];
    let language = "zh" == language0 || "en" == language0 ? language0 : "zh";

    // 把值添加到 localStorage 解决刷新问题
    localStorage.locale = language;
    this.state = {
      locale: language,
      current: "header_home"
    };

    dev_consolelog("Initialization successful .");
  }

  //  切换语言 触发
  changeLanguage = e => {
    dev_consolelog(`change language ${e}`);
    this.props.changeLanguage({
      language: e
    });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  state = {
    // current: 'mail',
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    // 提取目标语言
    const language = this.props.language;
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <Layout style={{ minHeight: "120vh", minWidth: "1150px" }}>
          <Sider
            theme="light"
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu
              theme="light"
              // defaultOpenKeys
              defaultSelectedKeys={["home1"]}
              mode="inline"
            >
              <Menu.Item key="home1">
                <Link to="/home">
                  <Icon type="pie-chart" />
                  <span>首页</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="1console">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>

              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>

              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0, height: 50 }}>
              <div
                style={{
                  height: "50px",
                  lineHeight: "50px"
                }}
              >
                <Row type="flex" justify="space-between">
                  <Col span={4} style={{}}>
                    <Icon
                      className={styles.trigger}
                      type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                      onClick={this.toggle}
                    />
                    <Link to="/">
                      <img
                        src={prorpo_logo}
                        style={{
                          height: "25px",
                          marginTop: "-6px",
                          cursor: "pointer"
                        }}
                      />
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          cursor: "pointer"
                        }}
                        className={styles.myfont}
                      >
                        &nbsp;PROPRO
                      </span>
                    </Link>
                  </Col>
                  <Col span={15}>
                    <Row type="flex" justify="end">
                      <Col span={20}>
                        <Menu
                          onClick={this.handleClick}
                          selectedKeys={[this.state.current]}
                          mode="horizontal"
                        >
                          <Menu.Item key="header_home">
                            <Link to="/home">
                              <FormattedHTMLMessage id="propro.home" />
                            </Link>
                          </Menu.Item>
                          <Menu.Item key="header_console">控制台</Menu.Item>
                          <SubMenu
                            title={
                              <span className="submenu-title-wrapper">
                                <Icon type="setting" />
                                2222222
                              </span>
                            }
                          >
                            <Menu.ItemGroup title="Item 1">
                              <Menu.Item key="setting:1">Option 1</Menu.Item>
                              <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                              <Menu.Item key="setting:3">Option 3</Menu.Item>
                              <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                          </SubMenu>
                          <Menu.Item key="alipay">
                            <a
                              href="https://ant.design"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              111
                            </a>
                          </Menu.Item>
                        </Menu>
                      </Col>
                    </Row>
                  </Col>

                  <Col
                    span={5}
                    style={{
                      // background:'#e34512',
                      textAlign: "right",
                      paddingRight: "5px"
                    }}
                  >
                    <Select
                      defaultValue={language}
                      style={{
                        padding: "5px 5px"
                        // marginLeft:'3px',
                        // height:'55px',
                      }}
                      onChange={this.changeLanguage}
                    >
                      <Option value="zh">中文</Option>
                      <Option value="en">English</Option>
                    </Select>

                    <Button
                      type="primary"
                      style={{
                        padding: "0px 10px",
                        marginLeft: "8px",
                        height: "32px",
                        lineHeight: "32px"
                      }}
                    >
                      <Link
                        to="/login"
                        style={{
                          color: "#fff",
                          letterSpacing: "1px"
                        }}
                      >
                        <Icon type="user" />
                        <span>
                          &nbsp;
                          <FormattedHTMLMessage
                            defaultMessage="登录"
                            id="propro.login"
                          />
                        </span>
                      </Link>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Header>
            <Content
              style={{
                margin: "20px 10px",
                padding: 24,
                background: "#fff",
                minHeight: 280,
                borderRadius: "5px"
              }}
            >
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                {this.props.children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </IntlProvider>
    );
  }
}
