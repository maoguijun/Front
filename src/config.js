exports.locale = {
  cn:'zh',
  en:'en'
};

exports.host='/api';
exports.serverurl='/api';
exports.fetchState={
  success:'success'
};



exports.ClientPLStatus = {
  toBill: 'toBill',//创建后；
  billing:'billing',//开了对应的 INV 后
  billed: 'billed',//该回款计划对应的 Invoice 被 Client Approved 后。
  credit:'credit',//已冲抵
}

exports.CPOStatus = {
  toSubmit: 'toSubmit', // 发票已创建，待提交（创建）
  toApproveByFD: 'toApproveByFD', // 已提交，待财务总监审批（提交）
  toSendToClient: 'toSendToClient', // 财务总监已批准，待发送客户（财务总监批准）
  refusedByFD: 'refusedByFD', // 财务总监拒绝，待提交（财务总监拒绝）
  toApproveByClient: 'toApproveByClient', // 已发送给客户，待客户审批（发送客户）
  // toSentToCoordinator: 'toSentToCoordinator', // 客户已批准，待发送给协调员（客户批准）
  // refusedByClient: 'refusedByClient', // 客户已拒绝，待冲抵 （客户拒绝）
  // toSentToFinance: 'toSentToFinance', // 已发送给协调员，待发送给财务（发送协调员）
  // toApproveByFinance: 'toApproveByFinance', // 已发送给财务，待财务审批（发送财务）
  // toCollected: 'toCollected', // 财务审批通过，待回款（客户财务批准）
  // refusedByFinance: 'refusedByFinance', // 财务审批拒绝，待冲抵（客户财务拒绝）
  // partOfCollection: 'partOfCollection', // 已部分回款（回款配平操作）
  collected: 'collected', // 已回款（回款配平操作）
  abandoned: 'abandoned', // 已废弃
}

exports.systemStatus = {
  toSubmit: 'toSubmit', // 已创建，待提交；创建申请被拒绝后，回到此状态
  submitted: 'submitted', // 已提交，待批准
  approved: 'approved', // 已批准；修改申请被拒绝后、禁用申请被拒绝后、解禁申请单批准后，回到此状态
  updated: 'updated', // 已修改，待批准
  disabling: 'disabling', // 禁用中，待批准
  disabled: 'disabled', // 已禁用
  enabling: 'enabling', // 从已禁用状态解禁中
}

exports.BudgetType = {
  agencyFee:'agencyFee',
  agencyIncentive:'agencyIncentive',
  productionCost:'productionCost',
  travelCost:'travelCost'
}


exports.WHTPayType = {
  "ByGTBSH": "ByGTBSH",
  "BySupplier": "BySupplier"
}
// exports.FPCategory = [
//   'agencyFee',
//   'agencyIncentive',
//   'production',
//   'travel',
// ]



exports.CPOOperation = {
  create: 'create', // 创建
  submit: 'submit', // 提交
  withdraw: 'withdraw', // 撤回
  fdApprove: 'fdApprove', // 财务总监批准，待运行
  fdRefuse: 'fdRefuse', // 财务总监拒绝，待提交
  run: 'run', // 开始运行项目
  finish: 'finish', // 结束项目
  abandon: 'abandon', //  废弃项目
}

exports.rootPath={
  bill_to:'bill_to',
  approver:'approver',
  send_to:'send_to',
  placed_to:'placed_to',
  authority_management:'authority_management',
  requisition:'requisition',
  client:'client',
  personal_information:'personal_information',
  client_po:'client_po',
  client_po_details:'client_po/client_po_details',
  billing_plan_list:'billing_plan_list',
  cpo_invoice:'cpo_invoice',
  invoice_management:'invoice_management',
  invoice_detail:'invoice_detail',
  collect_balance: 'collect_balance',
  collect_balance_details:'collect_balance/collect_balance_details',
  vat_balance_details:'invoice_management/vat_balance_details',
  VAT_list:'VAT_list',
  group:'group',
  group_detail:"group_detail",
  tier1:'tier_1',
  tier1_detail:"tier_1/tier1_detail",
  tier4:'tier_4',
  tier4_detail:"tier_4/tier4_detail",
  tier2:'tier2',

  vendor:"vendor",
  vendor_detail_edit:"vendor/vendor_detail_edit",
  vendor_detail_show:"vendor/vendor_detail_show",
  product:'product',
  productInfo:'productInfo',
  product_details:'product_details',
  jr_details:'jr_details',
  jr_cate:'jr_cate',
  JR:'JR',
  JR_details:'JR_details',
  DAF:"DAF",
  DAF_detail_edit:"DAF/DAF_detail_edit",
  DAF_detail_show:"DAF/DAF_detail_show",
  PE:'PE',
  PE_details:'PE_details',
  vendorPo:"vendor_po",
  vendorPoShow:"vendor_po/vendor_po_show",
  vendorInvVat:"vendor_inv_vat",
  payment:"payment"

};




