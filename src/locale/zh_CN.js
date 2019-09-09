// {
//     'statement' :'国际化配置',
//     'app.text': '杭州电子科技大学 管理学院 2016级 唐涛 tangtao2099@outlook.com ',
//     'app.learn-react-link': '我的主页',
//     'propro': {
//         'login' : '登录'
//     }

// }

/***
 * @Author              TangTao https://www.promiselee.cn/tao
 * @Email               tangtao2099@outlook.com
 * @Copyright           西湖大学 propro Tangtao
 * @GitHub              https://github.com/tangtaoshadow
 * @CreateTime          2019-7-12 19:18:52
 * @UpdateTime          2019-9-6 16:06:13
 * @Archive             国际化 中文 Chinese
 *
 */

/****************  中文  *******************************/
/****************  中文  *******************************/
/****************  中文  *******************************/

// src/locale/zh_CN.js
let language_ch = {
  // 共用
  // 设计 language 的思路 : 它是一个环境变量 可以直接在界面中读取 从而分析出当前页面的语言
  "propro.language": "zh",
  "propro.login": "登录",
  "propro.home": "首页",
  "propro.console": "控制台",
  "propro.author1": "TangTao",
  "propro.loading": "正在加载",
  "propro.reloading": "正在重新加载",

  "propro.logout": "退出",

  // 登录
  "propro.prompt_username": "用户名",
  "propro.prompt_password": "密码",
  "propro.login_username_error": "请输入用户名",
  "propro.login_password_error": "请输入密码",
  "propro.forgot_password": "忘记密码",
  "propro.apply_account": "申请账号",
  "propro.welcome_login": "欢迎来到 ",
  "propro.welcome_register": "欢迎申请 ",
  "propro.line1": "蛋白质组学分析平台",
  "propro.apply_account_confirm": "确定",
  "propro.apply_account_cancel": "取消",
  "propro.register_telephone_error": "联系电话不能为空",
  "propro.login_error": "登录失败",
  "propro.login_success": "登录成功",
  "propro.login_false": "用户名或密码错误",

  // basicLayout
  // 个人中心下面的弹窗
  "propro.personal_center": "个人中心",
  "propro.user_management": "用户管理",
  "propro.nick": "昵称",
  "propro.email": "邮箱",
  "propro.organization": "组织",
  "propro.telephone": "电话",
  // 首页
  "propro.logout_run": "正在退出",
  "propro.logout_success": "退出成功",

  // Modal 通用
  "propro.modal_title": "操作提示",
  "propro.modal_confirm": "确定",
  "propro.modal_cancel": "取消",

  // url错误
  "propro.url_error": "当前链接不存在",

  // 提示级别
  "propro.prompt_running": "运行...",
  "propro.prompt_success": "成功",
  "propro.prompt_failed": "失败",
  "propro.prompt_cancel": "取消",

  // 用户设定
  "propro.user_setting": "设置",
  "propro.user_account": "账户",
  "propro.user_password": "密码",
  "propro.user_username": "账号",
  "propro.user_saveinfo": "保存",
  "propro.user_current_password": "当前密码",
  "propro.user_new_password": "新密码",
  "propro.user_verify_password": "重复新密码",
  "propro.user_modal_title": "操作提示",
  "propro.user_modal_confirm": "确定",
  "propro.user_modal_cancel": "取消",
  "propro.user_update_account_success": "更新成功",
  "propro.user_update_account_failed": "更新失败",
  "propro.user_modal_password_warning":
    "( ๑ŏ ﹏ ŏ๑ )ﾉI’m sorry~, (1)请输入正确的原密码 (2)新密码长度至少为6 (3)两次新密码要相同",
  "propro.user_modal_know": "知道了",
  "propro.user_modal_warning": "温馨提醒",
  "propro.user_current_password_false": "你输入的当前密码不正确",

  // 控制台
  "propro.console_resource_title": "资源概览",
  "propro.console_task_running": "任务",
  "propro.console_lib": "标准库",
  "propro.console_irt_lib": "iRT校准库",
  "propro.console_public_lib": "公共标准库",
  "propro.console_public_irt": "公共iRT库",
  "propro.console_exp_swath": "DIA/SWATH",
  "propro.console_exp_prm": "PRM",
  "propro.console_project": "项目管理",
  "propro.console_overview": "分析概览",

  // 系统错误
  "propro.network_error":
    "..(｡•ˇ‸ˇ•｡)… 非常抱歉,PROPRO未能成功获取数据,请检查网络",

  // 公共标准库 列表
  "propro.public_standard_library_list_title": "公共标准库列表",
  "propro.public_standard_library_list_search": "搜索",
  "propro.public_standard_library_list_reset": "重置",
  "propro.public_standard_library_list_index": "序列号",
  "propro.public_standard_library_list_id": "标准库id",
  "propro.public_standard_library_list_name": "标准库名称",
  "propro.public_standard_library_list_protein_count": "蛋白质数目",
  "propro.public_standard_library_list_total_count": "肽段数目",
  "propro.public_standard_library_list_create_time": "创建时间",
  "propro.public_standard_library_list_is_public": "是否公开",
  "propro.public_standard_library_list_creator": "创建者",
  "propro.public_standard_library_list_operation": "操作",
  "propro.public_standard_library_list_detail": "详情",
  "propro.public_standard_library_list_protein_list": "蛋白质列表",
  "propro.public_standard_library_list_peptides_list": "肽段列表",
  "propro.public_standard_library_list_update": "更新公共标准库",

  // 标准库 列表
  "propro.standard_library_list_title": "标准库列表",
  "propro.standard_library_list_search": "搜索",
  "propro.standard_library_list_reset": "重置",
  "propro.standard_library_list_index": "序列号",
  "propro.standard_library_list_id": "标准库id",
  "propro.standard_library_list_name": "标准库名称",
  "propro.standard_library_list_protein_count": "蛋白质数目",
  "propro.standard_library_list_total_count": "肽段数目",
  "propro.standard_library_list_create_time": "创建时间",
  "propro.standard_library_list_is_public": "是否公开",
  "propro.standard_library_list_creator": "创建者",
  "propro.standard_library_list_operation": "操作",
  "propro.standard_library_list_detail": "详情",
  "propro.standard_library_list_protein_list": "蛋白质列表",
  "propro.standard_library_list_peptides_list": "肽段列表",
  "propro.standard_library_list_update": "更新标准库",
  "propro.standard_library_list_set_public": "公开标准库",

  // IRT 校准库 列表
  "propro.irt_standard_library_list_title": "IRT校准库列表",
  "propro.irt_standard_library_list_search": "搜索",
  "propro.irt_standard_library_list_reset": "重置",
  "propro.irt_standard_library_list_index": "序列号",
  "propro.irt_standard_library_list_id": "校准库id",
  "propro.irt_standard_library_list_name": "校准库名称",
  "propro.irt_standard_library_list_protein_count": "蛋白质数目",
  "propro.irt_standard_library_list_total_count": "肽段数目",
  "propro.irt_standard_library_list_create_time": "创建时间",
  "propro.irt_standard_library_list_is_public": "是否公开",
  "propro.irt_standard_library_list_creator": "创建者",
  "propro.irt_standard_library_list_operation": "操作",
  "propro.irt_standard_library_list_detail": "详情",
  "propro.irt_standard_library_list_protein_list": "蛋白质列表",
  "propro.irt_standard_library_list_peptides_list": "肽段列表",
  "propro.irt_standard_library_list_update": "更新校准库",
  "propro.irt_standard_library_list_set_public": "公开校准库",

  // 公共 irt 校准库 列表
  "propro.public_irt_standard_library_list_title": "公共IRT库列表",
  "propro.public_irt_standard_library_list_search": "搜索",
  "propro.public_irt_standard_library_list_reset": "重置",
  "propro.public_irt_standard_library_list_index": "序列号",
  "propro.public_irt_standard_library_list_id": "校准库id",
  "propro.public_irt_standard_library_list_name": "校准库名称",
  "propro.public_irt_standard_library_list_protein_count": "蛋白质数目",
  "propro.public_irt_standard_library_list_total_count": "肽段数目",
  "propro.public_irt_standard_library_list_create_time": "创建时间",
  "propro.public_irt_standard_library_list_is_public": "是否公开",
  "propro.public_irt_standard_library_list_creator": "创建者",
  "propro.public_irt_standard_library_list_operation": "操作",
  "propro.public_irt_standard_library_list_detail": "详情",
  "propro.public_irt_standard_library_list_protein_list": "蛋白质列表",
  "propro.public_irt_standard_library_list_peptides_list": "肽段列表",
  "propro.public_irt_standard_library_list_update": "更新IRT校准库",

  // 公共标准库详情
  "propro.public_standard_library_detail_title": "公共标准库详情页",
  "propro.public_standard_library": "公共标准库",
  "propro.public_standard_library_detail_id": "标准库ID",
  "propro.public_standard_library_detail_name": "标准库名称",
  "propro.public_standard_library_detail_library_type": "库类型",
  "propro.public_standard_library_detail_generator": "Generator",
  "propro.public_standard_library_detail_protein_count": "蛋白质数目",
  "propro.public_standard_library_detail_unique_protein_count":
    "Unique 蛋白质数目",
  "propro.public_standard_library_detail_deweight_protein_count":
    "Library 去除蛋白数目",
  "propro.public_standard_library_detail_peptide_count": "肽段数目",
  "propro.public_standard_library_detail_unique_peptide_count":
    "Unique 肽段数目",
  "propro.public_standard_library_detail_deweight_peptide_count":
    "Library 去除真肽段数目",
  "propro.public_standard_library_detail_fastade_weight_protein_count":
    "Fasta 去除蛋白数目",
  "propro.public_standard_library_detail_fastade_weight_peptide_count":
    "Fasta去除真肽段数目",
  "propro.public_standard_library_detail_description": "详情描述",
  "propro.public_standard_library_detail_creator": "创建者",
  "propro.public_standard_library_detail_create_time": "创建时间",
  "propro.public_standard_library_detail_last_modify_time": "最后修改时间",
  "propro.public_standard_library_detail_peptide_analyse": "肽段分析",
  "propro.public_standard_library_detail_peptide_link": "查看肽段",
  "propro.public_standard_library_detail_re_statistic_analyse":
    "重新统计蛋白质与肽段的数目",
  "propro.public_standard_library_detail_generating_pseudopeptides":
    "生成伪肽段",
  "propro.public_standard_library_detail_delete_pseudopeptides": "删除伪肽段",
  "propro.public_standard_library_detail_modify": "修改",
  "propro.public_standard_library_detail_delete": "删除",
  "propro.public_standard_library_detail_running": "运行",
  "propro.public_standard_library_detail_success": "成功",
  "propro.public_standard_library_detail_failed": "失败",
  "propro.public_standard_library_detail_delete_warning": "确认删除该标准库",
  "propro.public_standard_library_detail_delete_by_id": "删除标准库",
  "propro.public_standard_library_detail_peptide_list": "肽段列表",
  "propro.public_standard_library_detail_protein_list": "蛋白质列表",

  // irt 库 详情页面
  "propro.irt_standard_library_detail_title": "IRT 校准库详情页",
  "propro.irt_standard_library": "IRT 校准库",
  "propro.irt_standard_library_detail_id": "校准库ID",
  "propro.irt_standard_library_detail_name": "校准库名称",
  "propro.irt_standard_library_detail_library_type": "库类型",
  "propro.irt_standard_library_detail_generator": "Generator",
  "propro.irt_standard_library_detail_protein_count": "蛋白质数目",
  "propro.irt_standard_library_detail_unique_protein_count":
    "Unique 蛋白质数目",
  "propro.irt_standard_library_detail_deweight_protein_count":
    "Library 去除蛋白数目",
  "propro.irt_standard_library_detail_peptide_count": "肽段数目",
  "propro.irt_standard_library_detail_unique_peptide_count": "Unique 肽段数目",
  "propro.irt_standard_library_detail_deweight_peptide_count":
    "Library 去除真肽段数目",
  "propro.irt_standard_library_detail_fastade_weight_protein_count":
    "Fasta 去除蛋白数目",
  "propro.irt_standard_library_detail_fastade_weight_peptide_count":
    "Fasta去除真肽段数目",
  "propro.irt_standard_library_detail_description": "详情描述",
  "propro.irt_standard_library_detail_creator": "创建者",
  "propro.irt_standard_library_detail_create_time": "创建时间",
  "propro.irt_standard_library_detail_last_modify_time": "最后修改时间",
  "propro.irt_standard_library_detail_peptide_analyse": "肽段分析",
  "propro.irt_standard_library_detail_peptide_link": "查看肽段",
  "propro.irt_standard_library_detail_re_statistic_analyse":
    "重新统计蛋白质与肽段的数目",
  "propro.irt_standard_library_detail_generating_pseudopeptides": "生成伪肽段",
  "propro.irt_standard_library_detail_delete_pseudopeptides": "删除伪肽段",
  "propro.irt_standard_library_detail_modify": "修改",
  "propro.irt_standard_library_detail_delete": "删除",
  "propro.irt_standard_library_detail_running": "运行",
  "propro.irt_standard_library_detail_success": "成功",
  "propro.irt_standard_library_detail_failed": "失败",
  "propro.irt_standard_library_detail_delete_warning": "确认删除该校准库",
  "propro.irt_standard_library_detail_delete_by_id": "删除校准库",
  "propro.irt_standard_library_detail_peptide_list": "肽段列表",
  "propro.irt_standard_library_detail_protein_list": "蛋白质列表",

  // 公共 irt 库 详情
  "propro.public_irt_standard_library_detail_title": "公共 IRT 校准库详情页",
  "propro.public_irt_standard_library": "公共 IRT 校准库",
  "propro.public_irt_standard_library_detail_id": "校准库ID",
  "propro.public_irt_standard_library_detail_name": "校准库名称",
  "propro.public_irt_standard_library_detail_library_type": "库类型",
  "propro.public_irt_standard_library_detail_generator": "Generator",
  "propro.public_irt_standard_library_detail_protein_count": "蛋白质数目",
  "propro.public_irt_standard_library_detail_unique_protein_count":
    "Unique 蛋白质数目",
  "propro.public_irt_standard_library_detail_deweight_protein_count":
    "Library 去除蛋白数目",
  "propro.public_irt_standard_library_detail_peptide_count": "肽段数目",
  "propro.public_irt_standard_library_detail_unique_peptide_count":
    "Unique 肽段数目",
  "propro.public_irt_standard_library_detail_deweight_peptide_count":
    "Library 去除真肽段数目",
  "propro.public_irt_standard_library_detail_fastade_weight_protein_count":
    "Fasta 去除蛋白数目",
  "propro.public_irt_standard_library_detail_fastade_weight_peptide_count":
    "Fasta去除真肽段数目",
  "propro.public_irt_standard_library_detail_description": "详情描述",
  "propro.public_irt_standard_library_detail_creator": "创建者",
  "propro.public_irt_standard_library_detail_create_time": "创建时间",
  "propro.public_irt_standard_library_detail_last_modify_time": "最后修改时间",
  "propro.public_irt_standard_library_detail_peptide_analyse": "肽段分析",
  "propro.public_irt_standard_library_detail_peptide_link": "查看肽段",
  "propro.public_irt_standard_library_detail_re_statistic_analyse":
    "重新统计蛋白质与肽段的数目",
  "propro.public_irt_standard_library_detail_generating_pseudopeptides":
    "生成伪肽段",
  "propro.public_irt_standard_library_detail_delete_pseudopeptides":
    "删除伪肽段",
  "propro.public_irt_standard_library_detail_modify": "修改",
  "propro.public_irt_standard_library_detail_delete": "删除",
  "propro.public_irt_standard_library_detail_running": "运行",
  "propro.public_irt_standard_library_detail_success": "成功",
  "propro.public_irt_standard_library_detail_failed": "失败",
  "propro.public_irt_standard_library_detail_delete_warning":
    "确认删除该校准库",
  "propro.public_irt_standard_library_detail_delete_by_id": "删除校准库",
  "propro.public_irt_standard_library_detail_peptide_list": "肽段列表",
  "propro.public_irt_standard_library_detail_protein_list": "蛋白质列表",

  // 更新公共标准库
  "propro.public_standard_library_update_title": "更新公共标准库",
  "propro.public_standard_library_update_only_target_peptides":
    "仅录入真实肽段",
  "propro.public_standard_library_update_detail_description": "详情描述",
  "propro.public_standard_library_update_upload_csv_library":
    "请上传CSV/TraML格式的Library",
  "propro.public_standard_library_update_upload_file_description":
    "单击或拖动文件到此区域进行上传",
  "propro.public_standard_library_update_only_upload_peptide_list":
    "上传肽段列表",
  "propro.public_standard_library_update_submit": "更新",
  "propro.public_standard_library_update_success": "成功",
  "propro.public_standard_library_update_failed": "失败",
  "propro.public_standard_library_detail_delete_warning":
    "确认删除该公共标准库",
  "propro.public_standard_library_detail_delete_by_id": "删除公共标准库",

  // 更新标准库
  "propro.standard_library_update_title": "更新标准库",
  "propro.standard_library_update_only_target_peptides": "仅录入真实肽段",
  "propro.standard_library_update_detail_description": "详情描述",
  "propro.standard_library_update_upload_csv_library":
    "请上传CSV/TraML格式的Library",
  "propro.standard_library_update_upload_file_description":
    "单击或拖动文件到此区域进行上传",
  "propro.standard_library_update_only_upload_peptide_list": "上传肽段列表",
  "propro.standard_library_update_submit": "更新",
  "propro.standard_library_update_success": "成功",
  "propro.standard_library_update_failed": "失败",

  // 更新 irt 标准库
  "propro.irt_standard_library_update_title": "更新标准库",
  "propro.irt_standard_library_update_only_target_peptides": "仅录入真实肽段",
  "propro.irt_standard_library_update_detail_description": "详情描述",
  "propro.irt_standard_library_update_upload_csv_library":
    "请上传CSV/TraML格式的Library",
  "propro.irt_standard_library_update_upload_file_description":
    "单击或拖动文件到此区域进行上传",
  "propro.irt_standard_library_update_only_upload_peptide_list": "上传肽段列表",
  "propro.irt_standard_library_update_submit": "更新",
  "propro.irt_standard_library_update_success": "成功",
  "propro.irt_standard_library_update_failed": "失败",

  // 标准库详情
  "propro.standard_library_detail_title": "标准库详情页",
  "propro.standard_library": "标准库",
  "propro.standard_library_detail_id": "标准库ID",
  "propro.standard_library_detail_name": "标准库名称",
  "propro.standard_library_detail_library_type": "库类型",
  "propro.standard_library_detail_generator": "Generator",
  "propro.standard_library_detail_protein_count": "蛋白质数目",
  "propro.standard_library_detail_unique_protein_count": "Unique 蛋白质数目",
  "propro.standard_library_detail_deweight_protein_count":
    "Library 去除蛋白数目",
  "propro.standard_library_detail_peptide_count": "肽段数目",
  "propro.standard_library_detail_unique_peptide_count": "Unique 肽段数目",
  "propro.standard_library_detail_deweight_peptide_count":
    "Library 去除真肽段数目",
  "propro.standard_library_detail_fastade_weight_protein_count":
    "Fasta 去除蛋白数目",
  "propro.standard_library_detail_fastade_weight_peptide_count":
    "Fasta去除真肽段数目",
  "propro.standard_library_detail_description": "详情描述",
  "propro.standard_library_detail_creator": "创建者",
  "propro.standard_library_detail_create_time": "创建时间",
  "propro.standard_library_detail_last_modify_time": "最后修改时间",
  "propro.standard_library_detail_peptide_analyse": "肽段分析",
  "propro.standard_library_detail_peptide_link": "查看肽段",
  "propro.standard_library_detail_re_statistic_analyse":
    "重新统计蛋白质与肽段的数目",
  "propro.standard_library_detail_generating_pseudopeptides": "生成伪肽段",
  "propro.standard_library_detail_delete_pseudopeptides": "删除伪肽段",
  "propro.standard_library_detail_modify": "修改",
  "propro.standard_library_detail_delete": "删除",
  "propro.standard_library_detail_running": "运行",
  "propro.standard_library_detail_success": "成功",
  "propro.standard_library_detail_failed": "失败",
  "propro.standard_library_detail_delete_warning": "确认删除该标准库",
  "propro.standard_library_detail_delete_by_id": "删除标准库",
  "propro.standard_library_detail_peptide_list": "肽段列表",
  "propro.standard_library_detail_protein_list": "蛋白质列表",

  // 创建标准库

  "propro.standard_library_create_title": "创建标准库",
  "propro.standard_library_detail_name": "标准库名称",
  "propro.standard_library_detail_library_type": "库类型",
  "propro.standard_library_detail_description": "详情描述",
  "propro.standard_library_create_upload_csv_library":
    "请上传CSV/TraML格式的Library",
  "propro.standard_library_create_upload_file_description":
    "单击或拖动文件到此区域进行上传",
  "propro.standard_library_create_only_upload_peptide_list": "上传肽段列表",
  "propro.standard_library_create_only_name": "标准库名称必须唯一",
  "propro.standard_library_create_submit": "创建",

  // 肽段列表页
  "propro.peptide_list_title": "肽段列表",
  "propro.peptide_list_library_information": "库信息",
  "propro.peptide_list_search": "查找",
  "propro.peptide_list_search_by_name_title": "查询库",
  "propro.peptide_list_search_by_name": "请输入库名称",
  "propro.peptide_list_name": "名称",
  "propro.peptide_list_id": "ID",
  "propro.peptide_list_total_pages": "总页数",
  "propro.peptide_list_receive_pages": "已加载页数",
  "propro.peptide_list_page_size": "页大小",
  "propro.peptide_list_current_page": "当前页",
  "propro.peptide_list_search_time": "搜索用时",
  "propro.peptide_list_search_numbers": "搜索结果",
  "propro.peptide_list_see_detail": "查看详情",

  // 肽段列表详情
  "propro.peptide_detail_title": "肽段详情",

  // 蛋白质列表页
  "propro.protein_list_title": "蛋白质列表",
  "propro.protein_list_library_information": "库信息",
  "propro.protein_list_search": "查找",
  "propro.protein_list_search_by_name_title": "查询库",
  "propro.protein_list_search_by_name": "请输入库名称",
  "propro.protein_list_name": "名称",
  "propro.protein_list_id": "ID",
  "propro.protein_list_total_pages": "总页数",
  "propro.protein_list_receive_pages": "已加载页数",
  "propro.protein_list_page_size": "页大小",
  "propro.protein_list_current_page": "当前页",
  "propro.protein_list_search_time": "搜索用时",
  "propro.protein_list_search_numbers": "搜索结果",
  "propro.protein_list_see_detail": "查看详情",

  "propro.end": "end"
};

export default language_ch;
