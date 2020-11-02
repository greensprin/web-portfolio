$(function() {
  $(".home-menu").hover(
    function() {
      $(".menu-bar-1").not(":animated").slideDown();
    },
    function() {
      $(".menu-bar-1").not(":animated").slideUp();
    }
  )
})