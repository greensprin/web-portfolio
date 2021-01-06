$(function() {
  // headerのサイズ(px)
  // var header_size = 80;
  var header_size = $("header .container").height() + 10;

  // 各要素の場所に移動
  // worksへ移動
  $("header .li-works").on("click", function() {
    // 移動先の要素の座標を取得
    var pos = $("#works").offset().top - header_size;
    $("html, body").animate({scrollTop:pos});
  });

  // skillsへ移動
  $("header .li-skills").on("click", function() {
    // 移動先の要素の座標を取得
    var pos = $("#skills").offset().top - header_size;
    $("html, body").animate({scrollTop:pos});
  });

  // contactへ移動
  $("header .li-contact").on("click", function() {
    // 移動先の要素の座標を取得
    var pos = $("#contact").offset().top - header_size;
    $("html, body").animate({scrollTop:pos});
  });

  // ある程度スクロールしたら最上位へ移動するボタン表示
  // 現在のスクロール位置取得
  $(window).scroll(function() {
    var culScrollPos = $(window).scrollTop();
    // console.log(culScrollPos);
    if (culScrollPos > 100) {
      $(".goto-top").slideDown();
    } else {
      $(".goto-top").slideUp();
    }
  })

  $(".goto-top").on("click", function() {
    // ページ先頭に移動
    $("html, body").animate({scrollTop:0});
  });

  // barをクリックしたら、navを表示する
  $(".fa-bars").on("click", function() {
    $("#header-nav").slideDown();
  })

  // 最初の画面サイズでnavにクラス追加する
  if ($(window).width() <= 767) { // smartphoneサイズの挙動
    $(".hlist-items").addClass("drop-nav");
  } else { // PCサイズの挙動
    $(".hlist-items").removeClass("drop-nav");
  }

  $(".hlist-items").on("click", function() {
    if ($(window).width() <= 787) {
      $("#header-nav").slideUp();
    }
  })

  // 画面更新があったときの挙動
  $(window).resize(function() {
    // headerのサイズを再定義
    header_size = $("header .container").height() + 10;

    if ($(window).width() <= 767) { // smartphoneサイズの挙動
    } else { // PCサイズの挙動
      $("#header-nav").slideDown();
    }
  })
})