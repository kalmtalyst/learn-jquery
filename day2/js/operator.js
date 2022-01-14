$(function () {
  $("#dec").on("click", function () {
    // 현재 값을 가지고 증감!
    let current = $("#num").text();
    if (current <= 1 && current > 0) {
      $("#num").text(current - 1);
    } else {
      current = 0;
    }
  });
  $("#inc").on("click", function () {
    let current = $("#num").text();
    if (current >= 0) {
      current++;
    }
    $("#num").text(current);
  });
});
