$(function() {
  // headerの高さを決める //
  // 初回のheader高さを決定
  $("header").css("height", $(window).height());
  // リサイズされたときのheaderの高さを決定
  $(window).resize(function() {
    $("header").css("height", $(window).height());
  })
})