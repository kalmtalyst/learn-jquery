$(function () {
  let midV = $(".section").height() / 2 - $("#navi").height() / 2;
  $("#navi").css({ top: midV });

  $(window).on("scroll", function () {
    let currentScroll = $(this).scrollTop();
    $("#navi")
      .stop()
      .animate({ top: currentScroll + midV }, 650);
  });

  // navi 클릭, 해당 section으로 이동
  $("#navi li").on("click", function () {
    let index = $(this).index();
    let position = $(".section").eq(index).position().top;
    $("html, body").animate({ scrollTop: position });
  });
});
