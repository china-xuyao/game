
  var ruleOne = $("#ruleOne").grid({
    columnDefs: [
      { name: 'ID', field: 'a', display: true },
      { name: '昵称', field: 'b', display: true },
      { name: '积分', field: 'c', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 , 'c': 125778 }, { 'a': '123', 'b': 125778 , 'c': 125778 }],
    "parName": "ruleOne"
  });

  var ruleTree = $("#ruleTree").grid({
    columnDefs: [
      { name: '用户名', field: 'a', display: true },
      { name: '姓名', field: 'b', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "ruleTree"
  });

