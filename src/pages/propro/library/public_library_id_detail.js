// src/pages/propro/library/public_library_id_detail.js
// 公共标准库列表id 详情

/***
 * @Author              TangTao https://www.promiselee.cn/tao
 * @Email               tangtao2099@outlook.com
 * @Copyright           西湖大学 propro Tangtao
 * @GitHub              https://github.com/tangtaoshadow
 * @CreateTime          2019-8-16 02:10:43
 * @UpdateTime          2019-8-18 23:15:32
 * @Archive             显示 公共标准库 指定 id 的详情
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
  Badge
} from "antd";
const { TextArea } = Input;
import Highlighter from "react-highlight-words";

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
import detail_svg from "../style/static/library/detail.svg";
import proteins_list_svg from "../style/static/library/list.svg";
import unordered_list_svg from "../style/static/dashboard/unordered_list.svg";
import return_svg from "../style/static/dashboard/return.svg";
import preloader_svg from "../style/static/dashboard/preloader.svg";

/****************  导入 styles end ***************************/

/***********  public_library View 初始化   ***************/
/***********  public_library View 初始化   ***************/

const public_library_state_to_props = state => {
  let obj = {};

  // 先从 models 里读取 是否显示登录  当前语言
  const language = state["language"].language;
  if ("undefined" != typeof language) {
    obj.language = language;
  }

  let {
    public_library_list_id_detail_status,
    public_library_list_id_detail_time,
    public_library_id_detail_data
  } = state["public_library_id_detail"];

  (obj.public_library_list_id_detail_status = public_library_list_id_detail_status),
    (obj.public_library_list_id_detail_time = public_library_list_id_detail_time),
    (obj.public_library_id_detail_data = public_library_id_detail_data);
  return obj;
};

const public_library_dispatch_to_props = dispatch => {
  return {
    // 更新触发器
    get_public_library_list: id => {
      const action = {
        type: "public_library_id_detail/get_library_list_id_detail",
        payload: id
      };
      dispatch(action);
    },
    set_state_newvalue: data => {
      const action = {
        type: "public_library_id_detail/set_state_newvalue",
        payload: data
      };
      dispatch(action);
    }
  };
};

/***********  public_library View 初始化 end  ***************/

