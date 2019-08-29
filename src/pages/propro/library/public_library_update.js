// /src/pages/propro/library/public_library_update.js

/***
 * @Author              TangTao https://www.promiselee.cn/tao
 * @Email               tangtao2099@outlook.com
 * @Copyright           西湖大学 propro Tangtao
 * @GitHub              https://github.com/tangtaoshadow
 * @CreateTime          2019-8-14 23:48:57
 * @UpdateTime          2019-8-26 10:08:53
 * @Archive             更新公共标准库
 */

/****************  导入组件 ***************************/
/****************  导入组件 ***************************/

import { connect } from "dva";
import Link from "umi/link";
import { FormattedHTMLMessage } from "react-intl";
import { Fragment } from "react";

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
  Modal,
  Tooltip,
  Table,
  Divider,
  Tag,
  Descriptions,
  Badge,
  Form,
  Radio,
  Checkbox,
  Upload
} from "antd";
const { TextArea } = Input;
import Highlighter from "react-highlight-words";
import reqwest from "reqwest";
import tao from "../../../utils/common";
/****************  导入组件 end ***************************/

/****************  导入国际化语言 ***************************/
/****************  导入国际化语言 ***************************/
//   引入自定义的语言文件 js 格式
import messages_zh from "../../../locale/zh_CN";
import messages_en from "../../../locale/en_US";

const Languages = {
  zh: messages_zh,
  en: messages_en
};

/****************  导入国际化语言 end ***************************/

/****************  导入 styles ***************************/
/****************  导入 styles ***************************/
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../style/dashboard/console.less";
import "../../../layout/Common.css";
import custom_styles from "../style/static/library/public_library_update.less";
import detail_svg from "../style/static/library/detail.svg";
import proteins_list_svg from "../style/static/library/list.svg";
import unordered_list_svg from "../style/static/dashboard/unordered_list.svg";
import return_svg from "../style/static/dashboard/return.svg";
import preloader_svg from "../style/static/dashboard/preloader.svg";

/****************  导入 styles end ***************************/

/***********  public_library View 初始化   ***************/
/***********  public_library View 初始化   ***************/

const public_library_state_update_to_props = state => {
  let obj = {};

  // 先从 models 里读取 是否显示登录  当前语言
  const language = state["language"].language;
  if ("undefined" != typeof language) {
    obj.language = language;
  }

  let {
    public_library_update_status,
    public_library_update_time,
    public_library_id_detail_update_data
  } = state["public_library_update"];

  (obj.public_library_update_status = public_library_update_status),
    (obj.public_library_update_time = public_library_update_time),
    (obj.public_library_id_detail_update_data = public_library_id_detail_update_data);
  return obj;
};

const public_library_update_dispatch_to_props = dispatch => {
  return {
    // 更新触发器
    update_library_list_id_detail: data => {
      const action = {
        type: "public_library_update/update_library_list_id_detail",
        payload: data
      };
      dispatch(action);
    },
    set_state_newvalue: data => {
      const action = {
        type: "public_library_update/set_state_newvalue",
        payload: data
      };
      dispatch(action);
    }
  };
};

/***********  public_library View 初始化 end  ***************/

