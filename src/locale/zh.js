import {
  bill_to_tableField as _billT,
  approver_tableField as _appT,
  send_to_tableField as _sendT,
  placed_to_tableField as _plaT,
  requisition_tableField as _reqT,
  client_tableField as _cliT,
  message_tableField as _mesT,
  personInfo_tableField as _perT,
  authority_tableField as _autT,
  clientPO_tableField as _cliPOT,
  search_item as _sea,
  billingPL_tableField as _billPL,
  invoice_tableField as _inT,
  CollectBalance_tableField as _cBTF,
  VatBalance_tableINVField as _vBTIF,
  VatBalance_tableVATField as _vBTVF,
  cpoInvoice_tableField as _cpoI,
  VatBalance_tableAbandonField as _vBTAF,
  group_tableField as _groT,
  tier1_tableField as _t1TF,
  tier4_tableField as _t4TF,
  tier2_tableField as _t2TF,
  product_tableField as _prodT,
  vendor_tableField as _vendorT,
  vendorPO_tableField as _vendorPOT,
  vendorINV_tableField as _vendorINV,
  jr_tableField as _jrT,
  vendorDetail_tableField as _venDeT,
  JR_tableField as _JRT,
  DAF_tableField as _DAFT,
  DAFDetail_tableField as _DAFDeT,
  WHT as _WHT,
  PE_tableField as _PET
} from '../config'