@connect(
  public_library_state_to_props,
  public_library_dispatch_to_props
)
class Library_list_detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      public_library_list_id_detail_status: -1,
      public_library_id_detail_data: {}
    };
    //   调用查询
    this.query_list_id_detail();
  }

  query_list_id_detail = () => {
    // /library/public_library/detail/5c6d4e59fc6f9e0b70702806
    let url = this.props.history.location.pathname;
    // 提取 id
    let index = url.lastIndexOf("/");
    let id = url.substring(index + 1, url.length);
    this.props.get_public_library_list(id);
  };

  handel_public_library_list_id_detail = () => {
    // 更新
    // 时间戳设置为 0
    this.props.set_state_newvalue({
      target: "public_library_list_id_detail_time",
      value: 0
    });

    if (0 == this.props.public_library_list_id_detail_status) {
      // 成功获取数据
      setTimeout(() => {
        this.set_public_library_id_detail_data(
          this.props.public_library_id_detail_data
        );
      }, 220);
    } else {
      // 数据获取失败
      setTimeout(() => {
        this.setState({
          public_library_list_id_detail_status: -1,
          public_library_id_detail_data: {}
        });
      }, 220);
      Modal.error({
        title: "False",
        content: Languages[this.props.language]["propro.network_error"],
        okText: Languages[this.props.language]["propro.user_modal_know"]
      });
      return -1;
    }
  };

  set_public_library_id_detail_data = obj => {
    // 提取关键参数
    let obj_data = {};
    let {
      createDate,
      creator,
      description,
      doPublic,
      fastaDeWeightPepCount,
      fastaDeWeightProtCount,
      generator,
      id,
      labels,
      lastModifiedDate,
      libraryDeWeightPepCount,
      libraryDeWeightProtCount,
      name,
      proteinCount,
      totalCount,
      totalUniqueCount,
      type,
      uniqueProteinCount
    } = obj;

    // 提取数据 rename
    (obj_data.create_date = tao.format_time(createDate)),
      (obj_data.creator = creator),
      (obj_data.description = description),
      (obj_data.do_public = doPublic),
      (obj_data.fastade_weight_pepcount = fastaDeWeightPepCount),
      (obj_data.fastade_weight_protcount = fastaDeWeightProtCount),
      (obj_data.generator = generator),
      (obj_data.id = id),
      (obj_data.labels = labels),
      (obj_data.last_modified_date = tao.format_time(lastModifiedDate)),
      (obj_data.library_deweight_pepcount = libraryDeWeightPepCount),
      (obj_data.library_deweight_protcount = libraryDeWeightProtCount),
      (obj_data.name = name),
      (obj_data.protein_count = proteinCount),
      (obj_data.total_count = totalCount),
      (obj_data.total_unique_count = totalUniqueCount),
      (obj_data.type = type),
      (obj_data.unique_protein_count = uniqueProteinCount);

    this.setState({
      public_library_id_detail_data: obj_data,
      public_library_list_id_detail_status: 0
    });
  };

  render() {
    // 监控 public_library_list 数据变化
    if (0 != this.props.public_library_list_id_detail_time) {
      // 资源有更新
      this.handel_public_library_list_id_detail();
    }
    if (0 != this.state.public_library_list_id_detail_status) {
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

    const detail_data = this.state.public_library_id_detail_data;

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
            title={<FormattedHTMLMessage id="propro.public_lib_title" />}
          >
            <Link to="/library/public_library">
              <img
                src={return_svg}
                style={{
                  height: "30px",
                  cursor: "pointer"
                }}
              />
            </Link>
          </Tooltip>

          <FormattedHTMLMessage id="propro.public_lib_detail_title" />
        </div>

        <div
          style={{
            background: "#FFFFFF",
            padding: "15px 10px",
            fontSize: "14px",
            border: "1px solid #e5e9f2",
            overflow: "auto"
          }}
        >
          <Row>
            <Col
              lg={24}
              xl={24}
              xxl={20}
              className={styles.font_primary_color}
              style={{
                textAlign: "left",
                fontSize: "14px",
                lineHeight: "30px"
              }}
            >
              <Descriptions
                bordered={true}
                column={4}
                size={"middle"}
                title={
                  <Fragment>
                    <Row>
                      <Col lg={8}>
                        <FormattedHTMLMessage id="propro.public_lib_detail_creator" />
                        :&nbsp;
                        <span
                          className={"badge " + `${styles.bg_second_color}`}
                          style={{ padding: "5px 10px", color: "#ffffff" }}
                        >
                          {detail_data.creator}
                        </span>
                      </Col>
                      <Col lg={8}>
                        <FormattedHTMLMessage id="propro.public_lib_detail_create_time" />
                        :&nbsp;
                        <span
                          className={"badge " + `${styles.bg_green_color}`}
                          style={{ padding: "5px 10px", color: "#FFFFFF" }}
                        >
                          {detail_data.create_date}
                        </span>
                      </Col>

                      <Col lg={8}>
                        <FormattedHTMLMessage id="propro.public_lib_detail_last_modify_time" />
                        :&nbsp;
                        <span
                          className={"badge " + `${styles.bg_yellow_color}`}
                          style={{ padding: "5px 10px", color: "#FFFFFF" }}
                        >
                          {detail_data.last_modified_date}
                        </span>
                      </Col>
                    </Row>
                  </Fragment>
                }
              >
                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_id" />
                  }
                  span={2}
                >
                  {detail_data.id}
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_name" />
                  }
                  span={2}
                >
                  {detail_data.name}
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_lib_type" />
                  }
                  span={2}
                >
                  <span className={styles.font_primary_color}>
                    {0 == detail_data.type ? (
                      <FormattedHTMLMessage id="propro.public_lib" />
                    ) : (
                      "IRT Library"
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_generator" />
                  }
                  span={2}
                >
                  <span className={styles.font_primary_color}>
                    {detail_data.generator}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_protein_count" />
                  }
                  span={2}
                >
                  <span
                    className={styles.font_second_color}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {0 == detail_data.protein_count ? (
                      <span className={styles.font_red_color}>0</span>
                    ) : (
                      detail_data.protein_count
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_unique_protein_count" />
                  }
                  span={2}
                >
                  <span
                    className={styles.font_second_color}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {0 == detail_data.unique_protein_count ? (
                      <span className={styles.font_red_color}>0</span>
                    ) : (
                      detail_data.unique_protein_count
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_deweight_protein_count" />
                  }
                  span={2}
                >
                  <span
                    className={styles.font_second_color}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {0 == detail_data.library_deweight_protcount ? (
                      <span className={styles.font_red_color}>0</span>
                    ) : (
                      detail_data.library_deweight_protcount
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_peptide_count" />
                  }
                  span={2}
                >
                  <span
                    className={styles.font_second_color}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {0 == detail_data.total_count ? (
                      <span className={styles.font_red_color}>0</span>
                    ) : (
                      detail_data.total_count
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_unique_peptide_count" />
                  }
                  span={2}
                >
                  <span
                    className={styles.font_second_color}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {0 == detail_data.total_unique_count ? (
                      <span className={styles.font_red_color}>0</span>
                    ) : (
                      detail_data.total_unique_count
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_deweight_peptide_count" />
                  }
                  span={2}
                >
                  <span
                    className={styles.font_second_color}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {0 == detail_data.library_deweight_pepcount ? (
                      <span className={styles.font_red_color}>0</span>
                    ) : (
                      detail_data.library_deweight_pepcount
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_fastade_weight_protein_count" />
                  }
                  span={2}
                >
                  <span
                    className={styles.font_second_color}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {0 == detail_data.fastade_weight_protcount ? (
                      <span className={styles.font_red_color}>0</span>
                    ) : (
                      detail_data.fastade_weight_protcount
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_fastade_weight_peptide_count" />
                  }
                  span={2}
                >
                  <span
                    className={styles.font_second_color}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {0 == detail_data.fastade_weight_pepcount ? (
                      <span className={styles.font_red_color}>0</span>
                    ) : (
                      detail_data.fastade_weight_pepcount
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_description" />
                  }
                  span={4}
                >
                  <span
                    className={styles.font_second_color}
                    style={{
                      fontWeight: "600"
                    }}
                  >
                    {"" == detail_data.description ? (
                      <span className={styles.font_red_color}>NULL</span>
                    ) : (
                      detail_data.description
                    )}
                  </span>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <FormattedHTMLMessage id="propro.public_lib_detail_peptide_analyse" />
                  }
                  span={4}
                >
                  <Link to="/console">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      style={{
                        padding: "5px",
                        height: "30px",
                        fontSize: "12px",
                        lineHeight: "20px"
                      }}
                    >
                      <FormattedHTMLMessage id="propro.public_lib_detail_re_statistic_analyse" />
                    </button>
                  </Link>

                  <Link to="/console">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      style={{
                        padding: "5px",
                        height: "30px",
                        fontSize: "12px",
                        lineHeight: "20px",
                        marginLeft: "10px"
                      }}
                    >
                      <FormattedHTMLMessage id="propro.public_lib_detail_generating_pseudopeptides" />
                      (Shuffle)
                    </button>
                  </Link>

                  <Link to="/console">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      style={{
                        padding: "5px",
                        height: "30px",
                        fontSize: "12px",
                        lineHeight: "20px",
                        marginLeft: "10px"
                      }}
                    >
                      <FormattedHTMLMessage id="propro.public_lib_detail_generating_pseudopeptides" />
                      (Nico)
                    </button>
                  </Link>

                  <Link to="/console">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      style={{
                        padding: "5px",
                        height: "30px",
                        fontSize: "12px",
                        lineHeight: "20px",
                        marginLeft: "10px"
                      }}
                    >
                      <FormattedHTMLMessage id="propro.public_lib_detail_delete_pseudopeptides" />
                    </button>
                  </Link>
                </Descriptions.Item>
              </Descriptions>

              <Col
                lg={24}
                style={{
                  margin: "30px 0px"
                }}
              >
                <Link
                  to={
                    "/library/public_library/update/" +
                    detail_data.id +
                    "_" +
                    detail_data.name
                  }
                >
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{
                      padding: "5px 10px",
                      height: "30px",
                      fontSize: "14px",
                      lineHeight: "20px",
                      marginLeft: "10px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.public_lib_detail_modify" />
                  </button>
                </Link>
                <Link to="/console">
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                      padding: "5px 10px",
                      height: "30px",
                      fontSize: "14px",
                      lineHeight: "20px",
                      marginLeft: "30px"
                    }}
                  >
                    <FormattedHTMLMessage id="propro.public_lib_detail_delete" />
                  </button>
                </Link>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Library_list_detail;
