// src/pages/propro/analysis/list.js
// public_irt 公共irt 标准库 列表

/***
 * @Author              TangTao https://www.promiselee.cn/tao
 * @Email               tangtao2099@outlook.com
 * @Copyright           西湖大学 propro Tangtao
 * @GitHub              https://github.com/tangtaoshadow
 * @Zhihu               https://www.zhihu.com/people/tang-tao-24-36/activities
 * @CreateTime          2019-9-13 15:18:17  今天是中秋节
 * @UpdateTime          2019-9-18 10:09:56
 * @Archive             分析列表
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
  BackTop
} from "antd";

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
import public_library_scg from "../style/static/library/public.svg";
import update_library_svg from "../style/static/library/update.svg";
import arrow_up_svg from "../style/static/analysis/arrow_up.svg";
import report_svg from "../style/static/analysis/report.svg";
import list_svg from "../style/static/analysis/list.svg";
import score_svg from "../style/static/analysis/score.svg";
import identification_svg from "../style/static/analysis/identification.svg";
import export_svg from "../style/static/analysis/export.svg";
import delete_svg from "../style/static/analysis/delete.svg";
import return_svg from "../style/static/dashboard/return.svg";
import preloader_svg from "../style/static/dashboard/preloader.svg";
import { compose } from "redux";

/****************  导入 styles end ***************************/

/***********  analysis View 初始化   ***************/
/***********  analysis View 初始化   ***************/

const analysis_state_to_props = state => {
  // 发送的对象
  let obj = {};

  // 先从 models 里读取 是否显示登录  当前语言
  const language = state["language"].language;
  if ("undefined" != typeof language) {
    obj.language = language;
  }

  let {
    analysis_list_status = -1,
    analysis_list_time = 0,
    analysis_list_data = {},
    analysis_list_delete_status = -1,
    analysis_list_delete_time = 0,
    analysis_list_delete_data = {},
    analysis_list_query_project_name_status = -1,
    analysis_list_query_project_name_time = 0,
    analysis_list_query_project_name_data = {}
  } = state["analysis_list"];

  (obj.analysis_list_query_project_name_status = analysis_list_query_project_name_status),
    (obj.analysis_list_query_project_name_time = analysis_list_query_project_name_time),
    (obj.analysis_list_query_project_name_data = analysis_list_query_project_name_data),
    (obj.analysis_list_delete_status = analysis_list_delete_status),
    (obj.analysis_list_delete_time = analysis_list_delete_time),
    (obj.analysis_list_delete_data = analysis_list_delete_data),
    (obj.analysis_list_status = analysis_list_status),
    (obj.analysis_list_time = analysis_list_time),
    (obj.analysis_list_data = analysis_list_data);

  return obj;
};

const analysis_dispatch_to_props = dispatch => {
  return {
    // 更新触发器
    get_analysis_list: data => {
      const action = {
        type: "analysis_list/get_analysis_list",
        payload: data
      };
      dispatch(action);
    },
    delete_analysis_list: data => {
      const action = {
        type: "analysis_list/delete_analysis_list",
        payload: data
      };
      dispatch(action);
    },
    query_project_name_by_exp_id: data => {
      const action = {
        type: "analysis_list/query_project_name_by_exp_id",
        payload: data
      };
      dispatch(action);
    },
    set_state_newvalue: data => {
      const action = {
        type: "analysis_list/set_state_newvalue",
        payload: data
      };
      dispatch(action);
    }
  };
};

/***********  analysis View 初始化 end  ***************/

