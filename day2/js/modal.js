$(function () {
  $("#imgwrap img").on("click", function () {
    let modal_box = $(this).attr("src");
    $("#modal_bg").show();
    $("#modal_bg img").attr({ src: modal_box });
    $("#modal_bg").click(function () {
      $("#modal_bg").hide();
    });
  });
});
