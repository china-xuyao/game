(function () {
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