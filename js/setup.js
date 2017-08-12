  var ruleOne = $("#ruleOne").grid({
    columnDefs: [
      { name: 'ID', field: 'a', display: true },
      { name: '昵称', field: 'b', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "ruleOne"
  });

  var ruleTree = $("#ruleTree").grid({
    columnDefs: [
      { name: '编码', field: 'a', display: false },
      { name: '昵称', field: 'b', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }
    ],
    "parName": "ruleTree"
  });