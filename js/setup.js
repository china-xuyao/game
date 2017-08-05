(function () {
 
  window.onresize = function () {
    var offWidth = window.screen.width / 30; //这里用宽度/30表示1rem取得的px
    document.getElementsByTagName("html")[0].style.fontSize = offWidth + 'px'; //把rem的值复制给顶级标签html的font-size
  }
  window.onresize();
  //浮动标题
  $(":text").keyup(function (element) {
    var root = $(this),
      title = root.attr("placeholder"),
      id = root.attr("id"),
      titleId = id+"title",
      model = '<div id="'+titleId+'" class="input-text-title animated bounce">'+title+'</div>',
      val = root.val();
    if (val == null || val == "") {
      
    } else {
      if (!document.getElementById(titleId)) {
        root.after(model);
      }
    }
    
    

  });
  $('[data-toggle="tooltip"]').tooltip()
} ())