export const titles = {
  bill_to:'bill_to',
  approver:'approver',
  send_to:'send_to',
  placed_to:'placed_to',
  authority_management:'authority_management',
  requisition:'requisition',
  client:'client',
  personal_information:'personal_information',
  client_po:'client_po',
  client_po_details:'client_po_details',
  billing_plan_list:'billing_plan_list',
  collect_balance: 'collect_balance',
  collect_balance_details:'collect_balance_details',
  invoice_management:'invoice_management',
  invoice_detail:'invoice_detail',
  cpo_invoice:'cpo_invoice',
  VAT_list:'VAT_list',
  vat_balance_details:'vat_balance_details',
  group:'group',
  group_detail:"group_detail",
  tier1:'tier1',
  tier1_detail:"tier1_detail",
  tier2:'tier2',

  tier4:'tier4',
  tier4_detail:"tier4_detail",
  product:'product',
  vendor:"vendor",
  product_details:'product_details',
  jr_cate:'jr_cate',
  vendor_detail_edit:"vendor_detail_edit",
  JR:'JR',
  JR_detail:'JR_detail',

  DAF:"DAF",
  PE:'PE',
  vendorPO:'Vendor_PO',
  vendorInvVat:"vendor_inv_vat",
  payment:'payment'
}


export const search_item = {
  flowStatus:'flowStatus',
  id_like:'id_like',
  'billingPlan.flowStatus':'status',
  'clientPoDetail.description_like':'clientPoDetail.description_like',
  'clientPoDetail.clientPoType':'clientPoDetail.clientPoType',
  'clientPoDetail.sentToId':'clientPoDetail.sentToId',
  'clientPoDetail.billToId':'clientPoDetail.billToId',
  'clientPoDetail.placedToId':'clientPoDetail.placedToId',
  'clientPoDetail.currencyId':'clientPoDetail.currencyId',
  'clientPoDetail.clientId':'clientPoDetail.clientId',
  budgetType:'budgetType',
  budgetType_in:'budgetType_in'
}


export const bill_to_tableField = {
  "id": "id",
  "nameEN": "nameEN",
  "nameCN": "nameCN",
  "phoneNum": "phoneNum",
  "email": "email",
  "country": "country",
  "city": "city",
  "address": "address",
  "postCode": "postCode",
  "description": "description",
  "operation":"operation",
  "status":"status",
}

export const approver_tableField = {
  "id": "id",
  "name": "name",
  "phoneNum": "phoneNum",
  "email": "email",
  "validDate": "validDate",
  "inValidDate": "inValidDate",
  "title": "title",
  "faxNum": "faxNum",
  "remark": "remark"
}


export const send_to_tableField = {
  "id": "id",
  "name": "name",
  "phoneNum": "phoneNum",
  "email": "email",
  "country": "country",
  "city": "city",
  "address": "address",
  "postCode": "postCode",
  "description": "description",
  "operation":"operation",
  "status":"status",
}


export const placed_to_tableField = {
  "id": "id",
  "nameEN": "nameEN",
  "nameCN": "nameCN",
  "logo": "logo",
  "country": "country",
  "city": "city",
  "address": "address",
  "postCode": "postCode",
  "description": "description",
  "operation":"operation",
  bankName:'bankName',
  bankAccount:'bankAccount',
  bankNum:'bankNum',
  swiftCode:'swiftCode',
  "status":"status",
}

export const requisition_tableField = {
  "id": "id",
  "flowStatus": "flowStatus",
  "createdAt": "createdAt",
  "createdUsr": "createdUsr",
  "action": "action",
  "commonId":"commonId"
}


export const client_tableField = {
  "id": "id",
  "flowStatus": "flowStatus",
  "createdAt": "createdAt",
  "version": 'version',
  "code": "code",
  "nameEN": "nameEN",
  "nameCN": "nameCN",
  "location": "location",
  "INVType": "INVType",
  "description": "description",
  "cartesisCode": "cartesisCode",
  "creditTerm": 'creditTerm',
  "contactName": "contactName",
  "title": "title",
  "phoneNum": "phoneNum",
  "email": "email",
  "faxNum": "faxNum",
  approver:'approvers',
  operation:'operation',
  validDate:'validDate',
  brief:'brief',


}