const language = {


  //common
  new_btn: 'NEW',
  new_submit_btn: 'Submit',
  submitSuccess: '已成功提交',
  saveSuccess: '保存成功',
  save_btn: 'Save',
  save_submit_btn: '保存并提交',
  newInfo: '新建',
  cancel: 'Cancel',
  required_fields: 'Please fill out this field.',
  save_ok: '操作成功',
  normal: '正常',
  toDisabled: '禁用',
  toNormal: '解禁',
  check: '查看',
  pending: '待处理',
  processing: '处理中',
  processed: '已处理',
  clientApprover: 'Client对应的Approver',
  noData: 'No Data',
  InvalidDate: 'Invalid Date',
  validDate: 'Valid Date',
  client_domestic: 'domestic',
  client_oversea: 'oversea',
  agree: '批准',
  disagree: '拒绝',
  comments: '备注',
  comments_tip: '拒绝时请填原因',
  cfmCode_title: '确认录入该Code',
  code_tip: '请填写Adept Code和Cartesis',
  edit: 'Edit',
  noRead: '未读',
  read: '已读',
  message: 'Message',
  personInfo_title: '用户个人信息',
  upload: '上传',
  uploadSign: '上传签名',
  handleSign: '管理签名',
  delete_btn: 'Delete',
  'create-client': '创建申请单',
  readYet: '标记为已读',
  noSelect: '未选中任何信息',
  operation: '操作',
  upload_sign: '上传签名',
  bill_fee: 'Agency Fee',
  bill_incentive: 'Agency Incentive',
  avg_month: 'Average by month',
  avg_per: 'Average by percentage %',
  avg_input: 'manual input',
  add: '增加条目',
  beforeChange: '修改前',
  afterChange: '修改后',
  billDate: 'Planned Billing Date',
  billPer: 'Billing %',
  billAmount: 'Billing Amount (net)',
  billTax: 'Tax',
  billAmG: 'Billing Amount (gross)',
  pleaseSelect: '请选择',
  index: 'Index',
  calculate: '自动计算（最后一行）',
  changed: '变更',
  viewPO: '查看PO',
  viewSO: '查看报价',
  save_change: '保存修改',
  loading: '加载中',
  copy: '复制',
  abandon: '废弃',
  abandonVat: '废弃VAT',
  abandonCfm: '确认废弃该Client PO？',
  abandonSuccess: '禁用申请单提交成功',
  enabledSuccess: '解禁成功',
  copyCPO: '复制此 Client PO？',
  vat_balance: 'VAT 配平',
  sendToCus: '已发送给客户',
  cusCfm: '客户批准',
  sendToCo: '已发送给协调员',
  SendToFin: '已发送给财务',
  finCfm: '财务批准',
  cusRej: '客户拒绝',
  amount: '总金额',
  back_balance: '回款配平',
  'delete': 'Delete',
  net_total: 'net total',
  tax: 'tax',
  inv_total: 'invoice total',
  invalid: '作废',
  toBP: '查看Billing Plan',
  toBalance: '查看 VAT 配平',
  viewBackB: '查看回款记录',
  print: '打印',
  amount_selected: '已选入总金额',
  notSet:'未设置',
  rest:'剩余金额',
  payOff:'冲抵',
  payOffVat:'Credit VAT',
  approval_submit:'提交成功',
  approval_save:'保存成功',
  approval_agree:'已批准当前发票',
  approval_disagree:'已拒绝当前发票',
  payOffModalTitle:'冲抵发票',
  payOffFrom:'被冲抵的发票',
  payOffTo:'红字发票',
  createNsubmit:'创建并提交',
  back:'Back',
  CNY:'CNY',
  USD:'USD',
  noBackB:'尚未进行回款',
  inv_flow:'流程变更',
  production:'Production',
  travel:'Travel',
  onlyOne:'请选择一项进行操作',
  disableThis:'禁用此项',
  enableThis:'解禁此项',
  unChange:'未修改项',
  vatInv:'Value-added Tax Invoice',
  vatCfmMsg:'确认编辑VAT？',
  vatCfmCont:'仅用于线上 VAT 数据与实际增值税发票不同的情况，即录入时录错的情况。',
  group_detail:'Group Details',
  selectCPO:'Select CPO',
  cfm:'OK',
  autoCal:'选完CPO后，系统自动运算',
  inputTier1:'Add Tier 1',
  inputTier2:'Add Tier 2',
  tier1:'Tier 1/2',
  tier1Detail:'Tier 1 详情',
  groupRest:'Group Balance Amount',
  tier1_detail:'Tier 1 详情',
  tier4:'Tier 4',
  tier4_detail:'Tier 4 详情',
  tier2:'Tier 2',
  tier1Rest:'Tier 1 Balance Amount',
  inputTier3:'Add Tier 3',
  tier2Rest:'Tier 2 Balance Amount',
  inputProject:'Add Project',
  tier4Rest:'Tier 4 Balance Amount',
  trans:'Transfer',
  deleteItem:'Delete',
  tier3:'Tier 3',
  inputTier4:'Add Tier 4',
  moveTier:'Transfer Tier',
  move_ok:'迁移成功',
  estimate:'Monthly Estimate',
  esti_date:'起止年月',
  esti_amount:'总金额',
  selectSomeTier3:'选择一项或多项 Tier 3 进行操作',
  addTier4:'选择 Tier 3 后，点击下方增加按钮，添加 Tier 4',
  expandAll:'展开所有子表格',
  closeAll:'关闭所有子表格',
  cfmDisabled:'确认废弃',
  publish:'发布',
  lockTitle:'this Group locked',
  lock_type :'Source',
  lock_personLiable:'Resposible',
  lock_lockDate:'Start Date',
  lock_occurDate:'Locked from',
  reset_btn:'Reset',
  trans_btn:'Transfer',
  noTier3FormData:'暂无 Tier 3',
  noTier4FormData:'暂无 Tier 4',
  noProFormData:'暂无 Project',
  selectTier4:'请先选择一项 Tier 4',
  selectTier3:'请先选择一项 Tier 3',
  selectPro:'请先选择一项 Project',
  moveTier2:'请选择迁移到以下哪项 Tier 2',
  moveTier3:'请选择迁移到以下哪项 Tier 3',
  openEsti:'显示预估花费',
  closeEsti:'隐藏预估花费',
  delSuccess:'删除成功',
  resetAll:'重置所有',
  collectLog:'Collection Log',
  uploadVat:'上传PDF',
  cpoApprove:'Approve',
  cpoReject:'Reject',
  cpoAbandon:'Abandon',
  inputOneFee:'至少录入一项费用',
  clearBP:'清楚所有BP',
  cpoLog:'Operation log',
  abandonInvSuccess:'作废成功',
  cantNewBp:'无法创建INV',
  selectApprove:'请选择 Approver',
  inputInvDetails:'请填写发票',
  vendor:"vendor",
  newProduct:'New Product',
  vendor_detail_edit:"Vendor",
  create:'Create',
  moreAttr_btn:'More Attributes : ',
  abandonDaf:'是否废弃旧的 DAF',
  returnToJR:'Return to JR List',
  MainCategory:'Main Category ( by Media Type / Channel )',
  SubCategory:'Sub-Category ( by Function )',
  calculation:'计算',
  WHTCal:'WHT Calculator',

  createProject:'Create Project',
  raiseInv:'Raise Invoice',
  doneJob:'Complete Job',
  PE:'PE',
  importVat:"录入 VAT",
  Vendor_PO:"Vendor PO",
  back:"返回",
  vpoCode:"VPO Code",
  vendor_inv_vat:"Vendor INV / VAT",
  payment:"Payment",
  credit:"Credit",










  //system status
  toSubmit: '已创建，待提交', // 已创建，待提交；创建申请被拒绝后，回到此状态
  submitted: '已提交，待批准', // 已提交，待批准
  approved: '已批准', // 已批准；修改申请被拒绝后、禁用申请被拒绝后、解禁申请单批准后，回到此状态
  updated: '已修改，待批准', // 已修改，待批准
  disabling: '禁用中，待批准', // 禁用中，待批准
  disabled: '已禁用', // 已禁用
  enabling: '从已禁用状态解禁中', // 从已禁用状态解禁中

//JR flowStatus
  toApproveByAD:'已提交，待客户总监审批',
  refusedByAD:'客户总监已拒绝，待提交',
  toApproveByFM:'财务已批准',
  refusedByFM:'财务经理已拒绝，待提交',
  effective:'已生效',
  adApprove:'客户总监批准', // 客户总监批准
  adRefuse:'客户总监拒绝', //  客户总监拒绝
  financeApproveToFM:'财务批准', // 财务批准，转至财务经理
  financeRefuse:'财务拒绝', // 财务拒绝
  financeApproveToEffective:'财务经理批准', // 财务批准，转至已生效
  fmRefuse: '财务经理拒绝', // 财务经理拒绝



  toApproveByFD: '已提交，待财务总监审批', // 已提交，待财务总监审批
  toRun: '财务总监已批准，待运行', // 财务总监已批准，待运行
  refusedByFD: '财务总监拒绝，待提交', // 财务总监拒绝，待提交
  running: '运行中', // 运行中
  finished: '项目已结束', // 项目已结束
  abandoned: '项目已废弃', // 项目已废弃

  toSendToClient: '财务总监已批准，待发送客户', // 财务总监已批准，待发送客户（财务总监批准）
  toApproveByClient: '已发送给客户，待客户审批', // 已发送给客户，待客户审批（发送客户）
  toSentToCoordinator: '客户已批准，待发送给协调员', // 客户已批准，待发送给协调员（客户批准）
  refusedByClient: '客户已拒绝，待冲抵', // 客户已拒绝，待冲抵 （客户拒绝）
  toSentToFinance: '已发送给协调员，待发送给财务', // 已发送给协调员，待发送给财务（发送协调员）
  toApproveByFinance: '已发送给财务，待财务审批', // 已发送给财务，待财务审批（发送财务）
  toCollected: '财务审批通过，待回款', // 财务审批通过，待回款（客户财务批准）
  refusedByFinance: '客户财务审批拒绝，待冲抵', // 财务审批拒绝，待冲抵（客户财务拒绝）
  partOfCollection: '已部分回款', // 已部分回款（回款配平操作）
  collected: '已回款', // 已回款（回款配平操作）






  //FPType

  common: 'Common', // 普通发票
  creditNote: 'Credit Note', // 红字发票
  replace: 'Replace', // 替代发票

  //inv status

  inv_flow_toSubmit: '发票已创建，待提交', // 发票已创建，待提交（创建）
  inv_flow_toApproveByFD: '已提交，待财务总监审批', // 已提交，待财务总监审批（提交）
  inv_flow_toSendToClient: '财务总监已批准，待发送客户', // 财务总监已批准，待发送客户（财务总监批准）
  inv_flow_refusedByFD: '财务总监拒绝，待提交', // 财务总监拒绝，待提交（财务总监拒绝）
  inv_flow_toApproveByClient: '已发送给客户，待客户审批', // 已发送给客户，待客户审批（发送客户）
  inv_flow_toSentToCoordinator: '客户已批准，待发送给协调员', // 客户已批准，待发送给协调员（客户批准）
  inv_flow_refusedByClient: '客户已拒绝，待冲抵', // 客户已拒绝，待冲抵 （客户拒绝）
  inv_flow_toSentToFinance: '已发送给协调员，待发送给财务', // 已发送给协调员，待发送给财务（发送协调员）
  inv_flow_toApproveByFinance: '已发送给财务，待财务审批', // 已发送给财务，待财务审批（发送财务）
  inv_flow_toCollected: '财务审批通过，待回款', // 财务审批通过，待回款（客户财务批准）
  inv_flow_refusedByFinance: '财务审批拒绝，待冲抵', // 财务审批拒绝，待冲抵（客户财务拒绝）
  inv_flow_partOfCollection: '已部分回款', // 已部分回款（回款配平操作）
  inv_flow_collected: '已回款', // 已回款（回款配平操作）
  inv_flow_credit: '已冲抵', // 已冲抵（开红字发票）
  inv_flow_abandoned: '已废弃', // 已废弃


  //billingPlan
  toBill: 'toBill',//创建后
  billing: 'billing',//创建了对应的INV
  billed: 'billed',//对应的Invoice客户已同意
  credit: 'credit',//已冲抵






  //  login
  login_alert: 'alert',
  login_username: 'Account',
  login_password: 'Password',
  login_login: 'Sign In',
  input_require: '{name}',
  input_placeholder: '{name}',
  locale: 'International - EN',
  ac_input_require: 'Please enter your account.',
  ps_input_require: 'Please enter your password.',
  Project_Title: 'PRODUCTION',
  invoice_detail: '发票详情',



  //sider
  client_po: 'Client PO',
  invoice_management: '发票管理',
  system_settings: '系统设置',
  personal_center: '个人中心',
  authority_management: '权限管理',
  invoice_list: 'Invoice List',
  VAT_list: 'VAT管理',
  vat_balance_details: 'VAT配平操作详情',
  VAT_trim: 'VAT 配平',
  collect_balance: '回款管理',
  collect_balance_details: '回款配平操作详情',
  client: '客户',
  bill_to: 'Bill To',
  approver: 'Approver',
  send_to: 'Sent To',
  placed_to: 'Placed To',
  requisition: '申请单',
  personal_information: '个人中心',
  client_po_details: 'Client PO 详情',
  bill_plan: 'Billing Plan',
  billing_plan_list: 'Billing Plan List',
  cpo_invoice: 'CPO Invoice',
  invoice: 'Invoice',
  group_management: 'Group',
  group: 'Group',
  tier_1: 'Tier 1/2',
  tier_4: 'Tier 4',
  product:'Product',
  product_details:'Product Details',
  jr_cate:'JR Category',
  JR_management:'JR',
  JR:'JR',
  DAF:'DAF',
  JR_detail:'JR',
  vendorPo_management:"Vendor PO",
  vendor_po:"Vendor PO",
  vendor_inv_vat:"vendor inv/vat",
  payment:"Payment",

  //search
  search_status: 'status',
  search_nameEN_like: 'En-Name',
  search_code_like: 'Adept Code',
  search_title_like: '职位',
  search_department_like: '部门',
  search_telephoneNumber: '分机号',
  [`search_${_sea.flowStatus}`]: '审批状态',
  [`search_${_sea.id_like}`]: 'ID',
  // search_id_like:"Show Name",
  [`search_${_sea.budgetType_in}`]: '预算类别',
  [`search_${_sea.budgetType}`]: '预算类别',
  [`search_${_sea['clientPoDetail.description_like']}`]: '描述',
  [`search_${_sea['clientPoDetail.clientPoType']}`]: '订单类别',
  [`search_${_sea['clientPoDetail.sentToId']}`]: 'Sent To',
  [`search_${_sea['clientPoDetail.billToId']}`]: 'Bill To',
  [`search_${_sea['clientPoDetail.placedToId']}`]: 'Placed To',
  [`search_${_sea['clientPoDetail.currencyId']}`]: 'Currency',
  [`search_${_sea['clientPoDetail.clientId']}`]: '客户',

  [`search_${['billingPlan.billCategory']}`]: '类别',
  [`search_${['billingPlan.flowStatus']}`]: 'Status',
  [`search_${['clientPoDetail.clientPoId_like']}`]: 'Client PO',
  [`search_${['clientPoDetail.clientId_like']}`]: 'Client',
  [`search_${['clientPoDetail.billToId_like']}`]: 'billTo',
  [`search_${['clientPoDetail.billCategory']}`]: '预算类型',
  [`search_${['clientDetail.clientId_like']}`]: 'Client',
  'search_clientPoDetail.year': 'Year',
  search_month: 'Month',
  search_billToId_like:'Bill To',
  search_description_like:'描述',
  search_clientPoId_like:'Client PO',
  search_FPCategory:'Category',
  'search_clientPoDetail.sentToId_like':'Send To',
  search_approverId_like:'Approver',
  search_GADusr_like:'GAD',
  search_year:'Year',
  search_groupId_like:'Group',
  'search_group.startDate_like':'Year',
  search_compositionQuery:'选择',
  [`search_${['tier2.id_like']}`]: 'Tier2',






  //bill - to
  [`bill_to_${_billT.id}`]: 'Show Name',
  [`bill_to_${_billT.nameEN}`]: 'EN-Name',
  [`bill_to_${_billT.nameCN}`]: 'CN-Name',
  [`bill_to_${_billT.phoneNum}`]: 'Phone Number',
  [`bill_to_${_billT.email}`]: 'Email',
  [`bill_to_${_billT.country}`]: 'Country',
  [`bill_to_${_billT.city}`]: 'City',
  [`bill_to_${_billT.address}`]: 'Address',
  [`bill_to_${_billT.postCode}`]: 'Post Code',
  [`bill_to_${_billT.description}`]: 'Description',
  [`bill_to_${_billT.operation}`]: 'Operation',
  [`bill_to_${_billT.status}`]: 'Status',


  //approver

  [`approver_${_appT.id}`]: 'Show Name',
  [`approver_${_appT.name}`]: 'Name',
  [`approver_${_appT.phoneNum}`]: 'Phone Number',
  [`approver_${_appT.email}`]: 'Email',
  [`approver_${_appT.validDate}`]: 'Valid Date',
  [`approver_${_appT.inValidDate}`]: 'Invalid Date',
  [`approver_${_appT.title}`]: 'Title',
  [`approver_${_appT.faxNum}`]: 'Fax Num',


  // send_to

  [`send_to_${_sendT.id}`]: 'Show Name',
  [`send_to_${_sendT.name}`]: 'Name',
  [`send_to_${_sendT.phoneNum}`]: 'Phone Number',
  [`send_to_${_sendT.email}`]: 'Email',
  [`send_to_${_sendT.country}`]: 'Country',
  [`send_to_${_sendT.city}`]: 'City',
  [`send_to_${_sendT.address}`]: 'Address',
  [`send_to_${_sendT.postCode}`]: 'Post Code',
  [`send_to_${_sendT.description}`]: 'Description',
  [`send_to_${_sendT.operation}`]: 'Operation',
  [`send_to_${_sendT.status}`]: 'Status',


  //placed_to

  [`placed_to_${_plaT.id}`]: 'Show Name',
  [`placed_to_${_plaT.nameEN}`]: 'EN-Name',
  [`placed_to_${_plaT.nameCN}`]: 'CN-Name',
  [`placed_to_${_plaT.logo}`]: 'Logo',
  [`placed_to_${_plaT.country}`]: 'Country',
  [`placed_to_${_plaT.city}`]: 'City',
  [`placed_to_${_plaT.address}`]: 'Address',
  [`placed_to_${_plaT.postCode}`]: 'Post Code',
  [`placed_to_${_plaT.description}`]: 'Description',
  [`placed_to_${_plaT.operation}`]: 'Operation',
  [`placed_to_${_plaT.status}`]: 'Status',
  [`placed_to_${_plaT.bankName}`]: 'Bank Name',
  [`placed_to_${_plaT.bankAccount}`]: 'Bank Account',
  [`placed_to_${_plaT.bankNum}`]: 'Bank Num',
  [`placed_to_${_plaT.swiftCode}`]: 'Swift Code',


  //requisition

  [`requisition_${_reqT.commonId}`]: 'ID',
  [`requisition_${_reqT.flowStatus}`]: 'Status',
  [`requisition_${_reqT.createdAt}`]: '创建时间',
  [`requisition_${_reqT.createdUsr}`]: '申请人',
  [`requisition_${_reqT.action}`]: 'Type',


  //client
  [`client_${_cliT.id}`]: 'Show Name',
  [`client_${_cliT.brief}`]: 'Brief',
  [`client_${_cliT.nameEN}`]: 'EN-Name',
  [`client_${_cliT.nameCN}`]: 'CN-Name',
  [`client_${_cliT.code}`]: 'Adept Code',
  [`client_${_cliT.cartesisCode}`]: 'Cartesis',
  [`client_${_cliT.city}`]: 'City',
  [`client_${_cliT.approver}`]: 'Approver',
  [`client_${_cliT.creditTerm}`]: 'Credit Terms',
  [`client_${_cliT.description}`]: 'Description',
  [`client_${_cliT.contactName}`]: 'Contact Name',
  [`client_${_cliT.title}`]: 'Title',
  [`client_${_cliT.phoneNum}`]: 'Phone Number',
  [`client_${_cliT.email}`]: 'Email',
  [`client_${_cliT.location}`]: 'Location',
  [`client_${_cliT.operation}`]: 'Operation',
  [`client_${_cliT.flowStatus}`]: 'Status',
  [`client_${_cliT.faxNum}`]: 'Fax Num',
  [`client_${_cliT.validDate}`]: 'Valid Date',
  [`client_${_cliT.INVType}`]: 'INV Type',


  //message

  [`messages_${_mesT.readFlag}`]: '状态',
  [`messages_${_mesT.msg}`]: '主题',
  [`messages_${_mesT.key}`]: '序号',
  [`messages_${_mesT.createdAt}`]: '时间',


  //personInfo

  [`personalInfo_${_perT.id}`]: 'Id',
  [`personalInfo_${_perT.name}`]: 'Name',
  [`personalInfo_${_perT.department}`]: 'Department',
  [`personalInfo_${_perT.title}`]: 'Title',
  [`personalInfo_${_perT.mail}`]: 'Mail',
  [`personalInfo_${_perT.telephoneNumber}`]: 'Phone Number',
  [`personalInfo_${_perT.signatures}`]: 'Signatures',


  //authority

  [`authority_${_autT.id}`]: '用户名',
  [`authority_${_autT.name}`]: '姓名',
  [`authority_${_autT.department}`]: '部门',
  [`authority_${_autT.title}`]: '职位',
  [`authority_${_autT.mail}`]: '邮箱',
  [`authority_${_autT.telephoneNumber}`]: '分机号',
  [`authority_${_autT.roles}`]: 'Roles',
  [`authority_${_autT.managerUsr}`]: 'Manager',
  [`authority_${_autT.GADUsr}`]: 'GAD',


  //clientPO


  [`clientPO_${_cliPOT.id}`]: 'Client PO',
  [`clientPO_${_cliPOT.version}`]: '版本号',
  [`clientPO_${_cliPOT.clientPoType}`]: 'Po Type',
  [`clientPO_${_cliPOT.clientDetailId}`]: 'Client',
  [`clientPO_${_cliPOT.clientId}`]: 'Client',
  [`clientPO_${_cliPOT.clientPoId}`]: 'CPO',
  [`clientPO_${_cliPOT.billToId}`]: 'Bill To',
  [`clientPO_${_cliPOT.sentToId}`]: 'Sent To',
  [`clientPO_${_cliPOT.placedToId}`]: 'Placed To',
  [`clientPO_${_cliPOT.startDate}`]: 'PO Date',
  [`clientPO_${_cliPOT.endDate}`]: 'End Date',
  [`clientPO_${_cliPOT.currencyId}`]: 'Currency',
  [`clientPO_${_cliPOT.excRate}`]: 'Exc Rate',
  [`clientPO_${_cliPOT.agencyFee}`]: 'Agency Fee',
  [`clientPO_${_cliPOT.agencyIncentive}`]: 'Agency Incentive',
  [`clientPO_${_cliPOT.productionCost}`]: 'Production',
  [`clientPO_${_cliPOT.travelCost}`]: 'Travel',
  [`clientPO_${_cliPOT.taxRate}`]: 'taxRate',
  [`clientPO_${_cliPOT.tax}`]: 'Tax',
  [`clientPO_${_cliPOT.amount}`]: 'Amount',
  [`clientPO_${_cliPOT.creditTerm}`]: 'Credit Term (Days)',
  [`clientPO_${_cliPOT.description}`]: 'Description',
  [`clientPO_${_cliPOT.country}`]: 'Country',
  [`clientPO_${_cliPOT.city}`]: 'City',
  [`clientPO_${_cliPOT.postCode}`]: 'Post Code',
  [`clientPO_${_cliPOT.address}`]: 'Address',
  [`clientPO_${_cliPOT.validFlag}`]: 'validFlag',
  [`clientPO_${_cliPOT.status}`]: 'status',
  [`clientPO_${_cliPOT.POFilePath}`]: '上传PO文件',
  [`clientPO_${_cliPOT.SowFilePath}`]: '上传报价文件',
  [`clientPO_${_cliPOT.operation}`]: '操作',
  [`clientPO_${_cliPOT.department}`]: 'Department',
  [`clientPO_${_cliPOT.amountInGross}`]: 'Agency Incentive (gross)',
  [`clientPO_${_cliPOT.amountFeeGross}`]: 'Agency Fee (gross)',
  [`clientPO_${_cliPOT.flowStatus}`]: '审批状态',
  [`clientPO_${_inT.approverId}`]: 'approver',
  [`clientPO_${_inT.net}`]: 'Net',
  [`clientPO_${_inT.gross}`]: 'Gross',
  [`clientPO_${_cliPOT.year}`]: 'Year',
  [`clientPO_${_cliPOT.GADUsr}`]: 'GAD',
  [`clientPOS_${_inT.id}`]: 'invoice',
  [`clientPOS_${_inT.INVDate}`]: 'invoice date',
  [`clientPOS_${_inT.dueDate}`]: 'due date',
  [`clientPOS_${_inT.clientPoId}`]: 'Client po',
  [`clientPOS_${_cliPOT.billToId}`]: 'bill to',
  [`clientPOS_${_cliPOT.placedToId}`]: 'gsdb',
  [`clientPO_${_groT.amountNtax}`]: 'Amount',


  //billing_plan_list
  [`billingPL_${_billPL.flowStatus}`]: 'status',
  [`billingPL_${_billPL.INV_ID}`]: 'INV ID',
  [`billingPL_${_billPL.clientPoId}`]: 'Client PO',
  [`billingPL_${_billPL.clientId}`]: 'Client',
  [`billingPL_${_billPL.billToId}`]: 'Bill To',
  [`billingPL_${_billPL.description}`]: 'Description',
  [`billingPL_${_billPL.billCategory}`]: '预算类别',
  [`billingPL_${_billPL.Month}`]: 'Month',
  [`billingPL_${_billPL.currencyId}`]: 'Currency',
  [`billingPL_${_billPL.percentage}`]: 'percentage',
  [`billingPL_${_billPL.net}`]: 'Net',
  [`billingPL_${_billPL.tax}`]: 'Tax',
  [`billingPL_${_billPL.gross}`]: 'Gross',
  [`billingPL_${_billPL.billType}`]: 'Type',
  [`billingPL_${_billPL.operation}`]: '操作',
  agencyFee: 'Agency Fee',
  agencyIncentive: 'Agency Incentive',
  productionCost: 'Production Cost',
  travelCost: 'Travel Cost',




  // invoice

  [`invoice_${_inT.code}`]: 'INV Num',
  [`invoice_${_inT.id}`]: 'INV Num',
  [`invoice_${_inT.clientPoType}`]: 'Po Type',
  [`invoice_${_inT.clientId}`]: 'Client',
  [`invoice_${_inT.clientPoId}`]: 'Client PO',
  [`invoice_${_inT.billToId}`]: 'Bill To',
  [`invoice_${_inT.sentToId}`]: 'Sent To',
  [`invoice_${_inT.placedToId}`]: 'Placed To',
  [`invoice_${_inT.currencyId}`]: 'Currency',
  [`invoice_${_inT.taxRate}`]: 'Tax Rate',
  [`invoice_${_inT.tax}`]: 'Tax',
  [`invoice_${_inT.description}`]: 'Description',
  [`invoice_${_inT.country}`]: 'Country',
  [`invoice_${_inT.postCode}`]: 'Post Code',
  [`invoice_${_inT.address}`]: 'Address',
  [`invoice_${_inT.collectedDate}`]: 'Collected Date',
  [`invoice_${_inT.dueDate}`]: 'Due Date',
  [`invoice_${_inT.collectedAmount}`]: 'Collected Amount',
  [`invoice_${_inT.overDue}`]: 'Over Due',
  [`invoice_${_inT.payDate}`]: 'Due Date',
  [`invoice_${_inT.flowStatus}`]: '审批状态',
  [`invoice_${_inT.gross}`]: 'Gross',
  [`invoice_${_inT.net}`]: 'Net',
  [`invoice_${_inT.INVDate}`]: 'Date',
  [`invoice_${_inT.serviceDate}`]: 'Service Period',
  [`invoice_${_inT.approverId}`]: 'Approver',
  [`invoice_${_inT.FPType}`]: 'FPType',
  [`invoice_${_inT.actualInvoiceDate}`]: '发票日期',
  [`invoice_${_inT.FPCategory}`]: 'Category',
  [`invoice_${_inT.filePath}`]: '扫描件',

  [`invoiceE_${_inT.code}`]: 'VAT Num',
  [`invoiceE_${_inT.id}`]: 'VAT Num',
  [`invoiceE_${_inT.clientPoType}`]: 'Po Type',
  [`invoiceE_${_inT.clientId}`]: 'Client',
  [`invoiceE_${_inT.clientPoId}`]: 'Client PO',
  [`invoiceE_${_inT.billToId}`]: 'Bill To',
  [`invoiceE_${_inT.sentToId}`]: 'Sent To',
  [`invoiceE_${_inT.placedToId}`]: 'Placed To',
  [`invoiceE_${_inT.currencyId}`]: 'Currency',
  [`invoiceE_${_inT.taxRate}`]: 'Tax Rate',
  [`invoiceE_${_inT.tax}`]: 'Tax',
  [`invoiceE_${_inT.description}`]: 'Description',
  [`invoiceE_${_inT.country}`]: 'Country',
  [`invoiceE_${_inT.postCode}`]: 'Post Code',
  [`invoiceE_${_inT.address}`]: 'Address',
  [`invoiceE_${_inT.collectedDate}`]: 'Collected Date',
  [`invoiceE_${_inT.dueDate}`]: 'Due Date',
  [`invoiceE_${_inT.collectedAmount}`]: 'Collected Amount',
  [`invoiceE_${_inT.overDue}`]: 'Over Due',
  [`invoiceE_${_inT.payDate}`]: 'Due Date',
  [`invoiceE_${_inT.flowStatus}`]: '审批状态',
  [`invoiceE_${_inT.gross}`]: 'Gross',
  [`invoiceE_${_inT.net}`]: 'Net',
  [`invoiceE_${_inT.INVDate}`]: 'Date',
  [`invoiceE_${_inT.serviceDate}`]: 'Service Date',
  [`invoiceE_${_inT.approverId}`]: 'Approver',
  [`invoiceE_${_inT.FPType}`]: 'FPType',
  [`invoiceE_${_inT.actualInvoiceDate}`]: '发票日期',
  [`invoiceE_${_inT.FPCategory}`]: 'Category',
  [`invoiceE_${_inT.filePath}`]: '扫描件',

  //CollectBalance
  [`CollectBalanceTF_${_cBTF.id}`]: '序号',
  [`CollectBalanceTF_${_cBTF.balanceType}`]: '回款类别',
  [`CollectBalanceTF_${_cBTF.amount}`]: '总金额',
  [`CollectBalanceTF_${_cBTF.Description}`]: 'Description',
  [`CollectBalanceTF_${_cBTF.currencyId}`]: '币种',
  [`CollectBalanceTF_${_cBTF.billToId}`]: 'BillTo',
  [`CollectBalanceTF_${_cBTF.clientId}`]: 'Client',
  [`CollectBalanceTF_${_cBTF.createdAt}`]: '回款时间',
  // [`CollectBalanceTF_${_cBTF.updatedAt}`]:'回款时间',

  //CollectBalanceDetail
  [`CollectBalanceDTF_${_cBTF.amount}`]: '总金额',
  [`CollectBalanceDTF_${_cBTF.balanceType}`]: '回款类别',
  [`CollectBalanceDTF_${_cBTF.currencyId}`]: '币种',
  [`CollectBalanceDTF_${_cBTF.billToId}`]: 'BillTo',
  [`CollectBalanceDTF_${_cBTF.clientId}`]: 'Client',
  [`CollectBalanceDTF_${_cBTF.createdAt}`]: '回款时间',
  [`CollectBalanceDTF_${_cBTF.bankCharge}`]: 'Bank Charge',
  [`CollectBalanceDTF_${_cBTF.bankCharge}`]: '银行手续费',
  [`CollectBalanceDTF_${_cBTF.clientPoId}`]: 'Client PO',
  [`CollectBalanceDTF_${_cBTF.clientPoIdDescription}`]: 'CPO Description',
  [`CollectBalanceDTF_${_cBTF.index}`]: '序号',
  [`CollectBalanceDTF_${_cBTF.id}`]: 'INV/VAT',
  [`CollectBalanceDTF_${_cBTF.gross}`]: 'Gross',
  [`CollectBalanceDTF_${_cBTF.status}`]: 'Status',
  [`CollectBalanceDTF_${_cBTF.flowStatus}`]: 'Status',
  [`CollectBalanceDTF_${_cBTF.description}`]: 'Description',
  [`CollectBalanceDTF_${_cBTF.Description}`]: 'Description',


  //cpo invoice
  [`cpo_invoice_${_cpoI.date}`]: 'Month',
  [`cpo_invoice_${_cpoI.gross}`]: 'Amount',
  [`cpo_invoice_${_cpoI.flowStatus}`]: 'Status',
  [`cpo_invoice_${_cpoI.billType}`]: 'Type',

  //vat balance
  [`VatBalanceITF_${_vBTIF.clientPoId}`]: 'CPO',
  [`VatBalanceITF_${_vBTIF.clientPoIdDescription}`]: 'CPO Description',
  [`VatBalanceITF_${_vBTIF.FPCategory}`]: 'Category',
  [`VatBalanceITF_${_vBTIF.clientId}`]: 'Client',
  [`VatBalanceITF_${_vBTIF.approverId}`]: 'Approver',
  [`VatBalanceITF_${_vBTIF.currencyId}`]: 'Currency',
  [`VatBalanceITF_${_vBTIF.description}`]: '描述',
  [`VatBalanceITF_${_vBTIF.index}`]: '序号',
  [`VatBalanceITF_${_vBTIF.id}`]: 'INV',
  [`VatBalanceITF_${_vBTIF.gross}`]: 'Gross',
  [`VatBalanceITF_${_vBTIF.flowStatus}`]: 'status',


  [`VatBalanceVTF_${_vBTVF.index}`]: '序号',
  [`VatBalanceVTF_${_vBTVF.id}`]: 'VAT',
  [`VatBalanceVTF_${_vBTVF.clientPoId}`]: 'CPO',
  [`VatBalanceVTF_${_vBTVF.actualInvoiceDate}`]: '开票日期',
  [`VatBalanceVTF_${_vBTVF.description}`]: '描述',
  [`VatBalanceVTF_${_vBTVF.net}`]: 'Net',
  [`VatBalanceVTF_${_vBTVF.tax}`]: 'Tax',
  [`VatBalanceVTF_${_vBTVF.flowStatus}`]: 'status',
  [`VatBalanceVTF_operation`]: 'Operation',
  [`VatBalanceITF_gross`]: 'Gross',
  [`VatBalanceVTF_gross`]: 'Gross',


  [`VatBalanceATF_${_vBTAF.id}`]: 'ID',
  [`VatBalanceATF_${_vBTAF.FPCategory}`]: 'Category',
  [`VatBalanceATF_${_vBTAF.clientId}`]: 'Client',
  [`VatBalanceATF_${_vBTAF.actualInvoiceDate}`]: 'Invoice Date',
  [`VatBalanceATF_${_vBTAF.billToId}`]: 'Bill To',
  [`VatBalanceATF_${_vBTAF.dueDate}`]: 'Due Date',
  [`VatBalanceATF_${_vBTAF.clientPoId}`]: 'CPO ID',
  [`VatBalanceATF_${_vBTAF.currencyId}`]: 'Currency',
  [`VatBalanceATF_${_vBTAF.description}`]: 'Description',
  [`VatBalanceATF_${_vBTAF.net}`]: 'Net',
  [`VatBalanceATF_${_vBTAF.placedToId}`]: 'Placed To',
  [`VatBalanceATF_${_vBTAF.tax}`]: 'Tax',
  [`VatBalanceATF_${_vBTAF.sentToId}`]: 'Sent To',
  [`VatBalanceATF_${_vBTAF.gross}`]: 'Gross',
  [`VatBalanceATF_${_vBTAF.approverId}`]: 'Approver',






  //group
  [`group_${_groT.id}`]: 'id',
  [`group_${_groT.name}`]: 'Group',
  [`group_${_groT.amount}`]: 'CPO Amount',
  [`group_${_groT.budgetAllocated}`]: 'Budget Allocated',
  [`group_${_groT.restAmount}`]: 'Opp./(Risk)',
  [`group_${_groT.balanceStatus}`]: 'Balance Status',
  [`group_${_groT.startDate}`]: 'Start Date',
  [`group_${_groT.description}`]: 'Description',
  [`group_${_groT.currencyId}`]: 'Currency',
  [`group_${_groT.clientId}`]: 'Client',
  [`group_${_groT.clientPos}`]: 'Client POs',
  [`group_${_groT.open}`]: 'Opp',


  //tier1
  [`tier1_${_t1TF.id}`]:'Tier 1',
  [`tier1_${_t1TF.name}`]:'Tier 1',
  [`tier1_${_t1TF.groupId}`]:'Group',
  [`tier1_${_t1TF.groupName}`]:'Group',
  [`tier1_${_t1TF.initAmount}`]:'Initial Budget Amount',
  [`tier1_${_t1TF.lastMonthAmount}`]:'Last Budget Amount',
  [`tier1_${_t1TF.amount}`]:'Current Budget Amount',
  [`tier1_${_t1TF.open}`]:'Open',
  [`tier1_${_t1TF.planned}`]:'Planned',
  [`tier1_${_t1TF.committed}`]:'Committed',
  [`tier1_${_t1TF.description}`]:'Description',
  [`tier1_${_t1TF.operation}`]:'操作',
  [`tier1_${_t1TF.currencyId}`]:'Currency',
  [`tier1_${_t2TF.flowStatus}`]:'Status',
  [`tier1_cpo-desc`]:'CPO',
  [`tier1_PE-code`]:'PE Code',
  [`tier1_PE-code`]:'PE Code',

  tier1E_action:'Action',
  [`tier1E_${_t1TF.id}`]:'Tier 2',
  [`tier1E_${_t1TF.name}`]:'Tier 2',
  [`tier1E_${_t1TF.initAmount}`]:'Initial Budget',
  [`tier1E_${_t1TF.lastMonthAmount}`]:'Last Month Budget',
  [`tier1E_${_t1TF.amount}`]:'Current Month Budget',
  [`tier1E_${_t1TF.open}`]:'Open',
  [`tier1E_${_t1TF.planned}`]:'Planned',
  [`tier1E_${_t1TF.committed}`]:'Committed',
  [`tier1E_${_t1TF.approverId}`]:'Approver',
  [`tier1E_${_t1TF.description}`]:'Description',

   //tier4
   [`tier4_${_t4TF.id}`]:'Tier4',
   [`tier4_${_t4TF.name}`]:'Tier4',
   [`tier4_${_t4TF.groupId}`]:'Group',
   // [`tier4_${_t4TF.initAmount}`]:'Initial Budget Amount',
   // [`tier4_${_t4TF.lastMonthAmount}`]:'Last Budget Amount',
   [`tier4_${_t4TF.amount}`]:'Budget Amount',
   [`tier4_${_t4TF.open}`]:'Open',
   [`tier4_${_t4TF.planned}`]:'Planned',
   [`tier4_${_t4TF.committed}`]:'Committed',
   [`tier4_${_t4TF.description}`]:'Description',
   [`tier4_${_t4TF.operation}`]:'操作',
   [`tier4_${_t4TF.currencyId}`]:'Currency',
   [`tier4_${_t4TF.tier3Id}`]:'Tier 3',

   tier4E_action:'Action',
   [`tier4E_${_t4TF.id}`]:'Project',
   [`tier4E_${_t4TF.name}`]:'Project',
   // [`tier4E_${_t4TF.initAmount}`]:'Initial Budget Amount',
   // [`tier4E_${_t4TF.lastMonthAmount}`]:'Last Budget Amount',
   [`tier4E_${_t4TF.amount}`]:'Budget Amount',
   [`tier4E_${_t4TF.open}`]:'Open',
   [`tier4E_${_t4TF.planned}`]:'Planned',
   [`tier4E_${_t4TF.committed}`]:'Committed',
   [`tier4E_${_t4TF.approverId}`]:'Approver',
   [`tier4E_${_t4TF.description}`]:'Description',
   [`tier4E_${_t4TF.clientPoId}`]:'Client PO',
   [`tier4E_${_t4TF.jr}`]:'JR',
   [`tier4E_${_t4TF.peCode}`]:'PE Code',
   [`tier4E_${_t4TF.clientPoId}`]:'Client PO',
   [`tier4E_${_t4TF.forecast}`]:'预估花费',




  // tier2
  [`tier2_${_t2TF.name}`]: 'Name',
  [`tier2_${_t2TF.groupId}`]: 'Group',
  [`tier2_${_t2TF.currencyId}`]: 'Currency',
  [`tier2_${_t2TF.approverId}`]: 'Approver',
  [`tier2_${_t2TF.description}`]: 'Description',
  [`tier2_${_t2TF.amount}`]: 'Budget Amount',
  [`tier2_${_t2TF.tier3Name}`]: 'Tier3 Name',
  [`tier2_${_t2TF.tier4Name}`]: 'Tier4 Name',
  [`tier2_${_t2TF.tier2Rest}`]: 'Tier2 Rest',
  [`tier2_${_t2TF.tier3Rest}`]: 'Tier3 Rest',
  [`tier2_${_t2TF.tier4Rest}`]: 'Tier4 Rest',
  [`tier2_${_t2TF.cpo}`]: 'Client PO',
  [`tier2_${_t2TF.esti}`]: 'Monthly Estimate',

  //vendor
  [`vendor_${_vendorT.operation}`]: '复制',
  [`vendor_${_vendorT.id}`]: 'Show Name',
  [`vendor_${_vendorT.flowStatus}`]: '审批状态',
  [`vendor_${_vendorT.status}`]: 'Status',
  [`vendor_${_vendorT.nameEN}`]: 'Name-EN',
  [`vendor_${_vendorT.nameCN}`]: 'Name-CN',
  [`vendor_${_vendorT.code}`]: 'Adept Code',
  [`vendor_${_vendorT.cartesisCode}`]: 'Cartesis',
  [`vendor_${_vendorT.validDate}`]: 'Valid Date',
  [`vendor_${_vendorT.vendorType}`]: 'Type',
  [`vendor_${_vendorT.taxRate}`]: 'Tax Rate',
  [`vendor_${_vendorT.natureOfBusiness}`]: 'Nature Of Business',
  [`vendor_${_vendorT.expectedValue}`]: 'Expected Value',
  [`vendor_${_vendorT.referral}`]: 'Referral In Blue Hive',
  [`vendor_${_vendorT.addressEN}`]: 'Address-EN',
  [`vendor_${_vendorT.addressCN}`]: 'Address-CN',
  [`vendor_${_vendorT.contactPerson}`]: 'Contact Person',
  [`vendor_${_vendorT.title}`]: 'Title',
  [`vendor_${_vendorT.telephone}`]: 'Telephone',
  [`vendor_${_vendorT.fax}`]: 'Fax',
  [`vendor_${_vendorT.email}`]: 'Email',

  //vendor_detail
  [`venDetail_${_venDeT.id}`]                        : 'Show Name',
  [`venDetail_${_venDeT.flowStatus}`]                : '审批状态',
  [`venDetail_${_venDeT.status}`]                    : 'Status',
  [`venDetail_${_venDeT.nameEN}`]                    : 'Name-EN',
  [`venDetail_${_venDeT.nameCN}`]                    : 'Name-CN',
  [`venDetail_${_venDeT.code}`]                      : 'Adept Code',
  [`venDetail_${_venDeT.cartesisCode}`]              : 'Cartesis',
  [`venDetail_${_venDeT.validDate}`]                 : 'Valid Date',
  [`venDetail_${_venDeT.vendorType}`]                : 'Vendor Type',
  [`venDetail_${_venDeT.location}`]                  : 'Location',
  [`venDetail_${_venDeT.vendorFP}`]                  : 'FP Type',
  [`venDetail_${_venDeT.taxRate}`]                   : 'Tax Rate',
  [`venDetail_${_venDeT.referral}`]                  : 'Referral In Blue Hive',
  [`venDetail_${_venDeT.addressEN}`]                 : 'Address-EN',
  [`venDetail_${_venDeT.addressCN}`]                 : 'Address-CN',
  [`venDetail_${_venDeT.contactPerson}`]             : 'Contact Person',
  [`venDetail_${_venDeT.title}`]                     : 'Title',
  [`venDetail_${_venDeT.telephone}`]                 : 'Telephone',
  [`venDetail_${_venDeT.fax}`]                       : 'Fax',
  [`venDetail_${_venDeT.email}`]                     : 'Email',

  [`venDetail_${_venDeT.natureOfBusiness}`]          : 'Nature Of Business',
  [`venDetail_${_venDeT.expectedValue}`]             : 'Expected Value',
  [`venDetail_${_venDeT.currencyId}`]                : 'Currency',
  [`venDetail_${_venDeT.referral}`]: 'Name of Employees Responsible',

  [`venDetail_${_venDeT.visitDate}`]                : 'Date ',
  [`venDetail_${_venDeT.visitor}`]                : 'Visitor ',
  [`venDetail_${_venDeT.visitResult}`]                : 'Result',
  [`venDetail_${_venDeT.visitFilePath}`]                : 'Visit Report',
  [`venDetail_${_venDeT.capabilities}`]                : '',
  [`venDetail_${_venDeT.conflictName}`]                : 'Name of employees/directors  ',
  [`venDetail_${_venDeT.conflictTitle}`]                : 'Title of employees/directors',
  [`venDetail_${_venDeT.relation}`]                : 'Relationship with vendors',
  [`venDetail_${_venDeT.vendorCity}`]                : 'City of operation base of this vendor ',
  [`venDetail_${_venDeT.officeInChina}`]                : 'Network/ branch office within China ',
  [`venDetail_${_venDeT.officeOutChina}`]                : 'Network/ branch office outside China',

  [`venDetail_${_venDeT.companyName}`]               : 'Company Name',
  [`venDetail_${_venDeT.bankName}`]                  : 'Bank Name',
  [`venDetail_${_venDeT.bankAddress}`]               : 'Bank Address',
  [`venDetail_${_venDeT.accountNum}`]                : 'Account Num',
  [`venDetail_${_venDeT.accountAddress}`]            : 'Account Address',
  [`venDetail_${_venDeT.swiftCode}`]: 'Swift Code',

  [`venDetail_${_venDeT.COBC}`]: '1. Signed/Chopped WPP Code of Business Conduct - for suppliers',
  [`venDetail_${_venDeT.BHD}`]: '2. Signed/Chopped Blue Hive Declaration',
  [`venDetail_${_venDeT.NDA}`]: '3. Signed/Chopped Non-Disclosure Agreement',
  [`venDetail_${_venDeT.BL}`]: '4. Business License / Certificate',
  [`venDetail_${_venDeT.AL}`]: '5. Account License',
  [`venDetail_${_venDeT.remark}`]: '备注',

  //product
  [`product_${_prodT.validDate}`]: 'Valid Date',
  [`product_${_prodT.name}`]: 'Name',
  [`product_${_prodT.code}`]: 'Adept Code',
  [`product_${_prodT.currencyId}`]: 'Currency',
  [`product_${_prodT.flowStatus}`]: 'Status',
  [`product_${_prodT.clientId}`]: 'Client',
  [`product_${_prodT.contactName}`]: 'Contact Name',
  [`product_${_prodT.title}`]: 'Title',
  [`product_${_prodT.phoneNum}`]: 'Phone Num',
  [`product_${_prodT.email}`]: 'Email',
  [`product_${_prodT.faxNum}`]: 'Fax',



  //jr

  [`jr_${_jrT.id}`]: 'Name',
  [`jr_${_jrT.JRTypeLevel}`]: 'Level',
  [`jr_${_jrT.JRTypeCategory}`]: 'Category',


  // JR main
  [`JRDetail_${_JRT.id}`]: 'Code',
  [`JRDetail_${_JRT.receivedDate}`]: 'Date Received By Traffic',
  [`JRDetail_${_JRT.brief}`]: 'Job Brief',
  [`JRDetail_${_JRT.net}`]: 'Net',
  [`JRDetail_${_JRT.tax}`]: 'Tax',
  [`JRDetail_${_JRT.gross}`]: 'Gross',
  [`JRDetail_${_JRT.purchaseType}`]: 'Purchase Type',
  [`JRDetail_${_JRT.productId}`]: 'Product',
  [`JRDetail_${_JRT.projectId}`]: 'Project',
  [`JRDetail_${_JRT.clientDetailId}`]: 'Client',
  [`JRDetail_${_JRT.GADUsr}`]: 'GAD',
  [`JRDetail_${_JRT.currencyId}`]: 'Currency',
  [`JRDetail_${_JRT.JR_VendorDetails}`]: 'JR_VendorDetails',
  [`JRDetail_${_JRT.JRTypes}`]: 'JRTypes',
  [`JRDetail_${_JRT.clientCode}`]: 'Client Code',
  [`JRDetail_${_JRT.productCode}`]: 'Product Code',
  [`JRDetail_${_JRT.description}`]: 'Job / Invoice Description',
  [`JRDetail_${_JRT.DAFId}`]: 'DAF',
  [`JRDetail_${_JRT.vendor}`]: 'Vendor',
  [`JRDetail_${_JRT.vendorCode}`]: 'Vendor Code',
  [`JRDetail_${_JRT.vendorNet}`]: 'Vendor Net',
  [`JRDetail_${_JRT.vendorGross}`]: 'Vendor Gross',
  [`JRDetail_${_JRT.PETax}`]: 'PE Tax',
  [`JRDetail_${_JRT.PEGross}`]: 'PE Gross',
  [`JRDetail_${_JRT.File}`]: 'File',
  [`JRDetail_${_JRT.vendorDetailId}`]: 'Vendor',
  [`JRDetail_${_JRT.flowStatus}`]: 'Status',
  [`JRDetail_${_JRT.createdUsr}`]: 'Submitter',
  [`JRDetail_${_JRT.clientPoId}`]: 'Client Po',
  [`JRDetail_${_JRT.projectDesc}`]: 'Project',
  [`JRDetail_${_JRT.DAFs}`]: 'DAF',
  [`JRDetail_${_JRT.vendor_s}`]: 'Vendor(chosen)',
  [`JRDetail_${_JRT.description_JR}`]: 'Description',
  [`JRDetail_${_JRT.productId}`]: 'Product',


  // DAF
  [`DAFT_${_DAFT.id}`]: 'ID',
  [`DAFT_${_DAFT.name}`]: 'DAF',
  [`DAFT_${_DAFT.date}`]: 'Date',
  [`DAFT_${_DAFT.purchaseType}`]: 'Type',
  [`DAFT_${_DAFT.client}`]: 'Client',
  [`DAFT_${_DAFT.projectName}`]: 'Project',
  [`DAFT_${_DAFT.description}`]: 'Project Description',
  [`DAFT_${_DAFT.buyer}`]: 'Agency Buyer',
  [`DAFT_${_DAFT.team}`]: 'Account Team',
  [`DAFT_${_DAFT.vendor}`]: 'Vendor',
  [`DAFT_${_DAFT.currencyId}`]: 'Currency',
  [`DAFT_${_DAFT.budget}`]: 'Budget',
  [`DAFT_${_DAFT.rationale}`]: 'Rationale',
  [`DAFT_${_DAFT.service}`]: 'Service',



  //WHT

  [`WHT_${_WHT.invAmount}`]: 'INV Amount',
  [`WHT_${_WHT.taxBear}`]: 'Tax Beard By',
  [`WHT_${_WHT.vatIn}`]: 'VAT in',
  [`WHT_${_WHT.surtax}`]: 'Surtax ',
  [`WHT_${_WHT.incTax}`]: 'inc. Tax',
  [`WHT_${_WHT.total}`]: 'Total',
  [`WHT_${_WHT.WHTex}`]: 'WHT EX Rate',
  [`WHT_${_WHT.taxableAmount}`]: 'Taxable Amount',

  // DAFDetail
  [`DAFDetail_${_DAFDeT.id}`]: 'ID',
  [`DAFDetail_${_DAFDeT.name}`]: 'Code',
  [`DAFDetail_${_DAFDeT.date}`]: 'Date',
  [`DAFDetail_${_DAFDeT.purchaseType}`]: 'Purchase Type',
  [`DAFDetail_${_DAFDeT.clientDetailId}`]: 'Client',
  [`DAFDetail_${_DAFDeT.projectName}`]: 'Project',
  [`DAFDetail_${_DAFDeT.description}`]: 'Project Description',
  [`DAFDetail_${_DAFDeT.vendorDetailId}`]: 'Vendor',
  [`DAFDetail_${_DAFDeT.GADUsr}`]: 'Agency Group Account Director ',
  [`DAFDetail_${_DAFDeT.currencyId}`]: 'Currency',
  [`DAFDetail_${_DAFDeT.budget}`]: 'Budget',
  [`DAFDetail_${_DAFDeT.isWPP}`]: 'Is Vendor a WPP Company',
  [`DAFDetail_${_DAFDeT.service}`]: 'Service Provided ',
  [`DAFDetail_${_DAFDeT.reasonIndexs}`]: 'Reason',
  [`DAFDetail_${_DAFDeT.rationale}`]: 'Rationale',

  //PE

  [`PEDetail_${_PET.status}`]: 'Status',
  [`PEDetail_${_PET.peCode}`]: 'PE Code',
  [`PEDetail_${_PET.description}`]: 'Description',
  [`PEDetail_${_PET.client}`]: 'Client',
  [`PEDetail_${_PET.product}`]: 'Product',
  [`PEDetail_${_PET.cpo}`]: 'Client PO',
  [`PEDetail_${_PET.gad}`]: 'GAD',
  [`PEDetail_${_PET.contact}`]: 'Contact',
  [`PEDetail_${_PET.currency}`]: 'Currency',
  [`PEDetail_${_PET.net}`]: 'Net',
  [`PEDetail_${_PET.tax}`]: 'Tax',
  [`PEDetail_${_PET.gross}`]: 'Gross',
  [`PEDetail_${_PET.percentage}`]: 'Raised Percentage',
  [`PEDetail_${_PET.ar}`]: 'AR(Net)',
  [`PEDetail_${_PET.ap}`]: 'AP(Net)',



  //vendorPO
  [`vendorPO_${_vendorPOT.id}`]: 'VPO No.',
  [`vendorPO_${_vendorPOT.flowStatus}`]: 'Status',
  [`vendorPO_${_vendorPOT.code}`]: 'Adept Code',
  [`vendorPO_${_vendorPOT.description}`]: 'Description',
  [`vendorPO_${_vendorPOT.vendorId}`]: 'Vendor',
  [`vendorPO_${_vendorPOT.placedToId}`]: 'Placed To',
  [`vendorPO_${_vendorPOT.PEId}`]: 'PE Code',
  [`vendorPO_${_vendorPOT.clientId}`]: 'Client',
  [`vendorPO_${_vendorPOT.clientPoId}`]: 'Client PO',
  [`vendorPO_${_vendorPOT.currencyId}`]: 'Currency',
  [`vendorPO_${_vendorPOT.net}`]: 'Amount',
  [`vendorPO_${_vendorPOT.invId}`]: 'INV/VAT',

  [`vendorPO_${_vendorPOT.operation}`]: 'Operation',
  [`vendorPO_${_vendorPOT.vatId}`]: 'VAT No.',
  [`vendorPO_${_vendorPOT.num}`]: 'VAT No.',
  [`vendorPO_${_vendorPOT.taxRate}`]: 'Tax Rate',
  [`vendorPO_${_vendorPOT.net}`]: 'Net',
  [`vendorPO_${_vendorPOT.tax}`]: 'Tax',
  [`vendorPO_${_vendorPOT.gross}`]: 'Gross',
  [`vendorPO_${_vendorPOT.INVDate}`]: 'Invoice Issued Date',
  [`vendorPO_${_vendorPOT.enterDate}`]: 'Enter Date',
  [`vendorPO_${_vendorPOT.expectedDate}`]: 'Expected Date',
  [`vendorPO_${_vendorPOT.remark}`]: 'Remark',

  [`vendorPO_${_vendorPOT.vendorAddress}`]: 'vendorAddress',
  [`vendorPO_${_vendorPOT.address}`]: 'Address',

  //vendor-inv-vat
    //INV
  [`vendorINV_${_vendorINV.INVDate}`]: 'Invoice Issued Date',
  [`vendorINV_${_vendorINV.vpoCode}`]: 'VPO Code',
  [`vendorINV_${_vendorINV.id}`]: 'INV No.',
  [`vendorINV_${_vendorINV.net}`]: 'INV Amount',
  [`vendorINV_${_vendorINV.PECode}`]: 'PE Code',
  [`vendorINV_${_vendorINV.vendorCode}`]: 'Vendor Code',
  [`vendorINV_${_vendorINV.vendorName}`]: 'Vendor Name',
  [`vendorINV_${_vendorINV.enterDate}`]: 'Enter Date',
  [`vendorINV_${_vendorINV.expectedDate}`]: 'Expected Date',
  [`vendorINV_${_vendorINV.payDate}`]: 'Pay Date',
  [`vendorINV_${_vendorINV.paidAmount}`]: 'Paid Amount',
  [`vendorINV_${_vendorINV.balance}`]: 'Balance',
  [`vendorINV_${_vendorINV.remark}`]: 'Remark',

  [`vendorINV_${_vendorINV.operation}`]: 'Operation',
  [`vendorINV_${_vendorINV.paymentNum}`]: 'Payment Num',
  [`vendorINV_${_vendorINV.bankName}`]: 'Bank Name',
  [`vendorINV_${_vendorINV.accountNum}`]: 'Account Num',
  [`vendorINV_${_vendorINV.filePath}`]: '附件',
    //VAT
  [`vendorVAT_${_vendorINV.INVDate}`]: 'Invoice Issued Date',
  [`vendorVAT_${_vendorINV.vpoCode}`]: 'VPO Code',
  [`vendorVAT_${_vendorINV.id}`]: 'VAT No.',
  [`vendorVAT_${_vendorINV.taxRate}`]: 'Tax Rate',
  [`vendorVAT_${_vendorINV.net}`]: 'Net',
  [`vendorVAT_${_vendorINV.tax}`]: 'Tax',
  [`vendorVAT_${_vendorINV.gross}`]: 'Gross',
  [`vendorVAT_${_vendorINV.PECode}`]: 'PE Code',
  [`vendorVAT_${_vendorINV.vendorCode}`]: 'Vendor Code',
  [`vendorVAT_${_vendorINV.vendorName}`]: 'Vendor Name',
  [`vendorVAT_${_vendorINV.enterDate}`]: 'Enter Date',
  [`vendorVAT_${_vendorINV.expectedDate}`]: 'Expected Date',
  [`vendorVAT_${_vendorINV.payDate}`]: 'Pay Date',
  [`vendorVAT_${_vendorINV.paidAmount}`]: 'Paid Amount',
  [`vendorVAT_${_vendorINV.balance}`]: 'Balance',
  [`vendorVAT_${_vendorINV.remark}`]: 'Remark',

};



export default language
