$(function () {
  $("dt").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("on");
    $(this).siblings("dt").removeClass("on");
    $(this).next().siblings("dd").slideUp();
    $(this).siblings("dt").removeClass("on");
  });
});