export const message_tableField = {
  readFlag:'readFlag',
  msg:'msg',
  key:'key',
  icon:'icon',
  createdAt:'createdAt'
}

export const personInfo_tableField = {
  "id": "id",
  "name": "name",
  "department": "department",
  "title": "title",
  "mail": "mail",
  "telephoneNumber": "telephoneNumber",
  "signatures": "signatures"
};

export const authority_tableField = {
  "id": "id",
  "name": "name",
  "department": "department",
  "title": "title",
  "mail": "mail",
  "telephoneNumber": "telephoneNumber",
  roles:'roles',
  managerUsr:'managerUsr',
  GADUsr:'GADUsr',

}

export const clientPO_tableField = {
  id:'id',
  version:'version',
  clientPoType:'clientPoType',
  clientDetailId:'clientDetailId',
  clientPoId:'clientPoId',
  billToId:'billToId',
  sentToId:'sentToId',
  placedToId:'placedToId',
  startDate:'startDate',
  endDate:'endDate',
  currencyId:'currencyId',
  excRate:'excRate',
  agencyFee:'agencyFee',
  agencyIncentive:'agencyIncentive',
  productionCost:'productionCost',
  travelCost:'travelCost',
  taxRate:'taxRate',
  tax:'tax',
  amount:'amount',
  creditTerm:'creditTerm',
  description:'description',
  country:'country',
  city:'city',
  postCode:'postCode',
  address:'address',
  validFlag:'validFlag',
  status:'status',
  POFilePath:'POFilePath',
  SowFilePath:'SowFilePath',
  operation:'operation',
  department:'department',
  amountInGross:'agencyIncentiveGross',
  amountFeeGross:'agencyFeeGross',
  clientId:'clientId',
  flowStatus:'flowStatus',
  net:'net',
  gross:'gross',
  year:'year',
  GADUsr:'GADUsr',

}

export const client_location = ['domestic','oversea']
export const client_INVType = ['VAT']
export const clientPO_type = ['Annual-Scope','OOS-Project']
export const currency = ['CNY', 'USD']
export const balanceType = ['VAT','INV']
export const FPCate = ['agencyFee','agencyIncentive','production','travel']
export const FPType = ['common','creditNote','replace']
export const jrCate = ['MainCategory','SubCategory']
export const jrLevel = ['Default','Others']
export const taxRate = ["0.03","0.05","0.11","0.17"]
export const vendorFP_ = ["INV","VAT","Common"]
export const location_ = ['domestic','oversea']




export const billingPL_tableField = {
  id:'id',
  flowStatus:'flowStatus',
  INV_ID:'invoices',
  clientPoId:'clientPoId',
  clientId:'clientId',
  billToId:'billToId',
  description:'description',
  billCategory:'billCategory',
  percentage:'percentage',
  Month:'date',
  currencyId:'currencyId',
  net:'net',
  tax:'tax',
  gross:'gross',
  billType:'billType',
  operation:'操作',
}




export const invoice_tableField = {
  "id": "id",
  "code": "code",
  "INVDate": "INVDate",
  "net": 'net',
  "taxRate": 'taxRate',
  "tax": 'tax',
  "gross": 'gross',
  "collectedAmount": 'collectedAmount',
  "collectedDate": 'collectedDate',
  "dueDate":'dueDate',
  "FPCategory": "FPCategory",
  "description": "description",
  "index": 'index',
  "FPType": "FPType",
  "usedType": "usedType",
  "payDate": 'payDate',
  "country": "country",
  "city": "city",
  "postCode": "postCode",
  "address": "address",
  "filePath": "filePath",
  "status": 'status',
  "flowStatus": "flowStatus",
  "createdAt": "createdAt",
  "updatedAt": "updatedAt",
  "clientPoId": "clientPoId",
  "clientPoDetailId": "clientPoDetailId",
  "billingPlanId": "billingPlanId",
  "approverId": "approverId",
  "invoiceId": 'invoiceId',
  "createdUsr": "createdUsr",
  "updatedUsr": "updatedUsr",
  currencyId:'currencyId',
  clientId:'clientId',
  billToId:'billToId',
  sentToId:'sentToId',
  placedToId:'placedToId',
  serviceDate:'serviceDate',
  overDue:'overDue',
  actualInvoiceDate:'actualInvoiceDate',
}

