
  var awardList = $("#awardList").grid({
    columnDefs: [
      { name: '序号', field: 'a', display: false },
      { name: '棋牌', field: 'b', display: true },
      { name: '累积分', field: 'c', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "awardList"
  });
  
  var playerAwardIntegral = $("#playerAwardIntegral").grid({
    columnDefs: [
      { name: '序号', field: 'a', display: false },
      { name: '玩家昵称', field: 'b', display: true },
      { name: '累计奖励', field: 'c', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "playerAwardIntegral"
  });
  
  var redeem = $("#redeem").grid({
    columnDefs: [
      { name: '序号', field: 'a', display: false },
      { name: '玩家昵称', field: 'b', display: true },
      { name: '兑奖积分', field: 'c', display: true },
      { name: '兑奖时间', field: 'd', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "redeem"
  });
  
  var playerAwardIntegralDetail = $("#playerAwardIntegralDetail").grid({
    columnDefs: [
      { name: '序号', field: 'a', display: false },
      { name: '玩家昵称', field: 'b', display: true },
      { name: '棋牌', field: 'c', display: true },
      { name: '奖励积分', field: 'd', display: true },
      { name: '奖励时间', field: 'd', display: true }
    ],
    "data": [{ 'a': '123', 'b': 125778 }, { 'a': '123', 'b': 125778 }],
    "parName": "playerAwardIntegralDetail"
  });