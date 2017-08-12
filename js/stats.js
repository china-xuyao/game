
  var financialStats = $("#financialStats").grid({
    columnDefs: [
      { name: '期号', field: 'a', display: true },
      { name: '庄家', field: 'b', display: true },
      { name: '财务费用', field: 'b', display: true },
      { name: '庄上抽水', field: 'b', display: true },
      { name: '上庄抽水', field: 'b', display: true },
      { name: '续庄抽水', field: 'b', display: true },
      { name: '包费', field: 'b', display: true },
      { name: '人头费', field: 'b', display: true },
      { name: '本局暗扣', field: 'b', display: true },
      { name: '总计', field: 'b', display: true },
      { name: '备注', field: 'b', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "financialStats"
  });

  var palyerStats = $("#palyerStats").grid({
    columnDefs: [
      { name: '序号', field: 'a', display: false },
      { name: '玩家名称', field: 'b', display: true },
      { name: '押注次数', field: 'c', display: true },
      { name: '押注积分', field: 'd', display: true },
      { name: '盈亏统计', field: 'e', display: true },
      { name: '上分', field: 'f', display: true },
      { name: '下分', field: 'g', display: true },
      { name: '上下分合计', field: 'h', display: true },
      { name: '当前积分', field: 'y', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }, 
    { 'a': '123', 'b': 125778 }
    ],
    "parName": "palyerStats"
  });