@connect(
  public_library_state_update_to_props,
  public_library_update_dispatch_to_props
)
class Public_library_update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      public_library_update_id: null,
      public_library_update_name: null,
      // 默认没有数据 状态为 -1  出错 -2 成功 0
      public_library_update_status: -1,
      // 默认是 library
      public_library_type: "library",
      // 边框样式
      upload_csv_library_style: false,
      //
      public_lib_update_only_target_peptides: false,
      peptide_file_list: [],
      csv_library_file_list: [],
      public_lib_detail_description: null,
      uploading: false
      //   language: this.props.language
    };

    // 注意: 这里实际上 id和name 是不允许更改的
    // 但是为了安全起见  第一 用户可以直接通过js注入修改
    // 第二 不管前端是否验证 后端会再次验证
    // 所以这里才采取通过 url 获取id和name
    // 其一 可以减少发起请求次数 其二 可以不依赖model层 因为数据携带在url中
    setTimeout(() => {
      this.get_public_library_id_name();
    }, 400);
  }

  get_public_library_id_name = () => {
    let url = this.props.history.location.pathname;
    // 从 url 后缀中 id_name 解析 id name
    let index = url.lastIndexOf("/");
    let str = url.substring(index + 1, url.length);

    index = str.indexOf("_");
    let id = str.substring(0, index) + "";

    let name = str.substring(index + 1) + "";
    if (0 == id.length || 0 == name.length) {
      //  url 失败
      this.setState({
        public_library_update_status: -2
      });
    } else {
      this.setState({
        public_library_update_status: 0,
        public_library_update_id: id,
        public_library_update_name: name
      });
    }
  };

  change_library_type = e => {
    // 更新 type
    this.setState({
      public_library_type: e.target.value
    });
  };

  change_only_target_peptides = e => {
    this.setState({
      public_lib_update_only_target_peptides: e.target.checked
    });
  };

  // 上传
  upload_peptide_list_file = e => {
    console.log("=============");
    console.log(e);
  };

  before_upload_peptide_list_file = file => {
    console.log(" before_upload_peptide_list_file ");
    console.log(file);
    this.setState(state => ({
      peptide_file_list: [...state.peptide_file_list, file]
    }));
    return false;
  };

  // 详情
  change_detail_description = e => {
    this.setState({
      public_lib_detail_description: e.target.value
    });
  };

  aaaa = () => {
    console.log("lllllllll");
  };
  // 提交表单
  handle_submit = () => {
    // 读取 peptide_file_list
    let obj = {};
    obj.peptide_file_list = this.state.peptide_file_list;
    obj.csv_library_file_list = this.state.csv_library_file_list;

    obj.id = this.state.public_library_update_id;
    obj.name = this.state.public_library_update_name;
    obj.library_type = this.state.public_library_type;
    obj.only_target_peptides = this.state.public_lib_update_only_target_peptides;
    obj.detail_description = this.state.public_lib_detail_description;

    if ("" == obj.csv_library_file_list) {
      console.log("nonono");
      return -1;
    }

    this.props.update_library_list_id_detail(obj);
  };

  change_csv_file = e => {
    this.setState({
      csv_library_file_list: e.target.files[0]
    });
    console.log(e.target.files[0]);
    console.log(e.target.value);
  };

  open_csv_file = () => {
    // 打开上传文件
    document.getElementById("public_lib_update_upload_csv_library").click();
  };

  upload_csv_file_css = () => {
    this.setState(state => ({
      // 取反样式
      upload_csv_library_style: !state.upload_csv_library_style
    }));
  };

  render() {
    if (0 != this.state.public_library_update_status) {
      // 加载 ...
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

    const { peptide_file_list, csv_library_file_list } = this.state;
    const peptide_file_list_props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.peptide_file_list.indexOf(file);
          const new_file_list = state.peptide_file_list.slice();
          new_file_list.splice(index, 1);
          return {
            peptide_file_list: new_file_list
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          peptide_file_list: [...state.peptide_file_list, file]
        }));
        return false;
      },
      peptide_file_list
    };
    const csv_library_file_list_props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.csv_library_file_list.indexOf(file);
          const new_file_list = state.csv_library_file_list.slice();
          new_file_list.splice(index, 1);
          return {
            csv_library_file_list: new_file_list
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          csv_library_file_list: [...state.csv_library_file_list, file]
        }));
        return false;
      },
      csv_library_file_list
    };

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
            title={<FormattedHTMLMessage id="propro.public_lib_detail_title" />}
          >
            <Link
              to={
                "/library/public_library/detail/" +
                this.state.public_library_update_id
              }
            >
              <img
                src={return_svg}
                style={{
                  height: "30px",
                  cursor: "pointer"
                }}
              />
            </Link>
          </Tooltip>

          <FormattedHTMLMessage id="propro.public_lib_update_title" />
        </div>

        {/* <div>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> Select File
            </Button>
          </Upload>
          <Button
            type="primary"
            onClick={this.handleUpload}
            disabled={peptide_file_list.length === 0}
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? "Uploading" : "Start Upload"}
          </Button>
        </div> */}

        <div
          style={{
            background: "#FFFFFF",
            padding: "20px",
            fontSize: "14px",
            border: "1px solid #e5e9f2",
            maxWidth: "600px",
            overflow: "auto"
          }}
        >
          {/* name */}

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
              <FormattedHTMLMessage id="propro.public_lib_detail_name" />
            </div>
            <Input
              value={this.state.public_library_update_name}
              maxLength={30}
            />
          </div>

          {/* id */}
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
              <FormattedHTMLMessage id="propro.public_lib_detail_id" />
            </div>
            <Input value={this.state.public_library_update_id} maxLength={30} />
          </div>

          {/* type */}
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
              <FormattedHTMLMessage id="propro.public_lib_detail_lib_type" />
            </div>
            <div>
              <Radio.Group
                defaultValue={this.state.public_library_type}
                onChange={this.change_library_type}
              >
                <Radio value="library">
                  <FormattedHTMLMessage id="propro.console_lib" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </Radio>
                <Radio value="irt_library">
                  <FormattedHTMLMessage id="propro.console_irt_lib" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </Radio>
              </Radio.Group>
            </div>

            <Checkbox
              onChange={this.change_only_target_peptides}
              style={{
                fontSize: "12px",
                marginTop: "8px"
              }}
            >
              <FormattedHTMLMessage id="propro.public_lib_update_only_target_peptides" />
            </Checkbox>
          </div>

          {/* description */}
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
              <FormattedHTMLMessage id="propro.public_lib_detail_description" />
            </div>
            <TextArea
              onChange={this.change_detail_description}
              rows={5}
              maxLength={120}
            />
          </div>

          {/* upload library */}
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
              <span className={styles.font_red_color}>*</span>
              <FormattedHTMLMessage id="propro.public_lib_update_upload_csv_library" />
            </div>

            <Upload.Dragger {...csv_library_file_list_props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                <FormattedHTMLMessage id="propro.public_lib_update_upload_file_description" />
              </p>
            </Upload.Dragger>
          </div>

          {/* upload peptide list */}
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
              <FormattedHTMLMessage id="propro.public_lib_update_only_upload_peptide_list" />
            </div>

            <Upload.Dragger
              {...peptide_file_list_props}
              // beforeUpload={this.before_upload_peptide_list_file}
              // onChange={this.upload_peptide_list_file()}
              // multiple={false}
              // peptide_file_list={this.state.peptide_file_list}
            >
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                <FormattedHTMLMessage id="propro.public_lib_update_upload_file_description" />
              </p>
            </Upload.Dragger>
          </div>

          {/* submit */}

          <div
            style={{
              marginTop: "30px",
              marginBottom: "10px"
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
              onClick={this.handle_submit}
            >
              <span>
                &nbsp;
                <FormattedHTMLMessage id="propro.public_lib_update_submit" />
              </span>
            </Button>
          </div>

          {/* 提取 */}
        </div>
      </div>
    );
  }
}

export default Public_library_update;
