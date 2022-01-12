$(function () {
  $(".tab li h2").siblings().hide();
  $(".tab li h2").on("click", function () {
    $(this).addClass("open");
    $(this).parent().siblings().children("h2").removeClass("open");
    $(this).next().show();
    $(this).parent().siblings().children("p").hide();
  });
});
