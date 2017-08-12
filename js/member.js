
  var ruleOne = $("#ruleOne").grid({
    columnDefs: [
      { name: 'ID', field: 'a', display: true },
      { name: '昵称', field: 'b', display: true },
      { name: '积分', field: 'b', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "ruleOne"
  });

  var ruleTree = $("#ruleTree").grid({
    columnDefs: [
      { name: '编码', field: 'a', display: false },
      { name: '昵称', field: 'b', display: true },
      { name: '现分数', field: 'b', display: true },
      { name: '上下分', field: 'b', display: true },
      { name: '本局输赢', field: 'b', display: true },
      { name: '总分数', field: 'b', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }
    ],
    "parName": "ruleTree"
  });

  var bankerRecord = $("#bankerRecord").grid({
    columnDefs: [
      { name: '编号', field: 'a', display: false },
      { name: '庄家昵称', field: 'b', display: true },
      { name: '庄上金额', field: 'c', display: true },
      { name: '庄家本局', field: 'd', display: true },
      { name: '庄总余额', field: 'e', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "bankerRecord"
  });

  var remark = $("#remark").grid({
    columnDefs: [
      { name: '编码', field: 'a', display: true },
      { name: '备注', field: 'b', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "remark"
  });  
  