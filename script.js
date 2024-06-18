$(document).ready(function () {
  $("#dropdown").click(function () {
    $(".moldel").slideToggle("fast");
  });

  $(".list-item").click(function () {
    $(".list-item").removeClass("active");
    $(this).addClass("active");
  });

  $("#btn").click(function () {
    $(".ul-list").toggle();
  });

  $(window)
    .resize(function () {
      if ($(window).width() > 768) {
        $(".ul-list").show();
        $("#btn").hide();
      } else {
        $(".ul-list").hide();
        $("#btn").show();
      }
    })
    .resize();
});
