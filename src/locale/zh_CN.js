// {
//     'statement' :'国际化配置',
//     'app.text': '杭州电子科技大学 管理学院 2016级 唐涛 tangtao2099@outlook.com ',
//     'app.learn-react-link': '我的主页',
//     'propro': {
//         'login' : '登录'
//     }

// }
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

  // 公共标准库
  "propro.public_lib_title": "公共标准库列表",
  "propro.public_lib_search": "搜索",
  "propro.public_lib_reset": "重置",
  "propro.public_lib_index": "序列号",
  "propro.public_lib_id": "标准库id",
  "propro.public_lib_name": "标准库名称",
  "propro.public_lib_protein_count": "蛋白质数目",
  "propro.public_lib_total_count": "肽段数目",
  "propro.public_lib_create_time": "创建时间",
  "propro.public_lib_is_public": "是否公开",
  "propro.public_lib_creator": "创建者",
  "propro.public_lib_operation": "操作",
  "propro.public_lib_detail": "详情",
  "propro.public_lib_protein_list": "蛋白质列表",
  "propro.public_lib_peptides_list": "肽段列表",

  // 公共标准库详情
  "propro.public_lib_detail_title": "公共标准库详情页",
  "propro.public_lib": "公共标准库",
  "propro.public_lib_detail_id": "标准库ID",
  "propro.public_lib_detail_name": "标准库名称",
  "propro.public_lib_detail_lib_type": "库类型",
  "propro.public_lib_detail_generator": "Generator",
  "propro.public_lib_detail_protein_count": "蛋白质数目",
  "propro.public_lib_detail_unique_protein_count": "Unique 蛋白质数目",
  "propro.public_lib_detail_deweight_protein_count": "Library 去除蛋白数目",
  "propro.public_lib_detail_peptide_count": "肽段数目",
  "propro.public_lib_detail_unique_peptide_count": "Unique 肽段数目",
  "propro.public_lib_detail_deweight_peptide_count": "Library 去除真肽段数目",
  "propro.public_lib_detail_fastade_weight_protein_count": "Fasta 去除蛋白数目",
  "propro.public_lib_detail_fastade_weight_peptide_count":
    "Fasta去除真肽段数目",
  "propro.public_lib_detail_description": "详情描述",
  "propro.public_lib_detail_creator": "创建者",
  "propro.public_lib_detail_create_time": "创建时间",
  "propro.public_lib_detail_last_modify_time": "最后修改时间",
  "propro.public_lib_detail_peptide_analyse": "肽段分析",
  "propro.public_lib_detail_re_statistic_analyse": "重新统计蛋白质与肽段的数目",
  "propro.public_lib_detail_generating_pseudopeptides": "生成伪肽段",
  "propro.public_lib_detail_delete_pseudopeptides": "删除伪肽段",
  "propro.public_lib_detail_modify": "修改",
  "propro.public_lib_detail_delete": "删除",

  // 更新公共标准库
  "propro.public_lib_update_title": "更新公共标准库",
  "propro.public_lib_update_only_target_peptides": "仅录入真实肽段",
  "propro.public_lib_update_upload_csv_library": "请上传CSV/TraML格式的Library",
  "propro.public_lib_update_upload_file_description":
    "单击或拖动文件到此区域进行上传",
  "propro.public_lib_update_only_upload_peptide_list": "上传肽段列表",
  "propro.public_lib_update_submit": "更新",

  "propro.end": "end"
};

export default language_ch;
