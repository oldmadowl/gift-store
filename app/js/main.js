$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
    $(this).toggleClass('active');
  });

});