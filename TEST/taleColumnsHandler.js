const tableColumns = [
  { label: "ID", prop: "id" },
  { label: "用户名称", prop: "userName" },
  { label: "退费订单号", prop: "orderNum" },
  { label: "退费套餐", prop: "refundMeal" },
  { label: "退费课时", prop: "refundHours" },
  { label: "应退费金额", prop: "shouldRefundMoney" },
  { label: "实际退费", prop: "actualRefundMoney" },
  { label: "申请时间", prop: "refundApplyTime" },
  { label: "申请人", prop: "refundApplyAdminUserName" },
  { label: "退费方式", prop: "refundMode" },
  { label: "退费时间", prop: "refundTime" },
  { label: "操作人", prop: "refundOperator" }
];

function tableColumnsHandler(source, config = {}, appendData = {}) {
  if (!Array.isArray(source)) {
    return;
  }

  let result = {};

  const hashMap = source.reduce(
    (hashMap, item) => ({ ...hashMap, [item.prop]: item }),
    {}
  );

  for (const key in hashMap) {
    if (hashMap.hasOwnProperty(key)) {
      if (key in config) {
        result[key] = { ...hashMap[key], ...config[key] };
      } else {
        result[key] = hashMap[key];
      }
    }
  }

  if (Array.isArray(appendData.prefix) && appendData.prefix.length > 0){

  }
  if (Array.isArray(appendData.prefix) && appendData.prefix.length > 0){
      
}
    return Object.values(result);
}

let result = tableColumnsHandler(
  tableColumns,
  {
    id: { width: 150 },
    AAA: { width: 150 },
    BBB: { width: 150 },
    CCC: { width: 150 }
  },
  {
    prefix: [],
    suffix: []
  }
);

console.log(result);
