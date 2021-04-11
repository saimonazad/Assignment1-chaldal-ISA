$(document).ready(function () {
  $("#mobileNav-toggle").click(function () {
    $("#mobileNav-toggle").toggleClass("opened");
    $("#mobile-menu").toggleClass("show");
  });

  $("nav .text-menu a").click(function () {
    $(".text-menu").toggleClass("menu-appear");
  });
});
