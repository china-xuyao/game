
/*
**grid插件**
$(".table").grid({
"title": ["a","b"],
columnDefs: [
			{ name: '用户名', field: 'a' ,display: true},
			{ name: '姓名', field: 'b',display: false}
		],
"data": [{'a':'123','b':125778},{'a':'123','b':125778}]
})
*/
(function ($) {

  var grid = function (el, obj) {
    this.el = el;
    this.options = obj;
    this.init();
    return this;
  }

  grid.prototype.init = function () {
    // alert(this.data);
    this.initTitle();
    this.initRow(this.options.data);
    this.column();
  }

  grid.prototype.bind = function (ruleOne) {
    // ruleOne.el.find(".glyphicon-align-justify").click(this.options.parName+".columnManage.open()");
  }

  grid.prototype.initTitle = function () {
    var theadEle = this.el.children("thead");

    if (theadEle && theadEle.length == 0) {
      var thead = document.createElement("thead");
      theadEle = this.el.prepend(thead).children("thead");
    } else {
      theadEle.html("");
    }

    if (this.options.titleTemplate) {
      theadEle.append(this.options.titleTemplate(title[index]));
    } else {
      debugger;
      var tr = "<tr>";
      var title = this.options.columnDefs;
      for (var index in title) {
        if (title[index]["display"]) {
          tr += "<th>" + title[index]["name"] + "</th>";
        }
      }
      tr += "<th style='width: 1rem;'><span id='grid_column' onclick='"+this.options.parName+".options.columnManage.open()' class='glyphicon glyphicon-align-justify' style='font-size: 1.3rem; color: #d23c3c;' aria-hidden='true'></span></th>";
      tr += "</tr>";
      theadEle.append(tr);
    }
  }
  // Object.keys(person)
  grid.prototype.initRow = function (rows) {
    var tbodyEle = this.el.children("tbody");
    if (tbodyEle && tbodyEle.length == 0) {
      var tbody = document.createElement("tbody");
      tbodyEle = this.el.append(tbody).children("tbody");
    } else {
      tbodyEle.html("");
    }

    if (rows.length > 0) {
      for (var i in rows) {
        var row = rows[i];
        if (this.options.rowTemplate) {
          tbodyEle.append(this.options.rowTemplate(row, this.options.columnDefs));
        } else {
          var tr = "<tr>",
            title = this.options.columnDefs;
          for (var index in title) {
            if (title[index]["display"]) {
              tr += "<td>" + (row[title[index]["field"]] ? row[title[index]["field"]] : "") + "</td>";
            }
          }
          tr += "<th><span class='glyphicon glyphicon-cog' aria-hidden='true' style='font-size: 1.3rem; color: #d23c3c;'></span></th>";
          // <span class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span>
          tr += "</tr>";
          tbodyEle.append(tr);
        }
      }
    } 
  }

  grid.prototype.column = function () {
    var context = `<div class="row context">`,
      columns = this.options.columnDefs;
    for (var index in columns) {
      context += '<div class="col-xs-12 col-md-12"><label class="checkbox-inline" click="'+this.options.parName+'.alert()"><input type="checkbox" ';
      context += (columns[index].display?' checked="checked" ':"") + ' /><span class="context-title">';
      context += columns[index].name + '</span></label></div>';
    }  
    context+="</div>";
    // context += ;
    this.options.columnManage = $("#myModal").modelExtend({
      title: "设置显示列",//标题名称
      context: context,//上下文
      isShowSaveBtn: false,//显示保存按钮
      saveBtnName: "save",//保存按钮名称
      isShowCloseBtn : false,//显示关闭按钮
      closeBtnName: "close"//关闭按钮名称
    });
  }

  $.fn.grid = function (obj) {
      return new grid(this, obj);
  }

})(jQuery);


/*
**model插件,相关参数如下**
$.fn.modelExtend({
      title: "model",//标题名称
      context: "...",//上下文
      isShowSaveBtn: false,//显示保存按钮
      saveBtnName: "save",//保存按钮名称
      isShowCloseBtn : false,//显示关闭按钮
      closeBtnName: "close"//关闭按钮名称
})
*/
(function ($) {

  var modelExtend = function (el, options) {
    this.el = el;
    this.options = options;
  }

  modelExtend.prototype.open = function () {
    if (!this.options.isShowSaveBtn) {
      this.el.find("#model_save_btn").hide();
    } 
    if (!this.options.isShowCloseBtn) {
      this.el.find("#model_close_btn").hide();
    } 
    if (this.options.context) this.setContext(this.options.context);
    if (this.options.title) this.setTitle(this.options.title);
    if (this.options.closeBtnName) this.setCloseBtn(this.options.closeBtnName);
    if (this.options.saveBtnName) this.setSaveBtn(this.options.saveBtnName);
    this.el.modal('show');
  }

  modelExtend.prototype.close = function () {
    this.el.modal('hide');
  }


  modelExtend.prototype.setTitle = function (title) {
    this.el.find("#myModalLabel").html(title);
  }

  modelExtend.prototype.setContext = function (body) {
    this.el.find(".modal-body").html(body);
  }

  modelExtend.prototype.setCloseBtn = function (name) {
    this.el.find("#model_close_btn").html(name);
  }

  modelExtend.prototype.setSaveBtn = function (name) {
    this.el.find("#model_save_btn").html(name);
  }

  $.fn.modelExtend = function (obj) {
    return new modelExtend(this, obj);
  }

})(jQuery);

//手机端窗口化
(function ($) {
  var panelBodyDisplay = function () {
    var handEle = $(this),
      animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    if (handEle.hasClass("panel-heading-up")) {
        handEle.removeClass("panel-heading-up").addClass("panel-heading-down  animated bounceIn").one(animationEnd, function() {
            $(this).removeClass('animated bounceIn');
        });
        handEle.children().addClass("glyphicon-chevron-down").removeClass("glyphicon-chevron-up");
        handEle.parent().parent().find(".panel-body-up").addClass("panel-body-down animated fadeInRight").removeClass("panel-body-up");
    } else {
        handEle.removeClass("panel-heading-down").addClass("panel-heading-up animated bounceIn").one(animationEnd, function() {
            $(this).removeClass('animated bounceIn');
        });
        handEle.children().addClass("glyphicon-chevron-up").removeClass("glyphicon-chevron-down");
        handEle.parent().parent().find(".panel-body-down").addClass("panel-body-up animated fadeInRight").removeClass("panel-body-down");
    }
    $('body').scrollTop($(this).offset().top-80);
  }
  $(".panel-heading-down").bind("click", panelBodyDisplay);
  $(".panel-heading-up").bind("click", panelBodyDisplay);


  
  $(":text").keyup(function (element) {
    var root = $(this),
      title = root.attr("placeholder"),
      id = root.attr("id"),
      titleId = id + "title",
      model = '<div id="' + titleId + '" class="input-text-title animated bounce">' + title + '</div>',
      val = root.val();
    if (val == null || val == "") {

    } else {
      if (!document.getElementById(titleId)) {
        root.before(model);
      }
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
})(jQuery);