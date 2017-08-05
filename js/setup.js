(function () {
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
  $('[data-toggle="tooltip"]').tooltip()
} ())

(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 640) {
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
