  var jackpot_table = $("#jackpot_table").grid({
    columnDefs: [
      { name: '编号', field: 'a', display: false },
      { name: '庄闲', field: 'b', display: true },
      { name: '范围', field: 'c', display: true },
      { name: '点数', field: 'd', display: true },
      { name: '奖励', field: 'e', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "jackpot_table"
  });
  var winPrizeInfo = $("#winPrizeInfo").grid({
    columnDefs: [
      { name: '编号', field: 'a', display: false },
      { name: '玩家', field: 'b', display: true },
      { name: '中奖金额', field: 'c', display: true },
      { name: '中奖点数', field: 'd', display: true },
      { name: '期号', field: 'e', display: true },
      { name: '时间', field: 'e', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "winPrizeInfo"
  });