export const CollectBalance_tableField = {
  id: 'id',
  balanceType: 'balanceType',
  amount: 'amount',
  bankCharge: 'bankCharge',
  Description: 'Description',
  description: 'description',
  currencyId: 'currencyId',
  billToId: 'billToId',
  clientId: 'clientId',
  createdAt:'createdAt',
  updatedAt:'updatedAt',
  clientPoId: 'clientPoId',
  clientPoIdDescription:'clientPoIdDescription',
  gross: 'gross',
  index: 'index',
  flowStatus:'flowStatus'

}


export const cpoInvoice_tableField = {
  "id": "id",
  "clientPoId": "clientPoId",
  "agencyFee": 'agencyFee',
  "agencyIncentive": 'agencyIncentive',
  "currencyId": "currencyId",
  billingPlans:'billingPlans',
  "date": "date",
  "gross": 'gross',
  "flowStatus": "flowStatus",
  "billType": "billType",
}

export const VatBalance_tableINVField={
  clientPoId:'clientPoId',
  clientPoIdDescription:'clientPoIdDescription',
  FPCategory:'FPCategory',
  clientId:'clientId',
  approverId:'approverId',
  currencyId:'currencyId',
  description:'description',
  index:'index',
  id:'id',
  createdAt:'createdAt',
  gross:'gross',
  net:'net',
  tax:'tax',
  operation:'operation',
  flowStatus:'flowStatus'
}

export const VatBalance_tableVATField={
  clientPoId:'clientPoId',
  FPCategory:'FPCategory',
  clientId:'clientId',
  approverId:'approverId',
  currencyId:'currencyId',
  description:'description',
  index:'index',
  id:'id',
  actualInvoiceDate:'actualInvoiceDate',
  gross:'gross',
  net:'net',
  tax:'tax',
  operation:'operation',
  flowStatus:'flowStatus'
}

export const VatBalance_tableAbandonField={
  id:'id',
  FPCategory:'FPCategory',
  clientId:'clientId',
  actualInvoiceDate:'actualInvoiceDate',
  billToId:'billToId',
  dueDate:'dueDate',
  clientPoId:'clientPoId',
  currencyId:'currencyId',
  description:'description',
  net:'net',
  placedToId:'placedToId',
  tax:'tax',
  sentToId:'sentToId',
  gross:'gross',
  approverId:'approverId',
}

export const group_tableField = {
  "id": "id",
  "name": "name",
  "amountNtax": 'amountNtax',
  "budgetAllocated": 'budgetAllocated',
  "restAmount": 'restAmount',
  "balanceStatus": "balanceStatus",
  "startDate": "startDate",
  "description": "description",
  "currencyId": "currencyId",
  "clientId": "clientId",
  clientPos: 'clientPos',
  "open": 'open',
  "amount":"amount"
}

export const tier1_tableField = {
  id             : 'id',
  name           : 'name',
  currencyId     : 'currencyId',
  groupName      : 'groupName',
  groupId        : 'groupId',
  initAmount     : 'initAmount',
  lastMonthAmount: 'lastMonthAmount',
  amount         : 'amount',
  open           : 'open',
  planned        : 'planned',
  committed      : 'committed',
  approverId     : 'approverId',
  description    : 'description',
  operation      : 'operation',
  tier3Id        : 'tier3Id',
}

export const tier4_tableField = {
  id:'id',
  name:'name',
  currencyId:'currencyId',
  groupId:'groupId',
  initAmount:'initAmount',
  lastMonthAmount:'lastMonthAmount',
  amount:'amount',
  open:'open',
  planned:'planned',
  committed:'committed',
  approverId:'approverId',
  description:'description',
  operation:'operation',
  clientPoId:'clientPoId',
  jr:'jr',
  peCode:'peCode',
  tier3Id:'tier3Id',

}




export const tier2_tableField = {
  "id": "id",
  "name": "name",
  "version": "version",
  "validFlag": "validFlag",
  "amount": 'amount',
  "budgetAllocated": 'budgetAllocated',
  "restAmount": 'restAmount',
  "description": "description",
  "balanceStatus": "balanceStatus",
  "groupId": "groupId",
  "tier1Id": "tier1Id",
  "approverId": "approverId",
  "main": 'main',
  "tier3s":'tier3s',
  operation:"operation",
  committed:'committed',
  planned:'planned',
  open:'open',
  tier3Id:'tier3Id',
  tier3Name:'tier3Name',
  tier4Name:'tier4Name',
  tier2Rest:'tier2Rest',
  tier3Rest:'tier3Rest',
  tier4Rest:'tier4Rest',
  cpo:'cpo',
  esti:'estimate',
  flowStatus:'flowStatus',
  currencyId:'currencyId',

}