@connect(
  analysis_state_to_props,
  analysis_dispatch_to_props
)
class Analysis_list extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   查询到的标准库数据
      analysis_list_data: [],
      // 默认没有数据 状态为 -1 这个变量 暂时用不着 但是后续扩展会用到
      analysis_list_status: -1,
      // 请求失败再次发起请求的尝试次数
      analysis_list_false_time: 5,
      search_text: "",
      analysis_list_table_columns: null,
      // modal 配置
      modal_visible: false,
      delete_analysis_list_id: null
      //   language: this.props.language
    };

    setTimeout(() => {
      this.query_analysis_list();
    }, 100);

    // 配置 message
    message.config({
      top: 500,
      duration: 2,
      maxCount: 5,
      getContainer: () => document.body
    });
    // 配置表格列参数
    this.config_table_columns();
  }

  refresh_data = () => {
    setTimeout(() => {
      // 显示加载界面
      this.setState({
        analysis_list_status: -1
      });
      // 立即重新发起查询
      this.query_analysis_list();
    }, 800);
  };

  // 查询 analysis_list 列表
  query_analysis_list = () => {
    let url = this.props.history.location.pathname;
    let find_str = "/list_exp_id/";
    let index = url.lastIndexOf(find_str);
    let exp_id = url.substring(index + find_str.length);

    let obj = {};
    if (3 < index) {
      // 找到 exp_id 发起查询
      obj.exp_id = exp_id;
    }

    this.props.get_analysis_list(obj);
  };

  handle_analysis_list = () => {
    // 时间戳设置为 0
    this.props.set_state_newvalue({
      target: "analysis_list_time",
      value: 0
    });

    // 检查状态
    if (0 == this.props.analysis_list_status) {
      // 数据获取成功
      setTimeout(() => {
        // 调用 添加更新数据函数
        this.change_analysis_list_data();
      }, 200);
    } else {
      // 数据获取失败
      // 1-弹出警告
      Modal.error({
        title: "False",
        content: Languages[this.props.language]["propro.network_error"],
        okText: Languages[this.props.language]["propro.user_modal_know"]
      });
      // 过一段时间 尝试再次连接服务器 这个时间要稍微长一点 用户体验会比较好
      let { analysis_list_false_time } = this.state;
      // 2-判断是否需要再次发起请求
      if (0 >= analysis_list_false_time) {
        console.error(
          "@Author:tangtao; 系统已终止运行,请重新刷新页面; ",
          "初步诊断:未能成功连接到 propro-server 的服务器或者未能成功解析返回的数据"
        );
        // 终止发送
        return -1;
      }

      // 写入新的请求失败参数
      setTimeout(() => {
        this.setState({
          analysis_list_false_time: analysis_list_false_time--
        });
      }, 120);

      return -1;
    }

    return 0;
  };

  change_analysis_list_data = () => {
    console.log(this.props.analysis_list_data);

    /*
        TotalNumbers: 15
        currentPage: 1
        overviews: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        pageSize: 500
        scores: (20) ["MainScore", "BseriesScore", "IntensityScore", "IsotopeCorrelationScore", "IsotopeOverlapScore", "LibraryCorr", "LibraryRsmd", "LogSnScore", "MassdevScore", "MassdevScoreWeighted", "NormRtScore", "XcorrCoelution", "XcorrCoelutionWeighted", "XcorrShape", "XcorrShapeWeighted", "LibraryDotprod", "LibraryManhattan", "LibrarySangle", "LibraryRootmeansquare", "YseriesScore"]
        totalPage: 1
      */
    //   提取 model 层 传过来的数据
    const {
      totalPage: total_page,
      pageSize: page_size,
      currentPage: current_page,
      TotalNumbers: total_numbers,
      overviews: overviews_list,
      scores: scores_list
    } = this.props.analysis_list_data;

    let { length: len0 } = overviews_list;
    let obj_data = null;

    /*
        classifier: "lda"
        createDate: 1563880749512
        decoyDistributions: {0-0_001: 12, 0_9-1_0: 0, 0_007-0_008: 24, 0_09-0_1: 484, 0_03-0_04: 348, …}
        expId: "5d22faca8536e9793683a57e"
        // 实验名称
        expName: "C20181210yix_HCC_DIA_T_24A"
        fdr: 0.01
        // 分析概览 id
        id: "5d36ed2d9063e34625b75fad"
        intercept: -49.09821384487065
        lastModifiedDate: 1563881359694
        libraryId: "5d0848fee0073c6ffc69752d"
        // 库名称
        libraryName: "HCC_QE3_Lib"
        libraryPeptideCount: 300507
        matchedPeptideCount: 15823
        matchedProteinCount: 0
        mzExtractWindow: 0.03
        // 分析名称
        name: "C20181210yix_HCC_DIA_T_24A-HCC_QE3_Lib-20190723191909"
        note: ""
        ownerName: "lms"
        peakCount: 577264
        rtExtractWindow: 600
        scoreTypes: (21) ["MainScore", "WeightedTotalScore", "BseriesScore", "IntensityScore", "IsotopeCorrelationScore", "IsotopeOverlapScore", "LibraryCorr", "LibraryRsmd", "LogSnScore", "MassdevScore", "MassdevScoreWeighted", "NormRtScore", "XcorrCoelution", "XcorrCoelutionWeighted", "XcorrShape", "XcorrShapeWeighted", "LibraryDotprod", "LibraryManhattan", "LibrarySangle", "LibraryRootmeansquare", "YseriesScore"]
        shapeScoreThreshold: 0.5
        shapeScoreWeightThreshold: 0.6
        sigma: 3.75
        slope: 0.04273035759500789
        spacing: 0.01
        targetDistributions: {0-0_001: 8899, 0_9-1_0: 0, 0_007-0_008: 423, 0_09-0_1: 884, 0_03-0_04: 1512, …}
        totalPeptideCount: 212722
        type: "DIA_SWATH"
        */
    // return -1;
    if (0 < len0) {
      obj_data = new Array(len0);
      let index = 0;
      for (let i in overviews_list) {
        // 提取
        let {
          // 分析id
          id,

          // 分析代码
          name,

          // 	实验名称
          expName: exp_name,
          expId: exp_id = null,

          // 标准库名称
          libraryName: library_name,

          // 实验参数
          rtExtractWindow: rt_extract_window,
          mzExtractWindow: mz_extract_window,
          sigma,
          spacing,
          shapeScoreThreshold: shape_score_threshold,
          shapeScoreWeightThreshold: shape_score_weight_threshold,
          slope,
          intercept,
          fdr,
          classifier,
          calPPRate: calpprate,

          // 识别结果
          matchedPeptideCount: matched_peptide_count,
          matchedProteinCount: matched_protein_count,
          totalPeptideCount: total_peptide_count,
          libraryPeptideCount: library_peptide_count,

          // 负责人
          ownerName: owner_name,

          // 备忘录
          note,

          // 创建时间
          createDate: create_date,

          // 最近修改时间
          lastModifiedDate: last_modified_date
          // 操作
        } = overviews_list[i];

        // 缓存对象
        let obj_temp = {};

        // 添加索引是为了展示方便
        (obj_temp.index = index + 1),
          (obj_temp.key = "analysis_list_" + i),
          // 分析id
          (obj_temp.id = id),
          // 分析代码
          (obj_temp.name = name),
          // 	实验名称
          (obj_temp.exp_name = exp_name),
          (obj_temp.exp_id = exp_id),
          // 标准库名称
          (obj_temp.library_name = library_name),
          // 实验参数
          (obj_temp.rt_extract_window = rt_extract_window),
          (obj_temp.mz_extract_window = mz_extract_window),
          (obj_temp.sigma = sigma),
          (obj_temp.spacing = spacing),
          (obj_temp.shape_score_threshold = shape_score_threshold),
          (obj_temp.shape_score_weight_threshold = shape_score_weight_threshold),
          (obj_temp.slope = slope),
          (obj_temp.intercept = intercept),
          (obj_temp.fdr = fdr),
          (obj_temp.classifier = classifier),
          (obj_temp.calpprate = calpprate),
          // 识别结果
          (obj_temp.matched_peptide_count = matched_peptide_count),
          (obj_temp.matched_protein_count = matched_protein_count),
          (obj_temp.total_peptide_count = total_peptide_count),
          (obj_temp.library_peptide_count = library_peptide_count),
          // 负责人
          (obj_temp.owner_name = owner_name),
          // 备忘录
          (obj_temp.note = note),
          // 创建时间
          (obj_temp.create_date = tao.format_time(create_date)),
          // 最近修改时间
          (obj_temp.last_modified_date = tao.format_time(last_modified_date)),
          // 存入数组中
          (obj_data[index++] = obj_temp);
      }
    }

    this.setState({
      analysis_list_data: obj_data,
      // 标记 成功
      analysis_list_false_time: 5,
      // 标记数据为可用的状态
      analysis_list_status: 0
    });

    return 0;
  };

  get_column_search_props = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handle_table_search(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handle_table_search(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          <FormattedHTMLMessage id="propro.analysis_list_search" />
        </Button>
        <Button
          onClick={() => this.handle_table_reset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          <FormattedHTMLMessage id="propro.analysis_list_reset" />
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[this.state.search_text]}
        autoEscape
        textToHighlight={text.toString()}
      />
    )
  });

  config_table_columns = () => {
    // 定义 解析 配置 表格
    let analysis_list_table_columns = [
      {
        // 1  序列号
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_index" />
          </span>
        ),
        dataIndex: "index",
        key: "index",
        ...this.get_column_search_props("index"),
        render: text => {
          return (
            <span
              className={styles.font_second_color}
              style={{
                fontSize: "8px",
                fontWeight: "600"
              }}
            >
              {text}
            </span>
          );
        }
      },
      {
        // 2  实验名称
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_exp_name" />
          </span>
        ),
        key: "exp_name",
        width: 115,
        ...this.get_column_search_props("exp_name"),
        render: list => {
          return (
            <div
              style={{
                fontSize: "8px",
                wordWrap: "break-word",
                wordBreak: "break-all",
                minWidth: "110px",
                maxWidth: "110px",
                fontWeight: "600"
              }}
            >
              <Tooltip
                placement="topLeft"
                title={
                  <FormattedHTMLMessage id="propro.analysis_list_view_experience" />
                }
                onClick={() => {
                  // 传入expId
                  this.query_project_name_by_exp_id(list.exp_id);
                }}
              >
                <p
                  className={"badge-light " + styles.font_blue_color}
                  style={{
                    fontWeight: "600",
                    cursor: "pointer",
                    padding: "5px 5px"
                  }}
                >
                  {list.exp_name}
                </p>
              </Tooltip>
            </div>
          );
        }
      },
      {
        // 3  分析概览 id
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_id" />
          </span>
        ),
        dataIndex: "id",
        key: "id",
        ...this.get_column_search_props("id"),
        render: text => {
          return (
            <div
              style={{
                fontSize: "8px",
                wordWrap: "break-word",
                wordBreak: "break-all",
                minWidth: "80px",
                maxWidth: "80px",
                fontWeight: "600"
              }}
            >
              {text}
            </div>
          );
        }
      },
      {
        // 4  分析代号
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_name" />
          </span>
        ),
        key: "name",
        ...this.get_column_search_props("name"),
        render: list => {
          return (
            <div
              style={{
                fontSize: "8px",
                wordWrap: "break-word",
                wordBreak: "break-all",
                minWidth: "100px",
                maxWidth: "100px"
              }}
            >
              {list.name}
            </div>
          );
        }
      },
      {
        //  5   标准库名称
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_library_name" />
          </span>
        ),
        dataIndex: "library_name",
        key: "library_name",
        render: text => (
          <div
            style={{
              fontSize: "8px",
              wordWrap: "break-word",
              wordBreak: "break-all",
              minWidth: "50px",
              maxWidth: "50px"
            }}
          >
            <span
              className={"badge btn-warning"}
              style={{
                padding: "5px 5px"
              }}
            >
              {text}
            </span>
          </div>
        )
      },
      {
        // 6  实验参数
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_exp_params" />
          </span>
        ),
        key: "protein_count",
        render: list => {
          // 参考 theamleaf
          // <div th:text="|ExtractParams : ${overview.rtExtractWindow}/${overview.mzExtractWindow}|"></div>
          //                 <div th:text="|SigmaSpacing : ${overview.sigma}/${overview.spacing}|"></div>
          //                 <div th:text="|Threshold : ${overview.shapeScoreThreshold}/${overview.shapeScoreWeightThreshold}|"></div>
          //                 <div th:text="|SlopeIntercept : ${overview.slope}/${overview.intercept}|"></div>
          //                 <div th:text="|Fdr : ${overview.fdr}|"></div>
          //                 <div th:text="|Classifier : ${overview.classifier}|"></div>
          //   <div th: text="|PP Rate : ${overview.calPPRate()}|"></div>

          let cal_pprate = 0;
          if (list.matched_protein_count != 0) {
            cal_pprate =
              list.matched_peptide_count / list.matched_protein_count;
          }

          return (
            <div
              style={{
                fontSize: "8px",
                wordWrap: "break-word",
                wordBreak: "break-all",
                minWidth: "150px",
                maxWidth: "150px"
              }}
            >
              ExtractParams:&nbsp;
              <span className={styles.font_primary_color}>
                {list.rt_extract_window}/{list.mz_extract_window}
              </span>
              <br />
              SigmaSpacing:&nbsp;
              <span className={styles.font_primary_color}>
                {list.sigma}/{list.spacing}
              </span>
              <br />
              Threshold:&nbsp;
              <span className={styles.font_primary_color}>
                {list.shape_score_threshold}/{list.shape_score_weight_threshold}
              </span>
              <br />
              SlopeIntercept:&nbsp;
              <span className={styles.font_primary_color}>
                {list.slope}/{list.intercept}
              </span>
              <br />
              Fdr:&nbsp;
              <span className={styles.font_primary_color}>{list.fdr}</span>
              <br />
              Classifier:&nbsp;
              <span className={styles.font_primary_color}>
                {list.classifier}
              </span>
              <br />
              PP Rate:&nbsp;
              <span className={styles.font_primary_color}>{cal_pprate}</span>
            </div>
          );
        }
      },
      {
        // 7  识别结果
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_recognition_result" />
          </span>
        ),
        key: "total_count",
        render: list => {
          // <div th:text="|Peptides : ${overview.matchedPeptideCount}|"></div>
          // <div th:text="|Proteins : ${overview.matchedProteinCount}|"></div>
          // <div th:text="|XIC Peptides : ${overview.totalPeptideCount}|"></div>
          // <div th:text="|Library Peptides : ${overview.libraryPeptideCount}|"></div>

          return (
            <div
              style={{
                fontSize: "8px",
                wordWrap: "break-word",
                wordBreak: "break-all",
                minWidth: "130px",
                maxWidth: "130px"
              }}
            >
              Peptides:&nbsp;
              <span className={styles.font_primary_color}>
                {list.matched_peptide_count}
              </span>
              <br />
              Proteins:&nbsp;
              <span className={styles.font_primary_color}>
                {list.matched_protein_count}
              </span>
              <br />
              XIC Peptides:&nbsp;
              <span className={styles.font_primary_color}>
                {list.total_peptide_count}
              </span>
              <br />
              Library Peptides:&nbsp;
              <span className={styles.font_primary_color}>
                {list.library_peptide_count}
              </span>
              <br />
            </div>
          );
        }
      },
      {
        // 8  负责人
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_owner_name" />
          </span>
        ),
        dataIndex: "owner_name",
        key: "owner_name",
        ...this.get_column_search_props("owner_name"),
        render: text => {
          return (
            <span
              className={"badge " + styles.bg_second_color}
              style={{
                padding: "5px 5px"
              }}
            >
              <span className={styles.font_white_color}>{text}</span>
            </span>
          );
        }
      },
      {
        // 9    备忘录
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_memorandum" />
          </span>
        ),
        dataIndex: "note",
        key: "note",
        ...this.get_column_search_props("note"),
        render: text => {
          return (
            <div
              style={{
                fontSize: "8px",
                wordWrap: "break-word",
                wordBreak: "break-all",
                minWidth: "60px",
                maxWidth: "60px"
              }}
            >
              {text}
            </div>
          );
        }
      },
      {
        // 10   时间 创建/最后修改时间
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_all_times" />
          </span>
        ),
        dataIndex: "last_modified_date",
        key: "last_modified_date",
        render: (text, list) => {
          // 返回 创建时间 和 最后修改时间
          return (
            <span
              style={{
                fontSize: "8px",
                wordWrap: "break-word",
                wordBreak: "break-all",
                minWidth: "170px",
                maxWidth: "170px"
              }}
            >
              <FormattedHTMLMessage id="propro.analysis_list_create_time" />
              &nbsp;
              <span
                className={"badge " + styles.bg_green_color}
                style={{
                  padding: "5px 5px"
                }}
              >
                <span className={styles.font_white_color}>
                  {list.create_date}
                </span>
              </span>
              <div
                style={{
                  height: "10px",
                  width: "40px"
                }}
              >
                &nbsp;
              </div>
              <FormattedHTMLMessage id="propro.analysis_list_update_time" />
              &nbsp;
              <span
                className={"badge " + styles.bg_primary_color}
                style={{
                  padding: "5px 5px"
                }}
              >
                <span className={styles.font_white_color}>
                  {list.last_modified_date}
                </span>
              </span>
              <div
                style={{
                  height: "10px",
                  width: "40px"
                }}
              >
                &nbsp;
              </div>
            </span>
          );
        }
      },
      {
        // 11  操作
        title: (
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}
          >
            <FormattedHTMLMessage id="propro.analysis_list_operation" />
          </span>
        ),
        key: "operation",
        render: list => {
          // 返回 创建时间 和 最后修改时间
          return (
            <div
              style={{
                fontSize: "8px",
                wordWrap: "break-word",
                wordBreak: "break-all",
                minWidth: "150px",
                maxWidth: "150px"
              }}
            >
              {/* 报告 */}
              <Tooltip
                placement="topLeft"
                title={
                  <FormattedHTMLMessage id="propro.analysis_list_report_tip" />
                }
              >
                <Link to={"/analysis/detail/" + list.id}>
                  <div
                    className={"badge btn-warning"}
                    style={{
                      padding: "3px 3px",
                      margin: "3px"
                    }}
                  >
                    <img
                      src={report_svg}
                      style={{
                        width: "20px"
                      }}
                    />
                  </div>
                </Link>
              </Tooltip>
              {/* xic 数据 */}
              <Tooltip
                placement="topLeft"
                title={
                  <FormattedHTMLMessage id="propro.analysis_list_xic_tip" />
                }
              >
                <Link to={"/analysis/xic/" + list.id}>
                  <div
                    className={"badge btn-primary"}
                    style={{
                      padding: "3px 3px",
                      margin: "3px"
                    }}
                  >
                    <img
                      src={list_svg}
                      style={{
                        width: "20px"
                      }}
                    />
                  </div>
                </Link>
              </Tooltip>
              {/* 打分数据 */}
              <Tooltip
                placement="topLeft"
                title={
                  <FormattedHTMLMessage id="propro.analysis_list_score_tip" />
                }
              >
                <Link to={"/analysis/score/" + list.id}>
                  <div
                    className={"badge btn-primary"}
                    style={{
                      padding: "3px 3px",
                      margin: "3px"
                    }}
                  >
                    <img
                      src={score_svg}
                      style={{
                        width: "20px"
                      }}
                    />
                  </div>
                </Link>
              </Tooltip>
              {/* 鉴定肽段 */}
              <Tooltip
                placement="topLeft"
                title={
                  <FormattedHTMLMessage id="propro.analysis_list_identification_tip" />
                }
              >
                <Link to={"/analysis/protein_identification/" + list.id}>
                  <div
                    className={"badge btn-primary"}
                    style={{
                      padding: "3px 3px",
                      margin: "3px"
                    }}
                  >
                    <img
                      src={identification_svg}
                      style={{
                        width: "20px"
                      }}
                    />
                  </div>
                </Link>
              </Tooltip>
              {/* 导出肽段 */}
              <Tooltip
                placement="topLeft"
                title={
                  <FormattedHTMLMessage id="propro.analysis_list_export_tip" />
                }
              >
                <Link to={"/analysis/detail/" + list.id}>
                  <div
                    className={"badge btn-secondary"}
                    style={{
                      padding: "3px 3px",
                      margin: "3px"
                    }}
                  >
                    <img
                      src={export_svg}
                      style={{
                        width: "20px"
                      }}
                    />
                  </div>
                </Link>
              </Tooltip>
              {/* 删除 */}
              <Tooltip
                placement="topLeft"
                title={
                  <FormattedHTMLMessage id="propro.analysis_list_delete_tip" />
                }
              >
                <div
                  className={"badge btn-danger"}
                  style={{
                    padding: "4px 4px",
                    margin: "3px",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    this.delete_analysis_list_by_id(list.id);
                  }}
                >
                  <img
                    src={delete_svg}
                    style={{
                      width: "20px"
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          );
        }
      }
    ];

    setTimeout(() => {
      this.setState({
        analysis_list_table_columns: analysis_list_table_columns
      });
    }, 40);
  };

  handle_table_search = (selectedKeys, confirm) => {
    confirm();
    this.setState({ search_text: selectedKeys[0] });
  };

  handle_table_reset = clearFilters => {
    clearFilters();
    this.setState({ search_text: "" });
  };

  delete_analysis_list_by_id = id => {
    // 调用删除对话框
    this.setState({
      delete_analysis_list_id: id,
      modal_visible: true
    });
  };

  delete_analysis_list_by_id_confirm = () => {
    this.setState({
      modal_visible: false
    });
    let { language } = this.props;
    message.loading(
      Languages[language]["propro.analysis_list_delete_tip"] +
        " : " +
        Languages[language]["propro.prompt_running"],
      2
    );
    // 延迟删除 为用户提供紧急停留时间
    setTimeout(() => {
      // 获取id
      let { delete_analysis_list_id } = this.state;
      this.props.delete_analysis_list({
        id: delete_analysis_list_id
      });
    }, 1500);
  };

  delete_analysis_list_by_id_cancel = () => {
    this.setState({
      modal_visible: false
    });
  };

  handle_delete_analysis_list = () => {
    //
    // 时间戳设置为 0
    this.props.set_state_newvalue({
      target: "analysis_list_delete_time",
      value: 0
    });

    let { analysis_list_delete_status, language } = this.props;
    if (0 == analysis_list_delete_status) {
      // 删除成功
      setTimeout(() => {
        message.success(
          Languages[language]["propro.analysis_list_delete_tip"] +
            " : " +
            Languages[language]["propro.prompt_success"],
          4
        );
      }, 200);
    } else {
      // 删除失败 可能出在网络
      setTimeout(() => {
        message.error(
          Languages[language]["propro.analysis_list_delete_tip"] +
            " : " +
            Languages[language]["propro.prompt_failed"],
          4
        );
      }, 200);

      return -1;
    }
    // 执行刷新到分析列表
    setTimeout(() => {
      // 重新加载数据
      this.refresh_data();
    }, 500);
  };

  query_project_name_by_exp_id = id => {
    console.log("===", id);
    this.props.query_project_name_by_exp_id({ exp_id: id });
  };

  handle_analysis_list_query_project_name = () => {
    // 时间戳设置为 0
    this.props.set_state_newvalue({
      target: "analysis_list_query_project_name_time",
      value: 0
    });

    let {
      analysis_list_query_project_name_status,
      analysis_list_query_project_name_data: data,
      language
    } = this.props;

    let res = -1;
    // 项目名称
    let project_name = "";

    do {
      if (0 != analysis_list_query_project_name_status) {
        break;
      }
      // 提取

      project_name = data.projectName;
      project_name += "";
      if (0 < project_name.length) {
        res = 0;
        // 成功
        break;
      }
    } while (false);

    if (0 != res) {
      // 查询失败
      setTimeout(() => {
        message.error(
          Languages[language]["propro.analysis_list_query_project_name"] +
            " : " +
            Languages[language]["propro.prompt_failed"],
          4
        );
      }, 200);
      // 终止
      return -1;
    }

    // 提示查询成功
    setTimeout(() => {
      message.success(
        Languages[language]["propro.analysis_list_query_project_name"] +
          " : " +
          Languages[language]["propro.prompt_success"],
        4
      );
    }, 200);

    // 执行跳转
    setTimeout(() => {
      // 跳转到实验列表
      this.props.history.push("/experiment/list_project_name/" + project_name);
    }, 500);
  };

  /**************************** render ****************************/
  /**************************** render ****************************/
  /**************************** render ****************************/
  /**************************** render ****************************/

  render() {
    // 监控 analysis_list 数据变化
    if (10000 < this.props.analysis_list_time) {
      // 资源有更新
      this.handle_analysis_list();
    }

    if (10000 < this.props.analysis_list_delete_time) {
      this.handle_delete_analysis_list();
    }
    // 查询 project name
    if (10000 < this.props.analysis_list_query_project_name_time) {
      this.handle_analysis_list_query_project_name();
    }

    if (0 != this.state.analysis_list_status) {
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
          <FormattedHTMLMessage id="propro.analysis_list_title" />
        </div>

        {/* 提示用户 删除 警告信息 */}
        <Modal
          title={
            <b>
              <FormattedHTMLMessage id="propro.modal_title" />
            </b>
          }
          visible={this.state.modal_visible}
          onOk={this.delete_analysis_list_by_id_confirm}
          onCancel={this.delete_analysis_list_by_id_cancel}
          maskClosable={true}
          okText={<FormattedHTMLMessage id="propro.modal_confirm" />}
          cancelText={<FormattedHTMLMessage id="propro.modal_cancel" />}
        >
          <div className={styles.font_red_color}>
            <FormattedHTMLMessage id="propro.analysis_list_delete_warning" />
          </div>
        </Modal>

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
            columns={this.state.analysis_list_table_columns}
            pagination={{
              position: "bottom",
              hideOnSinglePage: true,
              defaultPageSize: 100
            }}
            dataSource={this.state.analysis_list_data}
          />
        </div>
        {/* Author: Tangtao HDU https://www.promiselee.cn/tao */}
        <BackTop visibilityHeight={600}>
          <div>
            <img
              style={{
                width: "35px"
              }}
              src={arrow_up_svg}
            />
          </div>
        </BackTop>
      </div>
    );
  }
}

export default Analysis_list;
