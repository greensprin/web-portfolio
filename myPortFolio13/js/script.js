$(function() {
  // headerの高さを決める //
  // 初回のheader高さを決定
  $("header").css("height", $(window).height());
  $("header").css("width", $(window).width());
  // リサイズされたときのheaderの高さを決定
  $(window).resize(function() {
    $("header").css("height", $(window).height());
    $("header").css("width", $(window).width());
  });

  // 一番上に移動する
  $(".goto-top").on("click", function() {
    $("html, body").animate({scrollTop:0});
    // $("html, body").animate({scrollTop:$("").offset().top});
  });

  $("header").bgSwitcher({
    images: ["img/main_visual_111-0x0.jpg", "img/main_visual_13-0x0.jpg", "img/main_visual_7-0x0.jpg", "img/main_visual_6-0x0.jpg", "img/main_visual_2-0x0.jpg"],
    // Interval: 5000,
    // start: true,
    // loop: true,
    // shuffle: false,
    // effect: "fade",
    // duration: 1000,
    // easing: "swing",
  });

  $(".hbg-menu").on("click", function() {
    if ($(".hbg-menu").hasClass("show") === true) {
      $("header .content-right ul").slideUp();
    } else {
      $("header .content-right ul").slideDown();
    }
    $(".hbg-menu").toggleClass("show");
  })
})