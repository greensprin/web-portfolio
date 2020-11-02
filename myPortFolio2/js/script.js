$(function() {
  function modal_fadeOut() {
    $(".bars span").removeClass("fa-times")
    $(".bars span").addClass("fa-bars")
    $(".top-modal").fadeOut();
  }

  $(".bars").click(function() {
    if ($(".bars span").hasClass("fa-bars")) {
      $(".bars span").removeClass("fa-bars")
      $(".bars span").addClass("fa-times")
      $(".top-modal").fadeIn();
    } else {
      modal_fadeOut();
    }
  })

  $(".top-modal").click(function() {
    modal_fadeOut();
  })

  $(".modal-menu").hover(
    function() {
      $(this).find("p").css("text-decoration", "underline")
    },
    function() {
      $(this).find("p").css("text-decoration", "none")
    }
  )
})