export const vendor_tableField = {
  operation:"operation",
  "id"            : "id",
  "flowStatus"    : "flowStatus",
  "status"        : "status",
  "nameEN"        : "nameEN",
  "nameCN"        : "nameCN",
  "code"          : "code",
  "cartesisCode"      : "cartesisCode",
  validDate       : 'validDate',
  vendorType      : "vendorType",
  taxRate         : "taxRate",
  natureOfBusiness: "natureOfBusiness",
  expectedValue   : "expectedValue",
  referral        : "referral",
  addressEN       : "addressEN",
  addressCN       : "addressCN",
  contactPerson   : "contactPerson",
  title           : "title",
  telephone       : "telephone",
  fax             : "fax",
  email           : "email",
}

export const vendorDetail_tableField = {
  "id"            : "id",
  "flowStatus"    : "flowStatus",
  "status"        : "status",
  "nameEN"        : "nameEN",
  "nameCN"        : "nameCN",
  "code"          : "code",
  "cartesisCode"  : "cartesisCode",
  validDate       : 'validDate',
  vendorType      : "vendorType",
  taxRate         : "taxRate",
  referral        : "referral",
  addressEN       : "addressEN",
  addressCN       : "addressCN",
  contactPerson   : "contactPerson",
  title           : "title",
  telephone       : "telephone",
  fax             : "fax",
  email           : "email",
  location        : "location",
  vendorFP        : "vendorFP",

  natureOfBusiness: "natureOfBusiness",
  currencyId      : "currencyId",
  expectedValue   : "expectedValue",
  referral        : "referral",

  companyName     : "companyName",
  bankName        : "bankName",
  bankAddress     : "bankAddress",
  accountNum      : "accountNum",
  accountAddress  : "accountAddress",
  swiftCode       : "swiftCode",

  visitDate       : "visitDate",
  visitor         : "visitor",
  visitResult     : "visitResult",
  visitFilePath   : "visitFilePath",
  capabilities    : "capabilities",
  conflictName    : "conflictName",
  conflictTitle   : "conflictTitle",
  relation        : "relation",
  vendorCity      : "vendorCity",
  officeInChina   : "officeInChina",
  officeOutChina  : "officeOutChina",

  COBC            : "COBC",
  BHD             : "BHD",
  NDA             : "NDA",
  BL              : "BL",
  AL              : "AL",

  remark:"remark",
}
export const product_tableField = {
  "id": "id",
  "version": 'version',
  "validDate": "validDate",
  "validFlag": "validFlag",
  "name": "name",
  "code": 'code',
  "productId": "productId",
  "currencyId": "currencyId",
  product:'product',
  flowStatus:'flowStatus',
  clientId:'clientId',
  contactName:'contactName',
  title:'title',
  phoneNum:'phoneNum',
  email:'email',
  faxNum:'faxNum',
  clientDetailId:'clientDetailId',

}



export const jr_tableField = {
  "id": "id",
  "JRTypeCategory": "JRTypeCategory",
  "JRTypeLevel": "JRTypeLevel"
}


// vendor Type 供应商类别
exports.vendorType = {
  Freelancer: 'Freelancer', // 自由职业者
  NonRegularVendor: 'NonRegularVendor', // 不常用/一次性的供应商
  RegularVendor: 'RegularVendor', // 正式的供应商
  ContractVendor: 'ContractVendor', // 签订合同的供应商
  TaxBureau: 'TaxBureau', // 国家税务局
}

// vendor Type 供应商类别
exports.vendorTypeArr = [
  "Freelancer",
  "NonRegularVendor",
  "RegularVendor",
  "ContractVendor",
  "TaxBureau"
]

