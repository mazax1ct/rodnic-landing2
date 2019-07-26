//компенсация высоты окна при скрытии адресной строки для мобильных
window.onresize = function(){
  document.body.height = window.innerHeight;
};

window.onresize();

//открытие/закрытие главного меню
$(".js-menu-opener").click(function() {
  $(this).toggleClass("is-active");
  $(".main-menu").toggleClass("is-open");
  $("body").toggleClass("overflow");
  return false;
});

//открытие формы
$(".js-form-opener").click(function() {
  $(".form-bg").addClass("is-open");
  $("body").addClass("overflow");
  return false;
});

//закрытие формы
$(".js-form-closer").click(function() {
  $(".form-bg").removeClass("is-open");
  $("body").removeClass("overflow");
  return false;
});

$(".js-smooth-scroll").click(function() {
  if($("body").width() < 767) {
    $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500);
  } else {
    $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  }
  $(".main-menu").removeClass("is-open");
  $(".menu-opener").removeClass("is-active");
  $("body").removeClass("overflow");
  return false;
});

$(document).ready(function () {

});