export const JR_tableField = {
  "id": "id",
  "receivedDate": "receivedDate",
  "description":   "description",
  "brief": "brief",
  "net": "net",
  "tax": "tax",
  "gross": "gross",
  "purchaseType": "purchaseType",
  "remark": "remark",
  "productId": "productId",
  "projectId": "projectId",
  "clientDetailId": "clientDetailId",
  "GADUsr": "GADUsr",
  "currencyId": "currencyId",
  "JR_VendorDetails":"JR_VendorDetails",
  "JRTypes": "JRTypes",
  "operation": "operation",
  "clientCode":"clientCode",
  "productCode":"productCode",
  "DAFId":"DAFId",
  vendor:"vendor",
  vendorCode:'vendorCode',
  vendorNet:'vendorNet',
  vendorGross:'vendorGross',
  PETax:'PETax',
  PEGross:'PEGross',
  File:'File',
  vendorDetailId:'vendorDetailId',
  flowStatus:'flowStatus',
  flowType:'flowType',
  createdUsr:'createdUsr',
  projectDesc:'projectDesc',
  vendor_s:"vendor_s",
  vendor_s_net:'vendor_s_net',
  vendor_s_tax:'vendor_s_tax',
  vendor_s_gross:'vendor_s_gross',
  vendor_b:"vendor_b",
  vendor_b_net:'vendor_b_net',
  vendor_b_tax:'vendor_b_tax',
  vendor_b_gross:'vendor_b_gross',
  clientId:'clientId',
  clientPoId:'clientPoId',
  DAFs:'DAFs'
}

export const DAF_tableField = {
  "id": "id",
  "name": "name",
  "date":   "date",
  "purchaseType": "purchaseType",
  "client": "client",
  "projectName": "projectName",
  "description": "description",
  "buyer": "buyer",
  "team": "team",
  "vendor": "vendor",
  "currencyId": "currencyId",
  "rationale": "rationale",
  "budget": "budget",
  "service":"service",
}


export const WHT = {
  invAmount:'invAmount',
  taxBear:'taxBear',
  "vatIn": "vatIn",
  "surtax": "surtax",
  "incTax": "incTax",
  "total": "total",
  WHTex:'WHTex',
  taxableAmount:'taxableAmount'
}

export const DAFDetail_tableField = {
  "id"            : "id",
  "name"          : "name",
  "date"          : "date",
  "purchaseType"  : "purchaseType",
  "clientDetailId": "clientDetailId",
  "projectName"   : "projectName",
  "description"   : "description",
  "vendorDetailId": "vendorDetailId",
  "GADUsr"        : "GADUsr",
  // "team"       : "team",
  "currencyId"    : "currencyId",
  "budget"        : "budget",
  "isWPP"         : "isWPP",
  "service"       : "service",
  "reasonIndexs"      : "reasonIndexs",
  "rationale"     : "rationale",
}

exports.purchaseTypeArr = [
  {title:"Direct Award",value:"directAward"},
  {title:"Non Lowest Bid",value:"nonLowBid"}
]



export const PE_tableField = {
  status:'status',
  peCode:'peCode',
  description:'description',
  client:'client',
  product:'product',
  cpo:'cpo',
  gad:'gad',
  contact:'contact',
  currency:'currency',
  net:'net',
  tax:'tax',
  gross:'gross',
  percentage:'percentage',
  ar:'ar',
  ap:'ap'
}

export const vendorPO_tableField = {
  "id"         : "id",
  "flowStatus" : "flowStatus",
  "code"       : "code",
  "description": "description",
  "vendorId"   : "vendorId",
  "placedToId" : "placedToId",
  "PEId"       : "PEId",
  "clientId"   : "clientId",
  "clientPoId" : "clientPoId",
  "currencyId" : "currencyId",
  "net"        : "net",
  "invId"      : "invId",

  operation    : "operation",
  num:"num",
  vatId        : "vatId",
  taxRate      : "taxRate",
  tax          : "tax",
  gross        : "gross",
  INVDate   : "INVDate",
  enterDate    : "enterDate",
  expectedDate : "expectedDate",
  remark       : "remark",
  vendorAddress:"vendorAddress",
  address:"address",

}
export const vendorINV_tableField = {
  INVDate     : "INVDate",
  num         : "num",
  vpoCode     : "vpoCode",
  id          : "id",
  taxRate     : "taxRate",
  net         : "net",
  tax         : "tax",
  gross       : "gross",
  PECode      : "PECode",
  vendorCode  : "vendorCode",
  vendorName  : "vendorName",
  enterDate   : "enterDate",
  expectedDate: "expectedDate",
  payDate     : "payDate",
  paidAmount  : "paidAmount",
  balance     : "balance",
  remark      : "remark",
  operation   : "operation",
  paymentNum  : "paymentNum",
  bankName    : "bankName",
  filePath    : "filePath",
}


